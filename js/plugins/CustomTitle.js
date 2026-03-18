/*:
 * @plugindesc (v1.4) Deep Dark Blue + Purple Galaxy Title — all menu commands warp + cats hide on select
 * @author Antigravity
 *
 * @help
 * Required assets:
 * - img/titles1/CustomTitle.png
 * - img/system/vchat_title_cat.gif
 *
 * Features:
 * - Deep dark blue + stronger purple galaxy tint
 * - Large planet behind title
 * - Slow moving nebula fog
 * - Black hole glow effect
 * - Parallax starfield
 * - Neon title aura
 * - Shooting stars
 * - Warp stars when selecting ANY title command
 * - Dancing GIF cats on both sides
 * - Cats disappear immediately when command is selected
 */

(function () {
    'use strict';

    //--------------------------------------------------------------------------
    // CREATE
    //--------------------------------------------------------------------------
    const _Scene_Title_create = Scene_Title.prototype.create;
    Scene_Title.prototype.create = function () {
        _Scene_Title_create.call(this);

        this._spaceTick = 0;
        this._warpMode = false;
        this._warpTriggered = false;
        this._warpStrength = 0;
        this._warpFadeSprite = null;
        this._selectedTitleCommand = null;
        this._titleCommandDelay = 0;

        this.createCustomBackground();
        this.createDarkBlueOverlay();
        this.createPlanet();
        this.createBlackHoleGlow();
        this.createNebulaFog();
        this.createParticles();
        this.createWarpStars();
        this.createTitleAura();
        this.createDancingCats();
        this.setupAllCommandWarpHandlers();
    };

    //--------------------------------------------------------------------------
    // BACKGROUND
    //--------------------------------------------------------------------------
    Scene_Title.prototype.createCustomBackground = function () {
        if (!this._backSprite1) return;

        this._backSprite1.bitmap = ImageManager.loadTitle1("CustomTitle");
        this._backSprite1.anchor.x = 0.5;
        this._backSprite1.anchor.y = 0.5;
        this._backSprite1.x = Graphics.width / 2;
        this._backSprite1.y = Graphics.height / 2;
        this._backSprite1.opacity = 228;
    };

    //--------------------------------------------------------------------------
    // DEEP DARK BLUE + PURPLE FULL SCREEN OVERLAY
    //--------------------------------------------------------------------------
    Scene_Title.prototype.createDarkBlueOverlay = function () {
        this._darkBlueOverlay = new Sprite(new Bitmap(Graphics.width, Graphics.height));
        const bmp = this._darkBlueOverlay.bitmap;

        bmp.paintOpacity = 255;
        bmp.fillRect(0, 0, Graphics.width, Graphics.height, "#04030d");

        bmp.paintOpacity = 230;
        bmp.gradientFillRect(0, 0, Graphics.width, Graphics.height, "#0a1230", "#030109", true);

        bmp.paintOpacity = 170;
        bmp.drawCircle(Graphics.width * 0.16, Graphics.height * 0.22, 280, "#25104a");
        bmp.drawCircle(Graphics.width * 0.76, Graphics.height * 0.20, 330, "#1d1248");
        bmp.drawCircle(Graphics.width * 0.50, Graphics.height * 0.82, 420, "#13295e");

        bmp.paintOpacity = 120;
        bmp.drawCircle(Graphics.width * 0.52, Graphics.height * 0.42, 340, "#3a1f75");

        bmp.paintOpacity = 90;
        bmp.drawCircle(Graphics.width * 0.30, Graphics.height * 0.52, 240, "#5f28aa");
        bmp.drawCircle(Graphics.width * 0.72, Graphics.height * 0.56, 260, "#4a2fa8");

        bmp.paintOpacity = 255;

        this._darkBlueOverlay.opacity = 200;
        this.addChildAt(this._darkBlueOverlay, 1);
    };

    //--------------------------------------------------------------------------
    // LARGE PLANET
    //--------------------------------------------------------------------------
    Scene_Title.prototype.createPlanet = function () {
        this._planetContainer = new Sprite();
        this.addChildAt(this._planetContainer, 2);

        const planetBmp = new Bitmap(420, 420);

        planetBmp.paintOpacity = 255;
        planetBmp.drawCircle(210, 210, 180, "#1b1d66");

        planetBmp.paintOpacity = 210;
        planetBmp.drawCircle(190, 180, 145, "#334fc2");

        planetBmp.paintOpacity = 120;
        planetBmp.drawCircle(150, 145, 90, "#8b73ff");

        planetBmp.paintOpacity = 90;
        planetBmp.drawCircle(245, 255, 110, "#243f8d");

        planetBmp.paintOpacity = 85;
        planetBmp.drawCircle(275, 160, 70, "#a43cff");

        planetBmp.paintOpacity = 170;
        for (let i = 0; i < 8; i++) {
            const y = 100 + i * 25;
            planetBmp.fillRect(65, y, 250, 8, "rgba(255,255,255,0.05)");
        }

        this._planetSprite = new Sprite(planetBmp);
        this._planetSprite.anchor.x = 0.5;
        this._planetSprite.anchor.y = 0.5;
        this._planetSprite.x = Graphics.width * 0.5;
        this._planetSprite.y = Graphics.height * 0.34;
        this._planetSprite.opacity = 188;
        this._planetSprite.blendMode = 0;

        const ringBmp = new Bitmap(520, 220);
        ringBmp.paintOpacity = 165;
        ringBmp.drawCircle(260, 110, 100, "#58b8ff");
        ringBmp.paintOpacity = 110;
        ringBmp.drawCircle(260, 110, 120, "#d86cff");
        ringBmp.paintOpacity = 70;
        ringBmp.drawCircle(260, 110, 135, "#ffffff");

        this._planetRing = new Sprite(ringBmp);
        this._planetRing.anchor.x = 0.5;
        this._planetRing.anchor.y = 0.5;
        this._planetRing.x = this._planetSprite.x;
        this._planetRing.y = this._planetSprite.y + 10;
        this._planetRing.scale.x = 1.45;
        this._planetRing.scale.y = 0.28;
        this._planetRing.rotation = -0.12;
        this._planetRing.opacity = 100;
        this._planetRing.blendMode = 1;

        this._planetContainer.addChild(this._planetRing);
        this._planetContainer.addChild(this._planetSprite);
    };

    //--------------------------------------------------------------------------
    // BLACK HOLE GLOW
    //--------------------------------------------------------------------------
    Scene_Title.prototype.createBlackHoleGlow = function () {
        this._blackHoleContainer = new Sprite();
        this.addChildAt(this._blackHoleContainer, 3);

        const bmp1 = new Bitmap(300, 300);
        bmp1.paintOpacity = 190;
        bmp1.drawCircle(150, 150, 110, "#5e1bb0");
        bmp1.paintOpacity = 135;
        bmp1.drawCircle(150, 150, 80, "#326dff");
        bmp1.paintOpacity = 220;
        bmp1.drawCircle(150, 150, 35, "#03050a");

        this._blackHoleGlow = new Sprite(bmp1);
        this._blackHoleGlow.anchor.x = 0.5;
        this._blackHoleGlow.anchor.y = 0.5;
        this._blackHoleGlow.x = Graphics.width * 0.82;
        this._blackHoleGlow.y = Graphics.height * 0.22;
        this._blackHoleGlow.opacity = 95;
        this._blackHoleGlow.blendMode = 1;

        const bmp2 = new Bitmap(220, 220);
        bmp2.paintOpacity = 135;
        bmp2.drawCircle(110, 110, 90, "#7d42ff");
        bmp2.paintOpacity = 100;
        bmp2.drawCircle(110, 110, 60, "#31c8ff");

        this._blackHoleAura = new Sprite(bmp2);
        this._blackHoleAura.anchor.x = 0.5;
        this._blackHoleAura.anchor.y = 0.5;
        this._blackHoleAura.x = this._blackHoleGlow.x;
        this._blackHoleAura.y = this._blackHoleGlow.y;
        this._blackHoleAura.opacity = 90;
        this._blackHoleAura.blendMode = 1;

        this._blackHoleContainer.addChild(this._blackHoleGlow);
        this._blackHoleContainer.addChild(this._blackHoleAura);
    };

    //--------------------------------------------------------------------------
    // NEBULA FOG
    //--------------------------------------------------------------------------
    Scene_Title.prototype.createNebulaFog = function () {
        this._nebulaContainer = new Sprite();
        this.addChildAt(this._nebulaContainer, 4);

        this._nebulaFogs = [];

        const createFog = (x, y, radius, color, opacity, sx, sy, driftX, driftY) => {
            const bmp = new Bitmap(radius * 2, radius * 2);
            bmp.paintOpacity = opacity;
            bmp.drawCircle(radius, radius, radius * 0.9, color);
            bmp.paintOpacity = Math.max(20, opacity * 0.35);
            bmp.drawCircle(radius * 0.8, radius * 0.8, radius * 0.45, "#ffffff");

            const fog = new Sprite(bmp);
            fog.anchor.x = 0.5;
            fog.anchor.y = 0.5;
            fog.x = x;
            fog.y = y;
            fog.scale.x = sx;
            fog.scale.y = sy;
            fog.opacity = opacity;
            fog.blendMode = 1;
            fog._driftX = driftX;
            fog._driftY = driftY;
            fog._pulse = Math.random() * Math.PI * 2;

            this._nebulaContainer.addChild(fog);
            this._nebulaFogs.push(fog);
        };

        createFog(Graphics.width * 0.20, Graphics.height * 0.32, 180, "#3e5eff", 42, 1.8, 1.0, 0.05, -0.01);
        createFog(Graphics.width * 0.72, Graphics.height * 0.30, 220, "#7f35ff", 42, 2.0, 1.1, -0.04, 0.01);
        createFog(Graphics.width * 0.50, Graphics.height * 0.72, 260, "#1588ff", 30, 2.3, 1.0, 0.03, 0.00);
        createFog(Graphics.width * 0.42, Graphics.height * 0.22, 130, "#b45cff", 30, 1.7, 0.9, -0.02, 0.01);
        createFog(Graphics.width * 0.62, Graphics.height * 0.48, 180, "#7a2cff", 24, 2.1, 0.9, -0.03, 0.00);
    };

    //--------------------------------------------------------------------------
    // STARFIELD + PARTICLES
    //--------------------------------------------------------------------------
    Scene_Title.prototype.createParticles = function () {
        this._starLayerFar = new Sprite();
        this._starLayerMid = new Sprite();
        this._starLayerNear = new Sprite();

        this.addChildAt(this._starLayerFar, 0);
        this.addChildAt(this._starLayerMid, 0);
        this.addChildAt(this._starLayerNear, 0);

        this._particlesFar = [];
        this._particlesMid = [];
        this._particlesNear = [];
        this._shootingStars = [];

        const createStar = (container, array, sizeMin, sizeMax, speedMin, speedMax, opacityMin, opacityMax, colorSet) => {
            const size = sizeMin + Math.random() * (sizeMax - sizeMin);
            const bmp = new Bitmap(Math.ceil(size * 2), Math.ceil(size * 2));
            const colors = colorSet || ["#ffffff", "#98cfff", "#5fb8ff", "#c282ff", "#d66bff"];
            const color = colors[Math.floor(Math.random() * colors.length)];

            bmp.drawCircle(size, size, size, color);

            const star = new Sprite(bmp);
            star.x = Math.random() * Graphics.width;
            star.y = Math.random() * Graphics.height;
            star.opacity = opacityMin + Math.random() * (opacityMax - opacityMin);
            star._speed = speedMin + Math.random() * (speedMax - speedMin);
            star._drift = (Math.random() - 0.5) * 0.15;
            star._pulse = Math.random() * Math.PI * 2;
            star._baseScale = 0.7 + Math.random() * 0.8;

            container.addChild(star);
            array.push(star);
        };

        for (let i = 0; i < 50; i++) {
            createStar(this._starLayerFar, this._particlesFar, 1, 1.7, 0.08, 0.22, 45, 120);
        }

        for (let i = 0; i < 45; i++) {
            createStar(this._starLayerMid, this._particlesMid, 1.4, 2.5, 0.18, 0.42, 70, 150);
        }

        for (let i = 0; i < 35; i++) {
            createStar(this._starLayerNear, this._particlesNear, 2, 3.5, 0.35, 0.85, 85, 170);
        }

        for (let i = 0; i < 4; i++) {
            const s = new Sprite(new Bitmap(110, 3));
            s.bitmap.gradientFillRect(0, 0, 110, 3, "#ffffff", "rgba(255,255,255,0)", false);
            s.rotation = -0.5;
            s.opacity = 0;
            s.x = -300;
            s.y = -300;
            s._speed = 10 + Math.random() * 4;
            s._wait = 50 + Math.random() * 200;
            s.blendMode = 1;
            this.addChild(s);
            this._shootingStars.push(s);
        }
    };

    //--------------------------------------------------------------------------
    // WARP STARS
    //--------------------------------------------------------------------------
    Scene_Title.prototype.createWarpStars = function () {
        this._warpStarContainer = new Sprite();
        this.addChild(this._warpStarContainer);

        this._warpStars = [];
        for (let i = 0; i < 55; i++) {
            const bmp = new Bitmap(8, 120);
            bmp.gradientFillRect(3, 0, 2, 120, "rgba(255,255,255,0)", "#b884ff", true);

            const w = new Sprite(bmp);
            w.anchor.x = 0.5;
            w.anchor.y = 1.0;
            w.x = Graphics.width / 2;
            w.y = Graphics.height / 2;
            w.opacity = 0;
            w.rotation = Math.random() * Math.PI * 2;
            w._distance = 20 + Math.random() * 60;
            w._speed = 6 + Math.random() * 8;
            w.scale.x = 0.5 + Math.random() * 0.8;
            w.scale.y = 0.2 + Math.random() * 0.4;
            w.blendMode = 1;

            this._warpStarContainer.addChild(w);
            this._warpStars.push(w);
        }

        this._warpFadeSprite = new ScreenSprite();
        this._warpFadeSprite.setBlack();
        this._warpFadeSprite.opacity = 0;
        this.addChild(this._warpFadeSprite);
    };

    //--------------------------------------------------------------------------
    // TITLE AURA
    //--------------------------------------------------------------------------
    Scene_Title.prototype.createTitleAura = function () {
        this._titleAura = new Sprite(new Bitmap(700, 220));
        const bmp = this._titleAura.bitmap;

        bmp.paintOpacity = 80;
        bmp.drawCircle(180, 110, 85, "#24a6ff");
        bmp.drawCircle(520, 110, 90, "#bb52ff");

        bmp.paintOpacity = 52;
        bmp.drawCircle(350, 110, 150, "#8a74ff");

        this._titleAura.anchor.x = 0.5;
        this._titleAura.anchor.y = 0.5;
        this._titleAura.x = Graphics.width / 2;
        this._titleAura.y = Graphics.height * 0.26;
        this._titleAura.opacity = 125;
        this._titleAura.blendMode = 1;

        this.addChild(this._titleAura);
    };

    //--------------------------------------------------------------------------
    // DANCING CATS
    //--------------------------------------------------------------------------
    Scene_Title.prototype.createDancingCats = function () {
        this._catGifElements = [];

        const createGif = (side) => {
            const img = document.createElement('img');

            img.src = "img/system/vchat_title_cat.gif?" + Date.now();
            img.style.position = "fixed";
            img.style.bottom = "8%";
            img.style.width = "220px";
            img.style.pointerEvents = "none";
            img.style.opacity = "0.96";
            img.style.zIndex = "9999";
            img.style.transition = "opacity 0.25s ease";
            img.style.filter = "drop-shadow(0 0 10px #3bbcff) drop-shadow(0 0 18px #9a4dff) drop-shadow(0 0 28px #00d0ff)";

            if (side === "left") {
                img.style.left = "calc(50% - 360px)";
            } else {
                img.style.left = "calc(50% + 160px)";
                img.style.transform = "scaleX(-1)";
            }

            document.body.appendChild(img);
            this._catGifElements.push(img);
        };

        createGif("left");
        createGif("right");
    };

    Scene_Title.prototype.hideDancingCats = function () {
        if (!this._catGifElements) return;

        this._catGifElements.forEach(cat => {
            cat.style.opacity = "0";
        });
    };

    //--------------------------------------------------------------------------
    // RANDOM TITLE BGM  (Theme6 or Theme7, chosen fresh each visit)
    //--------------------------------------------------------------------------
    const _TITLE_BGM_POOL = ['Theme6', 'Theme7'];

    const _Scene_Title_playTitleMusic = Scene_Title.prototype.playTitleMusic;
    Scene_Title.prototype.playTitleMusic = function () {
        const chosen = _TITLE_BGM_POOL[Math.floor(Math.random() * _TITLE_BGM_POOL.length)];
        // Build a BGM object that mirrors the System.json structure
        const bgm = { name: chosen, pan: 0, pitch: 100, volume: 90 };
        AudioManager.playBgm(bgm);
        AudioManager.fadeInBgm(1); // gentle 1-second fade-in
    };

    //--------------------------------------------------------------------------
    // REMOVE CATS
    //--------------------------------------------------------------------------
    const _Scene_Title_terminate = Scene_Title.prototype.terminate;
    Scene_Title.prototype.terminate = function () {
        _Scene_Title_terminate.call(this);

        if (this._catGifElements) {
            this._catGifElements.forEach(cat => {
                if (cat.parentNode) cat.parentNode.removeChild(cat);
            });
            this._catGifElements = [];
        }
    };

    //--------------------------------------------------------------------------
    // ALL COMMAND WARP EFFECT
    //--------------------------------------------------------------------------
    Scene_Title.prototype.setupAllCommandWarpHandlers = function () {
        if (!this._commandWindow) return;

        this._commandWindow.setHandler('newGame', this.commandWarpNewGame.bind(this));
        this._commandWindow.setHandler('continue', this.commandWarpContinue.bind(this));
        this._commandWindow.setHandler('options', this.commandWarpOptions.bind(this));
    };

    const _Scene_Title_commandNewGame = Scene_Title.prototype.commandNewGame;
    const _Scene_Title_commandContinue = Scene_Title.prototype.commandContinue;
    const _Scene_Title_commandOptions = Scene_Title.prototype.commandOptions;

    Scene_Title.prototype.commandWarpNewGame = function () {
        this.startWarpEffect('newGame');
    };

    Scene_Title.prototype.commandWarpContinue = function () {
        this.startWarpEffect('continue');
    };

    Scene_Title.prototype.commandWarpOptions = function () {
        this.startWarpEffect('options');
    };

    Scene_Title.prototype.startWarpEffect = function (commandSymbol) {
        if (this._warpTriggered) return;

        this._warpMode = true;
        this._warpTriggered = true;
        this._warpStrength = 1;
        this._selectedTitleCommand = commandSymbol;
        this._titleCommandDelay = 28;

        this.hideDancingCats();

        if (this._commandWindow) {
            this._commandWindow.deactivate();
            this._commandWindow.visible = false;
        }
    };

    //--------------------------------------------------------------------------
    // UPDATE
    //--------------------------------------------------------------------------
    const _Scene_Title_update = Scene_Title.prototype.update;
    Scene_Title.prototype.update = function () {
        _Scene_Title_update.call(this);

        this._spaceTick++;

        this.updateBackgroundFloat();
        this.updateDarkBlueOverlay();
        this.updatePlanet();
        this.updateBlackHoleGlow();
        this.updateNebulaFog();
        this.updateParticlesLayer(this._particlesFar, 0.4);
        this.updateParticlesLayer(this._particlesMid, 0.8);
        this.updateParticlesLayer(this._particlesNear, 1.2);
        this.updateShootingStars();
        this.updateTitleAura();
        this.updateTitleAnimation();
        this.updateWarpStars();
        this.updateTitleCommandFlow();
    };

    //--------------------------------------------------------------------------
    // BACKGROUND FLOAT
    //--------------------------------------------------------------------------
    Scene_Title.prototype.updateBackgroundFloat = function () {
        if (!this._backSprite1) return;

        const t = this._spaceTick;

        this._backSprite1.x = Graphics.width / 2 + Math.sin(t * 0.006) * 8;
        this._backSprite1.y = Graphics.height / 2 + Math.cos(t * 0.005) * 7;
        this._backSprite1.scale.x = 1 + Math.sin(t * 0.01) * 0.02;
        this._backSprite1.scale.y = 1 + Math.cos(t * 0.011) * 0.02;
        this._backSprite1.opacity = 220 + Math.sin(t * 0.02) * 12;
    };

    //--------------------------------------------------------------------------
    // DARK BLUE OVERLAY
    //--------------------------------------------------------------------------
    Scene_Title.prototype.updateDarkBlueOverlay = function () {
        if (!this._darkBlueOverlay) return;

        const t = this._spaceTick;
        this._darkBlueOverlay.opacity = 192 + Math.sin(t * 0.013) * 12;
    };

    //--------------------------------------------------------------------------
    // PLANET
    //--------------------------------------------------------------------------
    Scene_Title.prototype.updatePlanet = function () {
        if (!this._planetSprite || !this._planetRing) return;

        const t = this._spaceTick;

        this._planetSprite.x = Graphics.width * 0.5 + Math.sin(t * 0.004) * 10;
        this._planetSprite.y = Graphics.height * 0.34 + Math.cos(t * 0.0045) * 5;
        this._planetSprite.opacity = 180 + Math.sin(t * 0.018) * 12;
        this._planetSprite.scale.x = 1 + Math.sin(t * 0.008) * 0.015;
        this._planetSprite.scale.y = 1 + Math.cos(t * 0.008) * 0.015;

        this._planetRing.x = this._planetSprite.x;
        this._planetRing.y = this._planetSprite.y + 12;
        this._planetRing.opacity = 92 + Math.sin(t * 0.02) * 12;
        this._planetRing.rotation = -0.12 + Math.sin(t * 0.005) * 0.015;
    };

    //--------------------------------------------------------------------------
    // BLACK HOLE
    //--------------------------------------------------------------------------
    Scene_Title.prototype.updateBlackHoleGlow = function () {
        if (!this._blackHoleGlow || !this._blackHoleAura) return;

        const t = this._spaceTick;

        this._blackHoleGlow.rotation += 0.0025;
        this._blackHoleAura.rotation -= 0.0015;

        const s1 = 1 + Math.sin(t * 0.03) * 0.06;
        const s2 = 1 + Math.cos(t * 0.026) * 0.08;

        this._blackHoleGlow.scale.x = s1;
        this._blackHoleGlow.scale.y = s1;
        this._blackHoleAura.scale.x = s2;
        this._blackHoleAura.scale.y = s2;

        this._blackHoleGlow.opacity = 85 + Math.sin(t * 0.04) * 22;
        this._blackHoleAura.opacity = 75 + Math.cos(t * 0.035) * 20;
    };

    //--------------------------------------------------------------------------
    // NEBULA
    //--------------------------------------------------------------------------
    Scene_Title.prototype.updateNebulaFog = function () {
        if (!this._nebulaFogs) return;

        this._nebulaFogs.forEach((fog, i) => {
            fog._pulse += 0.01 + i * 0.002;
            fog.x += fog._driftX;
            fog.y += fog._driftY;

            fog.opacity = 24 + Math.sin(fog._pulse) * 14 + 22;
            fog.scale.x += Math.sin(fog._pulse * 0.7) * 0.0008;
            fog.scale.y += Math.cos(fog._pulse * 0.6) * 0.0008;
            fog.rotation += 0.0005 * (i % 2 === 0 ? 1 : -1);

            if (fog.x < -200) fog.x = Graphics.width + 200;
            if (fog.x > Graphics.width + 200) fog.x = -200;
        });
    };

    //--------------------------------------------------------------------------
    // PARTICLES
    //--------------------------------------------------------------------------
    Scene_Title.prototype.updateParticlesLayer = function (particles, speedFactor) {
        if (!particles) return;

        particles.forEach(p => {
            if (this._warpMode) {
                p.y += p._speed * 5.5 * speedFactor;
                p.opacity = Math.min(255, p.opacity + 4);
                p.scale.y = Math.min(10, p.scale.y + 0.2);
                p.scale.x = Math.max(0.2, p.scale.x - 0.01);
            } else {
                p.y += p._speed * speedFactor;
                p.x += p._drift;
                p._pulse += 0.025;
                const pulseScale = p._baseScale + Math.sin(p._pulse) * 0.18;
                p.scale.x = pulseScale;
                p.scale.y = pulseScale;
                p.opacity = Math.max(25, Math.min(210, p.opacity + Math.sin(p._pulse * 1.4) * 2));
            }

            if (p.y > Graphics.height + 20) {
                p.y = -20;
                p.x = Math.random() * Graphics.width;
                p.scale.x = p._baseScale;
                p.scale.y = p._baseScale;
            }

            if (p.x < -20) p.x = Graphics.width + 20;
            if (p.x > Graphics.width + 20) p.x = -20;
        });
    };

    //--------------------------------------------------------------------------
    // SHOOTING STARS
    //--------------------------------------------------------------------------
    Scene_Title.prototype.updateShootingStars = function () {
        if (!this._shootingStars) return;

        this._shootingStars.forEach(s => {
            if (this._warpMode) {
                s.opacity = 0;
                return;
            }

            if (s._wait > 0) {
                s._wait--;
                return;
            }

            if (s.opacity <= 0 && s.x < 0) {
                s.x = Math.random() * Graphics.width * 0.7;
                s.y = Math.random() * Graphics.height * 0.35;
                s.opacity = 255;
            }

            s.x += s._speed;
            s.y += s._speed * 0.55;
            s.opacity -= 7;

            if (s.opacity <= 0) {
                s.opacity = 0;
                s.x = -300;
                s.y = -300;
                s._wait = 90 + Math.random() * 240;
            }
        });
    };

    //--------------------------------------------------------------------------
    // TITLE AURA
    //--------------------------------------------------------------------------
    Scene_Title.prototype.updateTitleAura = function () {
        if (!this._titleAura) return;

        const t = this._spaceTick;
        this._titleAura.opacity = 105 + Math.sin(t * 0.04) * 30;
        this._titleAura.scale.x = 1 + Math.sin(t * 0.02) * 0.03;
        this._titleAura.scale.y = 1 + Math.cos(t * 0.018) * 0.02;
    };

    //--------------------------------------------------------------------------
    // TITLE ANIMATION
    //--------------------------------------------------------------------------
    Scene_Title.prototype.updateTitleAnimation = function () {
        if (!this._gameTitleSprite) return;

        if (this._titleBaseX == null) this._titleBaseX = this._gameTitleSprite.x;
        if (this._titleBaseY == null) this._titleBaseY = this._gameTitleSprite.y;
        if (this._titleTick == null) this._titleTick = 0;

        this._titleTick++;
        const t = this._titleTick;

        this._gameTitleSprite.x = this._titleBaseX;
        this._gameTitleSprite.y = this._titleBaseY;

        if (this._warpMode) {
            const warpScale = 1.0 + Math.min(0.45, this._warpStrength * 0.02);
            this._gameTitleSprite.scale.x = warpScale;
            this._gameTitleSprite.scale.y = warpScale;
            this._gameTitleSprite.opacity = Math.max(0, this._gameTitleSprite.opacity - 10);
        } else {
            const scale = 1 + Math.sin(t * 0.05) * 0.07;
            this._gameTitleSprite.scale.x = scale;
            this._gameTitleSprite.scale.y = scale;
            this._gameTitleSprite.opacity = 215 + Math.sin(t * 0.12) * 35;
        }
    };

    //--------------------------------------------------------------------------
    // WARP STARS
    //--------------------------------------------------------------------------
    Scene_Title.prototype.updateWarpStars = function () {
        if (!this._warpStars) return;

        this._warpStars.forEach(w => {
            if (!this._warpMode) {
                w.opacity = 0;
                w.x = Graphics.width / 2;
                w.y = Graphics.height / 2;
                w.scale.y = 0.2;
                return;
            }

            w.opacity = Math.min(255, w.opacity + 18);
            w._distance += w._speed + this._warpStrength * 0.7;

            const dx = Math.cos(w.rotation) * w._distance;
            const dy = Math.sin(w.rotation) * w._distance;

            w.x = Graphics.width / 2 + dx;
            w.y = Graphics.height / 2 + dy;
            w.scale.y = 0.8 + this._warpStrength * 0.08;

            if (w.x < -200 || w.x > Graphics.width + 200 || w.y < -200 || w.y > Graphics.height + 200) {
                w.x = Graphics.width / 2;
                w.y = Graphics.height / 2;
                w._distance = 20 + Math.random() * 40;
                w.rotation = Math.random() * Math.PI * 2;
                w.opacity = 160;
            }
        });
    };

    //--------------------------------------------------------------------------
    // COMMAND FLOW AFTER WARP
    //--------------------------------------------------------------------------
    Scene_Title.prototype.updateTitleCommandFlow = function () {
        if (!this._warpTriggered) return;

        if (this._warpStrength < 30) {
            this._warpStrength += 1.2;
        }

        if (this._warpFadeSprite) {
            this._warpFadeSprite.opacity = Math.min(255, this._warpFadeSprite.opacity + 4);
        }

        if (this._titleCommandDelay > 0) {
            this._titleCommandDelay--;
            if (this._titleCommandDelay === 0) {
                switch (this._selectedTitleCommand) {
                    case 'newGame':
                        _Scene_Title_commandNewGame.call(this);
                        break;
                    case 'continue':
                        _Scene_Title_commandContinue.call(this);
                        break;
                    case 'options':
                        _Scene_Title_commandOptions.call(this);
                        break;
                }
            }
        }
    };

})();