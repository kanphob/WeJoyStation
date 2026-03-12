#!/usr/bin/env python3
"""
rpgmaker_asset_renamer.py

Rename RPG Maker MV/MZ image assets by appending a suffix (default: _B)
and patch common JSON/plugin references to those filenames.

Safe goals:
- rename files on disk
- patch known filename fields in data/*.json
- patch exact-match strings in js/plugins.js parameters
- avoid blindly replacing normal dialogue text

Usage:
    python rpgmaker_asset_renamer.py "/path/to/ProjectB" --preview
    python rpgmaker_asset_renamer.py "/path/to/ProjectB" --apply --backup
    python rpgmaker_asset_renamer.py "/path/to/ProjectB" --apply --suffix "_Imported" 

Notes:
- RPG Maker usually stores image names WITHOUT extensions.
- This script targets common MV/MZ structures, but custom plugins may still
  need manual fixes.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import shutil
from copy import deepcopy
from pathlib import Path
from typing import Any

IMAGE_DIRS = [
    "img/animations",
    "img/battlebacks1",
    "img/battlebacks2",
    "img/characters",
    "img/enemies",
    "img/faces",
    "img/parallaxes",
    "img/pictures",
    "img/sv_actors",
    "img/sv_enemies",
    "img/system",
    "img/tilesets",
    "img/titles1",
    "img/titles2",
]

VALID_EXTS = {".png", ".jpg", ".jpeg", ".webp"}

# Known JSON keys that usually store RPG Maker image names without extension.
TARGET_KEYS = {
    "characterName",
    "faceName",
    "battlerName",
    "parallaxName",
    "battleback1Name",
    "battleback2Name",
    "animation1Name",
    "animation2Name",
    "airshipName",
    "shipName",
    "boatName",
    "title1Name",
    "title2Name",
    "enemyBattlerName",   # plugin/custom
    "actorBattlerName",   # plugin/custom
    "bitmap",             # custom/plugin sometimes
    "imageName",          # custom/plugin sometimes
}

# Keys that contain arrays of image filenames.
TARGET_ARRAY_KEYS = {
    "tilesetNames",
}

# Event command codes in MV/MZ that often include image filenames in parameters.
# We patch only specific command shapes we know are safe.
# 231 Show Picture: parameters[1] = picture name
# 322 Change Actor Images: parameters[1]=characterName, [3]=faceName, [5]=battlerName
# 283 Change Battle Back: parameters[0]=bb1, [1]=bb2
# 284 Change Parallax: parameters[0]=parallaxName
EVENT_CODE_PATCHERS = {231, 283, 284, 322}


def load_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8-sig") as f:
        return json.load(f)


def save_json(path: Path, data: Any) -> None:
    with path.open("w", encoding="utf-8", newline="\n") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def make_backup(root: Path) -> Path:
    backup_dir = root.parent / f"{root.name}_backup_before_asset_rename"
    if backup_dir.exists():
        raise FileExistsError(f"Backup directory already exists: {backup_dir}")
    shutil.copytree(root, backup_dir)
    return backup_dir


def build_rename_map(project_root: Path, suffix: str) -> dict[str, str]:
    """
    Returns mapping of basename-without-extension -> renamed basename-without-extension
    for image files found in known image folders.
    """
    rename_map: dict[str, str] = {}
    for rel_dir in IMAGE_DIRS:
        folder = project_root / rel_dir
        if not folder.exists():
            continue
        for path in folder.rglob("*"):
            if not path.is_file():
                continue
            if path.suffix.lower() not in VALID_EXTS:
                continue
            old_base = path.stem
            # Avoid double suffixing
            if old_base.endswith(suffix):
                continue
            new_base = f"{old_base}{suffix}"
            rename_map[old_base] = new_base
    return rename_map


def rename_files(project_root: Path, suffix: str, preview: bool) -> list[tuple[Path, Path]]:
    operations: list[tuple[Path, Path]] = []
    for rel_dir in IMAGE_DIRS:
        folder = project_root / rel_dir
        if not folder.exists():
            continue
        for path in folder.rglob("*"):
            if not path.is_file():
                continue
            if path.suffix.lower() not in VALID_EXTS:
                continue
            if path.stem.endswith(suffix):
                continue
            new_path = path.with_name(f"{path.stem}{suffix}{path.suffix}")
            operations.append((path, new_path))

    # Rename longest names first is not necessary here because only suffixing.
    for old_path, new_path in operations:
        if preview:
            continue
        if new_path.exists():
            raise FileExistsError(f"Target file already exists: {new_path}")
        old_path.rename(new_path)
    return operations


def patch_string_if_exact(value: Any, rename_map: dict[str, str]) -> Any:
    if isinstance(value, str) and value in rename_map:
        return rename_map[value]
    return value


def patch_event_command(command: dict[str, Any], rename_map: dict[str, str]) -> bool:
    changed = False
    code = command.get("code")
    params = command.get("parameters")
    if not isinstance(params, list):
        return False

    if code == 231:
        # Show Picture
        if len(params) > 1 and isinstance(params[1], str) and params[1] in rename_map:
            params[1] = rename_map[params[1]]
            changed = True

    elif code == 283:
        # Change Battle Back
        if len(params) > 0 and isinstance(params[0], str) and params[0] in rename_map:
            params[0] = rename_map[params[0]]
            changed = True
        if len(params) > 1 and isinstance(params[1], str) and params[1] in rename_map:
            params[1] = rename_map[params[1]]
            changed = True

    elif code == 284:
        # Change Parallax
        if len(params) > 0 and isinstance(params[0], str) and params[0] in rename_map:
            params[0] = rename_map[params[0]]
            changed = True

    elif code == 322:
        # Change Actor Images
        for idx in (1, 3, 5):
            if len(params) > idx and isinstance(params[idx], str) and params[idx] in rename_map:
                params[idx] = rename_map[params[idx]]
                changed = True

    return changed


def patch_data_structure(obj: Any, rename_map: dict[str, str]) -> tuple[Any, int]:
    """
    Recursively patch known filename fields.
    Returns (patched_obj, num_changes)
    """
    changes = 0

    def _patch(node: Any) -> Any:
        nonlocal changes

        if isinstance(node, dict):
            # Patch known direct keys
            for key in list(node.keys()):
                value = node[key]

                if key in TARGET_KEYS:
                    new_value = patch_string_if_exact(value, rename_map)
                    if new_value != value:
                        node[key] = new_value
                        changes += 1

                elif key in TARGET_ARRAY_KEYS and isinstance(value, list):
                    new_list = []
                    local_changed = False
                    for item in value:
                        new_item = patch_string_if_exact(item, rename_map)
                        if new_item != item:
                            local_changed = True
                            changes += 1
                        new_list.append(new_item)
                    if local_changed:
                        node[key] = new_list

                # Patch event command parameter layouts
                if key == "list" and isinstance(value, list):
                    for cmd in value:
                        if isinstance(cmd, dict) and cmd.get("code") in EVENT_CODE_PATCHERS:
                            if patch_event_command(cmd, rename_map):
                                changes += 1

                # Recurse
                node[key] = _patch(node[key])

            return node

        if isinstance(node, list):
            return [_patch(item) for item in node]

        return node

    patched = _patch(deepcopy(obj))
    return patched, changes


def patch_json_files(project_root: Path, rename_map: dict[str, str], preview: bool) -> list[tuple[Path, int]]:
    results: list[tuple[Path, int]] = []
    data_dir = project_root / "data"
    if not data_dir.exists():
        return results

    for path in sorted(data_dir.glob("*.json")):
        try:
            original = load_json(path)
        except Exception as e:
            print(f"[WARN] Could not parse JSON: {path} ({e})")
            continue

        patched, num_changes = patch_data_structure(original, rename_map)
        if num_changes > 0:
            results.append((path, num_changes))
            if not preview:
                save_json(path, patched)

    return results


def patch_plugins_js(project_root: Path, rename_map: dict[str, str], preview: bool) -> int:
    """
    Patch js/plugins.js exact-match parameter strings.
    This is conservative: only exact string values are replaced.
    """
    plugins_path = project_root / "js" / "plugins.js"
    if not plugins_path.exists():
        return 0

    text = plugins_path.read_text(encoding="utf-8-sig")

    # Extract JSON-ish array after "var $plugins ="
    match = re.search(r"var\s+\$plugins\s*=\s*(\[.*\]);?\s*$", text, re.S)
    if not match:
        return 0

    raw_json = match.group(1)
    try:
        plugins_data = json.loads(raw_json)
    except Exception as e:
        print(f"[WARN] Could not parse plugins.js as JSON payload ({e})")
        return 0

    changes = 0

    def patch_plugin_node(node: Any) -> Any:
        nonlocal changes
        if isinstance(node, dict):
            for k, v in list(node.items()):
                node[k] = patch_plugin_node(v)
            return node
        if isinstance(node, list):
            return [patch_plugin_node(x) for x in node]
        if isinstance(node, str) and node in rename_map:
            changes += 1
            return rename_map[node]
        return node

    patched = patch_plugin_node(deepcopy(plugins_data))
    if changes > 0 and not preview:
        new_payload = json.dumps(patched, ensure_ascii=False, indent=2)
        new_text = text[:match.start(1)] + new_payload + text[match.end(1):]
        plugins_path.write_text(new_text, encoding="utf-8", newline="\n")

    return changes


def print_report(
    file_renames: list[tuple[Path, Path]],
    json_patches: list[tuple[Path, int]],
    plugins_changes: int,
    preview: bool,
) -> None:
    mode = "PREVIEW" if preview else "APPLY"
    print(f"\n=== {mode} REPORT ===\n")

    print(f"Files to rename / renamed: {len(file_renames)}")
    for old_path, new_path in file_renames[:50]:
        print(f"  {old_path} -> {new_path}")
    if len(file_renames) > 50:
        print(f"  ... and {len(file_renames) - 50} more")

    print(f"\nJSON files patched: {len(json_patches)}")
    for path, count in json_patches:
        print(f"  {path}  ({count} changes)")

    print(f"\nplugins.js exact-match replacements: {plugins_changes}")
    print()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("project_path", help="Path to RPG Maker MV/MZ project")
    parser.add_argument("--suffix", default="_B", help="Suffix to append to image names")
    parser.add_argument("--preview", action="store_true", help="Show changes without writing")
    parser.add_argument("--apply", action="store_true", help="Apply changes")
    parser.add_argument("--backup", action="store_true", help="Create a full backup before applying")
    args = parser.parse_args()

    if not args.preview and not args.apply:
        parser.error("Choose one: --preview or --apply")

    root = Path(args.project_path).resolve()
    if not root.exists():
        raise FileNotFoundError(f"Project path does not exist: {root}")

    if args.apply and args.backup:
        backup_dir = make_backup(root)
        print(f"[INFO] Backup created: {backup_dir}")

    rename_map = build_rename_map(root, args.suffix)
    if not rename_map:
        print("[INFO] No image files found to rename.")
        return

    file_renames = rename_files(root, args.suffix, preview=not args.apply)
    json_patches = patch_json_files(root, rename_map, preview=not args.apply)
    plugins_changes = patch_plugins_js(root, rename_map, preview=not args.apply)

    print_report(file_renames, json_patches, plugins_changes, preview=not args.apply)

    if args.apply:
        print("[DONE] Changes applied.")
    else:
        print("[DONE] Preview only. Run again with --apply to write changes.")


if __name__ == "__main__":
    main()