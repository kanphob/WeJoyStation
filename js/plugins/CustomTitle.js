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
                img.style.left = '10%';
            } else {
                img.style.right = '10%';
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

    // Auto-scaling logic to keep icons in place if window resizes
    const _Scene_Title_update = Scene_Title.prototype.update;
    Scene_Title.prototype.update = function() {
        _Scene_Title_update.call(this);
        this.updateCatPositioning();
    };

    Scene_Title.prototype.updateCatPositioning = function() {
        if (!this._catGifElements) return;
        
        // We use percentages in CSS (10% left/right, 10% bottom) 
        // which helps with basic responsiveness.
        // If the user wants extreme precision relative to the canvas, 
        // we'd need more complex math here.
    };

})();
