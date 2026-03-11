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
 * @default height
 * @desc 'height' will always fill the screen height. 'inside' is default MV behavior.
 *
 * @help
 * This plugin forces the game to scale based on the window height.
 * Perfect for mobile or vertical displays.
 */

(function() {
    'use strict';

    const parameters = PluginManager.parameters('ResolutionScale');
    const scaleMode = parameters['mode'] || 'height';

    // Override the scale calculation
    const _Graphics_updateRealScale = Graphics._updateRealScale;
    Graphics._updateRealScale = function() {
        if (scaleMode === 'height') {
            // Force scale to be based strictly on window height vs game height
            this._realScale = window.innerHeight / this._height;
        } else {
            _Graphics_updateRealScale.call(this);
        }
    };

    // Ensure stretch is on by default so it actually uses _realScale
    const _Graphics_initialize = Graphics.initialize;
    Graphics.initialize = function(width, height, type) {
        _Graphics_initialize.call(this, width, height, type);
        this._stretchEnabled = true;
    };

    // Support for dynamic window resizing
    window.addEventListener('resize', () => {
        if (Graphics._updateAllElements) Graphics._updateAllElements();
    });

})();
