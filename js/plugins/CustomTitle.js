/*:
 * @plugindesc (v.1.0) Custom Animated Title — Purple tiles and dancing cats.
 * @author Antigravity
 * 
 * @help
 * Replaces the title screen background and adds animated dancing cats.
 * Image assets:
 * - img/titles1/CustomTitle.png (Purple background)
 * - img/system/vchat_title_cat.png (Cat sprite)
 */

(function() {
    'use strict';

    const _Scene_Title_create = Scene_Title.prototype.create;
    Scene_Title.prototype.create = function() {
        _Scene_Title_create.call(this);
        this.createDancingCats();
    };

    Scene_Title.prototype.createDancingCats = function() {
        this._catGifElements = [];
        
        const createGif = (side) => {
            const img = document.createElement('img');
            img.src = 'img/system/vchat_title_cat.gif?v=' + Date.now();
            img.style.position = 'fixed';
            img.style.bottom = '10%';
            img.style.width = '200px'; // Adjust based on GIF size
            img.style.zIndex = '10';
            img.style.pointerEvents = 'none'; // Don't block clicks
            
            if (side === 'left') {
                img.style.left = 'calc(50% - 320px)'; // Positioned left of center menu
            } else {
                img.style.left = 'calc(50% + 120px)'; // Positioned right of center menu
                img.style.transform = 'scaleX(-1)'; // Mirror for right side
            }
            
            document.body.appendChild(img);
            this._catGifElements.push(img);
        };

        createGif('left');
        createGif('right');
    };

    const _Scene_Title_terminate = Scene_Title.prototype.terminate;
    Scene_Title.prototype.terminate = function() {
        _Scene_Title_terminate.call(this);
        this.removeDancingCats();
    };

    Scene_Title.prototype.removeDancingCats = function() {
        if (this._catGifElements) {
            this._catGifElements.forEach(el => {
                if (el.parentNode) el.parentNode.removeChild(el);
            });
            this._catGifElements = [];
        }
    };

    // Auto-scaling and effects logic
    const _Scene_Title_update = Scene_Title.prototype.update;
    Scene_Title.prototype.update = function() {
        _Scene_Title_update.call(this);
        this.updateCatPositioning();
        this.updateBackgroundGlow();
    };

    Scene_Title.prototype.updateBackgroundGlow = function() {
        if (!this._backSprite1) return;
        if (!this._glowTick) this._glowTick = 0;
        this._glowTick++;
        
        const tick = this._glowTick;
        // 1. Shimmering (Brightness pulse)
        const glow = 100 + Math.sin(tick * 0.05) * 15; // 85% to 115% brightness
        
        // RPG Maker MV Sprites don't have direct brightness filters easily accessible without PIXI filters,
        // but we can use colorTone or opacity for a similar "breathing" feel.
        // Let's use subtle scale for "look like moving but same place"
        const scaleMod = 1 + Math.sin(tick * 0.03) * 0.01; // tiny 1% pulsing
        this._backSprite1.scale.x = scaleMod;
        this._backSprite1.scale.y = scaleMod;
        
        // Subtle opacity pulsing for "glister"
        this._backSprite1.opacity = 220 + Math.sin(tick * 0.08) * 35; // 185 to 255
    };

    Scene_Title.prototype.updateCatPositioning = function() {
        if (!this._catGifElements) return;
        
        // We use percentages in CSS (10% left/right, 10% bottom) 
        // which helps with basic responsiveness.
        // If the user wants extreme precision relative to the canvas, 
        // we'd need more complex math here.
    };

})();
