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

    // Particle system for "Fun & Sharp" details
    Scene_Title.prototype.createParticles = function() {
        this._particles = [];
        this._particleContainer = new Sprite();
        this.addChildAt(this._particleContainer, 1); // Above background
        
        for (let i = 0; i < 50; i++) {
            const p = new Sprite(new Bitmap(4, 4));
            p.bitmap.fillAll('white');
            p.x = Math.random() * Graphics.width;
            p.y = Math.random() * Graphics.height;
            p.opacity = Math.random() * 255;
            p._speed = 0.5 + Math.random();
            this._particleContainer.addChild(p);
            this._particles.push(p);
        }
    };

    Scene_Title.prototype.updateParticles = function() {
        if (!this._particles) return;
        this._particles.forEach(p => {
            p.y -= p._speed;
            p.opacity -= 1;
            if (p.y < -10 || p.opacity <= 0) {
                p.y = Graphics.height + 10;
                p.x = Math.random() * Graphics.width;
                p.opacity = 255;
            }
            // Add "sharp" glint
            const glint = Math.sin(Date.now() * 0.01 + p.x) * 100;
            p.scale.x = 1 + (glint / 200);
            p.scale.y = 1 + (glint / 200);
        });
    };

    // Auto-scaling and effects logic
    const _Scene_Title_update = Scene_Title.prototype.update;
    Scene_Title.prototype.update = function() {
        _Scene_Title_update.call(this);
        this.updateCatPositioning();
        this.updateBackgroundGlow();
        this.updateParticles();
    };

    const _Scene_Title_create_particles = Scene_Title.prototype.create;
    Scene_Title.prototype.create = function() {
        _Scene_Title_create_particles.call(this);
        this.createParticles();
    };

    Scene_Title.prototype.updateBackgroundGlow = function() {
        if (!this._backSprite1) return;
        if (!this._glowTick) this._glowTick = 0;
        this._glowTick++;
        
        const tick = this._glowTick;
        // Subtle scale for "look like moving but same place"
        const scaleMod = 1 + Math.sin(tick * 0.02) * 0.005; // tiny pulse
        this._backSprite1.scale.x = scaleMod;
        this._backSprite1.scale.y = scaleMod;
        
        // Subtle opacity pulsing
        this._backSprite1.opacity = 230 + Math.sin(tick * 0.05) * 25; 
    };

    Scene_Title.prototype.updateCatPositioning = function() {
        if (!this._catGifElements) return;
    };

})();
