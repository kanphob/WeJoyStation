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

    const _Scene_Title_createBackground = Scene_Title.prototype.createBackground;
    Scene_Title.prototype.createBackground = function() {
        _Scene_Title_createBackground.call(this);
        this.createDancingCats();
    };

    Scene_Title.prototype.createDancingCats = function() {
        const catBitmap = ImageManager.loadSystem('vchat_title_cat');
        this._catLeft = new Sprite(catBitmap);
        this._catRight = new Sprite(catBitmap);
        
        // Settings for cats
        this._catLeft.anchor.x = 0.5;
        this._catLeft.anchor.y = 1; // Stand on floor
        this._catRight.anchor.x = 0.5;
        this._catRight.anchor.y = 1;
        
        // Scale cats down if they are too big (assuming generated images are large)
        const targetWidth = 150;
        catBitmap.addLoadListener(() => {
            const scale = targetWidth / catBitmap.width;
            this._catLeft.scale.x = scale;
            this._catLeft.scale.y = scale;
            this._catRight.scale.x = -scale; // Mirrored
            this._catRight.scale.y = scale;
        });

        this.addChild(this._catLeft);
        this.addChild(this._catRight);
        
        this._catBaseY = Graphics.height - 50;
        this._catLeftX = 120;
        this._catRightX = Graphics.width - 120;
        
        this._catLeft.x = this._catLeftX;
        this._catRight.x = this._catRightX;
        this._catLeft.y = this._catBaseY;
        this._catRight.y = this._catBaseY;
        
        this._catAnimTick = 0;
    };

    const _Scene_Title_update = Scene_Title.prototype.update;
    Scene_Title.prototype.update = function() {
        _Scene_Title_update.call(this);
        this.updateCatAnimation();
    };

    Scene_Title.prototype.updateCatAnimation = function() {
        if (!this._catLeft || !this._catRight) return;
        
        this._catAnimTick++;
        const tick = this._catAnimTick;
        
        // 1. Jumping (Y oscillation)
        const jumpOffset = Math.abs(Math.sin(tick * 0.1)) * 30;
        this._catLeft.y = this._catBaseY - jumpOffset;
        this._catRight.y = this._catBaseY - jumpOffset;
        
        // 2. Dancing (Squash and Stretch)
        const scaleMod = Math.sin(tick * 0.2) * 0.05;
        const baseScale = Math.abs(this._catLeft.scale.x); 
        
        this._catLeft.scale.y = baseScale + scaleMod;
        this._catRight.scale.y = baseScale + scaleMod;
        
        // 3. Hand to left and right (Rotation swing)
        const rot = Math.sin(tick * 0.15) * 0.1;
        this._catLeft.rotation = rot;
        this._catRight.rotation = -rot; 
        
        // Side swing
        const sideSwing = Math.sin(tick * 0.05) * 15;
        this._catLeft.x = this._catLeftX + sideSwing;
        this._catRight.x = this._catRightX - sideSwing;
    };

})();
