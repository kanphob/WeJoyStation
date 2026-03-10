/*:
 * @plugindesc (v.1.0) MZ3D Compatibility Patch (ANETZ Extension)
 * @author Pheonix KageDesu
 * @target MZ
 * @url
 *
 * @help
 * This plugin is extension for Alpha NET Z plugin.
 * It adds compatibility with MZ3D plugin.
 * 
 * Requires Alpha NET Z and MZ3D plugins to work.
 * 
 * Make sure this plugin is loaded after Alpha NETZ
 * (and all extensions) to ensure proper functionality.
 * 
 * Thanks to Cutievirus and Cantux for the MZ3D compatibility code
 */

(function () {

    if(!window.mz3d) {
        return;
    }

    if(!window.ANET) {
        return;
    }

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Scene_Boot.ts
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    (() => {
        //@[DEFINES]
        const _ = Scene_Boot.prototype;
        //@[ALIAS]
        const ALIAS__start = _.start;
        _.start = function () {
            ALIAS__start.call(this);
            ANET.registerExtension("MZ3D Compatibility Patch");
        };
    })();
    // ■ END Scene_Boot.ts
    //---------------------------------------------------------------------------


    // create 3D network characters
	const _addNewCharacters = NETCharactersGroup.prototype._addNewCharacters;
	NETCharactersGroup.prototype._addNewCharacters = function(){
		_addNewCharacters.apply(this,arguments);
		const netchars = $gameMap.netChars();
		for(let i=0;i<netchars.length;++i){
			mz3d.createCharacterFor(netchars[i],20-i/100);
		}
	};

	// remove 3D network characters
	const refreshNetworkCharacters = Spriteset_Map.prototype.refreshNetworkCharacters;
	Spriteset_Map.prototype.refreshNetworkCharacters = function(){
		const sprites = this._networkCharacterSprites;
		const characters = sprites.map(spr=>spr._character);
		refreshNetworkCharacters.apply(this,arguments);
		const left_characters = characters.filter(char=>!$gameMap.netChars().includes(char));
		for(let i=0;i<left_characters.length;++i){
			const char = left_characters[i];
			if(char.mv3d_sprite && !char.mv3d_sprite.isDisposed()) char.mv3d_sprite.dispose();
		}
	};


	// display nameplate
	const _nCreateNameplateSpr = Sprite_Character.prototype._nCreateNameplateSpr;
	Sprite_Character.prototype._nCreateNameplateSpr = function(){
		_nCreateNameplateSpr.apply(this,arguments);
		if(!this.netNameplateSpr) return;
		SceneManager._scene._spriteset.addChild(this.netNameplateSpr);
	};

	const _createNetworkCharactersInfo = Spriteset_Map.prototype._createNetworkCharactersInfo;
	Spriteset_Map.prototype._createNetworkCharactersInfo=function(){
		_createNetworkCharactersInfo.apply(this,arguments);
		this.addChild(this._networkCharactersInfoLayer)
	};

	mz3d.util.override(Sprite_Character.prototype,'_updateNetworkNameplateMain', o=> function() {
		o.apply(this,arguments);
		if(this._character&&this._character.mv3d_sprite){
			const screenPos = mz3d.getScreenPosition(this._character.mv3d_sprite);
			const scale = getScreenScale(this._character.mv3d_sprite);
			this.netNameplateSpr.visible = !screenPos.behindCamera;
			this.netNameplateSpr.y = this.y - this.height*scale;
		}
	});

	// sync directions

	mz3d.util.override(Game_Player.prototype,'update', o=> function(direction) {
		o.apply(this,arguments);
		const dir = this.mv3d_direction();
		if(this.mv3d_data._mz3d_alpha_old_direction!==dir){
			_sendDirection.call(this);
		}
		this.mv3d_data._mz3d_alpha_old_direction=dir;
	});

	mz3d.util.override(Game_Player.prototype,'executeMove', o=> function(direction) {
		o.apply(this,arguments);
		_sendDirection.call(this);
		this.mv3d_data._mz3d_alpha_old_direction=this.mv3d_direction();
	});

	function _sendDirection(){
		const dir = this.mv3d_direction();
		const h = (dir-1)%3-1;
		const v = -(Math.ceil(dir/3)-2);
		if(window.AANetworkManager&&AANetworkManager.sendTurnTowardCharacter)
			AANetworkManager.sendTurnTowardCharacter(this, new Point(this.x+h,this.y+v));
	}

	const turnTowardCharacter = Game_Character.prototype.turnTowardCharacter;
	Game_Character.prototype.turnTowardCharacter = function(character){
		turnTowardCharacter.apply(this,arguments);
		const x = character.x - this.x;
		const y = character.y - this.y;
		const dir = 10-mz3d.yawToDir(mz3d.util.radtodeg(Math.atan2(x,y)),true);
		this.mv3d_setDirection(dir);
		this._diagonalDir = dir;
		this.mv3d_data._mz3d_alpha_old_direction=dir;
	};

    const Tilemap = window.ShaderTilemap||window.Tilemap;
    const removeChild = Tilemap.prototype.removeChild;
    Tilemap.prototype.removeChild = function(child) {
        removeChild.apply(this,arguments);
        if(child&&child.parent) child.parent.removeChild(child);
    };

	function getScreenScale(pos){
		if(!(pos instanceof BABYLON.Vector3)){
			if(typeof pos.getAbsolutePosition==='function'){
				pos = pos.getAbsolutePosition();
			}else if(pos.globalPosition){
				pos = pos.globalPosition;
			}
		}
		let scale;
		if(mz3d.camera.mode===BABYLON.Constants.ORTHOGRAPHIC_CAMERA){
			scale = mz3d.getScaleForDist();
		}else{
			const dist = BABYLON.Vector3.Distance(mz3d.camera.globalPosition, pos);
			scale = mz3d.getScaleForDist(dist);
		}
		return scale;
	}

    const processMapTouch = Scene_Map.prototype.processMapTouch;
    Scene_Map.prototype.processMapTouch = function() {
        if(Imported.PKD_MapInventory && PKD_MI.isProcessEUITouch()){
            return;
        }
        if ($gameTemp.floatingWindowUnderMouse != null || $gameTemp.kdButtonUnderMouse != null) {
            return true;
        }
        return processMapTouch.call(this);
    };
})();