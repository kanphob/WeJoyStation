/*:
 * @plugindesc (v.1.0) Resolution Scaler — Scale game to fit height of device.
 * @author Antigravity
 *
 * @param mode
 * @text Scale Mode
 * @type select
 * @option Fit Inside (Default)
 * @value inside
 * @option Fit Height
 * @value height
 * @default inside
 * @desc 'height' will always fill the screen height. 'inside' is default MV behavior.
 *
 * @help
 * This plugin forces the game to scale based on the window height.
 * Perfect for mobile or vertical displays.
 */

(function() {
    'use strict';

    const parameters = PluginManager.parameters('ResolutionScale');
    const scaleMode = parameters['mode'] || 'inside';

    let scaleMultiplier = 1.0;

    // Override the scale calculation
    const _Graphics_updateRealScale = Graphics._updateRealScale;
    Graphics._updateRealScale = function() {
        if (scaleMode === 'height') {
            // Force scale to be based strictly on window height vs game height
            this._realScale = (window.innerHeight / this._height) * scaleMultiplier;
        } else {
            _Graphics_updateRealScale.call(this);
        }
    };

    // Ensure stretch is on by default so it actually uses _realScale
    const _Graphics_initialize = Graphics.initialize;
    Graphics.initialize = function(width, height, type) {
        _Graphics_initialize.call(this, width, height, type);
        this._stretchEnabled = true;
        createScaleHUD();
    };

    function createScaleHUD() {
        const el = document.createElement('div');
        el.id = 'resolution-hud';
        el.style.cssText = [
            'position:fixed', 'bottom:12px', 'left:12px',
            'display:flex', 'flex-direction:column', 'gap:4px',
            'background:rgba(0,0,0,0.6)', 'padding:10px', 'border-radius:12px',
            'z-index:9998', 'font-family:sans-serif', 'user-select:none',
            'border: 1px solid rgba(255,255,255,0.15)',
            'box-shadow: 0 4px 15px rgba(0,0,0,0.4)',
            'backdrop-filter: blur(5px)',
            'width: 120px'
        ].join(';');

        const title = document.createElement('div');
        title.textContent = 'SCREEN SCALE';
        title.style.cssText = 'font-size:10px; color:#60ff90; font-weight:bold; letter-spacing:1px;';

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '0.5';
        slider.max = '2.0';
        slider.step = '0.05';
        slider.value = '1.0';
        slider.style.cssText = 'width:100%; cursor:pointer; accent-color:#60ff90;';

        const valText = document.createElement('div');
        valText.textContent = '100%';
        valText.style.cssText = 'font-size:12px; color:white; font-weight:bold; text-align:right;';

        slider.oninput = () => {
            scaleMultiplier = parseFloat(slider.value);
            valText.textContent = Math.round(scaleMultiplier * 100) + '%';
            if (Graphics._updateAllElements) Graphics._updateAllElements();
        };

        el.appendChild(title);
        el.appendChild(slider);
        el.appendChild(valText);
        document.body.appendChild(el);
    }

    // Support for dynamic window resizing
    window.addEventListener('resize', () => {
        if (Graphics._updateAllElements) Graphics._updateAllElements();
    });

})();
