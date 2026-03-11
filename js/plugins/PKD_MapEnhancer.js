/*
 * Copyright (c) 2024 Vladimir Skrypnikov (Pheonix KageDesu)
 * <https://kdworkshop.net/>
 *
* License: Creative Commons 4.0 Attribution, Share Alike, Non-Commercial
 */


/*:
 * @plugindesc (v.1.0)[BASIC] Map Enhancer
 * @author Pheonix KageDesu
 * @target MZ MV
 * @url https://kdworkshop.net/plugins/map-enhancer/

 *
 * 
 * @help
 * ---------------------------------------------------------------------------
 
 *
 * GUIDE:
 * https://gist.github.com/KageDesu/8696344b17602c9e160e483a11cb752a
 *
 * ---------------------------------------------------------------------------
 * This is BASIC plugin version and have some restrictions:
 *    - You can't use this plugin in commercial projects
 *    - You can't remove or change plugin header
 *    - You can't modify plugin code
 *    - Plugin code is obfuscated
 *    - This version will not receive any updates
 *
 * If you like my Plugins, want more and offten updates, please support me
 * on one of the following platforms:
 *
 * Boosty:
 *     https://boosty.to/kagedesu
 * Patreon:
 *      https://www.patreon.com/KageDesu
 * YouTube:
 *      https://www.youtube.com/channel/UCA3R61ojF5vp5tGwJ1YqdgQ?
 *
 *
 * License: Creative Commons 4.0 Attribution, Share Alike, Non-Commercial
 * 
 * @param PKD_MapEnhancer
 * @text Map Enhancer Settings
 * 
 * 

 * 
 * 
 * @param openEditorKey
 * @parent PKD_MapEnhancer
 * @text Open Editor Key
 * @type select
 * @option F1
 * @option F3
 * @option F6
 * @option F7
 * @option F10
 * @option F11
 * @default F10
 * 
 * 
 * 

 * 
 * 
 * @param editorHelpLanguageIndex:int
 * @parent PKD_MapEnhancer
 * @text Help Language Index
 * @type select
 * @option English
 * @value 0
 * @option Русский
 * @value 1
 * @option 中文
 * @value 2
 * @default 0
 * @desc Editor Help Language Index
 * 
 * 

 * 
 * 
 * @param editorWindowSize:struct
 * @parent PKD_MapEnhancer
 * @text Editor Window Size
 * @type struct<WindowSize>
 * @default {"width:int":"540","height:int":"800"}
 * 
 * 

 * 
 * 
 * @param helpWindowSize:struct
 * @parent PKD_MapEnhancer
 * @text Help Window Size
 * @type struct<WindowSize>
 * @default {"width:int":"820","height:int":"240"}
 * 
 * 

 * 
 * 
 * 
 * @param spacer|endHolder @text‏‏‎ ‎@desc ===============================================`;
 * 

 */
/*:ru
 * @plugindesc (v.1.0)[BASIC] Map Enhancer
 * @author Pheonix KageDesu
 * @target MZ MV
 * @url https://kdworkshop.net/plugins/map-enhancer/

 *
 * 
 * @help
 * ---------------------------------------------------------------------------
 
 *
 * РУКОВОДСТВО:
 * https://gist.github.com/KageDesu/8696344b17602c9e160e483a11cb752a
 *
 * ---------------------------------------------------------------------------
 * Это БАЗОВАЯ версия плагина и имеет некоторые ограничения:
 *    - Вы не можете использовать этот плагин в коммерческих проектах
 *    - Вы не можете удалить или изменить заголовок плагина
 *    - Вы не можете изменять код плагина
 *    - Код плагина обфусцирован
 *    - Эта версия не будет получать обновлений
 *
 * Если вам нравятся мои плагины, вы хотите больше и частых обновлений,
 * пожалуйста, поддержите меня на одной из следующих платформ:
 *
 * Boosty:
 *     https://boosty.to/kagedesu
 * Patreon:
 *      https://www.patreon.com/KageDesu
 * YouTube:
 *      https://www.youtube.com/channel/UCA3R61ojF5vp5tGwJ1YqdgQ?
 *
 *
 * License: Creative Commons 4.0 Attribution, Share Alike, Non-Commercial
 * 
 * @param PKD_MapEnhancer
 * @text Map Enhancer Settings
 * 
 * 

 * 
 * 
 * @param openEditorKey
 * @parent PKD_MapEnhancer
 * @text Клавиша открытия редактора
 * @type select
 * @option F1
 * @option F3
 * @option F6
 * @option F7
 * @option F10
 * @option F11
 * @default F10
 * 
 * 
 * 

 * 
 * 
 * @param editorHelpLanguageIndex:int
 * @parent PKD_MapEnhancer
 * @text Индекс языка помощи
 * @type select
 * @option English
 * @value 0
 * @option Русский
 * @value 1
 * @option 中文
 * @value 2
 * @default 0
 * @desc Индекс языка помощи редактора
 * 
 * 

 * 
 * 
 * @param editorWindowSize:struct
 * @parent PKD_MapEnhancer
 * @text Размер окна редактора
 * @type struct<WindowSize>
 * @default {"width:int":"540","height:int":"800"}
 * 
 * 

 * 
 * 
 * @param helpWindowSize:struct
 * @parent PKD_MapEnhancer
 * @text Размер окна помощи
 * @type struct<WindowSize>
 * @default {"width:int":"820","height:int":"240"}
 * 
 * 

 * 
 * 
 * 
 * @param spacer|endHolder @text‏‏‎ ‎@desc ===============================================`;
 * 

 */
/*:zh-cn
 * @plugindesc (v.1.0)[BASIC] Map Enhancer
 * @author Pheonix KageDesu
 * @target MZ MV
 * @url https://kdworkshop.net/plugins/map-enhancer/

 *
 * 
 * @help
 * ---------------------------------------------------------------------------
 
 *
 * 指南:
 * https://gist.github.com/KageDesu/8696344b17602c9e160e483a11cb752a
 *
 * ---------------------------------------------------------------------------
 * 这是基本插件版本，有一些限制：
 *    - 您不能在商业项目中使用此插件
 *    - 您不能删除或更改插件标头
 *    - 您不能修改插件代码
 *    - 插件代码已混淆
 *    - 此版本将不会收到任何更新
 *
 * 如果 您喜欢我的插件，想要更多和更频繁的更新，请在以下平台上支持我：
 *
 * Boosty:
 *     https://boosty.to/kagedesu
 * Patreon:
 *      https://www.patreon.com/KageDesu
 * YouTube:
 *      https://www.youtube.com/channel/UCA3R61ojF5vp5tGwJ1YqdgQ?
 *
 *
 * License: Creative Commons 4.0 Attribution, Share Alike, Non-Commercial
 * 
 * @param PKD_MapEnhancer
 * @text Map Enhancer Settings
 * 
 * 

 * 
 * 
 * @param openEditorKey
 * @parent PKD_MapEnhancer
 * @text 打开编辑器键
 * @type select
 * @option F1
 * @option F3
 * @option F6
 * @option F7
 * @option F10
 * @option F11
 * @default F10
 * 
 * 
 * 

 * 
 * 
 * @param editorHelpLanguageIndex:int
 * @parent PKD_MapEnhancer
 * @text 帮助语言索引
 * @type select
 * @option English
 * @value 0
 * @option Русский
 * @value 1
 * @option 中文
 * @value 2
 * @default 0
 * @desc 编辑器帮助语言索引
 * 
 * 

 * 
 * 
 * @param editorWindowSize:struct
 * @parent PKD_MapEnhancer
 * @text 编辑器窗口大小
 * @type struct<WindowSize>
 * @default {"width:int":"540","height:int":"800"}
 * 
 * 

 * 
 * 
 * @param helpWindowSize:struct
 * @parent PKD_MapEnhancer
 * @text 帮助窗口大小
 * @type struct<WindowSize>
 * @default {"width:int":"820","height:int":"240"}
 * 
 * 

 * 
 * 
 * 
 * @param spacer|endHolder @text‏‏‎ ‎@desc ===============================================`;
 * 

 */
/*~struct~WindowSize:

@param width:int
@text Width
@type number
@default 816
@min 100




@param height:int
@text Height
@type number
@default 624
@min 100

*/

/*~struct~WindowSize:ru

@param width:int
@text Ширина
@type number
@default 816
@min 100




@param height:int
@text Высота
@type number
@default 624
@min 100

*/

/*~struct~WindowSize:zh-ch

@param width:int
@text 宽度
@type number
@default 816
@min 100




@param height:int
@text 高度
@type number
@default 624
@min 100

*/




var Imported;
(function (Imported) {
  Imported.PKD_MapEnhancer = true;
})(Imported || (Imported = {}));
//%[IDEA] Regions placement Mode!
//%[IDEA] Zoom Screen - как инструмент для увеличения экрана, чтобы можно было более точно работать с объектами
//%[IDEA] .GIF support
//%[IDEA] Spine support
//%[IDEA] Вызовы скриптов для добавления объектов и коллизий на карту, очистки карты, перезагрузки условий слоев
var PKD_MapEnhancer;
(function (PKD_MapEnhancer) {
  PKD_MapEnhancer.Version = "1.0";
  /**
   * Get NUI file from plugin
   * @param {string} name - Name of file
   * @returns {any} - File content
  */
  function GetNUIFile(name) {
    return window["$PKD_MapEnhancer_" + name];
  }
  PKD_MapEnhancer.GetNUIFile = GetNUIFile;
  /**
   * Link object to plugin scope level
   * @param {any} obj - Object to link
   * @param {string} name? - Name of object (optional)
   * @returns {void}
   *
  */
  function Link(obj, name) {
    try {
      if ((name === null || name === void 0 ? void 0 : name.length) > 0) {
        PKD_MapEnhancer[name] = obj;
      }
      else {
        let _name = obj.name;
        if ((_name === null || _name === void 0 ? void 0 : _name.length) > 0) {
          PKD_MapEnhancer[obj.name] = obj;
        }
        else {
          console.warn("You try link object with empty name");
        }
      }
    }
    catch (error) {
      console.warn(error);
    }
  }
  PKD_MapEnhancer.Link = Link;
})(PKD_MapEnhancer || (PKD_MapEnhancer = {}));


(function () {



  /*
  # ==========================================================================
  # ==========================================================================
  #
  #   EMBEDDED PHEONIX KAGEDESU PLUGINS CORE LIBRARY
  #   (This plugin may not use the entire code of this library)
  #
  # ==========================================================================
  # ==========================================================================
   * 
   * 
   */



  /*!
   * pixi-filters - v4.2.0
   * Compiled Fri, 05 Aug 2022 19:51:27 UTC
   *
   * pixi-filters is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   */
  var __filters = function (e, n, t, r, o, i, l, a) { "use strict"; var s = function (e, n) { return (s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, n) { e.__proto__ = n } || function (e, n) { for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]) })(e, n) }; function u(e, n) { function t() { this.constructor = e } s(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t) } var f = function () { return (f = Object.assign || function (e) { for (var n, t = arguments, r = 1, o = arguments.length; r < o; r++)for (var i in n = t[r]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]); return e }).apply(this, arguments) }; Object.create; Object.create; var c = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", m = function (e) { function n(n) { var t = e.call(this, c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n") || this; return t.gamma = 1, t.saturation = 1, t.contrast = 1, t.brightness = 1, t.red = 1, t.green = 1, t.blue = 1, t.alpha = 1, Object.assign(t, n), t } return u(n, e), n.prototype.apply = function (e, n, t, r) { this.uniforms.gamma = Math.max(this.gamma, 1e-4), this.uniforms.saturation = this.saturation, this.uniforms.contrast = this.contrast, this.uniforms.brightness = this.brightness, this.uniforms.red = this.red, this.uniforms.green = this.green, this.uniforms.blue = this.blue, this.uniforms.alpha = this.alpha, e.applyFilter(this, n, t, r) }, n }(n.Filter), p = function (e) { function n(n) { void 0 === n && (n = .5); var t = e.call(this, c, "\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n") || this; return t.threshold = n, t } return u(n, e), Object.defineProperty(n.prototype, "threshold", { get: function () { return this.uniforms.threshold }, set: function (e) { this.uniforms.threshold = e }, enumerable: !1, configurable: !0 }), n }(n.Filter), d = function (e) { function n(n, r, o) { void 0 === n && (n = 4), void 0 === r && (r = 3), void 0 === o && (o = !1); var i = e.call(this, c, o ? "\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n" : "\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}") || this; return i._kernels = [], i._blur = 4, i._quality = 3, i.uniforms.uOffset = new Float32Array(2), i._pixelSize = new t.Point, i.pixelSize = 1, i._clamp = o, Array.isArray(n) ? i.kernels = n : (i._blur = n, i.quality = r), i } return u(n, e), n.prototype.apply = function (e, n, t, r) { var o, i = this._pixelSize.x / n._frame.width, l = this._pixelSize.y / n._frame.height; if (1 === this._quality || 0 === this._blur) o = this._kernels[0] + .5, this.uniforms.uOffset[0] = o * i, this.uniforms.uOffset[1] = o * l, e.applyFilter(this, n, t, r); else { for (var a = e.getFilterTexture(), s = n, u = a, f = void 0, c = this._quality - 1, m = 0; m < c; m++)o = this._kernels[m] + .5, this.uniforms.uOffset[0] = o * i, this.uniforms.uOffset[1] = o * l, e.applyFilter(this, s, u, 1), f = s, s = u, u = f; o = this._kernels[c] + .5, this.uniforms.uOffset[0] = o * i, this.uniforms.uOffset[1] = o * l, e.applyFilter(this, s, t, r), e.returnFilterTexture(a) } }, n.prototype._updatePadding = function () { this.padding = Math.ceil(this._kernels.reduce((function (e, n) { return e + n + .5 }), 0)) }, n.prototype._generateKernels = function () { var e = this._blur, n = this._quality, t = [e]; if (e > 0) for (var r = e, o = e / n, i = 1; i < n; i++)r -= o, t.push(r); this._kernels = t, this._updatePadding() }, Object.defineProperty(n.prototype, "kernels", { get: function () { return this._kernels }, set: function (e) { Array.isArray(e) && e.length > 0 ? (this._kernels = e, this._quality = e.length, this._blur = Math.max.apply(Math, e)) : (this._kernels = [0], this._quality = 1) }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "clamp", { get: function () { return this._clamp }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "pixelSize", { get: function () { return this._pixelSize }, set: function (e) { "number" == typeof e ? (this._pixelSize.x = e, this._pixelSize.y = e) : Array.isArray(e) ? (this._pixelSize.x = e[0], this._pixelSize.y = e[1]) : e instanceof t.Point ? (this._pixelSize.x = e.x, this._pixelSize.y = e.y) : (this._pixelSize.x = 1, this._pixelSize.y = 1) }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "quality", { get: function () { return this._quality }, set: function (e) { this._quality = Math.max(1, Math.round(e)), this._generateKernels() }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "blur", { get: function () { return this._blur }, set: function (e) { this._blur = e, this._generateKernels() }, enumerable: !1, configurable: !0 }), n }(n.Filter), h = function (e) { function n(t) { var o = e.call(this, c, "uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n") || this; o.bloomScale = 1, o.brightness = 1, o._resolution = r.settings.FILTER_RESOLUTION, "number" == typeof t && (t = { threshold: t }); var i = Object.assign(n.defaults, t); o.bloomScale = i.bloomScale, o.brightness = i.brightness; var l = i.kernels, a = i.blur, s = i.quality, u = i.pixelSize, f = i.resolution; return o._extractFilter = new p(i.threshold), o._extractFilter.resolution = f, o._blurFilter = l ? new d(l) : new d(a, s), o.pixelSize = u, o.resolution = f, o } return u(n, e), n.prototype.apply = function (e, n, t, r, o) { var i = e.getFilterTexture(); this._extractFilter.apply(e, n, i, 1, o); var l = e.getFilterTexture(); this._blurFilter.apply(e, i, l, 1), this.uniforms.bloomScale = this.bloomScale, this.uniforms.brightness = this.brightness, this.uniforms.bloomTexture = l, e.applyFilter(this, n, t, r), e.returnFilterTexture(l), e.returnFilterTexture(i) }, Object.defineProperty(n.prototype, "resolution", { get: function () { return this._resolution }, set: function (e) { this._resolution = e, this._extractFilter && (this._extractFilter.resolution = e), this._blurFilter && (this._blurFilter.resolution = e) }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "threshold", { get: function () { return this._extractFilter.threshold }, set: function (e) { this._extractFilter.threshold = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "kernels", { get: function () { return this._blurFilter.kernels }, set: function (e) { this._blurFilter.kernels = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "blur", { get: function () { return this._blurFilter.blur }, set: function (e) { this._blurFilter.blur = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "quality", { get: function () { return this._blurFilter.quality }, set: function (e) { this._blurFilter.quality = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "pixelSize", { get: function () { return this._blurFilter.pixelSize }, set: function (e) { this._blurFilter.pixelSize = e }, enumerable: !1, configurable: !0 }), n.defaults = { threshold: .5, bloomScale: 1, brightness: 1, kernels: null, blur: 8, quality: 4, pixelSize: 1, resolution: r.settings.FILTER_RESOLUTION }, n }(n.Filter), g = function (e) { function n(n) { void 0 === n && (n = 8); var t = e.call(this, c, "varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod( coord , size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n\n    if (clamp(p.x, 0.0, 4.0) == p.x)\n    {\n        if (clamp(p.y, 0.0, 4.0) == p.y)\n        {\n            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n        }\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the rounded color..\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // determine the character to use\n    float gray = (color.r + color.g + color.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}\n") || this; return t.size = n, t } return u(n, e), Object.defineProperty(n.prototype, "size", { get: function () { return this.uniforms.pixelSize }, set: function (e) { this.uniforms.pixelSize = e }, enumerable: !1, configurable: !0 }), n }(n.Filter), v = function (e) { function n(n) { var t = e.call(this, c, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float transformX;\nuniform float transformY;\nuniform vec3 lightColor;\nuniform float lightAlpha;\nuniform vec3 shadowColor;\nuniform float shadowAlpha;\n\nvoid main(void) {\n    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float light = texture2D(uSampler, vTextureCoord - transform).a;\n    float shadow = texture2D(uSampler, vTextureCoord + transform).a;\n\n    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));\n    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));\n    gl_FragColor = vec4(color.rgb * color.a, color.a);\n}\n") || this; return t._thickness = 2, t._angle = 0, t.uniforms.lightColor = new Float32Array(3), t.uniforms.shadowColor = new Float32Array(3), Object.assign(t, { rotation: 45, thickness: 2, lightColor: 16777215, lightAlpha: .7, shadowColor: 0, shadowAlpha: .7 }, n), t.padding = 1, t } return u(n, e), n.prototype._updateTransform = function () { this.uniforms.transformX = this._thickness * Math.cos(this._angle), this.uniforms.transformY = this._thickness * Math.sin(this._angle) }, Object.defineProperty(n.prototype, "rotation", { get: function () { return this._angle / t.DEG_TO_RAD }, set: function (e) { this._angle = e * t.DEG_TO_RAD, this._updateTransform() }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "thickness", { get: function () { return this._thickness }, set: function (e) { this._thickness = e, this._updateTransform() }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "lightColor", { get: function () { return o.rgb2hex(this.uniforms.lightColor) }, set: function (e) { o.hex2rgb(e, this.uniforms.lightColor) }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "lightAlpha", { get: function () { return this.uniforms.lightAlpha }, set: function (e) { this.uniforms.lightAlpha = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "shadowColor", { get: function () { return o.rgb2hex(this.uniforms.shadowColor) }, set: function (e) { o.hex2rgb(e, this.uniforms.shadowColor) }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "shadowAlpha", { get: function () { return this.uniforms.shadowAlpha }, set: function (e) { this.uniforms.shadowAlpha = e }, enumerable: !1, configurable: !0 }), n }(n.Filter), y = function (e) { function n(n, o, s, u) { void 0 === n && (n = 2), void 0 === o && (o = 4), void 0 === s && (s = r.settings.FILTER_RESOLUTION), void 0 === u && (u = 5); var f, c, m = e.call(this) || this; return "number" == typeof n ? (f = n, c = n) : n instanceof t.Point ? (f = n.x, c = n.y) : Array.isArray(n) && (f = n[0], c = n[1]), m.blurXFilter = new a.BlurFilterPass(!0, f, o, s, u), m.blurYFilter = new a.BlurFilterPass(!1, c, o, s, u), m.blurYFilter.blendMode = i.BLEND_MODES.SCREEN, m.defaultFilter = new l.AlphaFilter, m } return u(n, e), n.prototype.apply = function (e, n, t, r) { var o = e.getFilterTexture(); this.defaultFilter.apply(e, n, t, r), this.blurXFilter.apply(e, n, o, 1), this.blurYFilter.apply(e, o, t, 0), e.returnFilterTexture(o) }, Object.defineProperty(n.prototype, "blur", { get: function () { return this.blurXFilter.blur }, set: function (e) { this.blurXFilter.blur = this.blurYFilter.blur = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "blurX", { get: function () { return this.blurXFilter.blur }, set: function (e) { this.blurXFilter.blur = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "blurY", { get: function () { return this.blurYFilter.blur }, set: function (e) { this.blurYFilter.blur = e }, enumerable: !1, configurable: !0 }), n }(n.Filter), b = function (e) { function n(t) { var r = e.call(this, c, "uniform float radius;\nuniform float strength;\nuniform vec2 center;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nvoid main()\n{\n    vec2 coord = vTextureCoord * filterArea.xy;\n    coord -= center * dimensions.xy;\n    float distance = length(coord);\n    if (distance < radius) {\n        float percent = distance / radius;\n        if (strength > 0.0) {\n            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);\n        } else {\n            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n        }\n    }\n    coord += center * dimensions.xy;\n    coord /= filterArea.xy;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    gl_FragColor = color;\n}\n") || this; return r.uniforms.dimensions = new Float32Array(2), Object.assign(r, n.defaults, t), r } return u(n, e), n.prototype.apply = function (e, n, t, r) { var o = n.filterFrame, i = o.width, l = o.height; this.uniforms.dimensions[0] = i, this.uniforms.dimensions[1] = l, e.applyFilter(this, n, t, r) }, Object.defineProperty(n.prototype, "radius", { get: function () { return this.uniforms.radius }, set: function (e) { this.uniforms.radius = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "strength", { get: function () { return this.uniforms.strength }, set: function (e) { this.uniforms.strength = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "center", { get: function () { return this.uniforms.center }, set: function (e) { this.uniforms.center = e }, enumerable: !1, configurable: !0 }), n.defaults = { center: [.5, .5], radius: 100, strength: 1 }, n }(n.Filter), x = function (e) { function t(n, t, r) { void 0 === t && (t = !1), void 0 === r && (r = 1); var o = e.call(this, c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D colorMap;\nuniform float _mix;\nuniform float _size;\nuniform float _sliceSize;\nuniform float _slicePixelSize;\nuniform float _sliceInnerSize;\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord.xy);\n\n    vec4 adjusted;\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n        float innerWidth = _size - 1.0;\n        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);\n        float zSlice1 = min(zSlice0 + 1.0, innerWidth);\n        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;\n        float s0 = xOffset + (zSlice0 * _sliceSize);\n        float s1 = xOffset + (zSlice1 * _sliceSize);\n        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);\n        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));\n        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));\n        float zOffset = fract(color.b * innerWidth);\n        adjusted = mix(slice0Color, slice1Color, zOffset);\n\n        color.rgb *= color.a;\n    }\n    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);\n\n}") || this; return o.mix = 1, o._size = 0, o._sliceSize = 0, o._slicePixelSize = 0, o._sliceInnerSize = 0, o._nearest = !1, o._scaleMode = null, o._colorMap = null, o._scaleMode = null, o.nearest = t, o.mix = r, o.colorMap = n, o } return u(t, e), t.prototype.apply = function (e, n, t, r) { this.uniforms._mix = this.mix, e.applyFilter(this, n, t, r) }, Object.defineProperty(t.prototype, "colorSize", { get: function () { return this._size }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "colorMap", { get: function () { return this._colorMap }, set: function (e) { var t; e && (e instanceof n.Texture || (e = n.Texture.from(e)), (null === (t = e) || void 0 === t ? void 0 : t.baseTexture) && (e.baseTexture.scaleMode = this._scaleMode, e.baseTexture.mipmap = i.MIPMAP_MODES.OFF, this._size = e.height, this._sliceSize = 1 / this._size, this._slicePixelSize = this._sliceSize / this._size, this._sliceInnerSize = this._slicePixelSize * (this._size - 1), this.uniforms._size = this._size, this.uniforms._sliceSize = this._sliceSize, this.uniforms._slicePixelSize = this._slicePixelSize, this.uniforms._sliceInnerSize = this._sliceInnerSize, this.uniforms.colorMap = e), this._colorMap = e) }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "nearest", { get: function () { return this._nearest }, set: function (e) { this._nearest = e, this._scaleMode = e ? i.SCALE_MODES.NEAREST : i.SCALE_MODES.LINEAR; var n = this._colorMap; n && n.baseTexture && (n.baseTexture._glTextures = {}, n.baseTexture.scaleMode = this._scaleMode, n.baseTexture.mipmap = i.MIPMAP_MODES.OFF, n._updateID++, n.baseTexture.emit("update", n.baseTexture)) }, enumerable: !1, configurable: !0 }), t.prototype.updateColorMap = function () { var e = this._colorMap; e && e.baseTexture && (e._updateID++, e.baseTexture.emit("update", e.baseTexture), this.colorMap = e) }, t.prototype.destroy = function (n) { void 0 === n && (n = !1), this._colorMap && this._colorMap.destroy(n), e.prototype.destroy.call(this) }, t }(n.Filter), _ = function (e) { function n(n, t) { void 0 === n && (n = 0), void 0 === t && (t = 1); var r = e.call(this, c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 color;\nuniform float alpha;\n\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);\n}\n") || this; return r._color = 0, r._alpha = 1, r.uniforms.color = new Float32Array(3), r.color = n, r.alpha = t, r } return u(n, e), Object.defineProperty(n.prototype, "color", { get: function () { return this._color }, set: function (e) { var n = this.uniforms.color; "number" == typeof e ? (o.hex2rgb(e, n), this._color = e) : (n[0] = e[0], n[1] = e[1], n[2] = e[2], this._color = o.rgb2hex(n)) }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "alpha", { get: function () { return this._alpha }, set: function (e) { this.uniforms.alpha = e, this._alpha = e }, enumerable: !1, configurable: !0 }), n }(n.Filter), C = function (e) { function n(n, t, r) { void 0 === n && (n = 16711680), void 0 === t && (t = 0), void 0 === r && (r = .4); var o = e.call(this, c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 originalColor;\nuniform vec3 newColor;\nuniform float epsilon;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));\n    float colorDistance = length(colorDiff);\n    float doReplace = step(colorDistance, epsilon);\n    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);\n}\n") || this; return o._originalColor = 16711680, o._newColor = 0, o.uniforms.originalColor = new Float32Array(3), o.uniforms.newColor = new Float32Array(3), o.originalColor = n, o.newColor = t, o.epsilon = r, o } return u(n, e), Object.defineProperty(n.prototype, "originalColor", { get: function () { return this._originalColor }, set: function (e) { var n = this.uniforms.originalColor; "number" == typeof e ? (o.hex2rgb(e, n), this._originalColor = e) : (n[0] = e[0], n[1] = e[1], n[2] = e[2], this._originalColor = o.rgb2hex(n)) }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "newColor", { get: function () { return this._newColor }, set: function (e) { var n = this.uniforms.newColor; "number" == typeof e ? (o.hex2rgb(e, n), this._newColor = e) : (n[0] = e[0], n[1] = e[1], n[2] = e[2], this._newColor = o.rgb2hex(n)) }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "epsilon", { get: function () { return this.uniforms.epsilon }, set: function (e) { this.uniforms.epsilon = e }, enumerable: !1, configurable: !0 }), n }(n.Filter), S = function (e) { function n(n, t, r) { void 0 === t && (t = 200), void 0 === r && (r = 200); var o = e.call(this, c, "precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n") || this; return o.uniforms.texelSize = new Float32Array(2), o.uniforms.matrix = new Float32Array(9), void 0 !== n && (o.matrix = n), o.width = t, o.height = r, o } return u(n, e), Object.defineProperty(n.prototype, "matrix", { get: function () { return this.uniforms.matrix }, set: function (e) { var n = this; e.forEach((function (e, t) { n.uniforms.matrix[t] = e })) }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "width", { get: function () { return 1 / this.uniforms.texelSize[0] }, set: function (e) { this.uniforms.texelSize[0] = 1 / e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "height", { get: function () { return 1 / this.uniforms.texelSize[1] }, set: function (e) { this.uniforms.texelSize[1] = 1 / e }, enumerable: !1, configurable: !0 }), n }(n.Filter), F = function (e) { function n() { return e.call(this, c, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n") || this } return u(n, e), n }(n.Filter), z = function (e) { function n(t) { var r = e.call(this, c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nconst float SQRT_2 = 1.414213;\n\nconst float light = 1.0;\n\nuniform float curvature;\nuniform float lineWidth;\nuniform float lineContrast;\nuniform bool verticalLine;\nuniform float noise;\nuniform float noiseSize;\n\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\n\nuniform float seed;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));\n    \n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 rgb = gl_FragColor.rgb;\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        rgb += _noise * noise;\n    }\n\n    if (lineWidth > 0.0)\n    {\n        float _c = curvature > 0. ? curvature : 1.;\n        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;\n        vec2 uv = dir * k;\n\n        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;\n        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;\n        rgb *= j;\n        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);\n        rgb *= 0.99 + ceil(segment) * 0.015;\n    }\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    gl_FragColor.rgb = rgb;\n}\n") || this; return r.time = 0, r.seed = 0, r.uniforms.dimensions = new Float32Array(2), Object.assign(r, n.defaults, t), r } return u(n, e), n.prototype.apply = function (e, n, t, r) { var o = n.filterFrame, i = o.width, l = o.height; this.uniforms.dimensions[0] = i, this.uniforms.dimensions[1] = l, this.uniforms.seed = this.seed, this.uniforms.time = this.time, e.applyFilter(this, n, t, r) }, Object.defineProperty(n.prototype, "curvature", { get: function () { return this.uniforms.curvature }, set: function (e) { this.uniforms.curvature = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "lineWidth", { get: function () { return this.uniforms.lineWidth }, set: function (e) { this.uniforms.lineWidth = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "lineContrast", { get: function () { return this.uniforms.lineContrast }, set: function (e) { this.uniforms.lineContrast = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "verticalLine", { get: function () { return this.uniforms.verticalLine }, set: function (e) { this.uniforms.verticalLine = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "noise", { get: function () { return this.uniforms.noise }, set: function (e) { this.uniforms.noise = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "noiseSize", { get: function () { return this.uniforms.noiseSize }, set: function (e) { this.uniforms.noiseSize = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "vignetting", { get: function () { return this.uniforms.vignetting }, set: function (e) { this.uniforms.vignetting = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "vignettingAlpha", { get: function () { return this.uniforms.vignettingAlpha }, set: function (e) { this.uniforms.vignettingAlpha = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "vignettingBlur", { get: function () { return this.uniforms.vignettingBlur }, set: function (e) { this.uniforms.vignettingBlur = e }, enumerable: !1, configurable: !0 }), n.defaults = { curvature: 1, lineWidth: 1, lineContrast: .25, verticalLine: !1, noise: 0, noiseSize: 1, seed: 0, vignetting: .3, vignettingAlpha: 1, vignettingBlur: .3, time: 0 }, n }(n.Filter), O = function (e) { function n(n, t) { void 0 === n && (n = 1), void 0 === t && (t = 5); var r = e.call(this, c, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * filterArea.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n") || this; return r.scale = n, r.angle = t, r } return u(n, e), Object.defineProperty(n.prototype, "scale", { get: function () { return this.uniforms.scale }, set: function (e) { this.uniforms.scale = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "angle", { get: function () { return this.uniforms.angle }, set: function (e) { this.uniforms.angle = e }, enumerable: !1, configurable: !0 }), n }(n.Filter), P = function (e) { function i(o) { var l = e.call(this) || this; l.angle = 45, l._distance = 5, l._resolution = r.settings.FILTER_RESOLUTION; var a = o ? f(f({}, i.defaults), o) : i.defaults, s = a.kernels, u = a.blur, m = a.quality, p = a.pixelSize, h = a.resolution; l._tintFilter = new n.Filter(c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\n\nuniform vec2 shift;\nuniform vec4 inputSize;\n\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);\n\n    // Premultiply alpha\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}"), l._tintFilter.uniforms.color = new Float32Array(4), l._tintFilter.uniforms.shift = new t.Point, l._tintFilter.resolution = h, l._blurFilter = s ? new d(s) : new d(u, m), l.pixelSize = p, l.resolution = h; var g = a.shadowOnly, v = a.rotation, y = a.distance, b = a.alpha, x = a.color; return l.shadowOnly = g, l.rotation = v, l.distance = y, l.alpha = b, l.color = x, l._updatePadding(), l } return u(i, e), i.prototype.apply = function (e, n, t, r) { var o = e.getFilterTexture(); this._tintFilter.apply(e, n, o, 1), this._blurFilter.apply(e, o, t, r), !0 !== this.shadowOnly && e.applyFilter(this, n, t, 0), e.returnFilterTexture(o) }, i.prototype._updatePadding = function () { this.padding = this.distance + 2 * this.blur }, i.prototype._updateShift = function () { this._tintFilter.uniforms.shift.set(this.distance * Math.cos(this.angle), this.distance * Math.sin(this.angle)) }, Object.defineProperty(i.prototype, "resolution", { get: function () { return this._resolution }, set: function (e) { this._resolution = e, this._tintFilter && (this._tintFilter.resolution = e), this._blurFilter && (this._blurFilter.resolution = e) }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "distance", { get: function () { return this._distance }, set: function (e) { this._distance = e, this._updatePadding(), this._updateShift() }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "rotation", { get: function () { return this.angle / t.DEG_TO_RAD }, set: function (e) { this.angle = e * t.DEG_TO_RAD, this._updateShift() }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "alpha", { get: function () { return this._tintFilter.uniforms.alpha }, set: function (e) { this._tintFilter.uniforms.alpha = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "color", { get: function () { return o.rgb2hex(this._tintFilter.uniforms.color) }, set: function (e) { o.hex2rgb(e, this._tintFilter.uniforms.color) }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "kernels", { get: function () { return this._blurFilter.kernels }, set: function (e) { this._blurFilter.kernels = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "blur", { get: function () { return this._blurFilter.blur }, set: function (e) { this._blurFilter.blur = e, this._updatePadding() }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "quality", { get: function () { return this._blurFilter.quality }, set: function (e) { this._blurFilter.quality = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "pixelSize", { get: function () { return this._blurFilter.pixelSize }, set: function (e) { this._blurFilter.pixelSize = e }, enumerable: !1, configurable: !0 }), i.defaults = { rotation: 45, distance: 5, color: 0, alpha: .5, shadowOnly: !1, kernels: null, blur: 2, quality: 3, pixelSize: 1, resolution: r.settings.FILTER_RESOLUTION }, i }(n.Filter), A = function (e) { function n(n) { void 0 === n && (n = 5); var t = e.call(this, c, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4 filterArea;\n\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 / filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -= texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor += texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb = vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler, vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha, alpha);\n}\n") || this; return t.strength = n, t } return u(n, e), Object.defineProperty(n.prototype, "strength", { get: function () { return this.uniforms.strength }, set: function (e) { this.uniforms.strength = e }, enumerable: !1, configurable: !0 }), n }(n.Filter), T = function (e) { function r(t) { var o = e.call(this, c, "// precision highp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\nuniform float aspect;\n\nuniform sampler2D displacementMap;\nuniform float offset;\nuniform float sinDir;\nuniform float cosDir;\nuniform int fillMode;\n\nuniform float seed;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nconst int TRANSPARENT = 0;\nconst int ORIGINAL = 1;\nconst int LOOP = 2;\nconst int CLAMP = 3;\nconst int MIRROR = 4;\n\nvoid main(void)\n{\n    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;\n\n    if (coord.x > 1.0 || coord.y > 1.0) {\n        return;\n    }\n\n    float cx = coord.x - 0.5;\n    float cy = (coord.y - 0.5) * aspect;\n    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;\n\n    // displacementMap: repeat\n    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);\n\n    // displacementMap: mirror\n    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);\n\n    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));\n\n    float displacement = (dc.r - dc.g) * (offset / filterArea.x);\n\n    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);\n\n    if (fillMode == CLAMP) {\n        coord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    } else {\n        if( coord.x > filterClamp.z ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x -= filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x = filterClamp.z * 2.0 - coord.x;\n            }\n        } else if( coord.x < filterClamp.x ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x += filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x *= -filterClamp.z;\n            }\n        }\n\n        if( coord.y > filterClamp.w ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y -= filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y = filterClamp.w * 2.0 - coord.y;\n            }\n        } else if( coord.y < filterClamp.y ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y += filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y *= -filterClamp.w;\n            }\n        }\n    }\n\n    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;\n    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;\n    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;\n    gl_FragColor.a = texture2D(uSampler, coord).a;\n}\n") || this; return o.offset = 100, o.fillMode = r.TRANSPARENT, o.average = !1, o.seed = 0, o.minSize = 8, o.sampleSize = 512, o._slices = 0, o._offsets = new Float32Array(1), o._sizes = new Float32Array(1), o._direction = -1, o.uniforms.dimensions = new Float32Array(2), o._canvas = document.createElement("canvas"), o._canvas.width = 4, o._canvas.height = o.sampleSize, o.texture = n.Texture.from(o._canvas, { scaleMode: i.SCALE_MODES.NEAREST }), Object.assign(o, r.defaults, t), o } return u(r, e), r.prototype.apply = function (e, n, t, r) { var o = n.filterFrame, i = o.width, l = o.height; this.uniforms.dimensions[0] = i, this.uniforms.dimensions[1] = l, this.uniforms.aspect = l / i, this.uniforms.seed = this.seed, this.uniforms.offset = this.offset, this.uniforms.fillMode = this.fillMode, e.applyFilter(this, n, t, r) }, r.prototype._randomizeSizes = function () { var e = this._sizes, n = this._slices - 1, t = this.sampleSize, r = Math.min(this.minSize / t, .9 / this._slices); if (this.average) { for (var o = this._slices, i = 1, l = 0; l < n; l++) { var a = i / (o - l), s = Math.max(a * (1 - .6 * Math.random()), r); e[l] = s, i -= s } e[n] = i } else { i = 1; var u = Math.sqrt(1 / this._slices); for (l = 0; l < n; l++) { s = Math.max(u * i * Math.random(), r); e[l] = s, i -= s } e[n] = i } this.shuffle() }, r.prototype.shuffle = function () { for (var e = this._sizes, n = this._slices - 1; n > 0; n--) { var t = Math.random() * n >> 0, r = e[n]; e[n] = e[t], e[t] = r } }, r.prototype._randomizeOffsets = function () { for (var e = 0; e < this._slices; e++)this._offsets[e] = Math.random() * (Math.random() < .5 ? -1 : 1) }, r.prototype.refresh = function () { this._randomizeSizes(), this._randomizeOffsets(), this.redraw() }, r.prototype.redraw = function () { var e, n = this.sampleSize, t = this.texture, r = this._canvas.getContext("2d"); r.clearRect(0, 0, 8, n); for (var o = 0, i = 0; i < this._slices; i++) { e = Math.floor(256 * this._offsets[i]); var l = this._sizes[i] * n, a = e > 0 ? e : 0, s = e < 0 ? -e : 0; r.fillStyle = "rgba(" + a + ", " + s + ", 0, 1)", r.fillRect(0, o >> 0, n, l + 1 >> 0), o += l } t.baseTexture.update(), this.uniforms.displacementMap = t }, Object.defineProperty(r.prototype, "sizes", { get: function () { return this._sizes }, set: function (e) { for (var n = Math.min(this._slices, e.length), t = 0; t < n; t++)this._sizes[t] = e[t] }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "offsets", { get: function () { return this._offsets }, set: function (e) { for (var n = Math.min(this._slices, e.length), t = 0; t < n; t++)this._offsets[t] = e[t] }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "slices", { get: function () { return this._slices }, set: function (e) { this._slices !== e && (this._slices = e, this.uniforms.slices = e, this._sizes = this.uniforms.slicesWidth = new Float32Array(e), this._offsets = this.uniforms.slicesOffset = new Float32Array(e), this.refresh()) }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "direction", { get: function () { return this._direction }, set: function (e) { if (this._direction !== e) { this._direction = e; var n = e * t.DEG_TO_RAD; this.uniforms.sinDir = Math.sin(n), this.uniforms.cosDir = Math.cos(n) } }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "red", { get: function () { return this.uniforms.red }, set: function (e) { this.uniforms.red = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "green", { get: function () { return this.uniforms.green }, set: function (e) { this.uniforms.green = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "blue", { get: function () { return this.uniforms.blue }, set: function (e) { this.uniforms.blue = e }, enumerable: !1, configurable: !0 }), r.prototype.destroy = function () { var e; null === (e = this.texture) || void 0 === e || e.destroy(!0), this.texture = this._canvas = this.red = this.green = this.blue = this._sizes = this._offsets = null }, r.defaults = { slices: 5, offset: 100, direction: 0, fillMode: 0, average: !1, seed: 0, red: [0, 0], green: [0, 0], blue: [0, 0], minSize: 8, sampleSize: 512 }, r.TRANSPARENT = 0, r.ORIGINAL = 1, r.LOOP = 2, r.CLAMP = 3, r.MIRROR = 4, r }(n.Filter), w = function (e) { function n(t) { var r = this, o = Object.assign({}, n.defaults, t), i = o.outerStrength, l = o.innerStrength, a = o.color, s = o.knockout, u = o.quality, f = Math.round(o.distance); return (r = e.call(this, c, "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float outerStrength;\nuniform float innerStrength;\n\nuniform vec4 glowColor;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform bool knockout;\n\nconst float PI = 3.14159265358979323846264;\n\nconst float DIST = __DIST__;\nconst float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);\nconst float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);\n\nconst float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;\n\nvoid main(void) {\n    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n\n    float totalAlpha = 0.0;\n\n    vec2 direction;\n    vec2 displaced;\n    vec4 curColor;\n\n    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {\n       direction = vec2(cos(angle), sin(angle)) * px;\n\n       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {\n           displaced = clamp(vTextureCoord + direction * \n                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);\n\n           curColor = texture2D(uSampler, displaced);\n\n           totalAlpha += (DIST - curDistance) * curColor.a;\n       }\n    }\n    \n    curColor = texture2D(uSampler, vTextureCoord);\n\n    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);\n\n    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;\n    float innerGlowStrength = min(1.0, innerGlowAlpha);\n    \n    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);\n\n    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);\n    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);\n\n    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;\n    \n    if (knockout) {\n      float resultAlpha = outerGlowAlpha + innerGlowAlpha;\n      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);\n    }\n    else {\n      gl_FragColor = innerColor + outerGlowColor;\n    }\n}\n".replace(/__ANGLE_STEP_SIZE__/gi, "" + (1 / u / f).toFixed(7)).replace(/__DIST__/gi, f.toFixed(0) + ".0")) || this).uniforms.glowColor = new Float32Array([0, 0, 0, 1]), Object.assign(r, { color: a, outerStrength: i, innerStrength: l, padding: f, knockout: s }), r } return u(n, e), Object.defineProperty(n.prototype, "color", { get: function () { return o.rgb2hex(this.uniforms.glowColor) }, set: function (e) { o.hex2rgb(e, this.uniforms.glowColor) }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "outerStrength", { get: function () { return this.uniforms.outerStrength }, set: function (e) { this.uniforms.outerStrength = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "innerStrength", { get: function () { return this.uniforms.innerStrength }, set: function (e) { this.uniforms.innerStrength = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "knockout", { get: function () { return this.uniforms.knockout }, set: function (e) { this.uniforms.knockout = e }, enumerable: !1, configurable: !0 }), n.defaults = { distance: 10, outerStrength: 4, innerStrength: 0, color: 16777215, quality: .1, knockout: !1 }, n }(n.Filter), D = function (e) { function n(r) { var o = e.call(this, c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2 light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float gain;\nuniform float lacunarity;\nuniform float time;\nuniform float alpha;\n\n${perlin}\n\nvoid main(void) {\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    float d;\n\n    if (parallel) {\n        float _cos = light.x;\n        float _sin = light.y;\n        d = (_cos * coord.x) + (_sin * coord.y * aspect);\n    } else {\n        float dx = coord.x - light.x / dimensions.x;\n        float dy = (coord.y - light.y / dimensions.y) * aspect;\n        float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n        d = dy / dis;\n    }\n\n    vec3 dir = vec3(d, d, 0.0);\n\n    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);\n    noise = mix(noise, 0.0, 0.3);\n    //fade vertically.\n    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);\n    mist.a = 1.0;\n    // apply user alpha\n    mist *= alpha;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;\n\n}\n".replace("${perlin}", "vec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n    return mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n    float sum = 0.0;\n    float sc = 1.0;\n    float totalgain = 1.0;\n    for (float i = 0.0; i < 6.0; i++)\n    {\n        sum += totalgain * pnoise(P * sc, rep);\n        sc *= lacunarity;\n        totalgain *= gain;\n    }\n    return abs(sum);\n}\n")) || this; o.parallel = !0, o.time = 0, o._angle = 0, o.uniforms.dimensions = new Float32Array(2); var i = Object.assign(n.defaults, r); return o._angleLight = new t.Point, o.angle = i.angle, o.gain = i.gain, o.lacunarity = i.lacunarity, o.alpha = i.alpha, o.parallel = i.parallel, o.center = i.center, o.time = i.time, o } return u(n, e), n.prototype.apply = function (e, n, t, r) { var o = n.filterFrame, i = o.width, l = o.height; this.uniforms.light = this.parallel ? this._angleLight : this.center, this.uniforms.parallel = this.parallel, this.uniforms.dimensions[0] = i, this.uniforms.dimensions[1] = l, this.uniforms.aspect = l / i, this.uniforms.time = this.time, this.uniforms.alpha = this.alpha, e.applyFilter(this, n, t, r) }, Object.defineProperty(n.prototype, "angle", { get: function () { return this._angle }, set: function (e) { this._angle = e; var n = e * t.DEG_TO_RAD; this._angleLight.x = Math.cos(n), this._angleLight.y = Math.sin(n) }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "gain", { get: function () { return this.uniforms.gain }, set: function (e) { this.uniforms.gain = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "lacunarity", { get: function () { return this.uniforms.lacunarity }, set: function (e) { this.uniforms.lacunarity = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "alpha", { get: function () { return this.uniforms.alpha }, set: function (e) { this.uniforms.alpha = e }, enumerable: !1, configurable: !0 }), n.defaults = { angle: 30, gain: .5, lacunarity: 2.5, time: 0, parallel: !0, center: [0, 0], alpha: 1 }, n }(n.Filter), j = function (e) { function n(n, r, o) { void 0 === n && (n = [0, 0]), void 0 === r && (r = 5), void 0 === o && (o = 0); var i = e.call(this, c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uVelocity;\nuniform int uKernelSize;\nuniform float uOffset;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\n// Notice:\n// the perfect way:\n//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);\n// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.\n// So use uKernelSize directly.\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    vec2 velocity = uVelocity / filterArea.xy;\n    float offset = -uOffset / length(uVelocity) - 0.5;\n    int k = uKernelSize - 1;\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n        vec2 bias = velocity * (float(i) / float(k) + offset);\n        color += texture2D(uSampler, vTextureCoord + bias);\n    }\n    gl_FragColor = color / float(uKernelSize);\n}\n") || this; return i.kernelSize = 5, i.uniforms.uVelocity = new Float32Array(2), i._velocity = new t.ObservablePoint(i.velocityChanged, i), i.setVelocity(n), i.kernelSize = r, i.offset = o, i } return u(n, e), n.prototype.apply = function (e, n, t, r) { var o = this.velocity, i = o.x, l = o.y; this.uniforms.uKernelSize = 0 !== i || 0 !== l ? this.kernelSize : 0, e.applyFilter(this, n, t, r) }, Object.defineProperty(n.prototype, "velocity", { get: function () { return this._velocity }, set: function (e) { this.setVelocity(e) }, enumerable: !1, configurable: !0 }), n.prototype.setVelocity = function (e) { if (Array.isArray(e)) { var n = e[0], t = e[1]; this._velocity.set(n, t) } else this._velocity.copyFrom(e) }, n.prototype.velocityChanged = function () { this.uniforms.uVelocity[0] = this._velocity.x, this.uniforms.uVelocity[1] = this._velocity.y, this.padding = 1 + (Math.max(Math.abs(this._velocity.x), Math.abs(this._velocity.y)) >> 0) }, Object.defineProperty(n.prototype, "offset", { get: function () { return this.uniforms.uOffset }, set: function (e) { this.uniforms.uOffset = e }, enumerable: !1, configurable: !0 }), n }(n.Filter), M = function (e) { function n(n, t, r) { void 0 === t && (t = .05), void 0 === r && (r = n.length); var o = e.call(this, c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float epsilon;\n\nconst int MAX_COLORS = %maxColors%;\n\nuniform vec3 originalColors[MAX_COLORS];\nuniform vec3 targetColors[MAX_COLORS];\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    float alpha = gl_FragColor.a;\n    if (alpha < 0.0001)\n    {\n      return;\n    }\n\n    vec3 color = gl_FragColor.rgb / alpha;\n\n    for(int i = 0; i < MAX_COLORS; i++)\n    {\n      vec3 origColor = originalColors[i];\n      if (origColor.r < 0.0)\n      {\n        break;\n      }\n      vec3 colorDiff = origColor - color;\n      if (length(colorDiff) < epsilon)\n      {\n        vec3 targetColor = targetColors[i];\n        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);\n        return;\n      }\n    }\n}\n".replace(/%maxColors%/g, r.toFixed(0))) || this; return o._replacements = [], o._maxColors = 0, o.epsilon = t, o._maxColors = r, o.uniforms.originalColors = new Float32Array(3 * r), o.uniforms.targetColors = new Float32Array(3 * r), o.replacements = n, o } return u(n, e), Object.defineProperty(n.prototype, "replacements", { get: function () { return this._replacements }, set: function (e) { var n = this.uniforms.originalColors, t = this.uniforms.targetColors, r = e.length; if (r > this._maxColors) throw new Error("Length of replacements (" + r + ") exceeds the maximum colors length (" + this._maxColors + ")"); n[3 * r] = -1; for (var i = 0; i < r; i++) { var l = e[i], a = l[0]; "number" == typeof a ? a = o.hex2rgb(a) : l[0] = o.rgb2hex(a), n[3 * i] = a[0], n[3 * i + 1] = a[1], n[3 * i + 2] = a[2]; var s = l[1]; "number" == typeof s ? s = o.hex2rgb(s) : l[1] = o.rgb2hex(s), t[3 * i] = s[0], t[3 * i + 1] = s[1], t[3 * i + 2] = s[2] } this._replacements = e }, enumerable: !1, configurable: !0 }), n.prototype.refresh = function () { this.replacements = this._replacements }, Object.defineProperty(n.prototype, "maxColors", { get: function () { return this._maxColors }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "epsilon", { get: function () { return this.uniforms.epsilon }, set: function (e) { this.uniforms.epsilon = e }, enumerable: !1, configurable: !0 }), n }(n.Filter), R = function (e) { function n(t, r) { void 0 === r && (r = 0); var o = e.call(this, c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform float sepia;\nuniform float noise;\nuniform float noiseSize;\nuniform float scratch;\nuniform float scratchDensity;\nuniform float scratchWidth;\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\nuniform float seed;\n\nconst float SQRT_2 = 1.414213;\nconst vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 Overlay(vec3 src, vec3 dst)\n{\n    // if (dst <= 0.5) then: 2 * src * dst\n    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)\n    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\n                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\n                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));\n}\n\n\nvoid main()\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 color = gl_FragColor.rgb;\n\n    if (sepia > 0.0)\n    {\n        float gray = (color.x + color.y + color.z) / 3.0;\n        vec3 grayscale = vec3(gray);\n\n        color = Overlay(SEPIA_RGB, grayscale);\n\n        color = grayscale + sepia * (color - grayscale);\n    }\n\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        vec2 dir = vec2(vec2(0.5, 0.5) - coord);\n        dir.y *= dimensions.y / dimensions.x;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    if (scratchDensity > seed && scratch != 0.0)\n    {\n        float phase = seed * 256.0;\n        float s = mod(floor(phase), 2.0);\n        float dist = 1.0 / scratchDensity;\n        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));\n        if (d < seed * 0.6 + 0.4)\n        {\n            highp float period = scratchDensity * 10.0;\n\n            float xx = coord.x * period + phase;\n            float aa = abs(mod(xx, 0.5) * 4.0);\n            float bb = mod(floor(xx / 0.5), 2.0);\n            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);\n\n            float kk = 2.0 * period;\n            float dw = scratchWidth / dimensions.x * (0.75 + seed);\n            float dh = dw * kk;\n\n            float tine = (yy - (2.0 - dh));\n\n            if (tine > 0.0) {\n                float _sign = sign(scratch);\n\n                tine = s * tine / period + scratch + 0.1;\n                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);\n\n                color.rgb *= tine;\n            }\n        }\n    }\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);\n        // float _noise = snoise(d) * 0.5;\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        color += _noise * noise;\n    }\n\n    gl_FragColor.rgb = color;\n}\n") || this; return o.seed = 0, o.uniforms.dimensions = new Float32Array(2), "number" == typeof t ? (o.seed = t, t = void 0) : o.seed = r, Object.assign(o, n.defaults, t), o } return u(n, e), n.prototype.apply = function (e, n, t, r) { var o, i; this.uniforms.dimensions[0] = null === (o = n.filterFrame) || void 0 === o ? void 0 : o.width, this.uniforms.dimensions[1] = null === (i = n.filterFrame) || void 0 === i ? void 0 : i.height, this.uniforms.seed = this.seed, e.applyFilter(this, n, t, r) }, Object.defineProperty(n.prototype, "sepia", { get: function () { return this.uniforms.sepia }, set: function (e) { this.uniforms.sepia = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "noise", { get: function () { return this.uniforms.noise }, set: function (e) { this.uniforms.noise = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "noiseSize", { get: function () { return this.uniforms.noiseSize }, set: function (e) { this.uniforms.noiseSize = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "scratch", { get: function () { return this.uniforms.scratch }, set: function (e) { this.uniforms.scratch = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "scratchDensity", { get: function () { return this.uniforms.scratchDensity }, set: function (e) { this.uniforms.scratchDensity = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "scratchWidth", { get: function () { return this.uniforms.scratchWidth }, set: function (e) { this.uniforms.scratchWidth = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "vignetting", { get: function () { return this.uniforms.vignetting }, set: function (e) { this.uniforms.vignetting = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "vignettingAlpha", { get: function () { return this.uniforms.vignettingAlpha }, set: function (e) { this.uniforms.vignettingAlpha = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "vignettingBlur", { get: function () { return this.uniforms.vignettingBlur }, set: function (e) { this.uniforms.vignettingBlur = e }, enumerable: !1, configurable: !0 }), n.defaults = { sepia: .3, noise: .3, noiseSize: 1, scratch: .5, scratchDensity: .3, scratchWidth: 1, vignetting: .3, vignettingAlpha: 1, vignettingBlur: .3 }, n }(n.Filter), E = function (e) { function n(t, r, o) { void 0 === t && (t = 1), void 0 === r && (r = 0), void 0 === o && (o = .1); var i = e.call(this, c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 thickness;\nuniform vec4 outlineColor;\nuniform vec4 filterClamp;\n\nconst float DOUBLE_PI = 3.14159265358979323846264 * 2.;\n\nvoid main(void) {\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float maxAlpha = 0.;\n    vec2 displaced;\n    for (float angle = 0.; angle <= DOUBLE_PI; angle += ${angleStep}) {\n        displaced.x = vTextureCoord.x + thickness.x * cos(angle);\n        displaced.y = vTextureCoord.y + thickness.y * sin(angle);\n        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n        maxAlpha = max(maxAlpha, curColor.a);\n    }\n    float resultAlpha = max(maxAlpha, ownColor.a);\n    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);\n}\n".replace(/\$\{angleStep\}/, n.getAngleStep(o))) || this; return i._thickness = 1, i.uniforms.thickness = new Float32Array([0, 0]), i.uniforms.outlineColor = new Float32Array([0, 0, 0, 1]), Object.assign(i, { thickness: t, color: r, quality: o }), i } return u(n, e), n.getAngleStep = function (e) { var t = Math.max(e * n.MAX_SAMPLES, n.MIN_SAMPLES); return (2 * Math.PI / t).toFixed(7) }, n.prototype.apply = function (e, n, t, r) { this.uniforms.thickness[0] = this._thickness / n._frame.width, this.uniforms.thickness[1] = this._thickness / n._frame.height, e.applyFilter(this, n, t, r) }, Object.defineProperty(n.prototype, "color", { get: function () { return o.rgb2hex(this.uniforms.outlineColor) }, set: function (e) { o.hex2rgb(e, this.uniforms.outlineColor) }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "thickness", { get: function () { return this._thickness }, set: function (e) { this._thickness = e, this.padding = e }, enumerable: !1, configurable: !0 }), n.MIN_SAMPLES = 1, n.MAX_SAMPLES = 100, n }(n.Filter), I = function (e) { function n(n) { void 0 === n && (n = 10); var t = e.call(this, c, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n") || this; return t.size = n, t } return u(n, e), Object.defineProperty(n.prototype, "size", { get: function () { return this.uniforms.size }, set: function (e) { "number" == typeof e && (e = [e, e]), this.uniforms.size = e }, enumerable: !1, configurable: !0 }), n }(n.Filter), k = function (e) { function n(n, t, r, o) { void 0 === n && (n = 0), void 0 === t && (t = [0, 0]), void 0 === r && (r = 5), void 0 === o && (o = -1); var i = e.call(this, c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float uRadian;\nuniform vec2 uCenter;\nuniform float uRadius;\nuniform int uKernelSize;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    float aspect = filterArea.y / filterArea.x;\n    vec2 center = uCenter.xy / filterArea.xy;\n    float gradient = uRadius / filterArea.x * 0.3;\n    float radius = uRadius / filterArea.x - gradient * 0.5;\n    int k = uKernelSize - 1;\n\n    vec2 coord = vTextureCoord;\n    vec2 dir = vec2(center - coord);\n    float dist = length(vec2(dir.x, dir.y * aspect));\n\n    float radianStep = uRadian;\n    if (radius >= 0.0 && dist > radius) {\n        float delta = dist - radius;\n        float gap = gradient;\n        float scale = 1.0 - abs(delta / gap);\n        if (scale <= 0.0) {\n            gl_FragColor = color;\n            return;\n        }\n        radianStep *= scale;\n    }\n    radianStep /= float(k);\n\n    float s = sin(radianStep);\n    float c = cos(radianStep);\n    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n\n        coord -= center;\n        coord.y *= aspect;\n        coord = rotationMatrix * coord;\n        coord.y /= aspect;\n        coord += center;\n\n        vec4 sample = texture2D(uSampler, coord);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample;\n    }\n\n    gl_FragColor = color / float(uKernelSize);\n}\n") || this; return i._angle = 0, i.angle = n, i.center = t, i.kernelSize = r, i.radius = o, i } return u(n, e), n.prototype.apply = function (e, n, t, r) { this.uniforms.uKernelSize = 0 !== this._angle ? this.kernelSize : 0, e.applyFilter(this, n, t, r) }, Object.defineProperty(n.prototype, "angle", { get: function () { return this._angle }, set: function (e) { this._angle = e, this.uniforms.uRadian = e * Math.PI / 180 }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "center", { get: function () { return this.uniforms.uCenter }, set: function (e) { this.uniforms.uCenter = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "radius", { get: function () { return this.uniforms.uRadius }, set: function (e) { (e < 0 || e === 1 / 0) && (e = -1), this.uniforms.uRadius = e }, enumerable: !1, configurable: !0 }), n }(n.Filter), L = function (e) { function n(t) { var r = e.call(this, c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nuniform bool mirror;\nuniform float boundary;\nuniform vec2 amplitude;\nuniform vec2 waveLength;\nuniform vec2 alpha;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    if (coord.y < boundary) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    float k = (coord.y - boundary) / (1. - boundary + 0.0001);\n    float areaY = boundary * dimensions.y / filterArea.y;\n    float v = areaY + areaY - vTextureCoord.y;\n    float y = mirror ? v : vTextureCoord.y;\n\n    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;\n    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;\n    float _alpha = (alpha.y - alpha.x) * k + alpha.x;\n\n    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;\n    x = clamp(x, filterClamp.x, filterClamp.z);\n\n    vec4 color = texture2D(uSampler, vec2(x, y));\n\n    gl_FragColor = color * _alpha;\n}\n") || this; return r.time = 0, r.uniforms.amplitude = new Float32Array(2), r.uniforms.waveLength = new Float32Array(2), r.uniforms.alpha = new Float32Array(2), r.uniforms.dimensions = new Float32Array(2), Object.assign(r, n.defaults, t), r } return u(n, e), n.prototype.apply = function (e, n, t, r) { var o, i; this.uniforms.dimensions[0] = null === (o = n.filterFrame) || void 0 === o ? void 0 : o.width, this.uniforms.dimensions[1] = null === (i = n.filterFrame) || void 0 === i ? void 0 : i.height, this.uniforms.time = this.time, e.applyFilter(this, n, t, r) }, Object.defineProperty(n.prototype, "mirror", { get: function () { return this.uniforms.mirror }, set: function (e) { this.uniforms.mirror = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "boundary", { get: function () { return this.uniforms.boundary }, set: function (e) { this.uniforms.boundary = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "amplitude", { get: function () { return this.uniforms.amplitude }, set: function (e) { this.uniforms.amplitude[0] = e[0], this.uniforms.amplitude[1] = e[1] }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "waveLength", { get: function () { return this.uniforms.waveLength }, set: function (e) { this.uniforms.waveLength[0] = e[0], this.uniforms.waveLength[1] = e[1] }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "alpha", { get: function () { return this.uniforms.alpha }, set: function (e) { this.uniforms.alpha[0] = e[0], this.uniforms.alpha[1] = e[1] }, enumerable: !1, configurable: !0 }), n.defaults = { mirror: !0, boundary: .5, amplitude: [0, 20], waveLength: [30, 100], alpha: [1, 1], time: 0 }, n }(n.Filter), N = function (e) { function n(n, t, r) { void 0 === n && (n = [-10, 0]), void 0 === t && (t = [0, 10]), void 0 === r && (r = [0, 0]); var o = e.call(this, c, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n") || this; return o.red = n, o.green = t, o.blue = r, o } return u(n, e), Object.defineProperty(n.prototype, "red", { get: function () { return this.uniforms.red }, set: function (e) { this.uniforms.red = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "green", { get: function () { return this.uniforms.green }, set: function (e) { this.uniforms.green = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "blue", { get: function () { return this.uniforms.blue }, set: function (e) { this.uniforms.blue = e }, enumerable: !1, configurable: !0 }), n }(n.Filter), X = function (e) { function n(t, r, o) { void 0 === t && (t = [0, 0]), void 0 === o && (o = 0); var i = e.call(this, c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nuniform vec2 center;\n\nuniform float amplitude;\nuniform float wavelength;\n// uniform float power;\nuniform float brightness;\nuniform float speed;\nuniform float radius;\n\nuniform float time;\n\nconst float PI = 3.14159;\n\nvoid main()\n{\n    float halfWavelength = wavelength * 0.5 / filterArea.x;\n    float maxRadius = radius / filterArea.x;\n    float currentRadius = time * speed / filterArea.x;\n\n    float fade = 1.0;\n\n    if (maxRadius > 0.0) {\n        if (currentRadius > maxRadius) {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);\n    }\n\n    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);\n    dir.y *= filterArea.y / filterArea.x;\n    float dist = length(dir);\n\n    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    vec2 diffUV = normalize(dir);\n\n    float diff = (dist - currentRadius) / halfWavelength;\n\n    float p = 1.0 - pow(abs(diff), 2.0);\n\n    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );\n    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );\n\n    vec2 offset = diffUV * powDiff / filterArea.xy;\n\n    // Do clamp :\n    vec2 coord = vTextureCoord + offset;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    // No clamp :\n    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);\n\n    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;\n\n    gl_FragColor = color;\n}\n") || this; return i.center = t, Object.assign(i, n.defaults, r), i.time = o, i } return u(n, e), n.prototype.apply = function (e, n, t, r) { this.uniforms.time = this.time, e.applyFilter(this, n, t, r) }, Object.defineProperty(n.prototype, "center", { get: function () { return this.uniforms.center }, set: function (e) { this.uniforms.center = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "amplitude", { get: function () { return this.uniforms.amplitude }, set: function (e) { this.uniforms.amplitude = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "wavelength", { get: function () { return this.uniforms.wavelength }, set: function (e) { this.uniforms.wavelength = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "brightness", { get: function () { return this.uniforms.brightness }, set: function (e) { this.uniforms.brightness = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "speed", { get: function () { return this.uniforms.speed }, set: function (e) { this.uniforms.speed = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "radius", { get: function () { return this.uniforms.radius }, set: function (e) { this.uniforms.radius = e }, enumerable: !1, configurable: !0 }), n.defaults = { amplitude: 30, wavelength: 160, brightness: 1, speed: 500, radius: -1 }, n }(n.Filter), B = function (e) { function n(n, t, r) { void 0 === t && (t = 0), void 0 === r && (r = 1); var o = e.call(this, c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);\n    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;\n    vec4 light = texture2D(uLightmap, lightCoord);\n    vec3 ambient = ambientColor.rgb * ambientColor.a;\n    vec3 intensity = ambient + light.rgb;\n    vec3 finalColor = diffuseColor.rgb * intensity;\n    gl_FragColor = vec4(finalColor, diffuseColor.a);\n}\n") || this; return o._color = 0, o.uniforms.dimensions = new Float32Array(2), o.uniforms.ambientColor = new Float32Array([0, 0, 0, r]), o.texture = n, o.color = t, o } return u(n, e), n.prototype.apply = function (e, n, t, r) { var o, i; this.uniforms.dimensions[0] = null === (o = n.filterFrame) || void 0 === o ? void 0 : o.width, this.uniforms.dimensions[1] = null === (i = n.filterFrame) || void 0 === i ? void 0 : i.height, e.applyFilter(this, n, t, r) }, Object.defineProperty(n.prototype, "texture", { get: function () { return this.uniforms.uLightmap }, set: function (e) { this.uniforms.uLightmap = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "color", { get: function () { return this._color }, set: function (e) { var n = this.uniforms.ambientColor; "number" == typeof e ? (o.hex2rgb(e, n), this._color = e) : (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], this._color = o.rgb2hex(n)) }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "alpha", { get: function () { return this.uniforms.ambientColor[3] }, set: function (e) { this.uniforms.ambientColor[3] = e }, enumerable: !1, configurable: !0 }), n }(n.Filter), G = function (e) { function n(n, r, o, i) { void 0 === n && (n = 100), void 0 === r && (r = 600); var l = e.call(this, c, "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    color /= total;\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n") || this; return l.uniforms.blur = n, l.uniforms.gradientBlur = r, l.uniforms.start = o || new t.Point(0, window.innerHeight / 2), l.uniforms.end = i || new t.Point(600, window.innerHeight / 2), l.uniforms.delta = new t.Point(30, 30), l.uniforms.texSize = new t.Point(window.innerWidth, window.innerHeight), l.updateDelta(), l } return u(n, e), n.prototype.updateDelta = function () { this.uniforms.delta.x = 0, this.uniforms.delta.y = 0 }, Object.defineProperty(n.prototype, "blur", { get: function () { return this.uniforms.blur }, set: function (e) { this.uniforms.blur = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "gradientBlur", { get: function () { return this.uniforms.gradientBlur }, set: function (e) { this.uniforms.gradientBlur = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "start", { get: function () { return this.uniforms.start }, set: function (e) { this.uniforms.start = e, this.updateDelta() }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "end", { get: function () { return this.uniforms.end }, set: function (e) { this.uniforms.end = e, this.updateDelta() }, enumerable: !1, configurable: !0 }), n }(n.Filter), K = function (e) { function n() { return null !== e && e.apply(this, arguments) || this } return u(n, e), n.prototype.updateDelta = function () { var e = this.uniforms.end.x - this.uniforms.start.x, n = this.uniforms.end.y - this.uniforms.start.y, t = Math.sqrt(e * e + n * n); this.uniforms.delta.x = e / t, this.uniforms.delta.y = n / t }, n }(G), q = function (e) { function n() { return null !== e && e.apply(this, arguments) || this } return u(n, e), n.prototype.updateDelta = function () { var e = this.uniforms.end.x - this.uniforms.start.x, n = this.uniforms.end.y - this.uniforms.start.y, t = Math.sqrt(e * e + n * n); this.uniforms.delta.x = -n / t, this.uniforms.delta.y = e / t }, n }(G), W = function (e) { function n(n, t, r, o) { void 0 === n && (n = 100), void 0 === t && (t = 600); var i = e.call(this) || this; return i.tiltShiftXFilter = new K(n, t, r, o), i.tiltShiftYFilter = new q(n, t, r, o), i } return u(n, e), n.prototype.apply = function (e, n, t, r) { var o = e.getFilterTexture(); this.tiltShiftXFilter.apply(e, n, o, 1), this.tiltShiftYFilter.apply(e, o, t, r), e.returnFilterTexture(o) }, Object.defineProperty(n.prototype, "blur", { get: function () { return this.tiltShiftXFilter.blur }, set: function (e) { this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "gradientBlur", { get: function () { return this.tiltShiftXFilter.gradientBlur }, set: function (e) { this.tiltShiftXFilter.gradientBlur = this.tiltShiftYFilter.gradientBlur = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "start", { get: function () { return this.tiltShiftXFilter.start }, set: function (e) { this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "end", { get: function () { return this.tiltShiftXFilter.end }, set: function (e) { this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = e }, enumerable: !1, configurable: !0 }), n }(n.Filter), Y = function (e) { function n(t) { var r = e.call(this, c, "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n") || this; return Object.assign(r, n.defaults, t), r } return u(n, e), Object.defineProperty(n.prototype, "offset", { get: function () { return this.uniforms.offset }, set: function (e) { this.uniforms.offset = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "radius", { get: function () { return this.uniforms.radius }, set: function (e) { this.uniforms.radius = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "angle", { get: function () { return this.uniforms.angle }, set: function (e) { this.uniforms.angle = e }, enumerable: !1, configurable: !0 }), n.defaults = { radius: 200, angle: 4, padding: 20, offset: new t.Point }, n }(n.Filter), Z = function (e) { function n(t) { var r, o = Object.assign(n.defaults, t), i = o.maxKernelSize, l = function (e, n) { var t = {}; for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) { var o = 0; for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]) } return t }(o, ["maxKernelSize"]); return r = e.call(this, c, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uCenter;\nuniform float uStrength;\nuniform float uInnerRadius;\nuniform float uRadius;\n\nconst float MAX_KERNEL_SIZE = ${maxKernelSize};\n\n// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand(vec2 co, float seed) {\n    const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);\n    return fract(sin(sn) * c + seed);\n}\n\nvoid main() {\n\n    float minGradient = uInnerRadius * 0.3;\n    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;\n\n    float gradient = uRadius * 0.3;\n    float radius = (uRadius - gradient * 0.5) / filterArea.x;\n\n    float countLimit = MAX_KERNEL_SIZE;\n\n    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);\n    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));\n\n    float strength = uStrength;\n\n    float delta = 0.0;\n    float gap;\n    if (dist < innerRadius) {\n        delta = innerRadius - dist;\n        gap = minGradient;\n    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity\n        delta = dist - radius;\n        gap = gradient;\n    }\n\n    if (delta > 0.0) {\n        float normalCount = gap / filterArea.x;\n        delta = (normalCount - delta) / normalCount;\n        countLimit *= delta;\n        strength *= delta;\n        if (countLimit < 1.0)\n        {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n    }\n\n    // randomize the lookup values to hide the fixed number of samples\n    float offset = rand(vTextureCoord, 0.0);\n\n    float total = 0.0;\n    vec4 color = vec4(0.0);\n\n    dir *= strength;\n\n    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {\n        float percent = (t + offset) / MAX_KERNEL_SIZE;\n        float weight = 4.0 * (percent - percent * percent);\n        vec2 p = vTextureCoord + dir * percent;\n        vec4 sample = texture2D(uSampler, p);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n\n        if (t > countLimit){\n            break;\n        }\n    }\n\n    color /= total;\n    // switch back from pre-multiplied alpha\n    // color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n".replace("${maxKernelSize}", i.toFixed(1))) || this, Object.assign(r, l), r } return u(n, e), Object.defineProperty(n.prototype, "center", { get: function () { return this.uniforms.uCenter }, set: function (e) { this.uniforms.uCenter = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "strength", { get: function () { return this.uniforms.uStrength }, set: function (e) { this.uniforms.uStrength = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "innerRadius", { get: function () { return this.uniforms.uInnerRadius }, set: function (e) { this.uniforms.uInnerRadius = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(n.prototype, "radius", { get: function () { return this.uniforms.uRadius }, set: function (e) { (e < 0 || e === 1 / 0) && (e = -1), this.uniforms.uRadius = e }, enumerable: !1, configurable: !0 }), n.defaults = { strength: .1, center: [0, 0], innerRadius: 0, radius: -1, maxKernelSize: 32 }, n }(n.Filter); return e.AdjustmentFilter = m, e.AdvancedBloomFilter = h, e.AsciiFilter = g, e.BevelFilter = v, e.BloomFilter = y, e.BulgePinchFilter = b, e.CRTFilter = z, e.ColorMapFilter = x, e.ColorOverlayFilter = _, e.ColorReplaceFilter = C, e.ConvolutionFilter = S, e.CrossHatchFilter = F, e.DotFilter = O, e.DropShadowFilter = P, e.EmbossFilter = A, e.GlitchFilter = T, e.GlowFilter = w, e.GodrayFilter = D, e.KawaseBlurFilter = d, e.MotionBlurFilter = j, e.MultiColorReplaceFilter = M, e.OldFilmFilter = R, e.OutlineFilter = E, e.PixelateFilter = I, e.RGBSplitFilter = N, e.RadialBlurFilter = k, e.ReflectionFilter = L, e.ShockwaveFilter = X, e.SimpleLightmapFilter = B, e.TiltShiftAxisFilter = G, e.TiltShiftFilter = W, e.TiltShiftXFilter = K, e.TiltShiftYFilter = q, e.TwistFilter = Y, e.ZoomBlurFilter = Z, Object.defineProperty(e, "__esModule", { value: !0 }), e }({}, PIXI, PIXI, PIXI, PIXI.utils, PIXI, PIXI.filters, PIXI.filters); Object.assign(PIXI.filters, __filters);
  //# sourceMappingURL=pixi-filters.js.map


  // Generated by CoffeeScript 2.6.1
  // ==========================================================================
  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ KDCore.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  // * LIBRARY WITH MZ AND MZ SUPPORT
  //! {OUTER FILE}

  //?rev 27.09.24
  var KDCore;

  window.Imported = window.Imported || {};

  Imported.KDCore = true;

  KDCore = KDCore || {};

  // * Двузначные числа нельзя в версии, сравнение идёт по первой цифре поулчается (3.43 - нельзя, можно 3.4.3)
  //%[МЕНЯТЬ ПРИ ИЗМЕНЕНИИ]
  KDCore._fileVersion = '3.6.1';

  KDCore.nuiVersion = '1.4';

  // * Методы и библиотеки данной версии
  KDCore._loader = 'loader_' + KDCore._fileVersion;

  KDCore[KDCore._loader] = [];

  // * Добавить библиотеку на загрузку
  KDCore.registerLibraryToLoad = function (lib) {
    return KDCore[KDCore._loader].push(lib);
  };

  if ((KDCore.Version != null) && KDCore.Version >= KDCore._fileVersion) {
    // * ПРОПУСКАЕМ ЗАГРУЗКУ, так как уже загруженна более новая
    console.log('XDev KDCore ' + KDCore._fileVersion + ' skipped by new or exists version');
    KDCore._requireLoadLibrary = false;
  } else {
    KDCore.Version = KDCore._fileVersion;
    KDCore.LIBS = KDCore.LIBS || {};
    KDCore.register = function (library) {
      return this.LIBS[library.name] = library;
    };
    window.KDCore = KDCore;
    // * ТРЕБУЕТСЯ ЗАГРУЗКА БИБЛИОТЕК
    KDCore._requireLoadLibrary = true;
  }


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    Array.prototype.delete = function () {
      var L, a, ax, what;
      what = void 0;
      a = arguments;
      L = a.length;
      ax = void 0;
      while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
        }
      }
      return this;
    };
    Array.prototype.max = function () {
      return Math.max.apply(null, this);
    };
    Array.prototype.min = function () {
      return Math.min.apply(null, this);
    };
    Array.prototype.sample = function () {
      if (this.length === 0) {
        return [];
      }
      return this[KDCore.SDK.rand(0, this.length - 1)];
    };
    Array.prototype.first = function () {
      return this[0];
    };
    Array.prototype.last = function () {
      return this[this.length - 1];
    };
    Array.prototype.shuffle = function () {
      var k, n, v;
      n = this.length;
      while (n > 1) {
        n--;
        k = KDCore.SDK.rand(0, n + 1);
        v = this[k];
        this[k] = this[n];
        this[n] = v;
      }
    };
    Array.prototype.count = function () {
      return this.length;
    };
    Array.prototype.isEmpty = function () {
      return this.length === 0;
    };
    // * Ищет элемент, у которого поле ID == id
    Array.prototype.getById = function (id) {
      return this.getByField('id', id);
    };
    // * Ищет элемент, у которого поле FIELD (имя поля) == value
    Array.prototype.getByField = function (field, value) {
      var e;
      try {
        return this.find(function (item) {
          return item[field] === value;
        });
      } catch (error) {
        e = error;
        // console.warn(e);
        return null;
      }
    };
    Object.defineProperty(Array.prototype, "delete", {
      enumerable: false
    });
    Object.defineProperty(Array.prototype, "max", {
      enumerable: false
    });
    Object.defineProperty(Array.prototype, "min", {
      enumerable: false
    });
    Object.defineProperty(Array.prototype, "sample", {
      enumerable: false
    });
    Object.defineProperty(Array.prototype, "first", {
      enumerable: false
    });
    Object.defineProperty(Array.prototype, "last", {
      enumerable: false
    });
    Object.defineProperty(Array.prototype, "shuffle", {
      enumerable: false
    });
    Object.defineProperty(Array.prototype, "count", {
      enumerable: false
    });
    Object.defineProperty(Array.prototype, "isEmpty", {
      enumerable: false
    });
    Object.defineProperty(Array.prototype, "getById", {
      enumerable: false
    });
    return Object.defineProperty(Array.prototype, "getByField", {
      enumerable: false
    });
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    Number.prototype.do = function (method) {
      return KDCore.SDK.times(this, method);
    };
    Number.prototype.clamp = function (min, max) {
      return Math.min(Math.max(this, min), max);
    };
    return Number.prototype.any = function (number) {
      return (number != null) && typeof number === 'number' && number > 0;
    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    String.prototype.toCss = function () {
      return KDCore.Color.FromHex(this).CSS;
    };
    String.prototype.toCSS = function () {
      return this.toCss();
    };
    String.prototype.isEmpty = function () {
      return this.length === 0 || !this.trim();
    };
    String.isNullOrEmpty = function (str) {
      if (str != null) {
        return str.toString().isEmpty();
      } else {
        return true;
      }
    };
    String.any = function (str) {
      return !String.isNullOrEmpty(str);
    };
    return String.prototype.replaceAll = function (search, replacement) {
      var target;
      target = this;
      return target.split(search).join(replacement);
    };
  });


  KDCore.registerLibraryToLoad(() => {
    /**
     * Checks if the RPG Maker version is MV.
     * @returns {boolean} True if the RPG Maker version is MV, otherwise false.
     */
    KDCore.isMV = () => Utils.RPGMAKER_NAME.includes("MV");
    /**
     * Checks if the RPG Maker version is MZ.
     * @returns {boolean} True if the RPG Maker version is MZ, otherwise false.
     */
    KDCore.isMZ = () => !KDCore.isMV();
    /**
     * Logs warnings to the console.
     * @param {...any[]} args - The arguments to log as warnings.
     */
    KDCore.warning = (...args) => {
      args.forEach(element => {
        console.warn(element);
      });
    };
    /**
     * Generates a random string of the specified length.
     * @param {number} length - The length of the generated string.
     * @returns {string} The generated string.
     */
    KDCore.makeId = (length) => {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    };
    //@[DEPREACTED]
    /**
     * Generates a random string of the specified length.
     * @deprecated Use makeId instead.
     * @param {number} length - The length of the generated string.
     * @returns {string} The generated string.
     */
    KDCore.makeid = (length) => KDCore.makeId(length);
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var SDK;
    //?[DEPRECATED]
    // * SDK
    //------------------------------------------------------------------------------
    SDK = function () {
      throw new Error('This is a static class');
    };
    SDK.rand = function (min, max) {
      return Math.round(Math.random() * (max - min)) + min;
    };
    SDK.setConstantToObject = function (object, constantName, constantValue) {
      object[constantName] = constantValue;
      if (typeof object[constantName] === 'object') {
        Object.freeze(object[constantName]);
      }
      Object.defineProperty(object, constantName, {
        writable: false
      });
    };
    SDK.convertBitmapToBase64Data = function (bitmap) {
      return bitmap._canvas.toDataURL('image/png');
    };
    SDK.times = function (times, method) {
      var i, results;
      i = 0;
      results = [];
      while (i < times) {
        method(i);
        results.push(i++);
      }
      return results;
    };
    SDK.toGlobalCoord = function (layer, coordSymbol = 'x') {
      var node, t;
      t = layer[coordSymbol];
      node = layer;
      while (node) {
        t -= node[coordSymbol];
        node = node.parent;
      }
      return (t * -1) + layer[coordSymbol];
    };
    SDK.canvasToLocalX = function (layer, x) {
      while (layer) {
        x -= layer.x;
        layer = layer.parent;
      }
      return x;
    };
    SDK.canvasToLocalY = function (layer, y) {
      while (layer) {
        y -= layer.y;
        layer = layer.parent;
      }
      return y;
    };
    SDK.isInt = function (n) {
      return Number(n) === n && n % 1 === 0;
    };
    SDK.isFloat = function (n) {
      return Number(n) === n && n % 1 !== 0;
    };
    SDK.checkSwitch = function (switchValue) {
      if (switchValue === 'A' || switchValue === 'B' || switchValue === 'C' || switchValue === 'D') {
        return true;
      }
      return false;
    };
    SDK.toNumber = function (string, none = 0) {
      var number;
      if (string == null) {
        return none;
      }
      number = Number(string);
      if (isNaN(number)) {
        return none;
      }
      return number;
    };
    SDK.isString = function (value) {
      return typeof value === "string";
    };
    SDK.isArray = function (value) {
      return Array.isArray(value);
    };
    //@[EXTEND]
    return KDCore.SDK = SDK;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var __alias_Bitmap_blt_kdCore, __alias_Bitmap_fillAll_kdCore;
    //@[ALIAS]
    __alias_Bitmap_fillAll_kdCore = Bitmap.prototype.fillAll;
    Bitmap.prototype.fillAll = function (color) {
      if (color instanceof KDCore.Color) {
        return this.fillRect(0, 0, this.width, this.height, color.CSS);
      } else {
        return __alias_Bitmap_fillAll_kdCore.call(this, color);
      }
    };
    //@[ALIAS]
    __alias_Bitmap_blt_kdCore = Bitmap.prototype.blt;
    Bitmap.prototype.blt = function (source, sx, sy, sw, sh, dx, dy, dw, dh) {
      if (this._needModBltDWH > 0) {
        dh = dw = this._needModBltDWH;
        __alias_Bitmap_blt_kdCore.call(this, source, sx, sy, sw, sh, dx, dy, dw, dh);
        this._needModBltDWH = null;
      } else {
        __alias_Bitmap_blt_kdCore.call(this, ...arguments);
      }
    };
    Bitmap.prototype.drawIcon = function (x, y, icon, size = 32, noSmoth = false) {
      var bitmap;
      bitmap = null;
      if (icon instanceof Bitmap) {
        bitmap = icon;
      } else {
        bitmap = KDCore.BitmapSrc.LoadFromIconIndex(icon).bitmap;
      }
      this._context.imageSmoothingEnabled = !noSmoth;
      this.drawOnMe(bitmap, x, y, size, size);
      this._context.imageSmoothingEnabled = true;
    };
    Bitmap.prototype.drawOnMe = function (bitmap, x = 0, y = 0, sw = 0, sh = 0) {
      if (sw <= 0) {
        sw = bitmap.width;
      }
      if (sh <= 0) {
        sh = bitmap.height;
      }
      this.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y, sw, sh);
    };
    Bitmap.prototype.drawInMe = function (bitmap) {
      return Bitmap.prototype.drawOnMe(bitmap, 0, 0, this.width, this.height);
    };
    return Bitmap.prototype.drawTextFull = function (text, position = 'center') {
      return this.drawText(text, 0, 0, this.width, this.height, position);
    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    //?[NEW]
    return DataManager.pkdRegisterNUIFile = function (folder, name) {
      var _name, src;
      _name = "$" + folder + "_" + name;
      src = folder + "/" + name + ".json";
      return DataManager._databaseFiles.push({
        name: _name,
        src: src
      });
    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    KDCore.EasingFuncs = KDCore.EasingFuncs || {};
    return (function () {
      var _;
      _ = KDCore.EasingFuncs;
      _.linear = function (t, b, c, d) {
        return c * t / d + b;
      };
      _.easeInQuad = function (t, b, c, d) {
        return c * (t /= d) * t + b;
      };
      _.easeOutQuad = function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      };
      _.easeInOutQuad = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t + b;
        } else {
          return -c / 2 * ((--t) * (t - 2) - 1) + b;
        }
      };
      _.easeInCubic = function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
      };
      _.easeOutCubic = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
      };
      return _.easeInOutCubic = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t + b;
        } else {
          return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
      };
    })();
  });


  // Generated by CoffeeScript 2.6.1
  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Game_CharacterBase.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  (function () {
    var _;
    //@[DEFINES]
    _ = Game_CharacterBase.prototype;
    // * Нахожусь ли Я в точке по диагонале (рядом), относительно char
    _.kdInDiagonalPointRelativeTo = function (char) {
      var e, x, y;
      try {
        if (char == null) {
          return false;
        }
        ({ x, y } = char);
        if (x === this.x - 1 && ((y === this.y - 1) || (y === this.y + 1))) {
          return true; // * left up or down
        }
        if (x === this.x + 1 && (y === this.y - 1 || y === this.y + 1)) {
          return true; // * right up or down
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return false;
    };
  })();

  // ■ END Game_CharacterBase.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    // * В MZ нету данной функции, а она часто используется в моих плагинах
    if (!KDCore.isMZ()) {
      return;
    }
    //?[NEW] (from MV)
    return ImageManager.loadEmptyBitmap = function () {
      if (this._emptyBitmap != null) {
        return this._emptyBitmap;
      } else {
        return new Bitmap();
      }
    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var _input_onKeyDown, _input_onKeyUp, i, j, k, l;
    Input.KeyMapperPKD = {};
    //Numbers
    for (i = j = 48; j <= 57; i = ++j) {
      Input.KeyMapperPKD[i] = String.fromCharCode(i);
    }
    //Letters Upper
    for (i = k = 65; k <= 90; i = ++k) {
      Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
    }
    //Letters Lower (for key code events)
    for (i = l = 97; l <= 122; i = ++l) {
      Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
    }

    //@[ALIAS]
    _input_onKeyDown = Input._onKeyDown;
    Input._onKeyDown = function (event) {
      _input_onKeyDown.call(this, event);
      if (Input.keyMapper[event.keyCode]) {
        return;
      }
      Input._setStateWithMapperPKD(event.keyCode);
    };
    //@[ALIAS]
    _input_onKeyUp = Input._onKeyUp;
    Input._onKeyUp = function (event) {
      _input_onKeyUp.call(this, event);
      if (Input.keyMapper[event.keyCode]) {
        return;
      }
      Input._setStateWithMapperPKD(event.keyCode, false);
    };
    //?NEW
    Input._setStateWithMapperPKD = function (keyCode, state = true) {
      var symbol;
      symbol = Input.KeyMapperPKD[keyCode];
      if (symbol != null) {
        return this._currentState[symbol] = state;
      }
    };
    //?NEW
    Input.isCancel = function () {
      return Input.isTriggered('cancel') || TouchInput.isCancelled();
    };
    //?NEW
    return TouchInput.toPoint = function () {
      return new KDCore.Point(TouchInput.x, TouchInput.y);
    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    PluginManager.getPluginParametersByRoot = function (rootName) {
      var pluginParameters, property;
      for (property in this._parameters) {
        if (this._parameters.hasOwnProperty(property)) {
          pluginParameters = this._parameters[property];
          if (PluginManager.isPluginParametersContentKey(pluginParameters, rootName)) {
            return pluginParameters;
          }
        }
      }
      return PluginManager.parameters(rootName);
    };
    return PluginManager.isPluginParametersContentKey = function (pluginParameters, key) {
      return pluginParameters[key] != null;
    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var ___Sprite_alias_Move_KDCORE_2;
    Sprite.prototype.moveToCenter = function (dx = 0, dy = 0) {
      return this.move(-this.bitmap.width / 2 + dx, -this.bitmap.height / 2 + dy);
    };
    Sprite.prototype.setStaticAnchor = function (floatX = 1, floatY = 1) {
      this.x -= Math.round(this.width * floatX);
      this.y -= Math.round(this.height * floatY);
    };
    Sprite.prototype.moveToParentCenter = function () {
      if (!this.parent) {
        return;
      }
      return this.move(this.parent.width / 2, this.parent.height / 2);
    };
    ___Sprite_alias_Move_KDCORE_2 = Sprite.prototype.move;
    Sprite.prototype.move = function (x, y) {
      if (x instanceof Array) {
        return ___Sprite_alias_Move_KDCORE_2.call(this, x[0], x[1]);
      } else if (x instanceof KDCore.Point || ((x != null ? x.x : void 0) != null)) {
        return ___Sprite_alias_Move_KDCORE_2.call(this, x.x, x.y);
      } else if ((x != null) && (x._x != null)) {
        return ___Sprite_alias_Move_KDCORE_2.call(this, x._x, x._y);
      } else {
        return ___Sprite_alias_Move_KDCORE_2.call(this, x, y);
      }
    };
    Sprite.prototype.isContainsPoint = function (point) {
      var rect, rx, ry;
      if (this.width === 0 || this.height === 0) {
        return false;
      }
      rx = KDCore.SDK.toGlobalCoord(this, 'x');
      ry = KDCore.SDK.toGlobalCoord(this, 'y');
      rect = this._getProperFullRect(rx, ry);
      return rect.contains(point.x, point.y);
    };
    // * Возвращает Rect с учётом Scale и Anchor спрайта
    Sprite.prototype._getProperFullRect = function (rx, ry) {
      var height, width, x, y;
      width = this.width * Math.abs(this.scale.x);
      height = this.height * Math.abs(this.scale.y);
      x = rx - this.anchor.x * width;
      y = ry - this.anchor.y * height;
      if (this.anchor.x === 0 && this.scale.x < 0) {
        x += this.width * this.scale.x;
      }
      if (this.anchor.y === 0 && this.scale.y < 0) {
        y += this.height * this.scale.y;
      }
      return new PIXI.Rectangle(x, y, width, height);
    };
    Sprite.prototype.fillAll = function (color) {
      if (color != null) {
        return this.bitmap.fillAll(color);
      } else {
        return this.fillAll(KDCore.Color.WHITE);
      }
    };
    return Sprite.prototype.removeFromParent = function () {
      if (this.parent != null) {
        return this.parent.removeChild(this);
      }
    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    return TouchInput.toMapPoint = function () {
      return this.toPoint().convertToMap();
    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    KDCore.Utils = KDCore.Utils || {};
    return (function () {
      var _;
      _ = KDCore.Utils;
      _.getJDataById = function (id, source) {
        var d, j, len;
        for (j = 0, len = source.length; j < len; j++) {
          d = source[j];
          if (d.id === id) {
            return d;
          }
        }
        return null;
      };
      _.hasMeta = function (symbol, obj) {
        return (obj != null) && (obj.meta != null) && (obj.meta[symbol] != null);
      };
      _.getValueFromMeta = function (symbol, obj) {
        if (!_.hasMeta(symbol, obj)) {
          return null;
        }
        return obj.meta[symbol];
      };
      _.getNumberFromMeta = function (symbol, obj) {
        var value;
        if (!_.hasMeta(symbol, obj)) {
          return null;
        }
        if (obj.meta[symbol] === true) {
          return 0;
        } else {
          value = KDCore.SDK.toNumber(obj.meta[symbol], 0);
        }
        return value;
      };
      _.isSceneMap = function () {
        try {
          return !SceneManager.isSceneChanging() && SceneManager._scene instanceof Scene_Map;
        } catch (error) {
          return false;
        }
      };
      _.isMapScene = function () {
        return this.isSceneMap();
      };
      _.isSceneBattle = function () {
        try {
          return !SceneManager.isSceneChanging() && SceneManager._scene instanceof Scene_Battle;
        } catch (error) {
          return false;
        }
      };
      _.isBattleScene = function () {
        return this.isSceneBattle();
      };
      _.getEventCommentValue = function (commentCode, list) {
        var comment, e, i, item;
        try {
          if (list && list.length > 1) {
            i = 0;
            while (i < list.length) {
              item = list[i++];
              if (!item) {
                continue;
              }
              if (item.code === 108) {
                comment = item.parameters[0];
                if (comment.contains(commentCode)) {
                  return comment;
                }
              }
            }
          }
        } catch (error) {
          e = error;
          console.warn(e);
        }
        return null;
      };
      _.getEventCommentValueArray = function (commentCode, list) {
        var comment, comments, e, i, item;
        try {
          comments = [];
          if (list && list.length > 1) {
            i = 0;
            while (i < list.length) {
              item = list[i++];
              if (!item) {
                continue;
              }
              if (item.code === 108) {
                comment = item.parameters[0];
                if (comment.contains(commentCode)) {
                  comments.push(comment);
                }
              }
            }
          }
        } catch (error) {
          e = error;
          console.warn(e);
        }
        return comments;
      };
      _.getPositionPointFromJSON = function (jsonSettings) {
        return _.convertPositionPointFromJSON(jsonSettings.position);
      };
      _.convertPositionPointFromJSON = function (position) {
        var e, x, y;
        try {
          x = position[0];
          y = position[1];
          if (!KDCore.SDK.isInt(x)) {
            x = eval(x);
          }
          if (!KDCore.SDK.isInt(y)) {
            y = eval(y);
          }
          return new KDCore.Point(x, y);
        } catch (error) {
          e = error;
          console.warn('Utils.getPositionPointFromJSON', e);
          return KDCore.Point.Empty;
        }
      };
      _.jsonPos = function (jsonPosition) {
        return _.convertPositionPointFromJSON(jsonPosition);
      };
      _.jsonPosXY = function (jsonPosition) {
        var e, x, y;
        try {
          ({ x, y } = jsonPosition);
          return new KDCore.Point(eval(x), eval(y));
        } catch (error) {
          e = error;
          console.warn('Utils.jsonPosXY', e);
          return KDCore.Point.Empty;
        }
      };
      _.getVar = function (id) {
        return $gameVariables.value(id);
      };
      _.setVar = function (id, value) {
        return $gameVariables.setValue(id, value);
      };
      _.addToVar = function (id, value) {
        var prevVal;
        prevVal = _.getVar(id);
        return _.setVar(id, prevVal + value);
      };
      _.playSE = function (seFileName, pitch = 100, volume = 100) {
        var sound;
        if (seFileName == null) {
          return;
        }
        if (seFileName === "") {
          return;
        }
        sound = {
          name: seFileName,
          pan: 0,
          pitch: pitch,
          volume: volume
        };
        AudioManager.playStaticSe(sound);
      };
      _.getItemTypeId = function (item) {
        if (DataManager.isWeapon(item)) {
          return 1;
        } else if (DataManager.isArmor(item)) {
          return 2;
        }
        return 0;
      };
      _.getItemByType = function (itemId, typeId) {
        var data, e;
        try {
          if ((typeId != null) && !isFinite(typeId) && KDCore.SDK.isString(typeId) && String.any(typeId)) {
            if (typeId[0] === "w") {
              typeId = 1;
            } else if (typeId[0] === "a") {
              typeId = 2;
            } else {
              typeId = 0;
            }
          }
          data = [$dataItems, $dataWeapons, $dataArmors];
          return data[typeId][itemId];
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return null;
        }
      };
      _.loadFont = function (name) {
        if (typeof FontManager === "undefined" || FontManager === null) {
          return;
        }
        if (String.isNullOrEmpty(name)) {
          return;
        }
        if (FontManager._states[name] != null) {
          return;
        }
        FontManager.load(name, name + ".ttf");
      };
      _.convertTimeShort = function (seconds) {
        var e;
        try {
          if (seconds > 59) {
            return Math.floor(seconds / 60) + 'm';
          } else {
            return seconds;
          }
        } catch (error) {
          e = error;
          console.warn(e);
          return seconds;
        }
      };
      _.isPointInScreen = function (point, margin = 10) {
        var maxH, maxW, screenMargin, x, y;
        ({ x, y } = point);
        maxW = Graphics.width;
        maxH = Graphics.height;
        // * Граница от краёв экрана
        screenMargin = margin;
        if (x < screenMargin) {
          return false;
        }
        if (y < screenMargin) {
          return false;
        }
        if (x > (maxW - screenMargin)) {
          return false;
        }
        if (y > (maxH - screenMargin)) {
          return false;
        }
        return true;
      };
      // * Ассинхронная загрузка изображения, возвращает bitmap, когда загружен
      // * Пример использования loadImageAsync(a, b).then(метод)
      // в метод будет передан bitmap первым аргументом
      _.loadImageAsync = async function (folder, filename) {
        var promise;
        promise = new Promise(function (resolve, reject) {
          var b;
          b = ImageManager.loadBitmap("img/" + folder + "/", filename);
          return b.addLoadListener(function () {
            return resolve(b);
          });
        });
        return (await promise);
      };
      // * Преобразовать расширенное значение
      // * Значение может быть X -> X
      // * "X" -> X (цифра)
      // * "X,Y,Z,..." -> [X, Y, Z]
      // * "[X, Y, Z,...]" -> [X, Y, Z]
      // * "X|V" -> из переменной X
      // * [Y] -> случайное число из массива (рекурсивно)
      //@[2.8.1] since
      _.getEValue = function (value) {
        var e, items, randomValue, variableId;
        try {
          if (value == null) {
            return null;
          }
          if (KDCore.SDK.isString(value)) {
            if (isFinite(value)) { // * Число представленно строкой
              return Number(value);
            }
            // * Массив представлен строкой (может быть без квадратных скобок)
            if (value.contains(',') || (value.contains("[") && value.contains("]"))) {
              value = value.replace("[", "");
              value = value.replace("]", "");
              // * Преобразуем в число или строку (например если extended |V)
              items = value.split(",").map(function (item) {
                var itemT;
                itemT = item.trim();
                if (isFinite(itemT)) {
                  return Number(itemT);
                } else {
                  return itemT;
                }
              });
              // * Вызываем снова эту функцию, но уже с массивом
              return KDCore.Utils.getEValue(items);
            }
            if (value.contains("|V")) {
              variableId = parseInt(value);
              return $gameVariables.value(variableId);
            }
            return value; // * Просто значение в итоге
          } else if (KDCore.SDK.isArray(value)) {
            randomValue = value.sample();
            return KDCore.Utils.getEValue(randomValue);
          } else {
            return value;
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return value;
        }
      };
      //@[2.8.2] since
      _.isChanceIsGood = function (chance) {
        var e;
        try {
          if (chance > 1) {
            chance /= 100;
          }
          return chance > Math.random();
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return false;
        }
      };
      //@[2.8.2] since
      //KEY:w:3:1:50 , KEY:i:10:2:1|V
      //OUTPUT: [GameItem, COUNT]
      _.parseItemFromConditionStr = function (conditionLine) {
        var amount, e, itemChance, itemId, parts, typeId;
        try {
          if (!conditionLine.contains(":")) {
            return null;
          }
          parts = conditionLine.split(":");
          typeId = parts[1];
          itemId = KDCore.Utils.getEValue(parts[2]);
          amount = KDCore.Utils.getEValue(parts[3]);
          if (amount <= 0) {
            return null;
          }
          try {
            itemChance = String.any(parts[4]) ? parts[4] : 100;
            itemChance = KDCore.Utils.getEValue(itemChance) / 100;
          } catch (error) {
            e = error;
            KDCore.warning(e);
            itemChance = 0;
          }
          if (itemChance <= 0) {
            return null;
          }
          if (KDCore.Utils.isChanceIsGood(itemChance)) {
            return [KDCore.Utils.getItemByType(itemId, typeId), amount];
          } else {
            return null;
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return null;
        }
      };
      //@[3.2.1] since
      _.isValidCE = function (commonEventId) {
        var e;
        try {
          return commonEventId > 0 && ($dataCommonEvents[commonEventId] != null);
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return false;
        }
      };
      //@[3.2.1] since
      _.startCE = function (commonEventId) {
        var e;
        try {
          if (this.isValidCE(commonEventId)) {
            return $gameTemp.reserveCommonEvent(commonEventId);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      //@[3.2.1] since
      _.checkSwitch = function (value) {
        if (value == null) {
          return false;
        }
        if (isFinite(value)) {
          return false;
        }
        return KDCore.SDK.checkSwitch(value);
      };
      //@[3.2.1] since
      // * Вызвать с задержкой в time миллисекунд
      // * Не забываем про bind
      _.callDelayed = function (method, time = 1) {
        var e;
        try {
          if (method == null) {
            return;
          }
          setTimeout((function () {
            var e;
            try {
              return method();
            } catch (error) {
              e = error;
              return KDCore.warning(e);
            }
          }), time);
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
      };
      //@[3.2.1] since
      //<meta:1,2,3,4> -> [1,2,3,4]
      _.getArrayOfNumbersFromMeta = function (symbol, obj) {
        var e, values;
        try {
          values = this.getArrayOfValuesFromMeta(symbol, obj);
          return values.map(function (v) {
            return Number(v);
          });
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return [];
        }
      };
      //@[3.2.1] since
      //<meta:a,b,c> -> ["a", "b", "c"]
      //<meta:a> -> ["a"]
      _.getArrayOfValuesFromMeta = function (symbol, obj) {
        var e, items, values;
        try {
          values = this.getValueFromMeta(symbol, obj);
          if (String.any(values)) {
            if (values.contains(',')) {
              items = values.split(',');
              return items || [];
            } else {
              return [values];
            }
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return [];
        }
      };
      //@[3.2.1] since
      // * Когда содержит одинаковый набор ключей
      //<meta:value1>
      //<meta:value2>
      //...
      // -> [value1,value2,...]
      _.getArrayOfValuesOfSameMeta = function (symbol, obj) {
        var e, j, len, line, lines, result;
        try {
          if (!this.hasMeta(symbol, obj)) {
            return [];
          }
          lines = obj.note.split("\n").filter(function (l) {
            return l.contains(symbol);
          });
          result = [];
          for (j = 0, len = lines.length; j < len; j++) {
            line = lines[j];
            try {
              line = line.replace("<" + symbol + ":", "");
              line = line.replace(">", "");
              result.push(line);
            } catch (error) {
              e = error;
              KDCore.warning(e);
            }
          }
          return result;
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return [];
      };
      //@[3.2.7] since
      _.getIndexIn2DArrayByIJ = function (row, col, cols) {
        return row * cols + col;
      };
      //@[3.2.7] since
      // * row - строка
      // * col - столбец
      _.getIJByIndexIn2DArray = function (index, cols) {
        var col, e, row;
        try {
          row = Math.floor(index / cols);
          col = index % cols;
          return [row, col];
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return [0, 0];
        }
      };
      //@[3.2.7] since
      _.isSwitchIsTRUE = function (switchId) {
        var e;
        if (switchId == null) {
          return true;
        }
        if (switchId <= 0) {
          return true;
        }
        try {
          return $gameSwitches.value(switchId) === true;
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return false;
      };
      //@[3.5] since
      _.convertBindingValue = function (sourceObj, bindingValue, element = null) {
        var e;
        try {
          return KDCore.UI.Builder._convertBindingValue(...arguments);
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return null;
      };
      //@[3.5] since
      _.getRealSpriteSize = function (forField = 'x', sprite = null) {
        var e, h, w;
        try {
          if (sprite == null) {
            return 0;
          }
          if (forField === 'x' || forField === 'width') {
            if (sprite.realWidth != null) {
              w = sprite.realWidth();
            } else {
              w = sprite.width;
            }
            return w;
          } else if (forField === 'y' || forField === 'height') {
            if (sprite.realHeight != null) {
              h = sprite.realHeight();
            } else {
              h = sprite.height;
            }
            return h;
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return 0;
      };
      //@[3.5] since
      _.string2hex = function (string) {
        var e;
        try {
          if (typeof string === 'string' && string[0] === '#') {
            string = string.substr(1);
          }
          return parseInt(string, 16);
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return 0xffffff;
      };
      //@[3.5] since
      _.convertDP = function (value = 0, isHalf = false) {
        var d, e, mod, modX, modY;
        try {
          if (Graphics.width === 816 && Graphics.height === 624) {
            return value;
          }
          modX = Graphics.width / 816;
          modY = Graphics.height / 624;
          // Aprox
          mod = (modX + modY) / 2;
          if (mod === 0) {
            return 0;
          }
          if (isHalf === true) {
            if (mod < 1) {
              d = 1 - mod;
              mod += d / 2;
            } else if (mod > 1) {
              d = mod - 1;
              mod = 1 + (d / 2);
            }
          }
          return Math.round(value * mod);
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return 0;
      };
      //@[3.5.6] since
      _.getValueWithDP = function (value) {
        var dpValue, e, negative, r, result, resultValue;
        try {
          if (typeof value === "string") {
            value = value.trim();
            // * Replace all HDP and DP
            if (value.contains("hdp") || value.contains("dp")) {
              if (value[0] === '-') {
                value = value.replace("-", "");
                negative = true;
              } else {
                negative = false;
              }
              if (value.contains("hdp")) {
                r = new RegExp("(\\d+)hdp", "g");
                result = r.exec(value);
                dpValue = Number(result[1]);
                resultValue = KDCore.Utils.convertDP(dpValue, true);
                value = value.replace(/(\d+)hdp/, resultValue);
              } else if (value.contains("dp")) {
                r = new RegExp("(\\d+)dp", "g");
                result = r.exec(value);
                dpValue = Number(result[1]);
                resultValue = KDCore.Utils.convertDP(dpValue, false);
                value = value.replace(/(\d+)dp/, resultValue);
              }
            }
            value = parseInt(value);
            if (negative) {
              value = -value;
            }
          }
          return value;
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return 0;
        }
      };
      //@[2.9.7] since
      // * Shrink number 100000 to "100k" and ect, returns STRING
      _.formatNumberToK = function (num) {
        var e;
        try {
          if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
          }
          if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
          }
          if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
          }
          return num;
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return num;
        }
      };
    })();
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    return Window_Base.prototype.drawFaceWithCustomSize = function (faceName, faceIndex, x, y, finalSize) {
      this.contents._needModBltDWH = finalSize;
      this.drawFace(faceName, faceIndex, x, y);
    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    return (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ Window_Selectable.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var ALIAS__select, _;
      //@[DEFINES]
      _ = Window_Selectable.prototype;
      //@[ALIAS]
      ALIAS__select = _.select;
      _.select = function (index) {
        var e;
        ALIAS__select.call(this, ...arguments);
        try {
          return this._pOnSelectionChanged(index);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._pOnSelectionChanged = function (newIndex) {
        var e;
        try {
          if (this._pkdLastSelectedIndex == null) {
            this._pkdLastSelectedIndex = newIndex;
            return this.pOnSelectionChanged();
          } else {
            if (this._pkdLastSelectedIndex !== newIndex) {
              this._pkdLastSelectedIndex = newIndex;
              return this.pOnSelectionChanged();
            }
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _.safeSelect = function (index = 0) {
        var e;
        try {
          if (this.maxItems() > index) {
            return this.select(index);
          } else {
            return this.select(-1);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };

      // * Called only when new (different) index is selected
      _.pOnSelectionChanged = function () { };
    })();
  });

  // ■ END Window_Selectable.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    return (function () {    // * Input Extension: KDGamepad
      //------------------------------------------------------------------------------
      // * Поддержка расширенного управления через геймпад (свой модуль)
      var ALIAS___updateGamepadState, _;
      //@[DEFINES]
      _ = Input;
      // * Активировать работу модуля KDGamepad
      _.activateExtendedKDGamepad = function () {
        return _._kdIsGamepadExtended = true;
      };
      //@[ALIAS]
      ALIAS___updateGamepadState = _._updateGamepadState;
      _._updateGamepadState = function (gamepad) {
        if (Input._kdIsGamepadExtended === true) {
          KDGamepad.update();
        }
        if ((typeof $gameTemp !== "undefined" && $gameTemp !== null ? $gameTemp.__kdgpStopDefaultGamepad : void 0) === true) {
          return;
        }
        // * Режим перемещения без DPad
        // * В оригинале игрок также ходит по DPad клавишам, что может быть не удобно
        // * например при работе с инвентарём
        if (KDGamepad.isNoDPadMoving()) {
          if (KDGamepad.isDPadAny()) {
            Input.clear();
            return;
          }
        }
        ALIAS___updateGamepadState.call(this, gamepad);
      };
      window.KDGamepad = function () {
        return new Error("This is static class");
      };
      window.addEventListener("gamepadconnected", function (event) {
        var e;
        try {
          return KDGamepad.refresh();
        } catch (error) {
          // * Можно напрямую
          //unless KDGamepad.isExists()
          //    if event.gamepad? and event.gamepad.mapping == 'standard'
          //        KDGamepad.init(event.gamepad)
          e = error;
          KDCore.warning(e);
          return KDGamepad.stop();
        }
      });
      window.addEventListener("gamepaddisconnected", function (event) {
        var e;
        if (!KDGamepad.isExists()) {
          return;
        }
        try {
          if ((event.gamepad != null) && event.gamepad === KDGamepad.gamepad) {
            return KDGamepad.stop();
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return KDGamepad.stop();
        }
      });
      KDGamepad.stopDefaultGamepad = function () {
        $gameTemp.__kdgpStopDefaultGamepad = true;
      };
      KDGamepad.resumeDefaultGamepad = function () {
        $gameTemp.__kdgpStopDefaultGamepad = null;
      };
      // * Ссылка на геймпад
      KDGamepad.gamepad = null;
      // * Подключён ли Gamepad ?
      KDGamepad.isExists = function () {
        return KDGamepad.gamepad != null;
      };
      // * Инициализация состояния кнопок
      // * Этот метод вызывается автоматически из Refresh или при подключении Gamepad
      KDGamepad.init = function (gamepad) {
        KDGamepad.gamepad = gamepad;
        this._isActive = true;
        this.buttonNames = [
          'A', // 0
          'B', // 1
          'X', // 2
          'Y', // 3
          'LB', // 4
          'RB', // 5
          'LTrigger', // 6
          'RTrigger', // 7
          'Back', // 8
          'Start', // 9
          'LStick', // 10
          'RStick', // 11
          'dUp', // 12
          'dDown', // 13
          'dLeft', // 14
          'dRight' // 15
        ];
        this.reset();
      };
      // * Аналог Input.clear
      KDGamepad.clear = function () {
        return KDGamepad.reset();
      };
      // * Сбросить состояние кнопок
      KDGamepad.reset = function () {
        this.leftStick = {
          x: 0,
          y: 0
        };
        this.rightStick = {
          x: 0,
          y: 0
        };
        this.buttons = {};
        this.buttonsPressed = {};
        this.prevButtons = {};
      };

      // * Остановить учёт геймпада
      KDGamepad.stop = function () {
        KDGamepad.reset();
        KDGamepad.gamepad = null;
      };
      // * Функция проверки что нажата кнопка на геймпаде
      KDGamepad._buttonPressed = function (gamepad, index) {
        var b, e;
        try {
          if (!gamepad || !gamepad.buttons || index >= gamepad.buttons.length) {
            return false;
          }
          b = gamepad.buttons[index];
          if (b == null) {
            return false;
          }
          if (typeof b === 'object') {
            // * Можно упростить
            return b.pressed;
          }
          return b === 1.0;
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return false;
        }
      };
      // * Каждый кадр (обновление состояний)
      KDGamepad.update = function () {
        var e, gp, i, isDown, j, len, name, ref;
        if (!KDGamepad.isActive()) {
          return;
        }
        KDGamepad.refresh();
        if (!KDGamepad.isExists()) {
          return;
        }
        try {
          gp = KDGamepad.gamepad;
          ref = this.buttonNames;
          // * Проверка состояний кнопок
          for (i = j = 0, len = ref.length; j < len; i = ++j) {
            name = ref[i];
            this.buttons[name] = false;
            isDown = KDGamepad._buttonPressed(gp, i);
            if (isDown === true) {
              this.prevButtons[name] = true;
            } else {
              // * Срабатываение только при нажал - отпустил
              if (this.prevButtons[name] === true) {
                this.buttons[name] = true;
                this.prevButtons[name] = false;
              }
            }
          }
          // * Проверка стиков
          this.leftStick.x = gp.axes[0];
          this.leftStick.y = gp.axes[1];
          this.rightStick.x = gp.axes[2];
          this.rightStick.y = gp.axes[3];
        } catch (error) {
          e = error;
          KDCore.warning(e);
          KDGamepad.stop();
        }
      };
      // * Обновить и проверить состояние Gamepad
      // * Надо каждый раз это вызывать
      KDGamepad.refresh = function () {
        var e, gamepads, gp, i, isGamepadRefreshed, j, ref;
        try {
          isGamepadRefreshed = false;
          if (navigator.getGamepads) {
            gamepads = navigator.getGamepads();
          } else if (navigator.webkitGetGamepads) {
            gamepads = navigator.webkitGetGamepads();
          }
          if (gamepads != null) {
            for (i = j = 0, ref = gamepads.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
              gp = gamepads[i];
              if ((gp != null) && gp.mapping === 'standard') {
                isGamepadRefreshed = true;
                if (KDGamepad.buttonNames != null) {
                  KDGamepad.gamepad = gp;
                } else {
                  KDGamepad.init(gp);
                }
                break;
              }
            }
          }
          if (!isGamepadRefreshed) {
            // * Если не был найден не один gamepad - отключаем систему
            KDGamepad.stop();
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
          KDGamepad.stop();
        }
      };
      // * Любое нажатие кнопки
      KDGamepad.isKeyAny = function (name) {
        return KDGamepad.isKey(name) || KDGamepad.isKeyPressed(name);
      };
      // * Нажата ли кнопка (trigger нажал - отпустил)
      KDGamepad.isKey = function (name) {
        if (!KDGamepad.isExists()) {
          return false;
        }
        if (this.buttons == null) {
          return false;
        }
        return this.buttons[name] === true;
      };
      // * Нажата ли кнопка (continues зажата)
      KDGamepad.isKeyPressed = function (name) {
        if (!KDGamepad.isExists()) {
          return false;
        }
        if (this.buttons == null) {
          return false;
        }
        return this.prevButtons[name] === true;
      };
      KDGamepad.isDPadAny = function () {
        return KDGamepad.isKeyAny("dLeft") || KDGamepad.isKeyAny("dRight") || KDGamepad.isKeyAny("dUp") || KDGamepad.isKeyAny("dDown");
      };
      KDGamepad.isActive = function () {
        return this._isActive === true;
      };
      // * Временно отключить обработку KDGamepad
      KDGamepad.setActive = function (_isActive) {
        this._isActive = _isActive;
        if (KDGamepad.isActive()) {
          KDGamepad.refresh();
        } else {
          KDGamepad.stop();
        }
      };
      // * Отключить перемещение игрока на DPad
      KDGamepad.setNoDPadMovingMode = function (_noDpadMoving) {
        this._noDpadMoving = _noDpadMoving;
      };
      return KDGamepad.isNoDPadMoving = function () {
        return this._noDpadMoving === true;
      };
    })();
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var BitmapSrc;
    BitmapSrc = (function () {
      //?[DEPRECATED]
      class BitmapSrc {
        constructor() {
          this.bitmap = null;
        }

        static LoadFromIconIndex(iconIndex) {
          var bs, icon_bitmap, iconset, ph, pw, sx, sy;
          bs = new BitmapSrc();
          if (BitmapSrc.CACHE[iconIndex] == null) {
            iconset = ImageManager.loadSystem('IconSet');
            if (KDCore.isMV()) {
              pw = Window_Base._iconWidth;
              ph = Window_Base._iconHeight;
            } else {
              pw = ImageManager.iconWidth;
              ph = ImageManager.iconHeight;
            }
            sx = iconIndex % 16 * pw;
            sy = Math.floor(iconIndex / 16) * ph;
            icon_bitmap = new Bitmap(pw, ph);
            icon_bitmap.addLoadListener(function () {
              icon_bitmap.blt(iconset, sx, sy, pw, ph, 0, 0);
            });
            BitmapSrc.CACHE[iconIndex] = icon_bitmap;
          }
          bs.bitmap = BitmapSrc.CACHE[iconIndex];
          return bs;
        }

        static LoadFromImageFolder(filename) {
          var bs;
          bs = new BitmapSrc();
          bs.bitmap = ImageManager.loadPicture(filename);
          return bs;
        }

        static LoadFromBase64(data, name) {
          var bs;
          bs = new BitmapSrc();
          if (name != null) {
            if (BitmapSrc.CACHE[name] != null) {
              bs.bitmap = BitmapSrc.CACHE[name];
            } else {
              BitmapSrc.CACHE[name] = Bitmap.load(data);
              bs.bitmap = BitmapSrc.CACHE[name];
            }
          } else {
            bs.bitmap = Bitmap.load(data);
          }
          return bs;
        }

        static LoadFromMemory(symbol) {
          var bs;
          bs = new BitmapSrc();
          if (BitmapSrc.CACHE[symbol] != null) {
            bs.bitmap = BitmapSrc.CACHE[symbol];
          } else {
            bs.bitmap = ImageManager.loadEmptyBitmap();
          }
          return bs;
        }

      };

      BitmapSrc.CACHE = {};

      return BitmapSrc;

    }).call(this);
    //@[EXTEND]
    return KDCore.BitmapSrc = BitmapSrc;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Changer;
    // * Класс который может плавно изменять какой-либо параметр
    // * Работает в стиле chain методов

    // * ------------------ ПРИМЕР ----------------------------------

    // * Меняем прозрачность 4 раза, туда-сюда, затем выводим done в консоль

    //@changer = new KDCore.Changer(someSprite)
    //@changer.change('opacity').from(255)
    //            .to(0).step(5).speed(1).delay(30).repeat(4).reverse()
    //            .start().done(() -> console.log('done'))
    //@changer.update()

    // * -------------------------------------------------------------
    Changer = class Changer {
      constructor(obj) {
        this.obj = obj;
        // * Количество кадров, в которые будет обновление
        this._field = null; // * название поля
        this._speed = 1; // * frames
        this._step = 1; // * шаг изменения значения
        this._from = 0; // * Начальное значение
        this._to = 0; // * Конечное значение
        this._thread = null;
        this._orienation = true; // * Направление + или - step (true = +)
        this._delay = 0; // * Задержка старта
        this._changer = null; // * Ссылка на следующий changer
        this._isRepeat = false; // * Надо ли поторить себя снова
        this._onDoneMethod = null; // * Метод будет выполнен в конце (при завершении)
        this._isPrepared = false; // * Элемента был подготовлен (установлено значение from)
      }

      start() {
        if (this._field == null) {
          return;
        }
        if (this._from === this._to) {
          return;
        }
        if (this._delay > 0) {
          this._delayThread = new KDCore.TimedUpdate(this._delay, this._startThread.bind(this));
          this._delayThread.once();
        } else {
          this._startThread();
        }
        return this;
      }

      isStarted() {
        return (this._thread != null) || (this._delayThread != null);
      }

      from(_from) {
        this._from = _from;
        return this;
      }

      to(_to) {
        this._to = _to;
        return this;
      }

      step(_step) {
        this._step = _step;
        return this;
      }

      speed(_speed) {
        this._speed = _speed;
        return this;
      }

      change(_field) {
        this._field = _field;
        return this;
      }

      // * Снова повторить (не совместим с then)
      // * Если ничего не указать, или <= 0 -> то бескончно
      repeat(_repeatCount = 0) {
        this._repeatCount = _repeatCount;
        if (this._repeatCount <= 0) {
          this._repeatCount = null;
        }
        this._isRepeat = true;
        this._changer = null;
        return this;
      }

      // * Снова повторить, но поменять местами to и from (работает только с repeat >= 2)
      reverse() {
        this._isReverse = true;
        return this;
      }

      isDone() {
        if (!this._isPrepared) {
          // * Чтобы не было выхода пока ждёт Delay
          return false;
        }
        // * Если от 255 до 0 (например)
        if (this._orienation === false) {
          // * То может быть меньше нуля (т.к. @step динамический)
          return this.value() <= this._to;
        } else {
          return this.value() >= this._to;
        }
      }

      value() {
        return this.obj[this._field];
      }

      stop() {
        this._thread = null;
        this._delayThread = null;
        if (this._changer == null) {
          // * Если есть связанный Changer, то не выполняем метод завршения
          return this._callDoneMethod();
        }
      }

      // * При ожидании, значения устанавливаются не сразу
      delay(_delay) {
        this._delay = _delay;
        return this;
      }

      // * Выполнить другой Changer после этого
      // * Не совместим с Repeat
      // * НЕЛЬЗЯ зацикливать, не будет работать
      // * Соединённый не надо обновлять вне, он обновляется в этом
      then(_changer) {
        this._changer = _changer;
        this._isRepeat = false;
        return this;
      }

      // * Этот метод будт выполнене в конце
      done(_onDoneMethod) {
        this._onDoneMethod = _onDoneMethod;
        return this;
      }

      // * Шаг можно выполнить и в ручную
      makeStep() {
        if (!this.isStarted()) {
          this._prepare();
        }
        this._makeStep();
        return this;
      }

      update() {
        var ref;
        if (this.isStarted()) {
          if (this._delay > 0) {
            if ((ref = this._delayThread) != null) {
              ref.update();
            }
          }
          if (this._thread != null) {
            this._updateMainThread();
          }
        } else {
          // * Если хоть раз был запущен
          if (this._isBeenStarted === true) {
            if (this._changer != null) {
              this._updateChainedChanger();
            }
          }
        }
      }

      static CreateForOpacityUp(sprite, step = 35, onDone = null, isAutoStart = true) {
        var changer;
        changer = new Changer(sprite);
        changer.change('opacity').from(0).to(255).step(step);
        changer.done(function () {
          sprite.opacity = 255;
          if (onDone != null) {
            return onDone();
          }
        });
        if (isAutoStart) {
          changer.start();
        }
        return changer;
      }

      static CreateForOpacityDown(sprite, step = 35, onDone = null, isAutoStart = true) {
        var changer;
        changer = new Changer(sprite);
        changer.change('opacity').from(sprite.opacity).to(0).step(step);
        changer.done(function () {
          sprite.opacity = 0;
          if (onDone != null) {
            return onDone();
          }
        });
        if (isAutoStart) {
          changer.start();
        }
        return changer;
      }

    };
    (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ Changer.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = Changer.prototype;
      _._prepare = function () {
        if (this._field == null) {
          return;
        }
        this._orienation = this._from < this._to;
        if (!this._orienation) {
          this._step *= -1;
        }
        // * Устанавливаем начальное значение
        this.obj[this._field] = this._from;
        this._isPrepared = true;
      };
      _._makeStep = function () {
        var value;
        if (this.isDone()) {
          return;
        }
        value = this.value();
        value += this._step;
        this.obj[this._field] = value;
      };
      _._startThread = function () {
        this._prepare();
        if (this.isDone()) {
          return;
        }
        this._thread = new KDCore.TimedUpdate(this._speed, this._makeStep.bind(this));
        return this._isBeenStarted = true;
      };
      _._updateChainedChanger = function () {
        if (this._changer.isStarted()) {
          this._changer.update();
          if (this._changer.isDone()) {
            this._callDoneMethod();
            this._changer.stop();
            return this._changer = null;
          }
        } else {
          return this._changer.start();
        }
      };
      _._restart = function () {
        if (!this._isCanRepeatMore()) {
          return;
        }
        if (this._repeatCount == null) {
          // * Если указано! число повторений, то onDone метод не вызываем
          this._callDoneMethod();
        }
        if (this._isReverse === true) {
          this._swapFromTo();
        }
        this._prepare();
        return this.start();
      };
      _._swapFromTo = function () {
        var t;
        t = this._from;
        this._from = this._to;
        this._to = t;
        // * Инвентируем число step
        this._step *= -1;
      };
      _._callDoneMethod = function () {
        if (this._onDoneMethod != null) {
          return this._onDoneMethod();
        }
      };
      _._isCanRepeatMore = function () {
        if (this._repeatCount == null) {
          return true;
        }
        this._repeatCount--;
        if (this._repeatCount <= 0) {
          this.stop();
          return false;
        }
        return true;
      };
      _._updateMainThread = function () {
        this._thread.update();
        if (this.isDone()) {
          if (this._isRepeat === true) {
            this._restart();
          } else {
            if (this._changer != null) {
              this._updateChainedChanger();
            }
            this.stop();
          }
        }
      };
    })();
    // ■ END Changer.coffee
    //---------------------------------------------------------------------------

    //@[EXTEND]
    return KDCore.Changer = Changer;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Color;
    Color = (function () {
      //rev 29.04.2024
      class Color {
        constructor(r1 = 255, g1 = 255, b1 = 255, a1 = 255) {
          this.r = r1;
          this.g = g1;
          this.b = b1;
          this.a = a1;
        }

        getLightestColor(lightLevel) {
          var bf, newColor, p;
          bf = 0.3 * this.R + 0.59 * this.G + 0.11 * this.B;
          p = 0;
          newColor = [0, 0, 0, 0];
          if (bf - lightLevel >= 0) {
            if (bf >= 0) {
              p = Math.abs(bf - lightLevel) / lightLevel;
            }
            newColor = this.ARR.map(function (c) {
              return c - (p * c);
            });
          } else {
            if (bf >= 0) {
              p = (lightLevel - bf) / (255 - bf);
            }
            newColor = this.ARR.map(function (c) {
              return [(255 - c) * p + c, 255].min();
            });
          }
          return new Color(newColor[0], newColor[1], newColor[2], newColor[3]);
        }

        clone() {
          return this.reAlpha(this.a);
        }

        reAlpha(newAlpha) {
          return new Color(this.r, this.g, this.b, newAlpha || 255);
        }

        static AddConstantColor(name, color) {
          color.toHex();
          color.toArray();
          color.toCSS();
          KDCore.SDK.setConstantToObject(Color, name, color);
        }

        toHex() {
          var b, g, r;
          if (this._colorHex != null) {
            return this._colorHex;
          }
          r = Math.floor(this.r).toString(16).padZero(2);
          g = Math.floor(this.g).toString(16).padZero(2);
          b = Math.floor(this.b).toString(16).padZero(2);
          return this._colorHex = '#' + r + g + b;
        }

        toArray() {
          if (this._colorArray != null) {
            return this._colorArray;
          }
          return this._colorArray = [this.r, this.g, this.b, this.a];
        }

        toCSS() {
          var na, nb, ng, nr;
          if (this._colorCss != null) {
            return this._colorCss;
          }
          nr = Math.round(this.r);
          ng = Math.round(this.g);
          nb = Math.round(this.b);
          na = this.a / 255;
          return this._colorCss = `rgba(${nr},${ng},${nb},${na})`;
        }

        toNumber() {
          return Number(this.toHex().replace("#", "0x"));
        }

        static Random() {
          var a, b, c;
          a = KDCore.SDK.rand(1, 254);
          b = KDCore.SDK.rand(1, 254);
          c = KDCore.SDK.rand(1, 254);
          return new Color(a, b, c, 255);
        }

        static FromHex(hexString) {
          var color, result, shorthandRegex;
          //Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
          shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
          hexString = hexString.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
          });
          result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
          color = null;
          if (result != null) {
            color = {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
            };
          }
          if (color != null) {
            return new Color(color.r, color.g, color.b, 255);
          } else {
            return Color.NONE;
          }
        }

      };

      Object.defineProperties(Color.prototype, {
        R: {
          get: function () {
            return this.r;
          },
          configurable: true
        },
        G: {
          get: function () {
            return this.g;
          },
          configurable: true
        },
        B: {
          get: function () {
            return this.b;
          },
          configurable: true
        },
        A: {
          get: function () {
            return this.a;
          },
          configurable: true
        },
        ARR: {
          get: function () {
            return this.toArray();
          },
          configurable: true
        },
        CSS: {
          get: function () {
            return this.toCSS();
          },
          configurable: true
        },
        HEX: {
          get: function () {
            return this.toHex();
          },
          configurable: true
        },
        OX: {
          get: function () {
            return this.toNumber();
          },
          configurable: true
        }
      });

      Color.AddConstantColor('NONE', new Color(0, 0, 0, 0));

      Color.AddConstantColor('BLACK', new Color(0, 0, 0, 255));

      Color.AddConstantColor('WHITE', new Color(255, 255, 255, 255));

      Color.AddConstantColor('RED', new Color(255, 0, 0, 255));

      Color.AddConstantColor('GREEN', new Color(0, 255, 0, 255));

      Color.AddConstantColor('BLUE', new Color(0, 0, 255, 255));

      Color.AddConstantColor('AQUA', new Color(128, 255, 255, 255));

      Color.AddConstantColor('MAGENTA', new Color(128, 0, 128, 255));

      Color.AddConstantColor('YELLOW', new Color(255, 255, 0, 255));

      Color.AddConstantColor('ORANGE', new Color(255, 128, 0, 255));

      return Color;

    }).call(this);
    //@[EXTEND]
    return KDCore.Color = Color;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Color, DevLog, __TMP_LOGS__;
    Color = KDCore.Color;
    __TMP_LOGS__ = [];
    DevLog = class DevLog {
      constructor(prefix = "") {
        this.prefix = prefix;
        this._isShow = typeof DEV !== 'undefined';
        this._color = Color.BLACK;
        this._backColor = Color.WHITE;
        __TMP_LOGS__.push(this);
      }

      on() {
        this._isShow = true;
        return this;
      }

      off() {
        this._isShow = false;
        return this;
      }

      applyRandomColors() {
        this.applyRandomWithoutBackgroundColors();
        this.setBackColor(Color.Random());
        return this;
      }

      applyRandomWithoutBackgroundColors() {
        this.setColor(Color.Random());
        return this;
      }

      setColor(color) {
        this._color = color;
        return this;
      }

      setBackColor(backColor) {
        this._backColor = backColor;
        return this;
      }

      applyLibraryColors() {
        this.setColors(new Color(22, 120, 138, 0), Color.BLACK);
        return this;
      }

      setColors(color, backColor) {
        this.setColor(color);
        this.setBackColor(backColor);
        return this;
      }

      applyExtensionColors() {
        this.setColors(new Color(22, 143, 137, 0), Color.BLACK.getLightestColor(60));
        return this;
      }

      applyWarningColors() {
        this.setColors(Color.ORANGE, Color.BLACK.getLightestColor(100));
        return this;
      }

      p(text) {
        if (!this._isShow) {
          return;
        }
        if (text == null) {
          console.log("");
        }
        this._printText(text);
      }

      _printText(text) {
        text = this.prefix + " : " + text;
        if (this._isUsingColor()) {
          return this._printTextWithColors(text);
        } else {
          return console.log(text);
        }
      }

      _isUsingColor() {
        return this._color !== Color.BLACK || this._backColor !== Color.WHITE;
      }

      _printTextWithColors(text) {
        var args;
        args = ['%c' + text, `color: ${this._color.HEX} ; background: ${this._backColor.HEX};`];
        return window.console.log.apply(console, args);
      }

      static CreateForLib(library) {
        var dlog;
        dlog = new DevLog(library.name);
        dlog.applyLibraryColors();
        return dlog;
      }

      static EnableAllLogs() {
        return __TMP_LOGS__.forEach(function (log) {
          return log.on();
        });
      }

    };
    //@[EXTEND]
    return KDCore.DevLog = DevLog;
  });


  // Generated by CoffeeScript 2.6.1
  // * Класс для глобального события игры (НЕ события на карте)
  KDCore.registerLibraryToLoad(function () {
    //@[AUTO EXTEND]
    return KDCore.GEvent = class GEvent {
      constructor(name) {
        this.name = name;
        this.clear();
      }

      addListener(listener, isSingle = false) {
        if (listener == null) {
          return;
        }
        if (isSingle === true) {
          this.listeners = [listener];
        } else {
          this.listeners.push(listener);
        }
      }

      removeListener(listener) {
        if (listener == null) {
          return;
        }
        return this.listener.delete(listener);
      }

      call() {
        var i, l, len, ref;
        ref = this.listeners;
        for (i = 0, len = ref.length; i < len; i++) {
          l = ref[i];
          l();
        }
      }

      clear() {
        return this.listeners = [];
      }

    };
  });


  // Generated by CoffeeScript 2.6.1
  // * Менеджер для управления глобальными событиями игры (GEvent) (НЕ события на карте)
  KDCore.registerLibraryToLoad(function () {
    var GEventsManager;
    // * Данный менеджер глобальный, т.е. с ним работают ВСЕ плагины, которые его используют!
    GEventsManager = function () { };
    (function () {
      var _;
      _ = GEventsManager;
      // * Существует ли событие с данным именем
      _.isEventExists = function (gEventName) {
        return this._getEventByName(gEventName) != null;
      };
      // * Получить список всех зарегестрированных событий (имён)
      _.getAllEvents = function () {
        if (this.events == null) {
          return [];
        }
        return this.events.map(function (ev) {
          return ev.name;
        });
      };
      // * Зарегестрировать событие (используется только имя события)
      _.register = function (gEventName) {
        if (this.events == null) {
          this.events = [];
        }
        this.events.push(new KDCore.GEvent(gEventName));
      };
      // * Подписаться на событие (имя события) и слушатель
      // * если isSingle == true - то у события может быть только один исполнитель
      _.subscribeFor = function (evName, listener, isSingle = false) {
        var ref;
        return (ref = this._getEventByName(evName)) != null ? ref.addListener(listener, isSingle) : void 0;
      };
      // * Подписаться на событие (уникально) для объекта
      // * Т.е. при вызове этого метода ещё раз, если объект
      // * уже подписан на событие, ничего не будет (без дубликатов)
      //? ВНИМАНИЕ ! Если объект подписался через subscribeForX, то
      // выполнив clear по данному evName, он уже не подпишится!
      _.subscribeForX = function (context, evName, listener) {
        var e, key;
        try {
          key = "__kdCoreGEvent_" + evName;
          if (context[key] == null) {
            this.subscribeFor(evName, listener);
            return context[key] = true;
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      // * Вызвать событие (по имени)
      _.call = function (evName) {
        var ref;
        return (ref = this._getEventByName(evName)) != null ? ref.call() : void 0;
      };
      _.clear = function (evName) {
        var ref;
        return (ref = this._getEventByName(evName)) != null ? ref.clear() : void 0;
      };
      _._getEventByName = function (name) {
        if (!this.events) {
          return null;
        }
        return this.events.find(function (ev) {
          return ev.name === name;
        });
      };
    })();
    //@[EXTEND]
    return KDCore.GEventsManager = GEventsManager;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    //@[AUTO EXTEND]
    return KDCore.MapAnchorPoint = class MapAnchorPoint {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this._realX = this.x;
        this._realY = this.y;
      }

      shiftY() {
        return 0;
      }

      jumpHeight() {
        return 0;
      }

      scrolledX() {
        return Game_CharacterBase.prototype.scrolledX.call(this);
      }

      scrolledY() {
        return Game_CharacterBase.prototype.scrolledY.call(this);
      }

      screenX() {
        return Game_CharacterBase.prototype.screenX.call(this);
      }

      screenY() {
        return Game_CharacterBase.prototype.screenY.call(this);
      }

      moveTo(x, y) {
        this.x = x;
        this.y = y;
        this._realX = this.x;
        this._realY = this.y;
      }

    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    //@[AUTO EXTEND]
    //?[DEPRECATED]
    return KDCore.ParametersManager = class ParametersManager {
      constructor(pluginName) {
        this.pluginName = pluginName;
        this._cache = {};
        this._parameters = PluginManager.getPluginParametersByRoot(this.pluginName);
      }

      isLoaded() {
        return (this._parameters != null) && this._parameters.hasOwnProperty(this.pluginName);
      }

      isHasParameter(name) {
        return this._parameters[name] != null;
      }

      getString(name) {
        return this._parameters[name];
      }

      convertField(object, fieldName) {
        var e;
        try {
          object[fieldName] = JSON.parse(object[fieldName] || 'false');
        } catch (error) {
          e = error;
          console.error('Error while convert field ' + e.name);
          object[fieldName] = false;
        }
        return object;
      }

      convertImage(object, fieldName) {
        return object[fieldName] = this.loadImage(object[fieldName]);
      }

      loadImage(filename, smooth) {
        var e, path;
        try {
          if (filename) {
            path = filename.split('/');
            filename = path.last();
            path = path.first() + '/';
            return ImageManager.loadBitmap('img/' + path, filename, 0, smooth || true);
          } else {
            return ImageManager.loadEmptyBitmap();
          }
        } catch (error) {
          e = error;
          console.error(e);
          return ImageManager.loadEmptyBitmap();
        }
      }

      getFromCacheOrInit(name, func) {
        var object;
        if (!this.isInCache(name)) {
          if (func != null) {
            object = func.call(this);
            this.putInCache(name, object);
          }
        }
        return this.getFromCache(name);
      }

      isInCache(name) {
        return this._cache.hasOwnProperty(name);
      }

      putInCache(name, object) {
        return this._cache[name] = object;
      }

      getFromCache(name) {
        return this._cache[name];
      }

      getNumber(name) {
        var number;
        number = this.getObject(name);
        if (KDCore.SDK.isInt(number)) {
          return number;
        }
        return 0;
      }

      getObject(name) {
        if (this.isHasParameter(name)) {
          return JSON.parse(this.getString(name) || '{}');
        } else {
          return {};
        }
      }

      getBoolean(name) {
        if (this.isHasParameter(name)) {
          return JSON.parse(this.getString(name) || false);
        } else {
          return false;
        }
      }

      getBooleanFromCacheWithDefault(name, defaultValue) {
        if (this.isHasParameter(name)) {
          return this.getBooleanFromCache(name);
        } else {
          return defaultValue;
        }
      }

      getNumberFromCacheWithDefault(name, defaultValue) {
        if (this.isHasParameter(name)) {
          return this.getNumberFromCache(name);
        } else {
          return defaultValue;
        }
      }

      getStringFromCacheWithDefault(name, defaultValue) {
        if (this.isHasParameter(name)) {
          return this.getStringFromCache(name);
        } else {
          return defaultValue;
        }
      }

      getBooleanFromCache(name) {
        return this.getFromCacheOrInit(name, function () {
          return this.getBoolean(name);
        });
      }

      getNumberFromCache(name) {
        return this.getFromCacheOrInit(name, function () {
          return this.getNumber(name);
        });
      }

      getStringFromCache(name) {
        return this.getFromCacheOrInit(name, function () {
          return this.getString(name);
        });
      }

    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    //@[AUTO EXTEND]
    return KDCore.ParamLoader = class ParamLoader {
      constructor(pluginName) {
        this.pluginName = pluginName;
        this.paramsRaw = PluginManager.getPluginParametersByRoot(this.pluginName);
        this.params = this.parseParameters(this.paramsRaw);
      }

      parseParameters(paramSet) {
        var clearKey, key, params, typeKey, value;
        params = {};
        for (key in paramSet) {
          value = paramSet[key];
          KDCore.__ppNameToParseNext = key;
          clearKey = this.parseKey(key);
          typeKey = this.parseKeyType(key);
          params[clearKey] = this.parseParamItem(typeKey, value);
        }
        return params;
      }

      parseKey(keyRaw) {
        return keyRaw.split(":")[0];
      }

      parseKeyType(keyRaw) {
        return keyRaw.split(":")[1];
      }

      writeDetailedError() {
        var e;
        try {
          if (!String.any(KDCore.__ppNameToParseNext)) {
            return;
          }
          return console.warn("Please, check Plugin Parameter " + KDCore.__ppNameToParseNext + " in plugin " + this.pluginName);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      // * Проверка, загружены ли параметры плагина
      isLoaded() {
        return (this.paramsRaw != null) && this.paramsRaw.hasOwnProperty(this.pluginName);
      }

      // * Имя параметра без ключа
      isHasParameter(paramName) {
        return this.params[paramName] != null;
      }


      // * Возвращает значение параметра (def - по умолчанию, если не найден)
      getParam(paramName, def) {
        var value;
        if (this.isHasParameter(paramName)) {
          value = this.params[paramName];
          if (value != null) {
            return value;
          }
        }
        return def;
      }

      // * Данные ключи должны идти после названия параметра через :
      // * Пример: @param ShowDelay:int, @param TestBool:bool
      // * Текстовые параметры, которые надо вернуть как есть, можно без типа (text, file, combo, ...)
      parseParamItem(type, item) {
        var e;
        if (type == null) {
          return item;
        }
        try {
          switch (type) {
            case "int":
            case "i":
              return Number(item);
            case "intA":
              return this.parseArray(item, "int");
            case "bool":
            case "b":
            case "e":
              return eval(item);
            case "struct":
            case "s":
              return this.parseStruct(item);
            case "structA":
              return this.parseStructArray(item);
            case "str":
              return item;
            case "strA":
              return this.parseArray(item, "str");
            case "note":
              return this.parseNote(item);
            case "css":
              return item.toCss();
            case "color":
              return KDCore.Color.FromHex(item);
            case "json":
            case "j":
              return this.parseJson(item);
            case "jA":
              return this.parseArray(item, 'json');
            default:
              return item;
          }
        } catch (error) {
          e = error;
          console.warn(e);
          this.writeDetailedError();
          return item;
        }
      }

      parseArray(items, type) {
        var e, elements, i, len, p, parsed;
        try {
          elements = [];
          parsed = JsonEx.parse(items);
          for (i = 0, len = parsed.length; i < len; i++) {
            p = parsed[i];
            try {
              elements.push(this.parseParamItem(type, p));
            } catch (error) {
              e = error;
              console.warn(e);
            }
          }
        } catch (error) {
          e = error;
          console.warn(e);
          this.writeDetailedError();
        }
        return elements;
      }

      parseStruct(item) {
        var e, parsed;
        try {
          if (item == null) {
            return null;
          }
          if (!String.any(item)) {
            return null;
          }
          parsed = JsonEx.parse(item);
          if (parsed != null) {
            return this.parseParameters(parsed);
          }
        } catch (error) {
          e = error;
          console.warn(e);
          this.writeDetailedError();
        }
        return null;
      }

      parseStructArray(items) {
        var e, elements, i, len, p, parsed;
        try {
          elements = [];
          parsed = JsonEx.parse(items);
          for (i = 0, len = parsed.length; i < len; i++) {
            p = parsed[i];
            try {
              elements.push(this.parseStruct(p));
            } catch (error) {
              e = error;
              console.warn(e);
              this.writeDetailedError();
            }
          }
        } catch (error) {
          e = error;
          console.warn(e);
          this.writeDetailedError();
        }
        return elements;
      }

      parseNote(item) {
        var e, parsed;
        try {
          parsed = JsonEx.parse(item);
          if (parsed != null) {
            return parsed;
          }
        } catch (error) {
          e = error;
          console.warn(e);
          this.writeDetailedError();
        }
        return item;
      }

      parseJson(item) {
        var cx, e, element, elements, i, json, key, len, parsed, value;
        try {
          json = {};
          parsed = JsonEx.parse(item);
          elements = parsed.split('\n');
          for (i = 0, len = elements.length; i < len; i++) {
            element = elements[i];
            cx = "{" + element + "}";
            try {
              item = JsonEx.parse(cx);
              for (key in item) {
                value = item[key];
                json[key] = value;
              }
            } catch (error) {
              e = error;
              KDCore.warning("Parameter " + element + " have syntax errors, ignored");
            }
          }
          return json;
        } catch (error) {
          e = error;
          KDCore.warning(e);
          this.writeDetailedError();
          return null; // * Чтобы default value был возвращён
        }
      }

    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Point;
    Point = (function () {
      class Point {
        constructor(_x = 0, _y = 0) {
          this._x = _x;
          this._y = _y;
        }

        clone() {
          return new Point(this._x, this._y);
        }

        toString() {
          return "[" + this._x + " ; " + this._y + "]";
        }

        isSame(anotherPoint) {
          return this.x === anotherPoint.x && this.y === anotherPoint.y;
        }

        convertToCanvas() {
          return new Point(Graphics.pageToCanvasX(this._x), Graphics.pageToCanvasY(this._y));
        }

        convertToMap() {
          return new Point($gameMap.canvasToMapX(this._x), $gameMap.canvasToMapY(this._y));
        }

        convertToScreen() {
          return new Point(this.screenX(), this.screenY());
        }

        screenX() {
          var t, tw;
          t = $gameMap.adjustX(this._x);
          tw = $gameMap.tileWidth();
          return Math.round(t * tw + tw / 2);
        }

        screenY() {
          var t, th;
          t = $gameMap.adjustY(this._y);
          th = $gameMap.tileHeight();
          return Math.round(t * th + th);
        }

        round() {
          return new Point(Math.round(this._x), Math.round(this._y));
        }

        floor() {
          return new Point(Math.floor(this._x), Math.floor(this._y));
        }

        mapPointOnScreen() {
          var nx, ny;
          nx = (this._x * $gameMap.tileWidth()) - ($gameMap.displayX() * $gameMap.tileWidth());
          ny = (this._y * $gameMap.tileHeight()) - ($gameMap.displayY() * $gameMap.tileHeight());
          return new Point(nx, ny);
        }

        multiplyBy(val) {
          return new Point(this._x * val, this._y * val);
        }

        simple() {
          return new PIXI.Point(this.x, this.y);
        }

        delta(point) {
          var dx, dy;
          dx = point.x - this._x;
          dy = point.y - this._y;
          return new KDCore.Point(dx, dy);
        }

        static _getEmpty() {
          if (Point._emptyPoint == null) {
            Point._emptyPoint = new Point(0, 0);
          }
          return Point._emptyPoint;
        }

      };

      Object.defineProperties(Point.prototype, {
        x: {
          get: function () {
            return this._x;
          },
          configurable: true
        },
        y: {
          get: function () {
            return this._y;
          },
          configurable: true
        }
      });

      Object.defineProperties(Point, {
        Empty: {
          get: function () {
            return Point._getEmpty();
          },
          configurable: false
        }
      });

      Array.prototype.toPoint = function () {
        return new Point(this[0], this[1]);
      };

      Object.defineProperty(Array.prototype, "toPoint", {
        enumerable: false
      });

      Sprite.prototype.toPoint = function () {
        return new Point(this.x, this.y);
      };

      Game_CharacterBase.prototype.toPoint = function () {
        return new Point(this.x, this.y);
      };

      return Point;

    }).call(this);
    //@[EXTEND]
    return KDCore.Point = Point;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    return KDCore.Sprite = (function (superClass) {
      //rev 07.05.22

      //@[AUTO EXTEND]
      class Sprite extends superClass {
        constructor() {
          super(...arguments);
          this.pHandledIndex = 0;
          this._create2();
          return;
        }

        _create2() { } // * FOR CHILDRENS

        pIsSupportKeyboardHandle() {
          return false;
        }

        pIsVerticalKeyboardNavigation() {
          return true;
        }

        pIsFreeKeyboardNavigation() {
          return false;
        }

        // * For Childrens
        isLoaded() {
          return true;
        }

        isNotHaveBounds() {
          return this._isNotHaveBounds === true;
        }

        realWidth() {
          var child;
          if (this.isNotHaveBounds()) {
            return 0;
          }
          if (this.width === 0) {
            child = this.zeroChild();
            if (child != null) {
              if (child.realWidth != null) {
                return child.realWidth();
              } else {
                return child.width;
              }
            }
          }
          return this.width;
        }

        realHeight() {
          var child;
          if (this.isNotHaveBounds()) {
            return 0;
          }
          if (this.height === 0) {
            child = this.zeroChild();
            if (child != null) {
              if (child.realHeight != null) {
                return child.realHeight();
              } else {
                return child.height;
              }
            }
          }
          return this.height;
        }

        dataBindings() {
          return {
            x: function (v) {
              if (v != null) {
                return this.setPosition(v, this.y);
              }
            },
            y: function (v) {
              if (v != null) {
                return this.setPosition(this.x, v);
              }
            },
            position: function (v) {
              if (v != null) {
                return this.setPosition(v);
              }
            },
            anchor: function (v) {
              if (v != null) {
                return this.setCommonAnchor(v);
              }
            },
            animation: function (v) {
              if (v != null) {
                return this.addAnimationRule(v);
              }
            },
            opacity: function (v) {
              if (v != null) {
                return this.opacity = v;
              }
            },
            visible: function (v) {
              if (v != null) {
                return this.visible = v;
              }
            },
            scale: function (v) {
              if (v != null) {
                return this.scale.set(v);
              }
            },
            rotation: function (v) {
              if (v != null) {
                return this.rotation = v;
              }
            },
            centeredScale: function (v) {
              if (v != null) {
                return this.setCenteredScale(v);
              }
            },
            physicalBounds: function (v) {
              if (v != null) {
                return this._isNotHaveBounds = !v;
              }
            }
          };
        }

        setCenteredScale(value) {
          var e;
          try {
            if (!this.isLoaded()) {
              this._requireFunc('setCenteredScale', arguments);
              return;
            }
            this._refreshAnchoredCenter();
            return this._scaleFactor = value;
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        callBinding(binding, value) {
          var e, func;
          try {
            func = this.dataBindings()[binding];
            if (func != null) {
              return func.call(this, value);
            } else {
              return console.warn("Binding " + binding + " not found!");
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        refreshBindings(dataObject = null, recursive = true) {
          var child, e, j, len, ref, results;
          try {
            if (dataObject == null) {
              dataObject = this;
            }
            KDCore.UI.Builder.RefreshBindings(this, dataObject);
            if (recursive === true) {
              ref = this.children;
              results = [];
              for (j = 0, len = ref.length; j < len; j++) {
                child = ref[j];
                try {
                  if (child.refreshBindings != null) {
                    results.push(child.refreshBindings(dataObject, true));
                  } else {
                    results.push(void 0);
                  }
                } catch (error) {
                  e = error;
                  results.push(KDCore.warning(e));
                }
              }
              return results;
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        uiConstant(name) {
          var e;
          try {
            if (this.uiConstants != null) {
              return this.uiConstants[name];
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
          return null;
        }

        addLoadListener(listener) {
          var e;
          try {
            if (listener == null) {
              return;
            }
            if (this.isLoaded()) {
              try {
                return listener();
              } catch (error) {
                e = error;
                return KDCore.warning(e);
              }
            } else {
              return this._addLoadListener(listener);
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        setPosition(x = 0, y = null, bindedObj = null) {
          var _x, _y, e;
          try {
            if (!this.isLoaded()) {
              this._requireFunc('setPosition', arguments);
              return;
            }
            // * Check first Argument as Object
            if (typeof x === 'object') {
              if (x.x != null) {
                _x = x.x;
                if (x.y != null) {
                  _y = x.y;
                }
                x = _x;
                y = _y;
              } else if (x.position != null) {
                this.setPosition(x.position, null, bindedObj);
                return;
              } else if (x.margins != null) {
                this.setPosition(x.margins, null, bindedObj);
                return;
              }
            }
            if (typeof x === 'string') {
              this.x = this._getValueByStr(x, 'x', bindedObj);
              if (y == null) {
                y = x;
              }
            } else {
              this.x = x; // * Number
            }
            if (typeof y === 'string') {
              return this.y = this._getValueByStr(y, 'y', bindedObj);
            } else {
              if (y != null) {
                return this.y = y;
              }
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _getValueByStr(value = '0', forField = 'x', owner = null) {
          var dpValue, e, exValue, parentRefSize, percentValue, r, result, resultValue, v;
          try {
            if (typeof value === 'number') {
              return value;
            }
            if (isFinite(value)) {
              return Number(value);
            }
            if (typeof value !== 'string') {
              return 0;
            }
            // * NO REPLACEMENT
            if (value[0] === '$' || value[0] === '@') {
              v = KDCore.Utils.convertBindingValue(owner, value, this);
              return this._getValueByStr(v, forField, owner);
            }
            if (value.contains("prevX")) {
              value = value.replace("prevX", this._getPreviousChildData('x'));
              return this._getValueByStr(value, forField, owner);
            }
            if (value.contains("prevY")) {
              value = value.replace("prevY", this._getPreviousChildData('y'));
              return this._getValueByStr(value, forField, owner);
            }
            if (value.contains("prevHeight")) {
              value = value.replace("prevHeight", this._getPreviousChildData('height'));
              return this._getValueByStr(value, forField, owner);
            }
            if (value.contains("prevWidth")) {
              value = value.replace("prevWidth", this._getPreviousChildData('width'));
              return this._getValueByStr(value, forField, owner);
            }
            if (value.contains("prevEndX")) {
              value = value.replace("prevEndX", "prevX + prevWidth");
              return this._getValueByStr(value, forField, owner);
            }
            if (value.contains("prevEndY")) {
              value = value.replace("prevEndY", "prevY + prevHeight");
              return this._getValueByStr(value, forField, owner);
            }
            if (value.contains("end")) {
              value = value.replace("end", "100%");
            }
            if (value.contains("begin")) {
              if (forField === 'y') {
                value = value.replace("begin", "-height");
              } else {
                value = value.replace("begin", "-width");
              }
            }
            if (value.contains("right")) {
              value = value.replace("right", "100% - width");
              return this._getValueByStr(value, forField, owner);
            }
            if (value.contains("left")) {
              value = value.replace("left", "0");
              return this._getValueByStr(value, forField, owner);
            }
            if (value.contains("top")) {
              value = value.replace("top", "0");
              return this._getValueByStr(value, forField, owner);
            }
            if (value.contains("bottom")) {
              value = value.replace("bottom", "100% - height");
              return this._getValueByStr(value, forField, owner);
            }
            // * Replace all X%
            if (value.contains("%")) {
              r = new RegExp("(\\d+)%", "g");
              result = r.exec(value);
              while ((result != null)) {
                percentValue = Number(result[1]);
                resultValue = 0;
                if (this.parent != null) {
                  parentRefSize = KDCore.Utils.getRealSpriteSize(forField, this.parent);
                  resultValue = parentRefSize * (percentValue / 100.0);
                }
                value = value.replace(/(\d+)%/, resultValue);
                result = r.exec(value);
              }
            }
            // * Replace all HDP
            if (value.contains("hdp")) {
              r = new RegExp("(\\d+)hdp", "g");
              result = r.exec(value);
              while ((result != null)) {
                dpValue = Number(result[1]);
                resultValue = KDCore.Utils.convertDP(dpValue, true);
                value = value.replace(/(\d+)hdp/, resultValue);
                result = r.exec(value);
              }
            }
            // * Replace all DP
            if (value.contains("dp")) {
              r = new RegExp("(\\d+)dp", "g");
              result = r.exec(value);
              while ((result != null)) {
                dpValue = Number(result[1]);
                resultValue = KDCore.Utils.convertDP(dpValue, false);
                value = value.replace(/(\d+)dp/, resultValue);
                result = r.exec(value);
              }
            }
            if (value.contains('center')) {
              v = this._getValueByStr('50%', forField, owner);
              exValue = KDCore.Utils.getRealSpriteSize(forField, this);
              exValue = v - (exValue / 2);
              value = value.replace("center", exValue);
              return this._getValueByStr(value, forField, owner);
            }
            if (value.contains("height")) {
              exValue = KDCore.Utils.getRealSpriteSize("height", this);
              value = value.replace("height", exValue);
              return this._getValueByStr(value, forField, owner);
            }
            if (value.contains("width")) {
              exValue = KDCore.Utils.getRealSpriteSize("width", this);
              value = value.replace("width", exValue);
              return this._getValueByStr(value, forField, owner);
            }
            v = eval(value);
            return this._getValueByStr(v, forField, owner);
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
          return 0;
        }

        _getPreviousChildData(forField) {
          var e, myIndex, prevChild;
          try {
            if (this.parent == null) {
              return 0;
            }
            if (this.parent.children.length <= 1) {
              return 0;
            }
            myIndex = this.parent.children.indexOf(this);
            prevChild = this.parent.children[myIndex - 1];
            if (prevChild == null) {
              return 0;
            }
            if (forField === "x") {
              return prevChild.x;
            } else if (forField === "y") {
              return prevChild.y;
            } else {
              return KDCore.Utils.getRealSpriteSize(forField, prevChild);
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
          return 0;
        }

        setCommonAnchor(x, y) {
          var c, e, j, len, ref;
          try {
            if (y == null) {
              y = x;
            }
            this.anchor.x = x;
            this.anchor.y = y;
            ref = this.children;
            for (j = 0, len = ref.length; j < len; j++) {
              c = ref[j];
              if (c == null) {
                continue;
              }
              if (c.setCommonAnchor != null) {
                c.setCommonAnchor(x, y);
              } else {
                if (c.anchor == null) {
                  continue;
                }
                c.anchor.x = x;
                c.anchor.y = y;
              }
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
        }

        zeroChild() {
          return this.children[0];
        }

        appear(step, delay = 0) {
          this.opacity = 0;
          this._opChanger = KDCore.Changer.CreateForOpacityUp(this, step, () => {
            this._opChanger = null;
            return this._updateOpChanger = function () { }; // * EMPTY
          }, false); // * Not autostart for Delay
          if (delay > 0) {
            this._opChanger.delay(delay);
          }
          this._opChanger.start();
          this._updateOpChanger = () => {
            var ref;
            return (ref = this._opChanger) != null ? ref.update() : void 0;
          };
        }

        disapper(step, delay = 0) {
          this._opChanger = KDCore.Changer.CreateForOpacityDown(this, step, () => {
            this._opChanger = null;
            return this._updateOpChanger = function () { }; // * EMPTY
          }, false); // * Not autostart for Delay
          if (delay > 0) {
            this._opChanger.delay(delay);
          }
          this._opChanger.start();
          this._updateOpChanger = () => {
            var ref;
            return (ref = this._opChanger) != null ? ref.update() : void 0;
          };
        }

        moveWithAnimation(dx, dy, duration = 30, easingType = 2) {
          var e;
          try {
            this._moveAnimationItem = new Game_Picture();
            this._moveAnimationItem._x = this.x;
            this._moveAnimationItem._y = this.y;
            this._moveAnimationItem.move(0, this.x + dx, this.y + dy, 1, 1, 255, 0, duration, easingType);
            this.updateMovingAnimation = this.updateMovingAnimationBody;
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
        }

        assignTooltip(content, params) {
          if (this._tooltip != null) {
            this.removeChild(this._tooltip);
          }
          this._tooltip = new KDCore.UI.Sprite_UITooltip(params);
          this._tooltip.addContent(content);
          this.updateTooltip = this.updateTooltipBody;
        }

        destroyTooltip() {
          if (this._tooltip == null) {
            return;
          }
          this.hideTooltip();
          this.removeChild(this._tooltip);
          this._tooltip = null;
          return this.updateTooltip = function () { }; // * EMPTY
        }

        showTooltip() {
          if (this._tooltip == null) {
            return;
          }
          // * Position 0, 0, becouse cursorRelative by default
          this._tooltip.activateTooltip(0, 0, this);
        }

        hideTooltip() {
          if (this._tooltip == null) {
            return;
          }
          this._tooltip.deactivateTooltip();
        }

        //@[DYNAMIC]
        updateTooltip() { } // * EMPTY

        updateTooltipBody() {
          if (this.isUnderMouse()) {
            if (this._tooltip.isTooltipActive()) {

            } else {
              if (this.isReady() && this.visible === true && this.opacity >= 255) {
                return this.showTooltip();
              }
            }
          } else {
            if (this._tooltip.isTooltipActive()) {
              return this.hideTooltip();
            }
          }
        }

        //@[DYNAMIC]
        updateMovingAnimation() { } // * EMPTY

        updateMovingAnimationBody() {
          var e;
          try {
            if (this._moveAnimationItem == null) {
              return;
            }
            this._moveAnimationItem.update();
            this.x = this._moveAnimationItem._x;
            this.y = this._moveAnimationItem._y;
            if (this._moveAnimationItem._duration <= 0) {
              this._moveAnimationItem = null;
              this.updateMovingAnimation = function () { };
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
            this.updateMovingAnimation = function () { };
          }
        }

        addAnimationRule(rule) {
          var e, r;
          try {
            if (rule == null) {
              return;
            }
            if (this._animationRules == null) {
              this._animationRules = [];
            }
            if (typeof rule === 'object' && (rule.animationConfig != null) && (rule.update != null)) {
              r = rule;
            } else {
              r = new KDCore.AnimationRule(rule, this);
            }
            this._animationRules.push(r);
            return r;
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
          return null;
        }

        setAnimationRule(rule) {
          var e;
          try {
            this._animationRules = [];
            return this.addAnimationRule(rule);
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
          return null;
        }

        isShouldAlwaysKeepCenter() {
          return this.__anchoredCenterX != null;
        }

        // * For Animation Rule (callback)
        onBeforeChangeScaleFactor() {
          var e;
          try {
            if (this.isShouldAlwaysKeepCenter()) {
              return this._refreshAnchoredCenter();
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        update() {
          super.update();
          this._updateOpChanger();
          this.updateTooltip();
          if (this.updateMovingAnimation != null) {
            this.updateMovingAnimation();
          }
          if (this.pIsHandlerActive()) {
            this._pHandleKeyboardInputs();
          }
          if (this.devdrag === true) {
            this._pUpdateDevDrag();
          }
          if (this._animationRules != null) {
            this._pUpdateAnimationRules();
          }
          if (this._scaleFactor != null) {
            this._pUpdateScaleFactor();
          }
        }

        _pUpdateScaleFactor() {
          var e;
          try {
            if (this.scale.x !== this._scaleFactor || this.scale.y !== this._scaleFactor) {
              this.scale.set(this._scaleFactor);
              if (this.isShouldAlwaysKeepCenter()) {
                return this._refreshRelativeCenterPosition();
              }
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _refreshAnchoredCenter() {
          var e;
          try {
            if (this.__lastCenterBaseX !== this.x || this.__lastCenterBaseY !== this.y) {
              this.__lastCenterBaseX = this.x;
              this.__lastCenterBaseY = this.y;
            }
            this.__anchoredCenterX = this.__lastCenterBaseX + this.realWidth() / 2;
            return this.__anchoredCenterX = this.__lastCenterBaseY + this.realHeight() / 2;
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _refreshRelativeCenterPosition() {
          var e, newHeight, newWidth;
          try {
            // Смещение позиции для сохранения центра
            newWidth = this.realWidth() * this.scale.x;
            newHeight = this.realHeight() * this.scale.y;
            this.x = this.__anchoredCenterX - newWidth / 2;
            return this.y = this.__anchoredCenterX - newHeight / 2;
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _pUpdateAnimationRules() {
          var e, j, len, ref, results, rule;
          try {
            ref = this._animationRules;
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
              rule = ref[j];
              rule.update();
              results.push(rule.applyAnimation(this));
            }
            return results;
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        //@[DYNAMIC]
        _updateOpChanger() { } // * EMPTY

        b() {
          return this.bitmap;
        }

        clear() {
          return this.bitmap.clear();
        }

        add() {
          return this.addChild(...arguments);
        }

        bNew(w, h) {
          if (h == null) {
            h = w;
          }
          return this.bitmap = new Bitmap(w, h);
        }

        bImg(filename, sourceFolder) {
          var getterFunc;
          getterFunc = function (filename) {
            return ImageManager.loadPicture(filename);
          };
          if (sourceFolder != null) {
            getterFunc = function (filename) {
              return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
            };
          }
          return this.bitmap = getterFunc(filename);
        }

        onReady(method) {
          if (method != null) {
            return this.bitmap.addLoadListener(method);
          }
        }

        drawText() {
          return this.bitmap.drawText(...arguments);
        }

        drawTextFull(text, position = "center") {
          if (this.textSettingsPosition != null) {
            position = this.textSettingsPosition;
          }
          return this.bitmap.drawTextFull(text, position);
        }

        //?DEPRECATED
        drawTextWithSettings(text) {
          this.clear();
          this.drawTextFull(text, this.textSettingsPosition);
        }

        //? x, y, icon, size
        drawIcon() {
          return this.bitmap.drawIcon(...arguments);
        }

        moveByJson(settings) {
          var pos;
          pos = KDCore.Utils.getPositionPointFromJSON(settings);
          return this.move(pos.x, pos.y);
        }

        applyTextSettingsByJson(sprite, settings) {
          this.applyTextSettingsByExtraSettings(sprite, settings.text);
        }

        applyTextSettingsByExtraSettings(sprite, s) {
          sprite.move(s.marginX, s.marginY);
          sprite.b().fontSize = s.fontSize;
          sprite.b().textColor = KDCore.Color.FromHex(s.textColor).CSS;
          sprite.b().outlineWidth = s.outlineWidth;
          if (s.outlineColor != null) {
            sprite.b().outlineColor = KDCore.Color.FromHex(s.outlineColor).CSS;
          }
          if (s.fontFace != null) {
            sprite.b().fontFace = s.fontFace;
          }
          sprite.b().fontItalic = s.fontItalic;
          sprite.visible = s.visible;
        }

        isReady() {
          var i, j, ref;
          if (this.bitmap != null) {
            if (!this.bitmap.isReady()) {
              return false;
            }
          }
          for (i = j = 0, ref = this.children.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
            if (!this.children[i].bitmap.isReady()) {
              return false;
            }
          }
          return true;
        }

        isCheckAlpha() {
          return false;
        }

        inPosition(point) {
          var e, gx, gy, pixel, result, x, y;
          result = this.isContainsPoint(point);
          if (result && this.isCheckAlpha()) {
            try {
              ({ x, y } = point);
              gx = KDCore.SDK.toGlobalCoord(this, 'x');
              gy = KDCore.SDK.toGlobalCoord(this, 'y');
              pixel = this.bitmap.getAlphaPixel(x - gx, y - gy);
              result = pixel > 100;
            } catch (error) {
              e = error;
              KDCore.warning(e);
              result = true; // * ignor Alpha if error
            }
          }
          return result;
        }

        isUnderMouse() {
          return this.inPosition(TouchInput);
        }

        // * Из параметров плагина
        applyFontParam(font) {
          var b;
          if (font == null) {
            return;
          }
          b = this.b();
          if (font.size != null) {
            b.fontSize = font.size;
          }
          if (!String.isNullOrEmpty(font.face)) {
            b.fontFace = font.face;
          }
          if (font.italic != null) {
            b.fontItalic = font.italic;
          }
        }

        applyOutlineParam(outline) {
          var b;
          if (outline == null) {
            return;
          }
          b = this.b();
          if (outline.width != null) {
            b.outlineWidth = outline.width;
          }
          if (!String.isNullOrEmpty(outline.color)) {
            b.outlineColor = outline.color;
          }
        }

        activateHandlerManagment() {
          var e;
          try {
            if (this.pIsFreeKeyboardNavigation()) {
              this.handleUpAction = this.freeSelectUpHandlerItem;
              this.handleDownAction = this.freeSelectDownHandlerItem;
              this.handleRightAction = this.freeSelectRightHandlerItem;
              this.handleLeftAction = this.freeSelectLeftHandlerItem;
            } else {
              this.handleUpAction = this.selectPreviousHandlerItem;
              this.handleDownAction = this.selectNextHandlerItem;
            }
            return this._handleManagerActive = true;
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        deactivateHandlerManagment() {
          var ref;
          this._handleManagerActive = false;
          this.handleUpAction = function () { }; // * EMPTY
          this.handleDownAction = function () { }; // * EMPTY
          this.handleRightAction = function () { }; // * EMPTY
          this.handleLeftAction = function () { }; // * EMPTY
          if ((ref = $gameTemp.__pkdActiveKeyboardHandler) != null) {
            ref.pDeactivateHandler();
          }
          $gameTemp.__pkdActiveKeyboardHandler = null;
        }

        addChild(item) {
          var c, handlers;
          c = super.addChild(...arguments);
          if (item instanceof KDCore.Sprite && (item.pIsSupportKeyboardHandle != null) && item.pIsSupportKeyboardHandle()) {
            handlers = this._pGetAllHandlers();
            item.pHandledIndex = handlers.length - 1;
          }
          return c;
        }

        pIsAnyHandlerSelected() {
          return $gameTemp.__pkdActiveKeyboardHandler != null;
        }

        selectPreviousHandlerItem() {
          var e;
          try {
            if (!this.pIsAnyHandlerSelected()) {
              return this._trySelectHandler(0);
            } else {
              return this._trySelectHandler(this._selectedHandlerIndex() - 1);
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _selectedHandlerIndex() {
          return $gameTemp.__pkdActiveKeyboardHandler.pHandledIndex;
        }

        _trySelectHandler(index) {
          var e, handlerItemToSelect;
          try {
            handlerItemToSelect = this._pGetAllHandlers().find(function (i) {
              return i.pHandledIndex === index;
            });
            if (handlerItemToSelect != null) {
              handlerItemToSelect.pActivateHandler();
            }
            return this._pOnHandled();
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _pGetAllHandlers() {
          return this.children.filter(function (i) {
            return i instanceof KDCore.Sprite && (i.pIsSupportKeyboardHandle != null) && i.pIsSupportKeyboardHandle();
          });
        }

        selectNextHandlerItem() {
          var e;
          try {
            if (!this.pIsAnyHandlerSelected()) {
              return this._trySelectHandler(0);
            } else {
              return this._trySelectHandler(this._selectedHandlerIndex() + 1);
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        activeItemFilterOptions() {
          return {
            distance: 15,
            outerStrength: 4
          };
        }

        pIsHandlerActive() {
          return this._handleManagerActive === true || this._handlerActive === true;
        }

        destroy() {
          if ($gameTemp.__pkdActiveKeyboardHandler === this) {
            $gameTemp.__pkdActiveKeyboardHandler = null;
          }
          return super.destroy();
        }

        _pOnHandled() {
          return Input.clear();
        }

        _pHandleKeyL(ignoreNavigation = false) {
          var e;
          try {
            if (this.pIsVerticalKeyboardNavigation() || ignoreNavigation) {
              if (this.handleLeftAction != null) {
                this.handleLeftAction();
                return this._pOnHandled();
              }
            } else {
              return this._pHandleKeyU(true);
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _pHandleKeyR(ignoreNavigation = false) {
          var e;
          try {
            if (this.pIsVerticalKeyboardNavigation() || ignoreNavigation) {
              if (this.handleRightAction != null) {
                this.handleRightAction();
                return this._pOnHandled();
              }
            } else {
              return this._pHandleKeyD(true);
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _pHandleKeyU(ignoreNavigation = false) {
          var e;
          try {
            if (this.pIsVerticalKeyboardNavigation() || ignoreNavigation) {
              if (this.handleUpAction != null) {
                this.handleUpAction();
                return this._pOnHandled();
              }
            } else {
              return this._pHandleKeyL(true);
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _pHandleKeyD(ignoreNavigation = false) {
          var e;
          try {
            if (this.pIsVerticalKeyboardNavigation() || ignoreNavigation) {
              if (this.handleDownAction != null) {
                this.handleDownAction();
                return this._pOnHandled();
              }
            } else {
              return this._pHandleKeyR(true);
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _pHandleKeyOK() {
          var e;
          try {
            if (this.handleOKAction != null) {
              this.handleOKAction();
              return this._pOnHandled();
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        pActivateHandler() {
          if (!this.pIsSupportKeyboardHandle()) {
            return;
          }
          if (($gameTemp.__pkdActiveKeyboardHandler != null) && $gameTemp.__pkdActiveKeyboardHandler !== this) {
            $gameTemp.__pkdActiveKeyboardHandler.pDeactivateHandler();
          }
          this._handlerActive = true;
          this._activateHandlerVisually();
          $gameTemp.__pkdActiveKeyboardHandler = this;
        }

        _activateHandlerVisually() {
          var e;
          try {
            //@filters = [new PIXI.filters.OutlineFilter(0.8, 0x99ff99, 0.5)]
            //@filters = [new PIXI.filters.GlowFilter(2, 0.8, 0, 0x09f9, 0.5)]
            return this.filters = [new PIXI.filters.GlowFilter(this.activeItemFilterOptions())];
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        pDeactivateHandler() {
          if ($gameTemp.__pkdActiveKeyboardHandler === this) {
            $gameTemp.__pkdActiveKeyboardHandler = null;
          }
          this._handlerActive = false;
          this.filters = [];
        }

        _pHandleKeyboardInputs() {
          var e;
          try {
            if (Input.isTriggered('left')) {
              return this._pHandleKeyL();
            } else if (Input.isTriggered('right')) {
              return this._pHandleKeyR();
            } else if (Input.isTriggered('up')) {
              return this._pHandleKeyU();
            } else if (Input.isTriggered('down')) {
              return this._pHandleKeyD();
            } else if (Input.isTriggered('ok')) {
              return this._pHandleKeyOK();
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        pSelectedHandlerItem() {
          return $gameTemp.__pkdActiveKeyboardHandler;
        }

        freeSelectUpHandlerItem() {
          var allItems, e, item;
          try {
            allItems = this._pGetAllHandlers();
            if (allItems.length === 0) {
              return;
            }
            if (this.pIsAnyHandlerSelected()) {
              item = this._pGetClosestItemToYx(this.pSelectedHandlerItem().x, -this.pSelectedHandlerItem().y, allItems);
              if (item != null) {
                item.pActivateHandler();
              }
            } else {
              allItems[0].pActivateHandler();
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
          return this._pOnHandled();
        }

        freeSelectDownHandlerItem() {
          var allItems, e, item;
          try {
            allItems = this._pGetAllHandlers();
            if (allItems.length === 0) {
              return;
            }
            if (this.pIsAnyHandlerSelected()) {
              item = this._pGetClosestItemToYx(this.pSelectedHandlerItem().x, this.pSelectedHandlerItem().y, allItems);
              if (item != null) {
                item.pActivateHandler();
              }
            } else {
              allItems[0].pActivateHandler();
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
          return this._pOnHandled();
        }

        freeSelectRightHandlerItem() {
          var allItems, e, item;
          try {
            allItems = this._pGetAllHandlers();
            if (allItems.length === 0) {
              return;
            }
            if (this.pIsAnyHandlerSelected()) {
              // * We should find item by X,Y position
              // * If we search in RIGHT direction, we should find closest item with X > currentX, but on the same Y
              // * If we can't find such item, we should again, but modify Y
              item = this._pGetClosestItemToXy(this.pSelectedHandlerItem().x, this.pSelectedHandlerItem().y, allItems);
              if (item != null) {
                item.pActivateHandler();
              }
            } else {
              allItems[0].pActivateHandler();
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
          return this._pOnHandled();
        }

        freeSelectLeftHandlerItem() {
          var allItems, e, item;
          try {
            allItems = this._pGetAllHandlers();
            if (allItems.length === 0) {
              return;
            }
            if (this.pIsAnyHandlerSelected()) {
              item = this._pGetClosestItemToXy(-this.pSelectedHandlerItem().x, this.pSelectedHandlerItem().y, allItems);
              if (item != null) {
                item.pActivateHandler();
              }
            } else {
              allItems[0].pActivateHandler();
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
          return this._pOnHandled();
        }

        _pGetClosestItemToXy(x, y, fromItems) {
          var distances, index, item, items, itemsInRow, j, len, rX;
          items = this._pGetItemsByX(x, fromItems);
          if (items.length === 0) {
            return null;
          }
          itemsInRow = items.filter(function (item) {
            return item.y === y;
          });
          if (itemsInRow.length > 0) {
            itemsInRow.sort(function (a, b) {
              return a.x - b.x;
            });
            return itemsInRow[0];
          } else {
            distances = [];
            rX = Math.abs(x);
            for (index = j = 0, len = items.length; j < len; index = ++j) {
              item = items[index];
              distances.push([index, Math.abs(item.x - rX) + Math.abs(item.y - y)]);
            }
            distances.sort(function (a, b) {
              return a[1] - b[1];
            });
            return items[distances[0][0]];
          }
        }

        _pGetItemsByX(x, fromItems) {
          if (x >= 0) {
            return fromItems.filter(function (item) {
              return item.x > x;
            });
          } else {
            return fromItems.filter(function (item) {
              return item.x < Math.abs(x);
            });
          }
        }

        _pGetClosestItemToYx(x, y, fromItems) {
          var distances, index, item, items, itemsInRow, j, len, rY;
          items = this._pGetItemsByY(y, fromItems);
          if (items.length === 0) {
            return null;
          }
          itemsInRow = items.filter(function (item) {
            return item.x === x;
          });
          if (itemsInRow.length > 0) {
            itemsInRow.sort(function (a, b) {
              return a.y - b.y;
            });
            return itemsInRow[0];
          } else {
            distances = [];
            rY = Math.abs(y);
            for (index = j = 0, len = items.length; j < len; index = ++j) {
              item = items[index];
              distances.push([index, Math.abs(item.x - x) + Math.abs(item.y - rY)]);
            }
            distances.sort(function (a, b) {
              return a[1] - b[1];
            });
            return items[distances[0][0]];
          }
        }

        _pGetItemsByY(y, fromItems) {
          if (y >= 0) {
            return fromItems.filter(function (item) {
              return item.y > y;
            });
          } else {
            return fromItems.filter(function (item) {
              return item.y < Math.abs(y);
            });
          }
        }

        _applyRequiredData() {
          var _n, e, func, j, len, ref;
          try {
            if (this._requiredFuncs == null) {
              return;
            }
            ref = this._requiredFuncs;
            for (j = 0, len = ref.length; j < len; j++) {
              func = ref[j];
              try {
                _n = func[0];
                if ((_n != null) && (this[_n] != null)) {
                  this[_n](...func[1]);
                }
              } catch (error) {
                e = error;
                KDCore.warning(e);
              }
            }
            return this._requiredFuncs = null;
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _requireFunc(name, args) {
          var e;
          try {
            if (this._requiredFuncs == null) {
              this._requiredFuncs = [];
            }
            return this._requiredFuncs.push([name, args]);
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _addLoadListener(listener) {
          var e;
          try {
            if (this._loadListeners == null) {
              this._loadListeners = [];
            }
            return this._loadListeners.push(listener);
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _executeLoadListeners() {
          var e, j, l, len, ref;
          try {
            if (!this._loadListeners) {
              return;
            }
            ref = this._loadListeners;
            for (j = 0, len = ref.length; j < len; j++) {
              l = ref[j];
              try {
                l();
              } catch (error) {
                e = error;
                KDCore.warning(e);
              }
            }
            return this._loadListeners = null;
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        // * DEVELOPER TOOL ====================================
        _pUpdateDevDrag() {
          if (TouchInput.isLongPressed()) {
            if (this.__ddIn === true) {
              return this._pDD_moving();
            } else {
              if (this.isUnderMouse()) {
                return this._pDD_startMove();
              }
            }
          } else {
            if (this.__ddIn === true) {
              return this._pDD_stopMove();
            }
          }
        }

        _pDD_moving() {
          this.x = TouchInput.x - this._pDDTDelta.x;
          return this.y = TouchInput.y - this._pDDTDelta.y;
        }

        _pDD_startMove() {
          var x, y;
          ({ x, y } = TouchInput);
          this._pDDTDelta = { x, y };
          this.__ddIn = true;
        }

        _pDD_stopMove() {
          this.__ddIn = false;
          console.log("DD DRAG POS: ");
          return console.log(this.x, this.y);
        }

        // * STATIC ==================================================
        static WhiteRect(w, h) {
          return KDCore.Sprite.ColorRect(w, h, '#FFF');
        }

        static BlackRect(w, h) {
          return KDCore.Sprite.ColorRect(w, h, '#000');
        }

        static ColorRect(w, h, color) {
          var s;
          s = KDCore.Sprite.FromBitmap(w, h);
          s.b().fillAll(color);
          return s;
        }

        static FromImg(filename, sourceFolder) {
          var s;
          s = new KDCore.Sprite();
          s.bImg(filename, sourceFolder);
          return s;
        }

        static FromBitmap(w, h) {
          var s;
          s = new KDCore.Sprite();
          s.bNew(w, h);
          return s;
        }

        static FromTextSettings(settings) {
          var s;
          s = KDCore.Sprite.FromBitmap(settings.textBoxWidth, settings.textBoxHeight);
          s.applyTextSettingsByExtraSettings(s, settings);
          s.textSettingsPosition = settings.position;
          return s;
        }

        // * Загрузчик из параметров плагина (безопасный)
        static FromParams(pluginParams) {
          var e, h, height, margins, s, size, w, width;
          try {
            size = pluginParams.size;
            ({ w, h } = size);
            try {
              if (String.any(w)) {
                if (isFinite(w)) {
                  w = Number(w);
                } else {
                  w = eval(w);
                }
              }
            } catch (error) {
              e = error;
              KDCore.warning(e);
              w = 100;
            }
            try {
              if (String.any(h)) {
                if (isFinite(h)) {
                  h = Number(h);
                } else {
                  h = eval(h);
                }
              }
            } catch (error) {
              e = error;
              KDCore.warning(e);
              h = 100;
            }
            ({ width, height } = size);
            try {
              if (String.any(width)) {
                if (isFinite(width)) {
                  w = Number(width);
                } else {
                  w = eval(width);
                }
              }
            } catch (error) {
              e = error;
              KDCore.warning(e);
              w = 100;
            }
            try {
              if (String.any(height)) {
                if (isFinite(height)) {
                  h = Number(height);
                } else {
                  h = eval(height);
                }
              }
            } catch (error) {
              e = error;
              KDCore.warning(e);
              h = 100;
            }
            s = KDCore.Sprite.FromBitmap(w, h);
            s.textSettingsPosition = pluginParams.alignment;
            margins = pluginParams.margins;
            if (margins != null) {
              s.move(margins.x, margins.y);
            }
            s.applyFontParam(pluginParams.font);
            s.applyOutlineParam(pluginParams.outline);
            if (!String.isNullOrEmpty(pluginParams.textColor)) {
              s.b().textColor = pluginParams.textColor;
            }
            if (pluginParams.visible != null) {
              s.visible = pluginParams.visible;
            }
            return s;
          } catch (error) {
            e = error;
            console.warn('Something wrong with Text Settings!', e);
            return KDCore.Sprite.FromBitmap(60, 30);
          }
        }

      };

      return Sprite;

    }).call(this, Sprite);
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    //@[AUTO EXTEND]
    return KDCore.TimedUpdate = class TimedUpdate {
      constructor(interval, method) {
        this.interval = interval;
        this.method = method;
        this._timer = 0;
        this._once = false;
      }

      setAfter(_repeatsLeft, afterCallback) {
        this._repeatsLeft = _repeatsLeft;
        this.afterCallback = afterCallback;
      }

      update() {
        if (this.interval == null) {
          return;
        }
        if (this._timer++ >= this.interval) {
          this.call();
          this._timer = 0;
          if (this._repeatsLeft != null) {
            this._repeatsLeft -= 1;
            if (this._repeatsLeft <= 0) {
              if (this.afterCallback != null) {
                this.afterCallback();
              }
            }
          }
          if (this._once === true) {
            return this.stop();
          }
        }
      }

      once() {
        return this._once = true;
      }

      onUpdate(method) {
        this.method = method;
      }

      stop() {
        return this.interval = null;
      }

      isAlive() {
        return this.interval != null;
      }

      // * Рандомизировать интервал @interval (-min, +max)
      applyTimeRange(min, max) {
        var value;
        if (!this.isAlive()) {
          return;
        }
        value = KDCore.SDK.rand(min, max);
        return this.interval += value;
      }

      call() {
        var e;
        try {
          if (this.method != null) {
            return this.method();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    //@[AUTO EXTEND]
    return KDCore.AnimationKeyFrame = class AnimationKeyFrame {
      constructor(startValue, endValue, duration = 1, func = 'linear') {
        this.startValue = startValue;
        this.endValue = endValue;
        this.func = func;
        this._t = 0; // * Timer
        this._d = duration * 60; // * Convert to Frames
        this._c = this.endValue - this.startValue; // * Change
        if (this.func == null) {
          this.func = 'linear';
        }
        return;
      }

      reset() {
        return this._t = 0;
      }

      update() {
        if (this._t < this._d) {
          return this._t += 1;
        }
      }

      isEnd() {
        return this._t >= this._d || this._d <= 0;
      }

      getValue() {
        if (this._d <= 0) {
          return this.endValue;
        } else {
          return this.easingFunc()(this._t, this.startValue, this._c, this._d);
        }
      }

      easingFunc() {
        if ((this.func != null) && (KDCore.EasingFuncs[this.func] != null)) {
          return KDCore.EasingFuncs[this.func];
        } else {
          console.warn("Easing func " + this.func + " not found!");
          return this.linear;
        }
      }

      // * Default one
      linear(t, b, c, d) {
        return c * t / d + b;
      }

    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    //@[AUTO EXTEND]
    return KDCore.AnimationKeyLine = class AnimationKeyLine {
      constructor(keyFramesList, totalDuration = 1, func = 'linear') {
        this.totalDuration = totalDuration;
        this.keyFrames = this._parseKeyFrames(keyFramesList, func);
        this.repeatsLeftBase = 0;
        this.repeatsLeft = 0;
        this.keyIndex = 0;
        this._relativeValue = 0;
        this._isStarted = false;
        return;
      }

      setRelativeValue(_relativeValue) {
        this._relativeValue = _relativeValue;
      }

      setRepeatsCount(repeatsLeftBase) {
        this.repeatsLeftBase = repeatsLeftBase;
        return this.repeatsLeft = this.repeatsLeftBase;
      }

      setLoop() {
        return this.setRepeatsCount(-1);
      }

      start(startDelay = 0) {
        this.startDelay = startDelay;
        if (this.startDelay === 0) {
          return this._isStarted = true;
        } else {
          return this._startTimer = this.startDelay * 60;
        }
      }

      pause() {
        this._isStarted = false;
        this._startTimer = null;
      }

      isStarted() {
        return this._isStarted === true;
      }

      complete() {
        this.keyIndex = this.keyFrames.length;
        this.repeatsLeft = 0;
      }

      reset() {
        this.repeatsLeft = this.repeatsLeftBase;
        this._resetKeyframes();
      }

      update() {
        if (this._startTimer != null) {
          this._updateStartTimer();
        }
        if (!this.isStarted()) {
          return;
        }
        if (this.isEnd()) {
          if (this.repeatsLeft === 0) { // * No repeats at all
            return;
          } else if (this.repeatsLeft < 0) { // * Infinite Loop
            this._resetKeyframes();
          } else {
            this.repeatsLeft -= 1;
            this._resetKeyframes();
          }
        }
        this.keyFrames[this.keyIndex].update();
        if (this.keyFrames[this.keyIndex].isEnd()) {
          //console.log("NEXT")
          this.keyIndex++;
        }
      }

      isEnd() {
        return this.keyIndex > this.keyFrames.length - 1;
      }

      getValue() {
        var value;
        if (this.isEnd()) {
          value = this.keyFrames.last().getValue();
        } else {
          value = this.keyFrames[this.keyIndex].getValue();
        }
        return value + this._relativeValue;
      }

      _parseKeyFrames(keyframes, func) {
        var duration, e, endValue, endValues, index, key, keyframesOutput, keys, kf, prevKey, startValue, value;
        try {
          keyframesOutput = [];
          endValues = [];
          keys = [];
          index = 0;
          for (key in keyframes) {
            value = keyframes[key];
            if (endValues.length > 0) {
              startValue = endValues[index - 1];
            } else {
              startValue = 0;
            }
            value = KDCore.Utils.getValueWithDP(value);
            endValue = value;
            if (key === "0") {
              duration = 0;
            } else {
              prevKey = keys[index - 1];
              duration = this._calculateDuration(prevKey, key);
            }
            kf = new KDCore.AnimationKeyFrame(startValue, endValue, duration, func);
            keys[index] = key;
            endValues[index] = value;
            keyframesOutput.push(kf);
            index++;
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return keyframesOutput;
      }

      _calculateDuration(rateA, rateB) {
        var d, e, timeA, timeB;
        try {
          rateA = Number(rateA) / 100.0;
          rateB = Number(rateB) / 100.0;
          timeA = this.totalDuration * rateA;
          timeB = this.totalDuration * rateB;
          d = timeB - timeA;
          return d;
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return 0;
      }

      _resetKeyframes() {
        var e, f, i, len, ref, results;
        try {
          this.keyIndex = 0;
          ref = this.keyFrames;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            f = ref[i];
            results.push(f.reset());
          }
          return results;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _updateStartTimer() {
        var e;
        try {
          if (this._startTimer == null) {
            return;
          }
          this._startTimer -= 1;
          if (this._startTimer <= 0) {
            this._isStarted = true;
            return this._startTimer = null;
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    //@[AUTO EXTEND]
    return KDCore.AnimationRule = class AnimationRule {
      constructor(animationConfig, obj) {
        var condition, delay, duration, func, keyframes, repeats;
        if (typeof animationConfig === "string") {
          animationConfig = KDCore.UI.Builder.ConvertShortcut(animationConfig);
        }
        this.animationConfig = Object.assign(this.defaultConfig(), animationConfig);
        ({ condition } = this.animationConfig);
        if (String.any(condition)) {
          if (eval(condition) === false) {
            return;
          }
        }
        ({ keyframes, duration, func, repeats, delay } = this.animationConfig);
        this.prepareKeyFrames(keyframes, obj);
        this.keyLine = new KDCore.AnimationKeyLine(keyframes, duration, func);
        if (repeats == null) {
          repeats = 0;
        }
        this.keyLine.setRepeatsCount(repeats);
        if ((obj != null) && this.animationConfig.field === "_scaleFactor") {
          this.prepareObject(obj);
        }
        if (this.animationConfig.relative === true && (obj != null)) {
          this.keyLine.setRelativeValue(obj[this.animationConfig.field]);
        }
        this.keyLine.start(delay);
        if ((obj != null) && delay <= 0) {
          this.applyAnimation(obj);
        }
        return;
      }

      prepareKeyFrames(keyframes, obj) {
        var key, value;
        for (key in keyframes) {
          value = keyframes[key];
          if (value === "@") {
            if ((obj != null) && (obj[this.animationConfig.field] != null)) {
              keyframes[key] = obj[this.animationConfig.field];
            } else {
              keyframes[key] = 0;
            }
          }
        }
      }

      setEndCallback(onEndCallback) {
        this.onEndCallback = onEndCallback;
      }

      isHaveEndCallback() {
        var e;
        try {
          if (this.animationConfig.repeats !== 0) {
            // * Callback works only for single-shot animations
            return false;
          }
          return this.onEndCallback != null;
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return false;
      }

      defaultConfig() {
        return {
          field: "opacity",
          duration: 1,
          func: "linear",
          delay: 0,
          repeats: 0,
          relative: false,
          keyframes: {
            "0": 0,
            "100": 255
          },
          condition: null
        };
      }

      update() {
        var e;
        if (this.keyLine == null) {
          return;
        }
        this.keyLine.update();
        if (this.isHaveEndCallback()) {
          if (this.keyLine.isEnd()) {
            try {
              this.onEndCallback();
            } catch (error) {
              e = error;
              KDCore.warning(e);
            }
            this.onEndCallback = null;
          }
        }
      }

      applyAnimation(obj) {
        var e;
        try {
          if (obj == null) {
            return;
          }
          if (this.keyLine == null) {
            return;
          }
          return obj[this.animationConfig.field] = this.keyLine.getValue();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      prepareObject(obj) {
        var e;
        try {
          if ((obj != null) && (obj.onBeforeChangeScaleFactor != null)) {
            return obj.onBeforeChangeScaleFactor();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {

    // * Button (Sprite_XButton)

    //@[AUTO EXTEND]
    //?DEPRECATED
    return KDCore.Button = class Button extends Sprite {
      constructor() {
        super();
        this._mouseIn = false;
        this._touching = false;
        this._slowUpdateActive = false;
        this._localMode = false;
        this._images = [];
        this._checkAlpha = false;
        this._textSprite = null;
        this._textPosition = 0;
        this._override = false; // * TouchClick in game messages not work anymore if TRUE
        this._clickHandlers = [];
        this._manualHided = false;
        this._manualDisabled = false;
        this._condition = null; // * Условие для Visible
        this._condition2 = null; // * Условие для Enable \ Disable
        this._disabled = false;
        this._infoData = null;
        this._isNeedShowText = false;
        return;
      }

      isMouseInButton() {
        return this._mouseIn === true;
      }

      isActive() {
        return this.visible === true;
      }

      activateSlowUpdate() {
        return this._slowUpdateActive = true;
      }

      setLocalMode() {
        this._realX = this.x;
        this._realY = this.y;
        return this._localMode = true;
      }

      setAlphaMode() {
        return this._checkAlpha = true;
      }

      // * above, below
      setTextPosition(position) {
        return this._textPosition = position;
      }

      setHelpText(text, size) {
        return this._createText(text, size);
      }

      setInfoData(data) {
        return this._infoData = data;
      }

      setOverrideMode() {
        return this._override = true;
      }

      isOverride() {
        return this._override === true && this.isActive() && this.touchInButton();
      }

      isDisabled() {
        return this._disabled === true;
      }

      isEnabled() {
        return !this.isDisabled();
      }

      isNeedShowText() {
        return this._isNeedShowText === true;
      }

      addClickHandler(method) {
        return this._clickHandlers.push(method);
      }

      clearClickHandlers() {
        return this._clickHandlers = [];
      }

      isLocalMode() {
        return this._localMode === true;
      }

      setCondition(method) {
        return this._condition = method;
      }

      setConditionForDisable(method) {
        return this._condition2 = method;
      }

      getInfoData() {
        return this._infoData;
      }

      simulateClick() { //?NEW
        return this.applyClickedState();
      }

      simulateClickManual() { //?NEW
        this.simulateClick();
        return setTimeout((() => {
          try {
            return this.applyNormalState();
          } catch (error) {

          }
        }), 50);
      }

      prepare() { //?NEW
        return this.slowUpdate();
      }

      realX() {
        if (this.isLocalMode()) {
          return this._realX;
        } else {
          return this.x;
        }
      }

      realY() {
        if (this.isLocalMode()) {
          return this._realY;
        } else {
          return this.y;
        }
      }

      show() {
        this.visible = true;
        return this._manualHided = false;
      }

      hide() {
        this.visible = false;
        return this._manualHided = true;
      }

      disable() {
        this._disabled = true;
        this._manualDisabled = true;
        this.refreshEnDisState();
        return this._mouseIn = false;
      }

      enable() {
        this._disabled = false;
        this._manualDisabled = false;
        return this.refreshEnDisState();
      }

      update() {
        super.update();
        if (this._destroyed === true) {
          return;
        }
        this.updateMouseClick();
        this.updatePosition();
        if (!this._slowUpdateActive) {
          this.slowUpdate();
        }
        return this.updateComplexTextVisible();
      }

      slowUpdate() {
        if (this._destroyed === true) {
          return;
        }
        this.updateMouseTracking();
        this.updateConditionForVisible();
        return this.updateConditionForEnabling();
      }

      updateMouseTracking() {
        if (!this.isActive()) {
          return;
        }
        if (this.isDisabled()) {
          return;
        }
        if (this.cursorInButton()) {
          this._onMouseEnter();
          return this._mouseIn = true;
        } else {
          this._onMouseLeave();
          return this._mouseIn = false;
        }
      }

      // * In MZ TouchInput always have X,Y
      cursorInButton() {
        return this.touchInButton();
      }

      xyInButton(x, y) {
        var inRect, rect, rx, ry;
        rx = KDCore.SDK.toGlobalCoord(this, 'x');
        ry = KDCore.SDK.toGlobalCoord(this, 'y');
        rect = new PIXI.Rectangle(rx, ry, this._realWidth(), this._realHeight());
        inRect = rect.contains(x, y);
        if (inRect === true && this._checkAlpha === true) {
          return this._checkAlphaPixel(x - rx, y - ry);
        } else {
          return inRect;
        }
      }

      _realWidth() {
        if (this._hasImage()) {
          return this._mainImage().width;
        } else {
          return this.width;
        }
      }

      _hasImage() {
        return this._mainImage() != null;
      }

      _mainImage() {
        return this._images[0];
      }

      _realHeight() {
        if (this._hasImage()) {
          return this._mainImage().height;
        } else {
          return this.height;
        }
      }

      _checkAlphaPixel(x, y) {
        var pixel;
        pixel = this._hasImage() ? this._mainImage().bitmap.getAlphaPixel(x, y) : this.bitmap.getAlphaPixel(x, y);
        return pixel >= 200;
      }

      _onMouseEnter() {
        if (this._mouseIn === true) {
          return;
        }
        if (!this.isDisabled()) {
          this.applyCoverState();
        }
        this._showText();
        if (this.getInfoData() != null) {
          return this._startComplexTimer();
        }
      }

      _onMouseLeave() {
        if (this._mouseIn === false) {
          return;
        }
        if (!this.isDisabled()) {
          this.applyNormalState();
        }
        this._hideText();
        return this._stopComplexTimer();
      }

      _showText() {
        if (this._textSprite == null) {
          return;
        }
        this._updateTextPosition();
        return this._textSprite.visible = true;
      }

      _hideText() {
        if (this._textSprite == null) {
          return;
        }
        return this._textSprite.visible = false;
      }

      _startComplexTimer() {
        this._stopComplexTimer();
        return this._cTimer = setTimeout((() => {
          if (this._mouseIn === true) {
            return this._isNeedShowText = true;
          }
        }), 1000);
      }

      _stopComplexTimer() {
        if (this._cTimer != null) {
          clearTimeout(this._cTimer);
        }
        return this._isNeedShowText = false;
      }

      updateMouseClick() {
        if (!this.isActive()) {
          this._unTouch();
          return;
        }
        if (this.isDisabled()) {
          return;
        }
        if (TouchInput.isTriggered() && this.touchInButton()) {
          this._touching = true;
          this.applyClickedState();
        }
        if (this._touching === true) {
          if (TouchInput.isReleased() || !this.touchInButton()) {
            this._unTouch();
            if (TouchInput.isReleased()) {
              return this.callClickHandler();
            }
          }
        }
      }

      _unTouch() {
        this._touching = false;
        if (this.touchInButton()) {
          return this.applyCoverState();
        } else {
          return this.applyNormalState();
        }
      }

      touchInButton() {
        return this.xyInButton(TouchInput.x, TouchInput.y);
      }

      callClickHandler() {
        if (this._clickHandlers.length > 0) {
          return this._clickHandlers.forEach(function (method) {
            return method();
          });
        }
      }

      updatePosition() {
        var p;
        if (!this._localMode) {
          return;
        }
        p = new KDCore.Point(this._realX, this._realY);
        return this.move(p.screenX(), p.screenY());
      }

      updateConditionForVisible() {
        var result;
        if (this._condition == null) {
          return;
        }
        if (this._manualHided === true) {
          return;
        }
        try {
          result = this._condition();
          return this.visible = !result;
        } catch (error) {
          console.warn('wrong condition in button');
          return this.visible = true;
        }
      }

      updateConditionForEnabling() {
        if (!this._condition2) {
          return;
        }
        if (this._manualDisabled === true) {
          return;
        }
        try {
          this._disabled = this._condition2();
          return this.refreshEnDisState();
        } catch (error) {
          console.warn('wrong condition in button for enable state');
          return this.disable();
        }
      }

      setButtonImages(img1, img2, img3, img4) {
        if (this._images != null) {
          this._images.forEach(function (img) {
            if (img != null) {
              return img.parent.removeChild(img);
            }
          });
        }
        this._images = [new Sprite(img1), img2 != null ? new Sprite(img2) : void 0, img3 != null ? new Sprite(img3) : void 0, img4 != null ? new Sprite(img4) : void 0];
        this._images.forEach((img) => {
          if (img != null) {
            return this.addChild(img);
          }
        });
        return this.applyNormalState();
      }

      applyNormalState() {
        var ref;
        this.refreshImages();
        return (ref = this._images[0]) != null ? ref.visible = true : void 0;
      }

      refreshImages() {
        return this._images.forEach(function (img) {
          return img != null ? img.visible = false : void 0;
        });
      }

      applyCoverState() {
        this.refreshImages();
        if (this._images[1] != null) {
          return this._images[1].visible = true;
        } else {
          return this.applyNormalState();
        }
      }

      applyClickedState() {
        this.refreshImages();
        if (this._images[2] != null) {
          return this._images[2].visible = true;
        } else {
          return this.applyNormalState();
        }
      }

      _createText(text, size) {
        var h, w;
        if (this._textSprite) {
          this.removeChild(this._textSprite);
        }
        w = Math.round(((size / 10) + 1) * 5 * text.length);
        h = size + 4;
        this._textSprite = new Sprite(new Bitmap(w, h));
        this._textSprite.bitmap.fontSize = size;
        this._textSprite.bitmap.drawText(text, 0, h / 2, w, 1, 'center');
        this._textSprite.visible = false;
        return this.addChild(this._textSprite);
      }

      _updateTextPosition() {
        var nx, ny;
        if (!this._textSprite) {
          return;
        }
        nx = this._realWidth() / 2 - this._textSprite.width / 2;
        if (this._textPosition === 0) {
          ny = -this._textSprite.height;
        } else {
          ny = this._realHeight() + this._textSprite.height / 2;
        }
        return this._textSprite.move(nx, ny);
      }

      applyDisableState() {
        var ref;
        this.refreshImages();
        return (ref = this._images[3]) != null ? ref.visible = true : void 0;
      }

      refreshEnDisState() {
        if (this.isDisabled()) {
          this.applyDisableState();
          return this._hideText();
        } else {
          if (this._mouseIn === false) {
            return this.applyNormalState();
          }
        }
      }

      //else
      //    do @applyCoverState
      updateComplexTextVisible() { }

      applyScale(mod) {
        var i, img, len, ref;
        ref = this._images;
        for (i = 0, len = ref.length; i < len; i++) {
          img = ref[i];
          if (img != null) {
            img.scale.x = mod;
            img.scale.y = mod;
          }
        }
      }

      static FromSet(imgName, sourceFolder = null) {
        var button, getterFunc, img0, img1;
        getterFunc = function (filename) {
          return ImageManager.loadPicture(filename);
        };
        if (sourceFolder != null) {
          getterFunc = function (filename) {
            return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
          };
        }
        img0 = getterFunc(imgName + "_00");
        img1 = getterFunc(imgName + "_01");
        button = new KDCore.Button();
        button.setButtonImages(img0, img1, img0, img0);
        return button;
      }

      static FromSetFull(imgName, sourceFolder = null) {
        var button, getterFunc, img0, img1, img2, img3;
        getterFunc = function (filename) {
          return ImageManager.loadPicture(filename);
        };
        if (sourceFolder != null) {
          getterFunc = function (filename) {
            return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
          };
        }
        img0 = getterFunc(imgName + "_00");
        img1 = getterFunc(imgName + "_01");
        img2 = getterFunc(imgName + "_02");
        img3 = getterFunc(imgName + "_03");
        button = new KDCore.Button();
        button.setButtonImages(img0, img1, img2, img3);
        return button;
      }

    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_ActorFace;
    //NUI 1.2
    //rev 18.08.24

    //"type": "face"
    Sprite_ActorFace = class Sprite_ActorFace extends KDCore.Sprite {
      constructor(settings) {
        super();
        this.settings = Object.assign({}, this.defaultSettings(), settings);
        this._create();
        this.draw(this.settings.faceName, this.settings.faceIndex);
        this.flipX(this.settings.mirror);
        return;
      }

      isLoaded() {
        return true;
      }

      defaultSettings() {
        return {
          faceName: "",
          faceIndex: 0,
          size: 144,
          mirror: false
        };
      }

      realWidth() {
        if (this.isNotHaveBounds()) {
          return 0;
        }
        return this.settings.size;
      }

      realHeight() {
        if (this.isNotHaveBounds()) {
          return 0;
        }
        return this.settings.size;
      }

      dataBindings() {
        return Object.assign(super.dataBindings(), {
          size: function (v) {
            return this.setSize(v);
          },
          faceName: function (v) {
            return this.draw(v, this.settings.faceIndex);
          },
          faceIndex: function (v) {
            return this.draw(this.settings.faceName, v);
          },
          mirror: function (v) {
            return this.flipX(v);
          }
        });
      }

      setSize(size = 144) {
        var e;
        try {
          size = this._getValueByStr(size, 'width', this);
          if (size != null) {
            this.settings.size = size;
          }
          return this._onResize();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      draw(faceName = "", faceIndex = 0) {
        var e;
        try {
          this.settings.faceName = faceName;
          this.settings.faceIndex = faceIndex;
          if (faceName === "") {
            this.image.bitmap.clear();
            return;
          }
          return this._drawFaceImage(faceName);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      flipX(isMirror) {
        var e;
        try {
          if (isMirror) {
            this.image.scale.x = -1;
            return this.image.x = this.settings.size;
          } else {
            this.image.scale.x = 1;
            return this.image.x = 0;
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _create() {
        var e;
        try {
          this.image = new KDCore.Sprite(new Bitmap(1, 1));
          return this.addChild(this.image);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _drawFaceImage(faceName) {
        var e;
        try {
          this._srcBitmap = ImageManager.loadFace(faceName);
          return this._srcBitmap.addLoadListener(this._onBitmapLoaded.bind(this));
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _onBitmapLoaded() {
        var e;
        try {
          this._onResize();
          this._applyRequiredData();
          return this._executeLoadListeners();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _onResize() {
        var b, e, fh, fw, size, sx, sy;
        try {
          this.image.bitmap = new Bitmap(this.realWidth(), this.realHeight());
          if (this._srcBitmap == null) {
            return;
          }
          b = this._srcBitmap;
          if (KDCore.isMZ()) {
            fw = ImageManager.faceWidth;
            fh = ImageManager.faceHeight;
          } else {
            fw = Window_Base._faceWidth;
            fh = Window_Base._faceHeight;
          }
          size = this.settings.size;
          sx = (this.settings.faceIndex % 4) * fw;
          sy = Math.floor(this.settings.faceIndex / 4) * fh;
          this.image.bitmap.blt(b, sx, sy, fw, fh, 0, 0, size, size);
          this.setFrame(0, 0, size, size);
          return this.flipX(this.settings.mirror);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

    };
    return KDCore.Sprite_ActorFace = Sprite_ActorFace;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_BaseCircle;
    //NUI 1.0
    //rev 28.04.24

    //"type": "circle"
    Sprite_BaseCircle = class Sprite_BaseCircle extends KDCore.Sprite {
      constructor(settings) {
        super();
        this.settings = Object.assign({}, this.defaultSettings(), settings);
        this._create();
        this._applySettings();
        this._onResize();
        return;
      }

      defaultSettings() {
        return {
          width: 100,
          height: 100,
          fillGradient: null, // { gradient stops }
          gradientStart: {
            x: 0,
            y: 100,
            r: 30
          },
          gradientEnd: {
            x: 100,
            y: 100,
            r: 70
          },
          fillColor: 0xffffff,
          fillAlpha: 1,
          strokeWidth: 4,
          strokeColor: 0x000000,
          strokeAlpha: 1
        };
      }

      defaultGradientSettings() {
        return {
          "0": "#9ff",
          "1": "#033"
        };
      }

      isHaveGradient() {
        return false; //@settings.fillGradient?
      }

      dataBindings() {
        return Object.assign(super.dataBindings(), {
          width: function (v) {
            if (v != null) {
              return this.setSize(v, this.settings.height);
            }
          },
          height: function (v) {
            if (v != null) {
              return this.setSize(this.settings.width, v);
            }
          },
          size: function (v) {
            if (v != null) {
              return this.setSize(v.width, v.height);
            }
          },
          stroke: function (v) {
            if (v != null) {
              return this.setStroke(v.width, v.color, v.alpha);
            }
          },
          fill: function (v) {
            if (v != null) {
              return this.setFill(v.color, v.alpha);
            }
          }
        });
      }

      setFill(color = "#FFF", alpha = 1) {
        var e;
        try {
          this.settings.fillColor = color;
          this.settings.fillAlpha = alpha;
          this.settings.fillGradient = null;
          return this._applySettings();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      setStroke(color = "#FFF", width = 0, alpha = 1) {
        var e;
        try {
          this.settings.strokeColor = color;
          this.settings.strokeAlpha = alpha;
          this.settings.strokeWidth = width;
          return this._applySettings();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      setSize(width = 100, height = 100) {
        var e, h, w;
        try {
          w = this._getValueByStr(width, 'width', this);
          h = this._getValueByStr(height, 'height', this);
          if (w != null) {
            this.settings.width = w;
          }
          if (h != null) {
            this.settings.height = h;
          }
          this._applySettings();
          return this._onResize();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _create() {
        var e;
        try {
          this.graphics = new PIXI.Graphics();
          return this.addChild(this.graphics);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _applySettings() {
        var e, gradientSettings;
        try {
          if (this.graphics == null) {
            return;
          }
          this.graphics.clear();
          if (this.settings.fillGradient != null) {
            gradientSettings = Object.assign(this.defaultGradientSettings(), this.settings.fillGradient);
          }
          this._applyGradientTexture(gradientSettings);
          return this._drawBaseCircle();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _applyGradientTexture(fillGradient) {
        var e;
        try {

        } catch (error) {
          /*{ width, height } = @settings
          c = document.createElement("canvas")
          ctx = c.getContext("2d")*/
          /*grd = ctx.createRadialGradient(
              @settings.gradientStart.x,
              @settings.gradientStart.y,
              @settings.gradientStart.r,
              @settings.gradientEnd.x,
              @settings.gradientEnd.y,
              @settings.gradientEnd.r
          )*/
          //grd = ctx.createRadialGradient(110, 90, 30, 100, 100, 70)
          /*for key, value of fillGradient
          try
              grd.addColorStop(Number(key), value)
          catch e
              KDCore.warning e*/
          /*grd.addColorStop(0, "pink")
          grd.addColorStop(0.9, "white")
          grd.addColorStop(1, "green")
  
          ctx.fillStyle = grd
          ctx.fillRect(0, 0, 400, 400)
          texture = new PIXI.Texture.from(c)
          @graphics.beginTextureFill(texture)*/
          e = error;
          return KDCore.warning(e);
        }
      }

      _drawBaseCircle() {
        var colorData, d, e, fillAlpha, fillColor, height, strokeAlpha, strokeColor, strokeColorData, width;
        try {
          ({ width, height } = this.settings);
          ({ fillColor, fillAlpha } = this.settings);
          colorData = this._buildColorData(fillColor, fillAlpha);
          if (this.settings.strokeWidth > 0) {
            ({ strokeColor, strokeAlpha } = this.settings);
            strokeColorData = this._buildColorData(strokeColor, strokeAlpha);
            d = this.settings.strokeWidth;
            // * Base Fill
            this._drawElipse(0, 0, width, height, colorData);
            // * Stroke
            return this._drawStroke(0, 0, width, height, d, strokeColorData);
          } else {
            // * Base Fill only
            return this._drawElipse(0, 0, width, height, colorData);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _buildColorData(c = 0xfff, a = 1) {
        var e;
        try {
          if (typeof c === 'string') {
            c = KDCore.Utils.string2hex(c);
          }
          return [c, a];
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return [0xfff, 1];
        }
      }

      _drawElipse(x, y, w, h, colorData) {
        var e, g;
        try {
          if (this.graphics == null) {
            return;
          }
          g = this.graphics;
          if (!this.isHaveGradient()) {
            g.beginFill(...colorData);
          }
          g.drawEllipse(x, y, w / 2, h / 2);
          if (!this.isHaveGradient()) {
            return g.endFill();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _drawStroke(x, y, w, h, d, colorData) {
        var e, g;
        try {
          if (this.graphics == null) {
            return;
          }
          g = this.graphics;
          g.lineStyle(d, ...colorData);
          return g.drawEllipse(x, y, w / 2, h / 2);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _onResize() {
        var e;
        try {
          this.width = this.settings.width;
          this.height = this.settings.height;
          // * Круг (элипс) рисуется от центра, что не удобно
          // при расчёте координат, поэтому сдвигаем в левый вверхний угол
          this.graphics.x = this.settings.width * 0.5;
          return this.graphics.y = this.settings.height * 0.5;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

    };
    return KDCore.Sprite_BaseCircle = Sprite_BaseCircle;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_BaseRect;
    //NUI 1.0
    //rev 28.04.24

    //"type": "rect"
    Sprite_BaseRect = class Sprite_BaseRect extends KDCore.Sprite {
      constructor(settings) {
        super();
        this.settings = Object.assign({}, this.defaultSettings(), settings);
        this._create();
        this._applySettings();
        this._onResize();
        return;
      }

      defaultSettings() {
        return {
          width: 100,
          height: 100,
          corners: 0, // {  topLeft, topRight, bottomRight, bottomLeft }
          fillGradient: null, // { gradient stops }
          gradientStart: {
            x: 0,
            y: 0
          },
          gradientEnd: {
            x: 0,
            y: 100
          },
          fillColor: 0xffffff,
          fillAlpha: 1,
          strokeWidth: 4,
          strokeColor: 0x000000,
          strokeAlpha: 1
        };
      }

      defaultGradientSettings() {
        return {
          "0": "#9ff",
          "1": "#033"
        };
      }

      defaultCornersSettings() {
        return {
          topLeft: 0,
          topRight: 0,
          bottomRight: 0,
          bottomLeft: 0
        };
      }

      isHaveGradient() {
        return this.settings.fillGradient != null;
      }

      dataBindings() {
        return Object.assign(super.dataBindings(), {
          width: function (v) {
            if (v != null) {
              return this.setSize(v, this.settings.height);
            }
          },
          height: function (v) {
            if (v != null) {
              return this.setSize(this.settings.width, v);
            }
          },
          size: function (v) {
            if (v != null) {
              return this.setSize(v.width, v.height);
            }
          },
          stroke: function (v) {
            if (v != null) {
              return this.setStroke(v.width, v.color, v.alpha);
            }
          },
          fill: function (v) {
            if (v != null) {
              return this.setFill(v.color, v.alpha);
            }
          },
          gradientStart: function (v) {
            if (v != null) {
              return this.setGradientStartEnd(v, this.settings.gradientEnd);
            }
          },
          gradientEnd: function (v) {
            if (v != null) {
              return this.setGradientStartEnd(this.settings.gradientStart, v);
            }
          }
        });
      }

      setGradientStartEnd(start, end) {
        var e;
        try {
          if (start != null) {
            start.x = this._getValueByStr(start.x, 'width', this);
            start.y = this._getValueByStr(start.y, 'height', this);
          }
          if (end != null) {
            end.x = this._getValueByStr(end.x, 'width', this);
            end.y = this._getValueByStr(end.y, 'height', this);
          }
          if (start != null) {
            this.settings.gradientStart = start;
          }
          if (end != null) {
            this.settings.gradientEnd = end;
          }
          return this._applySettings();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      setFill(color = "#FFF", alpha = 1) {
        var e;
        try {
          this.settings.fillColor = color;
          this.settings.fillAlpha = alpha;
          this.settings.fillGradient = null;
          return this._applySettings();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      setStroke(color = "#FFF", width = 0, alpha = 1) {
        var e;
        try {
          this.settings.strokeColor = color;
          this.settings.strokeAlpha = alpha;
          this.settings.strokeWidth = width;
          return this._applySettings();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      setSize(width = 100, height = 100) {
        var e, h, w;
        try {
          w = this._getValueByStr(width, 'width', this);
          h = this._getValueByStr(height, 'height', this);
          if (w != null) {
            this.settings.width = w;
          }
          if (h != null) {
            this.settings.height = h;
          }
          this._applySettings();
          return this._onResize();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _create() {
        var e;
        try {
          this.graphics = new PIXI.Graphics();
          return this.addChild(this.graphics);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _applySettings() {
        var cornersSettings, e, gradientSettings;
        try {
          if (this.graphics == null) {
            return;
          }
          this.graphics.clear();
          if (this.settings.fillGradient != null) {
            gradientSettings = Object.assign(this.defaultGradientSettings(), this.settings.fillGradient);
          }
          this._applyGradientTexture(gradientSettings);
          if (typeof this.settings.corners === "number") {
            return this._drawBaseRoundedRect();
          } else if (this.settings.corners != null) {
            cornersSettings = Object.assign(this.defaultCornersSettings(), this.settings.corners);
            return this._drawComplexRoundedRect(cornersSettings);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _applyGradientTexture(fillGradient) {
        var c, convertedValue, ctx, e, grd, height, key, texture, value, width;
        try {
          if (KDCore.isMV()) {
            return;
          }
          ({ width, height } = this.settings);
          c = document.createElement("canvas");
          ctx = c.getContext("2d");
          grd = ctx.createLinearGradient(this.settings.gradientStart.x, this.settings.gradientStart.y, this.settings.gradientEnd.x, this.settings.gradientEnd.y);
          for (key in fillGradient) {
            value = fillGradient[key];
            try {
              convertedValue = this._convertGradientStopColor(value);
              grd.addColorStop(Number(key), convertedValue);
            } catch (error) {
              e = error;
              KDCore.warning(e);
            }
          }
          ctx.fillStyle = grd;
          ctx.fillRect(0, 0, width, height);
          texture = new PIXI.Texture.from(c);
          return this.graphics.beginTextureFill(texture);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _convertGradientStopColor(color) {
        var alpha, c, e, parts;
        try {
          if (color == null) {
            return "#FFF";
          }
          if (!String.any(color)) {
            return "#FFF";
          }
          if (color.contains("%")) {
            parts = color.split("%");
            color = parts[0];
            alpha = Number(parts[1]);
            c = KDCore.Color.FromHex(color);
            c = c.reAlpha(alpha * 255);
            return c.CSS;
          } else {
            return color;
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return "#FFF";
        }
      }

      _drawBaseRoundedRect() {
        var colorData, corners, d, e, fillAlpha, fillColor, height, strokeAlpha, strokeColor, strokeColorData, width;
        try {
          ({ width, height, corners } = this.settings);
          ({ fillColor, fillAlpha } = this.settings);
          colorData = this._buildColorData(fillColor, fillAlpha);
          if (this.settings.strokeWidth > 0) {
            ({ strokeColor, strokeAlpha } = this.settings);
            strokeColorData = this._buildColorData(strokeColor, strokeAlpha);
            d = this.settings.strokeWidth;
            // * Base Fill
            this._drawRect(0, 0, width, height, corners, colorData);
            // * Stroke
            return this._drawStroke(-d / 2, -d / 2, width + d / 2, height + d / 2, corners, d, strokeColorData);
          } else {
            // * Base Fill only
            return this._drawRect(0, 0, width, height, corners, colorData);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _buildColorData(c = 0xfff, a = 1) {
        var e;
        try {
          if (typeof c === 'string') {
            c = KDCore.Utils.string2hex(c);
          }
          return [c, a];
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return [0xfff, 1];
        }
      }

      _drawRect(x, y, w, h, r, colorData) {
        var e, g;
        try {
          if (this.graphics == null) {
            return;
          }
          g = this.graphics;
          if (!this.isHaveGradient()) {
            g.beginFill(...colorData);
          }
          if (r > 0) {
            g.drawRoundedRect(x, y, w, h, r);
          } else {
            g.drawRect(x, y, w, h);
          }
          if (!this.isHaveGradient()) {
            return g.endFill();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _drawStroke(x, y, w, h, r, d, colorData) {
        var e, g;
        try {
          if (this.graphics == null) {
            return;
          }
          g = this.graphics;
          g.lineStyle(d, ...colorData);
          if (r > 0) {
            return g.drawRoundedRect(x, y, w, h, r);
          } else {
            return g.drawRect(x, y, w, h);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _drawComplexRoundedRect(cornersSettings) {
        var bottomLeft, bottomRight, colorData, d, e, fillAlpha, fillColor, height, strokeAlpha, strokeColor, strokeColorData, topLeft, topRight, width;
        try {
          if (cornersSettings == null) {
            return;
          }
          ({ width, height } = this.settings);
          ({ fillColor, fillAlpha } = this.settings);
          colorData = this._buildColorData(fillColor, fillAlpha);
          ({ topLeft, topRight, bottomRight, bottomLeft } = cornersSettings);
          if (this.settings.strokeWidth > 0) {
            ({ strokeColor, strokeAlpha } = this.settings);
            strokeColorData = this._buildColorData(strokeColor, strokeAlpha);
            d = this.settings.strokeWidth;
            this._drawComplexRect(0, 0, width, height, colorData, topLeft, topRight, bottomRight, bottomLeft);
            return this._drawComplexStroke(-d / 2, -d / 2, width + (d / 2), height + (d / 2), strokeColorData, d, topLeft, topRight, bottomRight, bottomLeft);
          } else {
            return this._drawComplexRect(0, 0, width, height, colorData, topLeft, topRight, bottomRight, bottomLeft);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _drawComplexRect(x, y, width, height, colorData, topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius) {
        var e;
        try {
          if (!this.isHaveGradient()) {
            this.graphics.beginFill(...colorData);
          }
          // Starting from the top left corner.
          this.graphics.moveTo(x + topLeftRadius, y);
          // Drawing the top line with top right corner.
          this.graphics.lineTo(x + width - topRightRadius, y);
          if (topRightRadius > 0) {
            this.graphics.quadraticCurveTo(x + width, y, x + width, y + topRightRadius);
          }
          // Drawing the right line with bottom right corner.
          this.graphics.lineTo(x + width, y + height - bottomRightRadius);
          if (bottomRightRadius > 0) {
            this.graphics.quadraticCurveTo(x + width, y + height, x + width - bottomRightRadius, y + height);
          }
          // Drawing the bottom line with bottom left corner.
          this.graphics.lineTo(x + bottomLeftRadius, y + height);
          if (bottomLeftRadius > 0) {
            this.graphics.quadraticCurveTo(x, y + height, x, y + height - bottomLeftRadius);
          }
          // Drawing the left line with top left corner and closing the shape.
          this.graphics.lineTo(x, y + topLeftRadius);
          if (topLeftRadius > 0) {
            this.graphics.quadraticCurveTo(x, y, x + topLeftRadius, y);
          }
          if (!this.isHaveGradient()) {
            return this.graphics.endFill();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _drawComplexStroke(x, y, width, height, colorData, d, topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius) {
        var e, graphics;
        try {
          graphics = this.graphics;
          graphics.lineStyle(d, ...colorData);
          // Starting from the top left corner.
          graphics.moveTo(x + topLeftRadius, y);
          // Drawing the top line with top right corner.
          graphics.lineTo(x + width - topRightRadius, y);
          if (topRightRadius > 0) {
            graphics.quadraticCurveTo(x + width, y, x + width, y + topRightRadius);
          }
          // Drawing the right line with bottom right corner.
          graphics.lineTo(x + width, y + height - bottomRightRadius);
          if (bottomRightRadius > 0) {
            graphics.quadraticCurveTo(x + width, y + height, x + width - bottomRightRadius, y + height);
          }
          // Drawing the bottom line with bottom left corner.
          graphics.lineTo(x + bottomLeftRadius, y + height);
          if (bottomLeftRadius > 0) {
            graphics.quadraticCurveTo(x, y + height, x, y + height - bottomLeftRadius);
          }
          // Drawing the left line with top left corner and closing the shape.
          graphics.lineTo(x, y + topLeftRadius);
          if (topLeftRadius > 0) {
            graphics.quadraticCurveTo(x, y, x + topLeftRadius, y);
          }
          return graphics.closePath();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _onResize() {
        var e;
        try {
          this.width = this.settings.width;
          return this.height = this.settings.height;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

    };
    return KDCore.Sprite_BaseRect = Sprite_BaseRect;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_ButtonsGroup;
    // * Класс для реализации набора кнопок переключателей (Tabs)
    // * Когда только одна кнопка может быть нажата (выбрана)

    //rev 07.10.21
    Sprite_ButtonsGroup = class Sprite_ButtonsGroup extends KDCore.Sprite {
      // buttonsArray = [
      //       {image: NAME, position: [X,Y]}, ...
      //    ]
      constructor(buttonsArray, activeIndex, clickCallback) {
        var button, i, len;
        super();
        this.clickCallback = clickCallback;
        this._buttons = [];
        for (i = 0, len = buttonsArray.length; i < len; i++) {
          button = buttonsArray[i];
          this._createButton(button);
        }
        this._onButtonClick(activeIndex);
        return;
      }

      getSelectedIndex() {
        return this._buttons.findIndex(function (btn) {
          return !btn.isEnabled();
        });
      }

    };
    (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = Sprite_ButtonsGroup.prototype;
      _._createButton = function ({ image, position }) {
        var btn, index, method;
        // * Так как кнопки работают как переключатели, то 03 должен быть всегда
        index = this._buttons.length;
        btn = new KDCore.ButtonM(image, true, "Alpha");
        btn.move(position);
        method = () => {
          return this._onButtonClick(index);
        };
        btn.addClickHandler(method);
        this._buttons.push(btn);
        this.add(btn);
      };
      _._onButtonClick = function (index = 0) {
        var ref;
        this._resetAllButtons();
        if ((ref = this._buttons[index]) != null) {
          ref.disable(); // * Нажата
        }
        if (this.clickCallback != null) {
          this.clickCallback(index);
        }
      };
      _._resetAllButtons = function () {
        var btn, i, len, ref;
        ref = this._buttons;
        for (i = 0, len = ref.length; i < len; i++) {
          btn = ref[i];
          if (btn != null) {
            btn.enable();
          }
        }
      };
    })();
    // ■ END PRIVATE
    //---------------------------------------------------------------------------
    return KDCore.Sprite_ButtonsGroup = Sprite_ButtonsGroup;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_ButtonsGroupHandler;
    // * Класс для реализации набора кнопок переключателей (Tabs)
    // * Когда только одна кнопка может быть нажата (выбрана)
    // * В отличии от Sprite_ButtonsGroup, принимает массив
    // * уже созданных кнопок

    //rev 10.07.22
    Sprite_ButtonsGroupHandler = class Sprite_ButtonsGroupHandler extends KDCore.Sprite {
      // _buttons = [Button object with enable, disable, isEnable, addClickHandler methods]
      constructor(_buttons, clickCallback, activeIndex = 0) {
        var button, i, index, len, ref;
        super();
        this._buttons = _buttons;
        this.clickCallback = clickCallback;
        ref = this._buttons;
        for (index = i = 0, len = ref.length; i < len; index = ++i) {
          button = ref[index];
          this._processButton(button, index);
        }
        this._onButtonClick(activeIndex);
        return;
      }

      getSelectedIndex() {
        return this._buttons.findIndex(function (btn) {
          return !btn.isEnabled();
        });
      }

    };
    (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = Sprite_ButtonsGroupHandler.prototype;
      _._processButton = function (btn, index) {
        var method;
        // * Так как кнопки работают как переключатели, то 03 должен быть всегда
        method = () => {
          return this._onButtonClick(index);
        };
        btn.addClickHandler(method);
        this.add(btn);
      };
      _._onButtonClick = function (index = 0) {
        var ref;
        this._resetAllButtons();
        if ((ref = this._buttons[index]) != null) {
          ref.disable(); // * Нажата
        }
        if (this.clickCallback != null) {
          this.clickCallback(index);
        }
      };
      _._resetAllButtons = function () {
        var btn, i, len, ref;
        ref = this._buttons;
        for (i = 0, len = ref.length; i < len; i++) {
          btn = ref[i];
          if (btn != null) {
            btn.enable();
          }
        }
      };
    })();
    // ■ END PRIVATE
    //---------------------------------------------------------------------------
    return KDCore.Sprite_ButtonsGroupHandler = Sprite_ButtonsGroupHandler;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_Gauge;
    //NUI 1.1
    //rev 16.06.24

    //"type": "gauge"
    Sprite_Gauge = class Sprite_Gauge extends KDCore.Sprite {
      constructor(settings) {
        super();
        this.settings = Object.assign({}, this.defaultSettings(), settings);
        this._loaded = false;
        this._lastValue = 1;
        this._gaugeBaseLayer = new KDCore.Sprite();
        this.add(this._gaugeBaseLayer);
        this._applySettings();
        return;
      }

      defaultSettings() {
        return {
          fillMode: "color", //image, plane, color
          fillColor: "#ffffff",
          fillOpacity: 255,
          imageName: "", // * for fill, if fillMode is image, for plane if fillMode is plane
          folderName: "pictures",
          margins: 2, // * For plane image
          width: "auto",
          height: "auto",
          mask: "",
          backColor: "#000000",
          backImage: "",
          backOpacity: 255,
          vertical: false
        };
      }

      isLoaded() {
        var e;
        try {
          return this._loaded === true;
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return false;
      }

      realWidth() {
        var e;
        try {
          if (this.isNotHaveBounds()) {
            return 0;
          }
          if (this.settings.width !== "auto") {
            return this.settings.width;
          } else if (this._gaugeSpr != null) {
            return this._gaugeSpr.realWidth(); //TODO: Gauge Modes
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return this.width;
      }

      realHeight() {
        var e;
        try {
          if (this.isNotHaveBounds()) {
            return 0;
          }
          if (this.settings.height !== "auto") {
            return this.settings.height;
          } else if (this._gaugeSpr != null) {
            return this._gaugeSpr.realHeight(); //TODO: Gauge Modes
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return this.height;
      }

      dataBindings() {
        return Object.assign(super.dataBindings(), {
          width: function (v) {
            if (v != null) {
              return this.setSize(v, this.settings.height);
            }
          },
          height: function (v) {
            if (v != null) {
              return this.setSize(this.settings.width, v);
            }
          },
          size: function (v) {
            if (v != null) {
              return this.setSize(v.width, v.height);
            }
          },
          rate: function (v) {
            if (v != null) {
              return this.draw(v);
            }
          },
          fillImage: function (v) {
            if (v != null) {
              return this.setFillImage(v);
            }
          },
          fillColor: function (v) {
            if (v != null) {
              return this.setFillColor(v);
            }
          },
          fillOpacity: function (v) {
            if (v != null) {
              return this.setFillOpacity(v);
            }
          }
        });
      }

      //TODO:!
      //backImage: (v) ->
      //backColor: (v) ->
      //backOpacity: (v) ->
      draw(percent = 1) {
        var e;
        try {
          if (!this.isLoaded()) {
            this._requireFunc('draw', arguments);
            return;
          }
          this._lastValue = percent;
          return this._drawGauge(percent);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      setFillOpacity(opacity) {
        var e, ref;
        try {
          this.settings.fillOpacity = opacity;
          return (ref = this.fillLayer) != null ? ref.opacity = opacity : void 0;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      setFillColor(color) {
        var e;
        try {
          this.settings.fillColor = color;
          if (this.fillColorBitmap != null) {
            this._createColorGaugeFillColorBitmap();
            return this._drawGauge(this._lastValue);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      setFillImage(imageName) {
        var e;
        try {

        } catch (error) {
          //TODO:
          e = error;
          return KDCore.warning(e);
        }
      }

      setSize(width = "auto", height = "auto") {
        var e;
        try {
          if (width !== "auto") {
            width = this._getValueByStr(width, 'width', this);
          }
          if (height !== "auto") {
            height = this._getValueByStr(height, 'height', this);
          }
          if (width != null) {
            this.settings.width = width;
          }
          if (height != null) {
            this.settings.height = height;
          }
          return this._applySettings();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _applySettings() {
        var e;
        try {
          this._loaded = false;
          this._destroyExistGauge();
          this._createGaugeFromSettings();
          return this.draw(this._lastValue);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _destroyExistGauge() {
        var e;
        try {
          if (this._gaugeSpr == null) {
            return;
          }
          this._gaugeSpr.removeFromParent();
          return this._gaugeSpr = null;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _createGaugeFromSettings() {
        var e;
        try {
          this._gaugeSpr = new KDCore.Sprite();
          this._gaugeBaseLayer.add(this._gaugeSpr);
          switch (this.settings.fillMode) {
            case "image":
              return this._createImageGauge();
            case "plane":
              return this._createPlaneGauge();
            case "color":
              return this._createColorGauge();
            default:
              return console.warn("Unknown Gauge fillMode: " + this.settings.fillMode);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _createImageGauge() {
        var e;
        try {
          this._gaugeSourceImage = new KDCore.Sprite_Image({
            imageName: this.settings.imageName,
            folderName: this.settings.folderName,
            width: this.settings.width,
            height: this.settings.height
          });
          return this._gaugeSourceImage.addLoadListener(this._onGaugeFillImageLoaded.bind(this));
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _onGaugeFillImageLoaded() {
        var e;
        try {
          this._addBackground(this._gaugeSourceImage.realWidth(), this._gaugeSourceImage.realHeight());
          this.fillLayer = KDCore.Sprite.FromBitmap(this._gaugeSourceImage.realWidth(), this._gaugeSourceImage.realHeight());
          this.fillLayer.opacity = this.settings.fillOpacity;
          this._gaugeSpr.add(this.fillLayer);
          this._addMask();
          return this._onGaugeLoadedAndReady();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _onGaugeLoadedAndReady() {
        var e;
        try {
          this._loaded = true;
          this.width = this.realWidth();
          this.height = this.realHeight();
          this._applyRequiredData();
          return this._executeLoadListeners();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _createPlaneGauge() {
        var e;
        try {
          if (this.settings.width === "auto") {
            // * Нельзя создать Plane Gauge с auto размером, поэтому задаём стандартные значения
            this.settings.width = 80;
          }
          if (this.settings.height === "auto") {
            this.settings.height = 20;
          }
          this._addBackground(this.settings.width, this.settings.height);
          this.fillLayer = new KDCore.Sprite_Plane({
            imageName: this.settings.imageName,
            folderName: this.settings.folderName,
            width: this.settings.width,
            height: this.settings.height,
            margins: this.settings.margins
          });
          this.fillLayer.opacity = this.settings.fillOpacity;
          this._gaugeSpr.add(this.fillLayer);
          this._addMask();
          return this._onGaugeLoadedAndReady();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _createColorGauge() {
        var e;
        try {
          if (this.settings.width === "auto") {
            // * Нельзя создать цветную Gauge с auto размером, поэтому задаём стандартные значения
            this.settings.width = 80;
          }
          if (this.settings.height === "auto") {
            this.settings.height = 20;
          }
          this._addBackground(this.settings.width, this.settings.height);
          this.fillLayer = KDCore.Sprite.FromBitmap(this.settings.width, this.settings.height);
          this.fillLayer.opacity = this.settings.fillOpacity;
          this._createColorGaugeFillColorBitmap();
          this._gaugeSpr.add(this.fillLayer);
          this._addMask();
          return this._onGaugeLoadedAndReady();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _createColorGaugeFillColorBitmap() {
        var e;
        try {
          this.fillColorBitmap = new Bitmap(this.settings.width, this.settings.height);
          return this.fillColorBitmap.fillAll(this.settings.fillColor);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _addBackground(width, height) {
        var background, e;
        try {
          if (this._gaugeSpr == null) {
            return;
          }
          background = null;
          if (String.any(this.settings.backImage)) {
            background = this._createGaugeBackgroundImage();
          } else if (String.any(this.settings.backColor)) {
            background = this._createGaugeBackgroundColor(width, height, this.settings.backColor);
          }
          if (background != null) {
            if (this.settings.backOpacity != null) {
              background.opacity = this.settings.backOpacity;
            }
            return this._gaugeSpr.add(background);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _addMask() {
        var e, gaugeMask;
        try {
          if (this._gaugeSpr == null) {
            return;
          }
          if (String.isNullOrEmpty(this.settings.mask)) {
            return;
          }
          gaugeMask = new KDCore.Sprite_Image({
            imageName: this.settings.mask,
            folderName: this.settings.folderName,
            width: this.settings.width,
            height: this.settings.height
          });
          this._gaugeSpr.mask = gaugeMask.image;
          this._gaugeSpr.add(gaugeMask);
        } catch (error) {
          e = error;
          KDCore.warning(e);
          this._gaugeSpr.mask = null;
        }
      }

      _createGaugeBackgroundColor(width, height, color) {
        var background, e;
        try {
          background = KDCore.Sprite.FromBitmap(width, height);
          background.b().fillAll(color);
          return background;
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return new KDCore.Sprite();
        }
      }

      _createGaugeBackgroundImage() {
        var e;
        try {
          return new KDCore.Sprite_Image({
            imageName: this.settings.backImage,
            folderName: this.settings.folderName,
            width: this.settings.width,
            height: this.settings.height
          });
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return new KDCore.Sprite();
        }
      }

      _drawGauge(percent) {
        var e;
        try {
          if (this.fillLayer == null) {
            return;
          }
          // * See COE, Fill Indicator
          //if @settings.vertical is true
          //TODO: VERTICAL
          //else
          return this._drawHorizontal(percent);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _drawHorizontal(percent) {
        var e;
        try {
          switch (this.settings.fillMode) {
            case "image":
              return this._drawImageGauge(percent);
            case "plane":
              return this._drawPlaneGauge(percent);
            case "color":
              return this._drawColorGauge(percent);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _drawImageGauge(percent) {
        var e, fillBitmap;
        try {
          this.fillLayer.clear();
          fillBitmap = this._gaugeSourceImage.image.bitmap;
          return this._drawGaugeBitmapBased(percent, fillBitmap);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _drawGaugeBitmapBased(percent, fillBitmap) {
        var e, h, w;
        try {
          w = this.realWidth() * percent;
          h = this.realHeight();
          return this.fillLayer.b().blt(fillBitmap, 0, 0, w, h, 0, 0);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _drawColorGauge(percent) {
        var e, fillBitmap;
        try {
          this.fillLayer.clear();
          fillBitmap = this.fillColorBitmap;
          return this._drawGaugeBitmapBased(percent, fillBitmap);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _drawPlaneGauge(percent) {
        var e, h, w;
        try {
          w = this.realWidth() * percent;
          h = this.realHeight();
          return this.fillLayer.setSize(w, h);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

    };
    return KDCore.Sprite_Gauge = Sprite_Gauge;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_Group;
    //NUI 1.0
    //rev 02.08.24
    Sprite_Group = class Sprite_Group extends KDCore.Sprite {
      constructor(settings) {
        super();
        this.settings = Object.assign({}, this.defaultSettings(), settings);
        if (this.settings.horizontalNavigation === true) {
          this.pIsVerticalKeyboardNavigation = function () {
            return false;
          };
        }
        if (this.settings.freeNagivation === true) {
          this.pIsFreeKeyboardNavigation = function () {
            return true;
          };
        }
        this._applySettings();
        this._onResize();
        return;
      }

      update() {
        var e;
        super.update();
        try {
          if (this._isNeedWaitLoadingChild === true) {
            //console.log("REFRESH BY LOAD")
            return this.refreshBindings(this._dataObjectRef, true);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      refreshBindings(dataObject, recursive) {
        var c, i, len, ref;
        super.refreshBindings(...arguments);
        ref = this.children;
        for (i = 0, len = ref.length; i < len; i++) {
          c = ref[i];
          if ((c.isLoaded != null) && !c.isLoaded()) {
            this._startWaitLoading(dataObject);
            return;
          }
        }
        this._isNeedWaitLoadingChild = false;
      }

      _startWaitLoading(_dataObjectRef) {
        var e;
        this._dataObjectRef = _dataObjectRef;
        try {
          return this._isNeedWaitLoadingChild = true;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      defaultSettings() {
        return {
          keyboardHandling: false,
          horizontalNavigation: false,
          freeNagivation: false,
          width: "auto",
          height: "auto"
        };
      }

      dataBindings() {
        return Object.assign(super.dataBindings(), {
          width: function (v) {
            if (v != null) {
              return this.setSize(v, this.settings.height);
            }
          },
          height: function (v) {
            if (v != null) {
              return this.setSize(this.settings.width, v);
            }
          },
          size: function (v) {
            if (v != null) {
              return this.setSize(v.width, v.height);
            }
          }
        });
      }

      setSize(width = "auto", height = "auto") {
        var e;
        try {
          if (width !== "auto") {
            width = this._getValueByStr(width, 'width', this);
          }
          if (height !== "auto") {
            height = this._getValueByStr(height, 'height', this);
          }
          if (width != null) {
            this.settings.width = width;
          }
          if (height != null) {
            this.settings.height = height;
          }
          return this._onResize();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      realWidth() {
        var e;
        try {
          if (this.isNotHaveBounds()) {
            return 0;
          }
          if (this.settings.width === "auto") {
            return this._calculateMax("x", "width");
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return this.settings.width;
      }

      realHeight() {
        var e;
        try {
          if (this.isNotHaveBounds()) {
            return 0;
          }
          if (this.settings.height === "auto") {
            return this._calculateMax("y", "height");
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return this.settings.height;
      }

      _calculateMax(a, b) {
        var child, e, i, len, ref, size, value;
        try {
          value = 0;
          ref = this.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            size = child[a] + KDCore.Utils.getRealSpriteSize(b, child);
            if (size > value) {
              value = size;
            }
          }
          if (value < 0) {
            value = 0;
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return 0;
        }
        return value;
      }

      _applySettings() {
        var e;
        try {
          if (this.settings.keyboardHandling === true) {
            return this.activateHandlerManagment();
          } else {
            return this.deactivateHandlerManagment();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _onResize() {
        var e;
        try {
          this.width = this.realWidth();
          return this.height = this.realHeight();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

    };
    return KDCore.Sprite_Group = Sprite_Group;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_Image;
    //NUI 1.0
    //rev 09.08.24

    //"type": "image"
    Sprite_Image = class Sprite_Image extends KDCore.Sprite {
      constructor(settings) {
        super();
        this.settings = Object.assign({}, this.defaultSettings(), settings);
        this._loaded = false;
        this._create();
        this._onResize();
        this.draw(this.settings.imageName);
        return;
      }

      isLoaded() {
        var e;
        try {
          if (this.settings.width !== "auto" && this.settings.height !== "auto") {
            return true;
          } else {
            return this._loaded === true;
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return false;
      }

      defaultSettings() {
        return {
          imageName: "",
          folderName: "pictures",
          width: "auto",
          height: "auto",
          keepAspect: false
        };
      }

      realWidth() {
        var e;
        try {
          if (this.isNotHaveBounds()) {
            return 0;
          }
          if (this.settings.width === "auto") {
            if (this._srcBitmap != null) {
              return this._srcBitmap.width;
            } else {
              if ((this.image.bitmap != null) && this.image.bitmap.isReady()) {
                return this.image.bitmap.width;
              }
            }
          } else {
            return this.settings.width;
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return this.width;
      }

      realHeight() {
        var e;
        try {
          if (this.isNotHaveBounds()) {
            return 0;
          }
          if (this.settings.height === "auto") {
            if (this._srcBitmap != null) {
              return this._srcBitmap.height;
            } else {
              if ((this.image.bitmap != null) && this.image.bitmap.isReady()) {
                return this.image.bitmap.height;
              }
            }
          } else {
            return this.settings.height;
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return this.height;
      }

      dataBindings() {
        return Object.assign(super.dataBindings(), {
          width: function (v) {
            if (v != null) {
              return this.setSize(v, this.settings.height);
            }
          },
          height: function (v) {
            if (v != null) {
              return this.setSize(this.settings.width, v);
            }
          },
          size: function (v) {
            if (v != null) {
              return this.setSize(v.width, v.height);
            }
          },
          image: function (v) {
            return this.draw(v);
          },
          icon: function (v) {
            return this.drawIcon(v);
          }
        });
      }

      setSize(width = "auto", height = "auto") {
        var e;
        try {
          if (width !== "auto") {
            width = this._getValueByStr(width, 'width', this);
          }
          if (height !== "auto") {
            height = this._getValueByStr(height, 'height', this);
          }
          if (width != null) {
            this.settings.width = width;
          }
          if (height != null) {
            this.settings.height = height;
          }
          return this._onResize();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      setImage(imageName, folderName = null) {
        var e;
        try {
          if (String.any(folderName)) {
            this.settings.folderName = folderName;
          }
          return this.draw(imageName);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      // * Если не иконка (число), то ничего не рисует (защита)
      drawIcon(iconIndex) {
        var e;
        try {
          if (isFinite(iconIndex)) {
            return this.draw(iconIndex);
          } else {
            return this.draw("");
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      draw(imageName = "") {
        var e;
        try {
          if (String.any(imageName) && isFinite(imageName)) {
            return this._drawIcon(imageName);
          } else if (String.any(imageName)) {
            return this._drawImage(imageName);
          } else {
            this._srcBitmap = null;
            return this._onResize();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _create() {
        var e;
        try {
          this.image = new KDCore.Sprite(new Bitmap(1, 1));
          return this.addChild(this.image);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _drawIcon(iconIndex) {
        var e, w;
        try {
          w = this.settings.width;
          if (w === "auto") {
            w = 32;
          }
          this.settings.height = w;
          this._srcBitmap = new Bitmap(w, w);
          this._srcBitmap.drawIcon(0, 0, iconIndex, w, true);
          this._loaded = true;
          return this._onResize();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _drawImage(imageName) {
        var e, folderName;
        try {
          ({ folderName } = this.settings);
          this._loaded = false;
          this._srcBitmap = ImageManager.loadBitmap('img/' + folderName + "/", imageName);
          return this._srcBitmap.addLoadListener(this._onBitmapLoaded.bind(this));
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _onBitmapLoaded() {
        var e;
        try {
          this._loaded = true;
          this._onResize();
          this._applyRequiredData();
          return this._executeLoadListeners();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _onResize() {
        var b, e, fh, fw, height, width;
        try {
          this.image.bitmap = new Bitmap(this.realWidth(), this.realHeight());
          if (this._srcBitmap == null) {
            return;
          }
          b = this._srcBitmap;
          //TODO: Опция, чтобы размер был с учётом аспекта
          if (this.settings.keepAspect === true) {
            ({ width, height } = this._calculateAspectRatio(this.image.bitmap.width, this.image.bitmap.height, this._srcBitmap.width, this._srcBitmap.height));
            fw = width;
            fh = height;
          } else {
            fw = this.realWidth();
            fh = this.realHeight();
          }
          return this.image.bitmap.blt(b, 0, 0, b.width, b.height, 0, 0, fw, fh);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _calculateAspectRatio(containerWidth, containerHeight, width, height) {
        var aspectRatio, containerAspectRatio, e;
        try {
          aspectRatio = width / height;
          containerAspectRatio = containerWidth / containerHeight;
          if (aspectRatio > containerAspectRatio) {
            width = containerWidth;
            height = width / aspectRatio;
          } else {
            height = containerHeight;
            width = height * aspectRatio;
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return { width, height };
      }

    };
    return KDCore.Sprite_Image = Sprite_Image;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_ImgButton;
    //NUI 1.0
    //rev 24.07.24

    //"type": "legacyButton"
    Sprite_ImgButton = class Sprite_ImgButton extends KDCore.Sprite {
      constructor(settings) {
        super();
        this.settings = Object.assign({}, this.defaultSettings(), settings);
        this._create();
        return;
      }

      defaultSettings() {
        return {
          width: "auto",
          height: "auto",
          imageName: "",
          isFull: false,
          folderName: "pictures",
          isCheckAlpha: false,
          handler: null,
          forceSize: false // * Force change button bitmaps size
        };
      }

      isLoaded() {
        var e;
        try {
          if (this.settings.width !== "auto" && this.settings.height !== "auto") {
            return true;
          } else {
            return this._loaded === true;
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      realWidth() {
        var e;
        try {
          if (this.isNotHaveBounds()) {
            return 0;
          }
          if (this.settings.width === "auto") {
            return this.button.realWidth();
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return this.settings.width;
      }

      realHeight() {
        var e;
        try {
          if (this.isNotHaveBounds()) {
            return 0;
          }
          if (this.settings.height === "auto") {
            return this.button.realHeight();
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return this.settings.height;
      }

      dataBindings() {
        return Object.assign(super.dataBindings(), {
          width: function (v) {
            if (v != null) {
              return this.setSize(v, this.settings.height);
            }
          },
          height: function (v) {
            if (v != null) {
              return this.setSize(this.settings.width, v);
            }
          },
          size: function (v) {
            if (v != null) {
              return this.setSize(v.width, v.height);
            }
          },
          image: function (v) {
            return this.setImage(v);
          },
          enable: function (v) {
            if (v != null) {
              return this.setEnabledState(v);
            }
          },
          handler: function (v) {
            return this.setClickHandler(v);
          }
        });
      }

      setSize(width = "auto", height = "auto") {
        var e;
        try {
          if (width !== "auto") {
            width = this._getValueByStr(width, 'width', this);
          }
          if (height !== "auto") {
            height = this._getValueByStr(height, 'height', this);
          }
          if (width != null) {
            this.settings.width = width;
          }
          if (height != null) {
            this.settings.height = height;
          }
          if (this.settings.forceSize === true) {
            this._create();
          }
          return this._onResize();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      setImage(imageName = "") {
        var e;
        try {
          if (this.button != null) {
            this._lastButtonState = this.button.isEnabled();
            this._lastButtonHandler = this.button._handler;
          }
          this.settings.imageName = imageName;
          this._create();
          // * Может не быть кнопки, если imageName == ""
          if (this.button == null) {
            return;
          }
          if (this._lastButtonState != null) {
            this.setEnabledState(this._lastButtonState);
            this._lastButtonState = null;
          }
          if (this._lastButtonHandler != null) {
            this.setClickHandler(this._lastButtonHandler);
            return this._lastButtonHandler = null;
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      setEnabledState(state = true) {
        var e;
        try {
          if (this.button == null) {
            return;
          }
          if (state === true) {
            return this.button.enable();
          } else {
            return this.button.disable();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      // * В отличии от AddClickHandler, удаляет все предидущие
      setClickHandler(handler) {
        var e;
        try {
          if (this.button == null) {
            return;
          }
          this.button.clearClickHandler();
          if ((handler != null) && typeof handler === "function") {
            return this.button.addClickHandler(handler);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      // * EXPAND FIELDS
      click() {
        var ref;
        return (ref = this.button) != null ? ref.click() : void 0;
      }

      setManualHover() {
        var ref;
        return (ref = this.button) != null ? ref.setManualHover() : void 0;
      }

      disableManualHover() {
        var ref;
        return (ref = this.button) != null ? ref.disableManualHover() : void 0;
      }

      setManualSelected() {
        var ref;
        return (ref = this.button) != null ? ref.setManualSelected(...arguments) : void 0;
      }

      enableClick() {
        var ref;
        return (ref = this.button) != null ? ref.enableClick() : void 0;
      }

      disableClick() {
        var ref;
        return (ref = this.button) != null ? ref.disableClick() : void 0;
      }

      desaturate() {
        var ref;
        return (ref = this.button) != null ? ref.desaturate() : void 0;
      }

      isMouseIn() {
        return (this.button != null) && this.button.isMouseIn();
      }

      isActive() {
        return (this.button != null) && this.button.isActive();
      }

      isDisabled() {
        return this.isEnabled();
      }

      isEnabled() {
        return (this.button != null) && this.button.isEnabled();
      }

      addClickHandler() {
        return this.setClickHandler(...arguments);
      }

      clearClickHandler() {
        var ref;
        return (ref = this.button) != null ? ref.clearClickHandler() : void 0;
      }

      simulateClick() {
        var ref;
        return (ref = this.button) != null ? ref.simulateClick() : void 0;
      }

      refreshState() {
        var ref;
        return (ref = this.button) != null ? ref.refreshState(...arguments) : void 0;
      }

      disable() {
        var ref;
        return (ref = this.button) != null ? ref.disable() : void 0;
      }

      enable() {
        var ref;
        return (ref = this.button) != null ? ref.disable() : void 0;
      }

      // * ==============
      _create() {
        var e, size, sourceFolder;
        try {
          this._loaded = false;
          if (this.button != null) {
            this._destroyButton();
          }
          if (!String.any(this.settings.imageName)) {
            return;
          }
          this.button = new KDCore.ButtonM(this.settings.imageName, this.settings.isFull, this.settings.folderName);
          if (this.settings.forceSize === true && this.settings.width !== "auto" && this.settings.height !== "auto") {
            sourceFolder = this.settings.folderName;
            size = {
              width: this.settings.width,
              height: this.settings.height
            };
            this.button._getGetter = function () {
              var getterFunc;
              getterFunc = function (filename) {
                var bitmap, outputBitmap;
                outputBitmap = new Bitmap(size.width, size.height);
                bitmap = ImageManager.loadBitmap('img/' + sourceFolder + '/', filename);
                bitmap.addLoadListener(function () {
                  return outputBitmap.blt(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, size.width, size.height);
                });
                return outputBitmap;
              };
              return getterFunc;
            };
            this.button._bitmaps = [];
            this.button._loadBitmaps(this.settings.imageName, this.settings.isFull, this.settings.folderName);
            this.button._setImageState(0);
          }
          if (this.settings.isCheckAlpha === true) {
            this.button.isCheckAlpha = function () {
              return true;
            };
          }
          if (this.settings.handler != null) {
            this.setClickHandler(this.settings.handler);
          }
          this.button.addLoadListener(this._onLoaded.bind(this));
          return this.addChild(this.button);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _onLoaded() {
        var e;
        try {
          this._loaded = true;
          this._onResize();
          this._applyRequiredData();
          return this._executeLoadListeners();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _destroyButton() {
        var e;
        try {
          if (this.button == null) {
            return;
          }
          this.button.removeFromParent();
          this._loaded = false;
          if ($gameTemp.kdButtonUnderMouse === this.button) {
            return $gameTemp.kdButtonUnderMouse = null;
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _onResize() {
        var e;
        try {
          this.width = this.realWidth();
          return this.height = this.realHeight();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

    };
    return KDCore.Sprite_ImgButton = Sprite_ImgButton;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_ItemsList;
    // * Класс который позволяет сделать список (на основе Window_Selectable), но из Sprite элементов, а не Draw на Bitmap

    //rev 02.05.24

    //TODO: Dynamic items height, controls handlers support
    Sprite_ItemsList = class Sprite_ItemsList extends Window_Selectable {
      constructor(r, settings = {}) {
        if (KDCore.isMV()) {
          super(r.x, r.y, r.width, r.height);
        } else {
          super(r);
        }
        this.settings = Object.assign(this.defaultSetting(), settings);
        this.padding = this.settings.itemsPadding;
        this._prevSelectedIndex = -1;
        this._createItemsContainer();
        this._createWindowContentMask();
        this._setupBackgroundType();
        return;
      }

      defaultSetting() {
        return {
          maxCols: 1,
          isHaveSelectionEffect: false,
          selectionEffects: ["glow;distance:12;outerStrength:3"],
          scaleItemsWidth: false,
          scaleItemsHeight: false,
          defautItemHeight: 36,
          isDrawDefaultItemBack: false,
          backgroundType: 2,
          itemsPadding: 12,
          isHaveInOutAnimation: false,
          inAnimation: "field:x;duration:0.15;keyframes:0=0,100=4",
          outAnimation: "field:x;duration:0.15;keyframes:0=4,100=0"
        };
      }

      activate(index) {
        var e;
        try {
          this.refresh();
          if (index != null) {
            this.safeSelect(index);
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return super.activate();
      }

      maxItems() {
        return this.getAllItems().length;
      }

      maxCols() {
        if (this.settings != null) {
          return this.settings.maxCols || 1;
        } else {
          return 1;
        }
      }

      getAllItems() {
        return this.itemsSet || [];
      }

      setItems(itemsSet, singleItemHeight = null) {
        this.itemsSet = itemsSet;
        this.singleItemHeight = singleItemHeight;
        this._prevSelectedIndex = -1;
        this.setTopRow(0);
        this._clearPreviousItems();
        if (this.singleItemHeight == null) {
          this._adjustAutoItemsHeight(this.itemsSet[0]);
        }
        this.refresh();
        this._drawNewItems();
      }

      selectedItem() {
        return this.itemAt(this.index());
      }

      setOkHandler(handler) {
        return this.setHandler('ok', handler);
      }

      setCancelHandler(handler) {
        return this.setHandler('cancel', handler);
      }

      setSelectionHandler(handler) {
        return this.pOnSelectionChanged = handler;
      }

      itemAt(index) {
        return this.getAllItems()[index];
      }

      isNeedScaleItemsW() {
        return this.settings.scaleItemsWidth === true;
      }

      isNeedScaleItemsH() {
        return this.settings.scaleItemsHeight === true;
      }

      // * NOT WORKS!!!
      isUseDynamicHeight() {
        return false;
      }

      lineHeight(index) {
        if (this.settings != null) {
          return this.singleItemHeight || this.settings.defautItemHeight;
        } else {
          return this.singleItemHeight || 36;
        }
      }

      isDrawWindowDefaultItemsBack() {
        return this.settings.isDrawDefaultItemBack === true;
      }

      //$[OVER]
      _updateCursor() {
        if (KDCore.isMV()) {
          return this.setCursorRect(0, 0, 0, 0);
        } else {
          return this._cursorSprite.visible = false;
        }
      }

      update() {
        super.update();
        this._itemsContainer.y = -this._scrollY;
        return this._updateItemsSelectionState();
      }

    };
    (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = Sprite_ItemsList.prototype;
      _._createItemsContainer = function () {
        var ref;
        if (!this.isDrawWindowDefaultItemsBack()) {
          if ((ref = this._contentsBackSprite) != null) {
            ref.visible = false;
          }
        }
        this._windowItemsContentLayer = new Sprite();
        this._windowItemsContentLayer.move(this._padding, this._padding);
        this.addChild(this._windowItemsContentLayer);
        this._itemsContainer = new KDCore.Sprite();
        this._windowItemsContentLayer.addChild(this._itemsContainer);
        this.addChild(this._downArrowSprite);
        return this.addChild(this._upArrowSprite);
      };
      _._setupBackgroundType = function () {
        return this.setBackgroundType(this.settings.backgroundType);
      };
      _._createWindowContentMask = function () {
        var e, m, maskBitmap;
        try {
          maskBitmap = new Bitmap(this.width - this._padding * 2, this.height - this._padding * 2);
          maskBitmap.fillAll("#FFF");
          m = new Sprite(maskBitmap);
          this._windowItemsContentLayer.mask = m;
          return this._windowItemsContentLayer.addChild(m);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._adjustAutoItemsHeight = function (item) {
        var e;
        try {
          if (item == null) {
            this.singleItemHeight = 36;
            return;
          }
          if (item.realHeight != null) {
            this.singleItemHeight = item.realHeight();
          } else {
            if (item.height > 0) {
              this.singleItemHeight = item.height;
            }
          }
          if (this.singleItemHeight === 0 || !this.singleItemHeight) {
            return this.singleItemHeight = 36;
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._clearPreviousItems = function () {
        var c, e, i, j, len, len1, ref, results, toRemove;
        try {
          toRemove = [];
          ref = this._itemsContainer.children;
          for (i = 0, len = ref.length; i < len; i++) {
            c = ref[i];
            toRemove.push(c);
          }
          results = [];
          for (j = 0, len1 = toRemove.length; j < len1; j++) {
            c = toRemove[j];
            results.push(c.removeFromParent());
          }
          return results;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._drawNewItems = function () {
        var e, i, index, item, len, ref, results;
        try {
          ref = this.getAllItems();
          results = [];
          for (index = i = 0, len = ref.length; i < len; index = ++i) {
            item = ref[index];
            results.push(this._addNewItemToList(item, index));
          }
          return results;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._addNewItemToList = function (item, index) {
        var e, rect;
        try {
          if (item == null) {
            return;
          }
          rect = this.itemRect(index);
          item.x = rect.x;
          item.y = rect.y;
          this._adjustItemWidthAndHeight(item);
          return this._itemsContainer.addChild(item);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._adjustItemWidthAndHeight = function (item) {
        var e, scaleFactor;
        try {
          if (item == null) {
            return;
          }
          if (this.isNeedScaleItemsW()) {
            scaleFactor = this._defaultItemWidth() / this._getItemWidth(item);
            item.scale.x = scaleFactor;
          }
          if (this.isNeedScaleItemsH()) {
            scaleFactor = this.lineHeight() / this._getItemHeight(item);
            return item.scale.y = scaleFactor;
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._getItemWidth = function (item) {
        var e, v;
        v = this._defaultItemWidth();
        try {
          if (item == null) {
            return v;
          }
          if (item.realWidth != null) {
            v = item.realWidth();
          } else {
            if (item.width > 0) {
              v = item.width;
            }
          }
          if (v === 0 || !v) {
            v = this._defaultItemWidth();
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return v;
      };
      _._defaultItemWidth = function () {
        return this.width - this._padding * 2;
      };
      _._getItemHeight = function (item) {
        var e, v;
        v = 36;
        try {
          if (item == null) {
            return v;
          }
          if (item.realHeight != null) {
            v = item.realHeight();
          } else {
            if (item.height > 0) {
              v = item.height;
            }
          }
          if (v === 0 || !v) {
            v = 36;
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return v;
      };
      _._updateItemsSelectionState = function () {
        var e;
        try {
          if (KDCore.isMZ()) {
            if (!this.active || this.index() < 0 || !this.cursorVisible) {
              this._disableSelectionForAll();
              return;
            }
          } else {
            if (!this.active || this.index() < 0 || !this.isCursorVisible()) {
              this._disableSelectionForAll();
              return;
            }
          }
          return this._selectItemAtIndex(this.index());
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._disableSelectionForAll = function () {
        var e, i, item, len, ref, results;
        try {
          if (this._prevSelectedIndex === -2) {
            return;
          }
          this._prevSelectedIndex = -2;
          ref = this.getAllItems();
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            item = ref[i];
            results.push(this._deselectItem(item));
          }
          return results;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._selectItem = function (item) {
        var e;
        try {
          if (item == null) {
            return;
          }
          if ((this._prevSelectedIndex != null) && this._prevSelectedIndex >= 0) {
            this._deselectItem(this.itemAt(this._prevSelectedIndex));
          }
          this._playItemInAnimation(item);
          if (item.activateInList != null) {
            return item.activateInList();
          } else {
            return this._selectItemVisually(item);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._playItemInAnimation = function (item) {
        var e;
        try {
          if (!this.settings.isHaveInOutAnimation) {
            return;
          }
          if (this.settings.inAnimation == null) {
            return;
          }
          if (item == null) {
            return;
          }
          this._playItemAnimation(item, this.settings.inAnimation);
          return this._isHaveInAnimation = true;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._selectItemVisually = function (item) {
        var e;
        try {
          if (item == null) {
            return;
          }
          if (!this.settings.isHaveSelectionEffect) {
            return;
          }
          //item.filters = [new PIXI.filters.GlowFilter({ distance: 15, outerStrength: 4 })]
          if (this.settings.selectionEffects == null) {
            return;
          }
          if (this.settings.selectionEffects.length === 0) {
            return;
          }
          KDCore.UI.Builder.ApplyEffects(item, this.settings.selectionEffects);
          return this._isSelectionEffectBeenAdded = true;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._deselectItem = function (item) {
        var e;
        try {
          if (item == null) {
            return;
          }
          this._playItemOutAnimation(item);
          if (item.deactivateInList != null) {
            return item.deactivateInList();
          } else {
            return this._deselectItemVisually(item);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._playItemOutAnimation = function (item) {
        var e;
        try {
          if (!this.settings.isHaveInOutAnimation) {
            return;
          }
          if (!this._isHaveInAnimation) {
            return;
          }
          if (this.settings.outAnimation == null) {
            return;
          }
          if (item == null) {
            return;
          }
          this._playItemAnimation(item, this.settings.outAnimation);
          return this._isHaveInAnimation = false;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._playItemAnimation = function (item, animation) {
        var e, root;
        try {
          if (item == null) {
            return;
          }
          root = item.children[0];
          if (root == null) {
            return;
          }
          if (typeof animation === "string") {
            animation = KDCore.UI.Builder.ConvertShortcut(animation);
          }
          return root.setAnimationRule(animation);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._deselectItemVisually = function (item) {
        var e;
        try {
          if (item == null) {
            return;
          }
          if (this._isSelectionEffectBeenAdded === true) {
            item.filters = [];
            return this._isSelectionEffectBeenAdded = false;
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._selectItemAtIndex = function (index) {
        var e, item;
        try {
          if (this._prevSelectedIndex !== index) {
            item = this.itemAt(index);
            if (item == null) {
              return;
            }
            this._selectItem(item);
            return this._prevSelectedIndex = index;
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
    })();
    // ■ END PRIVATE
    //---------------------------------------------------------------------------
    return KDCore.Sprite_ItemsList = Sprite_ItemsList;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_ItemsListN;
    //NUI 1.0
    //rev 03.05.24

    //type: "list"
    // * Этот класс служит только как Wrapper, чтобы можно было задавать настроки List через NUI схему
    Sprite_ItemsListN = class Sprite_ItemsListN extends KDCore.Sprite {
      constructor(settings) {
        super();
        this.settings = Object.assign(this.defaultSettings(), settings);
        this._applySettings();
        return;
      }

      defaultSettings() {
        return Object.assign({
          width: 240,
          height: 420
        }, KDCore.Sprite_ItemsList.prototype.defaultSetting());
      }

      /* (See parent class, this is just for reference)
             defaultSetting: -> {
                 maxCols: 1,
                 isHaveSelectionEffect: false,
                 selectionEffects: ["glow;distance:12;outerStrength:3"],
                 scaleItemsWidth: false,
                 scaleItemsHeight: false,
                 defautItemHeight: 36,
                 isDrawDefaultItemBack: false,
                 backgroundType: 2,
                 itemsPadding: 12,
                 isHaveInOutAnimation: false,
                 inAnimation: "field:x;duration:0.15;keyframes:0=0,100=4",
                 outAnimation: "field:x;duration:0.15;keyframes:0=4,100=0"
             }*/
      dataBindings() {
        return Object.assign(super.dataBindings(), {
          width: function (v) {
            if (v != null) {
              return this.setSize(v, this.settings.height);
            }
          },
          height: function (v) {
            if (v != null) {
              return this.setSize(this.settings.width, v);
            }
          },
          size: function (v) {
            if (v != null) {
              return this.setSize(v.width, v.height);
            }
          },
          maxCols: function (v) {
            if (v != null) {
              return this.setMaxCols(v);
            }
          }
        });
      }

      realWidth() {
        if (this.isNotHaveBounds()) {
          return 0;
        }
        return this.settings.width;
      }

      realHeight() {
        if (this.isNotHaveBounds()) {
          return 0;
        }
        return this.settings.height;
      }

      setSize(width, height) {
        var e;
        try {
          width = this._getValueByStr(width, 'width', this);
          height = this._getValueByStr(height, 'height', this);
          if (width != null) {
            this.settings.width = width;
          }
          if (height != null) {
            this.settings.height = height;
          }
          return this._applySettings();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      setMaxCols(maxCols) {
        var e;
        try {
          this.settings.maxCols = maxCols;
          return this._applySettings();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      clear() {
        var ref;
        return (ref = this.list) != null ? ref.setItems([]) : void 0;
      }

      // * WRAPPED
      setItems() {
        var ref;
        return (ref = this.list) != null ? ref.setItems(...arguments) : void 0;
      }

      activate() {
        var ref;
        return (ref = this.list) != null ? ref.activate(...arguments) : void 0;
      }

      deactivate() {
        var ref;
        return (ref = this.list) != null ? ref.deactivate(...arguments) : void 0;
      }

      setOkHandler() {
        var ref;
        return (ref = this.list) != null ? ref.setOkHandler(...arguments) : void 0;
      }

      setCancelHandler() {
        var ref;
        return (ref = this.list) != null ? ref.setCancelHandler(...arguments) : void 0;
      }

      setSelectionHandler() {
        var ref;
        return (ref = this.list) != null ? ref.setSelectionHandler(...arguments) : void 0;
      }

      refresh() {
        var ref;
        return (ref = this.list) != null ? ref.refresh(...arguments) : void 0;
      }

      selectedItem() {
        var ref;
        return (ref = this.list) != null ? ref.selectedItem() : void 0;
      }

      itemAt() {
        var ref;
        return (ref = this.list) != null ? ref.itemAt(...arguments) : void 0;
      }

      maxItems() {
        var ref;
        return (ref = this.list) != null ? ref.maxItems() : void 0;
      }

      getAllItems() {
        var ref;
        return (ref = this.list) != null ? ref.getAllItems() : void 0;
      }

      maxCols() {
        var ref;
        return (ref = this.list) != null ? ref.maxCols() : void 0;
      }

      // * END WRAPPED

      // * Dev, (not use settings) , чтобы визуально видеть размеры окна при подгонке
      setBackgroundType() {
        var ref;
        return (ref = this.list) != null ? ref.setBackgroundType(...arguments) : void 0;
      }

      // * Shortcut
      showBack() {
        return this.setBackgroundType(0);
      }

      _applySettings() {
        var e;
        try {
          this._destroyList();
          this._createListWithSettings(this.settings);
          if (this._isHaveStoredData === true) {
            return this._restoreData();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _destroyList() {
        var e;
        try {
          if (this.list == null) {
            return;
          }
          this._isHaveStoredData = true;
          this._lastItems = this.list.getAllItems();
          this._isBeenActive = this.list.active === true;
          this._lastSelectedIndex = this.list.index();
          this._lastHandlers = this.list._handlers;
          this.removeChild(this.list);
          return this.list = null;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _createListWithSettings(settings) {
        var e;
        try {
          this.list = new KDCore.Sprite_ItemsList({
            x: 0,
            y: 0,
            width: settings.width,
            height: settings.height
          }, settings);
          return this.addChild(this.list);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _restoreData() {
        var e;
        try {
          if (this.list == null) {
            return;
          }
          if (this._lastHandlers != null) {
            this.list._handlers = this._lastHandlers;
          }
          if (this._lastItems == null) {
            return;
          }
          this.list.setItems(this._lastItems);
          if (this._lastSelectedIndex != null) {
            this.list.safeSelect(this._lastSelectedIndex);
          }
          if (this._isBeenActive === true) {
            this.list.activate();
          }
          return this._isHaveStoredData = false;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

    };
    return KDCore.Sprite_ItemsListN = Sprite_ItemsListN;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_NUI;
    //NUI 1.0
    //rev 06.05.24
    Sprite_NUI = class Sprite_NUI extends KDCore.Sprite {
      constructor(nuiScheme, owner = null) {
        super();
        this.nuiScheme = nuiScheme;
        if (this.nuiScheme != null) {
          this.loadNuiScheme(this.nuiScheme, owner);
        }
        return;
      }

      // * DIRECT nuiElement,без Sprite_NUI (надо присоединять к OWNER)
      static FromScheme(scheme, owner) {
        var e, spr;
        try {
          spr = new Sprite_NUI(scheme, owner);
          if (owner != null) {
            owner.addChild(spr.nuiElement);
          }
          return spr.nuiElement;
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return new KDCore.Sprite_NUI();
        }
      }

      _afterLoadNuiAutoRefreshTime() {
        return 100;
      }

      loadNuiScheme(scheme, owner = null) {
        var e;
        try {
          if (this.nuiElement != null) {
            this.destroyNuiElement();
          }
          if (scheme == null) {
            return;
          }
          if (owner == null) {
            owner = this;
          }
          if (scheme["type"] != null) {
            this.nuiElement = KDCore.UI.Builder.Make(scheme, owner, this);
          } else {
            this.nuiElement = KDCore.UI.Builder.Factory(scheme, owner, this._afterLoadNuiAutoRefreshTime())[0];
          }
          this.addChild(this.nuiElement);
          return this.refreshBindings(owner, true);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      destroyNuiElement() {
        var e;
        try {
          if (this.nuiElement == null) {
            return;
          }
          this.nuiElement.removeFromParent();
          return this.nuiElement = null;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

    };
    return KDCore.Sprite_NUI = Sprite_NUI;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_Plane;
    //NUI 1.0
    //rev 25.04.24

    //type: "plane"
    Sprite_Plane = class Sprite_Plane extends KDCore.Sprite {
      constructor(settings) {
        var bottom, folderName, imageName, left, margins, right, textureSource, top;
        super();
        this.settings = Object.assign({}, this.defaultSettings(), settings);
        this.plane = null;
        this.planeContainer = new KDCore.Sprite();
        this.addChild(this.planeContainer);
        ({ imageName, margins, folderName } = this.settings);
        if (isFinite(margins)) {
          left = top = right = bottom = margins;
        } else {
          ({ left, top, right, bottom } = margins);
        }
        textureSource = ImageManager.loadBitmap('img/' + folderName + '/', imageName);
        textureSource.addLoadListener(() => {
          var texture;
          texture = new PIXI.Texture(textureSource._baseTexture);
          if (KDCore.isMV()) {
            this.plane = new PIXI.mesh.NineSlicePlane(texture, left, top, right, bottom);
          } else {
            this.plane = new PIXI.NineSlicePlane(texture, left, top, right, bottom);
          }
          this.planeContainer.addChild(this.plane);
          return this._onResize();
        });
        this._onResize();
        return;
      }

      realWidth() {
        if (this.isNotHaveBounds()) {
          return 0;
        }
        return this.settings.width;
      }

      realHeight() {
        if (this.isNotHaveBounds()) {
          return 0;
        }
        return this.settings.height;
      }

      defaultSettings() {
        return {
          imageName: "",
          width: 100,
          height: 100,
          margins: 20,
          folderName: "pictures"
        };
      }

      setSize(w = 100, h = 100) {
        var e;
        try {
          w = this._getValueByStr(w, 'width', this);
          h = this._getValueByStr(h, 'height', this);
          if (w != null) {
            this.settings.width = w;
          }
          if (h != null) {
            this.settings.height = h;
          }
          return this._onResize();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      //TODO: IMAGE
      dataBindings() {
        return Object.assign(super.dataBindings(), {
          width: function (v) {
            if (v != null) {
              return this.setSize(v, this.plane.height);
            }
          },
          height: function (v) {
            if (v != null) {
              return this.setSize(this.plane.width, v);
            }
          },
          size: function (v) {
            if (v != null) {
              return this.setSize(v.width, v.height);
            }
          }
        });
      }

      _onResize() {
        var e;
        try {
          this.width = this.settings.width;
          this.height = this.settings.height;
          if (this.plane == null) {
            return;
          }
          this.plane.width = this.settings.width;
          return this.plane.height = this.settings.height;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

    };
    return KDCore.Sprite_Plane = Sprite_Plane;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_SButton;
    //NUI 1.0
    //rev 23.07.24
    //"type": "button"
    Sprite_SButton = class Sprite_SButton extends KDCore.Sprite {
      constructor(settings) {
        super();
        this.settings = Object.assign({}, this.defaultSettings(), settings);
        this._isEnabled = true;
        this._isUnderMouse = false;
        this._isPressActive = false;
        this._isMouseOver = false;
        this._create();
        this._refreshSettings();
        return;
      }

      realWidth() {
        if (this.isNotHaveBounds()) {
          return 0;
        }
        return this.settings.width;
      }

      realHeight() {
        if (this.isNotHaveBounds()) {
          return 0;
        }
        return this.settings.height;
      }

      isDisabled() {
        return !this.isEnabled();
      }

      isEnabled() {
        return this._isEnabled === true;
      }

      _enable() {
        var e;
        try {
          if (this._desaturated === true) {
            this.filters = [];
            this._desaturated = false;
          }
          if ((this.settings.disabledTint != null) && this._isEnabled === false) { // * Return to normal Tint
            this.applyTint(this.settings.activeTint, this.settings.tintAlpha);
          }
          this._isEnabled = true;
          return this._refreshTint();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _disable() {
        var e;
        try {
          this._applyDisabledEffect();
          return this._isEnabled = false;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _applyDisabledEffect() {
        var e;
        try {
          if (this.settings.desaturateWhenDisabled === true) {
            return this.desaturate();
          } else if (this.settings.disabledTint != null) {
            return this.applyTint(this.settings.disabledTint, this.settings.disabledTintAlpha);
          } else {
            return this.applyTint(this.settings.tint, this.settings.tintAlpha);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      isActive() {
        return this._isEnabled === true && this.visible === true && this.opacity !== 0;
      }

      pIsSupportKeyboardHandle() {
        return this.settings.keyboardHandled === true;
      }

      desaturate() {
        this.filters = [new PIXI.filters.ColorMatrixFilter()];
        this.filters[0].desaturate();
        this._desaturated = true;
      }

      defaultSettings() {
        return {
          imageName: '',
          folderName: 'pictures',
          imageMargins: 20,
          width: 160,
          height: 60,
          clickSe: "Cursor1",
          desaturateWhenDisabled: false,
          tint: "",
          overTint: 0xFFFFDD,
          activeTint: 0xAAAAAA,
          tintAlpha: 0.5,
          disabledTint: 0xAAAAAA,
          disabledTintAlpha: 0.5,
          keyboardKey: "",
          keyboardHandled: true,
          enabled: true
        };
      }

      //TODO: IMAGE!
      dataBindings() {
        return Object.assign(super.dataBindings(), {
          width: function (v) {
            if (v != null) {
              return this.setSize(v, this.settings.height);
            }
          },
          height: function (v) {
            if (v != null) {
              return this.setSize(this.settings.width, v);
            }
          },
          size: function (v) {
            if (v != null) {
              return this.setSize(v.width, v.height);
            }
          },
          style: function (v) {
            if (v != null) {
              return this.updateStyle(v);
            }
          },
          handler: function (v) {
            return this.setClickHandler(v);
          },
          enable: function (v) {
            if (v != null) {
              return this.setEnabledState(v);
            }
          }
        });
      }

      setEnabledState(state = true) {
        var e;
        try {
          this.settings.enabled = state;
          if (state === true) {
            return this._enable();
          } else {
            return this._disable();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      enable() {
        return this.setEnabledState(true);
      }

      disable() {
        return this.setEnabledState(false);
      }

      updateStyle(style) {
        var e;
        try {
          this.settings = Object.assign(this.settings, style);
          return this._refreshSettings();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      addClickHandler() {
        return this.setClickHandler(...arguments);
      }

      setClickHandler(handler = null) {
        var e;
        try {
          this.settings.onClick = null;
          if ((handler != null) && typeof handler === 'function') {
            return this.settings.onClick = handler;
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      setSize(width = 160, height = 60) {
        var e, h, w;
        try {
          w = this._getValueByStr(width, 'width', this);
          h = this._getValueByStr(height, 'height', this);
          if (w != null) {
            this.settings.width = w;
          }
          if (h != null) {
            this.settings.height = h;
          }
          return this._refreshSettings();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      executeAction() {
        var e;
        try {
          KDCore.Utils.playSE(this.settings.clickSe);
          if (this.settings.onClick != null) {
            return this.settings.onClick();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _onTap() {
        var e;
        try {
          return this.executeAction();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      //console.log("TAP")
      _onOver() {
        this._isMouseOver = true;
        return this._refreshSettings();
      }

      //console.log("OVER")
      _onOut() {
        this._isMouseOver = false;
        return this._refreshSettings();
      }

      //console.log("OUT")
      _onDown() {
        this._isPressActive = true;
        return this._refreshSettings();
      }

      //console.log("DOWN")
      _onUp() {
        this._isPressActive = false;
        return this._refreshSettings();
      }

      //console.log("UP")
      _create() {
        var e, height, width;
        try {
          this.buttonPlane = new KDCore.Sprite_Plane({
            imageName: this.settings.imageName,
            margins: this.settings.imageMargins,
            folderName: this.settings.folderName
          });
          ({ width, height } = this.settings);
          this.buttonPlane.setSize(width, height);
          return this.addChild(this.buttonPlane);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _refreshSettings() {
        var e;
        try {
          this._refreshTint();
          if (this.settings.keyboardHandled === true) {
            this.handleOKAction = this._onTap;
          } else {
            this.handleOKAction = null;
          }
          this.setEnabledState(this.settings.enabled);
          return this._onResize();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _refreshTint() {
        var e;
        try {
          if (this._isPressActive === true) {
            return this.applyTint(this.settings.activeTint, this.settings.tintAlpha);
          } else if (this._isMouseOver === true) {
            return this.applyTint(this.settings.overTint, this.settings.tintAlpha);
          } else {
            return this.applyTint(this.settings.tint, this.settings.tintAlpha);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      applyTint(tintValue, tintAlpha = 0.5) {
        var e;
        try {
          if (tintValue == null) {
            this._resetTintFilter();
            return;
          }
          if (typeof tintValue === "string") {
            if (!String.any(tintValue)) {
              this._resetTintFilter();
              return;
            }
            tintValue = KDCore.Utils.string2hex(tintValue);
          }
          return this.buttonPlane.filters = [new PIXI.filters.ColorOverlayFilter(tintValue, tintAlpha)];
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _resetTintFilter() {
        var e;
        try {
          return this.buttonPlane.filters = [];
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _activateHandlerVisually() {
        var e;
        try {
          return this.applyTint(this.settings.overTint);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      pDeactivateHandler() {
        super.pDeactivateHandler();
        return this.applyTint(this.settings.tint);
      }

      update() {
        super.update();
        if (this.isActive()) {
          this._updateKeyboardHandling();
          this._updateMouseHandling();
        } else {
          if (this._isUnderMouse === true) {
            this._onOut();
          }
          if ($gameTemp.kdButtonUnderMouse === this) {
            $gameTemp.kdButtonUnderMouse = null;
          }
        }
      }

      _updateKeyboardHandling() {
        var e;
        try {
          if (String.any(this.settings.keyboardKey)) {
            if (Input.isTriggered(this.settings.keyboardKey)) {
              Input.clear();
              return this._onTap();
            }
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _updateMouseHandling() {
        var e;
        try {
          if (this.isUnderMouse()) {
            if (!this._isUnderMouse) {
              this._onOver();
              $gameTemp.kdButtonUnderMouse = this;
              try {
                if ($gameTemp.__pkdActiveKeyboardHandler != null) {
                  $gameTemp.__pkdActiveKeyboardHandler.pDeactivateHandler();
                }
              } catch (error) {
                e = error;
                KDCore.warning(e);
              }
              this._isUnderMouse = true;
            }
          } else {
            if (this._isUnderMouse === true) {
              this._onOut();
              if ($gameTemp.kdButtonUnderMouse === this) {
                $gameTemp.kdButtonUnderMouse = null;
              }
              this._isUnderMouse = false;
            }
          }
          if (TouchInput.isPressed()) {
            if (this._isUnderMouse === true) {
              if (!this._isMousePressed) {
                this._onDown();
                this._isMousePressed = true;
              }
            }
          }
          if (TouchInput.isReleased()) {
            if (this._isMousePressed === true) {
              this._onUp();
              if (this._isUnderMouse === true) {
                this._onTap();
              }
              return this._isMousePressed = false;
            }
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _onResize() {
        var e, ref;
        try {
          this.width = this.settings.width;
          this.height = this.settings.height;
          return (ref = this.buttonPlane) != null ? ref.setSize(this.width, this.height) : void 0;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

    };
    return KDCore.Sprite_SButton = Sprite_SButton;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    return (function () {    //NUI 1.3
      //rev 27.09.24

      //"type": "textPro"
      var TextProElementsBuilder, TextProParser;
      TextProParser = class TextProParser {
        // * settings - it's a Sprite_TextPro settings
        constructor(settings1) {
          this.settings = settings1;
          this._textsConfigs = [];
          if (KDCore.isMV()) {
            // * TODO: Very bad! Need to fix it
            if (!window.__kdSharedTextProTextColorSourceWindow) {
              window.__kdSharedTextProTextColorSourceWindow = new Window_Base(0, 0, 0, 0);
            }
          }
          this._parseAllText();
          return;
        }

        static ParseText(settings) {
          var parser;
          parser = new TextProParser(settings);
          return parser.getConfigs();
        }

        isControlSeparator(char) {
          return '\x1b' === char;
        }

        getConfigs() {
          return this._textsConfigs;
        }

        _parseAllText() {
          var e, preparedText, textState;
          try {
            preparedText = this._convertControlCharacters(this.settings.text);
            //console.log "PREPARED TEXT: " + preparedText
            textState = this._makeInitialTextState(preparedText);
            return this._processAllText(textState);
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _convertControlCharacters(inputText) {
          var e, outputText;
          try {
            if (String.any(inputText)) {
              outputText = Window_Base.prototype.convertEscapeCharacters.call({
                actorName: function () {
                  return Window_Base.prototype.actorName.call(null, ...arguments);
                },
                partyMemberName: function () {
                  return Window_Base.prototype.partyMemberName.call(null, ...arguments);
                }
              }, inputText);
            } else {
              outputText = "";
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
            return "";
          }
          return outputText;
        }

        _makeInitialTextState(text) {
          return {
            "text": text,
            "buffer": "",
            "index": 0,
            "color": "", // * "" default
            "fontSize": -1, // * -1 default
            "iconIndex": -1 // * -1 none
          };
        }

        _processAllText(textState) {
          var e;
          try {
            while (textState.index < textState.text.length) {
              this._processCharacter(textState);
            }
            return this._saveTextConfig(textState);
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _processCharacter(textState) {
          var c, e;
          try {
            c = textState.text[textState.index++];
            if (c.charCodeAt(0) < 0x20) {
              this._saveTextConfig(textState);
              return this._processControlCharacter(textState, c);
            } else {
              return textState.buffer += c;
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _saveTextConfig(textState) {
          var e;
          try {
            if (textState.buffer.length > 0 || textState.iconIndex > 0) {
              this._textsConfigs.push({
                "text": textState.buffer,
                "color": textState.color,
                "fontSize": textState.fontSize,
                "iconIndex": textState.iconIndex
              });
              textState.buffer = "";
              return textState.iconIndex = -1;
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _processControlCharacter(textState, c) {
          var code, e;
          try {
            if (this.isControlSeparator(c)) {
              code = this._obtainEscapeCode(textState);
              return this._processEscapeCharacter(code, textState);
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _obtainEscapeCode(textState) {
          var arr, e, regExp;
          try {
            regExp = /^[$.|^!><{}\\]|^[A-Z]+/i;
            arr = regExp.exec(textState.text.slice(textState.index));
            if (arr != null) {
              textState.index += arr[0].length;
              return arr[0].toUpperCase();
            } else {
              return "";
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
            return "";
          }
        }

        _processEscapeCharacter(code, textState) {
          var colorIndex, currentFontSize, e, fontSize, iconIndex;
          try {
            //TODO: chex param?
            switch (code) {
              case "C":
                colorIndex = this._obtainEscapeParam(textState);
                if (colorIndex > 0) {
                  if (KDCore.isMV()) {
                    return textState.color = window.__kdSharedTextProTextColorSourceWindow.textColor(colorIndex);
                  } else {
                    return textState.color = ColorManager.textColor(colorIndex);
                  }
                } else {
                  return textState.color = "";
                }
                break;
              case "I":
                iconIndex = this._obtainEscapeParam(textState);
                if (iconIndex > 0) {
                  textState.iconIndex = iconIndex;
                  // * Иконка - это отдельный спрайт, так что сохраняем текущий текст как отдельный
                  return this._saveTextConfig(textState);
                } else {
                  return textState.iconIndex = -1;
                }
                break;
              case "FS":
                fontSize = this._obtainEscapeParam(textState);
                return textState.fontSize = fontSize;
              case "{": // * Make font bigger by 1
                currentFontSize = textState.fontSize;
                if (currentFontSize === -1) {
                  //TODO: ???
                  currentFontSize = this.settings.font.size;
                }
                return textState.fontSize = currentFontSize + 1;
              case "}":
                currentFontSize = textState.fontSize;
                if (currentFontSize === -1) {
                  //TODO: ???
                  currentFontSize = this.settings.font.size;
                }
                return textState.fontSize = currentFontSize - 1;
              default:
                return KDCore.warning("Sprite_TextPro: Unknown escape code: " + code);
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _obtainEscapeParam(textState) {
          var arr, e, regExp;
          try {
            regExp = /^\[\d+\]/;
            arr = regExp.exec(textState.text.slice(textState.index));
            if (arr != null) {
              textState.index += arr[0].length;
              return parseInt(arr[0].slice(1));
            } else {
              return "";
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
            return "";
          }
        }

      };
      TextProElementsBuilder = class TextProElementsBuilder {
        // * settings - it's a Sprite_TextPro settings
        constructor(configs1, settings1, userTextStyle1) {
          this.configs = configs1;
          this.settings = settings1;
          this.userTextStyle = userTextStyle1;
          this._elements = new KDCore.Sprite_Group({});
          this._buildElements();
          return;
        }

        getElements() {
          return this._elements;
        }

        static Build(configs, settings, userTextStyle) {
          var builder;
          builder = new TextProElementsBuilder(configs, settings, userTextStyle);
          return builder.getElements();
        }

        _buildElements() {
          var config, e, i, index, len, ref, results;
          try {
            ref = this.configs;
            results = [];
            for (index = i = 0, len = ref.length; i < len; index = ++i) {
              config = ref[index];
              //console.log(config)
              if (config.iconIndex >= 0) {
                results.push(this._createIconElement(config, this._elements));
              } else {
                results.push(this._createTextElement(config, this._elements));
              }
            }
            return results;
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _createIconElement(config, line) {
          var e, icon, iconSize, paddingGroup;
          try {
            if (this.settings.isStaticIconSize === true) {
              iconSize = this.settings.iconSize;
            } else {
              if (config.fontSize > 0) {
                iconSize = config.fontSize * this.settings.iconSize;
              } else {
                iconSize = this.settings.font.size * this.settings.iconSize;
              }
            }
            icon = new KDCore.Sprite_Image({
              imageName: config.iconIndex,
              width: iconSize,
              height: iconSize
            });
            paddingGroup = new KDCore.Sprite_Group({
              width: iconSize + this.settings.iconPadding.left + this.settings.iconPadding.right,
              height: iconSize + this.settings.iconPadding.top + this.settings.iconPadding.bottom
            });
            paddingGroup.addChild(icon);
            icon.setPosition("center", "center");
            line.addChild(paddingGroup);
            return paddingGroup.setPosition("prevEndX", this._textElementVerticalPosition());
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _createTextElement(config, line) {
          var e, metrics, text, textSettings;
          try {
            textSettings = Object.assign({}, this.settings);
            textSettings.text = config.text;
            if (config.fontSize > 0) {
              textSettings.font.size = config.fontSize;
            }
            if (String.any(config.color)) {
              textSettings.textColor = config.color;
            }
            textSettings.alignment = "left";
            textSettings.multiline = false;
            textSettings.verticalCentered = false;
            textSettings.actualSize = true;
            //TODO: margins control code \MX, \MY?
            textSettings.margins = {
              "x": 0,
              "y": 0
            };
            //console.log("Create text with settings " + JSON.stringify(textSettings))
            text = new KDCore.UI.Sprite_UIText2(textSettings, this.userTextStyle);
            // * Add to line
            line.addChild(text);
            //console.log(text.realWidth())
            metrics = text.getMetrics();
            //console.log(metrics)
            //f = -> @getMetrics().width
            //f2 = -> @getMetrics().height
            //text.realWidth = f.bind(text)
            //text.realHeight = f2.bind(text)
            //text.setSize(metrics.width, metrics.height)
            return text.setPosition("prevEndX", this._textElementVerticalPosition());
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _textElementVerticalPosition() {
          var e;
          try {
            if (this.settings.verticalCentered === true) {
              return "center";
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
          return 0;
        }

      };
      return KDCore.Sprite_TextPro = class Sprite_TextPro extends KDCore.Sprite {
        constructor(settings = {}, userTextStyle1 = {}) {
          super();
          this.userTextStyle = userTextStyle1;
          this.settings = Object.assign({}, this.defaultSettings(), settings);
          this._textsContainer = new KDCore.Sprite_Group({});
          this._textLines = [];
          this.addChild(this._textsContainer);
          if (String.any(this.settings.text)) {
            this.drawText(this.settings.text);
          }
          return;
        }

        draw() {
          return this.drawText(...arguments);
        }

        drawText(text) {
          this.settings.text = text;
          this._createTextSprites();
          this._applyAlignment();
          this._applyMargins();
        }

        realWidth() {
          var e;
          try {
            if (this.isNotHaveBounds()) {
              return 0;
            }
            if (this.settings.actualSize === true) {
              return this._textsContainer.realWidth();
            }
            return this.settings.size.width;
          } catch (error) {
            e = error;
            KDCore.warning(e);
            return 0;
          }
        }

        realHeight() {
          var e;
          try {
            if (this.isNotHaveBounds()) {
              return 0;
            }
            if (this.settings.actualSize === true) {
              return this._textsContainer.realHeight();
            }
            return this.settings.size.height;
          } catch (error) {
            e = error;
            KDCore.warning(e);
            return 0;
          }
        }

        dataBindings() {
          return Object.assign(super.dataBindings(), {
            text: function (v) {
              return this.drawText(v);
            },
            style: function (v) {
              if (v != null) {
                return this.updateStyle(v);
              }
            },
            width: function (v) {
              if (v != null) {
                return this.setSize(v, this.realHeight());
              }
            },
            height: function (v) {
              if (v != null) {
                return this.setSize(this.realWidth(), v);
              }
            },
            size: function (v) {
              if (v != null) {
                return this.setSize(v.width, v.height);
              }
            },
            textColor: function (v) {
              if (v != null) {
                return this.updateStyle({
                  textColor: v
                });
              }
            },
            fontSize: function (v) {
              if (v != null) {
                return this.updateFontSize(v);
              }
            },
            iconSize: function (v) {
              if (v != null) {
                return this.updateIconSize(v);
              }
            },
            verticalSpacing: function (v) {
              if (v != null) {
                return this.updateVerticalSpacing(v);
              }
            }
          });
        }

        setSize(w = 60, h = 20) {
          var e;
          try {
            w = this._getValueByStr(w, 'width', this);
            h = this._getValueByStr(h, 'height', this);
            return this.updateStyle({
              size: {
                width: w,
                height: h
              }
            });
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        updateFontSize(fontSize) {
          var e, font;
          try {
            font = Object.assign({}, this.settings.font);
            if (typeof fontSize === "string") {
              fontSize = this._getValueByStr(fontSize, 'height', this);
            }
            font.size = fontSize;
            return this.updateStyle({ font });
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        updateIconSize(iconSize) {
          var e;
          try {
            if (typeof iconSize === "string") {
              iconSize = this._getValueByStr(iconSize, 'height', this);
            }
            return this.updateStyle({ iconSize });
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        updateVerticalSpacing(spacing) {
          var e;
          try {
            if (typeof spacing === "string") {
              spacing = this._getValueByStr(spacing, 'height', this);
            }
            return this.updateStyle({
              verticalSpacing: spacing
            });
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        updateStyle(newStyleInOldFormat = {}, newStyleInNewFormat = {}) {
          var e;
          try {
            this.settings = Object.assign(this.settings, newStyleInOldFormat);
            this.userTextStyle = Object.assign(this.userTextStyle, newStyleInNewFormat);
            // * Redraw Text
            return this.drawText(this.settings.text);
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        defaultSettings() {
          var defaultTextSettings, e;
          try {
            defaultTextSettings = KDCore.UI.Sprite_UIText2.prototype.defaultParams.call();
            return Object.assign({}, defaultTextSettings, {
              trimWidth: false,
              trimHeight: false,
              alignment: 'center',
              verticalAlignment: 'top', //center, bottom,
              multiline: false,
              verticalCentered: true,
              isStaticIconSize: false, // * If true, icon size will be iconSize in PX
              iconSize: 1, //% of font size, 1 = 100%
              iconPadding: {
                left: 2,
                right: 2,
                top: 0,
                bottom: 0
              },
              actualSize: false,
              verticalSpacing: 4 // * only for multiline
            });
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
          return {};
        }

        _applyMargins() {
          var e;
          try {
            this._textsContainer.x += this.settings.margins.x;
            return this._textsContainer.y += this.settings.margins.y;
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _applyAlignment() {
          var e;
          try {
            return this._textsContainer.setPosition(this.settings.alignment, this.settings.verticalAlignment);
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _createTextSprites() {
          var e, elements, i, len, line, lines, results, textsConfigs;
          try {
            this._clearTextSprites();
            textsConfigs = TextProParser.ParseText(this.settings);
            elements = TextProElementsBuilder.Build(textsConfigs, this.settings, this.userTextStyle);
            if (this.settings.multiline === true || this.settings.trimWidth === true) {
              lines = this._separateTextToLines(elements);
              results = [];
              for (i = 0, len = lines.length; i < len; i++) {
                line = lines[i];
                this._textLines.push(line);
                this._textsContainer.addChild(line);
                this._refreshTextElementsVerticalPosition(line);
                results.push(this._applyLineAligmnent(line));
              }
              return results;
            } else {
              this._textLines.push(elements);
              this._textsContainer.addChild(elements);
              return this._refreshTextElementsVerticalPosition(elements);
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _applyLineAligmnent(line) {
          var e;
          try {
            return line.setPosition(this.settings.alignment, line.y);
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _textElementVerticalPosition() {
          var e;
          try {
            if (this.settings.verticalCentered === true) {
              return "center";
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
          return 0;
        }

        _refreshTextElementsVerticalPosition(groupWithElements) {
          var child, e, i, len, ref, results;
          try {
            ref = groupWithElements.children;
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              results.push(child.setPosition(child.x, this._textElementVerticalPosition()));
            }
            return results;
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        _separateTextToLines(allTextElements) {
          var child, currentHeight, currentWidth, e, el, elements, i, j, len, len1, line, lines, maxHeight, maxLineWidth, newHeight, ref;
          try {
            lines = [];
            maxLineWidth = this.settings.size.width;
            maxHeight = this.settings.size.height;
            currentWidth = 0;
            currentHeight = function () {
              return lines.reduce(function (sum, line) {
                return sum + line.realHeight();
              }, 0);
            };
            elements = [];
            ref = allTextElements.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              elements.push(child);
            }
            line = new KDCore.Sprite_Group({});
            lines.push(line);
            for (j = 0, len1 = elements.length; j < len1; j++) {
              el = elements[j];
              currentWidth += el.realWidth();
              if (currentWidth > maxLineWidth) {
                currentWidth = 0;
                if (this.settings.multiline === false) {
                  break;
                }
                newHeight = currentHeight() + el.realHeight();
                if (newHeight > maxHeight) {
                  if (this.settings.trimHeight === true) {
                    break;
                  }
                }
                line = new KDCore.Sprite_Group({});
                line.addChild(el);
                el.setPosition(0, this._textElementVerticalPosition());
                lines.push(line);
                line.y += line.realHeight() + this.settings.verticalSpacing;
              } else {
                line.addChild(el);
                el.setPosition("prevEndX", this._textElementVerticalPosition());
              }
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
          return lines;
        }

        _clearTextSprites() {
          var e, i, len, ref, spr;
          try {
            this._textsContainer.move(0, 0);
            ref = this._textLines;
            for (i = 0, len = ref.length; i < len; i++) {
              spr = ref[i];
              spr.removeFromParent();
            }
            return this._textLines = [];
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

      };
    })();
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad((function () {
    var Sprite_TilingFrame;
    Sprite_TilingFrame = class Sprite_TilingFrame extends KDCore.Sprite {
      constructor(width, height, skinBitmap) {
        super();
        this.width = width;
        this.height = height;
        this.skinBitmap = skinBitmap;
        this._createParts();
        this._refreshAll();
      }

      _createParts() {
        var i, j;
        this.backSprite = new Sprite();
        this.addChild(this.backSprite);
        this.content = new Sprite();
        this.addChild(this.content);
        this._outFrame = new Sprite();
        for (i = j = 0; j < 8; i = ++j) {
          this._outFrame.addChild(new Sprite());
        }
        return this.addChild(this._outFrame);
      }

      // * Отступ, чтобы за рамку не выходить
      _fillPadding() {
        return 2;
      }

      // * Размер частей на картинке
      _fillImagePartWidth() {
        return 96;
      }

      _fillImagePartHeight() {
        return 96;
      }

      // * Толщина рамки
      _frameThickness() {
        return 12;
      }

      _refreshAll() {
        this._refreshBack();
        return this._refreshTFrame();
      }

      _refreshBack() {
        var fh, fw, h, m, sprite, w;
        m = this._fillPadding();
        w = Math.max(0, this.width - m * 2);
        h = Math.max(0, this.height - m * 2);
        sprite = this.backSprite;
        sprite.bitmap = this.skinBitmap;
        // * Координаты фона из картинки
        fw = this._fillImagePartWidth();
        fh = this._fillImagePartHeight();
        sprite.setFrame(0, 0, fw, fh);
        sprite.move(m, m);
        sprite.scale.x = w / fw;
        return sprite.scale.y = h / fh;
      }

      _refreshTFrame() {
        var drect, fh, fw, j, len, m, ref, spr, srect;
        fw = this._fillImagePartWidth();
        fh = this._fillImagePartHeight();
        // * Положение назначения
        drect = {
          x: 0,
          y: 0,
          width: this.width,
          height: this.height
        };
        // * Координаты рамки на картинке
        srect = {
          x: fw,
          y: 0,
          width: fw,
          height: fh
        };
        m = this._frameThickness(); // * Толщина
        ref = this._outFrame.children;
        for (j = 0, len = ref.length; j < len; j++) {
          spr = ref[j];
          spr.bitmap = this.skinBitmap;
        }
        if (KDCore.isMZ()) {
          Window.prototype._setRectPartsGeometry.call(this, this._outFrame, srect, drect, m);
        } else {
          this._setRectPartsGeometry(this._outFrame, srect, drect, m);
        }
      }

      // * Этот метод существует в MZ, но нет в MV
      //? From MZ
      _setRectPartsGeometry(sprite, srect, drect, m) {
        var child, children, dh, dmh, dmw, dw, dx, dy, j, len, sh, smh, smw, sw, sx, sy;
        sx = srect.x;
        sy = srect.y;
        sw = srect.width;
        sh = srect.height;
        dx = drect.x;
        dy = drect.y;
        dw = drect.width;
        dh = drect.height;
        smw = sw - m * 2;
        smh = sh - m * 2;
        dmw = dw - m * 2;
        dmh = dh - m * 2;
        children = sprite.children;
        sprite.setFrame(0, 0, dw, dh);
        sprite.move(dx, dy);
        // corner
        children[0].setFrame(sx, sy, m, m);
        children[1].setFrame(sx + sw - m, sy, m, m);
        children[2].setFrame(sx, sy + sw - m, m, m);
        children[3].setFrame(sx + sw - m, sy + sw - m, m, m);
        children[0].move(0, 0);
        children[1].move(dw - m, 0);
        children[2].move(0, dh - m);
        children[3].move(dw - m, dh - m);
        // edge
        children[4].move(m, 0);
        children[5].move(m, dh - m);
        children[6].move(0, m);
        children[7].move(dw - m, m);
        children[4].setFrame(sx + m, sy, smw, m);
        children[5].setFrame(sx + m, sy + sw - m, smw, m);
        children[6].setFrame(sx, sy + m, m, smh);
        children[7].setFrame(sx + sw - m, sy + m, m, smh);
        children[4].scale.x = dmw / smw;
        children[5].scale.x = dmw / smw;
        children[6].scale.y = dmh / smh;
        children[7].scale.y = dmh / smh;
        // center
        if (children[8] != null) {
          children[8].setFrame(sx + m, sy + m, smw, smh);
          children[8].move(m, m);
          children[8].scale.x = dmw / smw;
          children[8].scale.y = dmh / smh;
        }
        for (j = 0, len = children.length; j < len; j++) {
          child = children[j];
          child.visible = dw > 0 && dh > 0;
        }
      }

    };
    return KDCore.Sprite_TilingFrame = Sprite_TilingFrame;
  }));


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Window_ExtTextLineBase;
    // * Данное окно используется как основа для Sprite_UITextExt
    //rev 07.10.21
    Window_ExtTextLineBase = class Window_ExtTextLineBase extends Window_Base {
      constructor(rect, fontSettings, styleSettings = {}) {
        super(rect);
        this.fontSettings = fontSettings;
        this.styleSettings = styleSettings;
        this.createContents();
        // * Всегда прозрачное окно
        this.setBackgroundType(2);
        this.resetFontSettings();
        return;
      }

      // * Нет отступов
      updatePadding() {
        return this.padding = 0;
      }

      // * Нет отступов
      itemPadding() {
        return 0;
      }

      textPadding() {
        return 0;
      }

      standardPadding() {
        return 0;
      }

      contentsWidth() {
        return this.width;
      }

      contentsHeight() {
        return this.height;
      }

      // * Более гибкая настройка размера текста при { }
      makeFontBigger() {
        return this.contents.fontSize += 1;
      }

      makeFontSmaller() {
        if (this.contents.fontSize > 1) {
          return this.contents.fontSize -= 1;
        }
      }

      resetTextColor() {
        super.resetTextColor();
        if (this.styleSettings == null) {
          return;
        }
        if (this.styleSettings.textColor != null) {
          return this.contents.textColor = this.styleSettings.textColor;
        }
      }

      // * Применение своих шрифта и размера текста
      resetFontSettings() {
        super.resetFontSettings();
        if (this.fontSettings == null) {
          return;
        }
        if (String.any(this.fontSettings.face)) {
          this.contents.fontFace = this.fontSettings.face;
        }
        if (this.fontSettings.size > 0) {
          this.contents.fontSize = this.fontSettings.size;
        }
        if (this.fontSettings.italic != null) {
          this.contents.fontItalic = this.fontSettings.italic;
        }
      }

    };
    return KDCore.Window_ExtTextLineBase = Window_ExtTextLineBase;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    // * Button M
    //------------------------------------------------------------------------------
    //@[AUTO EXTEND]
    // * Button Mini - упрощённый класс Sprite_XButton (KDCore.Button)

    // * Принимает название файла изображения кнопки без _00
    // * Названия изображения должны быть в стандартном формате _00, _01, [_03]
    // * _02 - не используются в этом классе

    // * Класс использует глобальную временную переменную для определения находится ли мышь в зоне кнопки

    //TODO: ADD ALPHA CHECK!

    // * Если isFull - true, значит нужен _03
    KDCore.ButtonM = class ButtonM extends KDCore.Sprite {
      constructor(filename, isFull = false, sourceFolder = null) {
        super();
        this._bitmaps = [];
        this._disabled = false;
        this._isTriggered = false;
        // * Когда произошло нажатие на кнопку
        this._handler = null;
        this._isCanBeClicked = true;
        this._isManualHoverMode = false;
        this._isManualSelected = false;
        this._loadBitmaps(filename, isFull, sourceFolder);
        this._setImageState(0);
        this._createThread();
      }

      realWidth() {
        return this._bitmaps[0].width;
      }

      realHeight() {
        return this._bitmaps[0].height;
      }

      setManualHover() {
        return this._isManualHoverMode = true;
      }

      disableManualHover() {
        return this._isManualHoverMode = false;
      }

      setManualSelected(_isManualSelected) {
        this._isManualSelected = _isManualSelected;
      }

      enableClick() {
        return this._isCanBeClicked = true;
      }

      disableClick() {
        return this._isCanBeClicked = false;
      }

      desaturate() {
        this.filters = [new PIXI.filters.ColorMatrixFilter()];
        this.filters[0].desaturate();
      }

      isLoaded() {
        var ref;
        return (ref = this._bitmaps[0]) != null ? ref.isReady() : void 0;
      }

      isMouseIn() {
        if (this._isManualHoverMode === true) {
          return this._isManualSelected;
        } else {
          return this.isUnderMouse() && this.visible === true;
        }
      }

      isAllParentsActive() {
        var e, parent;
        try {
          parent = this.parent;
          while (parent != null) {
            if (parent.visible === false) {
              return false;
            }
            if (parent.opacity === 0) {
              return false;
            }
            parent = parent.parent;
          }
          return true;
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return false;
        }
      }

      isActive() {
        if (this._isCanBeClicked === false) {
          return false;
        }
        if (this.visible === false) {
          return false;
        }
        if (this.opacity === 0) {
          return false;
        }
        return this.isAllParentsActive();
      }

      isDisabled() {
        return this._disabled === true;
      }

      addClickHandler(_handler) {
        this._handler = _handler;
      }

      clearClickHandler() {
        return this._handler = null;
      }

      // * Воспроизводит визуальный эффект нажатия
      simulateClick() {
        if (!this.isActive()) {
          return;
        }
        if (this.isDisabled()) {
          return;
        }
        if (this.isMouseIn()) {
          return;
        }
        this._startSimulation();
      }

      isEnabled() {
        return !this.isDisabled();
      }

      refreshState(isEnable = true) {
        if (isEnable === true) {
          if (this.isDisabled()) {
            this.enable();
          }
        } else {
          if (this.isEnabled()) {
            this.disable();
          }
        }
      }

      disable() {
        this._disabled = true;
        return this._setImageState(2);
      }

      enable() {
        this._disabled = false;
        return this._setImageState(0);
      }

      click() {
        if (this._handler != null) {
          return this._handler();
        }
      }

      update() {
        super.update();
        return this._updateMain();
      }

    };
    return (function () {
      //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ ButtonM Implementation
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _, alias_SM_isAnyButtonPressed, alias_SM_onMapLoaded;
      //@[DEFINES]
      _ = KDCore.ButtonM.prototype;
      _._loadBitmaps = function (filename, isFull = false, sourceFolder = null) {
        var getterFunc;
        getterFunc = this._getGetter(sourceFolder);
        this._bitmaps.push(getterFunc(filename + '_00'));
        this._bitmaps[0].addLoadListener(this._onBitmapLoaded.bind(this));
        this._bitmaps.push(getterFunc(filename + '_01'));
        if (isFull) {
          this._bitmaps.push(getterFunc(filename + '_03'));
        }
      };
      _._onBitmapLoaded = function () {
        var e;
        try {
          return this._executeLoadListeners();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._getGetter = function (sourceFolder = null) {
        var getterFunc;
        getterFunc = function (filename) {
          return ImageManager.loadPicture(filename);
        };
        if (sourceFolder !== null) {
          getterFunc = function (filename) {
            return ImageManager.loadBitmap('img/' + sourceFolder + '/', filename);
          };
        }
        return getterFunc;
      };
      _._setImageState = function (index = 0) {
        if (this._bitmaps[index] == null) {
          index = 0;
        }
        this.bitmap = this._bitmaps[index];
        this._lastState = index;
      };
      _._createThread = function () {
        this.hoverThread = new KDCore.TimedUpdate(3, this._updateHover.bind(this));
        this.hoverThread.applyTimeRange(-1, 1);
        this.hoverThread.call();
      };
      //?[DYNAMIC]
      _._updateMain = function () {
        this._updateMouseLogic();
        if (!this.isActive()) {
          if (($gameTemp.kdButtonUnderMouse != null) && $gameTemp.kdButtonUnderMouse === this) {
            return $gameTemp.kdButtonUnderMouse = null;
          }
        }
      };
      _._updateMouseLogic = function () {
        this.hoverThread.update();
        return this._updateMouseClick();
      };
      _._updateHover = function () {
        var e;
        if (!this.isActive()) {
          return;
        }
        // * чтобы эффект нажатия не прекратить
        if (this._isTriggered === true) {
          return;
        }
        if (this.isMouseIn()) {
          if (this._lastState !== 1) {
            if (!this.isDisabled()) {
              this._setImageState(1);
            }
            $gameTemp.kdButtonUnderMouse = this;
            try {
              if ($gameTemp.__pkdActiveKeyboardHandler != null) {
                $gameTemp.__pkdActiveKeyboardHandler.pDeactivateHandler();
              }
            } catch (error) {
              e = error;
              KDCore.warning(e);
            }
          }
        } else {
          if (this._lastState !== 0) {
            if (!this.isDisabled()) {
              this._setImageState(0);
            }
            if ($gameTemp.kdButtonUnderMouse === this) {
              $gameTemp.kdButtonUnderMouse = null;
            }
          } else if ($gameTemp.kdButtonUnderMouse === this) {
            $gameTemp.kdButtonUnderMouse = null;
          }
        }
      };
      _._updateMouseClick = function () {
        if (!this.isActive()) {
          return;
        }
        if (this.isDisabled()) {
          return;
        }
        if (TouchInput.isTriggered() && this.isUnderMouse()) {
          this._isTriggered = true;
          this._setImageState(0);
        }
        if (this._isTriggered === true) {
          if (TouchInput.isReleased()) {
            this._isTriggered = false;
            if (this.isMouseIn()) {
              this.click();
            }
          }
        }
      };
      _._startSimulation = function () {
        this._setImageState(1);
        this._simulateThread = new KDCore.TimedUpdate(10, () => {
          return this._setImageState(0);
        });
        this._simulateThread.once();
        return this._updateMain = this._updateMouseClickSimulated;
      };
      _._updateMouseClickSimulated = function () {
        this._simulateThread.update();
        if (!this._simulateThread.isAlive()) {
          this._simulateThread = null;
          this._updateMain = this._updateMouseLogic;
        }
      };
      // * Теперь при нажатии на любую кнопку, игрок не будет ходить по карте

      //@[ALIAS]
      alias_SM_isAnyButtonPressed = Scene_Map.prototype.isAnyButtonPressed;
      Scene_Map.prototype.isAnyButtonPressed = function () {
        if ($gameTemp.kdButtonUnderMouse != null) {
          return true;
        } else {
          return alias_SM_isAnyButtonPressed.call(this);
        }
      };
      //TODO: Добавить доп. проверку?
      //@[ALIAS]
      alias_SM_onMapLoaded = Scene_Map.prototype.onMapLoaded;
      Scene_Map.prototype.onMapLoaded = function () {
        $gameTemp.kdButtonUnderMouse = null;
        setTimeout((function () {
          return $gameTemp.kdButtonUnderMouse = null;
        }), 50);
        return alias_SM_onMapLoaded.call(this);
      };
    })();
  });

  // ■ END ButtonM Implementation
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    // * Button Mini User - класс с определением файла каждого состояния отдельно
    // * Принимает теже аргументы, только заместо имени файла, три изображения (имени)
    // ? states = { main, hover, disabled }
    return KDCore.ButtonMU = class ButtonMU extends KDCore.ButtonM {
      constructor() {
        super(...arguments);
      }

      //$[OVER]
      _loadBitmaps(states, isFull = true, sourceFolder = null) {
        var getterFunc;
        getterFunc = this._getGetter(sourceFolder);
        this._bitmaps.push(getterFunc(states.main));
        this._bitmaps.push(getterFunc(states.hover));
        // * Optional 03
        if (String.any(states.disabled)) {
          this._bitmaps.push(getterFunc(states.disabled));
        }
      }

    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_TilingLine;
    Sprite_TilingLine = class Sprite_TilingLine extends KDCore.Sprite_TilingFrame {
      constructor() {
        super(...arguments);
      }

      //$[OVER BASE ALL BELOW]
      _fillPadding() {
        return 0;
      }

      _refreshTFrame() { } // * EMPTY

      _fillImagePartWidth() {
        return 4;
      }

      _fillImagePartHeight() {
        return 26;
      }

    };
    return KDCore.Sprite_TilingLine = Sprite_TilingLine;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    // * Пространство имён для всех UIElements
    KDCore.UI = KDCore.UI || {};
    (function () {    // * Общий класс для всех UI элементов
      //?rev 07.02.2024
      var Sprite_UIElement;
      Sprite_UIElement = (function () {
        // * ABSTRACT значит что класс сам по себе ничего не создаёт, не хранит данные
        //@[ABSTRACT]
        class Sprite_UIElement extends KDCore.Sprite {
          constructor(params) {
            super();
            this.params = params;
            this._init();
          }

          // * Стандартный набор настроек
          defaultParams() {
            return {
              visible: true
            };
          }

          // * Общий метод (есть у всех элементов)
          // * По умолчанию вызывает drawText, но потомки могут переопределить
          draw() {
            return this.drawText(...arguments);
          }

          // * Общий метод
          drawText() { } // * EMPTY


          // * Если изначально невидимый (из параметров), то не активный вообще
          isActive() {
            return this.params.visible === true;
          }

          rootImageFolder() {
            if (String.any(this.params.rootImageFolder)) {
              return this.params.rootImageFolder;
            } else {
              return Sprite_UIElement.RootImageFolder;
            }
          }

          // * Сделать чёрно белым
          desaturate() {
            this.filters = [new PIXI.filters.ColorMatrixFilter()];
            this.filters[0].desaturate();
          }

          clearFilters() {
            return this.filters = [];
          }

          // * Общий метод (можно ли редактировать визуально)
          isCanBeEdited() {
            return false;
          }

          // * Общий метод (надо ли скрывать при игровом сообщнии)
          isHaveHideWithMessageFlag() {
            return false;
          }

          // * Общий метод (находится ли объект под мышкой)
          isUnderMouse() {
            var ref;
            return ((ref = this.zeroChild()) != null ? ref.isUnderMouse() : void 0) && this.isFullVisible();
          }

          // * Полностью ли виден объект? (включае всех его родителей)
          isFullVisible() {
            return this.visible === true && this.allParentsIsVisible();
          }

          // * Все ли родители объекта видимы
          allParentsIsVisible() {
            var e, p;
            if (!this.visible) {
              return false;
            }
            try {
              if (this.parent != null) {
                p = this.parent;
                while (p != null) {
                  if (p.visible === true) {
                    p = p.parent;
                  } else {
                    return false;
                  }
                }
                return true;
              } else {
                return this.visible === true;
              }
            } catch (error) {
              e = error;
              KDCore.warning(e);
              return true;
            }
          }

          // * Параметры первого элемента (если он есть)
          realWidth() {
            var child;
            child = this.zeroChild();
            if (child != null) {
              if (child instanceof KDCore.UI.Sprite_UIElement) {
                return child.realWidth();
              } else {
                return child.width;
              }
            }
            return 0;
          }

          realHeight() {
            var child;
            child = this.zeroChild();
            if (child != null) {
              if (child instanceof KDCore.UI.Sprite_UIElement) {
                return child.realHeight();
              } else {
                return child.height;
              }
            }
            return 0;
          }

          // * Метод восстановления значения на стандартные настройки
          reset(property) {
            var e;
            try {
              switch (property) {
                case "position":
                  this._resetPosition();
                  break;
                default:
                  this[property] = this.params[property];
              }
            } catch (error) {
              e = error;
              KDCore.warning(e);
            }
          }

        };

        // * Корневая директория для изображений
        Sprite_UIElement.RootImageFolder = "Alpha";

        return Sprite_UIElement;

      }).call(this);
      KDCore.UI.Sprite_UIElement = Sprite_UIElement;
    })();
    return (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = KDCore.UI.Sprite_UIElement.prototype;
      _._init = function () {
        var e;
        this._prepare();
        try {
          return this._createContent();
        } catch (error) {
          e = error;
          KDCore.warning(e);
          // * Если при создании произошла ошибка, отключаем элемент
          return this.isActive = function () {
            return false;
          };
        }
      };

      // * Подготовка элемента (проверка параметров)
      _._prepare = function () {
        //@params = @defaultParams() unless @params?
        this.params = Object.assign({}, this.defaultParams(), this.params);
        if (this.params.visible != null) {
          this.visible = this.params.visible;
        }
      };
      // * Наследники создают свои элементы в этом методе
      _._createContent = function () { }; // * EMPTY

      // * Сброс позиции
      _._resetPosition = function () {
        var e, x, y;
        if (this.params.position == null) {
          return;
        }
        try {
          ({ x, y } = this.params.position);
          if (isFinite(x) && isFinite(y)) {
            x = Number(x);
            y = Number(y);
          } else {
            x = Number(eval(x));
            y = Number(eval(y));
          }
          this.move(x, y);
        } catch (error) {
          e = error;
          KDCore.warning(e);
          this.move(0, 0);
        }
      };
    })();
  });

  // ■ END PRIVATE.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_ItemsListNHor;
    //TODO: NOT USED IN NUI 1.0
    //NUI 1.X !#!
    //rev 03.05.24

    //"type": "horList"
    Sprite_ItemsListNHor = class Sprite_ItemsListNHor extends KDCore.Sprite_ItemsListN {
      constructor() {
        super(...arguments);
      }

      //$[OVER]
      defaultSettings() {
        var settings;
        settings = super.defaultSettings();
        settings.width = 420;
        settings.height = 120;
        settings.maxCols = 4;
        return settings;
      }

      //$[OVER]
      setMaxCols(maxCols) { } // * AUTO

      setItems(items) {
        var e, l;
        try {
          if (items != null) {
            l = this.maxItems();
            if (l !== items.length) {
              this.settings.maxCols = items.length;
              this.clear();
              this._applySettings();
            }
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return super.setItems(items);
      }

    };
    return KDCore.Sprite_ItemsListNHor = Sprite_ItemsListNHor;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Sprite_Screen;
    //NUI 1.0
    //rev 04.05.24

    //"type": "screen"
    Sprite_Screen = class Sprite_Screen extends KDCore.Sprite_Group {
      constructor(settings) {
        super(settings);
        this._applyExtraSettings();
      }

      //TODO: В режиме linkToMap, должен иметь width и height карты (size * tileSize)
      realWidth() {
        if (this.isNotHaveBounds()) {
          return 0;
        }
        return Graphics.width;
      }

      realHeight() {
        if (this.isNotHaveBounds()) {
          return 0;
        }
        return Graphics.height;
      }

      defaultSettings() {
        var defaultSettings;
        defaultSettings = super.defaultSettings();
        return Object.assign(defaultSettings, {
          width: Graphics.width,
          height: Graphics.height,
          linkToMap: false //TODO: NOT USED IN NUI 1.0
        });
      }

      _applyExtraSettings() {
        var e;
        try {
          if (this.settings.linkToMap === true) {
            return this.anchorPoint = new KDCore.MapAnchorPoint(0, 0);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      update() {
        super.update();
        return this._refreshScreenPosition();
      }

      _refreshScreenPosition() {
        var e;
        try {
          if (this.anchorPoint == null) {
            return;
          }
          this.x = this.anchorPoint.screenX();
          return this.y = this.anchorPoint.screenY();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

    };
    return KDCore.Sprite_Screen = Sprite_Screen;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    (function () {
      var Sprite_UIButton;
      // * Кнопка на экране, можно нажимать
      Sprite_UIButton = class Sprite_UIButton extends KDCore.UI.Sprite_UIElement {
        constructor() {
          super(...arguments);
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true,
            image: "Button_Inventory",
            isHaveDisabled: true,
            rootImageFolder: null, //?optional
            click: "console.log('click')" // * число или код
          };
        }

        // * Кнопка не поддерживает перерисовку
        draw() { } // * EMPTY

        disable() {
          var ref;
          return (ref = this.button) != null ? ref.disable() : void 0;
        }

        enable() {
          var ref;
          return (ref = this.button) != null ? ref.enable() : void 0;
        }

        setState(isEnabled) {
          if (isEnabled) {
            return this.enable();
          } else {
            return this.disable();
          }
        }


        // * Просто вызов метода
        call() {
          var ref;
          return (ref = this.button) != null ? ref.click() : void 0;
        }

        // * Вызов метода с симуляцией нажатия
        click() {
          var ref, ref1;
          if ((ref = this.button) != null) {
            ref.click();
          }
          return (ref1 = this.button) != null ? ref1.simulateClick() : void 0;
        }

      };
      KDCore.UI.Sprite_UIButton = Sprite_UIButton;
    })();
    return (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = KDCore.UI.Sprite_UIButton.prototype;
      //$[OVER]
      _._createContent = function () {
        if (this.params.image.isEmpty()) {
          KDCore.warning('You try create Button without image');
          return;
        }
        this.button = new KDCore.ButtonM(this.params.image, this.params.isHaveDisabled, this.rootImageFolder());
        this.add(this.button);
        return this._registerClickMethod();
      };
      _._registerClickMethod = function () {
        var commonEventId, e, method, ref, script;
        if (!String.any(this.params.click)) {
          return;
        }
        method = null;
        try {
          // * Если число, то значит общее событие
          if (isFinite(this.params.click)) {
            commonEventId = parseInt(this.params.click);
            if (commonEventId > 0) {
              method = function () {
                return $gameTemp.reserveCommonEvent(commonEventId);
              };
            }
          } else {
            // * Иначе скрипт
            script = this.params.click;
            method = function () {
              return eval(script);
            };
          }
          return this.button.addClickHandler(method);
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return (ref = this.button) != null ? ref.clearClickHandler() : void 0;
        }
      };
    })();
  });

  // ■ END PRIVATE.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    (function () {    // * Рисует лицо персонажа (из папки Faces)
      var Sprite_UIFace;
      Sprite_UIFace = class Sprite_UIFace extends KDCore.UI.Sprite_UIElement {
        constructor() {
          super(...arguments);
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true,
            faceName: "Actor1",
            faceIndex: 0,
            mirror: false,
            size: 144
          };
        }

        draw() {
          return this.drawFace(...arguments);
        }

        drawFace(faceName, faceIndex) {
          return this._drawFaceWhenReady(faceName, faceIndex);
        }

      };
      KDCore.UI.Sprite_UIFace = Sprite_UIFace;
    })();
    return (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = KDCore.UI.Sprite_UIFace.prototype;
      //$[OVER]
      _._createContent = function () {
        return this._createFaceSprite();
      };
      _._createFaceSprite = function () {
        this._faceSpr = KDCore.Sprite.FromBitmap(this.params.size);
        if (this.params.mirror === true) {
          this._flipFaceSpr();
        }
        this.add(this._faceSpr);
        this._drawFaceWhenReady(this.params.faceName, this.params.faceIndex);
      };
      _._flipFaceSpr = function () {
        this._faceSpr.scale.x = -1;
        this._faceSpr.x = this.params.size;
      };
      _._drawFaceWhenReady = function (name, index = 0) {
        var ref;
        if ((ref = this._faceSpr) != null) {
          ref.clear();
        }
        if (!String.any(name)) {
          return;
        }
        if (index < 0) {
          return;
        }
        this._drawOnReady = { name, index };
        this._faceSourceBitmap = ImageManager.loadFace(name);
        this._faceSourceBitmap.addLoadListener(this._drawFace.bind(this));
        this._drawFace();
      };
      _._drawFace = function () {
        var fh, fw, size, sx, sy;
        if (this._faceSpr == null) {
          return;
        }
        this._faceSpr.clear();
        if (!String.any(this._drawOnReady.name)) {
          return;
        }
        if (KDCore.isMZ()) {
          fw = ImageManager.faceWidth;
          fh = ImageManager.faceHeight;
        } else {
          fw = Window_Base._faceWidth;
          fh = Window_Base._faceHeight;
        }
        size = this.params.size;
        sx = (this._drawOnReady.index % 4) * fw;
        sy = Math.floor(this._drawOnReady.index / 4) * fh;
        this._faceSpr.bitmap.blt(this._faceSourceBitmap, sx, sy, fw, fh, 0, 0, size, size);
      };
    })();
  });

  // ■ END PRIVATE.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    (function () {
      var Sprite_UIGauge;
      Sprite_UIGauge = class Sprite_UIGauge extends KDCore.UI.Sprite_UIElement {
        constructor() {
          super(...arguments);
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true,
            fill: "",
            foreground: "",
            mask: "",
            backColor: "#000000".toCss(),
            backOpacity: 255,
            vertical: false,
            rootImageFolder: null //?optional
          };
        }

        draw() {
          return this.drawGauge(...arguments);
        }

        drawGauge(percent = 1) {
          this._lastValue = percent;
          return this._drawGauge(percent);
        }

        isVertical() {
          return this.params.vertical === true;
        }

      };
      KDCore.UI.Sprite_UIGauge = Sprite_UIGauge;
    })();
    return (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = KDCore.UI.Sprite_UIGauge.prototype;
      //$[OVER]
      _._createContent = function () {
        // * Загружается главное изображение, затем уже все остальные, т.к. нужны размеры
        return this._loadFillImage();
      };
      _._loadFillImage = function () {
        // * Главное изображение, поэтому если не указано, то ничего
        if (this.params.fill.isEmpty()) {
          KDCore.warning('You try create Gauge without fill image');
          return;
        }
        KDCore.Utils.loadImageAsync(this.rootImageFolder(), this.params.fill).then(this._createParts.bind(this));
      };
      // * Получаем изображение заполнения и создаём части (т.к. есть размеры)
      _._createParts = function (fillBitmap) {
        this.fillBitmap = fillBitmap;
        this._createBackground();
        this._createFillLayer();
        this._loadForeground();
        this._loadMask();
        return this._onReady();
      };
      _._createBackground = function () {
        this.background = KDCore.Sprite.FromBitmap(this.fillBitmap.width, this.fillBitmap.height);
        this.background.b().fillAll(this.params.backColor);
        this.background.opacity = this.params.backOpacity;
        return this.add(this.background);
      };
      _._createFillLayer = function () {
        this.fillLayer = KDCore.Sprite.FromBitmap(this.fillBitmap.width, this.fillBitmap.height);
        return this.add(this.fillLayer);
      };
      _._loadForeground = function () {
        var fore;
        if (String.isNullOrEmpty(this.params.foreground)) {
          return;
        }
        fore = KDCore.Sprite.FromImg(this.params.foreground, this.rootImageFolder());
        return this.add(fore);
      };
      _._loadMask = function () {
        var mask;
        if (String.isNullOrEmpty(this.params.mask)) {
          return;
        }
        mask = KDCore.Sprite.FromImg(this.params.mask, this.rootImageFolder());
        this.mask = mask;
        return this.add(mask);
      };
      // * Если что-то было до готовности, нарисовать
      _._onReady = function () {
        this.drawGauge(this._lastValue);
      };
      _._drawGauge = function (percent) {
        if (this.fillLayer == null) {
          return;
        }
        this.fillLayer.clear();
        if (this.isVertical()) {
          return this._drawVerGauge(percent);
        } else {
          return this._drawHorGauge(percent);
        }
      };
      _._drawHorGauge = function (percent) {
        var w;
        w = this.fillBitmap.width * percent;
        return this.fillLayer.b().blt(this.fillBitmap, 0, 0, w, this.fillLayer.height, 0, 0);
      };
      _._drawVerGauge = function (percent) {
        var h, hy;
        h = this.fillBitmap.height * percent;
        hy = this.fillBitmap.height - h;
        this.fillLayer.b().blt(this.fillBitmap, 0, 0, this.fillLayer.width, h, 0, hy);
      };
    })();
  });

  // ■ END PRIVATE.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    (function () {
      var Sprite_UIIcon;
      Sprite_UIIcon = class Sprite_UIIcon extends KDCore.UI.Sprite_UIElement {
        constructor() {
          super(...arguments);
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true,
            index: 0,
            size: 32,
            rootImageFolder: null //?optional
          };
        }

        draw() {
          return this.drawIcon(...arguments);
        }

        drawIcon(index = 0, noSmoth = false) {
          this._lastValue = index;
          return this._drawIcon(index, noSmoth);
        }

      };
      KDCore.UI.Sprite_UIIcon = Sprite_UIIcon;
    })();
    return (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = KDCore.UI.Sprite_UIIcon.prototype;
      //$[OVER]
      _._createContent = function () {
        this._createIcon();
        return this._drawIcon(this.params.index);
      };
      _._createIcon = function () {
        this._icon = KDCore.Sprite.FromBitmap(this.params.size, this.params.size);
        this.add(this._icon);
        return this._onReady();
      };
      _._onReady = function () {
        return this.drawIcon(this._lastValue);
      };
      _._drawIcon = function (index, noSmoth = false) {
        this._icon.clear();
        if (KDCore.SDK.isString(index)) {
          this._drawImageIcon(index, noSmoth);
        } else {
          if (index <= 0) {
            return;
          }
          this._icon.drawIcon(0, 0, index, this.params.size, noSmoth);
        }
      };
      _._drawImageIcon = function (imageName, noSmoth = false) {
        return KDCore.Utils.loadImageAsync(this.rootImageFolder(), imageName).then((bitmap) => {
          return this._icon.drawIcon(0, 0, bitmap, this.params.size, noSmoth);
        });
      };
    })();
  });

  // ■ END PRIVATE.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    (function () {
      var Sprite_UIImage;
      Sprite_UIImage = class Sprite_UIImage extends KDCore.UI.Sprite_UIElement {
        constructor() {
          super(...arguments);
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true,
            image: "",
            rootImageFolder: null //?optional
          };
        }

        draw() {
          return this.drawImage(...arguments);
        }

        drawImage(image) {
          return this._drawImage(image);
        }

      };
      KDCore.UI.Sprite_UIImage = Sprite_UIImage;
    })();
    return (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = KDCore.UI.Sprite_UIImage.prototype;
      //$[OVER]
      _._createContent = function () {
        return this._drawImage(this.params.image);
      };
      _._drawImage = function (image) {
        this._clearImage();
        if (!String.isNullOrEmpty(image)) {
          this._image = KDCore.Sprite.FromImg(image, this.rootImageFolder());
          this.add(this._image);
        }
      };
      _._clearImage = function () {
        if (this._image == null) {
          return;
        }
        this._image.visible = false;
        this.removeChild(this._image);
        return this._image = null;
      };
    })();
  });

  // ■ END PRIVATE.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    (function () {
      var Sprite_UIRect;
      Sprite_UIRect = class Sprite_UIRect extends KDCore.UI.Sprite_UIElement {
        constructor() {
          super(...arguments);
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true,
            size: {
              w: 60,
              h: 20
            },
            fillColor: "#FFFFFF".toCss(),
            fillOpacity: 255,
            borderColor: "#000000".toCss(),
            borderThickness: 1,
            borderOpacity: 255
          };
        }

        draw() {
          return this.fill(...arguments);
        }

        fill(color, opacity = 255) {
          return this._fill(color, opacity);
        }

        drawBorder(color, thickness = 1, opacity = 255) {
          return this._drawBorder(color, thickness, opacity);
        }

      };
      KDCore.UI.Sprite_UIRect = Sprite_UIRect;
    })();
    return (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = KDCore.UI.Sprite_UIRect.prototype;
      //$[OVER]
      _._createContent = function () {
        if (String.any(this.params.fillColor)) {
          this._createFill();
          this.fill(this.params.fillColor, this.params.fillOpacity);
        }
        if (String.any(this.params.borderColor) && this.params.borderThickness > 0) {
          this._createBorder();
          return this.drawBorder(this.params.borderColor, this.params.borderThickness, this.params.borderOpacity);
        }
      };
      _._createFill = function () {
        this._fillSpr = KDCore.Sprite.FromBitmap(this.params.size.w, this.params.size.h);
        return this.addChild(this._fillSpr);
      };
      _._createBorder = function () {
        this._borderSprite = KDCore.Sprite.FromBitmap(this.params.size.w, this.params.size.h);
        return this.addChild(this._borderSprite);
      };
      _._fill = function (color, opacity) {
        if (this._fillSpr == null) {
          return;
        }
        this._fillSpr.fillAll(color);
        this._fillSpr.opacity = opacity;
      };
      _._drawBorder = function (color, thickness, opacity) {
        var b;
        if (this._borderSprite == null) {
          return;
        }
        this._borderSprite.clear();
        b = this._borderSprite.b();
        // * Top line
        b.fillRect(0, 0, b.width, thickness, color);
        // * Bottom line
        b.fillRect(0, b.height - thickness, b.width, thickness, color);
        // * Left line
        b.fillRect(0, 0, thickness, b.height, color);
        // * Right line
        b.fillRect(b.width - thickness, 0, thickness, b.height, color);
        return this._borderSprite.opacity = opacity;
      };
    })();
  });

  // ■ END PRIVATE.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    (function () {    //NUI 1.0
      //rev 11.05.22

      //"type": "legacyText"
      var Sprite_UIText;
      Sprite_UIText = class Sprite_UIText extends KDCore.UI.Sprite_UIElement {
        constructor() {
          super(...arguments);
          if (String.any(this.params.text)) {
            this.drawText(this.params.text);
          }
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true,
            size: {
              width: 60,
              height: 20
            },
            alignment: "center",
            font: {
              face: null,
              size: 18,
              italic: false
            },
            margins: {
              x: 0,
              y: 0
            },
            outline: {
              color: null,
              width: 2
            },
            textColor: "#ffffff",
            shadow: {
              color: "#000",
              opacity: 0,
              margins: {
                x: 1,
                y: 1
              }
            },
            text: ""
          };
        }

        // * For compatibility with old style configurations
        sizeWidth() {
          if (this.params.size.w != null) {
            return this.params.size.w;
          } else {
            if (this.params.size.width != null) {
              this.params.size.w = this.params.size.width;
              return this.params.size.width;
            }
          }
          return 0;
        }

        // * For compatibility with old style configurations
        sizeHeight() {
          if (this.params.size.h != null) {
            return this.params.size.h;
          } else {
            if (this.params.size.height != null) {
              this.params.size.h = this.params.size.height;
              return this.params.size.height;
            }
          }
          return 0;
        }

        realWidth() {
          if (this.isNotHaveBounds()) {
            return 0;
          }
          return this.sizeWidth();
        }

        realHeight() {
          if (this.isNotHaveBounds()) {
            return 0;
          }
          return this.sizeHeight();
        }

        dataBindings() {
          return Object.assign(super.dataBindings(), {
            text: function (v) {
              return this.drawText(v);
            },
            style: function (v) {
              return this.updateStyle(v);
            },
            width: function (v) {
              if (v != null) {
                return this.setSize(v, this.sizeHeight());
              }
            },
            height: function (v) {
              if (v != null) {
                return this.setSize(this.sizeWidth(), v);
              }
            },
            size: function (v) {
              if (v != null) {
                return this.setSize(v.width, v.height);
              }
            },
            textColor: function (v) {
              if (v != null) {
                return this.updateStyle({
                  textColor: v
                });
              }
            },
            fontSize: function (v) {
              if (v != null) {
                return this.updateFontSize(v);
              }
            }
          });
        }

        setSize(w = 60, h = 20) {
          var e;
          try {
            w = this._getValueByStr(w, 'width', this);
            h = this._getValueByStr(h, 'height', this);
            return this.updateStyle({
              size: {
                w: w,
                h: h,
                width: w,
                height: h
              }
            });
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        updateStyle(newStyle) {
          var e;
          try {
            this.params = Object.assign({}, this.params, newStyle);
            this._destroyOldContent();
            this._createContent();
            // * Redraw Text
            return this.drawText(this._lastText || "");
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        updateFontSize(fontSize) {
          var e, font;
          try {
            font = Object.assign({}, this.params.font);
            if (typeof fontSize === "string") {
              fontSize = this._getValueByStr(fontSize, 'height', this);
            }
            font.size = fontSize;
            return this.updateStyle({ font });
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        //?DYNAMIC
        // * Сперва рисуем по готовности, а как загрузился спрайт, меняем
        drawText(text) {
          var e;
          try {
            this.params.text = text;
            return this._drawTextWhenReady(text);
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        // * Сборка текста с учётом формата
        // * Заменить вхождения %1, %2 на значения параметров
        drawTextWithFormat(/*format string, arguments parameters... */) {
          var text;
          text = this._convertFormatedString(...arguments);
          this.drawText(text);
        }

        // * Пишет текст с определённым цветом (один раз)
        drawTextColor(text, colorCss) {
          if (this._textSpr == null) {
            return;
          }
          this._textSpr.b().textColor = colorCss;
          this.drawText(text);
          this._textSpr.b().textColor = this.params.textColor;
        }

      };
      KDCore.UI.Sprite_UIText = Sprite_UIText;
    })();
    return (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = KDCore.UI.Sprite_UIText.prototype;
      _._destroyOldContent = function () {
        var e, ref, ref1;
        try {
          if ((ref = this._shadowSpr) != null) {
            ref.removeFromParent();
          }
          return (ref1 = this._textSpr) != null ? ref1.removeFromParent() : void 0;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      //$[OVER]
      _._createContent = function () {
        if (this.params.shadow != null) {
          this._createShadow();
        }
        return this._createTextSprite();
      };
      _._createTextSprite = function () {
        this._textSpr = KDCore.Sprite.FromParams(this.params);
        this._textSpr.onReady(this._onReady.bind(this));
        return this.add(this._textSpr);
      };
      // * Выполнить по готовности
      _._onReady = function () {
        // * Переключить метод, так как уже готов
        this.drawText = this._drawText;
        // * Написать то что нужно было до готовности (если есть)
        if (this._drawOnReady == null) {
          return;
        }
        this.drawText(this._drawOnReady);
        this._drawOnReady = null;
      };
      _._drawText = function (text) {
        this._lastText = text;
        if (this._textSpr == null) {
          return;
        }
        this._textSpr.clear();
        if (text != null) {
          this._textSpr.drawTextFull(text);
        }
        if (this._shadowSpr != null) {
          this._shadowSpr.clear();
          if (text != null) {
            this._shadowSpr.drawTextFull(text);
          }
        }
      };
      // * Написать текст когда будет готов
      _._drawTextWhenReady = function (text) {
        this._drawOnReady = text;
        return this._drawText(text);
      };

      // * Заменить вхождения %1, %2 на значения параметров
      _._convertFormatedString = function (/*text, args...*/) {
        var e, i, j, ref, text;
        try {
          text = arguments[0];
          for (i = j = 1, ref = arguments.length; (1 <= ref ? j < ref : j > ref); i = 1 <= ref ? ++j : --j) {
            try {
              if (arguments[i] == null) {
                continue;
              }
              text = text.replace("%" + i, arguments[i]);
            } catch (error) {
              e = error;
              KDCore.warning(e);
              text = "[wrong format text input]";
            }
          }
          return text;
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return "[wrong format text input]";
        }
      };
      _._createShadow = function () {
        this._shadowSpr = KDCore.Sprite.FromParams(this.params);
        this._shadowSpr.bitmap.textColor = this.params.shadow.color;
        this._shadowSpr.opacity = this.params.shadow.opacity;
        this._shadowSpr.x += this.params.shadow.margins.x;
        this._shadowSpr.y += this.params.shadow.margins.y;
        return this.add(this._shadowSpr);
      };
    })();
  });

  // ■ END PRIVATE.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    (function () {    //NUI 1.0
      //rev 11.05.22
      var Sprite_UIText2;

      //"type": "text"
      Sprite_UIText2 = class Sprite_UIText2 extends KDCore.UI.Sprite_UIElement {
        constructor(params, userTextStyle) {
          super(params);
          this.userTextStyle = userTextStyle;
          this._applyParameters(params);
          this._createTextSprite();
          if (String.any(this.params.text)) {
            this.drawText(this.params.text);
          }
          return;
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true,
            size: {
              width: 60,
              height: 20
            },
            alignment: "center",
            font: {
              face: null,
              size: 18,
              italic: false,
              bold: false,
              weight: 0 // * 0 - not used
            },
            margins: {
              x: 0,
              y: 0
            },
            outline: {
              color: null,
              width: 2
            },
            textColor: "#FFFFFF",
            shadow: {
              color: "#000",
              opacity: 0,
              margins: {
                x: 1,
                y: 1
              }
            },
            text: "",
            multiline: false,
            verticalCentered: true,
            actualSize: false
          };
        }

        // * For compatibility with old style configurations
        sizeWidth() {
          if (this.isNotHaveBounds()) {
            return 0;
          }
          if ((this._textSpr != null) && this.params.actualSize === true) {
            return this.getMetrics().width;
          }
          if (this.params.size.w != null) {
            return this.params.size.w;
          } else {
            if (this.params.size.width != null) {
              this.params.size.w = this.params.size.width;
              return this.params.size.width;
            }
          }
          return 0;
        }

        // * For compatibility with old style configurations
        sizeHeight() {
          if (this.isNotHaveBounds()) {
            return 0;
          }
          if ((this._textSpr != null) && this.params.actualSize === true) {
            return this.getMetrics().height;
          }
          if (this.params.size.h != null) {
            return this.params.size.h;
          } else {
            if (this.params.size.height != null) {
              this.params.size.h = this.params.size.height;
              return this.params.size.height;
            }
          }
          return 0;
        }

        dataBindings() {
          return Object.assign(super.dataBindings(), {
            text: function (v) {
              return this.drawText(v);
            },
            style: function (v) {
              if (v != null) {
                return this.updateStyle(v);
              }
            },
            width: function (v) {
              if (v != null) {
                return this.setSize(v, this.sizeHeight());
              }
            },
            height: function (v) {
              if (v != null) {
                return this.setSize(this.sizeWidth(), v);
              }
            },
            size: function (v) {
              if (v != null) {
                return this.setSize(v.width, v.height);
              }
            },
            textColor: function (v) {
              if (v != null) {
                return this.updateStyle({
                  textColor: v
                });
              }
            },
            fontSize: function (v) {
              if (v != null) {
                return this.updateFontSize(v);
              }
            }
          });
        }

        realWidth() {
          return this.sizeWidth();
        }

        realHeight() {
          return this.sizeHeight();
        }

        setSize(w = 60, h = 20) {
          var e;
          try {
            w = this._getValueByStr(w, 'width', this);
            h = this._getValueByStr(h, 'height', this);
            return this.updateStyle({
              size: {
                w: w,
                h: h
              }
            });
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        defaultStyle() {
          return {};
        }

        drawText(text) {
          if (text == null) {
            text = "";
          }
          this.params.text = text;
          this._drawText(text);
        }

        // * Сборка текста с учётом формата
        // * Заменить вхождения %1, %2 на значения параметров
        drawTextWithFormat(/*format string, arguments parameters... */) {
          var text;
          text = this._convertFormatedString(...arguments);
          this.drawText(text);
        }

        // * Пишет текст с определённым цветом (один раз)
        drawTextColor(text, colorCss = "#FFF") {
          if (this._textSpr == null) {
            return;
          }
          this.updateStyle({
            textColor: colorCss
          });
          this.drawText(text);
        }

        updateFontSize(fontSize) {
          var e, font;
          try {
            font = Object.assign({}, this.params.font);
            if (typeof fontSize === "string") {
              fontSize = this._getValueByStr(fontSize, 'height', this);
            }
            font.size = fontSize;
            return this.updateStyle({ font });
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        updateStyle(newStyleInOldFormat = {}, newStyleInNewFormat = {}) {
          var e;
          try {
            this.textStyle = this._convertOldStyle(newStyleInOldFormat, newStyleInNewFormat);
            this._textSpr.style = this.textStyle;
            // * Redraw Text
            return this.drawText(this._textSpr.text);
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }

        getMetrics() {
          return PIXI.TextMetrics.measureText(this._textSpr.text, this._textSpr.style);
        }

      };
      KDCore.UI.Sprite_UIText2 = Sprite_UIText2;
    })();
    return (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = KDCore.UI.Sprite_UIText2.prototype;
      _._applyParameters = function (params) {
        var e;
        try {
          return this.textStyle = this._convertOldStyle(params, {});
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._convertOldStyle = function (params = {}, style = {}) {
        var _textStyle, color, e, margins, opacity;
        try {
          this.params = Object.assign({}, this.params, params);
          _textStyle = Object.assign({}, this.defaultStyle(), this.userTextStyle, style);
          if (String.any(this.params.font.face)) {
            _textStyle.fontFamily = this.params.font.face;
          }
          _textStyle.fontSize = this.params.font.size;
          if (this.params.font.italic === true) {
            _textStyle.fontStyle = 'italic';
          }
          if (this.params.font.bold === true) {
            _textStyle.fontWeight = 'bold';
          }
          if ((this.params.font.weight != null) && this.params.font.weight > 0) {
            _textStyle.fontWeight = this.params.font.weight;
          }
          if (String.any(this.params.outline.color) && this.params.outline.width > 0) {
            _textStyle.stroke = this.params.outline.color;
            _textStyle.strokeThickness = this.params.outline.width;
          }
          _textStyle.fill = this.params.textColor;
          if ((this.params.shadow != null) && this.params.shadow.opacity > 0) {
            ({ color, opacity, margins } = this.params.shadow);
            _textStyle.dropShadow = true;
            _textStyle.dropShadowAngle = margins.y;
            _textStyle.dropShadowColor = color;
            _textStyle.dropShadowDistance = margins.x;
            _textStyle.dropShadowAlpha = opacity / 255.0;
          }
          if (this.params.multiline === true) {
            _textStyle.align = this.params.alignment || 'left';
            _textStyle.wordWrap = true;
            if (this.params.font.size != null) {
              _textStyle.lineHeight = this.params.font.size + 2;
            }
            if (this.sizeWidth() > 0) {
              _textStyle.wordWrapWidth = this.sizeWidth();
            }
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return _textStyle;
      };
      _._createTextSprite = function () {
        var style;
        style = new PIXI.TextStyle(this.textStyle);
        this._textSpr = new PIXI.Text('', style);
        this.add(this._textSpr);
        if (this._needToDrawText != null) {
          this.draw(this._needToDrawText);
          this._needToDrawText = null;
        }
      };
      _._drawText = function (text) {
        var e, h, height, maxLineWidth, textMetrics, w;
        if (this._textSpr == null) {
          this._needToDrawText = text;
          return;
        }
        this._textSpr.text = text;
        if (this.params.size.height != null) {
          this.params.size.h = this.params.size.height;
        }
        if (this.params.size.width != null) {
          this.params.size.w = this.params.size.width;
        }
        ({ w, h } = this.params.size);
        try {
          if (typeof text !== "string") {
            text = String(text);
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
          text = "[wrong text input]";
        }
        textMetrics = PIXI.TextMetrics.measureText(text, this._textSpr.style);
        ({ height, maxLineWidth } = textMetrics);
        if (this.params.verticalCentered === true) {
          this._textSpr.y = (h - height) / 2;
        } else {
          this._textSpr.y = 0;
        }
        if (this.params.alignment === 'center') {
          this._textSpr.x = (w - maxLineWidth) / 2;
        } else if (this.params.alignment === 'right') {
          this._textSpr.x = w - maxLineWidth;
        } else {
          this._textSpr.x = 0;
        }
        this._textSpr.x += this.params.margins.x;
        this._textSpr.y += this.params.margins.y;
      };
      // * Заменить вхождения %1, %2 на значения параметров
      _._convertFormatedString = function (/*text, args...*/) {
        var e, i, j, ref, text;
        try {
          text = arguments[0];
          for (i = j = 1, ref = arguments.length; (1 <= ref ? j < ref : j > ref); i = 1 <= ref ? ++j : --j) {
            try {
              if (arguments[i] == null) {
                continue;
              }
              text = text.replace("%" + i, arguments[i]);
            } catch (error) {
              e = error;
              KDCore.warning(e);
              text = "[wrong format text input]";
            }
          }
          return text;
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return "[wrong format text input]";
        }
      };
    })();
  });

  // ■ END PRIVATE.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    (function () {    //TODO: NOT USED IN NUI 1.0
      //NUI 1.X !#!
      //rev 03.05.22

      //"type": "textExt"
      var Sprite_UITextExt;
      Sprite_UITextExt = class Sprite_UITextExt extends KDCore.UI.Sprite_UIText {
        constructor() {
          super(...arguments);
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true,
            size: {
              width: 200,
              height: 60
            },
            font: {
              face: null,
              size: 14,
              italic: false
            },
            margins: {
              x: 0,
              y: 0
            },
            // * новые параметры (KDCore 2.7)
            //?null могут быть
            singleLine: false,
            forceCentered: false
          };
        }

        //$[OVER]
        // * Данный метод не поддерживается, так как тут основа не Sprite, а Window
        drawTextColor() {
          return this.drawText(...arguments);
        }

      };
      KDCore.UI.Sprite_UITextExt = Sprite_UITextExt;
    })();
    return (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = KDCore.UI.Sprite_UITextExt.prototype;
      //$[OVER]
      _._destroyOldContent = function () {
        var e;
        try {
          if (this._textSpr == null) {
            return;
          }
          return this.removeChild(this._textSpr);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      //$[OVER]
      _._createTextSprite = function () {
        var rect;
        rect = new Rectangle(0, 0, this.sizeWidth(), this.sizeHeight());
        this._textSpr = new KDCore.Window_ExtTextLineBase(rect, this.params.font, this.params);
        this._textSpr.x = this.params.margins.x || 0;
        this._textSpr.y = this.params.margins.y || 0;
        this.add(this._textSpr);
        // * На следующий кадр, чтобы не было потери текста (опасно)
        setTimeout((() => {
          var e;
          try {
            return this._onReady();
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }), 10);
        this._onReady(); // * Сразу
      };

      //$[OVER]
      _._drawText = function (text) {
        this._lastText = text;
        if (this._textSpr == null) {
          return;
        }
        this._textSpr.contents.clear();
        if (this.params.forceCentered === true) {
          this._textSpr.drawTextExInCenter(text, 0, 0, this._textSpr.width, this._textSpr.height);
        } else {
          if (this.params.singleLine === true) {
            this._textSpr.drawTextEx(text, 0, 0, this._textSpr.width);
          } else {
            // * По умолчанию
            this._textSpr.drawTextExWithWordWrap(text, 0, 0, this._textSpr.width);
          }
        }
      };
    })();
  });

  // ■ END PRIVATE.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    (function () {
      var Sprite_UITextWithBack;
      Sprite_UITextWithBack = class Sprite_UITextWithBack extends KDCore.UI.Sprite_UIElement {
        constructor() {
          super(...arguments);
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true,
            text: {
              visible: true,
              size: {
                w: 60,
                h: 20
              },
              alignment: "center",
              font: {
                face: null,
                size: 18,
                italic: false
              },
              margins: {
                x: 0,
                y: 0
              },
              outline: {
                color: null,
                width: 2
              },
              textColor: "#000000".toCss()
            },
            rect: {
              visible: true,
              size: {
                w: 60,
                h: 20
              },
              fillColor: "#FFFFFF".toCss(),
              fillOpacity: 255,
              borderColor: "#000000".toCss(),
              borderThickness: 1,
              borderOpacity: 255
            },
            textMargins: {
              x: 0,
              y: 0
            }
          };
        }

        draw() {
          return this.drawText(...arguments);
        }

        // * Aргументы смотри в Sprite_UIText
        drawText() {
          return this.text.draw(...arguments);
        }

        drawTextColor() {
          return this.text.drawTextColor(...arguments);
        }

        // * Аргументы смотри в Sprite_UIRect
        fill() {
          return this.rect.fill(...arguments);
        }

        drawBorder() {
          return this.rect.drawBorder(...arguments);
        }

        //$[OVER]
        isUnderMouse() {
          return this.rect.isUnderMouse();
        }

      };
      KDCore.UI.Sprite_UITextWithBack = Sprite_UITextWithBack;
    })();
    return (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = KDCore.UI.Sprite_UITextWithBack.prototype;
      //$[OVER]
      _._createContent = function () {
        this._createRect();
        return this._createText();
      };
      _._createRect = function () {
        this.rect = new KDCore.UI.Sprite_UIRect(this.params.rect);
        return this.addChild(this.rect);
      };
      _._createText = function () {
        var x, y;
        this.text = new KDCore.UI.Sprite_UIText(this.params.text);
        ({ x, y } = this.params.textMargins);
        this.text.move(x, y);
        return this.addChild(this.text);
      };
    })();
  });

  // ■ END PRIVATE.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    (function () {
      var Sprite_UIColorGauge;
      Sprite_UIColorGauge = class Sprite_UIColorGauge extends KDCore.UI.Sprite_UIGauge {
        constructor() {
          super(...arguments);
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true,
            size: {
              w: 100,
              h: 40
            },
            fill: "#FFFFFF", // * В отличии от Gauge, тут цвет, а не картинка
            foreground: "", // картинка
            mask: "", // картинка
            backColor: "#000000".toCss(),
            backOpacity: 255,
            vertical: false,
            rootImageFolder: null //?optional
          };
        }

      };
      KDCore.UI.Sprite_UIColorGauge = Sprite_UIColorGauge;
    })();
    return (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = KDCore.UI.Sprite_UIColorGauge.prototype;
      //$[OVER]
      // * Заместо изображения используем простой Bitmap с заливкой цвета
      _._loadFillImage = function () {
        var fillBitmap;
        fillBitmap = new Bitmap(this.params.size.w, this.params.size.h);
        fillBitmap.fillAll(this.params.fill);
        this._createParts(fillBitmap);
      };
    })();
  });

  // ■ END PRIVATE.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    (function () {    // * Данный UI Элемент является только контейнером
      // * Он ничего не рисует, нужно добавлять в него
      // * контент методом addContent

      //rev 17.11.22
      var Sprite_UITooltip;
      Sprite_UITooltip = class Sprite_UITooltip extends KDCore.UI.Sprite_UIElement {
        constructor() {
          super(...arguments);
          this.opacity = 0;
        }

        isTooltipActive() {
          return (this._opThread != null) || (this._opChanger != null) || this.opacity > 0;
        }

        activateTooltip(x, y, parent) {
          if (this.isTooltipActive()) {
            return;
          }
          this.deactivateTooltip();
          this.move(x, y);
          this._opThread = new KDCore.TimedUpdate(this.params.delay, this.showTooltip.bind(this));
          if (!this.params.isGlobal && (parent != null)) {
            parent.addChild(this);
          } else {
            // * Always on Top on Scene  (if Global)
            SceneManager._scene.addChild(this);
          }
        }

        deactivateTooltip() {
          this._opThread = null;
          this._opChanger = null;
          return this.opacity = 0;
        }

        showTooltip() {
          this._opThread = null;
          this.appear(this.params.opacityChangeStep);
          if (this.params.cursorRelative === true) {
            return this.toCursor();
          }
        }

        update() {
          var ref;
          super.update();
          if ((ref = this._opThread) != null) {
            ref.update();
          }
          if (this.isTooltipActive() && this.params.cursorRelative === true) {
            return this.toCursor();
          }
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true,
            delay: 30,
            opacityChangeStep: 35,
            margins: {
              x: 8,
              y: 8
            },
            isGlobal: true,
            cursorRelative: true
          };
        }

        toCursor() {
          var x, y;
          ({ x, y } = this.params.margins);
          return this.move(TouchInput.x + x, TouchInput.y + y);
        }

        // * Основной метод, нужно добавить контент
        addContent(content) {
          return this.add(content);
        }

      };
      KDCore.UI.Sprite_UITooltip = Sprite_UITooltip;
    })();
    return (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = KDCore.UI.Sprite_UITooltip.prototype;
    })();
  });

  // ■ END PRIVATE.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var ALIAS__processEscapeCharacter, _;
    //@[DEFINES]
    _ = Window_Base.prototype;
    //@[ALIAS]
    ALIAS__processEscapeCharacter = _.processEscapeCharacter;
    _.processEscapeCharacter = function (code, textState) {
      switch (code) {
        case 'CHEX':
          this.pProcessColorChangeHex(this.pObtainEscapeParamHexColor(textState));
          break;
        case 'ISZ':
          this.pProcessDrawIconSized(this.pObtainEscapeParamIconArr(textState), textState);
          break;
        case 'PSZ':
          this.pProcessDrawPictureSized(this.pObtainEscapeParamImgArr(textState), textState, false);
          break;
        case 'PSB':
          this.pProcessDrawPictureSized(this.pObtainEscapeParamImgArr(textState), textState, true);
          break;
        default:
          ALIAS__processEscapeCharacter.call(this, code, textState);
      }
    };
    //?NEW
    _.pObtainEscapeParamHexColor = function (textState) {
      var arr, regExp, textPart;
      regExp = /^\[(#?([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})\]/;
      textPart = textState.text.slice(textState.index);
      arr = regExp.exec(textPart);
      if (arr != null) {
        textState.index += arr[0].length;
        return arr[1];
      } else {
        return "";
      }
    };
    //?NEW
    _.pObtainEscapeParamIconArr = function (textState) {
      var arr, params, regExp, textPart;
      regExp = /^\[(\d+,\s*\d+,\s*-?\d+,\s*-?\d+)\]/;
      textPart = textState.text.slice(textState.index);
      arr = regExp.exec(textPart);
      if (arr != null) {
        textState.index += arr[0].length;
        if (arr[1] != null) {
          params = arr[1].split(",").map(function (i) {
            return parseInt(i.trim());
          });
          return params;
        }
      }
      return [];
    };
    //?NEW
    _.pObtainEscapeParamImgArr = function (textState) {
      var arr, params, regExp, textPart;
      regExp = /^\[(\w+,\s*\d+,\s*\d+,\s*-?\d+,\s*-?\d+)\]/;
      textPart = textState.text.slice(textState.index);
      arr = regExp.exec(textPart);
      if (arr != null) {
        textState.index += arr[0].length;
        if (arr[1] != null) {
          params = arr[1].split(",").map(function (i) {
            if (isFinite(i)) {
              return parseInt(i.trim());
            } else {
              return i;
            }
          });
          return params;
        }
      }
      return [];
    };
    //?NEW
    _.pProcessColorChangeHex = function (colorHex) {
      var e;
      try {
        this.changeTextColor(colorHex);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        this.resetTextColor();
      }
    };
    //?NEW
    //?params: [INDEX, SIZE, DX, DY]
    _.pProcessDrawIconSized = function (params, textState) {
      var dx, dy, e, iconIndex, size, staticMargin, x, y;
      try {
        if (params == null) {
          return;
        }
        if (params.isEmpty()) {
          return;
        }
        size = params[1];
        if (params[1] == null) {
          if (KDCore.isMZ()) {
            size = ImageManager.iconWidth;
          } else {
            size = Window_Base._iconWidth;
          }
        }
        if (params[2] == null) {
          params[2] = 0;
        }
        if (params[3] == null) {
          params[3] = 0;
        }
        iconIndex = params[0];
        dx = params[2];
        dy = params[3];
        staticMargin = 2;
        x = textState.x + staticMargin + dx;
        y = textState.y + staticMargin + dy;
        if (KDCore.isMZ()) {
          if (textState.drawing === true) {
            // * Только в режиме рисования
            this.contents.drawIcon(x, y, iconIndex, size);
          }
        } else {
          this.contents.drawIcon(x, y, iconIndex, size);
        }
        textState.x += size + (staticMargin * 2) + dx;
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
    };
    //?NEW
    //?params: [NAME, W, H, DX, DY]
    _.pProcessDrawPictureSized = function (params, textState, isUnderText = false) {
      var drawBitmap, drawProcess, e, height, name, source, width, x, y;
      try {
        if (params == null) {
          return;
        }
        if (params.isEmpty()) {
          return;
        }
        name = params[0];
        if (!String.any(name)) {
          return;
        }
        width = params[1];
        height = params[2];
        if (params[3] == null) {
          params[3] = 0;
        }
        if (params[4] == null) {
          params[4] = 0;
        }
        x = textState.x + 2 + params[3];
        y = textState.y + 2 + params[4];
        drawBitmap = this.contents;
        source = this.pGetSourceImageForDrawPictureSized(name);
        if ((KDCore.isMZ() && textState.drawing === true) || KDCore.isMV()) {
          drawProcess = function () {
            var e;
            try {
              if (drawBitmap == null) {
                return;
              }
              return drawBitmap.drawOnMe(source, x, y, width, height);
            } catch (error) {
              e = error;
              return KDCore.warning(e);
            }
          };
          source.addLoadListener(drawProcess);
        }
        if (isUnderText !== true) {
          // * Вариант, что текст не будет "перескакивать" за ширину картинки а пойдёт поверх (т.е. фоновая картинка)
          // * Если картине не preload, то может "вылезти" на текст потом, так как рисоваться будет позже
          textState.x += width + 4 + params[3];
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
    };
    // * Данный метод вынесен отдельно, чтобы можно было переопределять папки
    return _.pGetSourceImageForDrawPictureSized = function (name) {
      return ImageManager.loadPicture(name);
    };
  });


  // Generated by CoffeeScript 2.6.1



  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var FloatingWindow;

    // * Общий класс для всех окон на карте
    /*parameters
        {
            draggable: true,
            closeButton: true,
            moveToCenter: true,
            alwaysOnTop: true,
            header: true
        }
    */
    FloatingWindow = class FloatingWindow extends KDCore.Sprite {
      constructor(mainParent, windowW, windowH, parameters) {
        super();
        this.mainParent = mainParent;
        this.windowW = windowW;
        this.windowH = windowH;
        this.parameters = parameters;
        this._init();
        return;
      }

      static StaticSettings() {
        return {
          draggable: false,
          closeButton: false,
          moveToCenter: false,
          alwaysOnTop: false,
          header: false
        };
      }

      // * Статическое окно с дочерним
      static StaticWindow(parent, sub) {
        var p, w;
        p = KDCore.FloatingWindow.StaticSettings();
        w = new KDCore.FloatingWindow(parent, sub.width, sub.height, p);
        w.setSubWindow(sub);
        w.open();
        return w;
      }

      isActive() {
        return this.visible === true;
      }

      isReady() {
        return this._isReady === true;
      }

      isMouseIn() {
        return this.inPosition(TouchInput);
      }

      isOpen() {
        return this.isActive();
      }

      // * Дочернее окно (если есть)
      sub() {
        return this._subw;
      }

      setOnReadyHandler(_readyHandler) {
        this._readyHandler = _readyHandler;
        if ((this._readyHandler != null) && this._isReady === true) {
          return this._readyHandler();
        }
      }

      isDraggable() {
        return this._isDraggable === true && (this._headerSpr != null) && this._headerSpr.visible === true && this.isOpen();
      }

      setCloseHandler(_closeHandler) {
        this._closeHandler = _closeHandler;
      }

      callCloseHandler() {
        if (this._closeHandler != null) {
          return this._closeHandler();
        }
      }

      setDraggingHandler(_dragHandler) {
        this._dragHandler = _dragHandler;
      }

      setDragEndHandler(_dragEndHandler) {
        this._dragEndHandler = _dragEndHandler;
      }

      hideHeader() { } //TODO:

      hideCloseButton() { } //TODO:


      // * Сдвиг заголовка по X, чтобы рамку не задевал
      headerMarginX() {
        return 2;
      }

      // * Сдвиг заголовка по Y, чтобы рамку не задевал
      headerMarginY() {
        return 0;
      }

      // * Стандартная позиция кнопки "закрыть"
      closeButtonPosition() {
        return {
          x: this.width - 24,
          y: 4
        };
      }

      open() {
        if (this.isOpen()) {
          return;
        }
        this._open();
        this._afterOpen();
      }

      close() {
        if (!this.isOpen()) {
          return;
        }
        this._close();
        this._afterClose();
      }

      rootImageFolder() {
        return "Alpha/Windows";
      }

      update() {
        super.update();
        this._updateMouseCheckThread();
        this._updateDragging();
      }

      // * Добавить спрайт на специальный слой контента
      addContent(sprite) {
        return this._contentLayer.addChild(sprite);
      }

      // * Добавить дочернее окно
      setSubWindow(w) {
        this._subw = w;
        this.addContent(w);
      }

      destroy() {
        this._close();
        return Sprite.prototype.destroy.call(this);
      }

    };
    (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ PRIVATE.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;
      //@[DEFINES]
      _ = FloatingWindow.prototype;
      _._init = function () {
        var ref;
        // * Окно всегда закрыто
        this.visible = false;
        // * Контент прогрузился?
        this._isReady = false;
        this._applyParameters();
        if (this._isAlwaysOnTop === false) {
          // * Если не всегда поверх окон, то добавляем сразу к родителю (один раз)
          if ((ref = this.mainParent) != null) {
            ref.addChild(this);
          }
        }
        this._initFloatingSystem();
        this._createLayers();
        this._loadWindowFrame();
      };
      // * Тут ничего не создавать, не двигать, так как
      // * конент создаётся Async, см. метод _createCustomElements
      _._applyParameters = function () {
        var p;
        this._applyDefaults();
        if (this.parameters == null) {
          return;
        }
        p = this.parameters;
        if (p.draggable != null) {
          this._isDraggable = p.draggable;
        }
        if (p.moveToCenter != null) {
          this._isMoveToCenter = p.moveToCenter;
        }
        if (p.header != null) {
          this._isHeaderVisible = p.header;
        }
        if (p.closeButton != null) {
          this._isHaveCloseButton = p.closeButton;
        }
        if (p.alwaysOnTop != null) {
          this._isAlwaysOnTop = p.alwaysOnTop;
        }
      };
      _._applyDefaults = function () {
        // * Окно можно перетаскивать мышкой (по умолчанию - да)
        this._isDraggable = true;
        this._isMoveToCenter = true;
        this._isHeaderVisible = true;
        this._isHaveCloseButton = true;
        this._isAlwaysOnTop = true;
      };
      _._initFloatingSystem = function () {
        if ($gameTemp._floatingWindows == null) {
          // * Создаём массив окон, он нужен для правильного
          // закрытия окон (по очереди) и перемещения drag and drop
          // с учётом верхнего окна
          $gameTemp._floatingWindows = [];
        }
        // * Вспомогательная переменная, чтобы не вызывать методы каждый кадр
        this._mouseIn = false;
        // * Тоже вспомогательная переменная
        this._dragging = false;
      };
      _._moveToStartPosition = function () {
        if (this._isMoveToCenter === true) {
          return this.moveToCenter(Graphics.width / 2, Graphics.height / 2);
        }
      };
      _._closeButtonClick = function () {
        // * При исчезании, кнопка не успевает себя "удалить"
        $gameTemp.kdButtonUnderMouse = null;
        this.callCloseHandler();
        return this.close();
      };
      (function () {      // * DRAGGING
        // -----------------------------------------------------------------------
        _._updateDragging = function () {
          if (!this.isDraggable()) {
            return;
          }
          // * Если мы уже двигаем окно, но мышка вышла за границы, то можно дальше двигать
          // * Только если мышка не в окне и не двигали ранее, то не проверяем
          if (this._mouseIn === false && this._dragging === false) {
            return;
          }
          // * Если существует объект который сейчас dragging
          if ($gameTemp.pkdDraggableInstance != null) {
            // * Если этот объект не этот объект, то выходим из метода
            if ($gameTemp.pkdDraggableInstance !== this) {
              return;
            }
          }
          if (TouchInput.isLongPressed()) {
            if (this._dragging === false) {
              this._onDragStart();
            } else {
              this._onDragging();
            }
          } else {
            this._stopDragging();
          }
        };
        _._onDragStart = function () {
          // * Проверка, в области Header или нет
          if (!this._isMouseInHeader()) {
            return;
          }
          // * Разница в координатах курсора и объекта, чтобы убрать эффект "прыжка"
          this.opacity = 200;
          this._deltaXY = this.getDeltaXY();
          this._dragging = true;
          // * Устанавливаем глобальную ссылку на объект перемещения
          $gameTemp.pkdDraggableInstance = this;
        };
        _.getDeltaXY = function () {
          var p;
          p = new KDCore.Point(this.x, this.y);
          return p.delta(TouchInput);
        };
        _._onDragging = function () {
          // * Защита от перетаскивания за края экрана
          if (!this._isNewMousePositionOnScreen()) {
            return;
          }
          this.move(TouchInput.x - this._deltaXY.x, TouchInput.y - this._deltaXY.y);
          if (this._dragHandler != null) {
            return this._dragHandler();
          }
        };
        _._stopDragging = function () {
          if (this._dragging === true) {
            this._dragging = false;
            this.opacity = 255;
            this._clearDraggableGlocalInstance();
            if (this._dragEndHandler != null) {
              this._dragEndHandler();
            }
          }
        };
        // * Освобождаем глобальную ссылку
        _._clearDraggableGlocalInstance = function () {
          if ($gameTemp.pkdDraggableInstance === this) {
            return $gameTemp.pkdDraggableInstance = null;
          }
        };
        _._isMouseInHeader = function () {
          if (this._headerSpr == null) {
            return false;
          }
          return this._headerSpr.isContainsPoint(TouchInput);
        };
        _._isNewMousePositionOnScreen = function () {
          return KDCore.Utils.isPointInScreen(TouchInput, 10);
        };
      })();
      (function () {      // -----------------------------------------------------------------------

        // * CREATE ELEMENTS
        // -----------------------------------------------------------------------

        // * Слои нужны, так как изображения загружаються асинхронно
        _._createLayers = function () {
          this._mainLayer = new Sprite();
          this._contentLayer = new Sprite();
          this._headerLayer = new Sprite();
          this._closeButtonLayer = new Sprite();
          this.addChild(this._mainLayer);
          this.addChild(this._contentLayer);
          this.addChild(this._headerLayer);
          this.addChild(this._closeButtonLayer);
        };
        _._loadWindowFrame = function () {
          return KDCore.Utils.loadImageAsync(this.rootImageFolder(), "windowFrame").then(this._createWindow.bind(this));
        };
        _._createWindow = function (frameImage) {
          this.bitmap = new Bitmap(this.windowW, this.windowH);
          this.wFrame = new KDCore.Sprite_TilingFrame(this.windowW, this.windowH, frameImage);
          this._mainLayer.addChild(this.wFrame);
          this._createParts();
        };
        _._createParts = function () {
          this._loadHeader();
          if (this._isHaveCloseButton === true) {
            this._createCloseButton();
          }
          this._moveToStartPosition();
          this._createCustomElements();
          // * Окно готово
          this._isReady = true;
          if (this._readyHandler != null) {
            this._readyHandler();
          }
        };
        _._loadHeader = function () {
          return KDCore.Utils.loadImageAsync(this.rootImageFolder(), "headerLine").then(this._createHeader.bind(this));
        };
        _._createHeader = function (headerLineImage) {
          var w;
          w = this.windowW - (this.headerMarginX() * 2);
          this._headerSpr = new KDCore.Sprite_TilingLine(w, headerLineImage.height, headerLineImage);
          this._headerSpr.x = this.headerMarginX();
          this._headerSpr.y = this.headerMarginY();
          this._headerLayer.addChild(this._headerSpr);
          if (this._isHeaderVisible === true) {
            // * Сдвигаем контент, чтобы было начало под заголовком
            this._contentLayer.y += headerLineImage.height + this.headerMarginY();
          } else {
            this._headerSpr.visible = false;
          }
        };
        _._createCloseButton = function () {
          this._closeButton = new KDCore.ButtonM("windowCloseButton", false, this.rootImageFolder());
          this._closeButtonLayer.addChild(this._closeButton);
          this._closeButton.move(this.closeButtonPosition());
          this._closeButton.addClickHandler(this._closeButtonClick.bind(this));
        };
        //%[FOR CHILDRENS]
        // * Наследники создают свои элементы в этом методе
        // * Есть специальный метод addContent()
        _._createCustomElements = function () { }; // * EMPTY
      })();
      (function () {      // -----------------------------------------------------------------------

        // * MOUSE
        // -----------------------------------------------------------------------

        // * Определение если мышка в области окна
        //TODO: Есть проблема при открытии окна сразу под курсором
        _._registerMouseInOut = function () {
          if (!this.isOpen()) {
            return;
          }
          if (this.isMouseIn()) {
            if (this._mouseIn === false) {
              this._mouseIn = true;
              this._onMouseIn();
            }
          } else {
            if (this._mouseIn === true) {
              this._mouseIn = false;
              this._onMouseOut();
            }
          }
        };
        // * Используется похожая система что и в KDCore.ButtonM
        _._onMouseIn = function () {
          return $gameTemp.floatingWindowUnderMouse = this;
        };
        _._onMouseOut = function () {
          if ($gameTemp.floatingWindowUnderMouse === this) {
            return $gameTemp.floatingWindowUnderMouse = null;
          }
        };
        // * Будем проверять мышка ли в окне только при открытом окне
        _._createMouseCheckThread = function () {
          this._mouseCheckThread = new KDCore.TimedUpdate(1, this._registerMouseInOut.bind(this));
          this._updateMouseCheckThread = () => {
            return this._mouseCheckThread.update();
          };
          return this._mouseCheckThread.call();
        };
        // * Когда окно закрывается, никаких проверок, обнуляем метод
        _._destroyMouseCheckThread = function () {
          this._mouseCheckThread = null;
          return this._updateMouseCheckThread = function () { };
        };
        //?DYNAMIC
        _._updateMouseCheckThread = function () { }; // * EMPTY
      })();
      (function () {      // -----------------------------------------------------------------------

        // * OPEN OR CLOSE
        // -----------------------------------------------------------------------
        _._open = function () {
          var ref, ref1;
          this.visible = true;
          if ((ref = $gameTemp._floatingWindows) != null) {
            ref.push(this);
          }
          if (this._isAlwaysOnTop === true) {
            // * Окно, которое открывается, всегда снова выше остальных (опция)
            if ((ref1 = this.mainParent) != null) {
              ref1.addChild(this);
            }
          }
          return this._createMouseCheckThread();
        };
        _._afterOpen = function () { }; // * EMPTY
        _._close = function () {
          this.visible = false;
          if (this._isAlwaysOnTop === true) {
            this.removeFromParent();
          }
          this._clearDraggableGlocalInstance();
          $gameTemp._floatingWindows.delete(this);
          this._onMouseOut();
          return this._destroyMouseCheckThread();
        };
        _._afterClose = function () { }; // * EMPTY
      })();
    })();
    (function () {    // ■ END PRIVATE.coffee
      //---------------------------------------------------------------------------

      // * Если окно под курсором, нельзя нажимать на карте для движения игрока
      // -----------------------------------------------------------------------
      (function () {      //╒═════════════════════════════════════════════════════════════════════════╛
        // ■ Scene_Map.coffee
        //╒═════════════════════════════════════════════════════════════════════════╛
        //---------------------------------------------------------------------------
        var ALIAS__isAnyButtonPressed, ALIAS__processMapTouch, _;

        //@[DEFINES]
        _ = Scene_Map.prototype;
        if (KDCore.isMZ()) {
          //@[ALIAS]
          ALIAS__isAnyButtonPressed = _.isAnyButtonPressed;
          _.isAnyButtonPressed = function () {
            if ($gameTemp.floatingWindowUnderMouse != null) {
              return true;
            } else {
              return ALIAS__isAnyButtonPressed.call(this);
            }
          };
        } else {
          //@[ALIAS]
          ALIAS__processMapTouch = _.processMapTouch;
          _.processMapTouch = function () {
            if ($gameTemp.floatingWindowUnderMouse != null) {
              return;
            }
            return ALIAS__processMapTouch.call(this);
          };
        }
      })();
    })();
    //@[EXTEND]
    // ■ END Scene_Map.coffee
    //---------------------------------------------------------------------------
    return KDCore.FloatingWindow = FloatingWindow;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var HUI;
    // * Html UI Manager
    // * Набор инструментов для работы с HTML элементами интерфейса
    HUI = function () { };
    (function () {
      var _;
      //@[DEFINES]
      _ = HUI;
      _.init = function () {
        // * Данный набор инструментов могут использовать многие плагины, поэтому проверка
        if (this.isInited()) {
          return;
        }
        this._createMainParentInHtml();
        this._extendGraphicsClass();
        this.refresh();
      };
      // * Был ли создан (инициализирован) основной элемент
      _.isInited = function () {
        return this.parent() != null;
      };
      // * Основной элемент родитель для всех элементов UI
      _.parent = function () {
        return this._parent;
      };
      _.refresh = function () {
        if (!this.isInited()) {
          return;
        }
        Graphics._centerElement(this._parent);
        this._parent.style.zIndex = 2;
        this._parent.style.width = Graphics._canvas.style.width;
        this._parent.style.height = Graphics._canvas.style.height;
      };
      _.initReactComponents = function (withBabel = true) {
        var e;
        try {
          if (withBabel) {
            this._loadBabel();
          }
          return this._loadReact();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._loadBabel = function () {
        var e;
        try {
          return this._loadScript('https://unpkg.com/babel-standalone@6/babel.min.js');
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._loadReact = function () {
        var e;
        try {
          this._loadScript('https://unpkg.com/react@18/umd/react.production.min.js');
          return this._loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js');
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._loadScript = function (src, isReact = false) {
        var e, script;
        try {
          script = document.createElement("script");
          if (isReact === true) {
            script.type = "text/babel";
          } else {
            script.type = "text/javascript";
            script.crossorigin = true;
          }
          script.src = src;
          script.async = false;
          script.defer = true;
          script.onerror = function (e) {
            KDCore.warning('HUI: Failed to load script');
            return KDCore.warning(e);
          };
          document.body.appendChild(script);
          if (isReact === true) {
            return window.dispatchEvent(new Event('DOMContentLoaded'));
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _.loadReactComponent = function (componentName, folder = 'data/uiComponents') {
        var e, src;
        try {
          src = folder + "/" + componentName + ".js";
          return this._loadScript(src, true);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _.addReactComponent = function (componentName, props, uniqueId = null) {
        var e, element, reactElement, root;
        try {
          if (window[componentName] == null) {
            KDCore.warning("Cant find " + componentName + ", make sure to load it first");
            return null;
          }
          if (uniqueId == null) {
            uniqueId = componentName;
          }
          // * Создаём отдельный DIV для каждого элемента (чтобы можно было удалять)
          element = this._getElementForReactComponent(uniqueId);
          root = ReactDOM.createRoot(element);
          reactElement = React.createElement(window[componentName], props);
          root.render(reactElement);
          return KDCore.HUI.getElement(uniqueId);
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return null;
        }
      };
      // * Simple React Component (without JSX!)
      _.loadReactComponentFromFile = function (filename, props, uniqueId, handler, folder = "data/uiComponents") {
        var e, url, xhr;
        try {
          xhr = new XMLHttpRequest();
          url = folder + "/" + filename + ".js";
          xhr.open("GET", url);
          xhr.overrideMimeType("plain/text");
          xhr.onload = function () {
            var e, element;
            eval(xhr.responseText);
            element = KDCore.HUI.addReactComponent(filename, props, uniqueId);
            try {
              if (handler != null) {
                return handler(element, filename);
              }
            } catch (error) {
              e = error;
              return KDCore.warning(e);
            }
          };
          return xhr.send();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._getElementForReactComponent = function (componentId) {
        var e, element;
        try {
          this.removeElementById(componentId);
          element = this.addElement(componentId, '', null);
          return element;
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return null;
      };
      _.loadElementFromFile = function (filename, handler, folder = "data/uiComponents") {
        var e, url, xhr;
        try {
          xhr = new XMLHttpRequest();
          url = folder + "/" + filename + ".html";
          xhr.open("GET", url);
          xhr.overrideMimeType("plain/text");
          xhr.onload = function () {
            var e, element, htmlElementText;
            // * Хотел отдельные данные передавать и заменять в HTML текст
            // * Но если у нас есть React компоненты, то это не надо
            //htmlElementText = @convertDataKeys(xhr.responseText, dataKeys)
            htmlElementText = xhr.responseText;
            element = KDCore.HUI.addElement(filename, htmlElementText, null);
            try {
              if (handler != null) {
                return handler(element, filename);
              }
            } catch (error) {
              e = error;
              return KDCore.warning(e);
            }
          };
          return xhr.send();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _.addCSS = function (name, folder = "css") {
        var head;
        if (!this.isInited()) {
          this.init();
        }
        head = document.getElementsByTagName("head")[0];
        if (head != null) {
          head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"$0/$1.css\" />".replace("$0", folder).replace("$1", name));
        }
      };
      _.addElement = function (id, html, classes = null) {
        var cls, element, i, len;
        if (!this.isInited()) {
          this.init();
        }
        element = document.createElement("div");
        element.id = id;
        element.innerHTML = html;
        if (classes != null) {
          for (i = 0, len = classes.length; i < len; i++) {
            cls = classes[i];
            element.classList.add(cls);
          }
        }
        this._parent.appendChild(element);
        return element;
      };
      _.appendElement = function (element) {
        var e;
        try {
          return this._parent.appendChild(element);
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      // * Может быть NULL
      _.getElement = function (id) {
        return document.getElementById(id);
      };
      _.removeElement = function (element) {
        if (element == null) {
          return;
        }
        if (KDCore.SDK.isString(element)) {
          this.removeElementById(element);
        } else {
          this.removeElementById(element.id);
        }
      };
      _.removeElementById = function (elementId) {
        var element;
        if (!this.isInited()) {
          return;
        }
        element = this.getElement(elementId);
        if (element != null) {
          this._parent.removeChild(element);
        }
      };
      // * PRIVATE ------------------------------------------------------------------
      _._createMainParentInHtml = function () {
        this._parent = document.createElement("div");
        this._parent.id = "KDCoreMain";
        document.body.appendChild(this._parent);
      };
      _._extendGraphicsClass = function () {
        var ALIAS___updateCanvas;
        //@[ALIAS]
        ALIAS___updateCanvas = Graphics._updateCanvas;
        Graphics._updateCanvas = function () {
          ALIAS___updateCanvas.call(this);
          return KDCore.HUI.refresh();
        };
      };
    })();
    //@[EXTEND]
    return KDCore.HUI = HUI;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var ALIAS___onMouseUp, ALIAS___onRightButtonDown, ALIAS__clear, ALIAS__update, _;
    // * Right mouse pressed
    // * Определение когда правая (вторая) кнопка мыши зажата и удерживается

    //@[DEFINES]
    _ = TouchInput;
    //@[ALIAS]
    ALIAS__clear = _.clear;
    _.clear = function () {
      ALIAS__clear.call(this);
      this._kdMousePressed2 = false;
      this._kdPressedTime2 = 0;
    };
    //@[ALIAS]
    ALIAS___onRightButtonDown = _._onRightButtonDown;
    _._onRightButtonDown = function (event) {
      var check;
      ALIAS___onRightButtonDown.call(this, event);
      // * Это значит что ALIAS метод прошёл (верные X и Y в Canvas)
      if (KDCore.isMZ()) {
        check = this._newState.cancelled === true;
      } else {
        check = this._events.cancelled === true;
      }
      if (check === true) {
        this._kdMousePressed2 = true;
        this._kdPressedTime2 = 0;
      }
    };
    //@[ALIAS]
    ALIAS___onMouseUp = _._onMouseUp;
    _._onMouseUp = function (event) {
      ALIAS___onMouseUp.call(this, event);
      if (event.button === 2) {
        this._kdMousePressed2 = false;
      }
    };
    //@[ALIAS]
    ALIAS__update = _.update;
    _.update = function () {
      ALIAS__update.call(this);
      if (this.kdIsPressed2()) {
        return this._kdPressedTime2++;
      }
    };
    //?[NEW]
    return _.kdIsPressed2 = function () {
      return this._kdMousePressed2 === true;
    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    // * Методы из RPG Maker MZ которых нет в RPG Maker MV
    if (KDCore.isMZ()) {
      return;
    }
    (function () {    //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ Scene_Base.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;

      //@[DEFINES]
      _ = Scene_Base.prototype;
      _.calcWindowHeight = function (numLines, selectable) {
        if (selectable === true) {
          return Window_Selectable.prototype.fittingHeight(numLines);
        } else {
          return Window_Base.prototype.fittingHeight(numLines);
        }
      };
    })();
    (function () {    // ■ END Scene_Base.coffee
      //---------------------------------------------------------------------------

      //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ Window_Selectable.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;

      //@[DEFINES]
      _ = Window_Selectable.prototype;
      _.itemLineRect = function (index) {
        return this.itemRect(index);
      };
    })();
    (function () {    // ■ END Window_Selectable.coffee
      //---------------------------------------------------------------------------

      //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ Window_Base.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var ALIAS__initialize, ALIAS__processEscapeCharacter, _;
      //@[DEFINES]
      _ = Window_Base.prototype;
      // * Чтоб можно было Rectangle принимать в конструктор
      //@[ALIAS]
      ALIAS__initialize = _.initialize;
      _.initialize = function (x, y, w, h) {
        if (x instanceof PIXI.Rectangle || x instanceof Rectangle) {
          return ALIAS__initialize.call(this, x.x, x.y, x.width, x.height);
        } else {
          return ALIAS__initialize.call(this, ...arguments);
        }
      };

      // * В MZ используется FS для изменения размера шрифта в тексте
      //@[ALIAS]
      ALIAS__processEscapeCharacter = _.processEscapeCharacter;
      _.processEscapeCharacter = function (code, textState) {
        if (code === "FS") {
          this.contents.fontSize = this.obtainEscapeParam(textState);
        } else {
          ALIAS__processEscapeCharacter.call(this, code, textState);
        }
      };
    })();
    (function () {    // ■ END Window_Base.coffee
      //---------------------------------------------------------------------------

      //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ Spriteset_Map.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;

      //@[DEFINES]
      _ = Spriteset_Map.prototype;
      _.findTargetSprite = function (target) {
        return this._characterSprites.find(function (sprite) {
          return sprite.checkCharacter(target);
        });
      };
    })();
    return (function () {    // ■ END Spriteset_Map.coffee
      //---------------------------------------------------------------------------

      //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ Sprite_Character.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var _;

      //@[DEFINES]
      _ = Sprite_Character.prototype;
      _.checkCharacter = function (character) {
        return this._character === character;
      };
    })();
  });

  // ■ END Sprite_Character.coffee
  //---------------------------------------------------------------------------


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var alias_SM_processMapTouch, alias_TIOMM;
    //?SMouse better alternative
    if (KDCore.isMZ()) {
      return;
    }
    // * Для ButtonM
    //@[ALIAS]
    alias_SM_processMapTouch = Scene_Map.prototype.processMapTouch;
    Scene_Map.prototype.processMapTouch = function () {
      if ($gameTemp.kdButtonUnderMouse != null) {
        if ($gameTemp.kdButtonUnderMouse.parent == null) {
          return $gameTemp.kdButtonUnderMouse = null;
        } else {

        }
      } else {
        return alias_SM_processMapTouch.call(this);
      }
    };
    //@[ALIAS]
    alias_TIOMM = TouchInput._onMouseMove;
    TouchInput._onMouseMove = function (event) {
      var x, y;
      alias_TIOMM.call(this, event);
      x = Graphics.pageToCanvasX(event.pageX);
      y = Graphics.pageToCanvasY(event.pageY);
      if (Graphics.isInsideCanvas(x, y)) {
        return this._onHover(x, y);
      }
    };

    //?NEW, from MZ
    return TouchInput._onHover = function (_x, _y) {
      this._x = _x;
      this._y = _y;
    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var ALIAS__clear, ALIAS__update, _;
    if (KDCore.isMZ()) {
      return;
    }
    //@[DEFINES]
    _ = Input;
    //@[ALIAS]
    ALIAS__clear = _.clear;
    _.clear = function () {
      ALIAS__clear.call(this);
      return this._virtualButton = null;
    };
    //@[ALIAS]
    ALIAS__update = _.update;
    _.update = function () {
      ALIAS__update.call(this);
      if (this._virtualButton == null) {
        return;
      }
      this._latestButton = this._virtualButton;
      this._pressedTime = 0;
      return this._virtualButton = null;
    };
    return _.virtualClick = function (buttonName) {
      return this._virtualButton = buttonName;
    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var ALIAS___startLoading, _;
    // * В версии RPG Maker MZ 1.5.0 появился баг что картинки не успевают прогрузится
    // * Данный фикс, возвращает старое поведение
    if (!KDCore.isMZ()) {
      return;
    }
    //@[DEFINES]
    _ = Bitmap.prototype;
    //@[ALIAS]
    ALIAS___startLoading = _._startLoading;
    return _._startLoading = function () {
      if (Utils.hasEncryptedImages()) {
        ALIAS___startLoading.call(this, ...arguments);
      } else {
        // * Это из RPG Maker MZ до версии 1.5
        this._image = new Image();
        this._image.onload = this._onLoad.bind(this);
        this._image.onerror = this._onError.bind(this);
        this._destroyCanvas();
        this._loadingState = "loading";
        this._image.src = this._url;
      }
    };
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var Builder;
    Builder = {};
    (function () {    //NUI 1.0
      //rev 18.08.24
      var _;
      //@[DEFINES]
      _ = Builder;
      _.Factory = function (jsonCollection, owner, exRefresh = 0) {
        var e, item, items, j, key, len, value;
        try {
          if (jsonCollection == null) {
            return;
          }
          items = [];
          for (key in jsonCollection) {
            value = jsonCollection[key];
            item = KDCore.UI.Builder.Make(value, owner);
            if (item != null) {
              items.push(item); // * Skip not UI elements definitions
            }
          }
          //owner[key] = item if owner?
          for (j = 0, len = items.length; j < len; j++) {
            item = items[j];
            item.refreshBindings(owner, true);
          }
          // * Обновить привязки через MS ещё раз
          if (exRefresh > 0) {
            setTimeout((function () {
              var e, k, len1, results;
              try {
                results = [];
                for (k = 0, len1 = items.length; k < len1; k++) {
                  item = items[k];
                  results.push(item.refreshBindings(owner, true));
                }
                return results;
              } catch (error) {
                e = error;
                return KDCore.warning(e);
              }
            }), exRefresh);
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return items;
      };
      _.Make = function (jsonStructure, owner = null, parent = null) {
        var bindings, child, childrens, dataObject, e, item, j, len, parameters, shortcutData, subItem, type, value;
        try {
          if (jsonStructure == null) {
            return null;
          }
          if (jsonStructure.type == null) {
            return null;
          }
          if (jsonStructure.shortcut != null) {
            shortcutData = KDCore.UI.Builder.ConvertShortcut(jsonStructure.shortcut);
            ({ type, parameters } = shortcutData);
          } else {
            ({ type, parameters } = jsonStructure);
          }
          if (typeof parameters === "string") {
            parameters = KDCore.UI.Builder.ConvertShortcut(parameters);
          }
          if (jsonStructure.createIf != null) {
            value = this._convertBindingValue(owner, jsonStructure.createIf);
            if (value !== true) {
              return null;
            }
          }
          item = KDCore.UI.Builder.CreateItemByType(type, parameters);
          if (item == null) {
            return null;
          }
          ({ dataObject, bindings, childrens } = jsonStructure);
          // * Parent нужен чтобы работали настройки положения (center, %) и т.д.
          if (parent != null) {
            parent.addChild(item);
          } else {
            // * Owner - это не только главный родитель, но и к кому мы
            // * прописываем все поля по ID
            if (owner != null) {
              owner.addChild(item);
            }
          }
          // * Сохраняем схему (но только этого элемента, без "детей")
          item.uiJsonScheme = Object.assign({}, jsonStructure, {
            childrens: []
          });
          // * Константы доступны не только у каждого элемента в схеме, но и у общего родителя
          if (jsonStructure.constants != null) {
            if (item.uiConstants == null) {
              item.uiConstants = {};
            }
            item.uiConstants = Object.assign(item.uiConstants, jsonStructure.constants);
            if (owner != null) {
              if (owner.uiConstants == null) {
                owner.uiConstants = {};
              }
              owner.uiConstants = Object.assign(owner.uiConstants, jsonStructure.constants);
            }
          }
          if (bindings != null) {
            if (dataObject == null) {
              dataObject = owner;
            }
            KDCore.UI.Builder.ApplyBindings(item, bindings, dataObject);
          }
          try {
            if (jsonStructure.effects != null) {
              KDCore.UI.Builder.ApplyEffects(item, jsonStructure.effects);
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
          if ((childrens != null) && childrens.length > 0) {
            for (j = 0, len = childrens.length; j < len; j++) {
              child = childrens[j];
              // * Дети всегда имеют родителя - этот элемент (а не owner)
              subItem = KDCore.UI.Builder.Make(child, owner, item);
            }
          }
          if (jsonStructure.id != null) {
            item.id = jsonStructure.id;
            if (owner != null) {
              owner[jsonStructure.id] = item;
            }
          }
          if (jsonStructure.parent != null) {
            parent = jsonStructure.parent;
            if ((owner != null) && (owner[parent] != null)) {
              owner[parent].addChild(item);
            }
          }
          // * Update bindings for recalculate Positions and Sizes
          if (bindings != null) {
            KDCore.UI.Builder.RefreshBindings(item, dataObject);
          }
          if (jsonStructure.position != null) {
            item.setPosition(jsonStructure.position);
          }
          try {
            if (jsonStructure.animations != null) {
              KDCore.UI.Builder.ApplyAnimations(item, jsonStructure.animations);
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
          return item;
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return null;
      };
      // * dataObject может быть Null, если нет binding c $
      _.ApplyBindings = function (uiElement, bindings, dataObject) {
        var dataBindings, e, field, value;
        try {
          if (uiElement == null) {
            return;
          }
          if (bindings == null) {
            return;
          }
          if (uiElement.dataBindings == null) {
            return;
          }
          dataBindings = uiElement.dataBindings();
          if (dataBindings == null) {
            return;
          }
          for (field in dataBindings) {
            if (bindings[field] != null) {
              value = this.ConvertBindingValue(dataObject, bindings[field], uiElement);
              dataBindings[field].call(uiElement, value);
            }
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
      };
      _.RefreshBindings = function (uiElement, dataObject) {
        var bindings, e;
        try {
          if (uiElement == null) {
            return;
          }
          if (uiElement.uiJsonScheme == null) {
            return;
          }
          ({ bindings } = uiElement.uiJsonScheme);
          if (bindings == null) {
            return;
          }
          KDCore.UI.Builder.ApplyBindings(uiElement, bindings, dataObject);
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
      };
      _.ApplyEffects = function (uiElement, effects) {
        var alpha, color, e, ef, efData, effectsArray, j, len, quality, thickness;
        try {
          if (uiElement == null) {
            return;
          }
          if (effects == null) {
            return;
          }
          //TODO: Преобразование цвета!
          effectsArray = [];
          for (j = 0, len = effects.length; j < len; j++) {
            ef = effects[j];
            if (ef == null) {
              continue;
            }
            efData = KDCore.UI.Builder.ConvertShortcut(ef);
            if ((efData.shadow != null) && KDCore.isMZ()) {
              effectsArray.push(new PIXI.filters.DropShadowFilter(efData));
            }
            if ((efData.outline != null) && KDCore.isMZ()) {
              ({ thickness, color, quality } = efData);
              if (thickness == null) {
                thickness = 1;
              }
              if (color == null) {
                color = 0xffffff;
              }
              effectsArray.push(new PIXI.filters.OutlineFilter(thickness, color, quality));
            }
            if (efData.glow != null) {
              effectsArray.push(new PIXI.filters.GlowFilter(efData));
            }
            if (efData.tint != null) {
              ({ color, alpha } = efData);
              if (alpha == null) {
                alpha = 0.5;
              }
              effectsArray.push(new PIXI.filters.ColorOverlayFilter(color, alpha));
            }
          }
          if (effectsArray.length > 0) {
            return uiElement.filters = effectsArray;
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _.ApplyAnimations = function (uiElement, animations) {
        var a, e, j, len;
        try {
          if (uiElement == null) {
            return;
          }
          if (animations == null) {
            return;
          }
          if (uiElement.addAnimationRule == null) {
            return;
          }
          if (animations.length === 0) {
            return;
          }
          for (j = 0, len = animations.length; j < len; j++) {
            a = animations[j];
            if (typeof a === 'string') {
              a = KDCore.UI.Builder.ConvertShortcut(a);
            }
            if (a != null) {
              uiElement.addAnimationRule(a);
            }
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
      };
      _.ConvertBindingValue = function (sourceObj, bindingValue, element = null) {
        var e, i, j, ref, text, value;
        try {
          if (bindingValue instanceof Array) {
            text = bindingValue[0];
            for (i = j = 1, ref = bindingValue.length; (1 <= ref ? j < ref : j > ref); i = 1 <= ref ? ++j : --j) {
              if (bindingValue[i] == null) {
                continue;
              }
              value = this.ConvertBindingValue(sourceObj, bindingValue[i], element);
              if (value != null) {
                text = text.replace("%" + i, value);
              }
            }
            return text;
          } else {
            return this._convertBindingValue(sourceObj, bindingValue, element);
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return bindingValue;
      };
      _.CreateItemByType = function (type, initialParameters = {}) {
        var e;
        try {
          // * SHOULD HAVE: dataBingins(size), realWidth, realHeight
          switch (type) {
            case 'button':
              return new KDCore.Sprite_SButton(initialParameters);
            case 'text':
              return new KDCore.UI.Sprite_UIText2(initialParameters);
            case 'plane':
              return new KDCore.Sprite_Plane(initialParameters);
            case 'rect':
              return new KDCore.Sprite_BaseRect(initialParameters);
            case 'image':
              return new KDCore.Sprite_Image(initialParameters);
            case 'legacyText':
              return new KDCore.UI.Sprite_UIText(initialParameters);
            case 'textExt':
              return new KDCore.UI.Sprite_UITextExt(initialParameters);
            case 'group':
              return new KDCore.Sprite_Group(initialParameters);
            case 'legacyButton':
              return new KDCore.Sprite_ImgButton(initialParameters);
            case 'circle':
              return new KDCore.Sprite_BaseCircle(initialParameters);
            case 'gauge':
              return new KDCore.Sprite_Gauge(initialParameters);
            case 'list':
              return new KDCore.Sprite_ItemsListN(initialParameters);
            case 'horList':
              return new KDCore.Sprite_ItemsListNHor(initialParameters);
            case 'screen':
              return new KDCore.Sprite_Screen(initialParameters);
            case 'face':
              return new KDCore.Sprite_ActorFace(initialParameters);
            case 'textPro':
              return new KDCore.Sprite_TextPro(initialParameters);
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return null;
      };
      _._convertValueDataFromShortcut = function (valueData) {
        var data, e, item, j, len, n, outerItems, p, v;
        try {
          if (valueData.contains("|")) {
            data = {};
            outerItems = valueData.split("|");
            for (j = 0, len = outerItems.length; j < len; j++) {
              item = outerItems[j];
              p = item.split("=");
              n = p.shift();
              v = p;
              if (v.length === 0) {
                v = true;
              } else {
                if (v.length === 1) {
                  v = v[0];
                  if (isFinite(v)) {
                    v = Number(v);
                  }
                } else {
                  v = KDCore.UI.Builder._convertValueDataFromShortcut(v.join("="));
                }
              }
              data[n] = v;
            }
            return data;
          }
          data = KDCore.UI.Builder.ConvertShortcut(valueData, ",", "=");
          return data;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _.ConvertShortcut = function (shortcut, outerSep = ";", innerSep = ":") {
        var config, e, j, len, pair, value, valueData, valueName, values;
        try {
          config = {};
          values = shortcut.split(outerSep);
          //console.log(values)
          for (j = 0, len = values.length; j < len; j++) {
            value = values[j];
            if (!String.any(value)) {
              continue;
            }
            pair = value.split(innerSep);
            valueName = pair[0];
            valueData = pair[1];
            if (String.any(valueData) && valueData.contains("=")) {
              valueData = KDCore.UI.Builder._convertValueDataFromShortcut(valueData);
            } else {
              if (valueData == null) {
                valueData = true;
              } else {
                if (isFinite(valueData)) {
                  valueData = Number(valueData);
                }
              }
            }
            config[valueName] = valueData;
          }
          //console.log(valueName, valueData)
          return config;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      _._convertBindingValue = function (sourceObj, bindingValue, element = null) {
        var captured, dpValue, e, evalString, r, result, resultValue;
        try {
          if (typeof bindingValue === 'string') {
            // * Replace all HDP
            if (bindingValue.contains("hdp")) {
              r = new RegExp("(\\d+)hdp", "g");
              result = r.exec(bindingValue);
              while ((result != null)) {
                dpValue = Number(result[1]);
                resultValue = KDCore.Utils.convertDP(dpValue, true);
                bindingValue = bindingValue.replace(/(\d+)hdp/, resultValue);
                result = r.exec(bindingValue);
              }
            }
            // * Replace all DP
            if (bindingValue.contains("dp")) {
              r = new RegExp("(\\d+)dp", "g");
              result = r.exec(bindingValue);
              while ((result != null)) {
                dpValue = Number(result[1]);
                resultValue = KDCore.Utils.convertDP(dpValue, false);
                bindingValue = bindingValue.replace(/(\d+)dp/, resultValue);
                result = r.exec(bindingValue);
              }
            }
            // * FORCE EVAL
            if (bindingValue.contains("@") && bindingValue[0] === "@") {
              evalString = bindingValue.replace("@", "");
              return eval(evalString);
            }
            // * EXTRA $ calculations
            if (bindingValue.contains("~") && bindingValue[0] === "~") { // * POST EVAL
              if (bindingValue.contains("$")) {
                r = new RegExp("(\\$[\\w+.]*)", "g");
                result = r.exec(bindingValue);
                if (result != null) {
                  //console.log(result)
                  captured = result[1];
                  if (String.any(captured)) {
                    resultValue = this._convertSingleBindingValue$(sourceObj, captured, element);
                    if (resultValue == null) {
                      return null;
                    }
                    if (typeof resultValue === 'function') {
                      return resultValue;
                    } else {
                      if (String.any(resultValue)) {
                        bindingValue = bindingValue.replace(captured, resultValue);
                        return this._convertBindingValue(sourceObj, bindingValue, element);
                      } else {
                        return null;
                      }
                    }
                  }
                }
              } else {
                evalString = bindingValue.replace("~", "");
                return eval(evalString);
              }
            }

            // * Default old style simple $
            if (bindingValue.contains("$")) {
              return this._convertSingleBindingValue$(...arguments);
            }
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return bindingValue;
      };
      _._convertSingleBindingValue$ = function (sourceObj, bindingValue, element) {
        var e, field, parts, subData, subField;
        try {
          field = bindingValue.replace("$", "");
          if (field.contains(".")) { //$parent.width
            parts = field.split(".");
            // * Только одно вхождение
            field = parts[0];
            subField = parts[1];
            if (!String.any(field) && String.any(subField)) {
              if (element != null) {
                return this._convertSingleBindingValue$(element, "$" + subField, element);
              } else {
                return null;
              }
            }
            if (String.any(field) && !String.any(subField)) {
              return this._convertSingleBindingValue$(sourceObj, "$" + field, element);
            }
            if (sourceObj != null) {
              if (typeof sourceObj[field] === 'function') {
                subData = sourceObj[field]();
              } else {
                subData = sourceObj[field];
              }
              return this._convertSingleBindingValue$(subData, "$" + subField, element);
            } else {
              return null;
            }
          } else {
            if ((sourceObj != null) && (sourceObj[field] != null)) {
              if (typeof sourceObj[field] === 'function') {
                return sourceObj[field]();
              } else {
                return sourceObj[field];
              }
            } else {
              return null; // * We can't find value
            }
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
    })();
    //@[EXTEND]
    KDCore.UI = KDCore.UI || {};
    return KDCore.UI.Builder = Builder;
  });


  // Generated by CoffeeScript 2.6.1
  KDCore.registerLibraryToLoad(function () {
    var alias_WBDTEX_KDCore29122021;
    // * <center>, для RPG Maker MZ и если нету Visu Message Core
    if (KDCore.isMZ()) {
      alias_WBDTEX_KDCore29122021 = Window_Base.prototype.drawTextEx;
      Window_Base.prototype.drawTextEx = function (text, x, y, width) {
        var e, newText;
        try {
          if (Imported.VisuMZ_1_MessageCore !== true) { // * В Visu уже есть <center>
            if (String.any(text) && text.contains("<center>")) {
              if (text[0] === "<" && text[1] === "c") { // * Должен быть в начале строки
                newText = text.replace("<center>", "");
                return this.drawTextExInCenter(newText, x, y, width);
              }
            }
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return alias_WBDTEX_KDCore29122021.call(this, ...arguments);
      };
    }
    //?NEW
    Window_Base.prototype.drawTextExInCenter = function (text, x, y, width, height) {
      var e, newX, newY, textSize;
      try {
        if (KDCore.isMV()) { // * В MV нет поддержки данного метода
          this.drawTextEx(...arguments);
          return;
        }
        textSize = this.textSizeEx(text);
        newX = x + width / 2 - textSize.width / 2;
        if ((height != null) && height > 0) {
          newY = y + height / 2 - textSize.height / 2;
        } else {
          newY = y;
        }
        return this.drawTextEx(text, newX, newY, width);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return this.drawTextEx(text, x, y, width);
      }
    };
    //?NEW
    Window_Base.prototype.drawTextExWithWordWrap = function (text, x, y, width, maxLines) {
      var maxWidth, wrappedText;
      this.drawTextEx("", 0, 0, 100);
      maxWidth = this.contentsWidth();
      wrappedText = Window_Message.prototype.pWordWrap.call(this, text, width || maxWidth, maxLines);
      this.__lastWrappedText = wrappedText;
      return this.drawTextEx(wrappedText, x, y, width);
    };
    //?NEW
    return Window_Message.prototype.pWordWrap = function (text, maxWidth, maxLines) {
      var i, j, k, l, line, lines, newLines, ref, ref1, result, spaceLeft, spaceWidth, wordWidth, wordWidthWithSpace, words;
      lines = text.split('\n');
      maxWidth = maxWidth;
      spaceWidth = this.contents.measureTextWidth(' ');
      result = '';
      newLines = 1;
      for (i = k = 0, ref = lines.length; (0 <= ref ? k < ref : k > ref); i = 0 <= ref ? ++k : --k) {
        spaceLeft = maxWidth;
        line = lines[i];
        words = line.split(' ');
        for (j = l = 0, ref1 = words.length; (0 <= ref1 ? l < ref1 : l > ref1); j = 0 <= ref1 ? ++l : --l) {
          wordWidth = this.contents.measureTextWidth(words[j].replaceAll(/\\C\[\d+\]/g, ""));
          wordWidthWithSpace = wordWidth + spaceWidth;
          if (j === 0 || wordWidthWithSpace > spaceLeft) {
            if (j > 0) {
              if (maxLines === newLines) {
                return result;
              }
              result += '\n';
              newLines++;
            }
            result += words[j];
            spaceLeft = maxWidth - wordWidth;
            if (j === 0 && line.match(/\\n\w*\s*<\s*\\n\[\w*\s*\]\s*>*/gi)) {
              spaceLeft += 200;
            }
          } else {
            spaceLeft -= wordWidthWithSpace;
            result += ' ' + words[j];
          }
        }
        if (i < lines.length - 1) {
          result += '\n';
        }
      }
      return result;
    };
  });






  // Generated by CoffeeScript 2.6.1
  // * Последний файл (после всех классов)
  // * Загружает библиотеки
  var i, len, lib, ref, text;

  if (KDCore._requireLoadLibrary === true) {
    ref = KDCore[KDCore._loader];
    for (i = 0, len = ref.length; i < len; i++) {
      lib = ref[i];
      lib(KDCore);
    }
    KDCore[KDCore._loader] = [];
    text = "%c  KDCore is loaded " + KDCore.Version + " + NUI " + KDCore.nuiVersion;
    console.log(text, 'background: #222; color: #82b2ff');
  }

  // ==========================================================================
  // ==========================================================================

  //   END OF PLUGINS CORE LIBRARY
  //   (Next code is this plugin code)

  // ==========================================================================
  // ==========================================================================

  //Plugin KDCore builded by PKD PluginBuilder 2.2.2 - 27.09.2024

  var KDNUI;
  (function (KDNUI) {
    /**
     * The version of the KDNUI Library.
     * @type {string}
     */
    KDNUI.Version = "1.5";
    /**
     * Add NUI file to the list of files to be loaded.
     * @type {string} - The folder where the file is located.
     * @type {string} - The name of the file (without extension).
     */
    function RegisterNUIFile(folder, filnename) {
      let _name = "$" + folder + "_" + filnename;
      let src = folder + "/" + filnename + ".json";
      /* @ts-ignore */
      DataManager._databaseFiles.push({ name: _name, src: src });
    }
    KDNUI.RegisterNUIFile = RegisterNUIFile;
  })(KDNUI || (KDNUI = {}));
  var KBitmap;
  (function (KBitmap) {
    let _loadedIconsCache = {};
    let _emptyBitmap = null;
    /**
     * Draws an icon onto the specified bitmap at the given coordinates.
     *
     * @param inputBitmap - The bitmap on which the icon will be drawn.
     * @param icon - The icon to draw, which can be either an icon index (number) or a Bitmap.
     * @param x - The x-coordinate where the icon will be drawn.
     * @param y - The y-coordinate where the icon will be drawn.
     * @param size - The size of the icon to draw. Defaults to 32.
     *
     * @throws Will log a warning to the console if an error occurs during the drawing process.
     */
    function DrawIcon(inputBitmap, icon, x, y, size = 32) {
      try {
        let bitmapToDraw = null;
        if (icon instanceof Bitmap) {
          bitmapToDraw = icon;
        }
        else {
          bitmapToDraw = GetIconBitmap(icon);
        }
        DrawInside(inputBitmap, bitmapToDraw, x, y, size, size);
      }
      catch (error) {
        console.warn(error);
      }
    }
    KBitmap.DrawIcon = DrawIcon;
    /**
     * Draws a bitmap inside another bitmap at the specified coordinates.
     *
     * @param inputBitmap - The bitmap where the other bitmap will be drawn.
     * @param bitmapToDraw - The bitmap to draw inside the input bitmap.
     * @param x - The x-coordinate where the bitmap will be drawn.
     * @param y - The y-coordinate where the bitmap will be drawn.
     * @param sw - The width to scale the drawn bitmap to. Defaults to the width of the bitmap to draw.
     * @param sh - The height to scale the drawn bitmap to. Defaults to the height of the bitmap to draw.
     *
     * @throws Will log a warning to the console if an error occurs during the drawing process.
     */
    function DrawInside(inputBitmap, bitmapToDraw, x, y, sw = 0, sh = 0) {
      try {
        if (sw <= 0)
          sw = bitmapToDraw.width;
        if (sh <= 0)
          sh = bitmapToDraw.height;
        inputBitmap.blt(bitmapToDraw, 0, 0, bitmapToDraw.width, bitmapToDraw.height, x, y, sw, sh);
      }
      catch (error) {
        console.warn(error);
      }
    }
    KBitmap.DrawInside = DrawInside;
    /**
     * Fills the input bitmap with the contents of another bitmap.
     *
     * @param inputBitmap - The bitmap to be filled.
     * @param bitmapToFill - The bitmap used to fill the input bitmap.
     */
    function FillWith(inputBitmap, bitmapToFill) {
      try {
        DrawInside(inputBitmap, bitmapToFill, 0, 0, inputBitmap.width, inputBitmap.height);
      }
      catch (error) {
        console.warn(error);
      }
    }
    KBitmap.FillWith = FillWith;
    /**
     * Draws the specified text on the given bitmap at the specified position.
     *
     * @param inputBitmap - The bitmap on which the text will be drawn.
     * @param text - The text to be drawn on the bitmap.
     * @param position - The position where the text will be aligned. Can be 'center', 'left', or 'right'.
     *
     * @throws Will log a warning to the console if an error occurs during the drawing process.
     */
    function DrawTextFull(inputBitmap, text, position) {
      try {
        inputBitmap.drawText(text, 0, 0, inputBitmap.width, inputBitmap.height, position);
      }
      catch (error) {
        console.warn(error);
      }
    }
    KBitmap.DrawTextFull = DrawTextFull;
    /**
     * Returns a singleton instance of an empty Bitmap.
     * If the instance does not exist, it creates a new Bitmap.
     *
     * @returns {Bitmap} A singleton instance of an empty Bitmap.
     */
    function GetEmptyBitmap() {
      if (!_emptyBitmap) {
        _emptyBitmap = new Bitmap();
      }
      return _emptyBitmap;
    }
    KBitmap.GetEmptyBitmap = GetEmptyBitmap;
    /**
     * Retrieves the bitmap for a specified icon index. If the icon is not already cached,
     * it loads the icon from the system icon set, caches it, and then returns the bitmap.
     * If an error occurs during this process, an empty bitmap is returned.
     *
     * @param {number} iconIndex - The index of the icon to retrieve.
     * @returns {Bitmap} The bitmap of the specified icon, or an empty bitmap if an error occurs.
     */
    function GetIconBitmap(iconIndex) {
      try {
        if (!_loadedIconsCache[iconIndex]) {
          let iconset = ImageManager.loadSystem("IconSet");
          let pw = 0;
          let ph = 0;
          if (KDX.isMV()) {
            /* @ts-ignore */
            pw = Window_Base._iconWidth;
            /* @ts-ignore */
            ph = Window_Base._iconHeight;
          }
          else {
            pw = ImageManager.iconWidth;
            ph = ImageManager.iconHeight;
          }
          let sx = iconIndex % 16 * pw;
          let sy = Math.floor(iconIndex / 16) * ph;
          let iconBitmap = new Bitmap(pw, ph);
          iconBitmap.blt(iconset, sx, sy, pw, ph, 0, 0);
          _loadedIconsCache[iconIndex] = iconBitmap;
        }
        return _loadedIconsCache[iconIndex];
      }
      catch (error) {
        console.warn(error);
        return GetEmptyBitmap();
      }
    }
  })(KBitmap || (KBitmap = {}));
  var KColor;
  (function (KColor) {
    /**
     * Generates a random hexadecimal color code.
     *
     * @returns A string representing a random color code in the format "#RRGGBB".
     */
    function Random() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    KColor.Random = Random;
    /**
     * Generates a lighter shade of the given hex color by a specified factor.
     *
     * @param {string} hex - The hex color code to lighten.
     * @param {number} [factor=0.2] - The factor by which to lighten the color. Default is 0.2.
     * @returns {string} The hex color code of the lighter shade.
     * @throws Will log a warning and return `#000000` if the input hex color is invalid.
     */
    function LighterColor(hex, factor = 0.2) {
      try {
        let [r, g, b] = HexToColor(hex);
        r = Math.min(255, r + 255 * factor);
        g = Math.min(255, g + 255 * factor);
        b = Math.min(255, b + 255 * factor);
        return HexFromColor(r, g, b);
      }
      catch (error) {
        console.warn(error);
        return `#000000`;
      }
    }
    KColor.LighterColor = LighterColor;
    /**
     * Darkens a given hex color by a specified factor.
     *
     * @param {string} hex - The hex color code to be darkened.
     * @param {number} [factor=0.2] - The factor by which to darken the color. Default is 0.2.
     * @returns {string} - The darkened hex color code.
     *
     * @throws Will log a warning and return `#000000` if the input hex color is invalid.
     */
    function DarkerColor(hex, factor = 0.2) {
      try {
        let [r, g, b] = HexToColor(hex);
        r = Math.max(0, r - 255 * factor);
        g = Math.max(0, g - 255 * factor);
        b = Math.max(0, b - 255 * factor);
        return HexFromColor(r, g, b);
      }
      catch (error) {
        console.warn(error);
        return `#000000`;
      }
    }
    KColor.DarkerColor = DarkerColor;
    /**
     * Converts RGB color values to a hexadecimal color string.
     *
     * @param r - The red component of the color, an integer between 0 and 255.
     * @param g - The green component of the color, an integer between 0 and 255.
     * @param b - The blue component of the color, an integer between 0 and 255.
     * @returns A string representing the hexadecimal color, prefixed with '#'.
     *          If an error occurs, returns "#000000".
     */
    function HexFromColor(r, g, b) {
      try {
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
      }
      catch (error) {
        console.warn(error);
        return "#000000";
      }
    }
    KColor.HexFromColor = HexFromColor;
    /**
     * Converts a short hexadecimal color code to a long hexadecimal color code.
     *
     * @param hex - The short hexadecimal color code (e.g., "#RGB").
     * @returns The long hexadecimal color code (e.g., "#RRGGBB"). If the input is already a long hexadecimal color code, it returns the input as is.
     *
     * @throws Will log a warning and return "#000000" if an error occurs during conversion.
     */
    function ToLongHex(hex) {
      try {
        if (hex.length == 4) {
          let r = hex[1];
          let g = hex[2];
          let b = hex[3];
          return `#${r}${r}${g}${g}${b}${b}`;
        }
        return hex;
      }
      catch (error) {
        console.warn(error);
        return "#000000";
      }
    }
    KColor.ToLongHex = ToLongHex;
    /**
     * Converts a hexadecimal color string to an RGB array.
     *
     * @param {string} hex - The hexadecimal color string (e.g., "#FFFFFF" or "FFFFFF").
     * @returns {number[]} An array containing the RGB values [r, g, b].
     *                      If the conversion fails, returns [0, 0, 0].
     * @throws Will log a warning to the console if the conversion fails.
     */
    function HexToColor(hex) {
      try {
        let _hex = ToLongHex(hex);
        let r = parseInt(_hex.substring(1, 3), 16);
        let g = parseInt(_hex.substring(3, 5), 16);
        let b = parseInt(_hex.substring(5, 7), 16);
        return [r, g, b];
      }
      catch (error) {
        console.warn(error);
        return [0, 0, 0];
      }
    }
    KColor.HexToColor = HexToColor;
    /**
     * Converts a hexadecimal color string to a color number.
     *
     * @param hex - The hexadecimal color string (e.g., "#RRGGBB" or "RRGGBB").
     * @returns The color number representation of the given hexadecimal color.
     */
    function HexToColorNumber(hex) {
      let [r, g, b] = HexToColor(hex);
      return r << 16 | g << 8 | b;
    }
    KColor.HexToColorNumber = HexToColorNumber;
    /**
     * Converts a hexadecimal color code to a CSS color string.
     *
     * @param {string} hex - The hexadecimal color code to convert.
     * @param {number} [alpha] - Optional alpha value for the color (0 to 1).
     * @returns {string} The CSS color string in `rgb` or `rgba` format.
     * @throws Will log a warning and return `rgb(0,0,0)` if the conversion fails.
     */
    function HexToCss(hex, alpha) {
      try {
        if (alpha) {
          return `rgba(${HexToColor(hex).join(",")},${alpha})`;
        }
        return `rgb(${HexToColor(hex).join(",")})`;
      }
      catch (error) {
        console.warn(error);
        return `rgb(0,0,0)`;
      }
    }
    KColor.HexToCss = HexToCss;
  })(KColor || (KColor = {}));
  class KSprite extends Sprite {
    constructor(bitmap) {
      super(bitmap);
      this._alphaCheckThreshold = 100;
    }
    static FromRect(width, height, color = "#FFFFFF") {
      let sprite = new KSprite(new Bitmap(width, height));
      sprite.fillAll(color);
      return sprite;
    }
    getGlobalPositionNew() {
      let bounds = this.getBounds();
      let p = { x: bounds.x, y: bounds.y };
      return p;
    }
    getLocalPosition() {
      let bounds = this.getLocalBounds();
      let p = { x: bounds.x, y: bounds.y };
      return p;
    }
    getGlobalRect() {
      let bounds = this.getBounds();
      return new Rectangle(bounds.x, bounds.y, bounds.width, bounds.height);
    }
    getLocalRect() {
      let localBounds = this.getLocalBounds();
      let globalBounds = this.getBounds();
      return new Rectangle(localBounds.x, localBounds.y, globalBounds.width, globalBounds.height);
    }
    toLocalPoint(point) {
      return this.worldTransform.applyInverse(point);
    }
    toGlobalPoint(point) {
      return this.worldTransform.apply(point);
    }
    isContainGlobalPoint(point) {
      let rect = this.getGlobalRect();
      return rect.contains(point.x, point.y);
    }
    isCursorInside() {
      return this.isContainGlobalPoint(TouchInput);
    }
    isNeedCheckAlphaPixels() {
      return false;
    }
    isHoveredByCursor() {
      if (!this.isNeedCheckAlphaPixels())
        return this.isCursorInside();
      if (!this.bitmap)
        return false;
      if (!this.bitmap.isReady())
        return false;
      try {
        let localPoint = this.toLocalPoint(new Point(TouchInput.x, TouchInput.y));
        let x = Math.floor(localPoint.x);
        let y = Math.floor(localPoint.y);
        if (x < 0 || y < 0)
          return false;
        if (x >= this.bitmap.width || y >= this.bitmap.height)
          return false;
        let alpha = Number(this.bitmap.getAlphaPixel(x, y));
        return alpha > this._alphaCheckThreshold;
      }
      catch (error) {
        console.warn(error);
        return false;
      }
    }
    removeFromParent() {
      if (this.parent) {
        this.parent.removeChild(this);
      }
    }
    isVisible() {
      return this.worldVisible == true;
    }
    fillAll(color = "#FFFFFF") {
      if (this.bitmap) {
        this.bitmap.fillAll(color);
      }
    }
    setCommonAnchor(x, y) {
      try {
        if (y === undefined)
          y = x;
        this.anchor.set(x, y);
        // * Set the anchor for each children
        for (let child of this.children) {
          if (!child)
            continue;
          if (child['setCommonAnchor']) {
            child['setCommonAnchor'](x, y);
          }
          else {
            if (!child['anchor'])
              continue;
            /*@ts-ignore*/
            child.anchor.set(x, y);
          }
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    onBitmapLoaded(callback) {
      if (this.bitmap && this.bitmap.isReady()) {
        callback();
      }
      else {
        this.bitmap.addLoadListener(() => {
          callback();
        });
      }
    }
  }
  var KDNUI;
  (function (KDNUI) {
    let EasingFunc;
    (function (EasingFunc) {
      EasingFunc["Linear"] = "linear";
      EasingFunc["EaseInQuad"] = "easeInQuad";
      EasingFunc["EaseOutQuad"] = "easeOutQuad";
      EasingFunc["EaseInOutQuad"] = "easeInOutQuad";
      EasingFunc["EaseInCubic"] = "easeInCubic";
      EasingFunc["EaseOutCubic"] = "easeOutCubic";
      EasingFunc["EaseInOutCubic"] = "easeInOutCubic";
    })(EasingFunc = KDNUI.EasingFunc || (KDNUI.EasingFunc = {}));
    class EasingFuncs {
      /**
       * Linear easing function.
       * @param t Current time
       * @param b Start value
       * @param c Change in value
       * @param d Duration
       * @returns The calculated value
       */
      static linear(t, b, c, d) {
        return c * t / d + b;
      }
      /**
       * Ease in quadratic function.
       * @param t Current time
       * @param b Start value
       * @param c Change in value
       * @param d Duration
       * @returns The calculated value
       */
      static easeInQuad(t, b, c, d) {
        t /= d;
        return c * t * t + b;
      }
      /**
       * Ease out quadratic function.
       * @param t Current time
       * @param b Start value
       * @param c Change in value
       * @param d Duration
       * @returns The calculated value
       */
      static easeOutQuad(t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
      }
      /**
       * Ease in and out quadratic function.
       * @param t Current time
       * @param b Start value
       * @param c Change in value
       * @param d Duration
       * @returns The calculated value
       */
      static easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1)
          return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
      /**
       * Ease in cubic function.
       * @param t Current time
       * @param b Start value
       * @param c Change in value
       * @param d Duration
       * @returns The calculated value
       */
      static easeInCubic(t, b, c, d) {
        t /= d;
        return c * t * t * t + b;
      }
      /**
       * Ease out cubic function.
       * @param t Current time
       * @param b Start value
       * @param c Change in value
       * @param d Duration
       * @returns The calculated value
       */
      static easeOutCubic(t, b, c, d) {
        t = t / d - 1;
        return c * (t * t * t + 1) + b;
      }
      /**
       * Ease in and out cubic function.
       * @param t Current time
       * @param b Start value
       * @param c Change in value
       * @param d Duration
       * @returns The calculated value
       */
      static easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1)
          return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      }
    }
    KDNUI.EasingFuncs = EasingFuncs;
  })(KDNUI || (KDNUI = {}));
  var NUtils;
  (function (NUtils) {
    function GetSpriteRealSize(forField, sprite) {
      try {
        if (!sprite) {
          return 0;
        }
        if (forField == "width" || forField == "x") {
          if (sprite["realWidth"])
            return sprite["realWidth"]();
          else
            return sprite.width;
        }
        if (forField == "height" || forField == "y") {
          if (sprite["realHeight"])
            return sprite["realHeight"]();
          else
            return sprite.height;
        }
      }
      catch (error) {
        console.warn(error);
      }
      return 0;
    }
    NUtils.GetSpriteRealSize = GetSpriteRealSize;
    function ConvertDimension(value) {
      try {
        if (typeof value == "string") {
          value = NBindingsConverter.ConvertAllDimensionValues(value);
          if (KString.any(value))
            return Number(value);
        }
        else {
          return value;
        }
      }
      catch (error) {
        console.warn(error);
      }
      return 0;
    }
    NUtils.ConvertDimension = ConvertDimension;
  })(NUtils || (NUtils = {}));
  var KDNUI;
  (function (KDNUI) {
    class AnimationKeyFrame {
      /**
       * Creates an instance of AnimationKeyFrame.
       * @param startValue The starting value of the animation.
       * @param endValue The ending value of the animation.
       * @param duration The duration of the animation in seconds.
       * @param func The easing function name.
       */
      constructor(startValue, endValue, duration = 1, func = 'linear') {
        this.startValue = startValue;
        this.endValue = endValue;
        this._t = 0;
        this._d = duration * 60; // Convert to Frames
        this._c = this.endValue - this.startValue; // Change
        this.func = func || 'linear';
      }
      /**
       * Resets the animation timer.
       */
      reset() {
        this._t = 0;
      }
      /**
       * Updates the animation timer.
       */
      update() {
        if (this._t < this._d) {
          this._t += 1;
        }
      }
      /**
       * Checks if the animation has ended.
       * @returns True if the animation has ended, otherwise false.
       */
      isEnd() {
        return this._t >= this._d || this._d <= 0;
      }
      /**
       * Gets the current value of the animation.
       * @returns The current value of the animation.
       */
      getValue() {
        if (this._d <= 0) {
          return this.endValue;
        }
        else {
          return this.easingFunc()(this._t, this.startValue, this._c, this._d);
        }
      }
      /**
       * Gets the easing function based on the function name.
       * @returns {KDNUI.EasingFunction} The easing function.
       */
      easingFunc() {
        if (this.func && KDNUI.EasingFuncs[this.func]) {
          return KDNUI.EasingFuncs[this.func];
        }
        else {
          console.warn(`Easing func ${this.func} not found!`);
          return this.linear;
        }
      }
      /**
       * Default linear easing function.
       * @param t Current time
       * @param b Start value
       * @param c Change in value
       * @param d Duration
       * @returns The calculated value
       */
      linear(t, b, c, d) {
        return c * t / d + b;
      }
    }
    KDNUI.AnimationKeyFrame = AnimationKeyFrame;
  })(KDNUI || (KDNUI = {}));
  var KDNUI;
  (function (KDNUI) {
    class AnimationKeyLine {
      /**
       * Creates an instance of AnimationKeyLine.
       * @param keyFramesList The list of keyframes.
       * @param totalDuration The total duration of the animation.
       * @param func The easing function name.
       */
      constructor(keyFramesList, totalDuration = 1, func = 'linear') {
        this.totalDuration = totalDuration;
        this.keyFrames = this._parseKeyFrames(keyFramesList, func);
        this.repeatsLeftBase = 0;
        this.repeatsLeft = 0;
        this.keyIndex = 0;
        this._relativeValue = 0;
        this._isStarted = false;
      }
      /**
       * Sets the relative value.
       * @param _relativeValue The relative value.
       */
      setRelativeValue(_relativeValue) {
        this._relativeValue = _relativeValue;
      }
      /**
       * Sets the number of repeats.
       * @param repeatsLeftBase The number of repeats.
       */
      setRepeatsCount(repeatsLeftBase) {
        this.repeatsLeftBase = repeatsLeftBase;
        this.repeatsLeft = repeatsLeftBase;
      }
      /**
       * Sets the animation to loop indefinitely.
       */
      setLoop() {
        this.setRepeatsCount(-1);
      }
      /**
       * Starts the animation with an optional delay.
       * @param startDelay The delay before starting the animation.
       */
      start(startDelay = 0) {
        if (startDelay === 0) {
          this._isStarted = true;
        }
        else {
          this._startTimer = startDelay * 60;
        }
      }
      /**
       * Pauses the animation.
       */
      pause() {
        this._isStarted = false;
        this._startTimer = null;
      }
      /**
       * Checks if the animation has started.
       * @returns True if the animation has started, otherwise false.
       */
      isStarted() {
        return this._isStarted === true;
      }
      /**
       * Completes the animation.
       */
      complete() {
        this.keyIndex = this.keyFrames.length;
        this.repeatsLeft = 0;
      }
      /**
       * Resets the animation.
       */
      reset() {
        this.repeatsLeft = this.repeatsLeftBase;
        this._resetKeyframes();
      }
      /**
       * Updates the animation.
       */
      update() {
        if (this._startTimer != null) {
          this._updateStartTimer();
        }
        if (!this.isStarted())
          return;
        if (this.isEnd()) {
          if (this.repeatsLeft === 0) {
            return; // No repeats at all
          }
          else if (this.repeatsLeft < 0) { // Infinite Loop
            this._resetKeyframes();
          }
          else {
            this.repeatsLeft -= 1;
            this._resetKeyframes();
          }
        }
        this.keyFrames[this.keyIndex].update();
        if (this.keyFrames[this.keyIndex].isEnd()) {
          this.keyIndex++;
        }
      }
      /**
       * Checks if the animation has ended.
       * @returns True if the animation has ended, otherwise false.
       */
      isEnd() {
        return this.keyIndex > this.keyFrames.length - 1;
      }
      /**
       * Gets the current value of the animation.
       * @returns The current value of the animation.
       */
      getValue() {
        let value;
        if (this.isEnd()) {
          value = this.keyFrames[this.keyFrames.length - 1].getValue();
        }
        else {
          value = this.keyFrames[this.keyIndex].getValue();
        }
        return value + this._relativeValue;
      }
      /**
       * Parses the keyframes.
       * @param keyframes The keyframes to parse.
       * @param func The easing function name.
       * @returns The parsed keyframes.
       */
      _parseKeyFrames(keyframes, func) {
        const keyframesOutput = [];
        const endValues = [];
        const keys = [];
        let index = 0;
        try {
          for (const key in keyframes) {
            if (keyframes.hasOwnProperty(key)) {
              let startValue;
              if (endValues.length > 0) {
                startValue = endValues[index - 1];
              }
              else {
                startValue = 0;
              }
              const value = NUtils.ConvertDimension(keyframes[key]);
              const endValue = value;
              let duration;
              if (key === "0") {
                duration = 0;
              }
              else {
                const prevKey = keys[index - 1];
                duration = this._calculateDuration(prevKey, key);
              }
              const kf = new KDNUI.AnimationKeyFrame(startValue, endValue, duration, func);
              keys[index] = key;
              endValues[index] = value;
              keyframesOutput.push(kf);
              index++;
            }
          }
        }
        catch (e) {
          console.warn(e);
        }
        return keyframesOutput;
      }
      /**
       * Calculates the duration between two keyframes.
       * @param rateA The start rate.
       * @param rateB The end rate.
       * @returns The calculated duration.
       */
      _calculateDuration(rateA, rateB) {
        try {
          const rateANum = Number(rateA) / 100.0;
          const rateBNum = Number(rateB) / 100.0;
          const timeA = this.totalDuration * rateANum;
          const timeB = this.totalDuration * rateBNum;
          const d = timeB - timeA;
          return d;
        }
        catch (e) {
          console.warn(e);
          return 0;
        }
      }
      /**
       * Resets the keyframes.
       */
      _resetKeyframes() {
        try {
          this.keyIndex = 0;
          for (const f of this.keyFrames) {
            f.reset();
          }
        }
        catch (e) {
          console.warn(e);
        }
      }
      /**
       * Updates the start timer.
       */
      _updateStartTimer() {
        try {
          if (this._startTimer == null)
            return;
          this._startTimer -= 1;
          if (this._startTimer <= 0) {
            this._isStarted = true;
            this._startTimer = null;
          }
        }
        catch (e) {
          console.warn(e);
        }
      }
    }
    KDNUI.AnimationKeyLine = AnimationKeyLine;
  })(KDNUI || (KDNUI = {}));
  var KDNUI;
  (function (KDNUI) {
    class AnimationRule {
      /**
       * Creates an instance of AnimationRule.
       * @param animationConfig The animation configuration.
       * @param obj The object to apply the animation to.
       */
      constructor(animationConfig, obj) {
        if (typeof animationConfig === "string") {
          animationConfig = NBindingsConverter.ConvertShortcut(animationConfig);
        }
        this.animationConfig = Object.assign(AnimationRule.DefaultConfig(), animationConfig);
        const { condition } = this.animationConfig;
        if (KString.any(condition)) {
          if (eval(condition) === false) {
            return;
          }
        }
        const { keyframes, duration, func, repeats, delay } = this.animationConfig;
        this.prepareKeyFrames(keyframes, obj);
        this.keyLine = new KDNUI.AnimationKeyLine(keyframes, duration, func);
        this.keyLine.setRepeatsCount(repeats !== null && repeats !== void 0 ? repeats : 0);
        if (obj && this.animationConfig.field === "_scaleFactor") {
          this.prepareObject(obj);
        }
        if (this.animationConfig.relative === true && obj) {
          this.keyLine.setRelativeValue(obj[this.animationConfig.field]);
        }
        this.keyLine.start(delay);
        if (obj && delay <= 0) {
          this.applyAnimation(obj);
        }
      }
      // * DefaultSettings in JSON format (for easy copy-paste)
      /**
       * Gets the default configuration for the animation.
       * @returns The default configuration.
       */
      static DefaultConfig() {
        return {
          "field": "opacity",
          "duration": 1,
          "func": "linear",
          "delay": 0,
          "repeats": 0,
          "relative": false,
          "keyframes": {
            "0": 0,
            "100": 255
          },
          "condition": null
        };
      }
      /**
       * Prepares the keyframes for the animation.
       * @param keyframes The keyframes to prepare.
       * @param obj The object to apply the animation to.
       */
      prepareKeyFrames(keyframes, obj) {
        for (const key in keyframes) {
          if (keyframes.hasOwnProperty(key)) {
            if (keyframes[key] === "@") {
              if (obj && obj[this.animationConfig.field] != null) {
                keyframes[key] = obj[this.animationConfig.field];
              }
              else {
                keyframes[key] = 0;
              }
            }
          }
        }
      }
      /**
       * Sets the end callback for the animation.
       * @param onEndCallback The callback to call when the animation ends.
       */
      setEndCallback(onEndCallback) {
        this.onEndCallback = onEndCallback;
      }
      /**
       * Checks if there is an end callback.
       * @returns True if there is an end callback, otherwise false.
       */
      isHaveEndCallback() {
        try {
          // Callback works only for single-shot animations
          if (this.animationConfig.repeats !== 0) {
            return false;
          }
          return this.onEndCallback != null;
        }
        catch (e) {
          console.warn(e);
          return false;
        }
      }
      /**
       * Updates the animation.
       */
      update() {
        var _a;
        if (!this.keyLine)
          return;
        this.keyLine.update();
        if (this.isHaveEndCallback() && this.keyLine.isEnd()) {
          try {
            (_a = this.onEndCallback) === null || _a === void 0 ? void 0 : _a.call(this);
          }
          catch (e) {
            console.warn(e);
          }
          this.onEndCallback = null;
        }
      }
      /**
       * Applies the animation to the object.
       * @param obj The object to apply the animation to.
       */
      applyAnimation(obj) {
        try {
          if (!obj || !this.keyLine)
            return;
          obj[this.animationConfig.field] = this.keyLine.getValue();
        }
        catch (e) {
          console.warn(e);
        }
      }
      /**
       * Prepares the object for the animation.
       * @param obj The object to prepare.
       */
      prepareObject(obj) {
        try {
          if (obj && obj.onBeforeChangeScaleFactor) {
            obj.onBeforeChangeScaleFactor();
          }
        }
        catch (e) {
          console.warn(e);
        }
      }
    }
    KDNUI.AnimationRule = AnimationRule;
  })(KDNUI || (KDNUI = {}));
  let globalHandledSprite = null;
  class KHandledSprite extends KSprite {
    static GlobalHandledSprite() {
      return globalHandledSprite;
    }
    static DeactivateGlobalHandledSprite(reference = null) {
      if (globalHandledSprite && globalHandledSprite != reference) {
        globalHandledSprite._deactivateHandler();
      }
    }
    constructor() {
      super();
      this._handledIndex = 0;
      this._handleManagerActive = false;
      this._handlerActive = false;
    }
    get handledIndex() {
      return this._handledIndex;
    }
    set handledIndex(value) {
      this._handledIndex = value;
    }
    addChild(child) {
      super.addChild(child);
      if (child instanceof KHandledSprite) {
        if (child.isSupportKeyboardHandle()) {
          child.handledIndex = this._pGetAllHandlers().length - 1;
        }
      }
      return child;
    }
    destroy(options) {
      this._deactivateHandler();
      super.destroy(options);
    }
    update() {
      super.update();
      if (this.isHandlerActive()) {
        this._handleKeyboardInputs();
      }
    }
    // * This should be TRUE if element can be selected (activated) or navigated by keyboard
    isSupportKeyboardHandle() {
      return false;
    }
    isVerticalKeyboardNavigation() {
      return true;
    }
    isFreeKeyboardNavigation() {
      return false;
    }
    isHandlerActive() {
      return this._handleManagerActive || this._handlerActive;
    }
    isAnyHandlerSelected() {
      return globalHandledSprite != null;
    }
    activateHandlerManagment() {
      if (this.isFreeKeyboardNavigation()) {
        this._handleUpAction = this._freeSelectionUpHandler.bind(this);
        this._handleDownAction = this._freeSelectionDownHandler.bind(this);
        this._handleLeftAction = this._freeSelectionLeftHandler.bind(this);
        this._handleRightAction = this._freeSelectionRightHandler.bind(this);
      }
      else {
        this._handleUpAction = this._selectPreviousHandlerItem.bind(this);
        this._handleDownAction = this._selectNextHandlerItem.bind(this);
      }
      this._handleManagerActive = true;
    }
    deactivateHandlerManagment() {
      this._handleManagerActive = false;
      if (globalHandledSprite == this) {
        this._deactivateHandler();
      }
      this._handleUpAction = null;
      this._handleDownAction = null;
      this._handleLeftAction = null;
      this._handleRightAction = null;
    }
    _handleKeyboardInputs() {
      try {
        if (Input.isTriggered('left')) {
          this._handleKeyLeft();
        }
        else if (Input.isTriggered('right')) {
          this._handleKeyRight();
        }
        else if (Input.isTriggered('up')) {
          this._handleKeyUp();
        }
        else if (Input.isTriggered('down')) {
          this._handleKeyDown();
        }
        else if (Input.isTriggered('ok')) {
          this._handleKeyOk();
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    _handleKeyLeft(ignoreNavigation = false) {
      try {
        if (this.isVerticalKeyboardNavigation() || ignoreNavigation) {
          if (this._handleLeftAction) {
            this._handleLeftAction();
            this._onActionHandled();
          }
        }
        else {
          this._handleKeyUp(true);
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    _handleKeyRight(ignoreNavigation = false) {
      try {
        if (this.isVerticalKeyboardNavigation() || ignoreNavigation) {
          if (this._handleRightAction) {
            this._handleRightAction();
            this._onActionHandled();
          }
        }
        else {
          this._handleKeyDown(true);
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    _handleKeyUp(ignoreNavigation = false) {
      try {
        if (this.isVerticalKeyboardNavigation() || ignoreNavigation) {
          if (this._handleUpAction) {
            this._handleUpAction();
            this._onActionHandled();
          }
        }
        else {
          this._handleKeyLeft(true);
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    _handleKeyDown(ignoreNavigation = false) {
      try {
        if (this.isVerticalKeyboardNavigation() || ignoreNavigation) {
          if (this._handleDownAction) {
            this._handleDownAction();
            this._onActionHandled();
          }
        }
        else {
          this._handleKeyRight(true);
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    _handleKeyOk() {
      try {
        if (this._handleOkAction) {
          this._handleOkAction();
          this._onActionHandled();
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    _onActionHandled() {
      Input.clear();
    }
    _selectPreviousHandlerItem() {
      if (!this.isAnyHandlerSelected()) {
        this._trySelectHandler(0);
      }
      else {
        this._trySelectHandler(this._selectedHandlerIndex() - 1);
      }
    }
    _selectedHandlerIndex() {
      return globalHandledSprite.handledIndex;
    }
    _trySelectHandler(index) {
      let handlers = this._pGetAllHandlers();
      let handler = handlers.find(h => h.handledIndex == index);
      if (handler) {
        handler._activateHandler();
      }
      this._onActionHandled();
    }
    _pGetAllHandlers() {
      let handlers = [];
      for (let child of this.children) {
        if (child instanceof KHandledSprite) {
          if (child.isSupportKeyboardHandle()) {
            handlers.push(child);
          }
        }
      }
      return handlers;
    }
    _selectNextHandlerItem() {
      if (!this.isAnyHandlerSelected()) {
        this._trySelectHandler(0);
      }
      else {
        this._trySelectHandler(this._selectedHandlerIndex() + 1);
      }
    }
    _activateHandler() {
      if (globalHandledSprite && globalHandledSprite != this) {
        globalHandledSprite._deactivateHandler();
      }
      globalHandledSprite = this;
      this._handlerActive = true;
      this._activateHandlerVisually();
    }
    _activateHandlerVisually() {
      /*@ts-ignore*/
      this.filters = [new PIXI.filters.GlowFilter({ distance: 15, outerStrength: 4 })];
    }
    _deactivateHandler() {
      if (globalHandledSprite == this) {
        globalHandledSprite = null;
      }
      this._handlerActive = false;
      this._deactivateHandlerVisually();
    }
    _deactivateHandlerVisually() {
      this.filters = [];
    }
    _getClosestItemToYx(x, y, fromItems) {
      let items = [];
      if (y >= 0) {
        items = fromItems.filter(i => i.y > y);
      }
      else {
        items = fromItems.filter(i => i.y < Math.abs(y));
      }
      if (items.length == 0) {
        return null;
      }
      let itemsInRow = items.filter(i => i.x == x);
      if (itemsInRow.length > 0) {
        itemsInRow.sort((a, b) => a.y - b.y);
        return itemsInRow[0];
      }
      else {
        let distances = [];
        let rY = Math.abs(y);
        let index = 0;
        for (let item of items) {
          distances.push([index, Math.abs(item.x - x) + Math.abs(item.y - rY)]);
          index++;
        }
        distances.sort((a, b) => a[1] - b[1]);
        return items[distances[0][0]];
      }
    }
    _getClosestItemToXy(x, y, fromItems) {
      let items = [];
      if (x >= 0) {
        items = fromItems.filter(i => i.x > x);
      }
      else {
        items = fromItems.filter(i => i.x < Math.abs(x));
      }
      if (items.length == 0) {
        return null;
      }
      let itemsInRow = items.filter(i => i.y == y);
      if (itemsInRow.length > 0) {
        itemsInRow.sort((a, b) => a.x - b.x);
        return itemsInRow[0];
      }
      else {
        let distances = [];
        let rX = Math.abs(x);
        let index = 0;
        for (let item of items) {
          distances.push([index, Math.abs(item.x - rX) + Math.abs(item.y - y)]);
          index++;
        }
        distances.sort((a, b) => a[1] - b[1]);
        return items[distances[0][0]];
      }
    }
    _freeSelectionUpHandler() {
      try {
        let allItems = this._pGetAllHandlers();
        if (allItems.length == 0) {
          return;
        }
        if (this.isAnyHandlerSelected()) {
          let item = this._getClosestItemToYx(globalHandledSprite.x, -globalHandledSprite.y, allItems);
          if (item) {
            item._activateHandler();
          }
        }
        else {
          allItems[0]._activateHandler();
        }
      }
      catch (error) {
        console.warn(error);
      }
      this._onActionHandled();
    }
    _freeSelectionDownHandler() {
      try {
        let allItems = this._pGetAllHandlers();
        if (allItems.length == 0) {
          return;
        }
        if (this.isAnyHandlerSelected()) {
          let item = this._getClosestItemToYx(globalHandledSprite.x, globalHandledSprite.y, allItems);
          if (item) {
            item._activateHandler();
          }
        }
        else {
          allItems[0]._activateHandler();
        }
      }
      catch (error) {
        console.warn(error);
      }
      this._onActionHandled();
    }
    _freeSelectionLeftHandler() {
      try {
        let allItems = this._pGetAllHandlers();
        if (allItems.length == 0) {
          return;
        }
        if (this.isAnyHandlerSelected()) {
          let item = this._getClosestItemToXy(-globalHandledSprite.x, globalHandledSprite.y, allItems);
          if (item) {
            item._activateHandler();
          }
        }
        else {
          allItems[0]._activateHandler();
        }
      }
      catch (error) {
        console.warn(error);
      }
      this._onActionHandled();
    }
    _freeSelectionRightHandler() {
      try {
        let allItems = this._pGetAllHandlers();
        if (allItems.length == 0) {
          return;
        }
        if (this.isAnyHandlerSelected()) {
          let item = this._getClosestItemToXy(globalHandledSprite.x, globalHandledSprite.y, allItems);
          if (item) {
            item._activateHandler();
          }
        }
        else {
          allItems[0]._activateHandler();
        }
      }
      catch (error) {
        console.warn(error);
      }
      this._onActionHandled();
    }
  }
  var NBindingsConverter;
  (function (NBindingsConverter) {
    function ConvertBindingValue(sourceElement, bindingValue, element = null) {
      try {
        if (typeof bindingValue != "string") {
          return bindingValue;
        }
        // * CONVERT DIMENSION VALUES (HDP and DP)
        bindingValue = ConvertAllDimensionValues(bindingValue);
        // * FORCE EVAL
        if (bindingValue[0] == '@') {
          let evalString = bindingValue.replace("@", "");
          return eval(evalString);
        }
        // * EXTRA $ calculations (POST EVAL)
        if (bindingValue[0] == '~') {
          if (bindingValue.includes("$")) {
            let regex = new RegExp("(\\$[\\w+.]*)", "g");
            let result = regex.exec(bindingValue);
            if (result) {
              let captured = result[1];
              if (KString.any(captured)) {
                let resultValue = _convertSingleBindingValue$(sourceElement, captured, element);
                if (!resultValue) {
                  return null;
                }
                if (typeof resultValue == "function") {
                  return resultValue;
                }
                else {
                  if (KString.any(resultValue)) {
                    bindingValue = bindingValue.replace(captured, resultValue);
                    return ConvertBindingValue(sourceElement, bindingValue, element);
                  }
                  else {
                    return null;
                  }
                }
              }
            }
          }
          else {
            let evalString = bindingValue.replace("~", "");
            return eval(evalString);
          }
        }
        // * DEFAULT OLD STYLE SIMPLE $
        if (bindingValue.includes('$')) {
          return _convertSingleBindingValue$(sourceElement, bindingValue, element);
        }
      }
      catch (error) {
        console.warn(error);
      }
      return bindingValue;
    }
    NBindingsConverter.ConvertBindingValue = ConvertBindingValue;
    function ConvertAllDimensionValues(value) {
      if (value.includes('hdp')) {
        let regex = new RegExp("(\\d+)hdp", "g");
        let result = regex.exec(value);
        while (result) {
          let dpValue = parseInt(result[1]);
          let converted = ConvertDimenstionToPixels(dpValue, true);
          value = value.replace(result[0], converted.toString());
          result = regex.exec(value);
        }
      }
      if (value.includes('dp')) {
        let regex = new RegExp("(\\d+)dp", "g");
        let result = regex.exec(value);
        while (result) {
          let dpValue = parseInt(result[1]);
          let converted = ConvertDimenstionToPixels(dpValue, false);
          value = value.replace(result[0], converted.toString());
          result = regex.exec(value);
        }
      }
      return value;
    }
    NBindingsConverter.ConvertAllDimensionValues = ConvertAllDimensionValues;
    function _convertSingleBindingValue$(sourceElement, bindingValue, element) {
      try {
        let field = bindingValue.replace("$", "");
        if (field.includes(".")) { // * example: $parent.width
          let parts = field.split(".");
          // * Только одно вхождение (одна точка)
          field = parts[0];
          let subField = parts[1];
          if (!KString.any(field) && KString.any(subField)) {
            if (element) {
              return _convertSingleBindingValue$(element, "$" + subField, element);
            }
            else {
              return null;
            }
          }
          if (KString.any(field) && !KString.any(subField)) {
            return _convertSingleBindingValue$(sourceElement, "$" + field, element);
          }
          if (sourceElement) {
            let subData = _getSourceElementFieldValue(sourceElement, field);
            return _convertSingleBindingValue$(subData, "$" + subField, element);
          }
          else {
            return null;
          }
        }
        else {
          return _getSourceElementFieldValue(sourceElement, field);
        }
      }
      catch (error) {
        console.warn(error);
      }
      return null;
    }
    function _getSourceElementFieldValue(sourceElement, field) {
      try {
        if (sourceElement && sourceElement[field]) {
          if (typeof sourceElement[field] == "function") {
            return sourceElement[field]();
          }
          else {
            return sourceElement[field];
          }
        }
        else {
          return null; // * We can't find value
        }
      }
      catch (error) {
        console.warn(error);
      }
      return null;
    }
    function ConvertDimenstionToPixels(value = 0, isHalf = false) {
      try {
        if (Graphics.width == 816 && Graphics.height == 624) {
          return value;
        }
        let modX = Graphics.width / 816;
        let modY = Graphics.height / 624;
        let mod = (modX + modY) / 2;
        if (mod == 0)
          return 0;
        if (isHalf) {
          if (mod < 1) {
            let d = 1 - mod;
            mod += d / 2;
          }
          else if (mod > 1) {
            let d = mod - 1;
            mod = 1 + (d / 2);
          }
        }
        return Math.round(value * mod);
      }
      catch (error) {
        console.warn(error);
      }
      return 0;
    }
    NBindingsConverter.ConvertDimenstionToPixels = ConvertDimenstionToPixels;
    function ConvertPercentageValues(value, forField, spriteParent) {
      try {
        if (value.includes("%")) {
          let regex = new RegExp("(\\d+)%", "g");
          let result = regex.exec(value);
          while (result) {
            let percentageValue = parseInt(result[1]);
            let resultValue = 0;
            if (spriteParent) {
              let parentRefSize = NUtils.GetSpriteRealSize(forField, spriteParent);
              resultValue = parentRefSize * (percentageValue / 100.0);
            }
            value = value.replace(result[0], resultValue.toString());
            result = regex.exec(value);
          }
        }
      }
      catch (error) {
        console.warn(error);
      }
      return value;
    }
    NBindingsConverter.ConvertPercentageValues = ConvertPercentageValues;
    /**
     * Converts a shortcut string to a configuration object.
     * @param shortcut The shortcut string to convert.
     * @param outerSep The outer separator (default is ";").
     * @param innerSep The inner separator (default is ":").
     * @returns The configuration object.
     */
    function ConvertShortcut(shortcut, outerSep = ";", innerSep = ":") {
      try {
        const config = {};
        const values = shortcut.split(outerSep);
        for (const value of values) {
          if (!String(value).trim())
            continue;
          const pair = value.split(innerSep);
          const valueName = pair[0];
          let valueData = pair[1];
          if (valueData && valueData.includes("=")) {
            valueData = _convertValueDataFromShortcut(valueData);
          }
          else {
            if (valueData == null) {
              valueData = true;
            }
            else {
              if (isFinite(valueData))
                valueData = Number(valueData);
            }
          }
          config[valueName] = valueData;
        }
        return config;
      }
      catch (e) {
        console.warn(e);
        return {};
      }
    }
    NBindingsConverter.ConvertShortcut = ConvertShortcut;
    /**
     * Converts a value data string from a shortcut format to an object.
     * @param valueData The value data string to convert.
     * @returns The converted object.
     */
    function _convertValueDataFromShortcut(valueData) {
      try {
        if (valueData.includes("|")) {
          const data = {};
          const outerItems = valueData.split("|");
          for (const item of outerItems) {
            const p = item.split("=");
            const n = p.shift();
            let v = p;
            if (v.length === 0) {
              v = true;
            }
            else {
              if (v.length === 1) {
                v = v[0];
                if (isFinite(v))
                  v = Number(v);
              }
              else {
                v = _convertValueDataFromShortcut(v.join("="));
              }
            }
            if (n)
              data[n] = v;
          }
          return data;
        }
        const data = ConvertShortcut(valueData, ",", "=");
        return data;
      }
      catch (e) {
        console.warn(e);
        return {};
      }
    }
  })(NBindingsConverter || (NBindingsConverter = {}));
  let globalUnderMouseSprite = null;
  class KClickableSprite extends KHandledSprite {
    constructor() {
      super();
      this._isHovered = false;
      this._isPressed = false;
      this._isDisabled = false;
    }
    static GlobalUnderMouseSprite() {
      return globalUnderMouseSprite;
    }
    static DeactivateGlobalUnderMouseSprite(reference = null) {
      if (globalUnderMouseSprite && globalUnderMouseSprite != reference) {
        globalUnderMouseSprite._clearClickState();
      }
    }
    isCanHandleTouch() {
      return false;
    }
    isClickEnabled() {
      return this.worldVisible && !this.isDisabled();
    }
    isDisabled() {
      return this._isDisabled;
    }
    isPressed() {
      return this._isPressed;
    }
    isHovered() {
      return this._isHovered;
    }
    isFocused() {
      return this.isHandlerActive();
    }
    update() {
      super.update();
      if (this.isCanHandleTouch()) {
        this._updateTouch();
      }
    }
    onMouseEnter() {
      this._activateHandler();
      console.log("Mouse enter");
    }
    onMouseExit() {
      this._deactivateHandler();
      console.log("Mouse exit");
    }
    onClick() {
      this._handleKeyOk();
      console.log("Click");
    }
    setClickHandler(handler) {
      this._handleOkAction = handler;
    }
    onPress() {
      console.log("Press");
    }
    _updateTouch() {
      if (this.isClickEnabled()) {
        if (this.isHoveredByCursor()) {
          /*@ts-ignore*/
          if (!this.isHovered() && TouchInput.isHovered()) {
            this._isHovered = true;
            globalUnderMouseSprite = this;
            KHandledSprite.DeactivateGlobalHandledSprite(this);
            this.onMouseEnter();
          }
          if (TouchInput.isTriggered()) {
            KHandledSprite.DeactivateGlobalHandledSprite(this);
            this._isPressed = true;
            this.onPress();
          }
        }
        else {
          if (this.isHovered()) {
            this.onMouseExit();
          }
          this._clearClickState();
        }
        if (this.isPressed() && TouchInput.isReleased()) {
          this._isPressed = false;
          this.onClick();
        }
      }
      else {
        this._clearClickState();
      }
    }
    _clearClickState() {
      this._isHovered = false;
      this._isPressed = false;
      if (globalUnderMouseSprite == this) {
        globalUnderMouseSprite = null;
      }
    }
  }
  class KNSprite extends KClickableSprite {
    constructor() {
      super();
      this._scaleFactor = null;
      this._isNotHaveBounds = false;
      this._requiredFuncs = null;
      this._loadListeners = null;
      this._animationRules = null;
      this._uiJsonSchema = null;
      this._dataBindingsCache = null;
      this._uiConstants = null;
    }
    isNotHaveBounds() {
      return this._isNotHaveBounds == true;
    }
    isLoaded() {
      return true;
    }
    isShouldAlwaysKeepCentered() {
      return this._anchoredCenterX != null;
    }
    realWidth() {
      try {
        if (this.isNotHaveBounds()) {
          return 0;
        }
        if (this.width == 0) {
          let child = this.children[0];
          if (child) {
            if (child["realWidth"])
              return child["realWidth"]();
            else
              return child.width;
          }
        }
      }
      catch (error) {
        console.warn(error);
      }
      return this.width;
    }
    realHeight() {
      try {
        if (this.isNotHaveBounds()) {
          return 0;
        }
        if (this.height == 0) {
          let child = this.children[0];
          if (child) {
            if (child["realHeight"])
              return child["realHeight"]();
            else
              return child.height;
          }
        }
      }
      catch (error) {
        console.warn(error);
      }
      return this.height;
    }
    setJsonSchema(schema) {
      this._uiJsonSchema = schema;
    }
    getJsonSchema() {
      return this._uiJsonSchema;
    }
    addUIConstants(constants) {
      if (!this._uiConstants) {
        this._uiConstants = {};
      }
      this._uiConstants = Object.assign(this._uiConstants, constants);
    }
    uiConstant(key) {
      if (!this._uiConstants) {
        this._uiConstants = {};
      }
      return this._uiConstants[key];
    }
    dataBindings() {
      if (!this._dataBindingsCache) {
        this._dataBindingsCache = {
          x: (v) => this.setPosition(v, this.y),
          y: (v) => this.setPosition(this.x, v),
          position: (v) => this.setPosition(v.x, v.y),
          visible: (v) => {
            if (v) {
              this.visible = v;
            }
          },
          opacity: (v) => {
            if (v) {
              this.opacity = v;
            }
          },
          scale: (v) => {
            if (v) {
              this.scale.set(v);
            }
          },
          rotation: (v) => {
            if (v) {
              this.rotation = v;
            }
          },
          physicalBounds: (v) => {
            if (v) {
              this._isNotHaveBounds = !v;
            }
          },
          anchor: (v) => {
            if (v) {
              this.setCommonAnchor(v);
            }
          },
          animation: (v) => {
            if (v) {
              this.addAnimationRule(v);
            }
          },
          centeredScale: (v) => {
            if (v) {
              this.setCenteredScale(v);
            }
          }
        };
      }
      return this._dataBindingsCache;
    }
    refreshBindings(dataObject = null, resursive = true) {
      let _isUseDataObjectForChildrens = true;
      if (!dataObject) {
        dataObject = this;
        _isUseDataObjectForChildrens = false;
      }
      if (this._uiJsonSchema) {
        let { bindings } = this._uiJsonSchema;
        if (bindings) {
          for (let key in this.dataBindings()) {
            if (!bindings[key]) {
              continue;
            }
            try {
              let value = NBindingsConverter.ConvertBindingValue(dataObject, bindings[key], this);
              this.callBinding(key, value);
            }
            catch (error) {
              console.warn(error);
            }
          }
        }
      }
      if (resursive) {
        for (let child of this.children) {
          if (!child)
            continue;
          try {
            if (child['refreshBindings']) {
              if (_isUseDataObjectForChildrens) {
                child['refreshBindings'](dataObject, resursive);
              }
              else {
                child['refreshBindings'](null, resursive);
              }
            }
          }
          catch (error) {
            console.warn(error);
          }
        }
      }
    }
    callBinding(key, value) {
      try {
        let bindings = this.dataBindings();
        if (bindings[key]) {
          bindings[key](value);
        }
        else {
          console.warn("Binding not found", key);
        }
      }
      catch (error) {
        console.warn("Binding call error", error);
      }
    }
    addAnimationRule(rule) {
      try {
        if (!this._animationRules) {
          this._animationRules = [];
        }
        let animationRule = new KDNUI.AnimationRule(rule, this);
        this._animationRules.push(animationRule);
        return animationRule;
      }
      catch (error) {
        console.warn(error);
        return null;
      }
    }
    setAnimationRule(rule) {
      try {
        this._animationRules = []; // * Clear all rules
        if (rule) {
          return this.addAnimationRule(rule);
        }
      }
      catch (error) {
        console.warn(error);
      }
      return null;
    }
    addLoadListener(func) {
      try {
        if (this.isLoaded()) {
          func();
        }
        else {
          this._addLoadListener(func);
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    setCenteredScale(value) {
      if (!this.isLoaded()) {
        this.requireFunc("setCenteredScale", arguments);
        return;
      }
      this._refreshAnchoredCenter();
      this._scaleFactor = value;
    }
    // * For Animation Rule (callback)
    onBeforeChangeScaleFactor() {
      try {
        if (this.isShouldAlwaysKeepCentered()) {
          this._refreshAnchoredCenter();
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    // * Examples: setPosition(10, 10), setPosition("center") - for both x and y
    setPosition(x, y, bindedObject) {
      try {
        if (!this.isLoaded()) {
          this.requireFunc("setPosition", arguments);
          return;
        }
        if (typeof x == "string") {
          if (y == null || y == undefined) { // * If single string argument X, then Y = X
            y = x;
          }
          x = this.convertStringSizeValue(x, "x", bindedObject);
        }
        if (y == null || y == undefined) {
          y = this.y;
        }
        if (typeof y == "string") {
          y = this.convertStringSizeValue(y, "y", bindedObject);
        }
        if (!isNaN(x) && !isNaN(y)) {
          this.move(x, y);
        }
        else {
          console.warn("Invalid position values X, Y ", x, y);
        }
      }
      catch (error) {
        console.warn(error);
        this.move(0, 0);
      }
    }
    update() {
      super.update();
      this._updateAnimationRules();
      if (this._scaleFactor != null) {
        this._updateScaleFactor(); // * For Centered Scale
      }
    }
    convertStringSizeValue(value, forField, owner) {
      try {
        if (typeof value == "number") {
          return value;
        }
        /* @ts-ignore */
        if (isFinite(value)) {
          return Number(value);
        }
        if (typeof value != "string") {
          return 0;
        }
        if (value[0] == '$' || value[0] == '@') {
          let v = NBindingsConverter.ConvertBindingValue(owner, value, this);
          return this.convertStringSizeValue(v, forField, owner);
        }
        if (value.includes("prevX")) {
          value = value.replace("prevX", this.getPreviousChildData("x"));
          return this.convertStringSizeValue(value, forField, owner);
        }
        if (value.includes("prevY")) {
          value = value.replace("prevY", this.getPreviousChildData("y"));
          return this.convertStringSizeValue(value, forField, owner);
        }
        if (value.includes("prevHeight")) {
          value = value.replace("prevHeight", this.getPreviousChildData("height"));
          return this.convertStringSizeValue(value, forField, owner);
        }
        if (value.includes("prevWidth")) {
          value = value.replace("prevWidth", this.getPreviousChildData("width"));
          return this.convertStringSizeValue(value, forField, owner);
        }
        if (value.includes("prevEndX")) {
          value = value.replace("prevEndX", "prevX + prevWidth");
          return this.convertStringSizeValue(value, forField, owner);
        }
        if (value.includes("prevEndY")) {
          value = value.replace("prevEndY", "prevY + prevHeight");
          return this.convertStringSizeValue(value, forField, owner);
        }
        if (value.includes("end")) {
          value = value.replace("end", "100%");
        }
        if (value.includes("begin")) {
          if (forField == "y") {
            value = value.replace("begin", "-height");
          }
          else {
            value = value.replace("begin", "-width");
          }
        }
        if (value.includes("right")) {
          value = value.replace("right", "100% - width");
          return this.convertStringSizeValue(value, forField, owner);
        }
        if (value.includes("left")) {
          value = value.replace("left", "0");
          return this.convertStringSizeValue(value, forField, owner);
        }
        if (value.includes("top")) {
          value = value.replace("top", "0");
          return this.convertStringSizeValue(value, forField, owner);
        }
        if (value.includes("bottom")) {
          value = value.replace("bottom", "100% - height");
          return this.convertStringSizeValue(value, forField, owner);
        }
        // * Replace all %
        if (value.includes("%")) {
          value = NBindingsConverter.ConvertPercentageValues(value, forField, this.parent);
        }
        // * Replace HDP and DP
        value = NBindingsConverter.ConvertAllDimensionValues(value);
        if (value.includes('center')) {
          let v = this.convertStringSizeValue('50%', forField, owner);
          let exValue = NUtils.GetSpriteRealSize(forField, this);
          exValue = v - (exValue / 2);
          value = value.replace('center', exValue.toString());
          return this.convertStringSizeValue(value, forField, owner);
        }
        if (value.includes('height')) {
          let exValue = NUtils.GetSpriteRealSize('height', this);
          value = value.replace('height', exValue.toString());
          return this.convertStringSizeValue(value, forField, owner);
        }
        if (value.includes('width')) {
          let exValue = NUtils.GetSpriteRealSize('width', this);
          value = value.replace('width', exValue.toString());
          return this.convertStringSizeValue(value, forField, owner);
        }
        let v = eval(value);
        return this.convertStringSizeValue(v, forField, owner);
      }
      catch (error) {
        console.warn(error);
      }
      return 0;
    }
    getPreviousChildData(forField) {
      try {
        if (!this.parent)
          return 0;
        if (this.parent.children.length <= 1)
          return 0;
        let myIndex = this.parent.children.indexOf(this);
        let prevChild = this.parent.children[myIndex - 1];
        if (!prevChild)
          return 0;
        if (forField == "x") {
          return prevChild.x;
        }
        if (forField == "y") {
          return prevChild.y;
        }
        return NUtils.GetSpriteRealSize(forField, prevChild);
      }
      catch (error) {
        console.warn(error);
      }
      return 0;
    }
    requireFunc(funcName, args) {
      try {
        if (!this._requiredFuncs) {
          this._requiredFuncs = [];
        }
        this._requiredFuncs.push([funcName, args]);
      }
      catch (error) {
        console.warn(error);
      }
    }
    executeRequiredFuncs() {
      var _a;
      try {
        if (!this._requiredFuncs) {
          return;
        }
        for (let i = 0; i < this._requiredFuncs.length; i++) {
          let funcName = this._requiredFuncs[i][0];
          let args = this._requiredFuncs[i][1];
          try {
            (_a = this[funcName]) === null || _a === void 0 ? void 0 : _a.apply(this, args);
          }
          catch (error) {
            console.warn(error);
          }
        }
        this._requiredFuncs = null;
      }
      catch (error) {
        console.warn(error);
      }
    }
    executeLoadListeners() {
      try {
        if (!this._loadListeners) {
          return;
        }
        for (let i = 0; i < this._loadListeners.length; i++) {
          try {
            this._loadListeners[i]();
          }
          catch (error) {
            console.warn(error);
          }
        }
        this._loadListeners = null;
      }
      catch (error) {
        console.warn(error);
      }
    }
    _addLoadListener(func) {
      try {
        if (!this._loadListeners) {
          this._loadListeners = [];
        }
        this._loadListeners.push(func);
      }
      catch (error) {
        console.warn(error);
      }
    }
    _updateAnimationRules() {
      try {
        if (!this._animationRules) {
          return;
        }
        for (let i = 0; i < this._animationRules.length; i++) {
          this._animationRules[i].update();
          this._animationRules[i].applyAnimation(this);
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    _refreshAnchoredCenter() {
      try {
        if (this._lastCenterBaseX != this.x || this._lastCenterBaseY != this.y) {
          this._lastCenterBaseX = this.x;
          this._lastCenterBaseY = this.y;
        }
        this._anchoredCenterX = this._lastCenterBaseX + (this.realWidth() / 2);
        this._anchoredCenterY = this._lastCenterBaseY + (this.realHeight() / 2);
      }
      catch (error) {
        console.warn(error);
      }
    }
    _refreshRelativeToCenterPosition() {
      try {
        if (this._anchoredCenterX != null) {
          this.x = this._anchoredCenterX - (this.realWidth() * this.scale.x / 2);
          this.y = this._anchoredCenterY - (this.realHeight() * this.scale.y / 2);
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    _updateScaleFactor() {
      try {
        if (this.scale.x != this._scaleFactor || this.scale.y != this._scaleFactor) {
          this.scale.set(this._scaleFactor);
          if (this.isShouldAlwaysKeepCentered()) {
            this._refreshRelativeToCenterPosition();
          }
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
  }
  // * NUI 1.2
  // * rev 10.09.24
  // * "type": "face"
  class KNSprite_ActorFace extends KNSprite {
    /**
     * Creates an instance of Sprite_ActorFace.
     * @param settings The settings for the sprite.
     */
    constructor(settings) {
      super();
      this.settings = Object.assign({}, KNSprite_ActorFace.DefaultSettings(), settings);
      this._create();
      this.draw(this.settings.faceName, this.settings.faceIndex);
      this.flipX(this.settings.mirror);
    }
    /**
     * Checks if the sprite is loaded.
     * @returns True if the sprite is loaded, otherwise false.
     */
    isLoaded() {
      return true;
    }
    /**
     * Gets the default settings for the sprite.
     * @returns The default settings.
     */
    static DefaultSettings() {
      return {
        "faceName": "",
        "faceIndex": 0,
        "size": 144,
        "mirror": false
      };
    }
    /**
     * Gets the real width of the sprite.
     * @returns The real width.
     */
    realWidth() {
      if (this.isNotHaveBounds())
        return 0;
      return this.settings.size;
    }
    /**
     * Gets the real height of the sprite.
     * @returns The real height.
     */
    realHeight() {
      if (this.isNotHaveBounds())
        return 0;
      return this.settings.size;
    }
    /**
     * Gets the data bindings for the sprite.
     * @returns The data bindings.
     */
    dataBindings() {
      return Object.assign(super.dataBindings(), {
        size: (v) => this.setSize(v),
        faceName: (v) => this.draw(v, this.settings.faceIndex),
        faceIndex: (v) => this.draw(this.settings.faceName, v),
        mirror: (v) => this.flipX(v)
      });
    }
    /**
     * Sets the size of the sprite.
     * @param size The size to set.
     */
    setSize(size = 144) {
      try {
        size = this.convertStringSizeValue(size, 'width', this);
        if (size != null)
          this.settings.size = size;
        this._onResize();
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Draws the face image.
     * @param faceName The name of the face image.
     * @param faceIndex The index of the face image.
     */
    draw(faceName = "", faceIndex = 0) {
      try {
        this.settings.faceName = faceName;
        this.settings.faceIndex = faceIndex;
        if (faceName === "") {
          this.image.bitmap.clear();
          return;
        }
        this._drawFaceImage(faceName);
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Flips the sprite horizontally.
     * @param isMirror Whether to flip the sprite.
     */
    flipX(isMirror) {
      try {
        if (isMirror) {
          this.image.scale.x = -1;
          this.image.x = this.settings.size;
        }
        else {
          this.image.scale.x = 1;
          this.image.x = 0;
        }
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Creates the sprite.
     */
    _create() {
      try {
        this.image = new KSprite(new Bitmap(1, 1));
        this.addChild(this.image);
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Draws the face image.
     * @param faceName The name of the face image.
     */
    _drawFaceImage(faceName) {
      try {
        this._srcBitmap = ImageManager.loadFace(faceName);
        this._srcBitmap.addLoadListener(this._onBitmapLoaded.bind(this));
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Called when the bitmap is loaded.
     */
    _onBitmapLoaded() {
      try {
        this._onResize();
        this.executeRequiredFuncs();
        this.executeLoadListeners();
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Resizes the sprite.
     */
    _onResize() {
      try {
        this.image.bitmap = new Bitmap(this.realWidth(), this.realHeight());
        if (!this._srcBitmap)
          return;
        const b = this._srcBitmap;
        let fw, fh;
        if (KDX.isMZ()) {
          fw = ImageManager.faceWidth;
          fh = ImageManager.faceHeight;
        }
        else {
          /* @ts-ignore */
          fw = Window_Base._faceWidth;
          /* @ts-ignore */
          fh = Window_Base._faceHeight;
        }
        const size = this.settings.size;
        const sx = (this.settings.faceIndex % 4) * fw;
        const sy = Math.floor(this.settings.faceIndex / 4) * fh;
        this.image.bitmap.blt(b, sx, sy, fw, fh, 0, 0, size, size);
        this.setFrame(0, 0, size, size);
        this.flipX(this.settings.mirror);
      }
      catch (e) {
        console.warn(e);
      }
    }
  }
  // * NUI 1.0
  // * rev 10.09.24
  // * "type": "circle"
  class KNSprite_BaseCircle extends KNSprite {
    constructor(settings) {
      super();
      this._settings = Object.assign({}, KNSprite_BaseCircle.DefaultSettings(), settings);
      this._create();
      this._applySettings();
    }
    // * DefaultSettings in JSON format (for easy copy-paste)
    /**
     * Returns the default settings for the base circle sprite.
     * @returns {BaseCircleSpriteSettings} The default settings.
     */
    static DefaultSettings() {
      return {
        "width": 100,
        "height": 100,
        "fillColor": "#FFFFFF",
        "fillAlpha": 1,
        "strokeWidth": 4,
        "strokeColor": "#000000",
        "strokeAlpha": 1
      };
    }
    /**
     * Gets the current settings of the base circle sprite.
     * @returns {BaseCircleSpriteSettings} The current settings.
     */
    get settings() {
      return this._settings;
    }
    /**
     * Applies the current settings to the sprite.
     */
    refresh() {
      try {
        this._applySettings();
      }
      catch (error) {
        console.warn(error);
      }
    }
    /**
     * Returns an object with data bindings for width, height, size, stroke, and fill.
     * @returns {Record<string, any>} The data bindings.
     */
    dataBindings() {
      return Object.assign(super.dataBindings(), {
        width: (v) => {
          if (v)
            this.setSize(v, this.settings.height);
        },
        height: (v) => {
          if (v)
            this.setSize(this.settings.width, v);
        },
        size: (v) => {
          if (v)
            this.setSize(v.width, v.height);
        },
        stroke: (v) => {
          if (v)
            this.setStroke(v.color, v.width, v.alpha);
        },
        fill: (v) => {
          if (v)
            this.setFill(v.color, v.alpha);
        }
      });
    }
    /**
     * Sets the size of the base circle sprite.
     * @param {number | string} [width=100] - The width of the sprite.
     * @param {number | string} [height=100] - The height of the sprite.
     */
    setSize(width = 100, height = 100) {
      try {
        let _width = this.convertStringSizeValue(width, 'width', this);
        let _height = this.convertStringSizeValue(height, 'height', this);
        if (_width != null)
          this._settings.width = _width;
        if (_height != null)
          this._settings.height = _height;
        this.refresh();
      }
      catch (error) {
        console.warn(error);
      }
    }
    /**
     * Sets the stroke properties of the base circle sprite.
     * @param {string} [color="#FFFFFF"] - The stroke color.
     * @param {number} [width=0] - The stroke width.
     * @param {number} [alpha=1] - The stroke alpha.
     */
    setStroke(color = "#FFFFFF", width = 0, alpha = 1) {
      this._settings.strokeColor = color;
      this._settings.strokeWidth = width;
      this._settings.strokeAlpha = alpha;
      this.refresh();
    }
    /**
     * Sets the fill properties of the base circle sprite.
     * @param {string} [color="#FFFFFF"] - The fill color.
     * @param {number} [alpha=1] - The fill alpha.
     */
    setFill(color = "#FFFFFF", alpha = 1) {
      this._settings.fillColor = color;
      this._settings.fillAlpha = alpha;
      this.refresh();
    }
    /**
     * Creates the graphics object and adds it as a child.
     * @private
     */
    _create() {
      this._graphics = new PIXI.Graphics();
      this.addChild(this._graphics);
    }
    /**
     * Applies the current settings to the base circle sprite.
     * @private
     */
    _applySettings() {
      if (!this._settings)
        return;
      if (!this._graphics)
        return;
      this._graphics.clear();
      try {
        this._drawBaseCircle();
      }
      catch (error) {
        console.warn(error);
      }
      this._applySize();
    }
    /**
     * Draws the base circle with the current settings.
     * @private
     */
    _drawBaseCircle() {
      // * Fill circle
      this._graphics.beginFill(KColor.HexToColorNumber(this._settings.fillColor), this._settings.fillAlpha);
      this._graphics.drawEllipse(0, 0, this._settings.width / 2, this._settings.height / 2);
      this._graphics.endFill();
      if (this._settings.strokeWidth > 0) {
        // * Stroke circle
        this._graphics.lineStyle(this._settings.strokeWidth, KColor.HexToColorNumber(this._settings.strokeColor), this._settings.strokeAlpha);
        this._graphics.drawEllipse(0, 0, this._settings.width / 2, this._settings.height / 2);
      }
    }
    /**
     * Applies the size settings to the base circle sprite and its graphics object.
     * @private
     */
    _applySize() {
      this.width = this._settings.width;
      this.height = this._settings.height;
      // * Круг (элипс) рисуется от центра, что не удобно  при расчёте координат, поэтому сдвигаем в левый вверхний угол
      this._graphics.position.set(this._settings.width / 2, this._settings.height / 2);
    }
  }
  // * NUI 1.0
  // * rev 09.09.24
  // * "type": "rect"
  class KNSprite_BaseRect extends KNSprite {
    constructor(settings) {
      super();
      this._settings = Object.assign({}, KNSprite_BaseRect.DefaultSettings(), settings);
      this._create();
      this._applySettings();
    }
    // * DefaultSettings in JSON format (for easy copy-paste)
    /**
     * Returns the default settings for the base rectangle sprite.
     * @returns {BaseRectSpriteSettings} The default settings.
     */
    static DefaultSettings() {
      return {
        "width": 100,
        "height": 100,
        "corners": 0,
        "fillGradient": null,
        "gradientStart": { "x": 0, "y": 0 },
        "gradientEnd": { "x": 0, "y": 100 },
        "fillColor": "#FFFFFF",
        "fillAlpha": 1,
        "strokeWidth": 4,
        "strokeColor": "#000000",
        "strokeAlpha": 1
      };
    }
    /**
     * Returns the default gradient settings.
     * @returns {Record<string, string>} The default gradient settings.
     */
    static DefaultGradientSettings() {
      return {
        "0": "#9ff",
        "1": "#033"
      };
    }
    /**
     * Returns the default corner settings.
     * @returns {RectCorners} The default corner settings.
     */
    static DefaultCornerSettings() {
      return {
        "topLeft": 0,
        "topRight": 0,
        "bottomRight": 0,
        "bottomLeft": 0
      };
    }
    /**
     * Gets the current settings of the base rectangle sprite.
     * @returns {BaseRectSpriteSettings} The current settings.
     */
    get settings() {
      return this._settings;
    }
    /**
     * Checks if the sprite has a gradient fill.
     * @returns {boolean} True if the sprite has a gradient fill, otherwise false.
     */
    isHaveGradient() {
      return this._settings.fillGradient != null;
    }
    /**
     * Applies the current settings to the sprite.
     */
    refresh() {
      try {
        this._applySettings();
      }
      catch (error) {
        console.warn(error);
      }
    }
    /**
     * Returns an object with data bindings for width, height, size, stroke, fill, gradient start, and gradient end.
     * @returns {Record<string, any>} The data bindings.
     */
    dataBindings() {
      return Object.assign(super.dataBindings(), {
        width: (v) => {
          if (v)
            this.setSize(v, this.settings.height);
        },
        height: (v) => {
          if (v)
            this.setSize(this.settings.width, v);
        },
        size: (v) => {
          if (v)
            this.setSize(v.width, v.height);
        },
        stroke: (v) => {
          if (v)
            this.setStroke(v.color, v.width, v.alpha);
        },
        fill: (v) => {
          if (v)
            this.setFill(v.color, v.alpha);
        },
        gradientStart: (v) => {
          if (v)
            this.setGradientStartEnd(v, this.settings.gradientEnd);
        },
        gradientEnd: (v) => {
          if (v)
            this.setGradientStartEnd(this.settings.gradientStart, v);
        }
      });
    }
    /**
     * Sets the size of the base rectangle sprite.
     * @param {number | string} [width=100] - The width of the sprite.
     * @param {number | string} [height=100] - The height of the sprite.
     */
    setSize(width = 100, height = 100) {
      try {
        let _width = this.convertStringSizeValue(width, 'width', this);
        let _height = this.convertStringSizeValue(height, 'height', this);
        if (_width != null)
          this._settings.width = _width;
        if (_height != null)
          this._settings.height = _height;
        this.refresh();
      }
      catch (error) {
        console.warn(error);
      }
    }
    /**
     * Sets the stroke properties of the base rectangle sprite.
     * @param {string} [color="#FFFFFF"] - The stroke color.
     * @param {number} [width=0] - The stroke width.
     * @param {number} [alpha=1] - The stroke alpha.
     */
    setStroke(color = "#FFFFFF", width = 0, alpha = 1) {
      this._settings.strokeColor = color;
      this._settings.strokeWidth = width;
      this._settings.strokeAlpha = alpha;
      this.refresh();
    }
    /**
     * Sets the fill properties of the base rectangle sprite.
     * @param {string} [color="#FFFFFF"] - The fill color.
     * @param {number} [alpha=1] - The fill alpha.
     */
    setFill(color = "#FFFFFF", alpha = 1) {
      this._settings.fillColor = color;
      this._settings.fillAlpha = alpha;
      this._settings.fillGradient = null;
      this.refresh();
    }
    /**
     * Sets the gradient start and end points for the base rectangle sprite.
     * @param {{ x: number, y: number }} start - The start point of the gradient.
     * @param {{ x: number, y: number }} end - The end point of the gradient.
     */
    setGradientStartEnd(start, end) {
      try {
        if (start) {
          start.x = this.convertStringSizeValue(start.x, 'width', this);
          start.y = this.convertStringSizeValue(start.y, 'height', this);
        }
        if (end) {
          end.x = this.convertStringSizeValue(end.x, 'width', this);
          end.y = this.convertStringSizeValue(end.y, 'height', this);
        }
        this._settings.gradientStart = start;
        this._settings.gradientEnd = end;
        this.refresh();
      }
      catch (error) {
        console.warn(error);
      }
    }
    /**
     * Creates the graphics object and adds it as a child.
     * @private
     */
    _create() {
      this._graphics = new PIXI.Graphics();
      this.addChild(this._graphics);
    }
    /**
     * Applies the current settings to the base rectangle sprite.
     * @private
     */
    _applySettings() {
      if (!this._settings)
        return;
      if (!this._graphics)
        return;
      this._graphics.clear();
      try {
        this._applyGradient();
        this._drawCornerRect();
      }
      catch (error) {
        console.warn(error);
      }
      this._applySize();
    }
    /**
     * Applies the gradient fill to the base rectangle sprite.
     * @private
     */
    _applyGradient() {
      try {
        if (!this.isHaveGradient())
          return;
        if (KDX.isMV())
          return;
        let gradientFillSettings = Object.assign({}, KNSprite_BaseRect.DefaultGradientSettings(), this._settings.fillGradient);
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        let gradient = ctx.createLinearGradient(this._settings.gradientStart.x, this._settings.gradientStart.y, this._settings.gradientEnd.x, this._settings.gradientEnd.y);
        for (let key in gradientFillSettings) {
          let color = this._convertGradientStopColor(gradientFillSettings[key]);
          gradient.addColorStop(Number(key), color);
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this._settings.width, this._settings.height);
        let texture = PIXI.Texture.from(canvas);
        this._graphics.beginTextureFill({ texture: texture });
      }
      catch (error) {
        console.warn(error);
      }
    }
    /**
     * Converts a gradient stop color to a CSS color string.
     * @param {string} color - The color to convert.
     * @returns {string} The converted color.
     * @private
     */
    _convertGradientStopColor(color) {
      if (!KString.any(color))
        return "#000000";
      try {
        if (color.includes("%")) {
          let [hex, opacity] = color.split("%");
          return KColor.HexToCss(hex, parseFloat(opacity));
        }
        else {
          return color;
        }
      }
      catch (error) {
        console.warn(error);
      }
      return "#000000";
    }
    /**
     * Draws the rectangle with rounded corners.
     * @private
     */
    _drawCornerRect() {
      try {
        if (typeof this._settings.corners == "number") {
          this._drawRoundRect(this._settings.corners);
        }
        else {
          let corners = Object.assign({}, KNSprite_BaseRect.DefaultCornerSettings(), this.settings.corners);
          this._drawAllCornersRect(corners);
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    /**
     * Draws a rounded rectangle.
     * @param {number} radius - The radius of the corners.
     * @private
     */
    _drawRoundRect(radius) {
      if (!this.isHaveGradient()) {
        this._graphics.beginFill(KColor.HexToColorNumber(this._settings.fillColor), this._settings.fillAlpha);
      }
      this._graphics.drawRoundedRect(0, 0, this._settings.width, this._settings.height, radius);
      if (this._settings.strokeWidth > 0) {
        let strokeWidth = this._settings.strokeWidth;
        // * Draw Stroke Around the Rect
        this._graphics.lineStyle(this._settings.strokeWidth, KColor.HexToColorNumber(this._settings.strokeColor), this._settings.strokeAlpha);
        this._graphics.drawRoundedRect(-strokeWidth / 2, -strokeWidth / 2, this._settings.width + strokeWidth / 2, this._settings.height + strokeWidth / 2, radius);
      }
      if (!this.isHaveGradient()) {
        this._graphics.endFill();
      }
    }
    /**
     * Draws a rectangle with different corner radii.
     * @param {RectCorners} corners - The radii of the corners.
     * @private
     */
    _drawAllCornersRect(corners) {
      if (!this.isHaveGradient()) {
        this._graphics.beginFill(KColor.HexToColorNumber(this._settings.fillColor), this._settings.fillAlpha);
      }
      this._drawRoundedRectComplex(0, 0, this._settings.width, this._settings.height, corners.topLeft, corners.topRight, corners.bottomRight, corners.bottomLeft);
      if (this._settings.strokeWidth > 0) {
        let strokeWidth = this._settings.strokeWidth;
        // * Draw Stroke Around the Rect
        this._graphics.lineStyle(this._settings.strokeWidth, KColor.HexToColorNumber(this._settings.strokeColor), this._settings.strokeAlpha);
        this._drawRoundedRectComplex(-strokeWidth / 2, -strokeWidth / 2, this._settings.width + strokeWidth / 2, this._settings.height + strokeWidth / 2, corners.topLeft, corners.topRight, corners.bottomRight, corners.bottomLeft);
        // this._graphics.closePath();
      }
      if (!this.isHaveGradient()) {
        this._graphics.endFill();
      }
    }
    /**
     * Draws a complex rounded rectangle with different corner radii.
     * @param {number} x - The x-coordinate of the rectangle.
     * @param {number} y - The y-coordinate of the rectangle.
     * @param {number} width - The width of the rectangle.
     * @param {number} height - The height of the rectangle.
     * @param {number} radiusTL - The radius of the top-left corner.
     * @param {number} radiusTR - The radius of the top-right corner.
     * @param {number} radiusBR - The radius of the bottom-right corner.
     * @param {number} radiusBL - The radius of the bottom-left corner.
     * @private
     */
    _drawRoundedRectComplex(x, y, width, height, radiusTL, radiusTR, radiusBR, radiusBL) {
      this._graphics.moveTo(x + radiusTL, y);
      this._graphics.lineTo(x + width - radiusTR, y);
      if (radiusTR > 0)
        this._graphics.quadraticCurveTo(x + width, y, x + width, y + radiusTR);
      this._graphics.lineTo(x + width, y + height - radiusBR);
      if (radiusBR > 0)
        this._graphics.quadraticCurveTo(x + width, y + height, x + width - radiusBR, y + height);
      this._graphics.lineTo(x + radiusBL, y + height);
      if (radiusBL > 0)
        this._graphics.quadraticCurveTo(x, y + height, x, y + height - radiusBL);
      this._graphics.lineTo(x, y + radiusTL);
      if (radiusTL > 0)
        this._graphics.quadraticCurveTo(x, y, x + radiusTL, y);
    }
    /**
     * Applies the size settings to the base rectangle sprite and its graphics object.
     * @private
     */
    _applySize() {
      this.width = this._settings.width;
      this.height = this._settings.height;
    }
  }
  // * NUI 1.1
  // * rev 11.09.24
  // * "type": "gauge"
  class KNSprite_Gauge extends KNSprite {
    constructor(_settings) {
      super();
      this._settings = _settings;
      this._settings = Object.assign({}, KNSprite_Gauge.DefaultSettings(), _settings);
      this._loaded = false;
      this._lastValue = 1;
      this._create();
      this._applySettings();
    }
    /**
     * Returns the default settings for the gauge sprite.
     * @returns {GaugeSettings} The default settings.
     */
    static DefaultSettings() {
      return {
        "fillMode": "color",
        "fillColor": "#ffffff",
        "fillOpacity": 255,
        "imageName": "",
        "folderName": "pictures",
        "margins": 2,
        "width": "auto",
        "height": "auto",
        "mask": "",
        "backColor": "#000000",
        "backImage": "",
        "backOpacity": 255,
        "vertical": false
      };
    }
    /**
     * Checks if the gauge sprite is loaded.
     * @returns {boolean} True if loaded, otherwise false.
     */
    isLoaded() {
      try {
        return this._loaded === true;
      }
      catch (e) {
        console.warn(e);
      }
      return false;
    }
    /**
     * Gets the real width of the gauge sprite.
     * @returns {number} The real width.
     */
    realWidth() {
      try {
        if (this.isNotHaveBounds())
          return 0;
        if (this._settings.width !== "auto") {
          return this._settings.width;
        }
        else if (this._gaugeSpr) {
          return this._gaugeSpr.realWidth();
        }
      }
      catch (e) {
        console.warn(e);
      }
      return this.width;
    }
    /**
     * Gets the real height of the gauge sprite.
     * @returns {number} The real height.
     */
    realHeight() {
      try {
        if (this.isNotHaveBounds())
          return 0;
        if (this._settings.height !== "auto") {
          return this._settings.height;
        }
        else if (this._gaugeSpr) {
          return this._gaugeSpr.realHeight();
        }
      }
      catch (e) {
        console.warn(e);
      }
      return this.height;
    }
    /**
     * Returns an object with data bindings for width, height, size, rate, fillImage, fillColor, and fillOpacity.
     * @returns {Record<string, any>} The data bindings.
     */
    dataBindings() {
      return Object.assign(super.dataBindings(), {
        width: (v) => {
          if (v)
            this.setSize(v, this._settings.height);
        },
        height: (v) => {
          if (v)
            this.setSize(this._settings.width, v);
        },
        size: (v) => {
          if (v)
            this.setSize(v.width, v.height);
        },
        rate: (v) => {
          if (v)
            this.draw(v);
        },
        fillImage: (v) => {
          if (v)
            this.setFillImage(v);
        },
        fillColor: (v) => {
          if (v)
            this.setFillColor(v);
        },
        fillOpacity: (v) => {
          if (v)
            this.setFillOpacity(v);
        }
      });
    }
    /**
     * Draws the gauge with the specified percentage.
     * @param {number} [percent=1] - The percentage to draw.
     */
    draw(percent = 1) {
      try {
        if (!this.isLoaded()) {
          this.requireFunc('draw', arguments);
          return;
        }
        this._lastValue = percent;
        this._drawGauge(percent);
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Sets the fill opacity of the gauge.
     * @param {number} opacity - The fill opacity.
     */
    setFillOpacity(opacity) {
      try {
        this._settings.fillOpacity = opacity;
        if (this._fillLayer) {
          this._fillLayer.opacity = opacity;
        }
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Sets the fill color of the gauge.
     * @param {string} color - The fill color.
     */
    setFillColor(color) {
      try {
        this._settings.fillColor = color;
        if (this._fillColorBitmap) {
          this._createColorGaugeFillColorBitmap();
          this._drawGauge(this._lastValue);
        }
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Sets the fill image of the gauge.
     * @param {string} imageName - The name of the fill image.
     */
    setFillImage(imageName) {
      try {
        this._settings.imageName = imageName;
        this._applySettings();
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Sets the size of the gauge sprite.
     * @param {number | string} [width="auto"] - The width of the sprite.
     * @param {number | string} [height="auto"] - The height of the sprite.
     */
    setSize(width = "auto", height = "auto") {
      try {
        if (width !== "auto") {
          width = this.convertStringSizeValue(width, 'width', this);
        }
        if (height !== "auto") {
          height = this.convertStringSizeValue(height, 'height', this);
        }
        if (width)
          this._settings.width = width;
        if (height)
          this._settings.height = height;
        this._applySettings();
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Creates the base layer sprite.
     * @private
     */
    _create() {
      this._gaugeBaseLayer = new KSprite();
      this.addChild(this._gaugeBaseLayer);
    }
    /**
     * Applies the current settings to the gauge sprite.
     * @private
     */
    _applySettings() {
      try {
        this._loaded = false;
        this._destroyExistGauge();
        this._createGaugeFromSettings();
        this.draw(this._lastValue);
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Destroys the existing gauge sprite.
     * @private
     */
    _destroyExistGauge() {
      try {
        if (!this._gaugeSpr)
          return;
        this._gaugeSpr.removeFromParent();
        this._gaugeSpr = null;
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Creates the gauge sprite based on the current settings.
     * @private
     */
    _createGaugeFromSettings() {
      try {
        this._gaugeSpr = new KNSprite();
        this._gaugeBaseLayer.addChild(this._gaugeSpr);
        switch (this._settings.fillMode) {
          case "image":
            this._createImageGauge();
            break;
          case "plane":
            this._createPlaneGauge();
            break;
          case "color":
            this._createColorGauge();
            break;
          default:
            console.warn("Unknown Gauge fillMode: " + this._settings.fillMode);
        }
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Creates the image gauge.
     * @private
     */
    _createImageGauge() {
      try {
        this._gaugeSourceImage = new KNSprite_Image({
          imageName: this._settings.imageName,
          folderName: this._settings.folderName,
          width: this._settings.width,
          height: this._settings.height
        });
        this._gaugeSourceImage.addLoadListener(this._onGaugeFillImageLoaded.bind(this));
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Handles the event when the gauge fill image is loaded.
     * @private
     */
    _onGaugeFillImageLoaded() {
      try {
        let width = this._gaugeSourceImage.realWidth();
        let height = this._gaugeSourceImage.realHeight();
        this._addBackground(width, height);
        this._fillLayer = new KSprite(new Bitmap(width, height));
        this._fillLayer.opacity = this._settings.fillOpacity;
        this._gaugeSpr.addChild(this._fillLayer);
        this._addMask();
        this._onGaugeLoadedAndReady();
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Handles the event when the gauge is loaded and ready.
     * @private
     */
    _onGaugeLoadedAndReady() {
      try {
        this._loaded = true;
        this.width = this.realWidth();
        this.height = this.realHeight();
        this.executeRequiredFuncs();
        this.executeLoadListeners();
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Creates the plane gauge.
     * @private
     */
    _createPlaneGauge() {
      try {
        // * Нельзя создать Plane Gauge с auto размером, поэтому задаём стандартные значения
        if (this._settings.width === "auto")
          this._settings.width = 80;
        if (this._settings.height === "auto")
          this._settings.height = 20;
        this._addBackground(this._settings.width, this._settings.height);
        this._fillLayer = new KNSprite_Plane({
          imageName: this._settings.imageName,
          folderName: this._settings.folderName,
          width: this._settings.width,
          height: this._settings.height,
          margins: this._settings.margins
        });
        this._fillLayer.opacity = this._settings.fillOpacity;
        this._gaugeSpr.addChild(this._fillLayer);
        this._addMask();
        this._onGaugeLoadedAndReady();
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Creates the color gauge.
     * @private
     */
    _createColorGauge() {
      try {
        // * Нельзя создать цветную Gauge с auto размером, поэтому задаём стандартные значения
        if (this._settings.width === "auto")
          this._settings.width = 80;
        if (this._settings.height === "auto")
          this._settings.height = 20;
        this._addBackground(this._settings.width, this._settings.height);
        this._fillLayer = new KSprite(new Bitmap(this._settings.width, this._settings.height));
        this._fillLayer.opacity = this._settings.fillOpacity;
        this._createColorGaugeFillColorBitmap();
        this._gaugeSpr.addChild(this._fillLayer);
        this._addMask();
        this._onGaugeLoadedAndReady();
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Creates the fill color bitmap for the color gauge.
     * @private
     */
    _createColorGaugeFillColorBitmap() {
      try {
        this._fillColorBitmap = new Bitmap(this._settings.width, this._settings.height);
        this._fillColorBitmap.fillAll(this._settings.fillColor);
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Adds the background to the gauge sprite.
     * @param {number} width - The width of the background.
     * @param {number} height - The height of the background.
     * @private
     */
    _addBackground(width, height) {
      try {
        if (!this._gaugeSpr)
          return;
        let background = null;
        if (KString.any(this._settings.backImage)) {
          background = this._createGaugeBackgroundImage();
        }
        else if (KString.any(this._settings.backColor)) {
          background = this._createGaugeBackgroundColor(width, height, this._settings.backColor);
        }
        if (background) {
          if (this._settings.backOpacity) {
            background.opacity = this._settings.backOpacity;
          }
          this._gaugeSpr.addChild(background);
        }
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Adds the mask to the gauge sprite.
     * @private
     */
    _addMask() {
      try {
        if (!this._gaugeSpr)
          return;
        if (!KString.any(this._settings.mask))
          return;
        const gaugeMask = new KNSprite_Image({
          imageName: this._settings.mask,
          folderName: this._settings.folderName,
          width: this._settings.width,
          height: this._settings.height
        });
        this._gaugeSpr.mask = gaugeMask.image;
        this._gaugeSpr.addChild(gaugeMask);
      }
      catch (e) {
        console.warn(e);
        this._gaugeSpr.mask = null;
      }
    }
    /**
     * Creates the background color for the gauge sprite.
     * @param {number} width - The width of the background.
     * @param {number} height - The height of the background.
     * @param {string} color - The color of the background.
     * @returns {KSprite} The background sprite.
     * @private
     */
    _createGaugeBackgroundColor(width, height, color) {
      try {
        const background = new KSprite(new Bitmap(width, height));
        background.fillAll(color);
        return background;
      }
      catch (e) {
        console.warn(e);
        return new KSprite();
      }
    }
    /**
     * Creates the background image for the gauge sprite.
     * @returns {KNSprite_Image} The background image sprite.
     * @private
     */
    _createGaugeBackgroundImage() {
      try {
        return new KNSprite_Image({
          imageName: this._settings.backImage,
          folderName: this._settings.folderName,
          width: this._settings.width,
          height: this._settings.height
        });
      }
      catch (e) {
        console.warn(e);
        return new KNSprite();
      }
    }
    /**
     * Draws the gauge with the specified percentage.
     * @param {number} percent - The percentage to draw.
     * @private
     */
    _drawGauge(percent) {
      try {
        if (!this._fillLayer)
          return;
        if (this._settings.vertical == true) {
          this._drawVertical(percent);
        }
        else {
          this._drawHorizontal(percent);
        }
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Draws the horizontal gauge based on the fill mode and percentage.
     * @param {number} percent - The percentage to fill the gauge.
     */
    _drawHorizontal(percent) {
      try {
        switch (this._settings.fillMode) {
          case "image":
            this._drawImageGauge(percent);
            break;
          case "plane":
            this._drawPlaneGauge(percent);
            break;
          case "color":
            this._drawColorGauge(percent);
            break;
        }
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Draws the image gauge with the specified percentage.
     * @param {number} percent - The percentage to draw.
     * @private
     */
    _drawImageGauge(percent) {
      try {
        this._fillLayer.bitmap.clear();
        const fillBitmap = this._gaugeSourceImage.image.bitmap;
        this._drawGaugeBitmapBased(percent, fillBitmap);
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Draws the gauge based on the specified bitmap and percentage.
     * @param {number} percent - The percentage to draw.
     * @param {Bitmap} fillBitmap - The bitmap to use for drawing.
     * @private
     */
    _drawGaugeBitmapBased(percent, fillBitmap) {
      try {
        const w = this.realWidth() * percent;
        const h = this.realHeight();
        this._fillLayer.bitmap.blt(fillBitmap, 0, 0, w, h, 0, 0);
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Draws the horizontal color gauge based on the percentage.
     * @param {number} percent - The percentage to fill the gauge.
     */
    _drawColorGauge(percent) {
      try {
        this._fillLayer.bitmap.clear();
        const fillBitmap = this._fillColorBitmap;
        this._drawGaugeBitmapBased(percent, fillBitmap);
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Draws the horizontal plane gauge based on the percentage.
     * @param {number} percent - The percentage to fill the gauge.
     */
    _drawPlaneGauge(percent) {
      try {
        const w = this.realWidth() * percent;
        const h = this.realHeight();
        if (this._fillLayer['setSize'])
          this._fillLayer['setSize'](w, h);
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Draws the vertical gauge based on the fill mode and percentage.
     * @param {number} percent - The percentage to fill the gauge.
     */
    _drawVertical(percent) {
      try {
        switch (this._settings.fillMode) {
          case "image":
            this._drawImageGaugeVertical(percent);
            break;
          case "plane":
            this._drawPlaneGaugeVertical(percent);
            break;
          case "color":
            this._drawColorGaugeVertical(percent);
            break;
        }
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Draws the vertical image gauge based on the percentage.
     * @param {number} percent - The percentage to fill the gauge.
     */
    _drawImageGaugeVertical(percent) {
      try {
        this._fillLayer.bitmap.clear();
        const fillBitmap = this._gaugeSourceImage.image.bitmap;
        this._drawGaugeBitmapBasedVertical(percent, fillBitmap);
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Draws the vertical gauge based on the bitmap and percentage.
     * @param {number} percent - The percentage to fill the gauge.
     * @param {Bitmap} fillBitmap - The bitmap to use for the gauge.
     */
    _drawGaugeBitmapBasedVertical(percent, fillBitmap) {
      try {
        const w = this.realWidth();
        const h = this.realHeight() * percent;
        this._fillLayer.bitmap.blt(fillBitmap, 0, 0, w, h, 0, 0);
        this._fillLayer.y = this.realHeight() - h;
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Draws the vertical color gauge based on the percentage.
     * @param {number} percent - The percentage to fill the gauge.
     */
    _drawColorGaugeVertical(percent) {
      try {
        this._fillLayer.bitmap.clear();
        const fillBitmap = this._fillColorBitmap;
        this._drawGaugeBitmapBasedVertical(percent, fillBitmap);
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Draws the vertical plane gauge based on the percentage.
     * @param {number} percent - The percentage to fill the gauge.
     */
    _drawPlaneGaugeVertical(percent) {
      try {
        const w = this.realWidth();
        const h = this.realHeight() * percent;
        if (this._fillLayer['setSize'])
          this._fillLayer['setSize'](w, h);
        this._fillLayer.y = this.realHeight() - h;
      }
      catch (e) {
        console.warn(e);
      }
    }
  }
  //NUI 1.0
  //rev 11.09.24
  //"type": "group"
  class KNSprite_Group extends KNSprite {
    constructor(_settings) {
      super();
      this._settings = _settings;
      this._isNeedWaitLoadingChild = false;
      this._settings = Object.assign({}, KNSprite_Group.DefaultSettings(), _settings);
      if (this._settings.horizontalNavigation === true) {
        this.isVerticalKeyboardNavigation = () => false;
      }
      if (this._settings.freeNavigation === true) {
        this.isFreeKeyboardNavigation = () => true;
      }
      this._applySettings();
      this._onResize();
    }
    /**
     * Gets the current settings of the image sprite.
     * @returns {GroupSpriteSettings} The current settings.
     */
    get settings() {
      return this._settings;
    }
    /**
     * Returns the default settings for the sprite group.
     * @returns {GroupSpriteSettings} The default settings.
     */
    static DefaultSettings() {
      return {
        "keyboardHandling": false,
        "horizontalNavigation": false,
        "freeNavigation": false,
        "width": "auto",
        "height": "auto"
      };
    }
    /**
     * Returns an object with data bindings for width, height, and size.
     * @returns {Record<string, any>} The data bindings.
     */
    dataBindings() {
      return Object.assign(super.dataBindings(), {
        width: (v) => {
          if (v)
            this.setSize(v, this._settings.height);
        },
        height: (v) => {
          if (v)
            this.setSize(this._settings.width, v);
        },
        size: (v) => {
          if (v)
            this.setSize(v.width, v.height);
        }
      });
    }
    /**
     * Updates the sprite group.
     */
    update() {
      super.update();
      try {
        if (this._isNeedWaitLoadingChild === true) {
          this.refreshBindings(this._dataObjectRef, true);
        }
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Refreshes the bindings for the sprite group.
     * @param {object} dataObject - The data object to bind.
     * @param {boolean} recursive - Whether to refresh bindings recursively.
     */
    refreshBindings(dataObject, recursive) {
      super.refreshBindings(dataObject, recursive);
      for (const c of this.children) {
        if (c instanceof KNSprite) {
          if (!c.isLoaded()) {
            this._startWaitLoading(dataObject);
            return;
          }
        }
      }
      this._isNeedWaitLoadingChild = false;
    }
    /**
     * Starts waiting for a child to load.
     * @param {object} dataObjectRef - The data object reference.
     */
    _startWaitLoading(dataObjectRef) {
      try {
        this._dataObjectRef = dataObjectRef;
        this._isNeedWaitLoadingChild = true;
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Sets the size of the sprite group.
     * @param {number | string} [width="auto"] - The width of the sprite group.
     * @param {number | string} [height="auto"] - The height of the sprite group.
     */
    setSize(width = 'auto', height = 'auto') {
      try {
        if (width !== "auto") {
          width = this.convertStringSizeValue(width, 'width', this);
        }
        if (height !== "auto") {
          height = this.convertStringSizeValue(height, 'height', this);
        }
        if (width != null)
          this._settings.width = width;
        if (height != null)
          this._settings.height = height;
        this._onResize();
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Gets the real width of the sprite group.
     * @returns {number} The real width.
     */
    realWidth() {
      try {
        if (this.isNotHaveBounds())
          return 0;
        if (this._settings.width === "auto") {
          return this._calculateMax("x", "width");
        }
      }
      catch (e) {
        console.warn(e);
      }
      return this._settings.width;
    }
    /**
     * Gets the real height of the sprite group.
     * @returns {number} The real height.
     */
    realHeight() {
      try {
        if (this.isNotHaveBounds())
          return 0;
        if (this._settings.height === "auto") {
          return this._calculateMax("y", "height");
        }
      }
      catch (e) {
        console.warn(e);
      }
      return this._settings.height;
    }
    /**
     * Calculates the maximum size of the sprite group.
     * @param {'x' | 'y'} axis - The axis to calculate.
     * @param {string} b - The size property to calculate.
     * @returns {number} The maximum size.
     */
    _calculateMax(axis, b) {
      let value = 0;
      try {
        for (const child of this.children) {
          const size = child[axis] + NUtils.GetSpriteRealSize(b, child);
          if (size > value)
            value = size;
        }
        if (value < 0)
          value = 0;
      }
      catch (e) {
        console.warn(e);
        return 0;
      }
      return value;
    }
    /**
     * Applies the current settings to the sprite group.
     * @private
     */
    _applySettings() {
      try {
        if (this._settings.keyboardHandling === true) {
          this.activateHandlerManagment();
        }
        else {
          this.deactivateHandlerManagment();
        }
      }
      catch (e) {
        console.warn(e);
      }
    }
    /**
     * Resizes the sprite group based on its real width and height.
     * @private
     */
    _onResize() {
      try {
        this.width = this.realWidth();
        this.height = this.realHeight();
      }
      catch (e) {
        console.warn(e);
      }
    }
  }
  // * NUI 1.0
  // * rev 14.09.24
  // * "type": "image"
  /**
   * Represents an image sprite used in the NUI system.
   * @class
   * @extends KNSprite
   */
  class KNSprite_Image extends KNSprite {
    /**
     * Constructs a new instance of the NUI_Sprite_Image class.
     * @param _settings - The optional settings for the image sprite.
     */
    constructor(_settings) {
      super();
      this._settings = _settings;
      this._isLoaded = false;
      this._settings = Object.assign({}, KNSprite_Image.DefaultSettings(), _settings);
      this._create();
      this._onResize();
      this.draw(this._settings.imageName);
    }
    // * DefaultSettings in JSON format (for easy copy-paste)
    /**
     * Returns the default settings for the image sprite.
     * @returns {ImageSpriteSettings} The default settings.
     */
    static DefaultSettings() {
      return {
        "width": "auto",
        "height": "auto",
        "imageName": "",
        "folderName": "pictures",
        "keepAspect": false,
        "useAspectSize": false
      };
    }
    /**
     * Gets the current settings of the image sprite.
     * @returns {ImageSpriteSettings} The current settings.
     */
    get settings() {
      return this._settings;
    }
    /**
     * Gets the image sprite.
     * @returns {KSprite} The image sprite.
     */
    get image() {
      return this._image;
    }
    /**
     * Checks if the image sprite is loaded.
     * @returns {boolean} True if loaded, otherwise false.
     */
    isLoaded() {
      try {
        /*if(this.settings.width != 'auto' && this.settings.height != 'auto') {
            return true;
        }*/
        return this._isLoaded == true;
      }
      catch (error) {
        console.warn(error);
      }
      return false;
    }
    /**
     * Gets the real width of the image sprite.
     * @returns {number} The real width.
     */
    realWidth() {
      if (this.isNotHaveBounds())
        return 0;
      if (this.settings.useAspectSize == true && this._aspectWidth) {
        return this._aspectWidth;
      }
      if (this.settings.width == 'auto') {
        if (this._srcBitmap) {
          return this._srcBitmap.width;
        }
        else {
          if (this._image.bitmap && this._image.bitmap.isReady()) {
            return this._image.bitmap.width;
          }
        }
      }
      else {
        return this.settings.width;
      }
      return this.width;
    }
    /**
     * Gets the real height of the image sprite.
     * @returns {number} The real height.
     */
    realHeight() {
      if (this.isNotHaveBounds())
        return 0;
      if (this.settings.useAspectSize == true && this._aspectHeight) {
        return this._aspectHeight;
      }
      if (this.settings.height == 'auto') {
        if (this._srcBitmap) {
          return this._srcBitmap.height;
        }
        else {
          if (this._image.bitmap && this._image.bitmap.isReady()) {
            return this._image.bitmap.height;
          }
        }
      }
      else {
        return this.settings.height;
      }
      return this.height;
    }
    /**
     * Sets the image for the sprite.
     * @param {string} imageName - The name of the image.
     * @param {string} [folderName] - The name of the folder containing the image.
     */
    setImage(imageName, folderName) {
      if (KString.any(folderName)) {
        this._settings.folderName = folderName;
      }
      this.draw(imageName);
    }
    /**
     * Returns an object with data bindings for width, height, size, image, and icon.
     * @returns {Record<string, any>} The data bindings.
     */
    dataBindings() {
      return Object.assign(super.dataBindings(), {
        width: (v) => {
          if (v)
            this.setSize(v, this.settings.height);
        },
        height: (v) => {
          if (v)
            this.setSize(this.settings.width, v);
        },
        size: (v) => {
          if (v)
            this.setSize(v.width, v.height);
        },
        image: (v) => { this.draw(v); },
        icon: (v) => { this.drawIcon(v); }
      });
    }
    /**
     * Sets the size of the image sprite.
     * @param {number | string} [width='auto'] - The width of the sprite.
     * @param {number | string} [height='auto'] - The height of the sprite.
     */
    setSize(width = 'auto', height = 'auto') {
      try {
        if (width != 'auto')
          width = this.convertStringSizeValue(width, 'width', this);
        if (height != 'auto')
          height = this.convertStringSizeValue(height, 'height', this);
        if (width != null)
          this._settings.width = width;
        if (height != null)
          this._settings.height = height;
        this._onResize();
      }
      catch (error) {
        console.warn(error);
      }
    }
    /**
     * Draws an icon on the sprite.
     * @param {number} iconIndex - The index of the icon.
     */
    drawIcon(iconIndex) {
      try {
        if (typeof (iconIndex) == 'number') {
          this.draw(iconIndex);
        }
        else {
          this.draw("");
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    /**
     * Draws an image or icon on the sprite.
     * @param {string | number} [imageName=""] - The name of the image or the index of the icon.
     */
    draw(imageName = "") {
      if (typeof (imageName) == 'string' && KString.any(imageName)) {
        this._drawImage(imageName);
        return;
      }
      if (typeof (imageName) == 'number' && imageName >= 0) {
        this._drawIcon(imageName);
        return;
      }
      this._srcBitmap = null;
      this._onResize();
    }
    /**
     * Draws an icon on the sprite.
     * @param {number} iconIndex - The index of the icon.
     * @private
     */
    _drawIcon(iconIndex) {
      try {
        let size = this.settings.width == 'auto' ? 32 : this.settings.width;
        this.settings.height = size;
        this._srcBitmap = new Bitmap(size, size);
        KBitmap.DrawIcon(this._srcBitmap, iconIndex, 0, 0);
        this._isLoaded = true;
        this._onResize();
      }
      catch (error) {
        console.warn(error);
      }
    }
    /**
     * Draws an image on the sprite.
     * @param {string} imageName - The name of the image.
     * @private
     */
    _drawImage(imageName) {
      this._isLoaded = false;
      this._srcBitmap = ImageManager.loadBitmap('img/' + this.settings.folderName + '/', imageName, 0, false);
      this._srcBitmap.addLoadListener(() => {
        this._isLoaded = true;
        this._onResize();
        this.executeRequiredFuncs();
        this.executeLoadListeners();
      });
    }
    /**
     * Creates the image sprite and adds it as a child.
     * @private
     */
    _create() {
      this._image = new KSprite(new Bitmap(1, 1));
      this.addChild(this._image);
    }
    /**
     * Resizes the image sprite.
     * @private
     */
    _onResize() {
      try {
        this._aspectWidth = null;
        this._aspectHeight = null;
        this._image.bitmap = new Bitmap(this.realWidth(), this.realHeight());
        if (!this._srcBitmap)
          return;
        let fw = this.realWidth();
        let fh = this.realHeight();
        if (this.settings.keepAspect) {
          let aspect = this._calculateAspect(this._image.bitmap.width, this._image.bitmap.height, this._srcBitmap.width, this._srcBitmap.height);
          fw = aspect.width;
          fh = aspect.height;
          if (fh < this._image.bitmap.height) {
            this._aspectHeight = fh;
          }
          else {
            this._aspectHeight = this._image.bitmap.height;
          }
          if (fw < this._image.bitmap.width) {
            this._aspectWidth = fw;
          }
          else {
            this._aspectWidth = this._image.bitmap.width;
          }
        }
        this._image.bitmap.blt(this._srcBitmap, 0, 0, this._srcBitmap.width, this._srcBitmap.height, 0, 0, fw, fh);
      }
      catch (error) {
        console.warn(error);
      }
    }
    /**
     * Calculates the aspect ratio for resizing.
     * @param {number} containerWidth - The width of the container.
     * @param {number} containerHeight - The height of the container.
     * @param {number} width - The width of the image.
     * @param {number} height - The height of the image.
     * @returns {{ width: number, height: number }} The calculated width and height.
     * @private
     */
    _calculateAspect(containerWidth, containerHeight, width, height) {
      let aspect = width / height;
      let containerAspectRatio = containerWidth / containerHeight;
      if (aspect > containerAspectRatio) {
        width = containerWidth;
        height = width / aspect;
      }
      else {
        height = containerHeight;
        width = height * aspect;
      }
      return { width, height };
    }
  }
  // * NUI 1.0
  // * rev 10.09.24
  // * "type": "plane"
  /**
   * Represents a NineSlicePlane sprite used in NUI system.
   */
  class KNSprite_Plane extends KNSprite {
    /**
     * Constructs a new instance of the KNSprite_Plane class.
     * @param _settings - The settings for the plane sprite.
     */
    constructor(_settings) {
      super();
      this._settings = _settings;
      this._settings = Object.assign({}, KNSprite_Plane.DefaultSettings(), _settings);
      this._create();
      this._applySettings();
    }
    // * DefaultSettings in JSON format (for easy copy-paste)
    /**
     * Returns the default settings for the plane sprite.
     * @returns {PlaneSpriteSettings} The default settings.
     */
    static DefaultSettings() {
      return {
        "width": 100,
        "height": 100,
        "margins": 20,
        "imageName": "",
        "folderName": "pictures"
      };
    }
    /**
     * Gets the current settings of the plane sprite.
     * @returns {PlaneSpriteSettings} The current settings.
     */
    get settings() {
      return this._settings;
    }
    /**
     * Gets the real width of the sprite.
     * @returns {number} The real width.
     */
    realWidth() {
      if (this.isNotHaveBounds())
        return 0;
      return this.settings.width;
    }
    /**
     * Gets the real height of the sprite.
     * @returns {number} The real height.
     */
    realHeight() {
      if (this.isNotHaveBounds())
        return 0;
      return this.settings.height;
    }
    /**
     * Applies the current settings to the sprite.
     */
    refresh() {
      try {
        this._applySettings();
      }
      catch (error) {
        console.warn(error);
      }
    }
    /**
     * Returns an object with data bindings for width, height, and size.
     * @returns {Record<string, any>} The data bindings.
     */
    dataBindings() {
      return Object.assign(super.dataBindings(), {
        width: (v) => {
          if (v)
            this.setSize(v, this.settings.height);
        },
        height: (v) => {
          if (v)
            this.setSize(this.settings.width, v);
        },
        size: (v) => {
          if (v)
            this.setSize(v.width, v.height);
        },
      });
    }
    /**
     * Sets the size of the sprite.
     * @param {number | string} [width=100] - The width of the sprite.
     * @param {number | string} [height=100] - The height of the sprite.
     */
    setSize(width = 100, height = 100) {
      try {
        let _width = this.convertStringSizeValue(width, 'width', this);
        let _height = this.convertStringSizeValue(height, 'height', this);
        if (_width != null)
          this._settings.width = _width;
        if (_height != null)
          this._settings.height = _height;
        this.refresh();
      }
      catch (error) {
        console.warn(error);
      }
    }
    /**
     * Creates the plane container and adds it as a child.
     * @private
     */
    _create() {
      this._planeContainer = new KSprite();
      this.addChild(this._planeContainer);
    }
    /**
     * Applies the current settings to the plane sprite.
     * @private
     */
    _applySettings() {
      if (!this._settings)
        return;
      try {
        if (this._plane) {
          this._planeContainer.removeChild(this._plane);
          this._plane.destroy();
        }
        let margins = this._getMargins();
        let textureSource = ImageManager.loadBitmap('img/' + this._settings.folderName + "/", this._settings.imageName, 0, false);
        textureSource.addLoadListener(() => {
          let texture = new PIXI.Texture(textureSource.baseTexture);
          if (KDX.isMV()) {
            /*@ts-ignore*/
            this._plane = new PIXI.mesh.NineSlicePlane(texture, margins.left, margins.top, margins.right, margins.bottom);
          }
          else {
            this._plane = new PIXI.NineSlicePlane(texture, margins.left, margins.top, margins.right, margins.bottom);
          }
          this._planeContainer.addChild(this._plane);
          this._applySize();
        });
      }
      catch (error) {
        console.warn(error);
      }
      this._applySize();
    }
    /**
     * Returns the margins for the plane sprite.
     * @returns {PlaneMargins} The margins.
     * @private
     */
    _getMargins() {
      let margins = this._settings.margins;
      if (typeof margins === "number") {
        return {
          left: margins,
          top: margins,
          right: margins,
          bottom: margins
        };
      }
      else {
        return margins;
      }
    }
    /**
     * Applies the size settings to the plane sprite and its container.
     * @private
     */
    _applySize() {
      this.width = this._settings.width;
      this.height = this._settings.height;
      if (!this._plane)
        return;
      this._plane.width = this._settings.width;
      this._plane.height = this._settings.height;
    }
  }
  //NUI 1.0
  //rev 11.09.24
  //"type": "screen"
  class KNSprite_Screen extends KNSprite_Group {
    constructor() {
      super({
        width: Graphics.width,
        height: Graphics.height
      });
    }
    realWidth() {
      if (this.isNotHaveBounds())
        return 0;
      return Graphics.width;
    }
    realHeight() {
      if (this.isNotHaveBounds())
        return 0;
      return Graphics.height;
    }
  }


  var KDX;
  (function (KDX) {
    /**
     * The version of the KDX Library.
     * @type {string}
     */
    KDX.Version = "1.0";
    /**
     * Checks if the RPG Maker version is MV.
     * @returns {boolean} True if the RPG Maker version is MV, otherwise false.
     */
    /* @ts-ignore */
    KDX.isMV = () => Utils.RPGMAKER_NAME.includes("MV");
    /**
     * Checks if the RPG Maker version is MZ.
     * @returns {boolean} True if the RPG Maker version is MZ, otherwise false.
     */
    KDX.isMZ = () => !KDX.isMV();
  })(KDX || (KDX = {}));
  var KArray;
  (function (KArray) {
    /**
     * Deletes all occurrences of a specified item from an array.
     *
     * @template T - The type of elements in the array.
     * @param {T[]} array - The array from which to delete items.
     * @param {T} item - The item to delete from the array.
     * @returns {T[]} A new array with all occurrences of the specified item removed.
     */
    function deleteAll(array, item) {
      return array.filter((i) => i !== item);
    }
    KArray.deleteAll = deleteAll;
    /**
     * Returns a random item from an array.
     *
     * @template T - The type of elements in the array.
     * @param {T[]} array - The array from which to select a random item.
     * @returns {T} A random item from the array.
     */
    function randomItem(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    KArray.randomItem = randomItem;
    /**
     * Shuffles the elements of an array in place.
     *
     * @template T - The type of elements in the array.
     * @param {T[]} array - The array to shuffle.
     * @returns {T[]} The shuffled array.
     */
    function shuffle(array) {
      let currentIndex = array.length;
      let randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }
      return array;
    }
    KArray.shuffle = shuffle;
    /**
     * Finds an item in an array by a specified key and value.
     *
     * @template T - The type of elements in the array.
     * @param {T[]} array - The array to search.
     * @param {string} key - The key to match.
     * @param {any} value - The value to match.
     * @returns {T | null} The found item, or null if no item matches.
     */
    function getByKey(array, key, value) {
      try {
        return array.find((i) => i[key] === value);
      }
      catch (error) {
        console.warn(error);
      }
      return null;
    }
    KArray.getByKey = getByKey;
    /**
     * Finds an item in an array by its 'id' property.
     *
     * @template T - The type of elements in the array.
     * @param {T[]} array - The array to search.
     * @param {any} value - The value of the 'id' property to match.
     * @returns {T | null} The found item, or null if no item matches.
     */
    function getById(array, value) {
      return getByKey(array, "id", value);
    }
    KArray.getById = getById;
  })(KArray || (KArray = {}));
  var KNumber;
  (function (KNumber) {
    /**
    * Clamps a number within a specified range.
    *
    * @param {number} value - The value to clamp.
    * @param {number} min - The minimum value.
    * @param {number} max - The maximum value.
    * @returns {number} The clamped value.
    */
    KNumber.clamp = (value, min, max) => {
      return Math.min(Math.max(value, min), max);
    };
    /**
     * Generates a random number between the specified minimum and maximum values (inclusive).
     *
     * @param {number} min - The minimum value of the range.
     * @param {number} max - The maximum value of the range.
     * @returns {number} A random number between the minimum and maximum values.
     */
    KNumber.random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    /**
     * Checks if the given number is greater than zero.
     *
     * @param {number} number - The number to be checked.
     * @returns {boolean} `true` if the number is greater than zero, `false` otherwise.
     */
    KNumber.any = (number) => {
      if (number === null || number === undefined) {
        return false;
      }
      return number > 0;
    };
  })(KNumber || (KNumber = {}));
  var KString;
  (function (KString) {
    /**
         * Generates a random string of the specified length.
         * @param {number} length - The length of the generated string.
         * @returns {string} The generated string.
         */
    KString.randomString = (length) => {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    };
    /**
     * Replaces all occurrences of a substring in a string with a specified replacement.
     *
     * @param {string} source - The source string.
     * @param {string} search - The substring to search for.
     * @param {string} replacement - The replacement string.
     * @returns {string} The modified string with all occurrences of the substring replaced.
     */
    KString.replaceAll = (source, search, replacement) => {
      return source.split(search).join(replacement);
    };
    /**
     * Checks if a string is not null, not undefined, and has a length greater than 0 (after trimming).
     *
     * @param {string} str - The string to check.
     * @returns {boolean} True if the string is not null, not undefined, and has a length greater than 0 (after trimming), otherwise false.
     */
    KString.any = (str) => {
      if (str === null || str === undefined) {
        return false;
      }
      return str.length > 0 || str.trim().length > 0;
    };
  })(KString || (KString = {}));
  var KPoint;
  (function (KPoint) {
    /**
     * Clones a given Point object.
     *
     * @param {IPoint} p - The Point object to be cloned.
     * @returns {IPoint} A new Point object with the same x and y coordinates as the input.
     */
    function Clone(p) {
      return new PIXI.Point(p.x, p.y);
    }
    KPoint.Clone = Clone;
    /**
     * Checks if two Point objects have the same coordinates.
     *
     * @param {IPoint} p1 - The first Point object.
     * @param {IPoint} p2 - The second Point object.
     * @returns {boolean} True if both points have the same coordinates, false otherwise.
     */
    function IsSame(p1, p2) {
      return p1.x == p2.x && p1.y == p2.y;
    }
    KPoint.IsSame = IsSame;
    /**
     * Converts a Point object to a string representation.
     *
     * @param {IPoint} p - The Point object to be converted.
     * @returns {string} A string representation of the Point object.
     */
    function ToPrint(p) {
      return `(${p.x}, ${p.y})`;
    }
    KPoint.ToPrint = ToPrint;
    /**
     * Converts a Point object from screen coordinates to map coordinates.
     *
     * @param {IPoint} p - The Point object in screen coordinates.
     * @returns {IPoint} A new Point object in map coordinates.
     */
    function ConvertFromScreenToMap(p) {
      return new PIXI.Point($gameMap.canvasToMapX(p.x), $gameMap.canvasToMapY(p.y));
    }
    KPoint.ConvertFromScreenToMap = ConvertFromScreenToMap;
    /**
     * Converts a Point object from map coordinates to screen coordinates.
     *
     * @param {IPoint} p - The Point object in map coordinates.
     * @returns {IPoint} A new Point object in screen coordinates.
     */
    function ConvertFromMapToScreen(p) {
      let x = $gameMap.adjustX(p.x);
      let tw = $gameMap.tileWidth();
      x = Math.round(x * tw + tw / 2);
      let y = $gameMap.adjustY(p.y);
      let th = $gameMap.tileHeight();
      y = Math.round(y * th + th);
      return new PIXI.Point(x, y);
    }
    KPoint.ConvertFromMapToScreen = ConvertFromMapToScreen;
    /**
     * Rounds the coordinates of a Point object to the nearest integer.
     *
     * @param {IPoint} p - The Point object to be rounded.
     * @returns {IPoint} A new Point object with rounded coordinates.
     */
    function Round(p) {
      return new PIXI.Point(Math.round(p.x), Math.round(p.y));
    }
    KPoint.Round = Round;
    /**
     * Calculates the distance between two Point objects.
     *
     * @param {IPoint} p1 - The first Point object.
     * @param {IPoint} p2 - The second Point object.
     * @returns {number} The distance between the two points.
     */
    function Distance(p1, p2) {
      return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }
    KPoint.Distance = Distance;
    /**
     * Checks if a Point object is inside a given rectangle.
     *
     * @param {IPoint} p - The Point object to check.
     * @param {PIXI.Rectangle} rect - The rectangle to check against.
     * @returns {boolean} True if the point is inside the rectangle, false otherwise.
     */
    function IsInsideRect(p, rect) {
      return rect.contains(p.x, p.y);
    }
    KPoint.IsInsideRect = IsInsideRect;
    /**
     * Checks if a Point object is inside a given circle.
     *
     * @param {IPoint} p - The Point object to check.
     * @param {IPoint} center - The center of the circle.
     * @param {number} radius - The radius of the circle.
     * @returns {boolean} True if the point is inside the circle, false otherwise.
     */
    function IsInsideCircle(p, center, radius) {
      return Distance(p, center) <= radius;
    }
    KPoint.IsInsideCircle = IsInsideCircle;
  })(KPoint || (KPoint = {}));
  var KDX;
  (function (KDX) {
    class ParamLoader {
      /**
       * Creates an instance of ParamLoader.
       * @param _pluginName The name of the plugin.
       */
      constructor(_pluginName) {
        this._pluginName = _pluginName;
        this._ppNameToParseNext = "";
        this._paramsRaw = this.getPluginParametersByRoot(this._pluginName);
        this._params = this.parseParameters(this._paramsRaw);
      }
      /**
       * Gets the plugin parameters by the root name.
       * @param rootName The root name of the plugin.
       * @returns The plugin parameters if found, otherwise calls PluginManager.parameters.
       */
      getPluginParametersByRoot(rootName) {
        /* @ts-ignore */
        let allParametersRaw = PluginManager._parameters;
        for (const property in allParametersRaw) {
          if (allParametersRaw.hasOwnProperty(property)) {
            const pluginParameters = allParametersRaw[property];
            if (pluginParameters[rootName]) {
              return pluginParameters;
            }
          }
        }
        return PluginManager.parameters(rootName);
      }
      /**
       * Parses the parameters from the plugin.
       * @param paramSet The raw parameter set.
       * @returns The parsed parameters.
       */
      parseParameters(paramSet) {
        const params = {};
        for (const key in paramSet) {
          if (paramSet.hasOwnProperty(key)) {
            this._ppNameToParseNext = key;
            const clearKey = this.parseKey(key);
            const typeKey = this.parseKeyType(key);
            params[clearKey] = this.parseParamItem(typeKey, paramSet[key]);
          }
        }
        return params;
      }
      /**
       * Parses the key to remove the type.
       * @param keyRaw The raw key.
       * @returns The parsed key.
       */
      parseKey(keyRaw) {
        return keyRaw.split(":")[0];
      }
      /**
       * Parses the key to get the type.
       * @param keyRaw The raw key.
       * @returns The type of the key.
       */
      parseKeyType(keyRaw) {
        return keyRaw.split(":")[1];
      }
      /**
       * Writes a detailed error message to the console.
       */
      writeDetailedError() {
        try {
          if (!KString.any(this._ppNameToParseNext))
            return;
          console.warn(`Please, check Plugin Parameter ${this._ppNameToParseNext} in plugin ${this._pluginName}`);
        }
        catch (e) {
          console.warn(e);
        }
      }
      /**
       * Checks if the parameters are loaded.
       * @returns True if the parameters are loaded, otherwise false.
       */
      isLoaded() {
        return !!this._paramsRaw && this._paramsRaw.hasOwnProperty(this._pluginName);
      }
      /**
       * Checks if a parameter exists.
       * @param paramName The name of the parameter.
       * @returns True if the parameter exists, otherwise false.
       */
      isHasParameter(paramName) {
        return this._params.hasOwnProperty(paramName);
      }
      /**
       * Gets the value of a parameter.
       * @param paramName The name of the parameter.
       * @param def The default value if the parameter is not found.
       * @returns The value of the parameter or the default value.
       */
      getParam(paramName, def) {
        if (this.isHasParameter(paramName)) {
          const value = this._params[paramName];
          if (value != null)
            return value;
        }
        return def;
      }
      /**
       * Parses a parameter item based on its type.
       * @param type The type of the parameter.
       * @param item The parameter item.
       * @returns The parsed parameter item.
       */
      parseParamItem(type, item) {
        if (!type)
          return item;
        try {
          switch (type) {
            case "int":
            case "i":
              return Number(item);
            case "intA":
              return this.parseArray(item, "int");
            case "bool":
            case "b":
            case "e":
              return eval(item);
            case "struct":
            case "s":
              return this.parseStruct(item);
            case "structA":
              return this.parseStructArray(item);
            case "str":
              return item;
            case "strA":
              return this.parseArray(item, "str");
            case "note":
              return this.parseNote(item);
            case "json":
            case "j":
              return this.parseJson(item);
            case "jA":
              return this.parseArray(item, "json");
            default:
              return item;
          }
        }
        catch (e) {
          console.warn(e);
          this.writeDetailedError();
          return item;
        }
      }
      /**
       * Parses an array of items.
       * @param items The items to parse.
       * @param type The type of the items.
       * @returns The parsed array.
       */
      parseArray(items, type) {
        try {
          const elements = [];
          const parsed = JsonEx.parse(items);
          for (const p of parsed) {
            try {
              elements.push(this.parseParamItem(type, p));
            }
            catch (e) {
              console.warn(e);
            }
          }
          return elements;
        }
        catch (e) {
          console.warn(e);
          this.writeDetailedError();
          return [];
        }
      }
      /**
       * Parses a struct item.
       * @param item The item to parse.
       * @returns The parsed struct.
       */
      parseStruct(item) {
        try {
          if (!item || !KString.any(item))
            return null;
          const parsed = JsonEx.parse(item);
          return parsed ? this.parseParameters(parsed) : null;
        }
        catch (e) {
          console.warn(e);
          this.writeDetailedError();
          return null;
        }
      }
      /**
       * Parses an array of struct items.
       * @param items The items to parse.
       * @returns The parsed array of structs.
       */
      parseStructArray(items) {
        try {
          const elements = [];
          const parsed = JsonEx.parse(items);
          for (const p of parsed) {
            try {
              elements.push(this.parseStruct(p));
            }
            catch (e) {
              console.warn(e);
              this.writeDetailedError();
            }
          }
          return elements;
        }
        catch (e) {
          console.warn(e);
          this.writeDetailedError();
          return [];
        }
      }
      /**
       * Parses a note item.
       * @param item The item to parse.
       * @returns The parsed note.
       */
      parseNote(item) {
        try {
          const parsed = JsonEx.parse(item);
          return parsed ? parsed : item;
        }
        catch (e) {
          console.warn(e);
          this.writeDetailedError();
          return item;
        }
      }
      /**
       * Parses a JSON item.
       * @param item The item to parse.
       * @returns The parsed JSON.
       */
      parseJson(item) {
        try {
          const json = {};
          const parsed = JsonEx.parse(item);
          const elements = parsed.split('\n');
          for (const element of elements) {
            const cx = `{${element}}`;
            try {
              const item = JsonEx.parse(cx);
              for (const key in item) {
                if (item.hasOwnProperty(key)) {
                  json[key] = item[key];
                }
              }
            }
            catch (e) {
              console.warn(`Parameter ${element} has syntax errors, ignored`);
            }
          }
          return json;
        }
        catch (e) {
          console.warn(e);
          this.writeDetailedError();
          return null; // To return default value
        }
      }
    }
    KDX.ParamLoader = ParamLoader;
  })(KDX || (KDX = {}));
  var KDX;
  (function (KDX) {
    class TimedUpdate {
      /**
       * Creates an instance of TimedUpdate.
       * @param interval The interval in frames.
       * @param method The method to call on update.
       */
      constructor(interval, method) {
        this.interval = interval;
        this.method = method;
        this._timer = 0;
        this._once = false;
      }
      /**
       * Sets the number of repeats and the callback after completion.
       * @param repeatsLeft The number of repeats left.
       * @param afterCallback The callback to call after completion.
       */
      setAfter(repeatsLeft, afterCallback) {
        this._repeatsLeft = repeatsLeft;
        this._afterCallback = afterCallback;
      }
      /**
       * Updates the timer and calls the method if the interval is reached.
       */
      update() {
        if (this.interval == null)
          return;
        if (this._timer++ >= this.interval) {
          this.call();
          this._timer = 0;
          if (this._repeatsLeft != null) {
            this._repeatsLeft -= 1;
            if (this._repeatsLeft <= 0) {
              if (this._afterCallback)
                this._afterCallback();
            }
          }
          if (this._once)
            this.stop();
        }
      }
      /**
       * Sets the update to be called only once.
       */
      once() {
        this._once = true;
      }
      /**
       * Sets the method to call on update.
       * @param method The method to call on update.
       */
      onUpdate(method) {
        this.method = method;
      }
      /**
       * Stops the update.
       */
      stop() {
        this.interval = null;
      }
      /**
       * Checks if the update is still active.
       * @returns True if the update is active, otherwise false.
       */
      isAlive() {
        return this.interval != null;
      }
      /**
       * Randomizes the interval within a given range.
       * @param min The minimum value to add to the interval.
       * @param max The maximum value to add to the interval.
       */
      applyTimeRange(min, max) {
        if (!this.isAlive())
          return;
        const value = KNumber.random(min, max);
        this.interval += value;
      }
      /**
       * Calls the method.
       */
      call() {
        try {
          if (this.method)
            this.method();
        }
        catch (e) {
          console.warn(e);
        }
      }
    }
    KDX.TimedUpdate = TimedUpdate;
  })(KDX || (KDX = {}));
  //# sourceMappingURL=0_KDX.js.map

  /**
   * Minified by jsDelivr using Terser v5.19.2.
   * Original file: /npm/pixi-filters@5.3.0/dist/browser/pixi-filters.js
   *
   * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
   */
  /*!
   * pixi-filters - v5.3.0
   * Compiled Thu, 15 Feb 2024 16:39:05 UTC
   *
   * pixi-filters is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   */
  var __filters = function (e, t, r, n) { "use strict"; class i extends t.Filter { constructor(e) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n"), this.gamma = 1, this.saturation = 1, this.contrast = 1, this.brightness = 1, this.red = 1, this.green = 1, this.blue = 1, this.alpha = 1, Object.assign(this, e) } apply(e, t, r, n) { this.uniforms.gamma = Math.max(this.gamma, 1e-4), this.uniforms.saturation = this.saturation, this.uniforms.contrast = this.contrast, this.uniforms.brightness = this.brightness, this.uniforms.red = this.red, this.uniforms.green = this.green, this.uniforms.blue = this.blue, this.uniforms.alpha = this.alpha, e.applyFilter(this, t, r, n) } } class o extends t.Filter { constructor(e = 4, r = 3, n = !1) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", n ? "\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n" : "\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}"), this._kernels = [], this._blur = 4, this._quality = 3, this.uniforms.uOffset = new Float32Array(2), this._pixelSize = new t.Point, this.pixelSize = 1, this._clamp = n, Array.isArray(e) ? this.kernels = e : (this._blur = e, this.quality = r) } apply(e, t, r, n) { const i = this._pixelSize.x / t._frame.width, o = this._pixelSize.y / t._frame.height; let s; if (1 === this._quality || 0 === this._blur) s = this._kernels[0] + .5, this.uniforms.uOffset[0] = s * i, this.uniforms.uOffset[1] = s * o, e.applyFilter(this, t, r, n); else { const a = e.getFilterTexture(); let l, u = t, c = a; const f = this._quality - 1; for (let t = 0; t < f; t++)s = this._kernels[t] + .5, this.uniforms.uOffset[0] = s * i, this.uniforms.uOffset[1] = s * o, e.applyFilter(this, u, c, 1), l = u, u = c, c = l; s = this._kernels[f] + .5, this.uniforms.uOffset[0] = s * i, this.uniforms.uOffset[1] = s * o, e.applyFilter(this, u, r, n), e.returnFilterTexture(a) } } _updatePadding() { this.padding = Math.ceil(this._kernels.reduce(((e, t) => e + t + .5), 0)) } _generateKernels() { const e = this._blur, t = this._quality, r = [e]; if (e > 0) { let n = e; const i = e / t; for (let e = 1; e < t; e++)n -= i, r.push(n) } this._kernels = r, this._updatePadding() } get kernels() { return this._kernels } set kernels(e) { Array.isArray(e) && e.length > 0 ? (this._kernels = e, this._quality = e.length, this._blur = Math.max(...e)) : (this._kernels = [0], this._quality = 1) } get clamp() { return this._clamp } set pixelSize(e) { "number" == typeof e ? (this._pixelSize.x = e, this._pixelSize.y = e) : Array.isArray(e) ? (this._pixelSize.x = e[0], this._pixelSize.y = e[1]) : e instanceof t.Point ? (this._pixelSize.x = e.x, this._pixelSize.y = e.y) : (this._pixelSize.x = 1, this._pixelSize.y = 1) } get pixelSize() { return this._pixelSize } get quality() { return this._quality } set quality(e) { this._quality = Math.max(1, Math.round(e)), this._generateKernels() } get blur() { return this._blur } set blur(e) { this._blur = e, this._generateKernels() } } var s = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}"; class a extends t.Filter { constructor(e = .5) { super(s, "\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n"), this.threshold = e } get threshold() { return this.uniforms.threshold } set threshold(e) { this.uniforms.threshold = e } } const l = class extends t.Filter { constructor(e) { super(s, "uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n"), this.bloomScale = 1, this.brightness = 1, this._resolution = t.settings.FILTER_RESOLUTION, "number" == typeof e && (e = { threshold: e }); const r = Object.assign(l.defaults, e); this.bloomScale = r.bloomScale, this.brightness = r.brightness; const { kernels: n, blur: i, quality: u, pixelSize: c, resolution: f } = r; this._extractFilter = new a(r.threshold), this._extractFilter.resolution = f, this._blurFilter = n ? new o(n) : new o(i, u), this.pixelSize = c, this.resolution = f } apply(e, t, r, n, i) { const o = e.getFilterTexture(); this._extractFilter.apply(e, t, o, 1, i); const s = e.getFilterTexture(); this._blurFilter.apply(e, o, s, 1), this.uniforms.bloomScale = this.bloomScale, this.uniforms.brightness = this.brightness, this.uniforms.bloomTexture = s, e.applyFilter(this, t, r, n), e.returnFilterTexture(s), e.returnFilterTexture(o) } get resolution() { return this._resolution } set resolution(e) { this._resolution = e, this._extractFilter && (this._extractFilter.resolution = e), this._blurFilter && (this._blurFilter.resolution = e) } get threshold() { return this._extractFilter.threshold } set threshold(e) { this._extractFilter.threshold = e } get kernels() { return this._blurFilter.kernels } set kernels(e) { this._blurFilter.kernels = e } get blur() { return this._blurFilter.blur } set blur(e) { this._blurFilter.blur = e } get quality() { return this._blurFilter.quality } set quality(e) { this._blurFilter.quality = e } get pixelSize() { return this._blurFilter.pixelSize } set pixelSize(e) { this._blurFilter.pixelSize = e } }; let u = l; u.defaults = { threshold: .5, bloomScale: 1, brightness: 1, kernels: null, blur: 8, quality: 4, pixelSize: 1, resolution: t.settings.FILTER_RESOLUTION }; class c extends t.Filter { constructor(e = 8) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor(coord / size) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod(coord, size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, 4.0) + 2.5);\n\n    if (clamp(p.x, 0.0, 4.0) == p.x)\n    {\n        if (clamp(p.y, 0.0, 4.0) == p.y)\n        {\n            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n        }\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the grid position\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    // sample the color at grid position\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // brightness of the color as it's perceived by the human eye\n    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;\n\n    // determine the character to use\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}\n"), this.size = e } get size() { return this.uniforms.pixelSize } set size(e) { this.uniforms.pixelSize = e } } class f extends t.Filter { constructor(e) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float transformX;\nuniform float transformY;\nuniform vec3 lightColor;\nuniform float lightAlpha;\nuniform vec3 shadowColor;\nuniform float shadowAlpha;\n\nvoid main(void) {\n    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float light = texture2D(uSampler, vTextureCoord - transform).a;\n    float shadow = texture2D(uSampler, vTextureCoord + transform).a;\n\n    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));\n    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));\n    gl_FragColor = vec4(color.rgb * color.a, color.a);\n}\n"), this._thickness = 2, this._angle = 0, this.uniforms.lightColor = new Float32Array(3), this.uniforms.shadowColor = new Float32Array(3), Object.assign(this, { rotation: 45, thickness: 2, lightColor: 16777215, lightAlpha: .7, shadowColor: 0, shadowAlpha: .7 }, e), this.padding = 1 } _updateTransform() { this.uniforms.transformX = this._thickness * Math.cos(this._angle), this.uniforms.transformY = this._thickness * Math.sin(this._angle) } get rotation() { return this._angle / t.DEG_TO_RAD } set rotation(e) { this._angle = e * t.DEG_TO_RAD, this._updateTransform() } get thickness() { return this._thickness } set thickness(e) { this._thickness = e, this._updateTransform() } get lightColor() { return t.utils.rgb2hex(this.uniforms.lightColor) } set lightColor(e) { t.utils.hex2rgb(e, this.uniforms.lightColor) } get lightAlpha() { return this.uniforms.lightAlpha } set lightAlpha(e) { this.uniforms.lightAlpha = e } get shadowColor() { return t.utils.rgb2hex(this.uniforms.shadowColor) } set shadowColor(e) { t.utils.hex2rgb(e, this.uniforms.shadowColor) } get shadowAlpha() { return this.uniforms.shadowAlpha } set shadowAlpha(e) { this.uniforms.shadowAlpha = e } } class d extends t.Filter { constructor(e = 2, i = 4, o = t.settings.FILTER_RESOLUTION, s = 5) { let a, l; super(), "number" == typeof e ? (a = e, l = e) : e instanceof t.Point ? (a = e.x, l = e.y) : Array.isArray(e) && (a = e[0], l = e[1]), this.blurXFilter = new n.BlurFilterPass(!0, a, i, o, s), this.blurYFilter = new n.BlurFilterPass(!1, l, i, o, s), this.blurYFilter.blendMode = t.BLEND_MODES.SCREEN, this.defaultFilter = new r.AlphaFilter } apply(e, t, r, n) { const i = e.getFilterTexture(); this.defaultFilter.apply(e, t, r, n), this.blurXFilter.apply(e, t, i, 1), this.blurYFilter.apply(e, i, r, 0), e.returnFilterTexture(i) } get blur() { return this.blurXFilter.blur } set blur(e) { this.blurXFilter.blur = this.blurYFilter.blur = e } get blurX() { return this.blurXFilter.blur } set blurX(e) { this.blurXFilter.blur = e } get blurY() { return this.blurYFilter.blur } set blurY(e) { this.blurYFilter.blur = e } } const h = class extends t.Filter { constructor(e) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "uniform float radius;\nuniform float strength;\nuniform vec2 center;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nvoid main()\n{\n    vec2 coord = vTextureCoord * filterArea.xy;\n    coord -= center * dimensions.xy;\n    float distance = length(coord);\n    if (distance < radius) {\n        float percent = distance / radius;\n        if (strength > 0.0) {\n            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);\n        } else {\n            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n        }\n    }\n    coord += center * dimensions.xy;\n    coord /= filterArea.xy;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    gl_FragColor = color;\n}\n"), this.uniforms.dimensions = new Float32Array(2), Object.assign(this, h.defaults, e) } apply(e, t, r, n) { const { width: i, height: o } = t.filterFrame; this.uniforms.dimensions[0] = i, this.uniforms.dimensions[1] = o, e.applyFilter(this, t, r, n) } get radius() { return this.uniforms.radius } set radius(e) { this.uniforms.radius = e } get strength() { return this.uniforms.strength } set strength(e) { this.uniforms.strength = e } get center() { return this.uniforms.center } set center(e) { this.uniforms.center = e } }; let m = h; m.defaults = { center: [.5, .5], radius: 100, strength: 1 }; var g, v; (v = v || {}).stringify = (g = { "visit_linear-gradient": function (e) { return g.visit_gradient(e) }, "visit_repeating-linear-gradient": function (e) { return g.visit_gradient(e) }, "visit_radial-gradient": function (e) { return g.visit_gradient(e) }, "visit_repeating-radial-gradient": function (e) { return g.visit_gradient(e) }, visit_gradient: function (e) { var t = g.visit(e.orientation); return t && (t += ", "), e.type + "(" + t + g.visit(e.colorStops) + ")" }, visit_shape: function (e) { var t = e.value, r = g.visit(e.at), n = g.visit(e.style); return n && (t += " " + n), r && (t += " at " + r), t }, "visit_default-radial": function (e) { var t = "", r = g.visit(e.at); return r && (t += r), t }, "visit_extent-keyword": function (e) { var t = e.value, r = g.visit(e.at); return r && (t += " at " + r), t }, "visit_position-keyword": function (e) { return e.value }, visit_position: function (e) { return g.visit(e.value.x) + " " + g.visit(e.value.y) }, "visit_%": function (e) { return e.value + "%" }, visit_em: function (e) { return e.value + "em" }, visit_px: function (e) { return e.value + "px" }, visit_literal: function (e) { return g.visit_color(e.value, e) }, visit_hex: function (e) { return g.visit_color("#" + e.value, e) }, visit_rgb: function (e) { return g.visit_color("rgb(" + e.value.join(", ") + ")", e) }, visit_rgba: function (e) { return g.visit_color("rgba(" + e.value.join(", ") + ")", e) }, visit_color: function (e, t) { var r = e, n = g.visit(t.length); return n && (r += " " + n), r }, visit_angular: function (e) { return e.value + "deg" }, visit_directional: function (e) { return "to " + e.value }, visit_array: function (e) { var t = "", r = e.length; return e.forEach((function (e, n) { t += g.visit(e), n < r - 1 && (t += ", ") })), t }, visit: function (e) { if (!e) return ""; if (e instanceof Array) return g.visit_array(e, ""); if (e.type) { var t = g["visit_" + e.type]; if (t) return t(e); throw Error("Missing visitor visit_" + e.type) } throw Error("Invalid node.") } }, function (e) { return g.visit(e) }), (v = v || {}).parse = function () { var e = { linearGradient: /^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i, repeatingLinearGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i, radialGradient: /^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i, repeatingRadialGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i, sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i, extentKeywords: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/, positionKeywords: /^(left|center|right|top|bottom)/i, pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/, percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/, emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/, angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/, startCall: /^\(/, endCall: /^\)/, comma: /^,/, hexColor: /^\#([0-9a-fA-F]+)/, literalColor: /^([a-zA-Z]+)/, rgbColor: /^rgb/i, rgbaColor: /^rgba/i, number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/ }, t = ""; function r(e) { var r = new Error(t + ": " + e); throw r.source = t, r } function n() { var e = h(i); return t.length > 0 && r("Invalid input not EOF"), e } function i() { return o("linear-gradient", e.linearGradient, a) || o("repeating-linear-gradient", e.repeatingLinearGradient, a) || o("radial-gradient", e.radialGradient, l) || o("repeating-radial-gradient", e.repeatingRadialGradient, l) } function o(t, n, i) { return s(n, (function (n) { var o = i(); return o && (y(e.comma) || r("Missing comma before color stops")), { type: t, orientation: o, colorStops: h(m) } })) } function s(t, n) { var i = y(t); if (i) { y(e.startCall) || r("Missing ("); var o = n(i); return y(e.endCall) || r("Missing )"), o } } function a() { return x("directional", e.sideOrCorner, 1) || x("angular", e.angleValue, 1) } function l() { var r, n, i = u(); return i && ((r = []).push(i), n = t, y(e.comma) && ((i = u()) ? r.push(i) : t = n)), r } function u() { var e = function () { var e = x("shape", /^(circle)/i, 0); return e && (e.style = p() || c()), e }() || function () { var e = x("shape", /^(ellipse)/i, 0); return e && (e.style = v() || c()), e }(); if (e) e.at = f(); else { var t = c(); if (t) { e = t; var r = f(); r && (e.at = r) } else { var n = d(); n && (e = { type: "default-radial", at: n }) } } return e } function c() { return x("extent-keyword", e.extentKeywords, 1) } function f() { if (x("position", /^at/, 0)) { var e = d(); return e || r("Missing positioning value"), e } } function d() { var e = { x: v(), y: v() }; if (e.x || e.y) return { type: "position", value: e } } function h(t) { var n = t(), i = []; if (n) for (i.push(n); y(e.comma);)(n = t()) ? i.push(n) : r("One extra comma"); return i } function m() { var t = x("hex", e.hexColor, 1) || s(e.rgbaColor, (function () { return { type: "rgba", value: h(g) } })) || s(e.rgbColor, (function () { return { type: "rgb", value: h(g) } })) || x("literal", e.literalColor, 0); return t || r("Expected color definition"), t.length = v(), t } function g() { return y(e.number)[1] } function v() { return x("%", e.percentageValue, 1) || x("position-keyword", e.positionKeywords, 1) || p() } function p() { return x("px", e.pixelValue, 1) || x("em", e.emValue, 1) } function x(e, t, r) { var n = y(t); if (n) return { type: e, value: n[r] } } function y(e) { var r, n; return (n = /^[\n\r\t\s]+/.exec(t)) && C(n[0].length), (r = e.exec(t)) && C(r[0].length), r } function C(e) { t = t.substr(e) } return function (e) { return t = e.toString(), n() } }(); var p = v.parse; v.stringify; var x = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, y = { red: 0, orange: 60, yellow: 120, green: 180, blue: 240, purple: 300 }; var C = { name: "rgb", min: [0, 0, 0], max: [255, 255, 255], channel: ["red", "green", "blue"], alias: ["RGB"] }, _ = { name: "hsl", min: [0, 0, 0], max: [360, 100, 100], channel: ["hue", "saturation", "lightness"], alias: ["HSL"], rgb: function (e) { var t, r, n, i, o, s = e[0] / 360, a = e[1] / 100, l = e[2] / 100; if (0 === a) return [o = 255 * l, o, o]; t = 2 * l - (r = l < .5 ? l * (1 + a) : l + a - l * a), i = [0, 0, 0]; for (var u = 0; u < 3; u++)(n = s + 1 / 3 * -(u - 1)) < 0 ? n++ : n > 1 && n--, o = 6 * n < 1 ? t + 6 * (r - t) * n : 2 * n < 1 ? r : 3 * n < 2 ? t + (r - t) * (2 / 3 - n) * 6 : t, i[u] = 255 * o; return i } }; function b(e) { Array.isArray(e) && e.raw && (e = String.raw(...arguments)); var t, r = function (e) { var t, r, n = [], i = 1; if ("string" == typeof e) if (x[e]) n = x[e].slice(), r = "rgb"; else if ("transparent" === e) i = 0, r = "rgb", n = [0, 0, 0]; else if (/^#[A-Fa-f0-9]+$/.test(e)) { var o = e.slice(1); i = 1, (l = o.length) <= 4 ? (n = [parseInt(o[0] + o[0], 16), parseInt(o[1] + o[1], 16), parseInt(o[2] + o[2], 16)], 4 === l && (i = parseInt(o[3] + o[3], 16) / 255)) : (n = [parseInt(o[0] + o[1], 16), parseInt(o[2] + o[3], 16), parseInt(o[4] + o[5], 16)], 8 === l && (i = parseInt(o[6] + o[7], 16) / 255)), n[0] || (n[0] = 0), n[1] || (n[1] = 0), n[2] || (n[2] = 0), r = "rgb" } else if (t = /^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)) { var s = t[1], a = "rgb" === s; r = o = s.replace(/a$/, ""); var l = "cmyk" === o ? 4 : "gray" === o ? 1 : 3; n = t[2].trim().split(/\s*[,\/]\s*|\s+/).map((function (e, t) { if (/%$/.test(e)) return t === l ? parseFloat(e) / 100 : "rgb" === o ? 255 * parseFloat(e) / 100 : parseFloat(e); if ("h" === o[t]) { if (/deg$/.test(e)) return parseFloat(e); if (void 0 !== y[e]) return y[e] } return parseFloat(e) })), s === o && n.push(1), i = a || void 0 === n[l] ? 1 : n[l], n = n.slice(0, l) } else e.length > 10 && /[0-9](?:\s|\/)/.test(e) && (n = e.match(/([0-9]+)/g).map((function (e) { return parseFloat(e) })), r = e.match(/([a-z])/gi).join("").toLowerCase()); else isNaN(e) ? Array.isArray(e) || e.length ? (n = [e[0], e[1], e[2]], r = "rgb", i = 4 === e.length ? e[3] : 1) : e instanceof Object && (null != e.r || null != e.red || null != e.R ? (r = "rgb", n = [e.r || e.red || e.R || 0, e.g || e.green || e.G || 0, e.b || e.blue || e.B || 0]) : (r = "hsl", n = [e.h || e.hue || e.H || 0, e.s || e.saturation || e.S || 0, e.l || e.lightness || e.L || e.b || e.brightness]), i = e.a || e.alpha || e.opacity || 1, null != e.opacity && (i /= 100)) : (r = "rgb", n = [e >>> 16, (65280 & e) >>> 8, 255 & e]); return { space: r, values: n, alpha: i } }(e); if (!r.space) return []; const n = "h" === r.space[0] ? _.min : C.min, i = "h" === r.space[0] ? _.max : C.max; return (t = Array(3))[0] = Math.min(Math.max(r.values[0], n[0]), i[0]), t[1] = Math.min(Math.max(r.values[1], n[1]), i[1]), t[2] = Math.min(Math.max(r.values[2], n[2]), i[2]), "h" === r.space[0] && (t = _.rgb(t)), t.push(Math.min(Math.max(r.alpha, 0), 1)), t } function S(e) { switch (typeof e) { case "string": return function (e) { const t = b(e); if (!t) throw new Error(`Unable to parse color "${e}" as RGBA.`); return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]] }(e); case "number": return t.utils.hex2rgb(e); default: return e } } function T(e) { const t = p(function (e) { let t = e.replace(/\s{2,}/gu, " "); return t = t.replace(/;/g, ""), t = t.replace(/ ,/g, ","), t = t.replace(/\( /g, "("), t = t.replace(/ \)/g, ")"), t.trim() }(e)); if (0 === t.length) throw new Error("Invalid CSS gradient."); if (1 !== t.length) throw new Error("Unsupported CSS gradient (multiple gradients is not supported)."); const r = t[0], n = function (e) { const t = { "linear-gradient": 0, "radial-gradient": 1 }; if (!(e in t)) throw new Error(`Unsupported gradient type "${e}"`); return t[e] }(r.type), i = function (e) { const t = function (e) { const t = []; for (let r = 0; r < e.length; r++) { const n = e[r]; let i = -1; "literal" === n.type && n.length && "type" in n.length && "%" === n.length.type && "value" in n.length && (i = parseFloat(n.length.value) / 100), t.push(i) } const r = e => { for (let r = e; r < t.length; r++)if (-1 !== t[r]) return { indexDelta: r - e, offset: t[r] }; return { indexDelta: t.length - 1 - e, offset: 1 } }; let n = 0; for (let e = 0; e < t.length; e++) { const i = t[e]; if (-1 !== i) n = i; else if (0 === e) t[e] = 0; else if (e + 1 === t.length) t[e] = 1; else { const i = r(e), o = (i.offset - n) / (1 + i.indexDelta); for (let r = 0; r <= i.indexDelta; r++)t[e + r] = n + (r + 1) * o; e += i.indexDelta, n = t[e] } } return t.map(A) }(e), r = []; for (let n = 0; n < e.length; n++) { const i = F(e[n]); r.push({ offset: t[n], color: i.slice(0, 3), alpha: i[3] }) } return r }(r.colorStops), o = function (e) { if (void 0 === e) return 0; if ("type" in e && "value" in e) switch (e.type) { case "angular": return parseFloat(e.value); case "directional": return function (e) { const t = { left: 270, top: 0, bottom: 180, right: 90, "left top": 315, "top left": 315, "left bottom": 225, "bottom left": 225, "right top": 45, "top right": 45, "right bottom": 135, "bottom right": 135 }; if (!(e in t)) throw new Error(`Unsupported directional value "${e}"`); return t[e] }(e.value) }return 0 }(r.orientation); return { type: n, stops: i, angle: o } } function F(e) { return S(function (e) { switch (e.type) { case "hex": return `#${e.value}`; case "literal": return e.value; default: return `${e.type}(${e.value.join(",")})` } }(e)) } function A(e) { return e.toString().length > 6 ? parseFloat(e.toString().substring(0, 6)) : e } C.hsl = function (e) { var t, r, n = e[0] / 255, i = e[1] / 255, o = e[2] / 255, s = Math.min(n, i, o), a = Math.max(n, i, o), l = a - s; return a === s ? t = 0 : n === a ? t = (i - o) / l : i === a ? t = 2 + (o - n) / l : o === a && (t = 4 + (n - i) / l), (t = Math.min(60 * t, 360)) < 0 && (t += 360), r = (s + a) / 2, [t, 100 * (a === s ? 0 : r <= .5 ? l / (a + s) : l / (2 - a - s)), 100 * r] }; var z = Object.defineProperty, w = Object.defineProperties, P = Object.getOwnPropertyDescriptors, M = Object.getOwnPropertySymbols, D = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable, O = (e, t, r) => t in e ? z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, R = (e, t) => { for (var r in t || (t = {})) D.call(t, r) && O(e, r, t[r]); if (M) for (var r of M(t)) k.call(t, r) && O(e, r, t[r]); return e }; const E = class extends t.Filter { constructor(e) { var t, r; let n; if (n = e && "css" in e ? ((e, t) => w(e, P(t)))(R({}, T(e.css || "")), { alpha: null != (t = e.alpha) ? t : E.defaults.alpha, maxColors: null != (r = e.maxColors) ? r : E.defaults.maxColors }) : R(R({}, E.defaults), e), !n.stops || n.stops.length < 2) throw new Error("ColorGradientFilter requires at least 2 color stops."); super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vFilterCoord = vTextureCoord * inputSize.xy / outputFrame.zw;\n}\n", "const float PI = 3.1415926538;\nconst float PI_2 = PI*2.;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\nuniform sampler2D uSampler;\n\nconst int TYPE_LINEAR = 0;\nconst int TYPE_RADIAL = 1;\nconst int TYPE_CONIC = 2;\nconst int MAX_STOPS = 32;\n\nuniform int uNumStops;\nuniform float uAlphas[3*MAX_STOPS];\nuniform vec3 uColors[MAX_STOPS];\nuniform float uOffsets[MAX_STOPS];\nuniform int uType;\nuniform float uAngle;\nuniform float uAlpha;\nuniform int uMaxColors;\nuniform bool uReplace;\n\nstruct ColorStop {\n    float offset;\n    vec3 color;\n    float alpha;\n};\n\nmat2 rotate2d(float angle){\n    return mat2(cos(angle), -sin(angle),\n    sin(angle), cos(angle));\n}\n\nfloat projectLinearPosition(vec2 pos, float angle){\n    vec2 center = vec2(0.5);\n    vec2 result = pos - center;\n    result = rotate2d(angle) * result;\n    result = result + center;\n    return clamp(result.x, 0., 1.);\n}\n\nfloat projectRadialPosition(vec2 pos) {\n    float r = distance(vFilterCoord, vec2(0.5));\n    return clamp(2.*r, 0., 1.);\n}\n\nfloat projectAnglePosition(vec2 pos, float angle) {\n    vec2 center = pos - vec2(0.5);\n    float polarAngle=atan(-center.y, center.x);\n    return mod(polarAngle + angle, PI_2) / PI_2;\n}\n\nfloat projectPosition(vec2 pos, int type, float angle) {\n    if (type == TYPE_LINEAR) {\n        return projectLinearPosition(pos, angle);\n    } else if (type == TYPE_RADIAL) {\n        return projectRadialPosition(pos);\n    } else if (type == TYPE_CONIC) {\n        return projectAnglePosition(pos, angle);\n    }\n\n    return pos.y;\n}\n\nvoid main(void) {\n    // current/original color\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n\n    // skip calculations if gradient alpha is 0\n    if (0.0 == uAlpha) {\n        gl_FragColor = currentColor;\n        return;\n    }\n\n    // project position\n    float y = projectPosition(vFilterCoord, uType, radians(uAngle));\n\n    // check gradient bounds\n    float offsetMin = uOffsets[0];\n    float offsetMax = 0.0;\n\n    for (int i = 0; i < MAX_STOPS; i++) {\n        if (i == uNumStops-1){ // last index\n            offsetMax = uOffsets[i];\n        }\n    }\n\n    if (y  < offsetMin || y > offsetMax) {\n        gl_FragColor = currentColor;\n        return;\n    }\n\n    // limit colors\n    if (uMaxColors > 0) {\n        float stepSize = 1./float(uMaxColors);\n        float stepNumber = float(floor(y/stepSize));\n        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment\n    }\n\n    // find color stops\n    ColorStop from;\n    ColorStop to;\n\n    for (int i = 0; i < MAX_STOPS; i++) {\n        if (y >= uOffsets[i]) {\n            from = ColorStop(uOffsets[i], uColors[i], uAlphas[i]);\n            to = ColorStop(uOffsets[i+1], uColors[i+1], uAlphas[i+1]);\n        }\n\n        if (i == uNumStops-1){ // last index\n            break;\n        }\n    }\n\n    // mix colors from stops\n    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);\n    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);\n\n    float segmentHeight = to.offset - from.offset;\n    float relativePos = y - from.offset;// position from 0 to [segmentHeight]\n    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].\n\n    float gradientAlpha = uAlpha * currentColor.a;\n    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;\n\n    if (uReplace == false) {\n        // mix resulting color with current color\n        gl_FragColor = gradientColor + currentColor*(1.-gradientColor.a);\n    } else {\n        // replace with gradient color\n        gl_FragColor = gradientColor;\n    }\n}\n"), this._stops = [], this.autoFit = !1, Object.assign(this, n) } get stops() { return this._stops } set stops(e) { const t = function (e) { return [...e].sort(((e, t) => e.offset - t.offset)) }(e), r = new Float32Array(3 * t.length); for (let e = 0; e < t.length; e++) { const n = S(t[e].color), i = 3 * e; r[i + 0] = n[0], r[i + 1] = n[1], r[i + 2] = n[2] } this.uniforms.uColors = r, this.uniforms.uOffsets = t.map((e => e.offset)), this.uniforms.uAlphas = t.map((e => e.alpha)), this.uniforms.uNumStops = t.length, this._stops = t } set type(e) { this.uniforms.uType = e } get type() { return this.uniforms.uType } set angle(e) { this.uniforms.uAngle = e - 90 } get angle() { return this.uniforms.uAngle + 90 } set alpha(e) { this.uniforms.uAlpha = e } get alpha() { return this.uniforms.uAlpha } set maxColors(e) { this.uniforms.uMaxColors = e } get maxColors() { return this.uniforms.uMaxColors } set replace(e) { this.uniforms.uReplace = e } get replace() { return this.uniforms.uReplace } }; let j = E; j.LINEAR = 0, j.RADIAL = 1, j.CONIC = 2, j.defaults = { type: E.LINEAR, stops: [{ offset: 0, color: 16711680, alpha: 1 }, { offset: 1, color: 255, alpha: 1 }], alpha: 1, angle: 90, maxColors: 0, replace: !1 }; class I extends t.Filter { constructor(e, t = !1, r = 1) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D colorMap;\nuniform float _mix;\nuniform float _size;\nuniform float _sliceSize;\nuniform float _slicePixelSize;\nuniform float _sliceInnerSize;\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord.xy);\n\n    vec4 adjusted;\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n        float innerWidth = _size - 1.0;\n        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);\n        float zSlice1 = min(zSlice0 + 1.0, innerWidth);\n        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;\n        float s0 = xOffset + (zSlice0 * _sliceSize);\n        float s1 = xOffset + (zSlice1 * _sliceSize);\n        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);\n        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));\n        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));\n        float zOffset = fract(color.b * innerWidth);\n        adjusted = mix(slice0Color, slice1Color, zOffset);\n\n        color.rgb *= color.a;\n    }\n    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);\n\n}"), this.mix = 1, this._size = 0, this._sliceSize = 0, this._slicePixelSize = 0, this._sliceInnerSize = 0, this._nearest = !1, this._scaleMode = null, this._colorMap = null, this._scaleMode = null, this.nearest = t, this.mix = r, this.colorMap = e } apply(e, t, r, n) { this.uniforms._mix = this.mix, e.applyFilter(this, t, r, n) } get colorSize() { return this._size } get colorMap() { return this._colorMap } set colorMap(e) { !e || (e instanceof t.Texture || (e = t.Texture.from(e)), null != e && e.baseTexture && (e.baseTexture.scaleMode = this._scaleMode, e.baseTexture.mipmap = t.MIPMAP_MODES.OFF, this._size = e.height, this._sliceSize = 1 / this._size, this._slicePixelSize = this._sliceSize / this._size, this._sliceInnerSize = this._slicePixelSize * (this._size - 1), this.uniforms._size = this._size, this.uniforms._sliceSize = this._sliceSize, this.uniforms._slicePixelSize = this._slicePixelSize, this.uniforms._sliceInnerSize = this._sliceInnerSize, this.uniforms.colorMap = e), this._colorMap = e) } get nearest() { return this._nearest } set nearest(e) { this._nearest = e, this._scaleMode = e ? t.SCALE_MODES.NEAREST : t.SCALE_MODES.LINEAR; const r = this._colorMap; r && r.baseTexture && (r.baseTexture._glTextures = {}, r.baseTexture.scaleMode = this._scaleMode, r.baseTexture.mipmap = t.MIPMAP_MODES.OFF, r._updateID++, r.baseTexture.emit("update", r.baseTexture)) } updateColorMap() { const e = this._colorMap; e && e.baseTexture && (e._updateID++, e.baseTexture.emit("update", e.baseTexture), this.colorMap = e) } destroy(e = !1) { this._colorMap && this._colorMap.destroy(e), super.destroy() } } class L extends t.Filter { constructor(e = 0, t = 1) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 color;\nuniform float alpha;\n\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);\n}\n"), this._color = 0, this._alpha = 1, this.uniforms.color = new Float32Array(3), this.color = e, this.alpha = t } set color(e) { const r = this.uniforms.color; "number" == typeof e ? (t.utils.hex2rgb(e, r), this._color = e) : (r[0] = e[0], r[1] = e[1], r[2] = e[2], this._color = t.utils.rgb2hex(r)) } get color() { return this._color } set alpha(e) { this.uniforms.alpha = e, this._alpha = e } get alpha() { return this._alpha } } class V extends t.Filter { constructor(e = 16711680, t = 0, r = .4) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 originalColor;\nuniform vec3 newColor;\nuniform float epsilon;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));\n    float colorDistance = length(colorDiff);\n    float doReplace = step(colorDistance, epsilon);\n    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);\n}\n"), this._originalColor = 16711680, this._newColor = 0, this.uniforms.originalColor = new Float32Array(3), this.uniforms.newColor = new Float32Array(3), this.originalColor = e, this.newColor = t, this.epsilon = r } set originalColor(e) { const r = this.uniforms.originalColor; "number" == typeof e ? (t.utils.hex2rgb(e, r), this._originalColor = e) : (r[0] = e[0], r[1] = e[1], r[2] = e[2], this._originalColor = t.utils.rgb2hex(r)) } get originalColor() { return this._originalColor } set newColor(e) { const r = this.uniforms.newColor; "number" == typeof e ? (t.utils.hex2rgb(e, r), this._newColor = e) : (r[0] = e[0], r[1] = e[1], r[2] = e[2], this._newColor = t.utils.rgb2hex(r)) } get newColor() { return this._newColor } set epsilon(e) { this.uniforms.epsilon = e } get epsilon() { return this.uniforms.epsilon } } class N extends t.Filter { constructor(e, t = 200, r = 200) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n"), this.uniforms.texelSize = new Float32Array(2), this.uniforms.matrix = new Float32Array(9), void 0 !== e && (this.matrix = e), this.width = t, this.height = r } get matrix() { return this.uniforms.matrix } set matrix(e) { e.forEach(((e, t) => { this.uniforms.matrix[t] = e })) } get width() { return 1 / this.uniforms.texelSize[0] } set width(e) { this.uniforms.texelSize[0] = 1 / e } get height() { return 1 / this.uniforms.texelSize[1] } set height(e) { this.uniforms.texelSize[1] = 1 / e } } class G extends t.Filter { constructor() { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n") } } const B = class extends t.Filter { constructor(e) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nconst float SQRT_2 = 1.414213;\n\nconst float light = 1.0;\n\nuniform float curvature;\nuniform float lineWidth;\nuniform float lineContrast;\nuniform bool verticalLine;\nuniform float noise;\nuniform float noiseSize;\n\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\n\nuniform float seed;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));\n    \n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 rgb = gl_FragColor.rgb;\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        rgb += _noise * noise;\n    }\n\n    if (lineWidth > 0.0)\n    {\n        float _c = curvature > 0. ? curvature : 1.;\n        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;\n        vec2 uv = dir * k;\n\n        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;\n        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;\n        rgb *= j;\n        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);\n        rgb *= 0.99 + ceil(segment) * 0.015;\n    }\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    gl_FragColor.rgb = rgb;\n}\n"), this.time = 0, this.seed = 0, this.uniforms.dimensions = new Float32Array(2), Object.assign(this, B.defaults, e) } apply(e, t, r, n) { const { width: i, height: o } = t.filterFrame; this.uniforms.dimensions[0] = i, this.uniforms.dimensions[1] = o, this.uniforms.seed = this.seed, this.uniforms.time = this.time, e.applyFilter(this, t, r, n) } set curvature(e) { this.uniforms.curvature = e } get curvature() { return this.uniforms.curvature } set lineWidth(e) { this.uniforms.lineWidth = e } get lineWidth() { return this.uniforms.lineWidth } set lineContrast(e) { this.uniforms.lineContrast = e } get lineContrast() { return this.uniforms.lineContrast } set verticalLine(e) { this.uniforms.verticalLine = e } get verticalLine() { return this.uniforms.verticalLine } set noise(e) { this.uniforms.noise = e } get noise() { return this.uniforms.noise } set noiseSize(e) { this.uniforms.noiseSize = e } get noiseSize() { return this.uniforms.noiseSize } set vignetting(e) { this.uniforms.vignetting = e } get vignetting() { return this.uniforms.vignetting } set vignettingAlpha(e) { this.uniforms.vignettingAlpha = e } get vignettingAlpha() { return this.uniforms.vignettingAlpha } set vignettingBlur(e) { this.uniforms.vignettingBlur = e } get vignettingBlur() { return this.uniforms.vignettingBlur } }; let X = B; X.defaults = { curvature: 1, lineWidth: 1, lineContrast: .25, verticalLine: !1, noise: 0, noiseSize: 1, seed: 0, vignetting: .3, vignettingAlpha: 1, vignettingBlur: .3, time: 0 }; class q extends t.Filter { constructor(e = 1, t = 5, r = !0) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\nuniform bool grayscale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * filterArea.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   vec3 colorRGB = vec3(color);\n\n   if (grayscale)\n   {\n       colorRGB = vec3(color.r + color.g + color.b) / 3.0;\n   }\n\n   gl_FragColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);\n}\n"), this.scale = e, this.angle = t, this.grayscale = r } get scale() { return this.uniforms.scale } set scale(e) { this.uniforms.scale = e } get angle() { return this.uniforms.angle } set angle(e) { this.uniforms.angle = e } get grayscale() { return this.uniforms.grayscale } set grayscale(e) { this.uniforms.grayscale = e } } var K = Object.defineProperty, W = Object.getOwnPropertySymbols, Y = Object.prototype.hasOwnProperty, $ = Object.prototype.propertyIsEnumerable, Z = (e, t, r) => t in e ? K(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, U = (e, t) => { for (var r in t || (t = {})) Y.call(t, r) && Z(e, r, t[r]); if (W) for (var r of W(t)) $.call(t, r) && Z(e, r, t[r]); return e }; const H = class extends t.Filter { constructor(e) { super(), this.angle = 45, this._distance = 5, this._resolution = t.settings.FILTER_RESOLUTION; const r = e ? U(U({}, H.defaults), e) : H.defaults, { kernels: n, blur: i, quality: s, pixelSize: a, resolution: l } = r; this._offset = new t.ObservablePoint(this._updatePadding, this), this._tintFilter = new t.Filter("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\n\nuniform vec2 shift;\nuniform vec4 inputSize;\n\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);\n\n    // Premultiply alpha\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}"), this._tintFilter.uniforms.color = new Float32Array(4), this._tintFilter.uniforms.shift = this._offset, this._tintFilter.resolution = l, this._blurFilter = n ? new o(n) : new o(i, s), this.pixelSize = a, this.resolution = l; const { shadowOnly: u, rotation: c, distance: f, offset: d, alpha: h, color: m } = r; this.shadowOnly = u, void 0 !== c && void 0 !== f ? (this.rotation = c, this.distance = f) : this.offset = d, this.alpha = h, this.color = m } apply(e, t, r, n) { const i = e.getFilterTexture(); this._tintFilter.apply(e, t, i, 1), this._blurFilter.apply(e, i, r, n), !0 !== this.shadowOnly && e.applyFilter(this, t, r, 0), e.returnFilterTexture(i) } _updatePadding() { const e = Math.max(Math.abs(this._offset.x), Math.abs(this._offset.y)); this.padding = e + 2 * this.blur } _updateShift() { this._tintFilter.uniforms.shift.set(this.distance * Math.cos(this.angle), this.distance * Math.sin(this.angle)) } set offset(e) { this._offset.copyFrom(e), this._updatePadding() } get offset() { return this._offset } get resolution() { return this._resolution } set resolution(e) { this._resolution = e, this._tintFilter && (this._tintFilter.resolution = e), this._blurFilter && (this._blurFilter.resolution = e) } get distance() { return this._distance } set distance(e) { t.utils.deprecation("5.3.0", "DropShadowFilter distance is deprecated, use offset"), this._distance = e, this._updatePadding(), this._updateShift() } get rotation() { return this.angle / t.DEG_TO_RAD } set rotation(e) { t.utils.deprecation("5.3.0", "DropShadowFilter rotation is deprecated, use offset"), this.angle = e * t.DEG_TO_RAD, this._updateShift() } get alpha() { return this._tintFilter.uniforms.alpha } set alpha(e) { this._tintFilter.uniforms.alpha = e } get color() { return t.utils.rgb2hex(this._tintFilter.uniforms.color) } set color(e) { t.utils.hex2rgb(e, this._tintFilter.uniforms.color) } get kernels() { return this._blurFilter.kernels } set kernels(e) { this._blurFilter.kernels = e } get blur() { return this._blurFilter.blur } set blur(e) { this._blurFilter.blur = e, this._updatePadding() } get quality() { return this._blurFilter.quality } set quality(e) { this._blurFilter.quality = e } get pixelSize() { return this._blurFilter.pixelSize } set pixelSize(e) { this._blurFilter.pixelSize = e } }; let Q = H; Q.defaults = { offset: { x: 4, y: 4 }, color: 0, alpha: .5, shadowOnly: !1, kernels: null, blur: 2, quality: 3, pixelSize: 1, resolution: t.settings.FILTER_RESOLUTION }; class J extends t.Filter { constructor(e = 5) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4 filterArea;\n\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 / filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -= texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor += texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb = vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler, vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha, alpha);\n}\n"), this.strength = e } get strength() { return this.uniforms.strength } set strength(e) { this.uniforms.strength = e } } const ee = class extends t.Filter { constructor(e) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "// precision highp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\nuniform float aspect;\n\nuniform sampler2D displacementMap;\nuniform float offset;\nuniform float sinDir;\nuniform float cosDir;\nuniform int fillMode;\n\nuniform float seed;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nconst int TRANSPARENT = 0;\nconst int ORIGINAL = 1;\nconst int LOOP = 2;\nconst int CLAMP = 3;\nconst int MIRROR = 4;\n\nvoid main(void)\n{\n    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;\n\n    if (coord.x > 1.0 || coord.y > 1.0) {\n        return;\n    }\n\n    float cx = coord.x - 0.5;\n    float cy = (coord.y - 0.5) * aspect;\n    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;\n\n    // displacementMap: repeat\n    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);\n\n    // displacementMap: mirror\n    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);\n\n    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));\n\n    float displacement = (dc.r - dc.g) * (offset / filterArea.x);\n\n    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);\n\n    if (fillMode == CLAMP) {\n        coord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    } else {\n        if( coord.x > filterClamp.z ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x -= filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x = filterClamp.z * 2.0 - coord.x;\n            }\n        } else if( coord.x < filterClamp.x ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x += filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x *= -filterClamp.z;\n            }\n        }\n\n        if( coord.y > filterClamp.w ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y -= filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y = filterClamp.w * 2.0 - coord.y;\n            }\n        } else if( coord.y < filterClamp.y ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y += filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y *= -filterClamp.w;\n            }\n        }\n    }\n\n    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;\n    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;\n    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;\n    gl_FragColor.a = texture2D(uSampler, coord).a;\n}\n"), this.offset = 100, this.fillMode = ee.TRANSPARENT, this.average = !1, this.seed = 0, this.minSize = 8, this.sampleSize = 512, this._slices = 0, this._offsets = new Float32Array(1), this._sizes = new Float32Array(1), this._direction = -1, this.uniforms.dimensions = new Float32Array(2), this._canvas = document.createElement("canvas"), this._canvas.width = 4, this._canvas.height = this.sampleSize, this.texture = t.Texture.from(this._canvas, { scaleMode: t.SCALE_MODES.NEAREST }), Object.assign(this, ee.defaults, e) } apply(e, t, r, n) { const { width: i, height: o } = t.filterFrame; this.uniforms.dimensions[0] = i, this.uniforms.dimensions[1] = o, this.uniforms.aspect = o / i, this.uniforms.seed = this.seed, this.uniforms.offset = this.offset, this.uniforms.fillMode = this.fillMode, e.applyFilter(this, t, r, n) } _randomizeSizes() { const e = this._sizes, t = this._slices - 1, r = this.sampleSize, n = Math.min(this.minSize / r, .9 / this._slices); if (this.average) { const r = this._slices; let i = 1; for (let o = 0; o < t; o++) { const t = i / (r - o), s = Math.max(t * (1 - .6 * Math.random()), n); e[o] = s, i -= s } e[t] = i } else { let r = 1; const i = Math.sqrt(1 / this._slices); for (let o = 0; o < t; o++) { const t = Math.max(i * r * Math.random(), n); e[o] = t, r -= t } e[t] = r } this.shuffle() } shuffle() { const e = this._sizes; for (let t = this._slices - 1; t > 0; t--) { const r = Math.random() * t >> 0, n = e[t]; e[t] = e[r], e[r] = n } } _randomizeOffsets() { for (let e = 0; e < this._slices; e++)this._offsets[e] = Math.random() * (Math.random() < .5 ? -1 : 1) } refresh() { this._randomizeSizes(), this._randomizeOffsets(), this.redraw() } redraw() { const e = this.sampleSize, t = this.texture, r = this._canvas.getContext("2d"); r.clearRect(0, 0, 8, e); let n, i = 0; for (let t = 0; t < this._slices; t++) { n = Math.floor(256 * this._offsets[t]); const o = this._sizes[t] * e, s = n > 0 ? n : 0, a = n < 0 ? -n : 0; r.fillStyle = `rgba(${s}, ${a}, 0, 1)`, r.fillRect(0, i >> 0, e, o + 1 >> 0), i += o } t.baseTexture.update(), this.uniforms.displacementMap = t } set sizes(e) { const t = Math.min(this._slices, e.length); for (let r = 0; r < t; r++)this._sizes[r] = e[r] } get sizes() { return this._sizes } set offsets(e) { const t = Math.min(this._slices, e.length); for (let r = 0; r < t; r++)this._offsets[r] = e[r] } get offsets() { return this._offsets } get slices() { return this._slices } set slices(e) { this._slices !== e && (this._slices = e, this.uniforms.slices = e, this._sizes = this.uniforms.slicesWidth = new Float32Array(e), this._offsets = this.uniforms.slicesOffset = new Float32Array(e), this.refresh()) } get direction() { return this._direction } set direction(e) { if (this._direction === e) return; this._direction = e; const r = e * t.DEG_TO_RAD; this.uniforms.sinDir = Math.sin(r), this.uniforms.cosDir = Math.cos(r) } get red() { return this.uniforms.red } set red(e) { this.uniforms.red = e } get green() { return this.uniforms.green } set green(e) { this.uniforms.green = e } get blue() { return this.uniforms.blue } set blue(e) { this.uniforms.blue = e } destroy() { var e; null == (e = this.texture) || e.destroy(!0), this.texture = this._canvas = this.red = this.green = this.blue = this._sizes = this._offsets = null } }; let te = ee; te.defaults = { slices: 5, offset: 100, direction: 0, fillMode: 0, average: !1, seed: 0, red: [0, 0], green: [0, 0], blue: [0, 0], minSize: 8, sampleSize: 512 }, te.TRANSPARENT = 0, te.ORIGINAL = 1, te.LOOP = 2, te.CLAMP = 3, te.MIRROR = 4; var re = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float outerStrength;\nuniform float innerStrength;\n\nuniform vec4 glowColor;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform bool knockout;\nuniform float alpha;\n\nconst float PI = 3.14159265358979323846264;\n\nconst float DIST = __DIST__;\nconst float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);\nconst float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);\n\nconst float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;\n\nvoid main(void) {\n    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n\n    float totalAlpha = 0.0;\n\n    vec2 direction;\n    vec2 displaced;\n    vec4 curColor;\n\n    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {\n       direction = vec2(cos(angle), sin(angle)) * px;\n\n       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {\n           displaced = clamp(vTextureCoord + direction * \n                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);\n\n           curColor = texture2D(uSampler, displaced);\n\n           totalAlpha += (DIST - curDistance) * curColor.a;\n       }\n    }\n    \n    curColor = texture2D(uSampler, vTextureCoord);\n\n    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);\n\n    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;\n    float innerGlowStrength = min(1.0, innerGlowAlpha);\n    \n    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);\n\n    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);\n    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);\n\n    if (knockout) {\n      float resultAlpha = (outerGlowAlpha + innerGlowAlpha) * alpha;\n      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);\n    }\n    else {\n      vec4 outerGlowColor = outerGlowStrength * glowColor.rgba * alpha;\n      gl_FragColor = innerColor + outerGlowColor;\n    }\n}\n"; const ne = class extends t.Filter { constructor(e) { const t = Object.assign({}, ne.defaults, e), { outerStrength: r, innerStrength: n, color: i, knockout: o, quality: s, alpha: a } = t, l = Math.round(t.distance); super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", re.replace(/__ANGLE_STEP_SIZE__/gi, `${(1 / s / l).toFixed(7)}`).replace(/__DIST__/gi, `${l.toFixed(0)}.0`)), this.uniforms.glowColor = new Float32Array([0, 0, 0, 1]), this.uniforms.alpha = 1, Object.assign(this, { color: i, outerStrength: r, innerStrength: n, padding: l, knockout: o, alpha: a }) } get color() { return t.utils.rgb2hex(this.uniforms.glowColor) } set color(e) { t.utils.hex2rgb(e, this.uniforms.glowColor) } get outerStrength() { return this.uniforms.outerStrength } set outerStrength(e) { this.uniforms.outerStrength = e } get innerStrength() { return this.uniforms.innerStrength } set innerStrength(e) { this.uniforms.innerStrength = e } get knockout() { return this.uniforms.knockout } set knockout(e) { this.uniforms.knockout = e } get alpha() { return this.uniforms.alpha } set alpha(e) { this.uniforms.alpha = e } }; let ie = ne; ie.defaults = { distance: 10, outerStrength: 4, innerStrength: 0, color: 16777215, quality: .1, knockout: !1, alpha: 1 }; var oe = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2 light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float gain;\nuniform float lacunarity;\nuniform float time;\nuniform float alpha;\n\n${perlin}\n\nvoid main(void) {\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    float d;\n\n    if (parallel) {\n        float _cos = light.x;\n        float _sin = light.y;\n        d = (_cos * coord.x) + (_sin * coord.y * aspect);\n    } else {\n        float dx = coord.x - light.x / dimensions.x;\n        float dy = (coord.y - light.y / dimensions.y) * aspect;\n        float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n        d = dy / dis;\n    }\n\n    vec3 dir = vec3(d, d, 0.0);\n\n    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);\n    noise = mix(noise, 0.0, 0.3);\n    //fade vertically.\n    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);\n    mist.a = 1.0;\n    // apply user alpha\n    mist *= alpha;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;\n\n}\n"; const se = class extends t.Filter { constructor(e) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", oe.replace("${perlin}", "vec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n    return mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n    float sum = 0.0;\n    float sc = 1.0;\n    float totalgain = 1.0;\n    for (float i = 0.0; i < 6.0; i++)\n    {\n        sum += totalgain * pnoise(P * sc, rep);\n        sc *= lacunarity;\n        totalgain *= gain;\n    }\n    return abs(sum);\n}\n")), this.parallel = !0, this.time = 0, this._angle = 0, this.uniforms.dimensions = new Float32Array(2); const r = Object.assign(se.defaults, e); this._angleLight = new t.Point, this.angle = r.angle, this.gain = r.gain, this.lacunarity = r.lacunarity, this.alpha = r.alpha, this.parallel = r.parallel, this.center = r.center, this.time = r.time } apply(e, t, r, n) { const { width: i, height: o } = t.filterFrame; this.uniforms.light = this.parallel ? this._angleLight : this.center, this.uniforms.parallel = this.parallel, this.uniforms.dimensions[0] = i, this.uniforms.dimensions[1] = o, this.uniforms.aspect = o / i, this.uniforms.time = this.time, this.uniforms.alpha = this.alpha, e.applyFilter(this, t, r, n) } get angle() { return this._angle } set angle(e) { this._angle = e; const r = e * t.DEG_TO_RAD; this._angleLight.x = Math.cos(r), this._angleLight.y = Math.sin(r) } get gain() { return this.uniforms.gain } set gain(e) { this.uniforms.gain = e } get lacunarity() { return this.uniforms.lacunarity } set lacunarity(e) { this.uniforms.lacunarity = e } get alpha() { return this.uniforms.alpha } set alpha(e) { this.uniforms.alpha = e } }; let ae = se; ae.defaults = { angle: 30, gain: .5, lacunarity: 2.5, time: 0, parallel: !0, center: [0, 0], alpha: 1 }; class le extends t.Filter { constructor() { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\n// https://en.wikipedia.org/wiki/Luma_(video)\nconst vec3 weight = vec3(0.299, 0.587, 0.114);\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = vec4(\n        vec3(color.r * weight.r + color.g * weight.g  + color.b * weight.b),\n        color.a\n    );\n}\n") } } const ue = class extends t.Filter { constructor(e) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float uHue;\nuniform float uAlpha;\nuniform bool uColorize;\nuniform float uSaturation;\nuniform float uLightness;\n\n// https://en.wikipedia.org/wiki/Luma_(video)\nconst vec3 weight = vec3(0.299, 0.587, 0.114);\n\nfloat getWeightedAverage(vec3 rgb) {\n    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;\n}\n\n// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243\nconst vec3 k = vec3(0.57735, 0.57735, 0.57735);\n\nvec3 hueShift(vec3 color, float angle) {\n    float cosAngle = cos(angle);\n    return vec3(\n    color * cosAngle +\n    cross(k, color) * sin(angle) +\n    k * dot(k, color) * (1.0 - cosAngle)\n    );\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    vec4 result = color;\n\n    // colorize\n    if (uColorize) {\n        result.rgb = vec3(getWeightedAverage(result.rgb), 0., 0.);\n    }\n\n    // hue\n    result.rgb = hueShift(result.rgb, uHue);\n\n    // saturation\n    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js\n    float average = (result.r + result.g + result.b) / 3.0;\n\n    if (uSaturation > 0.) {\n        result.rgb += (average - result.rgb) * (1. - 1. / (1.001 - uSaturation));\n    } else {\n        result.rgb -= (average - result.rgb) * uSaturation;\n    }\n\n    // lightness\n    result.rgb = mix(result.rgb, vec3(ceil(uLightness)) * color.a, abs(uLightness));\n\n    // alpha\n    gl_FragColor = mix(color, result, uAlpha);\n}\n"), this._hue = 0; const t = Object.assign({}, ue.defaults, e); Object.assign(this, t) } get hue() { return this._hue } set hue(e) { this._hue = e, this.uniforms.uHue = this._hue * (Math.PI / 180) } get alpha() { return this.uniforms.uAlpha } set alpha(e) { this.uniforms.uAlpha = e } get colorize() { return this.uniforms.uColorize } set colorize(e) { this.uniforms.uColorize = e } get lightness() { return this.uniforms.uLightness } set lightness(e) { this.uniforms.uLightness = e } get saturation() { return this.uniforms.uSaturation } set saturation(e) { this.uniforms.uSaturation = e } }; let ce = ue; ce.defaults = { hue: 0, saturation: 0, lightness: 0, colorize: !1, alpha: 1 }; class fe extends t.Filter { constructor(e = [0, 0], r = 5, n = 0) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uVelocity;\nuniform int uKernelSize;\nuniform float uOffset;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\n// Notice:\n// the perfect way:\n//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);\n// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.\n// So use uKernelSize directly.\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    vec2 velocity = uVelocity / filterArea.xy;\n    float offset = -uOffset / length(uVelocity) - 0.5;\n    int k = uKernelSize - 1;\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n        vec2 bias = velocity * (float(i) / float(k) + offset);\n        color += texture2D(uSampler, vTextureCoord + bias);\n    }\n    gl_FragColor = color / float(uKernelSize);\n}\n"), this.kernelSize = 5, this.uniforms.uVelocity = new Float32Array(2), this._velocity = new t.ObservablePoint(this.velocityChanged, this), this.setVelocity(e), this.kernelSize = r, this.offset = n } apply(e, t, r, n) { const { x: i, y: o } = this.velocity; this.uniforms.uKernelSize = 0 !== i || 0 !== o ? this.kernelSize : 0, e.applyFilter(this, t, r, n) } set velocity(e) { this.setVelocity(e) } get velocity() { return this._velocity } setVelocity(e) { if (Array.isArray(e)) { const [t, r] = e; this._velocity.set(t, r) } else this._velocity.copyFrom(e) } velocityChanged() { this.uniforms.uVelocity[0] = this._velocity.x, this.uniforms.uVelocity[1] = this._velocity.y, this.padding = 1 + (Math.max(Math.abs(this._velocity.x), Math.abs(this._velocity.y)) >> 0) } set offset(e) { this.uniforms.uOffset = e } get offset() { return this.uniforms.uOffset } } var de = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float epsilon;\n\nconst int MAX_COLORS = %maxColors%;\n\nuniform vec3 originalColors[MAX_COLORS];\nuniform vec3 targetColors[MAX_COLORS];\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    float alpha = gl_FragColor.a;\n    if (alpha < 0.0001)\n    {\n      return;\n    }\n\n    vec3 color = gl_FragColor.rgb / alpha;\n\n    for(int i = 0; i < MAX_COLORS; i++)\n    {\n      vec3 origColor = originalColors[i];\n      if (origColor.r < 0.0)\n      {\n        break;\n      }\n      vec3 colorDiff = origColor - color;\n      if (length(colorDiff) < epsilon)\n      {\n        vec3 targetColor = targetColors[i];\n        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);\n        return;\n      }\n    }\n}\n"; class he extends t.Filter { constructor(e, t = .05, r = e.length) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", de.replace(/%maxColors%/g, r.toFixed(0))), this._replacements = [], this._maxColors = 0, this.epsilon = t, this._maxColors = r, this.uniforms.originalColors = new Float32Array(3 * r), this.uniforms.targetColors = new Float32Array(3 * r), this.replacements = e } set replacements(e) { const r = this.uniforms.originalColors, n = this.uniforms.targetColors, i = e.length; if (i > this._maxColors) throw new Error(`Length of replacements (${i}) exceeds the maximum colors length (${this._maxColors})`); r[3 * i] = -1; for (let o = 0; o < i; o++) { const i = e[o]; let s = i[0]; "number" == typeof s ? s = t.utils.hex2rgb(s) : i[0] = t.utils.rgb2hex(s), r[3 * o] = s[0], r[3 * o + 1] = s[1], r[3 * o + 2] = s[2]; let a = i[1]; "number" == typeof a ? a = t.utils.hex2rgb(a) : i[1] = t.utils.rgb2hex(a), n[3 * o] = a[0], n[3 * o + 1] = a[1], n[3 * o + 2] = a[2] } this._replacements = e } get replacements() { return this._replacements } refresh() { this.replacements = this._replacements } get maxColors() { return this._maxColors } set epsilon(e) { this.uniforms.epsilon = e } get epsilon() { return this.uniforms.epsilon } } const me = class extends t.Filter { constructor(e, t = 0) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform float sepia;\nuniform float noise;\nuniform float noiseSize;\nuniform float scratch;\nuniform float scratchDensity;\nuniform float scratchWidth;\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\nuniform float seed;\n\nconst float SQRT_2 = 1.414213;\nconst vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 Overlay(vec3 src, vec3 dst)\n{\n    // if (dst <= 0.5) then: 2 * src * dst\n    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)\n    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\n                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\n                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));\n}\n\n\nvoid main()\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 color = gl_FragColor.rgb;\n\n    if (sepia > 0.0)\n    {\n        float gray = (color.x + color.y + color.z) / 3.0;\n        vec3 grayscale = vec3(gray);\n\n        color = Overlay(SEPIA_RGB, grayscale);\n\n        color = grayscale + sepia * (color - grayscale);\n    }\n\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        vec2 dir = vec2(vec2(0.5, 0.5) - coord);\n        dir.y *= dimensions.y / dimensions.x;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    if (scratchDensity > seed && scratch != 0.0)\n    {\n        float phase = seed * 256.0;\n        float s = mod(floor(phase), 2.0);\n        float dist = 1.0 / scratchDensity;\n        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));\n        if (d < seed * 0.6 + 0.4)\n        {\n            highp float period = scratchDensity * 10.0;\n\n            float xx = coord.x * period + phase;\n            float aa = abs(mod(xx, 0.5) * 4.0);\n            float bb = mod(floor(xx / 0.5), 2.0);\n            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);\n\n            float kk = 2.0 * period;\n            float dw = scratchWidth / dimensions.x * (0.75 + seed);\n            float dh = dw * kk;\n\n            float tine = (yy - (2.0 - dh));\n\n            if (tine > 0.0) {\n                float _sign = sign(scratch);\n\n                tine = s * tine / period + scratch + 0.1;\n                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);\n\n                color.rgb *= tine;\n            }\n        }\n    }\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);\n        // float _noise = snoise(d) * 0.5;\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        color += _noise * noise;\n    }\n\n    gl_FragColor.rgb = color;\n}\n"), this.seed = 0, this.uniforms.dimensions = new Float32Array(2), "number" == typeof e ? (this.seed = e, e = void 0) : this.seed = t, Object.assign(this, me.defaults, e) } apply(e, t, r, n) { var i, o; this.uniforms.dimensions[0] = null == (i = t.filterFrame) ? void 0 : i.width, this.uniforms.dimensions[1] = null == (o = t.filterFrame) ? void 0 : o.height, this.uniforms.seed = this.seed, e.applyFilter(this, t, r, n) } set sepia(e) { this.uniforms.sepia = e } get sepia() { return this.uniforms.sepia } set noise(e) { this.uniforms.noise = e } get noise() { return this.uniforms.noise } set noiseSize(e) { this.uniforms.noiseSize = e } get noiseSize() { return this.uniforms.noiseSize } set scratch(e) { this.uniforms.scratch = e } get scratch() { return this.uniforms.scratch } set scratchDensity(e) { this.uniforms.scratchDensity = e } get scratchDensity() { return this.uniforms.scratchDensity } set scratchWidth(e) { this.uniforms.scratchWidth = e } get scratchWidth() { return this.uniforms.scratchWidth } set vignetting(e) { this.uniforms.vignetting = e } get vignetting() { return this.uniforms.vignetting } set vignettingAlpha(e) { this.uniforms.vignettingAlpha = e } get vignettingAlpha() { return this.uniforms.vignettingAlpha } set vignettingBlur(e) { this.uniforms.vignettingBlur = e } get vignettingBlur() { return this.uniforms.vignettingBlur } }; let ge = me; ge.defaults = { sepia: .3, noise: .3, noiseSize: 1, scratch: .5, scratchDensity: .3, scratchWidth: 1, vignetting: .3, vignettingAlpha: 1, vignettingBlur: .3 }; var ve = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterClamp;\n\nuniform float uAlpha;\nuniform vec2 uThickness;\nuniform vec4 uColor;\nuniform bool uKnockout;\n\nconst float DOUBLE_PI = 2. * 3.14159265358979323846264;\nconst float ANGLE_STEP = ${angleStep};\n\nfloat outlineMaxAlphaAtPos(vec2 pos) {\n    if (uThickness.x == 0. || uThickness.y == 0.) {\n        return 0.;\n    }\n\n    vec4 displacedColor;\n    vec2 displacedPos;\n    float maxAlpha = 0.;\n\n    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {\n        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);\n        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);\n        displacedColor = texture2D(uSampler, clamp(displacedPos, filterClamp.xy, filterClamp.zw));\n        maxAlpha = max(maxAlpha, displacedColor.a);\n    }\n\n    return maxAlpha;\n}\n\nvoid main(void) {\n    vec4 sourceColor = texture2D(uSampler, vTextureCoord);\n    vec4 contentColor = sourceColor * float(!uKnockout);\n    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);\n    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);\n    gl_FragColor = contentColor + outlineColor;\n}\n"; const pe = class extends t.Filter { constructor(e = 1, t = 0, r = .1, n = 1, i = !1) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", ve.replace(/\$\{angleStep\}/, pe.getAngleStep(r))), this._thickness = 1, this._alpha = 1, this._knockout = !1, this.uniforms.uThickness = new Float32Array([0, 0]), this.uniforms.uColor = new Float32Array([0, 0, 0, 1]), this.uniforms.uAlpha = n, this.uniforms.uKnockout = i, Object.assign(this, { thickness: e, color: t, quality: r, alpha: n, knockout: i }) } static getAngleStep(e) { const t = Math.max(e * pe.MAX_SAMPLES, pe.MIN_SAMPLES); return (2 * Math.PI / t).toFixed(7) } apply(e, t, r, n) { this.uniforms.uThickness[0] = this._thickness / t._frame.width, this.uniforms.uThickness[1] = this._thickness / t._frame.height, this.uniforms.uAlpha = this._alpha, this.uniforms.uKnockout = this._knockout, e.applyFilter(this, t, r, n) } get alpha() { return this._alpha } set alpha(e) { this._alpha = e } get color() { return t.utils.rgb2hex(this.uniforms.uColor) } set color(e) { t.utils.hex2rgb(e, this.uniforms.uColor) } get knockout() { return this._knockout } set knockout(e) { this._knockout = e } get thickness() { return this._thickness } set thickness(e) { this._thickness = e, this.padding = e } }; let xe = pe; xe.MIN_SAMPLES = 1, xe.MAX_SAMPLES = 100; class ye extends t.Filter { constructor(e = 10) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n"), this.size = e } get size() { return this.uniforms.size } set size(e) { "number" == typeof e && (e = [e, e]), this.uniforms.size = e } } class Ce extends t.Filter { constructor(e = 0, t = [0, 0], r = 5, n = -1) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float uRadian;\nuniform vec2 uCenter;\nuniform float uRadius;\nuniform int uKernelSize;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    float aspect = filterArea.y / filterArea.x;\n    vec2 center = uCenter.xy / filterArea.xy;\n    float gradient = uRadius / filterArea.x * 0.3;\n    float radius = uRadius / filterArea.x - gradient * 0.5;\n    int k = uKernelSize - 1;\n\n    vec2 coord = vTextureCoord;\n    vec2 dir = vec2(center - coord);\n    float dist = length(vec2(dir.x, dir.y * aspect));\n\n    float radianStep = uRadian;\n    if (radius >= 0.0 && dist > radius) {\n        float delta = dist - radius;\n        float gap = gradient;\n        float scale = 1.0 - abs(delta / gap);\n        if (scale <= 0.0) {\n            gl_FragColor = color;\n            return;\n        }\n        radianStep *= scale;\n    }\n    radianStep /= float(k);\n\n    float s = sin(radianStep);\n    float c = cos(radianStep);\n    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n\n        coord -= center;\n        coord.y *= aspect;\n        coord = rotationMatrix * coord;\n        coord.y /= aspect;\n        coord += center;\n\n        vec4 sample = texture2D(uSampler, coord);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample;\n    }\n\n    gl_FragColor = color / float(uKernelSize);\n}\n"), this._angle = 0, this.angle = e, this.center = t, this.kernelSize = r, this.radius = n } apply(e, t, r, n) { this.uniforms.uKernelSize = 0 !== this._angle ? this.kernelSize : 0, e.applyFilter(this, t, r, n) } set angle(e) { this._angle = e, this.uniforms.uRadian = e * Math.PI / 180 } get angle() { return this._angle } get center() { return this.uniforms.uCenter } set center(e) { this.uniforms.uCenter = e } get radius() { return this.uniforms.uRadius } set radius(e) { (e < 0 || e === 1 / 0) && (e = -1), this.uniforms.uRadius = e } } const _e = class extends t.Filter { constructor(e) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nuniform bool mirror;\nuniform float boundary;\nuniform vec2 amplitude;\nuniform vec2 waveLength;\nuniform vec2 alpha;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    if (coord.y < boundary) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    float k = (coord.y - boundary) / (1. - boundary + 0.0001);\n    float areaY = boundary * dimensions.y / filterArea.y;\n    float v = areaY + areaY - vTextureCoord.y;\n    float y = mirror ? v : vTextureCoord.y;\n\n    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;\n    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;\n    float _alpha = (alpha.y - alpha.x) * k + alpha.x;\n\n    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;\n    x = clamp(x, filterClamp.x, filterClamp.z);\n\n    vec4 color = texture2D(uSampler, vec2(x, y));\n\n    gl_FragColor = color * _alpha;\n}\n"), this.time = 0, this.uniforms.amplitude = new Float32Array(2), this.uniforms.waveLength = new Float32Array(2), this.uniforms.alpha = new Float32Array(2), this.uniforms.dimensions = new Float32Array(2), Object.assign(this, _e.defaults, e) } apply(e, t, r, n) { var i, o; this.uniforms.dimensions[0] = null == (i = t.filterFrame) ? void 0 : i.width, this.uniforms.dimensions[1] = null == (o = t.filterFrame) ? void 0 : o.height, this.uniforms.time = this.time, e.applyFilter(this, t, r, n) } set mirror(e) { this.uniforms.mirror = e } get mirror() { return this.uniforms.mirror } set boundary(e) { this.uniforms.boundary = e } get boundary() { return this.uniforms.boundary } set amplitude(e) { this.uniforms.amplitude[0] = e[0], this.uniforms.amplitude[1] = e[1] } get amplitude() { return this.uniforms.amplitude } set waveLength(e) { this.uniforms.waveLength[0] = e[0], this.uniforms.waveLength[1] = e[1] } get waveLength() { return this.uniforms.waveLength } set alpha(e) { this.uniforms.alpha[0] = e[0], this.uniforms.alpha[1] = e[1] } get alpha() { return this.uniforms.alpha } }; let be = _e; be.defaults = { mirror: !0, boundary: .5, amplitude: [0, 20], waveLength: [30, 100], alpha: [1, 1], time: 0 }; class Se extends t.Filter { constructor(e = [-10, 0], t = [0, 10], r = [0, 0]) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n"), this.red = e, this.green = t, this.blue = r } get red() { return this.uniforms.red } set red(e) { this.uniforms.red = e } get green() { return this.uniforms.green } set green(e) { this.uniforms.green = e } get blue() { return this.uniforms.blue } set blue(e) { this.uniforms.blue = e } } const Te = class extends t.Filter { constructor(e = [0, 0], t, r = 0) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nuniform vec2 center;\n\nuniform float amplitude;\nuniform float wavelength;\n// uniform float power;\nuniform float brightness;\nuniform float speed;\nuniform float radius;\n\nuniform float time;\n\nconst float PI = 3.14159;\n\nvoid main()\n{\n    float halfWavelength = wavelength * 0.5 / filterArea.x;\n    float maxRadius = radius / filterArea.x;\n    float currentRadius = time * speed / filterArea.x;\n\n    float fade = 1.0;\n\n    if (maxRadius > 0.0) {\n        if (currentRadius > maxRadius) {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);\n    }\n\n    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);\n    dir.y *= filterArea.y / filterArea.x;\n    float dist = length(dir);\n\n    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    vec2 diffUV = normalize(dir);\n\n    float diff = (dist - currentRadius) / halfWavelength;\n\n    float p = 1.0 - pow(abs(diff), 2.0);\n\n    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );\n    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );\n\n    vec2 offset = diffUV * powDiff / filterArea.xy;\n\n    // Do clamp :\n    vec2 coord = vTextureCoord + offset;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    // No clamp :\n    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);\n\n    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;\n\n    gl_FragColor = color;\n}\n"), this.center = e, Object.assign(this, Te.defaults, t), this.time = r } apply(e, t, r, n) { this.uniforms.time = this.time, e.applyFilter(this, t, r, n) } get center() { return this.uniforms.center } set center(e) { this.uniforms.center = e } get amplitude() { return this.uniforms.amplitude } set amplitude(e) { this.uniforms.amplitude = e } get wavelength() { return this.uniforms.wavelength } set wavelength(e) { this.uniforms.wavelength = e } get brightness() { return this.uniforms.brightness } set brightness(e) { this.uniforms.brightness = e } get speed() { return this.uniforms.speed } set speed(e) { this.uniforms.speed = e } get radius() { return this.uniforms.radius } set radius(e) { this.uniforms.radius = e } }; let Fe = Te; Fe.defaults = { amplitude: 30, wavelength: 160, brightness: 1, speed: 500, radius: -1 }; class Ae extends t.Filter { constructor(e, t = 0, r = 1) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);\n    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;\n    vec4 light = texture2D(uLightmap, lightCoord);\n    vec3 ambient = ambientColor.rgb * ambientColor.a;\n    vec3 intensity = ambient + light.rgb;\n    vec3 finalColor = diffuseColor.rgb * intensity;\n    gl_FragColor = vec4(finalColor, diffuseColor.a);\n}\n"), this._color = 0, this.uniforms.dimensions = new Float32Array(2), this.uniforms.ambientColor = new Float32Array([0, 0, 0, r]), this.texture = e, this.color = t } apply(e, t, r, n) { var i, o; this.uniforms.dimensions[0] = null == (i = t.filterFrame) ? void 0 : i.width, this.uniforms.dimensions[1] = null == (o = t.filterFrame) ? void 0 : o.height, e.applyFilter(this, t, r, n) } get texture() { return this.uniforms.uLightmap } set texture(e) { this.uniforms.uLightmap = e } set color(e) { const r = this.uniforms.ambientColor; "number" == typeof e ? (t.utils.hex2rgb(e, r), this._color = e) : (r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3], this._color = t.utils.rgb2hex(r)) } get color() { return this._color } get alpha() { return this.uniforms.ambientColor[3] } set alpha(e) { this.uniforms.ambientColor[3] = e } } class ze extends t.Filter { constructor(e) { var r, n; super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    color /= total;\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n"), this.uniforms.blur = e.blur, this.uniforms.gradientBlur = e.gradientBlur, this.uniforms.start = null != (r = e.start) ? r : new t.Point(0, window.innerHeight / 2), this.uniforms.end = null != (n = e.end) ? n : new t.Point(600, window.innerHeight / 2), this.uniforms.delta = new t.Point(30, 30), this.uniforms.texSize = new t.Point(window.innerWidth, window.innerHeight), this.updateDelta() } updateDelta() { this.uniforms.delta.x = 0, this.uniforms.delta.y = 0 } get blur() { return this.uniforms.blur } set blur(e) { this.uniforms.blur = e } get gradientBlur() { return this.uniforms.gradientBlur } set gradientBlur(e) { this.uniforms.gradientBlur = e } get start() { return this.uniforms.start } set start(e) { this.uniforms.start = e, this.updateDelta() } get end() { return this.uniforms.end } set end(e) { this.uniforms.end = e, this.updateDelta() } } class we extends ze { updateDelta() { const e = this.uniforms.end.x - this.uniforms.start.x, t = this.uniforms.end.y - this.uniforms.start.y, r = Math.sqrt(e * e + t * t); this.uniforms.delta.x = e / r, this.uniforms.delta.y = t / r } } class Pe extends ze { updateDelta() { const e = this.uniforms.end.x - this.uniforms.start.x, t = this.uniforms.end.y - this.uniforms.start.y, r = Math.sqrt(e * e + t * t); this.uniforms.delta.x = -t / r, this.uniforms.delta.y = e / r } } const Me = class extends t.Filter { constructor(e, r, n, i) { super(), "number" == typeof e && (t.utils.deprecation("5.3.0", "TiltShiftFilter constructor arguments is deprecated, use options."), e = { blur: e, gradientBlur: r, start: n, end: i }), e = Object.assign({}, Me.defaults, e), this.tiltShiftXFilter = new we(e), this.tiltShiftYFilter = new Pe(e) } apply(e, t, r, n) { const i = e.getFilterTexture(); this.tiltShiftXFilter.apply(e, t, i, 1), this.tiltShiftYFilter.apply(e, i, r, n), e.returnFilterTexture(i) } get blur() { return this.tiltShiftXFilter.blur } set blur(e) { this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = e } get gradientBlur() { return this.tiltShiftXFilter.gradientBlur } set gradientBlur(e) { this.tiltShiftXFilter.gradientBlur = this.tiltShiftYFilter.gradientBlur = e } get start() { return this.tiltShiftXFilter.start } set start(e) { this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = e } get end() { return this.tiltShiftXFilter.end } set end(e) { this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = e } }; let De = Me; De.defaults = { blur: 100, gradientBlur: 600, start: void 0, end: void 0 }; const ke = class extends t.Filter { constructor(e) { super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n"), Object.assign(this, ke.defaults, e) } get offset() { return this.uniforms.offset } set offset(e) { this.uniforms.offset = e } get radius() { return this.uniforms.radius } set radius(e) { this.uniforms.radius = e } get angle() { return this.uniforms.angle } set angle(e) { this.uniforms.angle = e } }; let Oe = ke; Oe.defaults = { radius: 200, angle: 4, padding: 20, offset: new t.Point }; var Re = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uCenter;\nuniform float uStrength;\nuniform float uInnerRadius;\nuniform float uRadius;\n\nconst float MAX_KERNEL_SIZE = ${maxKernelSize};\n\n// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand(vec2 co, float seed) {\n    const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);\n    return fract(sin(sn) * c + seed);\n}\n\nvoid main() {\n\n    float minGradient = uInnerRadius * 0.3;\n    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;\n\n    float gradient = uRadius * 0.3;\n    float radius = (uRadius - gradient * 0.5) / filterArea.x;\n\n    float countLimit = MAX_KERNEL_SIZE;\n\n    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);\n    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));\n\n    float strength = uStrength;\n\n    float delta = 0.0;\n    float gap;\n    if (dist < innerRadius) {\n        delta = innerRadius - dist;\n        gap = minGradient;\n    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity\n        delta = dist - radius;\n        gap = gradient;\n    }\n\n    if (delta > 0.0) {\n        float normalCount = gap / filterArea.x;\n        delta = (normalCount - delta) / normalCount;\n        countLimit *= delta;\n        strength *= delta;\n        if (countLimit < 1.0)\n        {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n    }\n\n    // randomize the lookup values to hide the fixed number of samples\n    float offset = rand(vTextureCoord, 0.0);\n\n    float total = 0.0;\n    vec4 color = vec4(0.0);\n\n    dir *= strength;\n\n    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {\n        float percent = (t + offset) / MAX_KERNEL_SIZE;\n        float weight = 4.0 * (percent - percent * percent);\n        vec2 p = vTextureCoord + dir * percent;\n        vec4 sample = texture2D(uSampler, p);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n\n        if (t > countLimit){\n            break;\n        }\n    }\n\n    color /= total;\n    // switch back from pre-multiplied alpha\n    // color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n", Ee = Object.getOwnPropertySymbols, je = Object.prototype.hasOwnProperty, Ie = Object.prototype.propertyIsEnumerable; const Le = class extends t.Filter { constructor(e) { const t = Object.assign(Le.defaults, e), { maxKernelSize: r } = t, n = ((e, t) => { var r = {}; for (var n in e) je.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]); if (null != e && Ee) for (var n of Ee(e)) t.indexOf(n) < 0 && Ie.call(e, n) && (r[n] = e[n]); return r })(t, ["maxKernelSize"]); super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", Re.replace("${maxKernelSize}", r.toFixed(1))), Object.assign(this, n) } get center() { return this.uniforms.uCenter } set center(e) { this.uniforms.uCenter = e } get strength() { return this.uniforms.uStrength } set strength(e) { this.uniforms.uStrength = e } get innerRadius() { return this.uniforms.uInnerRadius } set innerRadius(e) { this.uniforms.uInnerRadius = e } get radius() { return this.uniforms.uRadius } set radius(e) { (e < 0 || e === 1 / 0) && (e = -1), this.uniforms.uRadius = e } }; let Ve = Le; return Ve.defaults = { strength: .1, center: [0, 0], innerRadius: 0, radius: -1, maxKernelSize: 32 }, e.AdjustmentFilter = i, e.AdvancedBloomFilter = u, e.AsciiFilter = c, e.BevelFilter = f, e.BloomFilter = d, e.BulgePinchFilter = m, e.CRTFilter = X, e.ColorGradientFilter = j, e.ColorMapFilter = I, e.ColorOverlayFilter = L, e.ColorReplaceFilter = V, e.ConvolutionFilter = N, e.CrossHatchFilter = G, e.DotFilter = q, e.DropShadowFilter = Q, e.EmbossFilter = J, e.GlitchFilter = te, e.GlowFilter = ie, e.GodrayFilter = ae, e.GrayscaleFilter = le, e.HslAdjustmentFilter = ce, e.KawaseBlurFilter = o, e.MotionBlurFilter = fe, e.MultiColorReplaceFilter = he, e.OldFilmFilter = ge, e.OutlineFilter = xe, e.PixelateFilter = ye, e.RGBSplitFilter = Se, e.RadialBlurFilter = Ce, e.ReflectionFilter = be, e.ShockwaveFilter = Fe, e.SimpleLightmapFilter = Ae, e.TiltShiftAxisFilter = ze, e.TiltShiftFilter = De, e.TiltShiftXFilter = we, e.TiltShiftYFilter = Pe, e.TwistFilter = Oe, e.ZoomBlurFilter = Ve, Object.defineProperty(e, "__esModule", { value: !0 }), e }({}, PIXI, PIXI.filters, PIXI.filters); Object.assign(PIXI.filters, __filters);
  //# sourceMappingURL=/sm/a81fbc95f2d06fc9441bd5eab12f497356ae9e2687efa16d4866f79acc7b17b0.map

  var PP;
  (function (PP) {
    let _loader;
    /**
        * Load plugin settings
    */
    function LoadPluginSettings() {
      _loader = new KDX.ParamLoader("PKD_MapEnhancer");
    }
    PP.LoadPluginSettings = LoadPluginSettings;
    /**
        * Get parameter from plugin settings
        * @param {string} paramName - Name of parameter
        * @param {any} defaultValue - Default value if not found
        * @returns {any} - Value of parameter
    */
    function getLoaderParam(paramName, defaultValue) {
      try {
        if (!_loader) {
          LoadPluginSettings();
        }
        return _loader.getParam(paramName, defaultValue);
      }
      catch (error) {
        console.warn(error);
        return null;
      }
    }
    function OpenEditorKey() {
      return getLoaderParam('openEditorKey', 'F10');
    }
    PP.OpenEditorKey = OpenEditorKey;
    function EditorHelpLanguageIndex() {
      return getLoaderParam('editorHelpLanguageIndex', 0);
    }
    PP.EditorHelpLanguageIndex = EditorHelpLanguageIndex;
    function EditorWindowSize() {
      return getLoaderParam('editorWindowSize', {
        width: 540,
        height: 800,
      });
    }
    PP.EditorWindowSize = EditorWindowSize;
    function HelpWindowSize() {
      return getLoaderParam('helpWindowSize', {
        width: 820,
        height: 240,
      });
    }
    PP.HelpWindowSize = HelpWindowSize;
    //PKD_MapEnhancer['PP'] = PP;
  })(PP || (PP = {}));




  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ MVPatch.ts
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  (() => {
    if (KDX.isMV()) {
      Graphics['resize'] = function (width, height) {
        this._width = width;
        this._height = height;
        this._updateRenderer();
        this._updateAllElements();
      };
    }
  })();
  // ■ END MVPatch.ts
  //---------------------------------------------------------------------------


  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ DataManager.ts
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  (() => {
    DataManager._databaseFiles.push(
      /*@ts-ignore*/
      { name: "$PKD_MapEnhancerDB", src: "PKD_MapEnhancer/MapObjectsDatabase.json" },
      /*@ts-ignore*/
      { name: "$PKD_MapEnhancerCollisionsDB", src: "PKD_MapEnhancer/CollisionsDatabase.json" },
      /*@ts-ignore*/
      { name: "$PKD_MapEnhancerLayersDB", src: "PKD_MapEnhancer/LayersDatabase.json" });
    /**
     * Register NUI file for load with Database
     * @param {string} filnename - NUI file name WITHOUT extension
     */
    function pkdRegisterLocalNUIFile(filnename) {
      KDNUI.RegisterNUIFile("PKD_MapEnhancer", filnename);
    }
    pkdRegisterLocalNUIFile("NUI_EditorWindow");
    pkdRegisterLocalNUIFile("NUI_DropDown");
    pkdRegisterLocalNUIFile("NUI_ListItem");
    pkdRegisterLocalNUIFile("NUI_EditorItemsList");
    pkdRegisterLocalNUIFile("NUI_EditorObjectsModeSection");
    pkdRegisterLocalNUIFile("NUI_EditorCollisionsModeSection");
    pkdRegisterLocalNUIFile("NUI_EditorLayersModeSection");
    pkdRegisterLocalNUIFile("NUI_MapUI");
    //@[ALIAS]
    const ALIAS__loadDataFile = DataManager.loadDataFile;
    DataManager.loadDataFile = function (name, src) {
      if (src.includes("PKD_MapEnhancer")) {
        src = src.replace("Test_", "");
      }
      ALIAS__loadDataFile.call(this, name, src);
    };
  })();
  // ■ END DataManager.ts
  //---------------------------------------------------------------------------


  var EMCollisionsManager;
  (function (EMCollisionsManager) {
    let _collisionsCache = {};
    function GetAllStoredCollisions() {
      if (window["$PKD_MapEnhancerCollisionsDB"]) {
        return window["$PKD_MapEnhancerCollisionsDB"];
      }
      return [];
    }
    EMCollisionsManager.GetAllStoredCollisions = GetAllStoredCollisions;
    function GetStoredCollisionsDataForMap(mapId) {
      try {
        if (EMapEditorManager.IsActive()) {
          // * If we are in editor mode, we should always get from database
          _collisionsCache = {};
        }
        if (!_collisionsCache[mapId]) {
          let allCollisions = GetAllStoredCollisions();
          let collistionsForMap = allCollisions.filter((c) => c.mapId === mapId);
          _collisionsCache[mapId] = collistionsForMap;
        }
        return _collisionsCache[mapId];
      }
      catch (error) {
        console.warn(error);
      }
      return [];
    }
    EMCollisionsManager.GetStoredCollisionsDataForMap = GetStoredCollisionsDataForMap;
    function GetCollisionsUniqueIndexesForMap(mapId) {
      let allCollisions = GetCollisionsDataForMapOnlyWithVisibleLayers(mapId);
      let collisionPositions = allCollisions.map((c) => { return { x: c.position.x, y: c.position.y }; });
      let uniqueIndexes = [];
      for (let c in collisionPositions) {
        let i = collisionPositions[c];
        uniqueIndexes.push(GetUniqeIndexForPosition(i.x, i.y));
      }
      return uniqueIndexes;
    }
    EMCollisionsManager.GetCollisionsUniqueIndexesForMap = GetCollisionsUniqueIndexesForMap;
    function GetCollisionsDataForMapOnlyWithVisibleLayers(mapId) {
      let allCollisions = GetStoredCollisionsDataForMap(mapId);
      let visibleLayers = [];
      for (let collisionData of allCollisions) {
        if (!visibleLayers.includes(collisionData.layerIndex)) {
          if (EMLayersManager.IsLayerConditionTrue(collisionData.layerIndex, mapId, true)) {
            visibleLayers.push(collisionData.layerIndex);
          }
        }
      }
      return allCollisions.filter((c) => visibleLayers.includes(c.layerIndex));
    }
    EMCollisionsManager.GetCollisionsDataForMapOnlyWithVisibleLayers = GetCollisionsDataForMapOnlyWithVisibleLayers;
    function GetStoredCollisionsPositionsForMap(mapId) {
      let allCollisions = GetStoredCollisionsDataForMap(mapId);
      return allCollisions.map((c) => c.position);
    }
    EMCollisionsManager.GetStoredCollisionsPositionsForMap = GetStoredCollisionsPositionsForMap;
    function IsMapHaveAnyCollision(mapId) {
      let allCollisions = GetStoredCollisionsDataForMap(mapId);
      return allCollisions.length > 0;
    }
    EMCollisionsManager.IsMapHaveAnyCollision = IsMapHaveAnyCollision;
    function GetUniqeIndexForPosition(x, y) {
      return x * $gameMap.width() * y + x;
    }
    EMCollisionsManager.GetUniqeIndexForPosition = GetUniqeIndexForPosition;
    function AddCollision(mapId, position, layerIndex) {
      try {
        let allCollisions = GetAllStoredCollisions();
        // * Check if already exists
        let index = allCollisions.findIndex((c) => c.mapId === mapId && c.position.x === position.x && c.position.y === position.y && c.layerIndex === layerIndex);
        if (index >= 0) {
          return;
        }
        allCollisions.push({ mapId: mapId, position: position, layerIndex: layerIndex });
        window["$PKD_MapEnhancerCollisionsDB"] = allCollisions;
      }
      catch (error) {
        console.warn(error);
      }
      try {
        WriteToFile();
      }
      catch (error) {
        console.warn(error);
      }
    }
    EMCollisionsManager.AddCollision = AddCollision;
    function DeleteCollision(mapId, position, layerIndex) {
      try {
        let allCollisions = GetAllStoredCollisions();
        let index = allCollisions.findIndex((c) => c.mapId === mapId && c.position.x === position.x && c.position.y === position.y && c.layerIndex === layerIndex);
        if (index >= 0) {
          allCollisions.splice(index, 1);
          window["$PKD_MapEnhancerCollisionsDB"] = allCollisions;
          try {
            WriteToFile();
          }
          catch (error) {
            console.warn(error);
          }
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    EMCollisionsManager.DeleteCollision = DeleteCollision;
    function WriteToFile() {
      try {
        if (Utils.isNwjs()) {
          /*@ts-ignore*/
          let fs = require('fs');
          /*@ts-ignore*/
          const path = require('path');
          /*@ts-ignore*/
          const root = path.join(process.cwd(), 'data/PKD_MapEnhancer');
          const filename = path.join(root, "CollisionsDatabase.json");
          fs.writeFileSync(filename, JSON.stringify(window['$PKD_MapEnhancerCollisionsDB']));
        }
        else {
          console.warn("EMCollisionsManager: WriteToFile: Not implemented for web");
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    window['EMCollisionsManager'] = EMCollisionsManager;
  })(EMCollisionsManager || (EMCollisionsManager = {}));


  var EMLayersManager;
  (function (EMLayersManager) {
    let _layersCache = {};
    let _layersConditionsCachePerMap = {};
    // * Conditions results cache for current Map ID
    let _layersConditionsResultsCache = {};
    function OnNewMapLoaded() {
      _layersConditionsResultsCache = {};
    }
    EMLayersManager.OnNewMapLoaded = OnNewMapLoaded;
    function GetAllStoredLayers() {
      if (window["$PKD_MapEnhancerLayersDB"]) {
        return window["$PKD_MapEnhancerLayersDB"];
      }
      return [];
    }
    EMLayersManager.GetAllStoredLayers = GetAllStoredLayers;
    function GetStoredLayersDataForMap(mapId) {
      try {
        if (EMapEditorManager.IsActive()) {
          // * If we are in editor mode, we should always get from database
          _layersCache = {};
        }
        if (!_layersCache[mapId]) {
          let allLayers = GetAllStoredLayers();
          let layersForMap = allLayers.filter((c) => c.mapId === mapId);
          _layersCache[mapId] = layersForMap;
        }
        return _layersCache[mapId];
      }
      catch (error) {
        console.warn(error);
      }
      return [];
    }
    EMLayersManager.GetStoredLayersDataForMap = GetStoredLayersDataForMap;
    function IsMapHaveAnyLayerCondition(mapId) {
      if (!mapId) {
        mapId = $gameMap.mapId();
      }
      let allLayers = GetStoredLayersDataForMap(mapId);
      return allLayers.length > 0;
    }
    EMLayersManager.IsMapHaveAnyLayerCondition = IsMapHaveAnyLayerCondition;
    function IsLayerConditionTrue(layerIndex, mapId, isForceCheck) {
      try {
        if (!mapId) {
          mapId = $gameMap.mapId();
        }
        if (!IsMapHaveAnyLayerCondition(mapId)) {
          return true;
        }
        if (isForceCheck == true) {
          _layersConditionsResultsCache[layerIndex] = null;
        }
        return getLayerConditionResult(layerIndex, mapId);
      }
      catch (error) {
        console.warn(error);
      }
      return true;
    }
    EMLayersManager.IsLayerConditionTrue = IsLayerConditionTrue;
    function getLayerConditionResult(layerIndex, mapId) {
      try {
        if (EMapEditorManager.IsActive()) {
          // * If we are in editor mode, we should always get from database
          _layersConditionsResultsCache = {};
          return true;
        }
        if (_layersConditionsResultsCache[layerIndex] == null || _layersConditionsResultsCache[layerIndex] == undefined) {
          _layersConditionsResultsCache[layerIndex] = getLayerConditionStatus(layerIndex, mapId);
          setTimeout(() => {
            _layersConditionsResultsCache[layerIndex] = null;
            delete _layersConditionsResultsCache[layerIndex];
          }, 1000);
        }
        return _layersConditionsResultsCache[layerIndex];
      }
      catch (error) {
        console.warn(error);
      }
      return true;
    }
    function getLayerConditionStatus(layerIndex, mapId) {
      try {
        let layerCondition = getLayerConditionText(layerIndex, mapId);
        if (!KString.any(layerCondition)) {
          return true;
        }
        return eval(layerCondition);
      }
      catch (error) {
        console.warn(error);
      }
      return true;
    }
    function getLayerConditionText(layerIndex, mapId) {
      try {
        if (EMapEditorManager.IsActive()) {
          // * If we are in editor mode, we should always get from database
          _layersConditionsCachePerMap[mapId] = {};
        }
        if (!_layersConditionsCachePerMap[mapId]) {
          _layersConditionsCachePerMap[mapId] = {};
        }
        if (!_layersConditionsCachePerMap[mapId][layerIndex]) {
          let allLayers = GetStoredLayersDataForMap(mapId);
          let layer = allLayers.find((c) => c.layerIndex === layerIndex);
          if (layer) {
            _layersConditionsCachePerMap[mapId][layerIndex] = layer.condition;
          }
          else {
            return "";
          }
        }
        return _layersConditionsCachePerMap[mapId][layerIndex];
      }
      catch (error) {
        console.warn(error);
      }
      return "";
    }
    function ModifyLayerCondition(layerIndex, mapId, condition) {
      try {
        let allLayers = GetAllStoredLayers();
        let layer = allLayers.find((c) => c.layerIndex === layerIndex && c.mapId === mapId);
        if (layer) {
          layer.condition = condition;
        }
        else {
          allLayers.push({
            mapId: mapId,
            layerIndex: layerIndex,
            condition: condition
          });
        }
        window["$PKD_MapEnhancerLayersDB"] = allLayers;
      }
      catch (error) {
        console.warn(error);
      }
      try {
        WriteToFile();
      }
      catch (error) {
        console.warn(error);
      }
    }
    EMLayersManager.ModifyLayerCondition = ModifyLayerCondition;
    function Refresh() {
      _layersConditionsResultsCache = {};
    }
    EMLayersManager.Refresh = Refresh;
    function WriteToFile() {
      try {
        if (Utils.isNwjs()) {
          /*@ts-ignore*/
          let fs = require('fs');
          /*@ts-ignore*/
          const path = require('path');
          /*@ts-ignore*/
          const root = path.join(process.cwd(), 'data/PKD_MapEnhancer');
          const filename = path.join(root, "LayersDatabase.json");
          fs.writeFileSync(filename, JSON.stringify(window['$PKD_MapEnhancerLayersDB']));
        }
        else {
          console.warn("EMLayersManager: WriteToFile: Not implemented for web");
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    function GetLayerInfo(layerIndex) {
      try {
        let mapId = $gameMap.mapId();
        let allLayers = GetAllStoredLayers();
        let layer = allLayers.find((c) => c.layerIndex === layerIndex && c.mapId === mapId);
        let collisions = EMCollisionsManager.GetStoredCollisionsDataForMap(mapId);
        collisions = collisions.filter((c) => c.layerIndex === layerIndex);
        let objects = EMObjectsManager.GetAllConfigsForMap(mapId);
        objects = objects.filter((c) => c.layerIndex === layerIndex);
        let conditionText = '';
        if (layer) {
          conditionText = layer.condition;
        }
        return {
          layerIndex: layerIndex,
          objectsCount: objects.length,
          collidersCount: collisions.length,
          regionsCount: 0,
          condition: conditionText
        };
      }
      catch (error) {
        console.warn(error);
      }
      return {
        layerIndex: layerIndex,
        objectsCount: 0,
        collidersCount: 0,
        regionsCount: 0,
        condition: ""
      };
    }
    EMLayersManager.GetLayerInfo = GetLayerInfo;
    window['EMLayersManager'] = EMLayersManager;
  })(EMLayersManager || (EMLayersManager = {}));


  var EMObjectsManager;
  (function (EMObjectsManager) {
    function IsSpritesAreLoaded() {
      try {
        console.log("EMObjectsManager: IsSpritesAreLoaded");
        let allSprites = GetAllSprites();
        let isLoaded = allSprites.every((sprite) => {
          return sprite.isLoaded();
        });
        return isLoaded;
      }
      catch (error) {
        console.warn(error);
      }
      return true;
    }
    EMObjectsManager.IsSpritesAreLoaded = IsSpritesAreLoaded;
    function GetAllStoredConfigs() {
      if (window['$PKD_MapEnhancerDB']) {
        return window['$PKD_MapEnhancerDB'];
      }
      return [];
    }
    EMObjectsManager.GetAllStoredConfigs = GetAllStoredConfigs;
    function AddStoredConfig(config) {
      try {
        let configs = GetAllStoredConfigs();
        //if we have already config with same uniqueId, we should only replace values
        let configWithSameUniqueId = configs.find((c) => c.uniqueId === config.uniqueId);
        if (configWithSameUniqueId) {
          let index = configs.indexOf(configWithSameUniqueId);
          configs[index] = config;
        }
        else {
          configs.push(config);
        }
        window['$PKD_MapEnhancerDB'] = configs;
        try {
          WriteStoredConfigsToFile();
        }
        catch (error) {
          console.warn(error);
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    EMObjectsManager.AddStoredConfig = AddStoredConfig;
    function WriteStoredConfigsToFile() {
      try {
        if (Utils.isNwjs()) {
          /*@ts-ignore*/
          let fs = require('fs');
          /*@ts-ignore*/
          const path = require('path');
          /*@ts-ignore*/
          const root = path.join(process.cwd(), 'data/PKD_MapEnhancer');
          const filename = path.join(root, "MapObjectsDatabase.json");
          fs.writeFileSync(filename, JSON.stringify(window['$PKD_MapEnhancerDB']));
        }
        else {
          console.warn("EMObjectsManager: WriteStoredConfigsToFile: Not implemented for web");
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    function DeleteStoredConfig(uniqueId, isWriteToFile) {
      try {
        let configs = GetAllStoredConfigs();
        let configWithSameUniqueId = configs.find((c) => c.uniqueId === uniqueId);
        if (configWithSameUniqueId) {
          let index = configs.indexOf(configWithSameUniqueId);
          configs.splice(index, 1);
          window['$PKD_MapEnhancerDB'] = configs;
          try {
            if (isWriteToFile) {
              WriteStoredConfigsToFile();
            }
          }
          catch (error) {
            console.warn(error);
          }
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    EMObjectsManager.DeleteStoredConfig = DeleteStoredConfig;
    function DeleteStoredConfigs(uniqueIds) {
      try {
        for (let i = 0; i < uniqueIds.length; i++) {
          DeleteStoredConfig(uniqueIds[i], false);
        }
        WriteStoredConfigsToFile();
      }
      catch (error) {
        console.warn(error);
      }
    }
    EMObjectsManager.DeleteStoredConfigs = DeleteStoredConfigs;
    function GetAllInGameConfigs() {
      try {
        /*@ts-ignore*/
        return $gameSystem.pkdMEGetConfigs();
      }
      catch (error) {
        console.warn(error);
      }
      return [];
    }
    EMObjectsManager.GetAllInGameConfigs = GetAllInGameConfigs;
    function SaveInGameConfig(config) {
      try {
        let configs = GetAllInGameConfigs();
        //if we have already config with same uniqueId, we should only replace values
        let configWithSameUniqueId = configs.find((c) => c.uniqueId === config.uniqueId);
        if (configWithSameUniqueId) {
          let index = configs.indexOf(configWithSameUniqueId);
          configs[index] = config;
        }
        else {
          configs.push(config);
        }
        /*@ts-ignore*/
        $gameSystem.pkdMESetConfigs(configs);
      }
      catch (error) {
        console.warn(error);
      }
    }
    EMObjectsManager.SaveInGameConfig = SaveInGameConfig;
    function DeleteInGameConfig(uniqueId) {
      try {
        let configs = GetAllInGameConfigs();
        let configWithSameUniqueId = configs.find((c) => c.uniqueId === uniqueId);
        if (configWithSameUniqueId) {
          let index = configs.indexOf(configWithSameUniqueId);
          configs.splice(index, 1);
          /*@ts-ignore*/
          $gameSystem.pkdMESetConfigs(configs);
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    EMObjectsManager.DeleteInGameConfig = DeleteInGameConfig;
    function GetAllConfigsForMap(mapId = 0) {
      try {
        let allConfigs = GetAllInGameConfigs().concat(GetAllStoredConfigs());
        return allConfigs = allConfigs.filter((config) => {
          return config.mapId === mapId;
        });
      }
      catch (error) {
        console.warn(error);
      }
      return [];
    }
    EMObjectsManager.GetAllConfigsForMap = GetAllConfigsForMap;
    function GetAllSprites() {
      try {
        /*@ts-ignore*/
        let sprites = SceneManager._scene._spriteset._tilemap.children.filter((child) => {
          return child instanceof Sprite_EMObject;
        });
        return sprites;
      }
      catch (error) {
        console.warn(error);
      }
      return [];
    }
    EMObjectsManager.GetAllSprites = GetAllSprites;
    function CreateSpritesForMap(tilemap) {
      console.log("EMObjectsManager: CreateSpritesForMap");
      let configs = GetAllConfigsForMap($gameMap.mapId());
      configs.forEach((config) => {
        let sprite = Sprite_EMObject.FromConfig(config);
        tilemap.addChild(sprite);
      });
    }
    EMObjectsManager.CreateSpritesForMap = CreateSpritesForMap;
    function GetAllPlacedObjectsOnLayer(layerIndex) {
      try {
        let sprites = GetAllSprites();
        return sprites.filter((sprite) => {
          return !sprite.isInEditMode() && sprite.getLayerIndex() === layerIndex;
        });
      }
      catch (error) {
        console.warn(error);
      }
      return [];
    }
    EMObjectsManager.GetAllPlacedObjectsOnLayer = GetAllPlacedObjectsOnLayer;
    function GetAllObjectsExpectLayer(layerIndex) {
      try {
        let sprites = GetAllSprites();
        return sprites.filter((sprite) => {
          return !sprite.isInEditMode() && sprite.getLayerIndex() != layerIndex;
        });
      }
      catch (error) {
        console.warn(error);
      }
      return [];
    }
    EMObjectsManager.GetAllObjectsExpectLayer = GetAllObjectsExpectLayer;
    window['EMObjectsManager'] = EMObjectsManager;
  })(EMObjectsManager || (EMObjectsManager = {}));


  //TODO: from JSON? or Parameter?
  const ToolsKeys = {
    grid: 'g',
    scale: 's',
    rotation: 'r',
    zIndex: 'shift',
    layerIndex: 'e',
    flip: 'f',
    resetCursor: 'c',
    xAxis: 'cancel',
    yAsix: 'y',
    globalRotation: 'shift',
    highlightLayer: 'h',
    focusLayer: 't',
    blendMode: 'b',
    hue: 'u',
    clone: 'shift',
    showCollisions: 'c',
    animationSpeed: 'a',
  };


  function _0x4b0a(_0x4b1237, _0x4996fa) {
    const _0x681b4a = _0x681b();
    return _0x4b0a = function (_0x4b0adf, _0x48a26a) {
      _0x4b0adf = _0x4b0adf - 0x165;
      let _0x19a369 = _0x681b4a[_0x4b0adf];
      return _0x19a369;
    }, _0x4b0a(_0x4b1237, _0x4996fa);
  }
  function _0x681b() {
    const _0x39dcea = [
      '\x54\x65\x73\x74\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20\x66\x72\x6f\x6d\x20\x45\x64\x69\x74\x6f\x72',
      '\x69\x73\x4f\x70\x74\x69\x6f\x6e\x56\x61\x6c\x69\x64',
      '\x77\x69\x64\x74\x68',
      '\x31\x34\x32\x32\x31\x34\x51\x50\x75\x6e\x50\x6e',
      '\x4f\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x72\x6f\x6d\x47\x61\x6d\x65',
      '\x45\x4d\x5f\x45\x64\x69\x74\x6f\x72\x57\x69\x6e\x64\x6f\x77\x48\x61\x6e\x64\x6c\x65\x72',
      '\x6c\x61\x79\x65\x72\x43\x6f\x6e\x64\x69\x74\x69\x6f\x6e\x43\x68\x61\x6e\x67\x65',
      '\x38\x75\x6e\x4c\x42\x65\x52',
      '\x6d\x69\x6e\x69\x6d\x69\x7a\x65',
      '\x63\x6c\x6f\x73\x65',
      '\x6c\x6f\x67',
      '\x6c\x6f\x61\x64\x65\x64',
      '\x73\x63\x72\x65\x65\x6e\x58',
      '\x45\x64\x69\x74\x6f\x72\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65',
      '\x57\x69\x6e\x64\x6f\x77',
      '\x33\x39\x30\x37\x35\x34\x34\x47\x47\x57\x4d\x75\x6b',
      '\x69\x73\x48\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77',
      '\x34\x30\x38\x32\x33\x34\x36\x58\x47\x4a\x66\x45\x69',
      '\x6d\x6f\x76\x65\x42\x79',
      '\x68\x65\x69\x67\x68\x74',
      '\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20\x66\x72\x6f\x6d\x20\x45\x64\x69\x74\x6f\x72\x3a\x20',
      '\x73\x63\x72\x65\x65\x6e\x59',
      '\x45\x4d\x5f\x48\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77\x48\x61\x6e\x64\x6c\x65\x72',
      '\x45\x64\x69\x74\x6f\x72\x57\x69\x6e\x64\x6f\x77\x53\x69\x7a\x65',
      '\x6d\x6f\x76\x65\x54\x6f',
      '\x45\x64\x69\x74\x6f\x72\x20\x77\x69\x6e\x64\x6f\x77\x20\x69\x73\x20\x6e\x6f\x74\x20\x73\x65\x74',
      '\x43\x6f\x6d\x6d\x61\x6e\x64\x20\x66\x72\x6f\x6d\x20\x45\x64\x69\x74\x6f\x72\x3a\x20',
      '\x77\x69\x6e\x64\x6f\x77',
      '\x4f\x70\x65\x6e\x20\x45\x64\x69\x74\x6f\x72\x20\x57\x69\x6e\x64\x6f\x77',
      '\x49\x6e\x69\x74',
      '\x45\x64\x69\x74\x6f\x72\x20\x77\x69\x6e\x64\x6f\x77\x20\x6c\x6f\x61\x64\x65\x64',
      '\x67\x65\x74',
      '\x35\x70\x4e\x48\x55\x6b\x59',
      '\x36\x38\x34\x30\x39\x34\x36\x62\x66\x6d\x6c\x70\x74',
      '\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c',
      '\x6f\x75\x74\x65\x72\x48\x65\x69\x67\x68\x74',
      '\x32\x36\x30\x31\x30\x36\x36\x68\x71\x44\x59\x6f\x6c',
      '\x4f\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x72\x6f\x6d\x45\x64\x69\x74\x6f\x72',
      '\x65\x72\x72\x6f\x72',
      '\x72\x65\x73\x74\x6f\x72\x65',
      '\x48\x65\x6c\x70\x20\x77\x69\x6e\x64\x6f\x77\x20\x6c\x6f\x61\x64\x65\x64',
      '\x48\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77\x53\x69\x7a\x65',
      '\x43\x6f\x6d\x6d\x61\x6e\x64\x20\x74\x6f\x20\x45\x64\x69\x74\x6f\x72\x3a\x20',
      '\x73\x65\x6c\x65\x63\x74\x4f\x62\x6a\x65\x63\x74',
      '\x6d\x61\x70\x49\x64',
      '\x53\x65\x6c\x65\x63\x74\x4f\x62\x6a\x65\x63\x74\x46\x72\x6f\x6d\x45\x64\x69\x74\x6f\x72',
      '\x33\x35\x31\x35\x34\x30\x6c\x43\x77\x79\x78\x47',
      '\x6f\x70\x65\x6e',
      '\x39\x35\x39\x36\x39\x31\x50\x56\x58\x65\x4d\x77',
      '\x49\x73\x45\x64\x69\x74\x6f\x72\x53\x74\x61\x72\x74\x65\x64',
      '\x69\x73\x45\x6e\x68\x61\x6e\x63\x65\x72\x45\x64\x69\x74\x6f\x72\x57\x69\x6e\x64\x6f\x77',
      '\x49\x73\x48\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77',
      '\x43\x6c\x6f\x73\x65\x41\x6c\x6c\x57\x69\x6e\x64\x6f\x77\x73',
      '\x74\x65\x73\x74',
      '\x49\x73\x45\x64\x69\x74\x6f\x72\x41\x76\x61\x69\x6c\x61\x62\x6c\x65'
    ];
    _0x681b = function () {
      return _0x39dcea;
    };
    return _0x681b();
  }
  (function (_0x1ff742, _0xa137e3) {
    const _0xea3049 = _0x4b0a, _0x7674bc = _0x1ff742();
    while (!![]) {
      try {
        const _0x1adb8e = parseInt(_0xea3049(0x169)) / 0x1 + -parseInt(_0xea3049(0x173)) / 0x2 + parseInt(_0xea3049(0x181)) / 0x3 + parseInt(_0xea3049(0x17f)) / 0x4 * (-parseInt(_0xea3049(0x190)) / 0x5) + parseInt(_0xea3049(0x194)) / 0x6 + -parseInt(_0xea3049(0x191)) / 0x7 * (parseInt(_0xea3049(0x177)) / 0x8) + -parseInt(_0xea3049(0x167)) / 0x9;
        if (_0x1adb8e === _0xa137e3)
          break;
        else
          _0x7674bc['push'](_0x7674bc['shift']());
      } catch (_0x37bb8b) {
        _0x7674bc['push'](_0x7674bc['shift']());
      }
    }
  }(_0x681b, 0xa85f5));
  var EMWindowsManager;
  (function (_0x14f3fe) {
    const _0x2a9aea = _0x4b0a;
    let _0x186ebe = null, _0x3e9cf4 = null;
    function _0x5b6d3c() {
      const _0x3517df = _0x4b0a;
      return !_0x186ebe && Utils['\x69\x73\x4e\x77\x6a\x73']() && Utils[_0x3517df(0x171)](_0x3517df(0x16e)) && !_0x1bcec5() && !_0x289848();
    }
    _0x14f3fe[_0x2a9aea(0x16f)] = _0x5b6d3c;
    function _0x2c8791() {
      return !!_0x186ebe;
    }
    _0x14f3fe[_0x2a9aea(0x16a)] = _0x2c8791;
    function _0x1bcec5() {
      const _0x34c79e = _0x2a9aea;
      return !_0x186ebe && window[_0x34c79e(0x16b)];
    }
    _0x14f3fe['\x49\x73\x45\x6e\x68\x61\x6e\x63\x65\x72\x45\x64\x69\x74\x6f\x72\x57\x69\x6e\x64\x6f\x77'] = _0x1bcec5;
    function _0x289848() {
      const _0x49c2c7 = _0x2a9aea;
      return !_0x3e9cf4 && window[_0x49c2c7(0x180)];
    }
    _0x14f3fe[_0x2a9aea(0x16c)] = _0x289848;
    function _0x3a6464() {
      const _0x541734 = _0x2a9aea;
      if (_0x2c8791()) {
        _0x186ebe[_0x541734(0x197)](), _0x3e9cf4 === null || _0x3e9cf4 === void 0x0 ? void 0x0 : _0x3e9cf4[_0x541734(0x197)]();
        return;
      }
      if (!_0x5b6d3c()) {
        console[_0x541734(0x196)](_0x541734(0x17d)), alert('\x45\x64\x69\x74\x6f\x72\x20\x69\x73\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x6f\x6e\x6c\x79\x20\x69\x6e\x20\x50\x6c\x61\x79\x74\x65\x73\x74\x20\x6d\x6f\x64\x65');
        return;
      }
      console[_0x541734(0x17a)](_0x541734(0x18c)), _0x580e1a();
    }
    _0x14f3fe['\x4f\x70\x65\x6e\x45\x64\x69\x74\x6f\x72\x57\x69\x6e\x64\x6f\x77'] = _0x3a6464;
    function _0x4ec50e() {
      const _0x129fdc = _0x2a9aea;
      try {
        _0x186ebe && _0x186ebe[_0x129fdc(0x178)](), _0x3e9cf4 && _0x3e9cf4['\x6d\x69\x6e\x69\x6d\x69\x7a\x65']();
      } catch (_0x59c700) {
        console['\x77\x61\x72\x6e'](_0x59c700);
      }
    }
    _0x14f3fe[_0x2a9aea(0x16d)] = _0x4ec50e;
    function _0x412bb3(_0x58832f, _0x1cca0e) {
      const _0x711d0a = _0x2a9aea;
      console[_0x711d0a(0x17a)](_0x711d0a(0x18a), _0x58832f, _0x1cca0e);
      switch (_0x58832f) {
        case _0x711d0a(0x16e):
          console[_0x711d0a(0x17a)](_0x711d0a(0x170));
          break;
        case '\x66\x6f\x63\x75\x73':
          nw[_0x711d0a(0x17e)][_0x711d0a(0x18f)]()['\x66\x6f\x63\x75\x73'](), console[_0x711d0a(0x17a)]('\x46\x6f\x63\x75\x73\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20\x66\x72\x6f\x6d\x20\x45\x64\x69\x74\x6f\x72');
          break;
        case _0x711d0a(0x19b):
          let {
            imageName: _0x2f1187,
            folderName: _0x3a0800
          } = _0x1cca0e;
          EMapEditorManager[_0x711d0a(0x166)](_0x2f1187, _0x3a0800);
          break;
        case _0x711d0a(0x176):
          let {
            layerIndex: _0x1bec92,
            condition: _0x1ab582
          } = _0x1cca0e;
          EMLayersManager['\x4d\x6f\x64\x69\x66\x79\x4c\x61\x79\x65\x72\x43\x6f\x6e\x64\x69\x74\x69\x6f\x6e'](_0x1bec92, $gameMap[_0x711d0a(0x165)](), _0x1ab582);
          break;
        default:
          console[_0x711d0a(0x196)](_0x711d0a(0x184), _0x58832f);
          break;
      }
    }
    _0x14f3fe[_0x2a9aea(0x195)] = _0x412bb3;
    function _0x534956(_0x32e430, _0x26ed3c) {
      const _0x825d9f = _0x2a9aea;
      var _0x3c10b4, _0x71bf46;
      if (!_0x186ebe) {
        console[_0x825d9f(0x196)](_0x825d9f(0x189));
        return;
      }
      console[_0x825d9f(0x17a)](_0x825d9f(0x19a), _0x32e430, _0x26ed3c), (_0x3c10b4 = _0x186ebe[_0x825d9f(0x18b)]['\x45\x4d\x5f\x45\x64\x69\x74\x6f\x72\x57\x69\x6e\x64\x6f\x77\x48\x61\x6e\x64\x6c\x65\x72']) === null || _0x3c10b4 === void 0x0 ? void 0x0 : _0x3c10b4['\x4f\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x72\x6f\x6d\x47\x61\x6d\x65'](_0x32e430, _0x26ed3c), (_0x71bf46 = _0x3e9cf4 === null || _0x3e9cf4 === void 0x0 ? void 0x0 : _0x3e9cf4['\x77\x69\x6e\x64\x6f\x77']['\x45\x4d\x5f\x48\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77\x48\x61\x6e\x64\x6c\x65\x72']) === null || _0x71bf46 === void 0x0 ? void 0x0 : _0x71bf46[_0x825d9f(0x174)](_0x32e430, _0x26ed3c);
    }
    _0x14f3fe['\x53\x65\x6e\x64\x43\x6f\x6d\x6d\x61\x6e\x64\x54\x6f\x45\x64\x69\x74\x6f\x72'] = _0x534956;
    function _0x580e1a() {
      _0xc4fc31();
    }
    function _0xc4fc31() {
      const _0x3567d8 = _0x2a9aea;
      let _0x4b081d = PP[_0x3567d8(0x187)]();
      nw['\x57\x69\x6e\x64\x6f\x77'][_0x3567d8(0x168)](_0x3567d8(0x192), {
        '\x77\x69\x64\x74\x68': _0x4b081d[_0x3567d8(0x172)],
        '\x68\x65\x69\x67\x68\x74': _0x4b081d[_0x3567d8(0x183)],
        '\x72\x65\x73\x69\x7a\x61\x62\x6c\x65': !![],
        '\x73\x68\x6f\x77\x5f\x69\x6e\x5f\x74\x61\x73\x6b\x62\x61\x72': !![],
        '\x6e\x65\x77\x5f\x69\x6e\x73\x74\x61\x6e\x63\x65': ![]
      }, function (_0x4e4531) {
        const _0x4b43ad = _0x3567d8;
        _0x186ebe = _0x4e4531, _0x186ebe['\x63\x6c\x6f\x73\x65\x44\x65\x76\x54\x6f\x6f\x6c\x73'](), _0x4e4531['\x6f\x6e'](_0x4b43ad(0x17b), _0x104559);
      });
    }
    function _0x104559() {
      const _0x4e5af9 = _0x2a9aea;
      console[_0x4e5af9(0x17a)](_0x4e5af9(0x18e)), window['\x6d\x6f\x76\x65\x42\x79'](-PP[_0x4e5af9(0x187)]()[_0x4e5af9(0x172)] / 0x2, 0x0), _0x186ebe[_0x4e5af9(0x188)](window[_0x4e5af9(0x17c)] + window['\x6f\x75\x74\x65\x72\x57\x69\x64\x74\x68'] + 0x8, window[_0x4e5af9(0x185)] - PP[_0x4e5af9(0x199)]()[_0x4e5af9(0x183)] / 0x2), _0x186ebe[_0x4e5af9(0x18b)]['\x69\x73\x45\x6e\x68\x61\x6e\x63\x65\x72\x45\x64\x69\x74\x6f\x72\x57\x69\x6e\x64\x6f\x77'] = !![], _0x186ebe[_0x4e5af9(0x18b)][_0x4e5af9(0x175)][_0x4e5af9(0x18d)](window), _0x3c297d();
    }
    function _0x3c297d() {
      const _0x42f11d = _0x2a9aea;
      let _0x186e02 = PP[_0x42f11d(0x199)]();
      nw['\x57\x69\x6e\x64\x6f\x77'][_0x42f11d(0x168)](_0x42f11d(0x192), {
        '\x77\x69\x64\x74\x68': _0x186e02[_0x42f11d(0x172)],
        '\x68\x65\x69\x67\x68\x74': _0x186e02[_0x42f11d(0x183)],
        '\x72\x65\x73\x69\x7a\x61\x62\x6c\x65': !![],
        '\x73\x68\x6f\x77\x5f\x69\x6e\x5f\x74\x61\x73\x6b\x62\x61\x72': !![],
        '\x6e\x65\x77\x5f\x69\x6e\x73\x74\x61\x6e\x63\x65': ![]
      }, function (_0x42b7bf) {
        const _0x24f576 = _0x42f11d;
        _0x3e9cf4 = _0x42b7bf, _0x3e9cf4['\x63\x6c\x6f\x73\x65\x44\x65\x76\x54\x6f\x6f\x6c\x73'](), _0x42b7bf['\x6f\x6e'](_0x24f576(0x17b), _0x213a56);
      });
    }
    function _0x213a56() {
      const _0x312018 = _0x2a9aea;
      console['\x6c\x6f\x67'](_0x312018(0x198)), window[_0x312018(0x182)](0x0, -PP[_0x312018(0x199)]()[_0x312018(0x183)] / 0x2), _0x3e9cf4[_0x312018(0x188)](window[_0x312018(0x17c)], window[_0x312018(0x185)] + window[_0x312018(0x193)] + 0x2), _0x3e9cf4[_0x312018(0x18b)]['\x69\x73\x48\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77'] = !![], _0x3e9cf4[_0x312018(0x18b)][_0x312018(0x186)][_0x312018(0x18d)](window), _0x544390();
    }
    function _0x544390() {
      const _0xaab396 = _0x2a9aea;
      window['\x6f\x6e\x62\x65\x66\x6f\x72\x65\x75\x6e\x6c\x6f\x61\x64'] = () => {
        const _0x4718fd = _0x4b0a;
        _0x186ebe && _0x186ebe[_0x4718fd(0x179)](), _0x3e9cf4 && _0x3e9cf4[_0x4718fd(0x179)]();
      };
      if (KDX['\x69\x73\x4d\x56']()) {
        let _0x3cffdd = nw[_0xaab396(0x17e)]['\x67\x65\x74']();
        _0x3cffdd['\x6f\x6e']('\x63\x6c\x6f\x73\x65', () => {
          const _0x3d6126 = _0xaab396;
          _0x186ebe && _0x186ebe['\x63\x6c\x6f\x73\x65'](), _0x3e9cf4 && _0x3e9cf4[_0x3d6126(0x179)](), _0x3cffdd['\x63\x6c\x6f\x73\x65'](!![]);
        });
      }
    }
    window['\x45\x4d\x57\x69\x6e\x64\x6f\x77\x73\x4d\x61\x6e\x61\x67\x65\x72'] = _0x14f3fe;
  }(EMWindowsManager || (EMWindowsManager = {})));

  function _0x4945() {
    const _0x3c9547 = [
      '\x4f\x70\x65\x6e\x45\x64\x69\x74\x6f\x72\x57\x69\x6e\x64\x6f\x77',
      '\x43\x75\x72\x72\x65\x6e\x74\x4c\x61\x79\x65\x72\x49\x6e\x64\x65\x78',
      '\x72\x65\x71\x75\x65\x73\x74\x52\x65\x66\x72\x65\x73\x68',
      '\x41\x64\x64\x53\x74\x6f\x72\x65\x64\x43\x6f\x6e\x66\x69\x67',
      '\x53\x65\x74\x48\x69\x67\x68\x6c\x69\x67\x68\x74\x43\x75\x72\x72\x65\x6e\x74\x4c\x61\x79\x65\x72',
      '\x41\x63\x74\x69\x76\x61\x74\x65\x20\x65\x64\x69\x74\x6f\x72',
      '\x43\x6c\x65\x61\x72\x48\x69\x67\x68\x6c\x69\x67\x68\x74',
      '\x45\x64\x69\x74\x6f\x72\x20\x61\x63\x74\x69\x76\x61\x74\x65\x64\x2c\x20\x63\x75\x72\x72\x65\x6e\x74\x20\x6d\x6f\x64\x65\x3a\x20',
      '\x48\x69\x67\x68\x6c\x69\x67\x68\x74\x4f\x62\x6a\x65\x63\x74\x73',
      '\x6e\x6f\x6e\x65',
      '\x5f\x74\x69\x6c\x65\x6d\x61\x70',
      '\x63\x68\x61\x6e\x67\x65\x4f\x62\x6a\x65\x63\x74',
      '\x61\x6e\x79',
      '\x53\x77\x69\x74\x63\x68\x20\x6d\x6f\x64\x65\x20\x74\x6f\x3a\x20',
      '\x45\x64\x69\x74\x6f\x72\x20\x63\x61\x6e\x20\x62\x65\x20\x61\x63\x74\x69\x76\x61\x74\x65\x64\x20\x6f\x6e\x6c\x79\x20\x6f\x6e\x20\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70',
      '\x49\x73\x41\x63\x74\x69\x76\x65',
      '\x45\x4d\x61\x70\x45\x64\x69\x74\x6f\x72\x4d\x61\x6e\x61\x67\x65\x72',
      '\x6d\x61\x6b\x65\x54\x72\x61\x6e\x73\x70\x61\x72\x65\x6e\x74',
      '\x47\x65\x74\x41\x6c\x6c\x50\x6c\x61\x63\x65\x64\x4f\x62\x6a\x65\x63\x74\x73\x4f\x6e\x4c\x61\x79\x65\x72',
      '\x47\x65\x74\x4c\x61\x79\x65\x72\x49\x6e\x66\x6f',
      '\x44\x65\x61\x63\x74\x69\x76\x61\x74\x65',
      '\x44\x65\x73\x74\x72\x6f\x79',
      '\x4f\x6e\x43\x61\x6e\x63\x65\x6c',
      '\x5f\x73\x63\x65\x6e\x65',
      '\x31\x31\x75\x58\x72\x5a\x4d\x41',
      '\x66\x6f\x6c\x64\x65\x72\x4e\x61\x6d\x65',
      '\x70\x75\x73\x68',
      '\x52\x65\x6d\x6f\x76\x65\x47\x72\x69\x64',
      '\x54\x6f\x67\x67\x6c\x65\x56\x69\x73\x69\x62\x69\x6c\x69\x74\x79',
      '\x6f\x62\x6a\x65\x63\x74',
      '\x69\x73\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64',
      '\x69\x73\x49\x6e\x45\x64\x69\x74\x4d\x6f\x64\x65',
      '\x69\x6d\x61\x67\x65\x4e\x61\x6d\x65',
      '\x74\x69\x6c\x65\x57\x69\x64\x74\x68',
      '\x43\x72\x65\x61\x74\x65\x47\x72\x69\x64',
      '\x52\x65\x6d\x6f\x76\x65',
      '\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x61\x72\x65\x6e\x74',
      '\x37\x33\x34\x30\x35\x35\x53\x69\x51\x41\x49\x61',
      '\x63\x6f\x6c\x6c\x69\x73\x69\x6f\x6e\x73',
      '\x65\x64\x69\x74',
      '\x52\x65\x66\x72\x65\x73\x68',
      '\x47\x65\x74\x49\x6d\x61\x67\x65\x49\x6e\x64\x65\x78',
      '\x49\x73\x4f\x62\x6a\x65\x63\x74\x4d\x6f\x64\x65',
      '\x72\x69\x67\x68\x74',
      '\x64\x6f\x77\x6e',
      '\x6c\x61\x79\x65\x72\x73',
      '\x63\x6c\x6f\x6e\x65',
      '\x46\x72\x6f\x6d\x43\x6f\x6e\x66\x69\x67',
      '\x48\x69\x67\x68\x6c\x69\x67\x68\x74\x4f\x62\x6a\x65\x63\x74\x73\x46\x6f\x72\x43\x75\x72\x72\x65\x6e\x74\x4c\x61\x79\x65\x72',
      '\x77\x61\x72\x6e',
      '\x39\x31\x34\x34\x64\x49\x69\x69\x6a\x6c',
      '\x5f\x64\x69\x73\x70\x6c\x61\x79\x58',
      '\x31\x31\x34\x35\x32\x33\x35\x4c\x58\x6b\x62\x64\x62',
      '\x4e\x65\x77',
      '\x45\x64\x69\x74\x6f\x72\x20\x64\x65\x61\x63\x74\x69\x76\x61\x74\x65\x64',
      '\x4f\x6e\x43\x6c\x69\x63\x6b',
      '\x69\x73\x48\x6f\x76\x65\x72\x65\x64\x42\x79\x43\x75\x72\x73\x6f\x72',
      '\x33\x32\x39\x36\x69\x76\x4c\x59\x4e\x48',
      '\x35\x35\x36\x38\x31\x37\x30\x77\x66\x47\x75\x6b\x64',
      '\x6c\x65\x66\x74',
      '\x6c\x6f\x67',
      '\x53\x65\x74\x4f\x62\x6a\x65\x63\x74\x46\x6f\x72\x50\x6c\x61\x63\x65\x6d\x65\x6e\x74',
      '\x72\x65\x6d\x6f\x76\x65\x46\x72\x6f\x6d\x50\x61\x72\x65\x6e\x74',
      '\x73\x65\x74\x4c\x61\x79\x65\x72',
      '\x43\x72\x65\x61\x74\x65',
      '\x39\x37\x33\x35\x36\x51\x4a\x6d\x4c\x68\x49',
      '\x66\x6f\x63\x75\x73\x4c\x61\x79\x65\x72',
      '\x43\x72\x65\x61\x74\x65\x47\x72\x69\x64\x43\x75\x72\x73\x6f\x72',
      '\x77\x68\x65\x65\x6c\x59',
      '\x6c\x65\x6e\x67\x74\x68',
      '\x49\x73\x43\x6f\x6c\x6c\x69\x73\x69\x6f\x6e\x73\x4d\x6f\x64\x65',
      '\x41\x63\x74\x69\x76\x61\x74\x65',
      '\x73\x68\x6f\x77\x43\x6f\x6c\x6c\x69\x73\x69\x6f\x6e\x73',
      '\x67\x65\x74\x43\x6f\x6e\x66\x69\x67',
      '\x52\x65\x66\x72\x65\x73\x68\x4f\x62\x6a\x65\x63\x74\x43\x68\x61\x6e\x67\x65',
      '\x53\x65\x74\x46\x6f\x63\x75\x73\x43\x75\x72\x72\x65\x6e\x74\x4c\x61\x79\x65\x72',
      '\x5f\x64\x69\x73\x70\x6c\x61\x79\x59',
      '\x6d\x65\x6e\x75',
      '\x49\x73\x45\x64\x69\x74\x6f\x72\x53\x74\x61\x72\x74\x65\x64',
      '\x43\x68\x61\x6e\x67\x65\x4c\x61\x79\x65\x72',
      '\x69\x73\x50\x72\x65\x73\x73\x65\x64',
      '\x49\x73\x45\x64\x69\x74\x6f\x72\x41\x76\x61\x69\x6c\x61\x62\x6c\x65',
      '\x72\x65\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x61\x72\x65\x6e\x63\x79',
      '\x36\x31\x34\x37\x6f\x53\x65\x71\x66\x58',
      '\x33\x30\x32\x6b\x49\x4c\x79\x4f\x54',
      '\x61\x64\x64\x43\x68\x69\x6c\x64',
      '\x63\x6c\x65\x61\x72',
      '\x44\x65\x61\x63\x74\x69\x76\x61\x74\x65\x20\x65\x64\x69\x74\x6f\x72',
      '\x4f\x6e\x43\x75\x72\x72\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x50\x6c\x61\x63\x65\x64',
      '\x49\x73\x4c\x61\x79\x65\x72\x73\x4d\x6f\x64\x65',
      '\x48\x69\x64\x65\x46\x6f\x72\x48\x6f\x76\x65\x72',
      '\x69\x73\x54\x72\x69\x67\x67\x65\x72\x65\x64',
      '\x47\x65\x74\x49\x6d\x61\x67\x65\x4e\x61\x6d\x65',
      '\x53\x65\x6e\x64\x43\x6f\x6d\x6d\x61\x6e\x64\x54\x6f\x45\x64\x69\x74\x6f\x72',
      '\x33\x39\x47\x61\x6f\x74\x74\x4a',
      '\x63\x6f\x70\x79\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73\x46\x72\x6f\x6d',
      '\x43\x6c\x6f\x73\x65\x41\x6c\x6c\x57\x69\x6e\x64\x6f\x77\x73',
      '\x31\x34\x33\x35\x75\x75\x73\x4c\x79\x66',
      '\x6c\x61\x79\x65\x72\x49\x6e\x66\x6f'
    ];
    _0x4945 = function () {
      return _0x3c9547;
    };
    return _0x4945();
  }
  function _0x4dd4(_0x5ba090, _0x306500) {
    const _0x494516 = _0x4945();
    return _0x4dd4 = function (_0x4dd485, _0x531ce1) {
      _0x4dd485 = _0x4dd485 - 0x176;
      let _0x3cb97e = _0x494516[_0x4dd485];
      return _0x3cb97e;
    }, _0x4dd4(_0x5ba090, _0x306500);
  }
  (function (_0x4b0b73, _0x2e8fd5) {
    const _0x4f5c9c = _0x4dd4, _0xf001ab = _0x4b0b73();
    while (!![]) {
      try {
        const _0x4097da = parseInt(_0x4f5c9c(0x1b7)) / 0x1 * (parseInt(_0x4f5c9c(0x1aa)) / 0x2) + -parseInt(_0x4f5c9c(0x1b4)) / 0x3 * (parseInt(_0x4f5c9c(0x188)) / 0x4) + -parseInt(_0x4f5c9c(0x18a)) / 0x5 + parseInt(_0x4f5c9c(0x197)) / 0x6 + -parseInt(_0x4f5c9c(0x17b)) / 0x7 + -parseInt(_0x4f5c9c(0x18f)) / 0x8 * (parseInt(_0x4f5c9c(0x1a9)) / 0x9) + -parseInt(_0x4f5c9c(0x190)) / 0xa * (-parseInt(_0x4f5c9c(0x1d1)) / 0xb);
        if (_0x4097da === _0x2e8fd5)
          break;
        else
          _0xf001ab['push'](_0xf001ab['shift']());
      } catch (_0x3f7db5) {
        _0xf001ab['push'](_0xf001ab['shift']());
      }
    }
  }(_0x4945, 0x2353e));
  var EMapEditorManager;
  (function (_0x13d9a9) {
    const _0x2e7ccf = _0x4dd4;
    let _0x10f15b = !![];
    const _0x374d6c = 0.1;
    let _0x5e6bdb = ![], _0x9527c6 = _0x2e7ccf(0x1c2), _0xabf99b = null, _0x4863f7 = null, _0x50a650 = 0x0, _0x30c3fb = 0x0, _0x389117 = 0x0, _0x202a55 = null, _0x36b86b = null, _0x29de0f = null, _0x3095b6 = null, _0x29ae50 = null, _0x22d4d8 = null, _0x4c5059 = ![], _0x39d937 = ![];
    function _0x3169b5() {
      return _0x389117;
    }
    _0x13d9a9[_0x2e7ccf(0x1ba)] = _0x3169b5;
    function _0x1a0a89() {
      return _0x5e6bdb;
    }
    _0x13d9a9[_0x2e7ccf(0x1c8)] = _0x1a0a89;
    function _0x435b89() {
      return _0x1a0a89() && _0x9527c6 == '\x6e\x6f\x6e\x65';
    }
    _0x13d9a9['\x49\x73\x4e\x6f\x6e\x65\x4d\x6f\x64\x65'] = _0x435b89;
    function _0x2125d5() {
      const _0x5dc070 = _0x2e7ccf;
      return _0x1a0a89() && _0x9527c6 == _0x5dc070(0x1d6);
    }
    _0x13d9a9[_0x2e7ccf(0x180)] = _0x2125d5;
    function _0x8b38be() {
      const _0x37054e = _0x2e7ccf;
      return _0x1a0a89() && _0x9527c6 == _0x37054e(0x17c);
    }
    _0x13d9a9[_0x2e7ccf(0x19c)] = _0x8b38be;
    function _0x3fe7fe() {
      const _0x1d9950 = _0x2e7ccf;
      return _0x1a0a89() && _0x9527c6 == _0x1d9950(0x183);
    }
    _0x13d9a9[_0x2e7ccf(0x1af)] = _0x3fe7fe;
    function _0x499f73() {
      const _0x3ea6f6 = _0x2e7ccf;
      if (_0x1a0a89())
        return;
      if (!(SceneManager[_0x3ea6f6(0x1d0)] instanceof Scene_Map)) {
        console[_0x3ea6f6(0x187)](_0x3ea6f6(0x1c7));
        return;
      }
      console[_0x3ea6f6(0x192)](_0x3ea6f6(0x1be)), $gamePlayer['\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x61\x72\x65\x6e\x74'](!![]);
      if (EMWindowsManager[_0x3ea6f6(0x1a4)]())
        EMWindowsManager[_0x3ea6f6(0x1b9)]();
      else
        EMWindowsManager[_0x3ea6f6(0x1a7)]() && EMWindowsManager[_0x3ea6f6(0x1b9)]();
      _0x9527c6 = _0x3ea6f6(0x1c2), _0x5e6bdb = !![], Sprite_EMEditorMapUI[_0x3ea6f6(0x196)](), console[_0x3ea6f6(0x192)](_0x3ea6f6(0x1c0) + _0x9527c6);
    }
    _0x13d9a9[_0x2e7ccf(0x19d)] = _0x499f73;
    function _0x2c23f8() {
      const _0x1baf54 = _0x2e7ccf;
      if (!_0x1a0a89())
        return;
      console[_0x1baf54(0x192)](_0x1baf54(0x1ad)), $gamePlayer[_0x1baf54(0x17a)](![]), _0x2f59c(_0x1baf54(0x1c2)), _0x5e6bdb = ![], Sprite_EMEditorMapUI[_0x1baf54(0x1ce)](), _0x202a55 && (_0x202a55[_0x1baf54(0x194)](), _0x202a55 = null), EMWindowsManager[_0x1baf54(0x1b6)](), $gameMap[_0x1baf54(0x1bb)](), $gamePlayer['\x63\x65\x6e\x74\x65\x72']($gamePlayer['\x78'], $gamePlayer['\x79']), console['\x6c\x6f\x67'](_0x1baf54(0x18c));
    }
    _0x13d9a9[_0x2e7ccf(0x1cd)] = _0x2c23f8;
    function _0x28a485(_0x347b5b, _0xe844eb) {
      if (!_0x1a0a89())
        return;
      if (_0x29de0f == _0xe844eb && _0x3095b6 == _0x347b5b)
        return;
      _0x5c7492(_0xe844eb, _0x347b5b);
    }
    _0x13d9a9['\x53\x65\x6c\x65\x63\x74\x4f\x62\x6a\x65\x63\x74\x46\x72\x6f\x6d\x45\x64\x69\x74\x6f\x72'] = _0x28a485;
    function _0x5c7492(_0x56d3c, _0x3d2b54) {
      const _0x2a3476 = _0x2e7ccf;
      if (!_0x1a0a89())
        return;
      _0x29de0f = _0x56d3c, _0x3095b6 = _0x3d2b54;
      let _0x259a3c = Sprite_EMObject[_0x2a3476(0x18b)](_0x3d2b54, _0x56d3c);
      _0x202a55 && (_0x259a3c[_0x2a3476(0x1b5)](_0x202a55), _0x202a55[_0x2a3476(0x1d8)]() && _0x202a55['\x72\x65\x6d\x6f\x76\x65\x46\x72\x6f\x6d\x50\x61\x72\x65\x6e\x74']()), _0x202a55 = _0x259a3c, _0x202a55[_0x2a3476(0x195)](_0x389117), _0x202a55['\x61\x64\x64\x54\x6f\x54\x69\x6c\x65\x6d\x61\x70'](), _0x202a55[_0x2a3476(0x17d)](), !_0x2125d5() && _0x2f59c(_0x2a3476(0x1d6));
    }
    _0x13d9a9[_0x2e7ccf(0x193)] = _0x5c7492;
    function _0x2b4f75(_0x211e90) {
      const _0x476a0b = _0x2e7ccf;
      if (!_0x1a0a89())
        return;
      _0x29de0f = _0x211e90[_0x476a0b(0x19f)]()[_0x476a0b(0x1d2)], _0x3095b6 = _0x211e90[_0x476a0b(0x19f)]()[_0x476a0b(0x176)], _0x202a55 = _0x211e90, _0x202a55[_0x476a0b(0x17d)](), _0x36b86b = _0x211e90, !_0x2125d5() && _0x2f59c('\x6f\x62\x6a\x65\x63\x74');
    }
    function _0xea03d0(_0x53928c) {
      const _0x5d2ecb = _0x2e7ccf;
      if (!_0x1a0a89())
        return;
      if (!_0x53928c)
        return;
      _0x202a55 = _0x53928c, _0x29de0f = _0x53928c[_0x5d2ecb(0x19f)]()[_0x5d2ecb(0x1d2)], _0x3095b6 = _0x53928c[_0x5d2ecb(0x19f)]()[_0x5d2ecb(0x176)], _0x5c7492(_0x29de0f, _0x3095b6);
    }
    function _0x47709d(_0x332afe) {
      const _0x4e40a6 = _0x2e7ccf;
      if (!_0x1a0a89())
        return;
      if (!_0x332afe)
        return;
      _0x332afe[_0x4e40a6(0x194)](), EMObjectsManager['\x44\x65\x6c\x65\x74\x65\x53\x74\x6f\x72\x65\x64\x43\x6f\x6e\x66\x69\x67'](_0x332afe[_0x4e40a6(0x19f)]()['\x75\x6e\x69\x71\x75\x65\x49\x64'], !![]);
    }
    function _0xebe566() {
      const _0x37d105 = _0x2e7ccf;
      if (!_0x1a0a89())
        return;
      if (_0x36b86b) {
        try {
          let _0x2b7317 = _0x36b86b[_0x37d105(0x19f)](), _0x35a9d6 = Sprite_EMObject[_0x37d105(0x185)](_0x2b7317), _0x31fba8 = SceneManager[_0x37d105(0x1d0)]['\x5f\x73\x70\x72\x69\x74\x65\x73\x65\x74'][_0x37d105(0x1c3)];
          _0x31fba8[_0x37d105(0x1ab)](_0x35a9d6);
        } catch (_0x2b649d) {
          console['\x77\x61\x72\x6e'](_0x2b649d);
        }
        _0x36b86b = null;
      }
      _0x202a55 && (_0x202a55[_0x37d105(0x194)](), _0x202a55 = null), _0x3095b6 = '', _0x29de0f = '', _0x2f59c(_0x37d105(0x1c2));
    }
    _0x13d9a9['\x43\x61\x6e\x63\x65\x6c\x4f\x62\x6a\x65\x63\x74\x50\x6c\x61\x63\x65\x6d\x65\x6e\x74'] = _0xebe566;
    function _0x492fb9(_0x43987a) {
      const _0x4b022e = _0x2e7ccf;
      if (!_0x2125d5())
        return;
      if (_0x43987a == 0x0)
        return;
      ;
      if (_0x10f15b == ![])
        return;
      let _0x44fd2b = EditorResourcesManager[_0x4b022e(0x17f)](_0x29de0f, _0x3095b6), _0x282c23 = _0x44fd2b + _0x43987a, _0x50c813 = EditorResourcesManager[_0x4b022e(0x1b2)](_0x29de0f, _0x282c23);
      KString[_0x4b022e(0x1c5)](_0x50c813) && (_0x5c7492(_0x29de0f, _0x50c813), _0x10f15b = ![], EMWindowsManager[_0x4b022e(0x1b3)](_0x4b022e(0x1c4), _0x282c23), setTimeout(() => {
        _0x10f15b = !![];
      }, 0x1));
    }
    _0x13d9a9[_0x2e7ccf(0x1a0)] = _0x492fb9;
    function _0x2be850() {
      const _0x446d00 = _0x2e7ccf;
      if (!_0x1a0a89())
        return;
      _0x202a55 && (_0x36b86b = null, _0x202a55['\x66\x69\x6e\x61\x6c\x69\x7a\x65'](), EMObjectsManager[_0x446d00(0x1bc)](_0x202a55['\x67\x65\x74\x43\x6f\x6e\x66\x69\x67']()), _0x5c7492(_0x29de0f, _0x3095b6));
    }
    _0x13d9a9[_0x2e7ccf(0x1ae)] = _0x2be850;
    function _0x4ad023() {
      const _0x7704e0 = _0x2e7ccf;
      if (!_0x1a0a89())
        return;
      let _0x1232a7 = EMObjectsManager[_0x7704e0(0x1cb)](_0x389117);
      Sprite_EMEditorMapUI[_0x7704e0(0x1c1)](_0x1232a7, !![]), _0x39d937 = ![];
    }
    function _0x2c11d4() {
      const _0x555537 = _0x2e7ccf;
      if (!_0x1a0a89())
        return;
      if (_0x39d937)
        Sprite_EMEditorMapUI[_0x555537(0x1bf)](), _0x39d937 = ![], Sprite_CollisionGrid[_0x555537(0x1bd)](![]);
      else {
        let _0x5767e9 = EMObjectsManager[_0x555537(0x1cb)](_0x389117);
        Sprite_EMEditorMapUI[_0x555537(0x1c1)](_0x5767e9, ![]), _0x39d937 = !![], Sprite_CollisionGrid[_0x555537(0x1bd)](!![]);
      }
    }
    _0x13d9a9[_0x2e7ccf(0x186)] = _0x2c11d4;
    function _0x1c4f0f() {
      const _0x30fc75 = _0x2e7ccf;
      if (!_0x1a0a89())
        return;
      if (_0x4c5059)
        _0x28b8fc(), Sprite_CollisionGrid[_0x30fc75(0x1a1)](![]);
      else {
        let _0x1756c3 = EMObjectsManager['\x47\x65\x74\x41\x6c\x6c\x4f\x62\x6a\x65\x63\x74\x73\x45\x78\x70\x65\x63\x74\x4c\x61\x79\x65\x72'](_0x389117);
        for (let _0x36d5e7 = 0x0; _0x36d5e7 < _0x1756c3[_0x30fc75(0x19b)]; _0x36d5e7++) {
          let _0x30feac = _0x1756c3[_0x36d5e7];
          _0x30feac[_0x30fc75(0x1ca)]();
        }
        Sprite_CollisionGrid['\x53\x65\x74\x46\x6f\x63\x75\x73\x43\x75\x72\x72\x65\x6e\x74\x4c\x61\x79\x65\x72'](!![]), _0x4c5059 = !![];
      }
    }
    _0x13d9a9['\x46\x6f\x63\x75\x73\x43\x75\x72\x72\x65\x6e\x74\x4c\x61\x79\x65\x72'] = _0x1c4f0f;
    function _0x28b8fc() {
      const _0x33cbb6 = _0x2e7ccf;
      if (_0x4c5059) {
        let _0x42cf00 = EMObjectsManager['\x47\x65\x74\x41\x6c\x6c\x4f\x62\x6a\x65\x63\x74\x73\x45\x78\x70\x65\x63\x74\x4c\x61\x79\x65\x72'](_0x389117);
        for (let _0xcfe37f = 0x0; _0xcfe37f < _0x42cf00[_0x33cbb6(0x19b)]; _0xcfe37f++) {
          let _0x22179a = _0x42cf00[_0xcfe37f];
          _0x22179a[_0x33cbb6(0x1a8)]();
        }
        _0x4c5059 = ![];
      }
    }
    function _0x5d2ab2(_0x328a35) {
      if (!_0x1a0a89())
        return;
      if (_0x328a35 == 0x0)
        return;
      _0x28b8fc(), _0x389117 += _0x328a35, _0x389117 < 0x0 && (_0x389117 = 0x0), _0x332afd();
    }
    _0x13d9a9[_0x2e7ccf(0x1a5)] = _0x5d2ab2;
    function _0x2f59c(_0x239c90) {
      const _0x1238c8 = _0x2e7ccf;
      _0x28b8fc(), _0x8b38be() && _0x1d5f80(), Sprite_EMEditorMapUI['\x43\x6c\x65\x61\x72\x48\x69\x67\x68\x6c\x69\x67\x68\x74'](), _0x9527c6 = _0x239c90, console['\x6c\x6f\x67'](_0x1238c8(0x1c6) + _0x239c90), EMWindowsManager[_0x1238c8(0x1b3)]('\x73\x77\x69\x74\x63\x68\x4d\x6f\x64\x65', _0x239c90), _0x8b38be() && _0x9a39ac(), _0x3fe7fe() && EMWindowsManager[_0x1238c8(0x1b3)](_0x1238c8(0x1b8), EMLayersManager[_0x1238c8(0x1cc)](_0x389117));
    }
    function _0x1d5f80() {
      const _0x2efa52 = _0x2e7ccf;
      try {
        Sprite_CollisionGrid[_0x2efa52(0x1d4)](), Sprite_MapGrid[_0x2efa52(0x1d4)](), Sprite_DefaultCollisionsGrid[_0x2efa52(0x1d4)](), Sprite_MapGridCursor[_0x2efa52(0x179)]();
      } catch (_0x1202c9) {
        console[_0x2efa52(0x187)](_0x1202c9);
      }
    }
    function _0x9a39ac() {
      const _0x2f22ba = _0x2e7ccf;
      Sprite_MapGrid[_0x2f22ba(0x178)](), Sprite_DefaultCollisionsGrid[_0x2f22ba(0x178)](), Sprite_CollisionGrid[_0x2f22ba(0x178)](), Sprite_MapGridCursor[_0x2f22ba(0x199)]();
    }
    function _0x332afd() {
      const _0x1a2617 = _0x2e7ccf;
      Sprite_EMEditorMapUI[_0x1a2617(0x17e)](), _0x4ad023(), _0x202a55 && _0x202a55[_0x1a2617(0x195)](_0x389117), _0x3fe7fe() && EMWindowsManager['\x53\x65\x6e\x64\x43\x6f\x6d\x6d\x61\x6e\x64\x54\x6f\x45\x64\x69\x74\x6f\x72'](_0x1a2617(0x1b8), EMLayersManager[_0x1a2617(0x1cc)](_0x389117));
    }
    function _0x1f369e() {
      if (_0x5e6bdb) {
        _0x1689e7(), _0x8e5ab5();
        if (_0x435b89())
          _0x403e72(), _0x5e279d(), _0x41dc18(), _0x1bf8c2(), _0x34e280();
        else {
          if (_0x2125d5())
            _0x309b5a();
          else {
            if (_0x8b38be())
              _0x1bf8c2(), _0x41dc18(), _0x4f5815();
            else
              _0x3fe7fe() && (_0x5e279d(), _0x1bf8c2(), _0x41dc18(), _0x1fe36f());
          }
        }
      }
    }
    _0x13d9a9['\x55\x70\x64\x61\x74\x65'] = _0x1f369e;
    function _0x1689e7() {
      const _0x3a17b4 = _0x2e7ccf;
      if (!_0x435b89() && Input[_0x3a17b4(0x1b1)]('\x31')) {
        _0x2125d5() ? _0xebe566() : _0x2f59c(_0x3a17b4(0x1c2));
        return;
      }
      !_0x8b38be() && Input['\x69\x73\x54\x72\x69\x67\x67\x65\x72\x65\x64']('\x32') && (_0x2125d5() && _0xebe566(), _0x2f59c(_0x3a17b4(0x17c))), !_0x3fe7fe() && Input[_0x3a17b4(0x1b1)]('\x33') && (_0x2125d5() && _0xebe566(), _0x2f59c('\x6c\x61\x79\x65\x72\x73'));
    }
    function _0x403e72() {
      const _0x55c4d4 = _0x2e7ccf;
      Input['\x69\x73\x54\x72\x69\x67\x67\x65\x72\x65\x64'](_0x55c4d4(0x1a3)) && _0x2c23f8();
    }
    function _0x5e279d() {
      const _0x120cd7 = _0x2e7ccf;
      if (TouchInput[_0x120cd7(0x1a6)]()) {
        !_0xabf99b && (_0xabf99b = TouchInput['\x78'], _0x4863f7 = TouchInput['\x79'], _0x50a650 = TouchInput['\x78'], _0x30c3fb = TouchInput['\x79']);
        if (_0x50a650 != TouchInput['\x78'] || _0x30c3fb != TouchInput['\x79']) {
          let _0xc31844 = TouchInput['\x78'] - _0xabf99b, _0x4f701a = TouchInput['\x79'] - _0x4863f7;
          $gameMap[_0x120cd7(0x189)] -= _0xc31844 / $gameMap[_0x120cd7(0x177)]() * _0x374d6c, $gameMap[_0x120cd7(0x1a2)] -= _0x4f701a / $gameMap['\x74\x69\x6c\x65\x48\x65\x69\x67\x68\x74']() * _0x374d6c, _0x50a650 = TouchInput['\x78'], _0x30c3fb = TouchInput['\x79'];
        } else
          _0xabf99b = TouchInput['\x78'], _0x4863f7 = TouchInput['\x79'];
      } else
        _0xabf99b = null, _0x4863f7 = null;
    }
    function _0x41dc18() {
      const _0x74ce28 = _0x2e7ccf;
      if (TouchInput[_0x74ce28(0x1a6)]())
        return;
      ;
      const _0x4d13e0 = 0.1;
      Input[_0x74ce28(0x1a6)](_0x74ce28(0x182)) && ($gameMap[_0x74ce28(0x1a2)] += _0x4d13e0), Input['\x69\x73\x50\x72\x65\x73\x73\x65\x64']('\x75\x70') && ($gameMap['\x5f\x64\x69\x73\x70\x6c\x61\x79\x59'] -= _0x4d13e0), Input[_0x74ce28(0x1a6)](_0x74ce28(0x181)) && ($gameMap['\x5f\x64\x69\x73\x70\x6c\x61\x79\x58'] += _0x4d13e0), Input['\x69\x73\x50\x72\x65\x73\x73\x65\x64'](_0x74ce28(0x191)) && ($gameMap[_0x74ce28(0x189)] -= _0x4d13e0);
    }
    function _0x1bf8c2() {
      _0x5d2ab2(_0x2b57c3());
    }
    function _0x34e280() {
      const _0x306b58 = _0x2e7ccf;
      let _0x152390 = [], _0x4db457 = EMObjectsManager[_0x306b58(0x1cb)](_0x389117);
      for (let _0x59264e = 0x0; _0x59264e < _0x4db457[_0x306b58(0x19b)]; _0x59264e++) {
        let _0x20d6dc = _0x4db457[_0x59264e];
        _0x20d6dc[_0x306b58(0x18e)]() && _0x152390[_0x306b58(0x1d3)](_0x20d6dc);
      }
      if (_0x152390[_0x306b58(0x19b)] > 0x0) {
        _0x152390['\x73\x6f\x72\x74']((_0x4c89bb, _0x376757) => _0x376757['\x7a'] - _0x4c89bb['\x7a']);
        let _0x51bcff = _0x152390[0x0];
        _0x29ae50 != _0x51bcff && (_0x29ae50 && Sprite_PhantomOutline[_0x306b58(0x1b0)](), _0x29ae50 = _0x51bcff, Sprite_PhantomOutline['\x53\x68\x6f\x77\x46\x6f\x72\x48\x6f\x76\x65\x72'](_0x29ae50));
      } else
        _0x29ae50 && (Sprite_PhantomOutline['\x48\x69\x64\x65\x46\x6f\x72\x48\x6f\x76\x65\x72'](), _0x29ae50 = null);
      TouchInput[_0x306b58(0x1b1)]() ? _0x29ae50 && (Sprite_PhantomOutline[_0x306b58(0x1b0)](), Input[_0x306b58(0x1a6)](ToolsKeys[_0x306b58(0x184)]) ? (Input[_0x306b58(0x1ac)](), _0xea03d0(_0x29ae50)) : _0x2b4f75(_0x29ae50)) : TouchInput['\x69\x73\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64']() && (_0x22d4d8 == _0x29ae50 ? (_0x47709d(_0x29ae50), _0x29ae50 = null, Sprite_PhantomOutline[_0x306b58(0x1b0)]()) : (_0x22d4d8 = _0x29ae50, setTimeout(() => {
        _0x22d4d8 = null;
      }, 0xc8)));
    }
    ;
    function _0x8e5ab5() {
      const _0x59c640 = _0x2e7ccf;
      if (Input[_0x59c640(0x1b1)](ToolsKeys[_0x59c640(0x198)])) {
        _0x1c4f0f();
        return;
      }
      if (Input[_0x59c640(0x1b1)](ToolsKeys['\x68\x69\x67\x68\x6c\x69\x67\x68\x74\x4c\x61\x79\x65\x72'])) {
        _0x2c11d4();
        return;
      }
    }
    function _0x1fe36f() {
    }
    function _0x309b5a() {
    }
    function _0x2b57c3() {
      const _0x2851e2 = _0x2e7ccf, _0x39fe8a = 0x14;
      if (TouchInput[_0x2851e2(0x19a)] >= _0x39fe8a)
        return 0x1;
      else {
        if (TouchInput[_0x2851e2(0x19a)] <= -_0x39fe8a)
          return -0x1;
      }
      return 0x0;
    }
    function _0x4f5815() {
      const _0x2c0279 = _0x2e7ccf;
      if (TouchInput[_0x2c0279(0x1a6)]())
        Sprite_MapGridCursor[_0x2c0279(0x18d)]();
      else
        TouchInput[_0x2c0279(0x1d7)]() && Sprite_MapGridCursor[_0x2c0279(0x1cf)]();
      Input[_0x2c0279(0x1b1)](ToolsKeys[_0x2c0279(0x19e)]) && Sprite_DefaultCollisionsGrid[_0x2c0279(0x1d5)]();
    }
    window[_0x2e7ccf(0x1c9)] = _0x13d9a9;
  }(EMapEditorManager || (EMapEditorManager = {})));

  var EditorResourcesManager;
  (function (EditorResourcesManager) {
    const IgnoreFolderList = ['EditorUI'];
    const DummyFolder = 'Trees';
    const RootPath = "img/PKD_MapEnhancer/Assets";
    function GetFoldersList() {
      if (!Utils.isNwjs()) {
        return [DummyFolder];
      }
      // * Get all folders from RootPath folder
      /*@ts-ignore*/
      const fs = require('fs');
      /*@ts-ignore*/
      const path = require('path');
      /*@ts-ignore*/
      const root = path.join(process.cwd(), RootPath);
      if (!fs.existsSync(root)) {
        return [DummyFolder];
      }
      const files = fs.readdirSync(root);
      const folders = files.filter(f => fs.statSync(path.join(root, f)).isDirectory());
      // * Remove ignored folders
      for (let i = 0; i < IgnoreFolderList.length; i++) {
        const index = folders.indexOf(IgnoreFolderList[i]);
        if (index >= 0) {
          folders.splice(index, 1);
        }
      }
      return folders;
    }
    EditorResourcesManager.GetFoldersList = GetFoldersList;
    function GetFilesListInFolder(folder) {
      if (!Utils.isNwjs()) {
        if (folder == DummyFolder) {
          return ["tree", "tree2", "tree3"];
        }
      }
      // * Get all files from folder
      /*@ts-ignore*/
      const fs = require('fs');
      /*@ts-ignore*/
      const path = require('path');
      /*@ts-ignore*/
      const root = path.join(process.cwd(), RootPath, folder);
      if (!fs.existsSync(root)) {
        return [];
      }
      const files = fs.readdirSync(root);
      // * Filter only images (.png) and remove .png extension
      return files.filter(f => f.endsWith('.png')).map(f => f.replace('.png', ''));
    }
    EditorResourcesManager.GetFilesListInFolder = GetFilesListInFolder;
    function GetImageName(folder, index) {
      let files = GetFilesListInFolder(folder);
      return files[index];
    }
    EditorResourcesManager.GetImageName = GetImageName;
    function GetImageIndex(folder, imageName) {
      let files = GetFilesListInFolder(folder);
      return files.indexOf(imageName);
    }
    EditorResourcesManager.GetImageIndex = GetImageIndex;
  })(EditorResourcesManager || (EditorResourcesManager = {}));


  // * Данный класс работает только в окне редактора, инициализирует окно редактора и запускает сцену редактора карты
  // * Хранит ссылку на основное окно для оптарвки сообщений
  var EM_EditorWindowHandler;
  (function (EM_EditorWindowHandler) {
    let _rootWindow = null;
    function Init(rootWindow) {
      _rootWindow = rootWindow;
    }
    EM_EditorWindowHandler.Init = Init;
    function FocusRootWindow() {
      SendCommandToGameWindow('focus', null);
    }
    EM_EditorWindowHandler.FocusRootWindow = FocusRootWindow;
    function StartEditorScene() {
      var _a;
      DataManager.setupNewGame();
      let size = PP.EditorWindowSize();
      const w = size.width;
      const h = size.height;
      /*@ts-ignore*/
      Graphics.resize(w, h);
      /*@ts-ignore*/
      Graphics.defaultScale = 1;
      Graphics.boxWidth = w - 8;
      Graphics.boxHeight = h - 8;
      document.title = "Enhancer Editor for [" + $dataSystem.gameTitle + "]";
      SceneManager.goto(Scene_Editor);
      (_a = Scene_Editor.Instance()) === null || _a === void 0 ? void 0 : _a.setMode('none');
    }
    EM_EditorWindowHandler.StartEditorScene = StartEditorScene;
    function SendCommandToGameWindow(command, data) {
      var _a;
      if (!_rootWindow) {
        console.error("Root window is not set");
        return;
      }
      (_a = _rootWindow['EMWindowsManager']) === null || _a === void 0 ? void 0 : _a.OnCommandFromEditor(command, data);
    }
    EM_EditorWindowHandler.SendCommandToGameWindow = SendCommandToGameWindow;
    function OnCommandFromGame(command, data) {
      var _a, _b, _c, _d;
      console.log("Command from Game: ", command, data);
      switch (command) {
        case 'test':
          console.log("Test command from Game");
          break;
        case 'switchMode':
          console.log("New Mode from Game: ", data);
          if (data == 'none') {
            (_a = Scene_Editor.Instance()) === null || _a === void 0 ? void 0 : _a.changeCurrentObjectFromGame(-1);
          }
          (_b = Scene_Editor.Instance()) === null || _b === void 0 ? void 0 : _b.setMode(data);
          break;
        case 'changeObject':
          (_c = Scene_Editor.Instance()) === null || _c === void 0 ? void 0 : _c.changeCurrentObjectFromGame(data);
          break;
        case 'layerInfo':
          (_d = Scene_Editor.Instance()) === null || _d === void 0 ? void 0 : _d.changeLayerInfoFromGame(data);
          break;
        default:
          console.error("Unknown command from Game: ", command);
          break;
      }
    }
    EM_EditorWindowHandler.OnCommandFromGame = OnCommandFromGame;
    window['EM_EditorWindowHandler'] = EM_EditorWindowHandler;
  })(EM_EditorWindowHandler || (EM_EditorWindowHandler = {}));


  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Game_Map.ts
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  (() => {
    //@[DEFINES]
    const _ = Game_Map.prototype;
    let _currentMapUniqueCollisionIndexes = [];
    //TODO: Script call for force refresh
    function _refreshCollisionIndexes() {
      let mapId = $gameMap.mapId();
      _currentMapUniqueCollisionIndexes = EMCollisionsManager.GetCollisionsUniqueIndexesForMap(mapId);
    }
    //@[ALIAS]
    const ALIAS__setup = _.setup;
    _.setup = function (...args) {
      ALIAS__setup.call(this, ...args);
      EMLayersManager.OnNewMapLoaded();
      _refreshCollisionIndexes();
    };
    //@[ALIAS]
    const ALIAS__refresh = _.refresh;
    _.refresh = function (...args) {
      ALIAS__refresh.call(this, ...args);
      EMLayersManager.Refresh();
      _refreshCollisionIndexes();
    };
    //@[ALIAS]
    const ALIAS__isEventRunning = _.isEventRunning;
    _.isEventRunning = function (...args) {
      if (EMapEditorManager.IsActive()) {
        return true;
      }
      return ALIAS__isEventRunning.call(this, ...args);
    };
    //@[ALIAS]
    const ALIAS__isPassable = _.isPassable;
    _.isPassable = function (x, y, d) {
      let result = ALIAS__isPassable.call(this, x, y, d);
      if (!result) {
        return false;
      }
      if (EMCollisionsManager.IsMapHaveAnyCollision($gameMap.mapId())) {
        let uniqueIndex = EMCollisionsManager.GetUniqeIndexForPosition(x, y);
        result = !_currentMapUniqueCollisionIndexes.includes(uniqueIndex);
      }
      return result;
    };
  })();
  // ■ END Game_Map.ts
  //---------------------------------------------------------------------------


  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Game_System.ts
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  (() => {
    //@[DEFINES]
    const _ = Game_System.prototype;
    /*@ts-ignore*/
    _.pkdMEGetConfigs = function () {
      return this._pkdMEConfigs || [];
    };
    /*@ts-ignore*/
    _.pkdMESetConfigs = function (configs) {
      this._pkdMEConfigs = configs;
    };
  })();
  // ■ END Game_System.ts
  //---------------------------------------------------------------------------


  class HelpTextBuilder {
    constructor() {
      this._content = new KNSprite_Group();
    }
    static New() {
      return new HelpTextBuilder();
    }
    AddKey(key) {
      /*@ts-ignore*/
      let keyItem = KDCore.Sprite_NUI.FromScheme(this._keyScheme(key.toUpperCase()));
      this._addElement(keyItem);
      return this;
    }
    AddKeyHold(key) {
      /*@ts-ignore*/
      let keyItem = KDCore.Sprite_NUI.FromScheme(this._keyScheme("[" + key.toUpperCase() + "]"));
      this._addElement(keyItem);
      return this;
    }
    AddKeyWs(key) {
      /*@ts-ignore*/
      let keyItem = KDCore.Sprite_NUI.FromScheme(this._keyScheme(key.toUpperCase()));
      this._addElement(keyItem, false);
      return this;
    }
    _addElement(element, withSeparator = true) {
      if (withSeparator && this._isHaveAnyItemAlready()) {
        this.AddText("+", "#ECDFCC");
      }
      this._content.addChild(element);
      this._refreshAllElements();
    }
    AddShiftKey() {
      /*@ts-ignore*/
      let keyItem = KDCore.Sprite_NUI.FromScheme(this._shiftKeyScheme());
      this._addElement(keyItem);
      return this;
    }
    AddText(text, color = "#F97300") {
      if (text != '+') {
        text = " " + text;
      } /*@ts-ignore*/
      let textItem = KDCore.Sprite_NUI.FromScheme(this._textScheme(text, color));
      this._addElement(textItem, false);
      return this;
    }
    AddObjectIcon() {
      /*@ts-ignore*/
      let item = KDCore.Sprite_NUI.FromScheme(this._iconScheme('object'));
      this._addElement(item);
      return this;
    }
    AddMoveAny() {
      /*@ts-ignore*/
      let item = KDCore.Sprite_NUI.FromScheme(this._iconScheme('moveAny'));
      this._addElement(item);
      return this;
    }
    AddMoveRect() {
      /*@ts-ignore*/
      let item = KDCore.Sprite_NUI.FromScheme(this._iconScheme('moveRect'));
      this._addElement(item);
      return this;
    }
    AddMouseScroll() {
      /*@ts-ignore*/
      let item = KDCore.Sprite_NUI.FromScheme(this._iconScheme('mouse_scroll'));
      this._addElement(item);
      return this;
    }
    AddMouseClick(key) {
      /*@ts-ignore*/
      let item = KDCore.Sprite_NUI.FromScheme(this._iconScheme('mouse_click_' + key));
      this._addElement(item);
      return this;
    }
    AddMouseHold(key) {
      /*@ts-ignore*/
      let item = KDCore.Sprite_NUI.FromScheme(this._iconScheme('mouse_hold_' + key));
      this._addElement(item);
      return this;
    }
    Build() {
      return this._content;
    }
    _isHaveAnyItemAlready() {
      return this._content.children.length > 0;
    }
    _refreshAllElements() {
      this._content.refreshBindings(null, true);
    }
    _keyScheme(key) {
      return {
        "type": "image",
        "parameters": {
          "imageName": "buttonA",
          "folderName": "PKD_MapEnhancer/EditorUI"
        },
        "bindings": {
          "x": "prevEndX + 4hdp",
          "width": "36hdp",
          "height": "36hdp"
        },
        "childrens": [
          {
            "type": "text",
            "parameters": {
              "text": key,
              "color": "#ECDFCC"
            },
            "bindings": {
              "width": "100%",
              "height": "90%",
              "fontSize": "60%"
            }
          }
        ]
      };
    }
    _textScheme(text, color) {
      let fontSize = "66%";
      if (text.length > 10) {
        fontSize = "56%";
        if (text.length > 20) {
          fontSize = "48%";
          if (text.length > 30) {
            fontSize = "38%";
          }
        }
      }
      return {
        "type": "text",
        "parameters": {
          "size": {
            "width": 120,
            "height": 36
          },
          "alignment": "left",
          "text": text,
          "textColor": color,
          "actualSize": true,
          "outline": {
            "color": "#000000",
            "width": 2
          }
        },
        "bindings": {
          "x": "prevEndX + 2hdp",
          "height": "100%",
          "fontSize": fontSize
        }
      };
    }
    _shiftKeyScheme() {
      return {
        "type": "image",
        "parameters": {
          "imageName": "buttonA",
          "folderName": "PKD_MapEnhancer/EditorUI"
        },
        "bindings": {
          "position": {
            "x": "prevEndX + 4hdp",
            "y": "2hdp"
          },
          "width": "54hdp",
          "height": "34hdp"
        },
        "childrens": [
          {
            "type": "text",
            "parameters": {
              "text": "[shift]",
              "color": "#ECDFCC"
            },
            "bindings": {
              "width": "100%",
              "height": "100%",
              "fontSize": "60%"
            }
          }
        ]
      };
    }
    _iconScheme(imageName) {
      return {
        "type": "image",
        "parameters": {
          "imageName": imageName,
          "folderName": "PKD_MapEnhancer/EditorUI"
        },
        "bindings": {
          "x": "prevEndX + 4hdp",
          "width": "36hdp",
          "height": "36hdp"
        }
      };
    }
  }


  var HelpTextStrings;
  (function (HelpTextStrings) {
    HelpTextStrings["MoveCamera"] = "Move camera";
    HelpTextStrings["EditObject"] = "Edit object";
    HelpTextStrings["DuplicateObject"] = "Duplicate object";
    HelpTextStrings["RemoveObject"] = "Remove object";
    HelpTextStrings["RemoveSelected"] = "Remove selected";
    HelpTextStrings["ChangeGroup"] = "Change group";
    HelpTextStrings["HighlightGroup"] = "Highlight group";
    HelpTextStrings["ChangeObject"] = "Change object";
    HelpTextStrings["LockYAxis"] = "Lock Y axis";
    HelpTextStrings["LockXAxis"] = "Lock X axis";
    HelpTextStrings["Grid"] = "Grid";
    HelpTextStrings["Scale"] = "Scale";
    HelpTextStrings["Rotate"] = "Rotate";
    HelpTextStrings["ChangePivot"] = "Change pivot";
    HelpTextStrings["Flip"] = "Flip";
    HelpTextStrings["ChangeZIndex"] = "Change Z";
    HelpTextStrings["ResetToCursor"] = "Reset to cursor";
    HelpTextStrings["Focus"] = "Focus Group";
    HelpTextStrings["Cancel"] = "Cancel";
    HelpTextStrings["Place"] = "Place Object";
    HelpTextStrings["PrecisionMove"] = "Precision move";
    HelpTextStrings["BlendMode"] = "Blend mode";
    HelpTextStrings["HUE"] = "Hue mode";
    HelpTextStrings["Reset"] = "Reset";
    HelpTextStrings["ModeNone"] = "Select object for placing";
    HelpTextStrings["ModeObject"] = "Object placing mode";
    HelpTextStrings["ModeCollisions"] = "Collisions mode";
    HelpTextStrings["ShowCollisions"] = "Show collisions";
    HelpTextStrings["AddCollision"] = "Add collision";
    HelpTextStrings["RemoveCollision"] = "Remove collision";
    HelpTextStrings["ChangeMode"] = "Change Mode";
    HelpTextStrings["CloseEditor"] = "Close Editor";
    HelpTextStrings["ModeGroups"] = "Groups mode";
    HelpTextStrings["AnimationSpeed"] = "Animation Speed";
  })(HelpTextStrings || (HelpTextStrings = {}));
  var HelpVocabulary;
  (function (HelpVocabulary) {
    let stringsEN = {
      [HelpTextStrings.MoveCamera]: "Move camera",
      [HelpTextStrings.EditObject]: "Edit object",
      [HelpTextStrings.DuplicateObject]: "Duplicate",
      [HelpTextStrings.RemoveObject]: "Remove object",
      [HelpTextStrings.RemoveSelected]: "Remove (*)",
      [HelpTextStrings.ChangeGroup]: "Change group",
      [HelpTextStrings.HighlightGroup]: "Highlight group",
      [HelpTextStrings.ChangeObject]: "Change object",
      [HelpTextStrings.LockYAxis]: "Lock Y axis",
      [HelpTextStrings.LockXAxis]: "Lock X axis",
      [HelpTextStrings.Grid]: "Grid",
      [HelpTextStrings.Scale]: "Scale",
      [HelpTextStrings.Rotate]: "Rotate",
      [HelpTextStrings.ChangePivot]: "Change pivot",
      [HelpTextStrings.Flip]: "Flip",
      [HelpTextStrings.ChangeZIndex]: "Change Z",
      [HelpTextStrings.ResetToCursor]: "Reset to cursor",
      [HelpTextStrings.Focus]: "Focus Group",
      [HelpTextStrings.Cancel]: "Cancel",
      [HelpTextStrings.Place]: "Place Object",
      [HelpTextStrings.PrecisionMove]: "Precision move",
      [HelpTextStrings.BlendMode]: "Blend mode",
      [HelpTextStrings.HUE]: "Hue mode",
      [HelpTextStrings.Reset]: "Reset",
      [HelpTextStrings.ModeNone]: "Select object for placing",
      [HelpTextStrings.ModeObject]: "Object placing mode",
      [HelpTextStrings.ShowCollisions]: "Show collisions",
      [HelpTextStrings.AddCollision]: "Add collision",
      [HelpTextStrings.RemoveCollision]: "Remove collision",
      [HelpTextStrings.ModeCollisions]: "Collisions mode",
      [HelpTextStrings.ChangeMode]: "Change Mode",
      [HelpTextStrings.CloseEditor]: "Close Editor",
      [HelpTextStrings.ModeGroups]: "Groups mode",
      [HelpTextStrings.AnimationSpeed]: "Animation Speed"
    };
    let stringsRU = {
      [HelpTextStrings.MoveCamera]: "Камера",
      [HelpTextStrings.EditObject]: "Изменить объект",
      [HelpTextStrings.DuplicateObject]: "Копия",
      [HelpTextStrings.RemoveObject]: "Удалить",
      [HelpTextStrings.RemoveSelected]: "Удалить (*)",
      [HelpTextStrings.ChangeGroup]: "Сменить группу",
      [HelpTextStrings.HighlightGroup]: "Подсветить группу",
      [HelpTextStrings.ChangeObject]: "Изменить объект",
      [HelpTextStrings.LockYAxis]: "Заблокировать Y",
      [HelpTextStrings.LockXAxis]: "Заблокировать X",
      [HelpTextStrings.Grid]: "Сетка",
      [HelpTextStrings.Scale]: "Масштаб",
      [HelpTextStrings.Rotate]: "Поворот",
      [HelpTextStrings.ChangePivot]: "Основание",
      [HelpTextStrings.Flip]: "Отразить",
      [HelpTextStrings.ChangeZIndex]: "Z",
      [HelpTextStrings.ResetToCursor]: "Сбросить",
      [HelpTextStrings.Focus]: "Фокус слоя",
      [HelpTextStrings.Cancel]: "Отмена",
      [HelpTextStrings.Place]: "Поместить",
      [HelpTextStrings.PrecisionMove]: "Точное перемещение",
      [HelpTextStrings.BlendMode]: "Режим смешивания",
      [HelpTextStrings.HUE]: "Цветовой режим",
      [HelpTextStrings.Reset]: "Сброс",
      [HelpTextStrings.ModeNone]: "Выберите объект",
      [HelpTextStrings.ModeObject]: "Режим размещения",
      [HelpTextStrings.ShowCollisions]: "Показать коллизии",
      [HelpTextStrings.AddCollision]: "Добавить",
      [HelpTextStrings.RemoveCollision]: "Удалить",
      [HelpTextStrings.ModeCollisions]: "Режим коллизий",
      [HelpTextStrings.ChangeMode]: "Сменить режим",
      [HelpTextStrings.CloseEditor]: "Закрыть редактор",
      [HelpTextStrings.ModeGroups]: "Режим слоев",
      [HelpTextStrings.AnimationSpeed]: "Скорость анимации"
    };
    let stringsCH = {
      [HelpTextStrings.MoveCamera]: "移动相机",
      [HelpTextStrings.EditObject]: "编辑对象",
      [HelpTextStrings.DuplicateObject]: "复制对象",
      [HelpTextStrings.RemoveObject]: "删除对象",
      [HelpTextStrings.RemoveSelected]: "删除选定",
      [HelpTextStrings.ChangeGroup]: "更改组",
      [HelpTextStrings.HighlightGroup]: "高亮显示组",
      [HelpTextStrings.ChangeObject]: "更改对象",
      [HelpTextStrings.LockYAxis]: "锁定Y轴",
      [HelpTextStrings.LockXAxis]: "锁定X轴",
      [HelpTextStrings.Grid]: "网格",
      [HelpTextStrings.Scale]: "缩放",
      [HelpTextStrings.Rotate]: "旋转",
      [HelpTextStrings.ChangePivot]: "更改中心点",
      [HelpTextStrings.Flip]: "翻转",
      [HelpTextStrings.ChangeZIndex]: "更改Z",
      [HelpTextStrings.ResetToCursor]: "重置到光标",
      [HelpTextStrings.Focus]: "焦点层",
      [HelpTextStrings.Cancel]: "取消",
      [HelpTextStrings.Place]: "放置对象",
      [HelpTextStrings.PrecisionMove]: "精确移动",
      [HelpTextStrings.BlendMode]: "混合模式",
      [HelpTextStrings.HUE]: "色调模式",
      [HelpTextStrings.Reset]: "重置",
      [HelpTextStrings.ModeNone]: "选择对象",
      [HelpTextStrings.ModeObject]: "对象放置模式",
      [HelpTextStrings.ShowCollisions]: "显示碰撞",
      [HelpTextStrings.AddCollision]: "添加碰撞",
      [HelpTextStrings.RemoveCollision]: "删除碰撞",
      [HelpTextStrings.ModeCollisions]: "碰撞模式",
      [HelpTextStrings.ChangeMode]: "更改模式",
      [HelpTextStrings.CloseEditor]: "关闭编辑器",
      [HelpTextStrings.ModeGroups]: "组模式",
      [HelpTextStrings.AnimationSpeed]: "动画速度"
    };
    let allStrings = [
      stringsEN,
      stringsRU,
      stringsCH
    ];
    function GetLocalizedString(text) {
      let currentLanguageId = PP.EditorHelpLanguageIndex();
      return allStrings[currentLanguageId][text];
    }
    HelpVocabulary.GetLocalizedString = GetLocalizedString;
  })(HelpVocabulary || (HelpVocabulary = {}));


  var EM_HelpWindowHandler;
  (function (EM_HelpWindowHandler) {
    let _rootWindow = null;
    function Init(rootWindow) {
      _rootWindow = rootWindow;
    }
    EM_HelpWindowHandler.Init = Init;
    function StartHelpScene() {
      DataManager.setupNewGame();
      let size = PP.HelpWindowSize();
      const w = size.width;
      const h = size.height;
      /*@ts-ignore*/
      Graphics.resize(w, h);
      /*@ts-ignore*/
      Graphics.defaultScale = 1;
      Graphics.boxWidth = w - 8;
      Graphics.boxHeight = h - 8;
      document.title = "Editor Help Window for [" + $dataSystem.gameTitle + "]";
      SceneManager.goto(Scene_EHelpWindow);
    }
    EM_HelpWindowHandler.StartHelpScene = StartHelpScene;
    function OnCommandFromGame(command, data) {
      console.log("Command from Game: ", command, data);
      switch (command) {
        case 'test':
          console.log("Test command from Game");
          break;
        case 'switchMode':
          showHelpForMode(data);
          break;
        case 'changeObject':
          // * Nothing to do
          break;
        default:
          console.error("Unknown command from Game: ", command);
          break;
      }
    }
    EM_HelpWindowHandler.OnCommandFromGame = OnCommandFromGame;
    function showHelpForMode(mode) {
      switch (mode) {
        case 'none':
          showHelpForNoneMode();
          break;
        case 'object':
          showHelpForObjectMode();
          break;
        case 'collisions':
          showHelpForCollisionsMode();
          break;
        case 'layers':
          showHelpForLayersMode();
          break;
        default:
          let helpScene = Scene_EHelpWindow.Instance();
          helpScene === null || helpScene === void 0 ? void 0 : helpScene.makeGrid(3, 4); // * Empty grid
          console.warn("Unknown mode: " + mode);
          break;
      }
    }
    function showHelpForNoneMode() {
      let helpScene = Scene_EHelpWindow.Instance();
      if (!helpScene)
        return;
      helpScene.makeGrid(3, 4);
      let moveCameraText = HelpVocabulary.GetLocalizedString(HelpTextStrings.MoveCamera);
      let element = HelpTextBuilder.New().AddMouseHold('l').AddText(moveCameraText).Build();
      helpScene.addElementToGrid(element);
      // * Arrow Keys
      let precisionMoveText = HelpVocabulary.GetLocalizedString(HelpTextStrings.PrecisionMove);
      element = HelpTextBuilder.New().AddKeyWs('↑').AddKeyWs('↓').AddKeyWs('←').AddKeyWs('→').AddText(precisionMoveText).Build();
      helpScene.addElementToGrid(element);
      let changeLayerText = HelpVocabulary.GetLocalizedString(HelpTextStrings.ChangeGroup);
      element = HelpTextBuilder.New().AddMouseScroll().AddText(changeLayerText).Build();
      helpScene.addElementToGrid(element);
      let editObjectText = HelpVocabulary.GetLocalizedString(HelpTextStrings.EditObject);
      element = HelpTextBuilder.New().AddMouseClick('l').AddObjectIcon().AddText(editObjectText).Build();
      helpScene.addElementToGrid(element);
      let removeObjectText = HelpVocabulary.GetLocalizedString(HelpTextStrings.RemoveObject);
      element = HelpTextBuilder.New().AddMouseClick('r').AddMouseClick('r').AddObjectIcon().AddText(removeObjectText).Build();
      helpScene.addElementToGrid(element);
      let dubplicateObjectText = HelpVocabulary.GetLocalizedString(HelpTextStrings.DuplicateObject);
      element = HelpTextBuilder.New().AddMouseClick('l').AddShiftKey().AddObjectIcon().AddText(dubplicateObjectText).Build();
      helpScene.addElementToGrid(element);
      //%[IDEA] Remove many objects in selection rectangle
      /*let removeSelectedText = HelpVocabulary.GetLocalizedString(HelpTextStrings.RemoveSelected);
      element = HelpTextBuilder.New().AddMouseHold('r').AddShiftKey().AddObjectIcon().AddText(removeSelectedText).Build();
      helpScene.addElementToGrid(element);*/
      let highlightLayerText = HelpVocabulary.GetLocalizedString(HelpTextStrings.HighlightGroup);
      element = HelpTextBuilder.New().AddKey(ToolsKeys.highlightLayer).AddText(highlightLayerText).Build();
      helpScene.addElementToGrid(element);
      let focusLayerText = HelpVocabulary.GetLocalizedString(HelpTextStrings.Focus);
      element = HelpTextBuilder.New().AddKey(ToolsKeys.focusLayer).AddText(focusLayerText).Build();
      helpScene.addElementToGrid(element);
      let closeEditor = HelpVocabulary.GetLocalizedString(HelpTextStrings.CloseEditor);
      element = HelpTextBuilder.New().AddKey('ESC').AddText(closeEditor).Build();
      helpScene.addElementToGrid(element);
    }
    EM_HelpWindowHandler.showHelpForNoneMode = showHelpForNoneMode;
    function showHelpForObjectMode() {
      let helpScene = Scene_EHelpWindow.Instance();
      if (!helpScene)
        return;
      let element;
      helpScene.makeGrid(3, 6);
      let placeObject = HelpVocabulary.GetLocalizedString(HelpTextStrings.Place);
      element = HelpTextBuilder.New().AddMouseClick('l').AddText(placeObject).Build();
      helpScene.addElementToGrid(element);
      let changeObject = HelpVocabulary.GetLocalizedString(HelpTextStrings.ChangeObject);
      element = HelpTextBuilder.New().AddMouseScroll().AddText(changeObject).Build();
      helpScene.addElementToGrid(element);
      let cancel = HelpVocabulary.GetLocalizedString(HelpTextStrings.Cancel);
      element = HelpTextBuilder.New().AddMouseClick('r').AddText(cancel).Build();
      helpScene.addElementToGrid(element);
      let changeLayer = HelpVocabulary.GetLocalizedString(HelpTextStrings.ChangeGroup);
      element = HelpTextBuilder.New().AddKeyHold(ToolsKeys.layerIndex).AddMouseScroll().AddText(changeLayer).Build();
      helpScene.addElementToGrid(element);
      let grid = HelpVocabulary.GetLocalizedString(HelpTextStrings.Grid);
      element = HelpTextBuilder.New().AddKeyHold(ToolsKeys.grid).AddMouseScroll().AddText(grid).Build();
      helpScene.addElementToGrid(element);
      let scale = HelpVocabulary.GetLocalizedString(HelpTextStrings.Scale);
      element = HelpTextBuilder.New().AddKeyHold(ToolsKeys.scale).AddMouseScroll().AddText(scale).Build();
      helpScene.addElementToGrid(element);
      let rotate = HelpVocabulary.GetLocalizedString(HelpTextStrings.Rotate);
      element = HelpTextBuilder.New().AddKeyHold(ToolsKeys.rotation).AddMouseScroll().AddText(rotate).Build();
      helpScene.addElementToGrid(element);
      let changeZIndex = HelpVocabulary.GetLocalizedString(HelpTextStrings.ChangeZIndex);
      element = HelpTextBuilder.New().AddShiftKey().AddMouseScroll().AddText(changeZIndex).Build();
      helpScene.addElementToGrid(element);
      let lockX = HelpVocabulary.GetLocalizedString(HelpTextStrings.LockXAxis);
      let keyText = ToolsKeys.xAxis;
      // * Little convert from RPG Maker Input Key Name
      if (keyText == 'cancel')
        keyText = 'x';
      element = HelpTextBuilder.New().AddKeyHold(keyText).AddMouseScroll().AddText(lockX).Build();
      helpScene.addElementToGrid(element);
      let lockY = HelpVocabulary.GetLocalizedString(HelpTextStrings.LockYAxis);
      element = HelpTextBuilder.New().AddKeyHold(ToolsKeys.yAsix).AddMouseScroll().AddText(lockY).Build();
      helpScene.addElementToGrid(element);
      let flip = HelpVocabulary.GetLocalizedString(HelpTextStrings.Flip);
      element = HelpTextBuilder.New().AddKey(ToolsKeys.flip).AddText(flip).Build();
      helpScene.addElementToGrid(element);
      let resetCursor = HelpVocabulary.GetLocalizedString(HelpTextStrings.ResetToCursor);
      element = HelpTextBuilder.New().AddKey(ToolsKeys.resetCursor).AddText(resetCursor).Build();
      helpScene.addElementToGrid(element);
      let highlightLayerText = HelpVocabulary.GetLocalizedString(HelpTextStrings.HighlightGroup);
      element = HelpTextBuilder.New().AddKey(ToolsKeys.highlightLayer).AddText(highlightLayerText).Build();
      helpScene.addElementToGrid(element);
      let focusLayerText = HelpVocabulary.GetLocalizedString(HelpTextStrings.Focus);
      element = HelpTextBuilder.New().AddKey(ToolsKeys.focusLayer).AddText(focusLayerText).Build();
      helpScene.addElementToGrid(element);
      let blendModeText = HelpVocabulary.GetLocalizedString(HelpTextStrings.BlendMode);
      element = HelpTextBuilder.New().AddKeyHold(ToolsKeys.blendMode).AddMouseScroll().AddText(blendModeText).Build();
      helpScene.addElementToGrid(element);
      let hueModeText = HelpVocabulary.GetLocalizedString(HelpTextStrings.HUE);
      element = HelpTextBuilder.New().AddKeyHold(ToolsKeys.hue).AddMouseScroll().AddText(hueModeText).Build();
      helpScene.addElementToGrid(element);
      let animationSpeed = HelpVocabulary.GetLocalizedString(HelpTextStrings.AnimationSpeed);
      element = HelpTextBuilder.New().AddKeyHold(ToolsKeys.animationSpeed).AddMouseScroll().AddText(animationSpeed).Build();
      helpScene.addElementToGrid(element);
      // * Arrow Keys
      let precisionMoveText = HelpVocabulary.GetLocalizedString(HelpTextStrings.PrecisionMove);
      element = HelpTextBuilder.New().AddKeyWs('↑').AddKeyWs('↓').AddKeyWs('←').AddKeyWs('→').AddText(precisionMoveText).Build();
      helpScene.addElementToGrid(element);
    }
    EM_HelpWindowHandler.showHelpForObjectMode = showHelpForObjectMode;
    function showHelpForCollisionsMode() {
      let helpScene = Scene_EHelpWindow.Instance();
      if (!helpScene)
        return;
      let element;
      helpScene.makeGrid(2, 4);
      let placeObject = HelpVocabulary.GetLocalizedString(HelpTextStrings.AddCollision);
      element = HelpTextBuilder.New().AddMouseClick('l').AddText(placeObject).Build();
      helpScene.addElementToGrid(element);
      let cancel = HelpVocabulary.GetLocalizedString(HelpTextStrings.RemoveCollision);
      element = HelpTextBuilder.New().AddMouseClick('r').AddText(cancel).Build();
      helpScene.addElementToGrid(element);
      // * Arrow Keys
      let precisionMoveText = HelpVocabulary.GetLocalizedString(HelpTextStrings.PrecisionMove);
      element = HelpTextBuilder.New().AddKeyWs('↑').AddKeyWs('↓').AddKeyWs('←').AddKeyWs('→').AddText(precisionMoveText).Build();
      helpScene.addElementToGrid(element);
      let changeLayerText = HelpVocabulary.GetLocalizedString(HelpTextStrings.ChangeGroup);
      element = HelpTextBuilder.New().AddMouseScroll().AddText(changeLayerText).Build();
      helpScene.addElementToGrid(element);
      let highlightLayerText = HelpVocabulary.GetLocalizedString(HelpTextStrings.HighlightGroup);
      element = HelpTextBuilder.New().AddKey(ToolsKeys.highlightLayer).AddText(highlightLayerText).Build();
      helpScene.addElementToGrid(element);
      let focusLayerText = HelpVocabulary.GetLocalizedString(HelpTextStrings.Focus);
      element = HelpTextBuilder.New().AddKey(ToolsKeys.focusLayer).AddText(focusLayerText).Build();
      helpScene.addElementToGrid(element);
      let showCollisionsText = HelpVocabulary.GetLocalizedString(HelpTextStrings.ShowCollisions);
      element = HelpTextBuilder.New().AddKey(ToolsKeys.showCollisions).AddText(showCollisionsText).Build();
      helpScene.addElementToGrid(element);
    }
    EM_HelpWindowHandler.showHelpForCollisionsMode = showHelpForCollisionsMode;
    function showHelpForLayersMode() {
      let helpScene = Scene_EHelpWindow.Instance();
      if (!helpScene)
        return;
      let element;
      helpScene.makeGrid(2, 4);
      let moveCameraText = HelpVocabulary.GetLocalizedString(HelpTextStrings.MoveCamera);
      element = HelpTextBuilder.New().AddMouseHold('l').AddText(moveCameraText).Build();
      helpScene.addElementToGrid(element);
      // * Arrow Keys
      let precisionMoveText = HelpVocabulary.GetLocalizedString(HelpTextStrings.PrecisionMove);
      element = HelpTextBuilder.New().AddKeyWs('↑').AddKeyWs('↓').AddKeyWs('←').AddKeyWs('→').AddText(precisionMoveText).Build();
      helpScene.addElementToGrid(element);
      let changeLayerText = HelpVocabulary.GetLocalizedString(HelpTextStrings.ChangeGroup);
      element = HelpTextBuilder.New().AddMouseScroll().AddText(changeLayerText).Build();
      helpScene.addElementToGrid(element);
      let highlightLayerText = HelpVocabulary.GetLocalizedString(HelpTextStrings.HighlightGroup);
      element = HelpTextBuilder.New().AddKey(ToolsKeys.highlightLayer).AddText(highlightLayerText).Build();
      helpScene.addElementToGrid(element);
      let focusLayerText = HelpVocabulary.GetLocalizedString(HelpTextStrings.Focus);
      element = HelpTextBuilder.New().AddKey(ToolsKeys.focusLayer).AddText(focusLayerText).Build();
      helpScene.addElementToGrid(element);
    }
    EM_HelpWindowHandler.showHelpForLayersMode = showHelpForLayersMode;
    window['EM_HelpWindowHandler'] = EM_HelpWindowHandler;
  })(EM_HelpWindowHandler || (EM_HelpWindowHandler = {}));


  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ SceneManager.ts
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  (() => {
    //@[DEFINES]
    const _ = SceneManager;
    //@[ALIAS]
    /*@ts-ignore*/
    const ALIAS__isGameActive = _.isGameActive;
    /*@ts-ignore*/
    _.isGameActive = function () {
      if (EMapEditorManager.IsActive()) {
        return true;
      }
      if (EMWindowsManager.IsHelpWindow()) {
        return true;
      }
      if (EMWindowsManager.IsEnhancerEditorWindow()) {
        return true;
      }
      return ALIAS__isGameActive.call(this);
    };
    //@[ALIAS]
    const ALIAS__onKeyDown = _.onKeyDown;
    _.onKeyDown = function (event) {
      ALIAS__onKeyDown.call(this, event);
      if (!event.ctrlKey && !event.altKey) {
        try {
          if (event.key == PP.OpenEditorKey()) {
            if (Utils.isNwjs() && Utils.isOptionValid('test')) {
              EMapEditorManager.Activate();
            }
            else {
              console.error("Editor is available only in Playtest mode");
            }
            return;
          }
        }
        catch (error) {
          console.warn(error);
        }
      }
    };
  })();
  // ■ END SceneManager.ts
  //---------------------------------------------------------------------------


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
      PP.LoadPluginSettings();
      if (EMWindowsManager.IsEnhancerEditorWindow()) {
        console.log("Editor Window is opened");
        Scene_Base.prototype.start.call(this);
        SoundManager.preloadImportantSounds();
        EM_EditorWindowHandler.StartEditorScene();
      }
      else if (EMWindowsManager.IsHelpWindow()) {
        console.log("Help Window is opened");
        Scene_Base.prototype.start.call(this);
        SoundManager.preloadImportantSounds();
        EM_HelpWindowHandler.StartHelpScene();
      }
      else {
        ALIAS__start.call(this);
      }
    };
  })();
  // ■ END Scene_Boot.ts
  //---------------------------------------------------------------------------


  class Scene_EHelpWindow extends Scene_Base {
    constructor() {
      super(...arguments);
      this._elementsGrid = [];
      this._currentGridElementIndex = 0;
    }
    static Instance() {
      if (SceneManager._scene instanceof Scene_EHelpWindow) {
        return SceneManager._scene;
      }
      return null;
    }
    create() {
      super.create();
      /*@ts-ignore*/
      this._rootElement = KDCore.Sprite_NUI.FromScheme(this._rootElementScheme(), this);
      this.addChild(this._rootElement);
    }
    start() {
      super.start();
      EM_HelpWindowHandler.showHelpForNoneMode();
    }
    _rootElementScheme() {
      return {
        "type": "screen",
        "childrens": [
          {
            "type": "rect",
            "parameters": {
              "fillColor": "#1E201E",
              "strokeWidth": 0
            },
            "bindings": {
              "width": "100%",
              "height": "100%"
            }
          }
        ]
      };
    }
    fillGridForTest() {
      let elementWidth = this._elementsGrid[0].realWidth();
      let elementHeight = this._elementsGrid[0].realHeight();
      for (let i = 0; i < this._elementsGrid.length; i++) {
        let color = KColor.Random();
        let element = new KNSprite_BaseRect({
          width: elementWidth,
          height: elementHeight,
          fillColor: color,
          strokeWidth: 0
        });
        this.addElementToGrid(element);
      }
    }
    makeGrid(a, b) {
      this._clearGrid();
      let elementWidth = Graphics.width / a;
      let elementHeight = Graphics.height / b;
      let x = 0;
      let y = 0;
      for (let i = 0; i < (a * b); i++) {
        let element = new KNSprite_Group();
        element.setPosition(x, y);
        element.setSize(elementWidth, elementHeight);
        this.addChild(element);
        this._elementsGrid.push(element);
        x += elementWidth;
        if (x >= Graphics.width) {
          x = 0;
          y += elementHeight;
        }
      }
    }
    _clearGrid() {
      this._currentGridElementIndex = 0;
      if (!this._elementsGrid) {
        return;
      }
      ;
      for (let element of this._elementsGrid) {
        element.removeFromParent();
      }
      this._elementsGrid = [];
    }
    addElementToGrid(element) {
      let gridElement = this._elementsGrid[this._currentGridElementIndex];
      if (gridElement == null) {
        console.error("No grid element found for index: " + this._currentGridElementIndex);
        return;
      }
      gridElement.addChild(element);
      element.setPosition("left", "center");
      this._currentGridElementIndex++;
    }
  }


  class Scene_Editor extends Scene_Base {
    constructor() {
      super(...arguments);
      this._currentModeTitle = "";
    }
    static Instance() {
      if (SceneManager._scene instanceof Scene_Editor) {
        return SceneManager._scene;
      }
      return null;
    }
    create() {
      super.create();
      this._currentModeTitle = HelpVocabulary.GetLocalizedString(HelpTextStrings.ModeNone);
      /*@ts-ignore*/
      this._rootElement = KDCore.Sprite_NUI.FromScheme(PKD_MapEnhancer.GetNUIFile("NUI_EditorWindow"), this);
      this.addChild(this._rootElement);
      this._contentParent = this["contentGroup"];
      this.refresh();
      // * By default backspace is not working in HTML Input field
      /*@ts-ignore*/
      Input._shouldPreventDefault = function () { return false; };
    }
    setMode(mode) {
      let localizedModeTitle = "";
      switch (mode) {
        case 'none':
          localizedModeTitle = HelpVocabulary.GetLocalizedString(HelpTextStrings.ModeNone);
          this.setActiveSection(this._objectsModeSection);
          break;
        case 'object':
          localizedModeTitle = HelpVocabulary.GetLocalizedString(HelpTextStrings.ModeObject);
          this.setActiveSection(this._objectsModeSection);
          break;
        case 'collisions':
          localizedModeTitle = HelpVocabulary.GetLocalizedString(HelpTextStrings.ModeCollisions);
          this.setActiveSection(this._collisionsModeSection);
          break;
        case 'layers':
          localizedModeTitle = HelpVocabulary.GetLocalizedString(HelpTextStrings.ModeGroups);
          this.setActiveSection(this._layersModeSection);
          break;
        default:
          console.warn("Unknown mode: " + mode);
          localizedModeTitle = "???";
          break;
      }
      this._currentModeTitle = localizedModeTitle;
      this.refresh();
    }
    changeCurrentObjectFromGame(index) {
      let currentSection = this._contentParent.children[0];
      if (currentSection instanceof Sprite_Editor_EMObjectsSection) {
        currentSection.changeCurrentObjectFromGame(index);
      }
    }
    changeLayerInfoFromGame(layerInfo) {
      let currentSection = this._contentParent.children[0];
      if (currentSection instanceof Sprite_Editor_EMLayersSection) {
        currentSection.setLayerInfo(layerInfo);
      }
    }
    currentModeText() {
      return this._currentModeTitle;
    }
    refresh() {
      var _a;
      this._rootElement.refreshBindings(this);
      (_a = this._section) === null || _a === void 0 ? void 0 : _a.refreshAllElements();
    }
    start() {
      super.start();
      this._objectsModeSection = new Sprite_Editor_EMObjectsSection(this._contentParent);
      this._collisionsModeSection = new Sprite_Editor_EMCollisionsSection(this._contentParent);
      this._layersModeSection = new Sprite_Editor_EMLayersSection(this._contentParent);
      this.setActiveSection(this._objectsModeSection);
    }
    setActiveSection(content) {
      if (this._section == content) {
        return;
      }
      if (this._section) {
        this._section.deactivate();
      }
      this._section = content;
      // * Remove all childrens from contentGroup
      this._contentParent.removeChildren();
      /*@ts-ignore*/
      this._contentParent.addChild(content);
      this.refresh();
      this._section.activate();
    }
    update() {
      super.update();
      if (Input.isTriggered('t')) {
        console.log("Test command to Game");
      }
    }
  }


  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Scene_Map.ts
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  (() => {
    //@[DEFINES]
    const _ = Scene_Map.prototype;
    //@[ALIAS]
    const ALIAS__isReady = _.isReady;
    _.isReady = function () {
      let result = ALIAS__isReady.call(this);
      return result && EMObjectsManager.IsSpritesAreLoaded();
    };
    //@[ALIAS]
    const ALIAS__update = _.update;
    _.update = function (...args) {
      ALIAS__update.call(this, ...args);
      /*if(Input.isTriggered('n')) {
          EMapEditorManager.Activate();
      }*/
      EMapEditorManager.Update();
    };
  })();
  // ■ END Scene_Map.ts
  //---------------------------------------------------------------------------


  class SpriteAnimator {
    constructor(sprite, frames, speed) {
      this._frameIndex = 0;
      this._animationFrames = frames;
      this._animationSpeed = speed;
      this._animationTimer = 0;
      this._sprite = sprite;
      this._frameHeight = this._sprite.height;
      this._frameWidth = this._sprite.width / this._animationFrames;
      this._animationTimer = this._animationSpeed; // * To start from first frame
      this._sprite.setFrame(0, 0, this._frameWidth, this._frameHeight);
    }
    setAnimationSpeed(speed = 8) {
      this._animationSpeed = speed;
    }
    update() {
      this._animationTimer++;
      if (this._animationTimer >= this._animationSpeed) {
        this._animationTimer = 0;
        this._sprite.setFrame(this._frameWidth * this._frameIndex, 0, this._frameWidth, this._frameHeight);
        this._frameIndex++;
        if (this._frameIndex >= this._animationFrames) {
          this._frameIndex = 0;
        }
      }
    }
    static GetAnimationData(imageName) {
      // * Animated image name pattern: NAME!3, where 3 - frames count
      let regex = /(.*)!([0-9]+)/;
      let match = imageName.match(regex);
      if (match) {
        let frames = parseInt(match[2]);
        return { frames, speed: 8 };
      }
      return null;
    }
  }


  class Sprite_CollisionGrid extends KSprite {
    constructor() {
      super();
      this._outlineColor = "rgba(255, 0, 0, 0.5)";
      this._fillColor = "rgba(255, 0, 0, 0.2)";
      this._transparentOutlineColor = "rgba(255, 0, 255, 0.2)";
      this._transparentFillColor = "rgba(255, 0, 255, 0.1)";
      this._highlightOutlineColor = "rgba(0, 255, 0, 0.5)";
      this._highlightFillColor = "rgba(0, 255, 0, 0.2)";
      this._isFocusCurrentLayer = false;
      this._isHighlightCurrentLayer = false;
      this._create();
      /*@ts-ignore*/
      this.z = 1000;
    }
    static CreateGrid() {
      if (!this._currentGrid) {
        this._currentGrid = new Sprite_CollisionGrid();
        /*@ts-ignore*/
        SceneManager._scene._spriteset._tilemap.addChild(this._currentGrid);
      }
    }
    static RemoveGrid() {
      if (this._currentGrid) {
        this._currentGrid.destroy();
        this._currentGrid = null;
      }
    }
    static RefreshGrid() {
      if (this._currentGrid) {
        this._currentGrid._refreshCollisions();
      }
    }
    static SetFocusCurrentLayer(value) {
      if (this._currentGrid) {
        this._currentGrid._isFocusCurrentLayer = value;
      }
      this.RefreshGrid();
    }
    static SetHighlightCurrentLayer(value) {
      if (this._currentGrid) {
        this._currentGrid._isHighlightCurrentLayer = value;
      }
      this.RefreshGrid();
    }
    update() {
      super.update();
      if (this.visible) {
        this._updatePosition();
      }
    }
    _updatePosition() {
      let x = $gameMap.displayX() * $gameMap.tileWidth();
      let y = $gameMap.displayY() * $gameMap.tileHeight();
      this.x = -x;
      this.y = -y;
    }
    _create() {
      let width = $gameMap.width() * $gameMap.tileWidth();
      let height = $gameMap.height() * $gameMap.tileHeight();
      this.bitmap = new Bitmap(width, height);
      this._createCollisionsLayer();
      this._refreshCollisions();
    }
    _createCollisionsLayer() {
      this._collisionsLayer = new KSprite();
      this.addChild(this._collisionsLayer);
    }
    _refreshCollisions() {
      this._collisionsLayer.removeChildren();
      this._drawStoredCollisions();
    }
    _drawStoredCollisions() {
      let collisions = EMCollisionsManager.GetStoredCollisionsDataForMap($gameMap.mapId());
      let tw = $gameMap.tileWidth();
      let th = $gameMap.tileHeight();
      let outlineColor;
      let fillColor;
      let activeLayer = EMapEditorManager.CurrentLayerIndex();
      collisions.forEach((c) => {
        let x = c.position.x * tw;
        let y = c.position.y * th;
        if (this._isFocusCurrentLayer && c.layerIndex !== activeLayer) {
          outlineColor = this._transparentOutlineColor;
          fillColor = this._transparentFillColor;
        }
        else if (this._isHighlightCurrentLayer && c.layerIndex === activeLayer) {
          outlineColor = this._highlightOutlineColor;
          fillColor = this._highlightFillColor;
        }
        else {
          outlineColor = this._outlineColor;
          fillColor = this._fillColor;
        }
        this._addCollisionCell(x, y, outlineColor, fillColor);
      });
    }
    _addCollisionCell(x, y, outerColor, innerColor) {
      let tw = $gameMap.tileWidth();
      let th = $gameMap.tileHeight();
      let cell = new Bitmap(tw, th);
      if (KString.any(outerColor)) {
        cell.fillRect(0, 0, tw, 2, outerColor);
        cell.fillRect(0, 0, 2, th, outerColor);
        cell.fillRect(0, th - 2, tw, 2, outerColor);
        cell.fillRect(tw - 2, 0, 2, th, outerColor);
      }
      if (KString.any(innerColor)) {
        cell.fillRect(0, 0, tw, th, innerColor);
      }
      let sprite = new KSprite();
      sprite.bitmap = cell;
      sprite.x = x;
      sprite.y = y;
      this._collisionsLayer.addChild(sprite);
    }
  }


  class Sprite_DefaultCollisionsGrid extends KSprite {
    constructor() {
      super();
      this._create();
      /*@ts-ignore*/
      this.z = 999;
      this.visible = false;
    }
    static CreateGrid() {
      if (!this._currentGrid) {
        this._currentGrid = new Sprite_DefaultCollisionsGrid();
        /*@ts-ignore*/
        SceneManager._scene._spriteset._tilemap.addChild(this._currentGrid);
      }
    }
    static RemoveGrid() {
      if (this._currentGrid) {
        this._currentGrid.destroy();
        this._currentGrid = null;
      }
    }
    static RefreshGrid() {
      if (this._currentGrid) {
        this._currentGrid._refreshCollisions();
      }
    }
    static ToggleVisibility() {
      if (this._currentGrid) {
        this._currentGrid.visible = !this._currentGrid.visible;
      }
    }
    update() {
      super.update();
      if (this.visible) {
        this._updatePosition();
      }
    }
    _updatePosition() {
      let x = $gameMap.displayX() * $gameMap.tileWidth();
      let y = $gameMap.displayY() * $gameMap.tileHeight();
      this.x = -x;
      this.y = -y;
    }
    _create() {
      let width = $gameMap.width() * $gameMap.tileWidth();
      let height = $gameMap.height() * $gameMap.tileHeight();
      this.bitmap = new Bitmap(width, height);
      this._createCollisionsLayer();
      this._refreshCollisions();
    }
    _createCollisionsLayer() {
      this._collisionsLayer = new KSprite();
      this.addChild(this._collisionsLayer);
    }
    _refreshCollisions() {
      // * Remove all children from collisions layer
      this._collisionsLayer.removeChildren();
      this._drawDefaultMapCollisions();
    }
    _drawDefaultMapCollisions() {
      let storedCollisions = EMCollisionsManager.GetStoredCollisionsPositionsForMap($gameMap.mapId());
      let tw = $gameMap.tileWidth();
      let th = $gameMap.tileHeight();
      for (let x = 0; x < $gameMap.width(); x++) {
        for (let y = 0; y < $gameMap.height(); y++) {
          // * Ignore point if it in stored collisions
          let isStored = storedCollisions.some((c) => c.x === x && c.y === y);
          if (isStored) {
            continue;
          }
          let isPassable = this._isMapCellPassable(x, y);
          if (!isPassable) {
            let cx = x * tw;
            let cy = y * th;
            this._addCollisionCell(cx, cy, null, "rgba(255, 255, 0, 0.5)");
          }
        }
      }
    }
    _isMapCellPassable(x, y) {
      // * We should check all directions (2, 4, 6, 8)
      let passable = false;
      for (let i = 2; i <= 8; i += 2) {
        if ($gameMap.checkPassage(x, y, i)) {
          passable = true;
          break;
        }
      }
      return passable;
    }
    _addCollisionCell(x, y, outerColor, innerColor) {
      let tw = $gameMap.tileWidth();
      let th = $gameMap.tileHeight();
      let cell = new Bitmap(tw, th);
      if (KString.any(outerColor)) {
        cell.fillRect(0, 0, tw, 2, outerColor);
        cell.fillRect(0, 0, 2, th, outerColor);
        cell.fillRect(0, th - 2, tw, 2, outerColor);
        cell.fillRect(tw - 2, 0, 2, th, outerColor);
      }
      if (KString.any(innerColor)) {
        cell.fillRect(0, 0, tw, th, innerColor);
      }
      let sprite = new KSprite();
      sprite.bitmap = cell;
      sprite.x = x;
      sprite.y = y;
      this._collisionsLayer.addChild(sprite);
    }
  }


  class Sprite_EMEditorMapUI extends KNSprite {
    constructor() {
      super();
      this._hightlightTime = 20;
      this._highlightedObjects = [];
      this._highlightAutoTurnOffThread = null;
      this._extraContent = null;
      this._create();
    }
    static Create() {
      this.Destroy();
      let sprite = new Sprite_EMEditorMapUI();
      SceneManager._scene.addChild(sprite);
      this._instance = sprite;
    }
    static Destroy() {
      if (this._instance) {
        this._instance.removeFromParent();
      }
      this._instance = null;
    }
    static Refresh() {
      try {
        if (this._instance) {
          this._instance.refresh();
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    static HighlightObjects(objects, autoTurnOff = true) {
      try {
        if (this._instance) {
          this._instance.highlightObjects(objects, autoTurnOff);
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    static ClearHighlight() {
      this.HighlightObjects([], false);
    }
    highlightObjects(objects, autoTurnOff = true) {
      var _a;
      try {
        this.clearHighlightedObjects();
        (_a = this._highlightAutoTurnOffThread) === null || _a === void 0 ? void 0 : _a.stop();
        this._highlightAutoTurnOffThread = null;
        objects.forEach((object) => {
          let hObject = new Sprite_PhantomOutline(object, '#FFFF00');
          this.addChild(hObject);
          this._highlightedObjects.push(hObject);
        });
        if (autoTurnOff) {
          this._highlightAutoTurnOffThread = new KDX.TimedUpdate(this._hightlightTime, () => {
            this.clearHighlightedObjects();
          });
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    clearHighlightedObjects() {
      try {
        if (this._highlightedObjects.length > 0) {
          this._highlightedObjects.forEach((hObject) => {
            hObject.removeFromParent();
          });
        }
        this._highlightedObjects = [];
      }
      catch (error) {
        console.warn(error);
        this._highlightedObjects = [];
      }
    }
    update() {
      var _a;
      super.update();
      (_a = this._highlightAutoTurnOffThread) === null || _a === void 0 ? void 0 : _a.update();
    }
    refresh() {
      this.refreshBindings(this);
    }
    layerIndex() {
      return EMapEditorManager.CurrentLayerIndex();
    }
    _create() {
      /*@ts-ignore*/
      KDCore.Sprite_NUI.FromScheme(PKD_MapEnhancer.GetNUIFile("NUI_MapUI"), this);
      this._createChangeModeHelpText();
      this.refreshBindings(this);
    }
    _createChangeModeHelpText() {
      var _a;
      let changeModeHelpText = HelpVocabulary.GetLocalizedString(HelpTextStrings.ChangeMode);
      let element = HelpTextBuilder.New().AddKeyWs('1').AddKeyWs('2').AddKeyWs('3').AddText(changeModeHelpText).Build();
      (_a = this._extraContent) === null || _a === void 0 ? void 0 : _a.addChild(element);
      this.refreshBindings(this);
      element.setPosition("right", 0);
    }
  }


  const DefaultEMObjectConfig = {
    uniqueId: '',
    mapId: 0,
    layerIndex: 0,
    imageName: '',
    folderName: '',
    isFlipped: false,
    linkedX: -1,
    linkedY: -1,
    zIndex: 3,
    globalScale: 1,
    globalRotation: 0,
    localRotation: 0,
    blendMode: 0,
    hue: 0,
    animationSpeed: 5 // * Only for animated objects
  };
  class Sprite_EMObject extends KSprite {
    constructor(_config) {
      super();
      this._config = _config;
      this._pressedEditButtons = [];
      this._extraMovementByX = 0;
      this._extraMovementByY = 0;
      this._config = Object.assign({}, DefaultEMObjectConfig, _config);
      this._initialize();
      this._create();
    }
    static FromConfig(config) {
      return new Sprite_EMObject(config);
    }
    static New(imageName, folderName = 'Trees', uniqueId = '') {
      if (!KString.any(uniqueId)) {
        uniqueId = $gameMap.mapId() + "_" + folderName + "/" + imageName + "#" + KString.randomString(10);
      }
      return new Sprite_EMObject({
        uniqueId: uniqueId,
        mapId: $gameMap.mapId(),
        imageName: imageName,
        folderName: folderName,
      });
    }
    static Phantom(sprite) {
      let clone = Sprite_EMObject.New(sprite._config.imageName, sprite._config.folderName, "phantom");
      clone.copyParametersFrom(sprite);
      clone._config.blendMode = 0;
      clone._objectImage.blendMode = 0;
      clone.refresh();
      /*@ts-ignore*/
      clone._updatePosition = () => { };
      return clone;
    }
    copyParametersFrom(sprite) {
      // * Copy all parameters from another sprite, except linkedX and linkedY and imageName and folderName and uniqueId
      this._config.globalScale = sprite._config.globalScale;
      this._config.globalRotation = sprite._config.globalRotation;
      this._config.localRotation = sprite._config.localRotation;
      this._config.zIndex = sprite._config.zIndex;
      this._config.isFlipped = sprite._config.isFlipped;
      this._config.layerIndex = sprite._config.layerIndex;
      this._config.mapId = sprite._config.mapId;
      this._config.blendMode = sprite._config.blendMode;
      this._config.hue = sprite._config.hue;
      this._config.animationSpeed = sprite._config.animationSpeed;
      this._alignmentGrid = sprite._alignmentGrid;
      this._extraMovementByX = sprite._extraMovementByX;
      this._extraMovementByY = sprite._extraMovementByY;
      this._disabledCursorMoveByXAxis = sprite._disabledCursorMoveByXAxis;
      this._disabledCursorMoveByYAxis = sprite._disabledCursorMoveByYAxis;
      this.refresh();
    }
    makeTransparent() {
      if (this.isInEditMode()) {
        return;
      }
      this.opacity = 100;
    }
    resetTransparency() {
      this.opacity = 255;
    }
    addToTilemap() {
      if (SceneManager._scene instanceof Scene_Map) {
        /*@ts-ignore*/
        SceneManager._scene._spriteset._tilemap.addChild(this);
      }
    }
    isLoaded() {
      return this._objectImage.bitmap.isReady();
    }
    isHoveredByCursor() {
      try {
        if (!this.isCursorInside())
          return false;
        let localPoint = this._objectImage.toLocalPoint(new Point(TouchInput.x, TouchInput.y));
        let localBounds = this._objectImage.getLocalBounds();
        let x = Math.floor(localPoint.x - localBounds.x);
        let y = Math.floor(localPoint.y - localBounds.y);
        if (x < 0 || y < 0)
          return false;
        if (x >= this._objectImage.bitmap.width || y >= this._objectImage.bitmap.height)
          return false;
        let alpha = Number(this._objectImage.bitmap.getAlphaPixel(x, y));
        return alpha > 100;
      }
      catch (error) {
        console.warn(error);
        return false;
      }
    }
    update() {
      super.update();
      if (this._spriteAnimator) {
        this._spriteAnimator.update();
      }
      this._updatePosition();
      if (EMapEditorManager.IsObjectMode() && this.isInEditMode()) {
        this._updateEditingHotkeys();
        this._refreshValuesFromConfig();
      }
      this._updateVisibilityByLayerCondition();
    }
    edit() {
      this._inEditMode = true;
      this._unlinkFromMap();
    }
    isInEditMode() {
      return this._inEditMode == true;
    }
    finalize() {
      this._inEditMode = false;
      this._updateEditingTools(); // * Disable all tools
      this._linkToMap();
      this.refresh();
    }
    refresh() {
      this._refreshValuesFromConfig();
    }
    getConfig() {
      return this._config;
    }
    _unlinkFromMap() {
      if (this._config.linkedX != -1 && this._config.linkedY != -1) {
        this._extraMovementByX = this.x - TouchInput.x;
        this._extraMovementByY = this.y - TouchInput.y;
      }
    }
    _updateVisibilityByLayerCondition() {
      if (EMapEditorManager.IsActive()) {
        this.visible = true;
        return;
      }
      else {
        this.visible = EMLayersManager.IsLayerConditionTrue(this.getLayerIndex());
      }
    }
    isAnyEditButtonPressed() {
      return this._pressedEditButtons.length > 0;
    }
    isAnyOtherButtonPressedThen(button) {
      // * Нажата ли какая-то другая кнопка, кроме указанной
      return this._pressedEditButtons.length > 0 && !this._pressedEditButtons.includes(button);
    }
    _linkToMap() {
      this._config.linkedX = (TouchInput.x + this._extraMovementByX) + $gameMap._displayX * this._tileWidth;
      this._config.linkedY = (TouchInput.y + this._extraMovementByY) + $gameMap._displayY * this._tileHeight;
    }
    resetCursorPosition() {
      this._extraMovementByX = 0;
      this._extraMovementByY = 0;
    }
    realWidth() {
      if (this._objectImage) {
        return this._objectImage.width;
      }
      else {
        return this.width;
      }
    }
    realHeight() {
      if (this._objectImage) {
        return this._objectImage.height;
      }
      else {
        return this.height;
      }
    }
    screenX() {
      var value = this._config.linkedX;
      value -= $gameMap._displayX * this._tileWidth;
      if (value + this.width < 0 && $gameMap.isLoopHorizontal()) {
        value += this._mapWidth;
      }
      return Math.ceil(value);
    }
    screenY() {
      var value = this._config.linkedY;
      value -= $gameMap._displayY * this._tileHeight;
      if (value + this.height < 0 && $gameMap.isLoopVertical()) {
        value += this._mapHeight;
      }
      return Math.ceil(value);
    }
    setLayer(layerIndex) {
      this._config.layerIndex = layerIndex;
    }
    getLayerIndex() {
      return this._config.layerIndex;
    }
    getCurrentScale() {
      let scale = this._config.globalScale;
      // * 0.0 format string
      return parseFloat(scale.toFixed(1));
    }
    getCurrentZIndex() {
      return 'Z: ' + this._config.zIndex;
    }
    getCurrentBlendModeName() {
      let blendMode = this._config.blendMode;
      // Blend mode  (0 = normal, 1 = add, 2 = multiply, 3 = screen)
      switch (blendMode) {
        case 0: return 'Normal';
        case 1: return 'Add';
        case 2: return 'Multiply';
        case 3: return 'Screen';
      }
    }
    getCurrentHue() {
      return this._config.hue + "°";
    }
    getCurrentAnimationSpeed() {
      return this._config.animationSpeed + "x";
    }
    getCurrentRotation() {
      let rotation;
      if (Input.isPressed(ToolsKeys.globalRotation)) {
        rotation = this._config.globalRotation;
      }
      else
        rotation = this._config.localRotation;
      // * Convert from Rad to Deg
      rotation = rotation * (180 / Math.PI);
      rotation = parseFloat(rotation.toFixed(1));
      return rotation + "°";
    }
    _initialize() {
      this._tileWidth = $gameMap.tileWidth();
      this._tileHeight = $gameMap.tileHeight();
      this._mapWidth = $gameMap.width() * this._tileWidth;
      this._mapHeight = $gameMap.height() * this._tileHeight;
    }
    _create() {
      this._createImageObject();
      this._readConfig();
    }
    _createImageObject() {
      this._objectImage = new KSprite(ImageManager.loadBitmap('img/PKD_MapEnhancer/Assets/' + this._config.folderName + "/", this._config.imageName, 0, false));
      this.addChild(this._objectImage);
      this._objectImage.anchor.x = 0.5;
      this._objectImage.anchor.y = 0.5;
      this._objectImage.bitmap.addLoadListener(this._onImageLoaded.bind(this));
    }
    _readConfig() {
      try {
        this._refreshValuesFromConfig();
      }
      catch (error) {
        console.warn(error);
      }
    }
    _updatePosition() {
      if (!this.isInEditMode()) {
        this.x = this.screenX();
        this.y = this.screenY();
      }
      else {
        if (this._alignmentGrid) {
          let alignedPosition = Sprite_GuideGrid.GetAlignedPosition({ x: TouchInput.x, y: TouchInput.y });
          this._extraMovementByX = alignedPosition.x - TouchInput.x;
          this._extraMovementByY = alignedPosition.y - TouchInput.y;
        }
        if (!this._disabledCursorMoveByXAxis) {
          this.x = TouchInput.x + this._extraMovementByX;
        }
        if (!this._disabledCursorMoveByYAxis) {
          this.y = TouchInput.y + this._extraMovementByY;
        }
      }
    }
    _refreshValuesFromConfig() {
      /*@ts-ignore*/
      this.z = this._config.zIndex;
      this.scale.x = this._config.globalScale;
      this.scale.y = this._config.globalScale;
      this.rotation = this._config.globalRotation;
      this._objectImage.rotation = this._config.localRotation;
      this._objectImage.scale.x = this._config.isFlipped ? -1 : 1;
      this._objectImage.blendMode = this._config.blendMode;
      this._refreshHueFilter();
      if (this._spriteAnimator) {
        this._spriteAnimator.setAnimationSpeed(this._config.animationSpeed);
      }
    }
    _refreshHueFilter() {
      if (this._config.hue == 0) {
        this.filters = [];
        return;
      }
      this.filters = [
        /*@ts-ignore*/
        new PIXI.filters.HslAdjustmentFilter({ hue: this._config.hue })
      ];
    }
    _updateEditingHotkeys() {
      this._updateEditingTools();
      if (!this.isAnyEditButtonPressed()) {
        if (Input.isTriggered(ToolsKeys.flip)) {
          this._config.isFlipped = !this._config.isFlipped;
          return;
        }
        if (Input.isTriggered(ToolsKeys.resetCursor)) {
          this.resetCursorPosition();
          return;
        }
        if (TouchInput.isCancelled()) {
          EMapEditorManager.CancelObjectPlacement();
          TouchInput.clear();
          return;
        }
        EMapEditorManager.RefreshObjectChange(this._getValueFromScrollWheel());
      }
      if (TouchInput.isTriggered()) {
        setTimeout(() => {
          EMapEditorManager.OnCurrentObjectPlaced();
        }, 1); // * Next frame, because will be infinite loop
        return;
      }
    }
    _updateEditingTools() {
      this._updateXYAxisGuidlines();
      this._updateGridTool();
      this._updateScaleTool();
      this._updateRotationTool();
      this._updateLayerIndexChange();
      this._updateZIndexChange();
      this._updateBlendModeTool();
      this._updateHueTool();
      this._updateAnimationSpeedTool();
      this._updateKeyboardMovement();
    }
    _updateXYAxisGuidlines() {
      this._handleButtonPressAction(ToolsKeys.xAxis, // * X key == 'cancel'
        () => {
          Sprite_GuideLine.ShowHorizontal();
          this._disabledCursorMoveByYAxis = true;
          this._extraMovementByX += this._getValueFromScrollWheel();
        }, () => {
          this._disabledCursorMoveByYAxis = false;
          Sprite_GuideLine.HideHorizontal();
        });
      this._handleButtonPressAction(ToolsKeys.yAsix, () => {
        Sprite_GuideLine.ShowVertical();
        this._disabledCursorMoveByXAxis = true;
        this._extraMovementByY += this._getValueFromScrollWheel();
      }, () => {
        this._disabledCursorMoveByXAxis = false;
        Sprite_GuideLine.HideVertical();
      });
    }
    _updateGridTool() {
      this._handleButtonPressAction(ToolsKeys.grid, () => {
        Sprite_GuideGrid.Show();
        Sprite_GuideGrid.ChangeSize(this._getValueFromScrollWheel());
        this._alignmentGrid = true;
      }, () => {
        Sprite_GuideGrid.Hide();
        this._alignmentGrid = false;
      });
    }
    _updateScaleTool() {
      this._handleButtonPressAction(ToolsKeys.scale, () => {
        Sprite_ToolGrid.ShowScaleFor(this);
        this._config.globalScale += this._getValueFromScrollWheel() * 0.1;
        this._config.globalScale += this._getValueFromScrollWheel() * 0.1;
        if (TouchInput.isCancelled()) {
          this._config.globalScale = 1;
        }
      }, () => {
        Sprite_ToolGrid.HideScaleGrid();
      });
    }
    _updateRotationTool() {
      this._handleButtonPressAction(ToolsKeys.rotation, () => {
        Sprite_ToolGrid.ShowRotationFor(this);
        if (Input.isPressed(ToolsKeys.globalRotation)) {
          Sprite_RotationAnchor.ShowFor(this);
          this._config.globalRotation += this._getValueFromScrollWheel() * 0.1;
          if (TouchInput.isCancelled()) {
            this._config.globalRotation = 0;
          }
        }
        else {
          Sprite_RotationAnchor.ShowFor(this._objectImage);
          this._config.localRotation += this._getValueFromScrollWheel() * 0.1;
          if (TouchInput.isCancelled()) {
            this._config.localRotation = 0;
          }
        }
      }, () => {
        Sprite_ToolGrid.HideRotationGrid();
        Sprite_RotationAnchor.Hide();
      });
    }
    _updateZIndexChange() {
      this._handleButtonPressAction(ToolsKeys.zIndex, () => {
        Sprite_ToolGrid.ShowZIndexFor(this);
        Sprite_PhantomOutline.ShowForZIndex(this);
        this._config.zIndex += this._getValueFromScrollWheel();
      }, () => {
        Sprite_PhantomOutline.HideForZIndex();
        Sprite_ToolGrid.HideZIndexGrid();
      });
    }
    _updateKeyboardMovement() {
      if (this.isAnyEditButtonPressed()) {
        return;
      }
      if (Input.isPressed('left')) {
        this._extraMovementByX -= 1;
      }
      if (Input.isPressed('right')) {
        this._extraMovementByX += 1;
      }
      if (Input.isPressed('up')) {
        this._extraMovementByY -= 1;
      }
      if (Input.isPressed('down')) {
        this._extraMovementByY += 1;
      }
    }
    _updateLayerIndexChange() {
      this._handleButtonPressAction(ToolsKeys.layerIndex, () => {
        EMapEditorManager.ChangeLayer(this._getValueFromScrollWheel());
      }, () => {
      });
    }
    _updateBlendModeTool() {
      this._handleButtonPressAction(ToolsKeys.blendMode, () => {
        Sprite_ToolGrid.ShowBlendModeFor(this);
        Sprite_PhantomOutline.ShowForBlend(this);
        this._config.blendMode += this._getValueFromScrollWheel();
        if (this._config.blendMode < 0) {
          this._config.blendMode = 0;
        }
        else if (this._config.blendMode > 3) {
          this._config.blendMode = 3;
        }
      }, () => {
        Sprite_PhantomOutline.HideForBlend();
        Sprite_ToolGrid.HideBlendModeGrid();
      });
    }
    _updateHueTool() {
      this._handleButtonPressAction(ToolsKeys.hue, () => {
        Sprite_ToolGrid.ShowHueModeFor(this);
        this._config.hue += this._getValueFromScrollWheel() * 10;
        if (this._config.hue < -180) {
          this._config.hue = -180;
        }
        else if (this._config.hue > 180) {
          this._config.hue = 180;
        }
        if (TouchInput.isCancelled()) {
          this._config.hue = 0;
        }
      }, () => {
        Sprite_ToolGrid.HideHueModeGrid();
      });
    }
    _updateAnimationSpeedTool() {
      if (!this._spriteAnimator) {
        if (Input.isTriggered(ToolsKeys.animationSpeed)) {
          console.warn("This object has no animation data");
          SoundManager.playBuzzer();
        }
        return;
      }
      this._handleButtonPressAction(ToolsKeys.animationSpeed, () => {
        Sprite_ToolGrid.ShowAnimationSpeedFor(this);
        this._config.animationSpeed += this._getValueFromScrollWheel();
        if (this._config.animationSpeed < 1) {
          this._config.animationSpeed = 1;
        }
      }, () => {
        Sprite_ToolGrid.HideAnimationSpeedGrid();
      });
    }
    _handleButtonPressAction(button, actionOnPressed, actionOnReleased) {
      if (this._isOnlyPressed(button)) {
        actionOnPressed();
        this._onButtonIsPressed(button);
      }
      else {
        actionOnReleased();
        this._onButtonIsReleased(button);
      }
    }
    _isOnlyPressed(button) {
      return this.isInEditMode() && Input.isPressed(button) && !this.isAnyOtherButtonPressedThen(button);
    }
    _onButtonIsPressed(button) {
      if (!this._pressedEditButtons.includes(button)) {
        this._pressedEditButtons.push(button);
      }
    }
    _onButtonIsReleased(button) {
      this._pressedEditButtons = KArray.deleteAll(this._pressedEditButtons, button);
    }
    _getValueFromScrollWheel() {
      const threshold = 20;
      if (TouchInput.wheelY >= threshold) {
        return 1;
      }
      else if (TouchInput.wheelY <= -threshold) {
        return -1;
      }
      return 0;
    }
    _onImageLoaded() {
      this._objectImage.y = -this._objectImage.height / 2;
      this._checkIfImageIsAnimated();
    }
    _checkIfImageIsAnimated() {
      try {
        let data = SpriteAnimator.GetAnimationData(this._config.imageName);
        if (data) {
          this._createAnimator(data.frames, data.speed);
        }
      }
      catch (error) {
        console.warn(error);
        this._spriteAnimator = null;
      }
    }
    _createAnimator(frames, speed) {
      try {
        let animator = new SpriteAnimator(this._objectImage, frames, speed);
        this._spriteAnimator = animator;
        this._spriteAnimator.setAnimationSpeed(this._config.animationSpeed);
      }
      catch (error) {
        console.warn(error);
        this._spriteAnimator = null;
      }
    }
  }


  class Sprite_Editor_DropDown extends KNSprite {
    constructor() {
      super();
      this._currentButtonCaption = "Test";
      this._iconName = "folder";
      this._create();
    }
    deactivate() {
      var _a;
      (_a = this['dropDownButton']) === null || _a === void 0 ? void 0 : _a.disable();
    }
    activate() {
      var _a;
      (_a = this['dropDownButton']) === null || _a === void 0 ? void 0 : _a.enable();
    }
    setButtonCaption(caption) {
      this._currentButtonCaption = caption;
      this.refreshBindings(this);
    }
    setClickHandler(handler) {
      var _a;
      (_a = this['dropDownButton']) === null || _a === void 0 ? void 0 : _a.addClickHandler(handler);
    }
    currentButtonCaptionText() {
      return this._currentButtonCaption;
    }
    iconName() {
      return this._iconName;
    }
    _create() {
      /*@ts-ignore*/
      KDCore.Sprite_NUI.FromScheme(PKD_MapEnhancer.GetNUIFile("NUI_DropDown"), this);
      this.refreshBindings(this);
    }
  }


  class Sprite_Editor_EMCollisionsSection extends KNSprite {
    //%[IDEA] Рисовать небольшую карту коллизий (размер camera viewport)
    constructor(_parentSizeData) {
      super();
      this._parentSizeData = _parentSizeData;
      this._create();
    }
    activate() {
      this.refreshAllElements();
    }
    deactivate() {
    }
    refreshAllElements() {
      this.refreshBindings();
    }
    realHeight() {
      if (this._parentSizeData) {
        return this._parentSizeData.realHeight();
      }
      else {
        return this.height;
      }
    }
    realWidth() {
      if (this._parentSizeData) {
        return this._parentSizeData.realWidth();
      }
      else {
        return this.width;
      }
    }
    _create() {
      /*@ts-ignore*/
      KDCore.Sprite_NUI.FromScheme(PKD_MapEnhancer.GetNUIFile("NUI_EditorCollisionsModeSection"), this);
      this.refreshBindings(null);
    }
  }


  class Sprite_Editor_EMLayersSection extends KNSprite {
    constructor(_parentSizeData) {
      super();
      this._parentSizeData = _parentSizeData;
      this._layerInfo = null;
      this._root = null;
      this._inputElement = null;
      this._create();
    }
    setLayerInfo(info) {
      //console.log("Set layer info", info);
      this._layerInfo = info;
      this.refreshAllElements();
    }
    layerIndex() {
      if (this._layerInfo) {
        return this._layerInfo.layerIndex;
      }
      else
        return 0;
    }
    layerObjectsCount() {
      if (this._layerInfo) {
        return this._layerInfo.objectsCount;
      }
      else
        return 0;
    }
    layerCollidersCount() {
      if (this._layerInfo) {
        return this._layerInfo.collidersCount;
      }
      else
        return 0;
    }
    layerRegionsCount() {
      if (this._layerInfo) {
        return this._layerInfo.regionsCount;
      }
      else
        return 0;
    }
    layerConditionText() {
      if (this._layerInfo) {
        return this._layerInfo.condition;
      }
      else
        return "";
    }
    activate() {
      this._lastLayerConditionText = '';
      this.refreshAllElements();
      this._inputElement.style.display = 'block';
      this._autosaveInterval = setInterval(() => {
        this._sendLayerConditionToGame();
      }, 500);
    }
    deactivate() {
      this._sendLayerConditionToGame();
      this.refreshAllElements();
      this._inputElement.style.display = 'none';
      clearInterval(this._autosaveInterval);
    }
    refreshAllElements() {
      this.refreshBindings(this, true);
      if (this._inputElement)
        this._inputElement.value = this.layerConditionText();
    }
    realHeight() {
      if (this._parentSizeData) {
        return this._parentSizeData.realHeight();
      }
      else {
        return this.height;
      }
    }
    realWidth() {
      if (this._parentSizeData) {
        return this._parentSizeData.realWidth();
      }
      else {
        return this.width;
      }
    }
    _create() {
      /*@ts-ignore*/
      KDCore.Sprite_NUI.FromScheme(PKD_MapEnhancer.GetNUIFile("NUI_EditorLayersModeSection"), this);
      this.refreshBindings(this);
      this._addHtmlInputElement();
    }
    _addHtmlInputElement() {
      const input = document.createElement('input');
      input.style.position = 'absolute';
      let styleSettings = this._root.uiConstant('inputStyle');
      input.style.left = styleSettings.left;
      input.style.bottom = styleSettings.bottom;
      input.style.width = styleSettings.width;
      input.style.height = styleSettings.height;
      input.style.zIndex = '100';
      input.style.fontSize = styleSettings.fontSize;
      input.value = this.layerConditionText();
      input.addEventListener('input', this._saveInputValue.bind(this));
      // * add to body
      document.body.appendChild(input);
      this._inputElement = input;
      this._inputElement.style.display = 'none';
    }
    _saveInputValue(e) {
      const input = e.target;
      if (this._layerInfo)
        this._layerInfo.condition = input.value;
    }
    _sendLayerConditionToGame() {
      if (this._lastLayerConditionText != this.layerConditionText()) {
        this._lastLayerConditionText = this.layerConditionText();
        EM_EditorWindowHandler.SendCommandToGameWindow('layerConditionChange', {
          layerIndex: this.layerIndex(),
          condition: this.layerConditionText()
        });
      }
    }
  }


  class Sprite_Editor_EMObjectsSection extends KNSprite {
    constructor(_parentSizeData) {
      super();
      this._parentSizeData = _parentSizeData;
      this._allFolders = [];
      this._currentFolder = "";
      this._currentImages = [];
      this._loadFolders();
      this._create();
    }
    refreshAllElements() {
      this.refreshBindings();
      this._dropDown.refreshBindings(this._dropDown);
    }
    realHeight() {
      if (this._parentSizeData) {
        return this._parentSizeData.realHeight();
      }
      else {
        return this.height;
      }
    }
    realWidth() {
      if (this._parentSizeData) {
        return this._parentSizeData.realWidth();
      }
      else {
        return this.width;
      }
    }
    activate() {
      this._list.activate();
    }
    deactivate() {
    }
    changeCurrentObjectFromGame(index) {
      console.log("Change object from game: ", index);
      this._list.selectItemInList(index);
    }
    _loadFolders() {
      this._allFolders = EditorResourcesManager.GetFoldersList();
      this._currentFolder = this._allFolders[0];
    }
    _create() {
      /*@ts-ignore*/
      KDCore.Sprite_NUI.FromScheme(PKD_MapEnhancer.GetNUIFile("NUI_EditorObjectsModeSection"), this);
      this.refreshBindings(null);
      this._createDropDownMenu();
      this._createItemsList();
      this._refreshDropDownMenu();
      this._refreshItemsList();
    }
    _createDropDownMenu() {
      var _a;
      let dropDown = new Sprite_Editor_DropDown();
      (_a = this._dropDownGroup) === null || _a === void 0 ? void 0 : _a.addChild(dropDown);
      dropDown.refreshBindings(dropDown);
      this._dropDown = dropDown;
      this._dropDown.setClickHandler(this._onFolderSelect.bind(this));
    }
    _onFolderSelect() {
      this._dropDown.deactivate();
      this._refreshFoldersList();
      this.activate();
    }
    _createItemsList() {
      var _a;
      let list = new Sprite_Editor_List();
      (_a = this._listGroup) === null || _a === void 0 ? void 0 : _a.addChild(list);
      this._list = list;
    }
    _onItemSelected() {
      this._list.activate();
      let item = this._list.selectedItem();
      console.log("Selected item: ", item === null || item === void 0 ? void 0 : item.currentItemName());
      console.log("Ok");
      EM_EditorWindowHandler.SendCommandToGameWindow("selectObject", {
        imageName: item.currentItemName(),
        folderName: this._currentFolder
      });
      EM_EditorWindowHandler.FocusRootWindow();
    }
    _onCancelOnItem() {
      console.log("Cancel");
      this._list.activate();
    }
    _refreshDropDownMenu() {
      this._dropDown.setButtonCaption(this._currentFolder);
      this._dropDown.refreshBindings(this._dropDown);
    }
    //TODO: Optimization!
    _refreshItemsList() {
      this._currentImages = EditorResourcesManager.GetFilesListInFolder(this._currentFolder);
      this._list.setupItems(this._currentImages.map(item => {
        let listItem = new Sprite_Editor_ListItem();
        listItem.setItem("Assets/" + this._currentFolder, item);
        return listItem;
      }));
      this._list.setOkHandler(this._onItemSelected.bind(this));
      this._list.setCancelHandler(this._onCancelOnItem.bind(this));
    }
    //TODO: Optimization!
    _refreshFoldersList() {
      this._list.setupItems(this._allFolders.map(item => {
        let listItem = new Sprite_Editor_ListItem();
        //%[IDEA] Show small images with content on folder, not just folder
        listItem.setItem("EditorUI", "folder", item);
        return listItem;
      }));
      this._list.setOkHandler(this._onFolderSelected.bind(this));
      this._list.setCancelHandler(this._onCancelOnFolder.bind(this));
    }
    _onFolderSelected() {
      let item = this._list.selectedItem();
      if (!item) {
        this._list.activate();
      }
      else {
        let itemName = item.currentItemName();
        this._currentFolder = itemName;
        this._onCancelOnFolder();
      }
    }
    _onCancelOnFolder() {
      this._refreshDropDownMenu();
      this._refreshItemsList();
      this.activate();
      this._dropDown.activate();
    }
  }


  class Sprite_Editor_List extends KNSprite {
    constructor() {
      super();
      this._items = [];
      this._create();
    }
    realHeight() {
      if (this.parent) {
        return this.parent['realHeight']();
      }
      else {
        return this.height;
      }
    }
    realWidth() {
      if (this.parent) {
        return this.parent['realWidth']();
      }
      else {
        return this.width;
      }
    }
    maxCols() {
      if (!this._items || this._items.length == 0) {
        return 1;
      }
      else {
        let itemWidth = this._items[0].realWidth();
        let listWidth = this.realWidth();
        return Math.floor(listWidth / itemWidth);
      }
    }
    selectedItem() {
      return this._list.selectedItem();
    }
    setupItems(items) {
      this._items = items;
      this._list.setItems(items);
      this.refreshBindings(this);
    }
    setOkHandler(handler) {
      let _handler = () => {
        this.activateItemInList(this._list.selectedItem());
        handler();
      };
      this._list.setOkHandler(_handler);
    }
    setCancelHandler(handler) {
      let _handler = () => {
        this.activateItemInList(null);
        handler();
      };
      this._list.setCancelHandler(_handler);
    }
    activateItemInList(item) {
      // * Deselect all items
      this._items.forEach(i => i.onDeslectedByUserInList());
      item === null || item === void 0 ? void 0 : item.onSelectedByUserInList();
    }
    selectItemInList(index) {
      try {
        this._list.list.select(index);
        if (index >= 0) {
          this.activateItemInList(this._list.selectedItem());
        }
        else {
          this.activateItemInList(null);
        }
      }
      catch (error) {
        console.warn(error);
      }
    }
    activate() {
      this._list.activate();
    }
    _create() {
      /*@ts-ignore*/
      KDCore.Sprite_NUI.FromScheme(PKD_MapEnhancer.GetNUIFile("NUI_EditorItemsList"), this);
      this.refreshBindings(this);
    }
  }


  class Sprite_Editor_ListItem extends KNSprite {
    constructor() {
      super();
      this._isActive = false;
      this._isSelectedInList = false;
      this._itemName = "Test";
      this._create();
    }
    realWidth() {
      return this._root.realWidth();
    }
    realHeight() {
      return this._root.realHeight();
    }
    isSelectedInList() {
      return this._isSelectedInList == true;
    }
    isActive() {
      return this._isActive == true;
    }
    onSelectedByUserInList() {
      this._isActive = true;
      this.refreshBindings(this);
    }
    onDeslectedByUserInList() {
      this._isActive = false;
      this.refreshBindings(this);
    }
    activateInList() {
      this._isSelectedInList = true;
      this.refreshBindings(this);
    }
    deactivateInList() {
      this._isSelectedInList = false;
      this.refreshBindings(this);
    }
    currentItemName() {
      return this._itemName;
    }
    update() {
      super.update();
      if (this._spriteAnimator) {
        this._spriteAnimator.update();
      }
    }
    setItem(folderName, imageName, itemName) {
      let itemData = {
        "folderName": "PKD_MapEnhancer/" + folderName,
        "imageName": imageName,
        "keepAspect": true,
        "useAspectSize": true
      };
      let image = new KNSprite_Image(itemData);
      let contentParent = this['contentParent'];
      if (!contentParent)
        return;
      contentParent.addChild(image);
      image.setSize("auto", "100%");
      image.setPosition("center", "center");
      if (!KString.any(itemName)) {
        itemName = imageName;
      }
      this._itemName = itemName;
      this.refreshBindings(this);
      image.addLoadListener(() => {
        this._checkIfImageIsAnimated(imageName, image);
      });
    }
    _checkIfImageIsAnimated(imageName, image) {
      try {
        let data = SpriteAnimator.GetAnimationData(imageName);
        if (data) {
          this._createAnimator(data.frames, data.speed, image.image);
          if (this._spriteAnimator) {
            image.realWidth = () => {
              try {
                /*@ts-ignore*/
                return image.image._frame.width;
              }
              catch (error) {
                console.warn(error);
              }
              return image.image.width;
            };
            image.setPosition("center", "center");
            this.refreshBindings(this);
          }
        }
      }
      catch (error) {
        console.warn(error);
        this._spriteAnimator = null;
      }
    }
    _createAnimator(frames, speed, imageSprite) {
      try {
        let animator = new SpriteAnimator(imageSprite, frames, speed);
        this._spriteAnimator = animator;
      }
      catch (error) {
        console.warn(error);
        this._spriteAnimator = null;
      }
    }
    _create() {
      /*@ts-ignore*/
      KDCore.Sprite_NUI.FromScheme(PKD_MapEnhancer.GetNUIFile("NUI_ListItem"), this);
      this.refreshBindings(this);
    }
  }


  class Sprite_GuideGrid extends Sprite {
    constructor() {
      super();
      this._tileWidth = $gameMap.tileWidth();
      this._tileHeight = $gameMap.tileHeight();
      this._defaultOpacity = 200; //TODO: Parameter
      this._drawGrid();
      this.opacity = this._defaultOpacity;
    }
    static Show() {
      if (this._currentGrid) {
        if (!this._currentGrid.visible) {
          this._currentGrid.visible = true;
        }
      }
      else {
        this._currentGrid = new Sprite_GuideGrid();
        SceneManager._scene.addChild(this._currentGrid);
      }
    }
    static Hide() {
      if (this._currentGrid) {
        this._currentGrid.visible = false;
      }
    }
    static ChangeSize(value) {
      if (this._currentGrid && value != 0) {
        this._currentGrid._tileWidth += value;
        this._currentGrid._tileHeight += value;
        if (this._currentGrid._tileWidth < Sprite_GuideGrid._minimumTileSize || this._currentGrid._tileWidth > $gameMap.tileWidth()) {
          this._currentGrid._tileWidth -= value;
        }
        if (this._currentGrid._tileHeight < Sprite_GuideGrid._minimumTileSize || this._currentGrid._tileHeight > $gameMap.tileHeight()) {
          this._currentGrid._tileHeight -= value;
        }
        this._currentGrid._drawGrid();
      }
    }
    static GetAlignedPosition({ x, y }) {
      if (this._currentGrid) {
        let tileWidth = this._currentGrid._tileWidth;
        let tileHeight = this._currentGrid._tileHeight;
        x = Math.floor(x / tileWidth) * tileWidth;
        y = Math.floor(y / tileHeight) * tileHeight;
        return { x, y };
      }
    }
    _drawGrid() {
      let bitmap = new Bitmap(Graphics.width, Graphics.height);
      let ctx = bitmap.context;
      ctx.strokeStyle = '#000000'; //TODO: Parameter
      ctx.lineWidth = 1;
      for (let x = 0; x < Graphics.width; x += this._tileWidth) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, Graphics.height);
        ctx.stroke();
      }
      for (let y = 0; y < Graphics.height; y += this._tileHeight) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(Graphics.width, y);
        ctx.stroke();
      }
      ctx.closePath();
      this.bitmap = bitmap;
    }
  }
  Sprite_GuideGrid._minimumTileSize = 8;


  //%[IDEA] Сейчас сбрасываются линии, если ставить новый предмет, надо сделать чтобы сохранялись
  class Sprite_GuideLine extends Sprite {
    constructor(_settings) {
      super();
      this._settings = _settings;
      this._create();
    }
    static ShowVertical() {
      if (this._currentVerticalGuideline) {
        if (!this._currentVerticalGuideline.visible) {
          this._currentVerticalGuideline.visible = true;
          this._currentVerticalGuideline.x = TouchInput.x;
        }
      }
      else {
        this._currentVerticalGuideline = new Sprite_GuideLine({
          width: 4, //TODO: HDP
          height: Graphics.height,
          color: '#00ff00'
        });
        SceneManager._scene.addChild(this._currentVerticalGuideline);
        this._currentVerticalGuideline.x = TouchInput.x;
      }
    }
    static ShowHorizontal() {
      if (this._currentHorizontalGuideline) {
        if (!this._currentHorizontalGuideline.visible) {
          this._currentHorizontalGuideline.visible = true;
          this._currentHorizontalGuideline.y = TouchInput.y;
        }
      }
      else {
        this._currentHorizontalGuideline = new Sprite_GuideLine({
          width: Graphics.width,
          height: 4, //TODO: HDP
          color: '#ff0000'
        });
        SceneManager._scene.addChild(this._currentHorizontalGuideline);
        this._currentHorizontalGuideline.y = TouchInput.y;
      }
    }
    static HideVertical() {
      if (this._currentVerticalGuideline) {
        this._currentVerticalGuideline.visible = false;
      }
    }
    static HideHorizontal() {
      if (this._currentHorizontalGuideline) {
        this._currentHorizontalGuideline.visible = false;
      }
    }
    static DestroyAll() {
      if (this._currentVerticalGuideline) {
        this._currentVerticalGuideline.destroy();
        this._currentVerticalGuideline = null;
      }
      if (this._currentHorizontalGuideline) {
        this._currentHorizontalGuideline.destroy();
        this._currentHorizontalGuideline = null;
      }
    }
    _create() {
      const bitmap = new Bitmap(this._settings.width, this._settings.height);
      bitmap.fillAll(this._settings.color);
      this.bitmap = bitmap;
      //TODO: Shadow effect from PIXI
    }
  }


  class Sprite_MapGrid extends KSprite {
    constructor() {
      super();
      this._create();
      /*@ts-ignore*/
      this.z = 100;
    }
    static CreateGrid() {
      if (!this._currentGrid) {
        this._currentGrid = new Sprite_MapGrid();
        /*@ts-ignore*/
        SceneManager._scene._spriteset._tilemap.addChild(this._currentGrid);
      }
    }
    static RemoveGrid() {
      if (this._currentGrid) {
        this._currentGrid.destroy();
        this._currentGrid = null;
      }
    }
    update() {
      super.update();
      if (this.visible) {
        this._updatePosition();
      }
    }
    _updatePosition() {
      let x = $gameMap.displayX() * $gameMap.tileWidth();
      let y = $gameMap.displayY() * $gameMap.tileHeight();
      this.x = -x;
      this.y = -y;
    }
    _create() {
      let width = $gameMap.width() * $gameMap.tileWidth();
      let height = $gameMap.height() * $gameMap.tileHeight();
      this.bitmap = new Bitmap(width, height);
      this._drawBaseGrid();
    }
    _drawBaseGrid() {
      let bitmap = this.bitmap;
      bitmap.clear();
      let tw = $gameMap.tileWidth();
      let th = $gameMap.tileHeight();
      let w = $gameMap.width();
      let h = $gameMap.height();
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          bitmap.fillRect(x * tw, y * th, tw, 2, "rgba(255, 255, 255, 0.5)");
          bitmap.fillRect(x * tw, y * th, 2, th, "rgba(255, 255, 255, 0.5)");
        }
      }
    }
  }


  class Sprite_MapGridCursor extends KSprite {
    constructor() {
      super();
      this._create();
      /*@ts-ignore*/
      this.z = 2000;
    }
    static CreateGridCursor() {
      if (!this._currentSprite) {
        this._currentSprite = new Sprite_MapGridCursor();
        /*@ts-ignore*/
        SceneManager._scene._spriteset._tilemap.addChild(this._currentSprite);
      }
    }
    static Remove() {
      if (this._currentSprite) {
        this._currentSprite.destroy();
        this._currentSprite = null;
      }
    }
    static OnClick() {
      if (this._currentSprite) {
        this._currentSprite._onTouchPress();
      }
    }
    static OnCancel() {
      if (this._currentSprite) {
        this._currentSprite._onTouchCancel();
      }
    }
    update() {
      super.update();
      if (this.visible) {
        this._updatePosition();
        this._updateCellUnderMouse();
        this._updateTools();
      }
    }
    _updatePosition() {
      let x = $gameMap.displayX() * $gameMap.tileWidth();
      let y = $gameMap.displayY() * $gameMap.tileHeight();
      this.x = -x;
      this.y = -y;
    }
    _updateCellUnderMouse() {
      let mx = TouchInput.x;
      let my = TouchInput.y;
      let tw = $gameMap.tileWidth();
      let th = $gameMap.tileHeight();
      let mapPoint = KPoint.ConvertFromScreenToMap({ x: mx, y: my });
      let x = mapPoint.x;
      let y = mapPoint.y;
      this._cellUnderMouse.x = x * tw;
      this._cellUnderMouse.y = y * th;
      this._underMouseMapPosition = mapPoint;
    }
    _create() {
      let width = $gameMap.width() * $gameMap.tileWidth();
      let height = $gameMap.height() * $gameMap.tileHeight();
      this.bitmap = new Bitmap(width, height);
      this._createCellUnderMouse();
    }
    _createCellUnderMouse() {
      let tw = $gameMap.tileWidth();
      let th = $gameMap.tileHeight();
      let color = "rgba(0, 255, 255, 0.5)";
      let cell = new Bitmap(tw, th);
      const width = 4;
      cell.fillRect(0, 0, tw, width, color);
      cell.fillRect(0, 0, width, th, color);
      cell.fillRect(0, th - width, tw, width, color);
      cell.fillRect(tw - width, 0, width, th, color);
      this._cellUnderMouse = new KSprite();
      this._cellUnderMouse.bitmap = cell;
      this.addChild(this._cellUnderMouse);
    }
    _updateTools() {
      if (TouchInput.isPressed()) {
        this._onTouchPress();
      }
      else if (TouchInput.isCancelled()) {
        this._onTouchCancel();
      }
    }
    _onTouchPress() {
      let x = this._underMouseMapPosition.x;
      let y = this._underMouseMapPosition.y;
      EMCollisionsManager.AddCollision($gameMap.mapId(), { x: x, y: y }, EMapEditorManager.CurrentLayerIndex());
      Sprite_CollisionGrid.RefreshGrid();
    }
    _onTouchCancel() {
      let x = this._underMouseMapPosition.x;
      let y = this._underMouseMapPosition.y;
      EMCollisionsManager.DeleteCollision($gameMap.mapId(), { x: x, y: y }, EMapEditorManager.CurrentLayerIndex());
      Sprite_CollisionGrid.RefreshGrid();
    }
  }


  class Sprite_PhantomOutline extends KSprite {
    constructor(_emObject, _outlineColor = "#FFFFFF") {
      super();
      this._emObject = _emObject;
      this._outlineColor = _outlineColor;
      this._create();
    }
    update() {
      super.update();
      if (this._emObject) {
        this.x = this._emObject.x;
        this.y = this._emObject.y;
      }
      else {
        this.destroy();
      }
    }
    static ShowForZIndex(sprite) {
      if (this._currentIndexOutline) {
        this._currentIndexOutline.x = sprite.x;
        this._currentIndexOutline.y = sprite.y;
      }
      else {
        this._currentIndexOutline = new Sprite_PhantomOutline(sprite, '#00FF00');
        SceneManager._scene.addChild(this._currentIndexOutline);
      }
    }
    static ShowForBlend(sprite) {
      if (this._currentBlendOutline) {
        this._currentBlendOutline.x = sprite.x;
        this._currentBlendOutline.y = sprite.y;
      }
      else {
        this._currentBlendOutline = new Sprite_PhantomOutline(sprite, '#FFFFFF');
        SceneManager._scene.addChild(this._currentBlendOutline);
      }
    }
    static ShowForHover(sprite) {
      if (!this._currentHoverOutline) {
        this._currentHoverOutline = new Sprite_PhantomOutline(sprite, '#FFF0FF');
        SceneManager._scene.addChild(this._currentHoverOutline);
      }
    }
    static HideForZIndex() {
      if (this._currentIndexOutline) {
        this._currentIndexOutline.removeFromParent();
        this._currentIndexOutline.destroy();
        this._currentIndexOutline = null;
      }
    }
    static HideForBlend() {
      if (this._currentBlendOutline) {
        this._currentBlendOutline.removeFromParent();
        this._currentBlendOutline.destroy();
        this._currentBlendOutline = null;
      }
    }
    static HideForHover() {
      if (this._currentHoverOutline) {
        this._currentHoverOutline.removeFromParent();
        this._currentHoverOutline.destroy();
        this._currentHoverOutline = null;
      }
    }
    _create() {
      let child = Sprite_EMObject.Phantom(this._emObject);
      child.opacity = 200;
      if (KDX.isMZ()) {
        /*@ts-ignore*/
        let outlineFilter = new PIXI.filters.OutlineFilter(2, KColor.HexToColorNumber(this._outlineColor), 0.5, true, true);
        this.filters = [outlineFilter];
      }
      else {
        /*@ts-ignore*/
        let glowFilter = new PIXI.filters.GlowFilter({
          distance: 15,
          outerStrength: 2,
          color: KColor.HexToColorNumber(this._outlineColor),
        });
        this.filters = [glowFilter];
      }
      this.addChild(child);
    }
  }


  // * Circle with a cross in the middle to indicate the rotation anchor point of a sprite.
  class Sprite_RotationAnchor extends Sprite {
    constructor() {
      super();
      this._circleRadius = 12;
      this._create();
      this.anchor.x = 0.5;
      this.anchor.y = 0.5;
    }
    _create() {
      this._graphics = new PIXI.Graphics();
      this.addChild(this._graphics);
      this._drawCircle();
    }
    _drawCircle() {
      this._graphics.clear();
      this._graphics.beginFill(0x000000, 0.8);
      this._graphics.drawCircle(0, 0, this._circleRadius);
      this._graphics.endFill();
      this._graphics.lineStyle(2, 0xffffff, 1);
      this._graphics.moveTo(-this._circleRadius, 0);
      this._graphics.lineTo(this._circleRadius, 0);
      this._graphics.moveTo(0, -this._circleRadius);
      this._graphics.lineTo(0, this._circleRadius);
    }
    static ShowFor(sprite) {
      if (this._currentAnchor) {
        if (sprite != this._currentAnchor.parent) {
          sprite.addChild(this._currentAnchor);
        }
      }
      else {
        this._currentAnchor = new Sprite_RotationAnchor();
      }
    }
    static Hide() {
      if (this._currentAnchor) {
        this._currentAnchor.destroy();
        this._currentAnchor = null;
      }
    }
  }


  class Sprite_ToolGrid extends Sprite {
    constructor(_settings) {
      super();
      this._settings = _settings;
      this._drawGrid();
      this.anchor.x = 0.5;
      this.anchor.y = 1;
    }
    static ShowScaleFor(sprite) {
      if (this._currentScaleGrid) {
        return;
      }
      this._currentScaleGrid = Sprite_ToolGrid._createFor(sprite, {
        width: sprite.realWidth(),
        height: sprite.realHeight(),
        color: '#ffff00',
        lineWidth: 1,
        cellSize: 16
      });
      Sprite_ToolValueText.ShowValueFor('scale', {
        color: '#ffff00',
        valueGetter: sprite.getCurrentScale.bind(sprite),
        showResetHelp: true,
        showPivotChangeHelp: false
      });
    }
    static ShowRotationFor(sprite) {
      if (this._currentRotationGrid) {
        return;
      }
      this._currentRotationGrid = Sprite_ToolGrid._createFor(sprite, {
        width: sprite.realWidth(),
        height: sprite.realHeight(),
        color: '#00ff00',
        lineWidth: 1,
        cellSize: 12
      });
      Sprite_ToolValueText.ShowValueFor('rotation', {
        color: '#00ff00',
        valueGetter: sprite.getCurrentRotation.bind(sprite),
        showResetHelp: true,
        showPivotChangeHelp: true
      });
    }
    static ShowZIndexFor(sprite) {
      if (this._currentZIndexGrid) {
        return;
      }
      this._currentZIndexGrid = Sprite_ToolGrid._createFor(sprite, {
        width: sprite.realWidth(),
        height: sprite.realHeight(),
        color: '#ffffff',
        lineWidth: 2,
        cellSize: 0
      });
      Sprite_ToolValueText.ShowValueFor('zIndex', {
        color: '#ffffff',
        valueGetter: sprite.getCurrentZIndex.bind(sprite),
        showResetHelp: false,
        showPivotChangeHelp: false
      });
    }
    static ShowBlendModeFor(sprite) {
      if (this._currentBlendModeGrid) {
        return;
      }
      this._currentBlendModeGrid = Sprite_ToolGrid._createFor(sprite, {
        width: sprite.realWidth(),
        height: sprite.realHeight(),
        color: '#ffffff',
        lineWidth: 2,
        cellSize: 0
      });
      Sprite_ToolValueText.ShowValueFor('blendMode', {
        color: '#ffffff',
        valueGetter: sprite.getCurrentBlendModeName.bind(sprite),
        showResetHelp: false,
        showPivotChangeHelp: false
      });
    }
    static ShowHueModeFor(sprite) {
      if (this._currentHueGrid) {
        return;
      }
      this._currentHueGrid = Sprite_ToolGrid._createFor(sprite, {
        width: sprite.realWidth(),
        height: sprite.realHeight(),
        color: '#ffffff',
        lineWidth: 2,
        cellSize: 0
      });
      Sprite_ToolValueText.ShowValueFor('hue', {
        color: '#ffffff',
        valueGetter: sprite.getCurrentHue.bind(sprite),
        showResetHelp: true,
        showPivotChangeHelp: false
      });
    }
    static ShowAnimationSpeedFor(sprite) {
      if (this._currentAnimationSpeedGrid) {
        return;
      }
      this._currentAnimationSpeedGrid = Sprite_ToolGrid._createFor(sprite, {
        width: sprite.realWidth(),
        height: sprite.realHeight(),
        color: '#ffffff',
        lineWidth: 2,
        cellSize: 0
      });
      Sprite_ToolValueText.ShowValueFor('animationSpeed', {
        color: '#ffffff',
        valueGetter: sprite.getCurrentAnimationSpeed.bind(sprite),
        showResetHelp: false,
        showPivotChangeHelp: false
      });
    }
    static _createFor(sprite, settings) {
      let grid = new Sprite_ToolGrid(settings);
      grid._linkedTo = sprite;
      /*@ts-ignore*/
      grid.z = sprite.z;
      sprite.parent.addChild(grid);
      return grid;
    }
    static HideScaleGrid() {
      Sprite_ToolValueText.HideValue('scale');
      if (this._currentScaleGrid) {
        this._currentScaleGrid.destroy();
        this._currentScaleGrid = null;
      }
    }
    static HideRotationGrid() {
      Sprite_ToolValueText.HideValue('rotation');
      if (this._currentRotationGrid) {
        this._currentRotationGrid.destroy();
        this._currentRotationGrid = null;
      }
    }
    static HideZIndexGrid() {
      Sprite_ToolValueText.HideValue('zIndex');
      if (this._currentZIndexGrid) {
        this._currentZIndexGrid.destroy();
        this._currentZIndexGrid = null;
      }
    }
    static HideBlendModeGrid() {
      Sprite_ToolValueText.HideValue('blendMode');
      if (this._currentBlendModeGrid) {
        this._currentBlendModeGrid.destroy();
        this._currentBlendModeGrid = null;
      }
    }
    static HideHueModeGrid() {
      Sprite_ToolValueText.HideValue('hue');
      if (this._currentHueGrid) {
        this._currentHueGrid.destroy();
        this._currentHueGrid = null;
      }
    }
    static HideAnimationSpeedGrid() {
      Sprite_ToolValueText.HideValue('animationSpeed');
      if (this._currentAnimationSpeedGrid) {
        this._currentAnimationSpeedGrid.destroy();
        this._currentAnimationSpeedGrid = null;
      }
    }
    _drawGrid() {
      let width = this._settings.width * Sprite_ToolGrid._initialScaleFactor;
      let height = this._settings.height * Sprite_ToolGrid._initialScaleFactor;
      let bitmap = new Bitmap(width, height);
      let ctx = bitmap.context;
      ctx.strokeStyle = this._settings.color;
      ctx.lineWidth = this._settings.lineWidth;
      if (this._settings.cellSize === 0) {
        // * Draw just borders
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(width - 2, 0);
        ctx.lineTo(width - 2, height - 1);
        ctx.lineTo(0, height - 1);
        ctx.lineTo(0, 0);
        ctx.stroke();
      }
      else {
        for (let x = 0; x < width; x += this._settings.cellSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += this._settings.cellSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }
      ctx.closePath();
      this.bitmap = bitmap;
    }
    update() {
      super.update();
      this._updatePosition();
    }
    _updatePosition() {
      if (!this._linkedTo)
        return;
      this.x = this._linkedTo.x;
      this.y = this._linkedTo.y - 1; // * Below the object
    }
  }
  Sprite_ToolGrid._initialScaleFactor = 1.5;


  class Sprite_ToolValueText extends KSprite {
    constructor(_settings) {
      super();
      this._settings = _settings;
      this._createValueText();
      this._createExtraHelpKeys();
    }
    static ShowValueFor(instanceId, config) {
      if (this._valueTextInstances[instanceId]) {
        return;
      }
      this._valueTextInstances[instanceId] = new Sprite_ToolValueText(config);
      SceneManager._scene.addChild(this._valueTextInstances[instanceId]);
    }
    static HideValue(instanceId) {
      if (this._valueTextInstances[instanceId]) {
        this._valueTextInstances[instanceId].destroy();
        this._valueTextInstances[instanceId] = null;
        delete this._valueTextInstances[instanceId];
      }
    }
    _textElementScheme(color) {
      return {
        "type": "group",
        "id": "_elementsContainer",
        "bindings": {
          "width": "66hdp",
          "height": "24hdp",
          "x": 40,
          "y": 20
        },
        "childrens": [
          {
            "type": "rect",
            "parameters": {
              "fillColor": color,
              "corners": 0,
              "strokeWidth": 0
            },
            "bindings": {
              "width": "100%",
              "height": "100%"
            },
            "childrens": [
              {
                "type": "text",
                "id": "_textSpr",
                "parameters": {
                  "textColor": "#000000"
                },
                "bindings": {
                  "width": "100%",
                  "height": "100%",
                  "fontSize": "78%"
                }
              }
            ]
          }
        ]
      };
    }
    _createValueText() {
      /*@ts-ignore*/
      KDCore.Sprite_NUI.FromScheme(this._textElementScheme(this._settings.color), this);
    }
    _createExtraHelpKeys() {
      var _a, _b;
      if (this._settings.showResetHelp) {
        let resetText = HelpVocabulary.GetLocalizedString(HelpTextStrings.Reset);
        let element = HelpTextBuilder.New().AddMouseClick('r').AddText(resetText).Build();
        (_a = this._elementsContainer) === null || _a === void 0 ? void 0 : _a.addChild(element);
        element.setPosition(0, "prevEndY + 4hdp");
      }
      if (this._settings.showPivotChangeHelp) {
        let changePivotText = HelpVocabulary.GetLocalizedString(HelpTextStrings.ChangePivot);
        let element = HelpTextBuilder.New().AddShiftKey().AddText(changePivotText).Build();
        (_b = this._elementsContainer) === null || _b === void 0 ? void 0 : _b.addChild(element);
        element.setPosition(0, "prevEndY + 4hdp");
      }
    }
    update() {
      super.update();
      this._updatePosition();
      this._updateValueText();
    }
    _updatePosition() {
      this.x = TouchInput.x;
      this.y = TouchInput.y;
    }
    _updateValueText() {
      var _a;
      (_a = this._textSpr) === null || _a === void 0 ? void 0 : _a.draw(this._settings.valueGetter());
    }
  }
  Sprite_ToolValueText._valueTextInstances = {};


  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Spriteset_Map.ts
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  (() => {
    //@[DEFINES]
    const _ = Spriteset_Map.prototype;
    //@[ALIAS]
    const ALIAS__createCharacters = _.createCharacters;
    _.createCharacters = function (...args) {
      let t = this;
      ALIAS__createCharacters.call(this, ...args);
      EMObjectsManager.CreateSpritesForMap(t._tilemap);
    };
  })();
  // ■ END Spriteset_Map.ts
  //---------------------------------------------------------------------------


  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Tilemap.ts
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  (() => {
    //@[DEFINES]
    const _ = Tilemap.prototype;
    /*@ts-ignore*/
    //@[ALIAS]
    const ALIAS___compareChildOrder = _._compareChildOrder;
    /*@ts-ignore*/
    _._compareChildOrder = function (a, b) {
      if (Imported['PKD_AnimaX']) {
        return ALIAS___compareChildOrder.call(this, a, b);
      }
      if ($gameMap) { //TODO: check is map is enhanced
        if (a.z !== b.z) {
          return a.z - b.z;
        }
        else if (a.y !== b.y) {
          return a.y - b.y;
        }
        else if (a.x !== b.x) {
          return a.x - b.x;
        }
        else {
          return a.spriteId - b.spriteId;
        }
      }
      else
        return ALIAS___compareChildOrder.call(this, a, b);
    };
  })();
  // ■ END Tilemap.ts
  //---------------------------------------------------------------------------


})();
// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins = [
  { "name": "PKD_DevOptions", "status": true, "description": "v1.0.1 - Helpful options for developing and testing game", "parameters": { "skipTitle": "false", "noPlayTest": "false", "console": "true", "focusGame": "false", "drawEventsNames": "true" } },
  { "name": "Alpha_NETZ", "status": true, "description": "(v.0.9 BETA)[PRO] Multiplayer for RPG Maker", "parameters": { "ANETZ": "", "connection:s": "{\"serverIp\":\"wejoystation.onrender.com\",\"serverPort\":\"\",\"isHttpsConnection:b\":\"true\"}", "isCustomGameId:b": "true", "customGameId": "MKP", "isQuickDevConnectionAllowed:b": "false", "isEndGameWhenHostIsLeave:b": "true", "spacer|gamesettings": "", "gameModeSettingsGroup": "", "netGameTitleCmd:b": "true", "onlySameMap:b": "false", "isCustomStartMap:b": "false", "singlePlayerAllowed:b": "true", "isReadyStatusCheck:b": "true", "roomFilter:b": "true", "joinStartedAllowed:b": "true", "joinStartedAndLoadedAllowed:b": "true", "onJoinCE:int": "12", "isJoinRandomOptionExists:b": "false", "saveLoadGame:b": "true", "networkStatusIcons:b": "true", "isMapEncountersGlobal:b": "false", "spacer|playerssettings": "", "playersSettingsGroup": "", "actorsForNetwork:intA": "[\"1\",\"2\",\"3\",\"4\"]", "maxPlayersInRoom:int": "4", "isActorSelectionAllowed:b": "true", "isSinglePlayerStartAllowed:b": "true", "playerActorNameType": "Instead Nickname", "playerLeaveGameCommonEvent:int": "6", "isAllowCollsBetweenNetChars:b": "false", "globalData:s": "{\"globalVariablesIds:intA\":\"[\\\"1\\\",\\\"2\\\"]\",\"globalSwitchesIds:intA\":\"[\\\"1\\\",\\\"2\\\"]\"}", "spacer|othersettings": "", "otherSettingsGroup": "", "textInputMaxLength:i": "12", "localeDB:struct": "{\"network\":\"Network\",\"createRoom\":\"Create Room\",\"joinRoom\":\"Join Room\",\"joinRandomRoom\":\"Join Random Room\",\"settings\":\"Settings\",\"start\":\"Start\",\"leave\":\"Leave\",\"joinGame\":\"Join Game\",\"ready\":\"Ready\",\"character\":\"Character\",\"close\":\"Close\",\"welcome\":\"Welcome,  %1\",\"playersCount\":\"Players on server: %1\"}", "spacer|endHolder": "" } },
  { "name": "Alpha_NETZ_Ext_InGameChat", "status": true, "description": "(v.1.0) In-Game Chat (ANETZ Extension)", "parameters": { "Alpha_NETZ_Ext_InGameChat": "", "chatStartMessage": "\\}ยินดีต้อนรับ, กด \\C[1]'T'\\C[6] เพื่อแชท", "chatOpenCloseKey": "t", "chatSayKey": "t", "clickOnChatToSay:b": "false", "chatAutoOpen:b": "false", "chatMessagesSettings:struct": "{\"maxlength:i\":\"32\",\"forbiddenEscapeCodes:str\":\"V\",\"iconsSize:i\":\"18\",\"allowEmotions:b\":\"true\"}", "chatInputSceneVisualSettings:struct": "{\"mapChannelButtonPosition:s\":\"{\\\"x:e\\\":\\\"4\\\",\\\"y:e\\\":\\\"6\\\"}\",\"allChannelButtonPosition:s\":\"{\\\"x:e\\\":\\\"104\\\",\\\"y:e\\\":\\\"6\\\"}\",\"inputSceneOkButtonPosition:s\":\"{\\\"x:e\\\":\\\"356\\\",\\\"y:e\\\":\\\"284\\\"}\"}", "inGameChatWindowVisualSettings:struct": "{\"size:s\":\"{\\\"w:int\\\":\\\"312\\\",\\\"h:int\\\":\\\"192\\\"}\",\"position:s\":\"{\\\"x:e\\\":\\\"1\\\",\\\"y:e\\\":\\\"Graphics.height - 193\\\"}\",\"notActiveOpacity:i\":\"140\",\"maxMessages:i\":\"9\",\"firstChatMessageMargin:s\":\"{\\\"x:int\\\":\\\"3\\\",\\\"y:int\\\":\\\"145\\\"}\"}", "inGameChatTextLineSettings:struct": "{\"size:s\":\"{\\\"w:int\\\":\\\"306\\\",\\\"h:int\\\":\\\"18\\\"}\",\"backgroundA:s\":\"{\\\"color:str\\\":\\\"#59a3d9\\\",\\\"opacity:i\\\":\\\"40\\\"}\",\"backgroundB:s\":\"{\\\"color:str\\\":\\\"#59a3d9\\\",\\\"opacity:i\\\":\\\"70\\\"}\",\"textLine:s\":\"{\\\"visible:bool\\\":\\\"true\\\",\\\"size:struct\\\":\\\"{\\\\\\\"w:int\\\\\\\":\\\\\\\"520\\\\\\\",\\\\\\\"h:int\\\\\\\":\\\\\\\"20\\\\\\\"}\\\",\\\"font:struct\\\":\\\"{\\\\\\\"face:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size:int\\\\\\\":\\\\\\\"14\\\\\\\",\\\\\\\"italic:bool\\\\\\\":\\\\\\\"false\\\\\\\"}\\\",\\\"margins:struct\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"-3\\\\\\\"}\\\"}\",\"textFormat:str\":\"\\\\}\\\\}\\\\C[3][%1] \\\\{\\\\{\\\\C[2]%2 \\\\C[0]%3\",\"textFormatForPlayer:str\":\"\\\\}\\\\}\\\\C[3][%1]\\\\C[1][ME]\\\\{\\\\{ \\\\C[0]%3\",\"textFormatForSystem:str\":\"\\\\}\\\\}\\\\C[3][%1]\\\\{\\\\{ \\\\C[6]%3\",\"animationSpeedInPx:i\":\"18\",\"channelAll:str\":\"ALL\",\"channelMap:str\":\"MAP\"}", "spacer|endHolder": "" } },
  { "name": "Alpha_NETZ_Ext_InteractionMenu", "status": true, "description": "(v.1.0) Interaction Menu (ANETZ Extension)", "parameters": { "Alpha_NETZ_Ext_InteractionMenu": "", "defaultIPLMenuCommands": "", "PlayerMenuItem_trade:s": "{\"text:str\":\"Trade\",\"visible:b\":\"true\",\"switchId:i\":\"0\",\"minDist:i\":\"1\",\"value:i\":\"0\"}", "PlayerMenuItem_status:s": "{\"text:str\":\"Status\",\"visible:b\":\"true\",\"switchId:i\":\"0\",\"minDist:i\":\"0\",\"value:i\":\"0\"}", "PlayerMenuItem_follow:s": "{\"text:str\":\"Follow\",\"visible:b\":\"true\",\"switchId:i\":\"0\",\"minDist:i\":\"0\",\"value:i\":\"0\"}", "userIPLMenuCommands:structA": "[]", "spacer|endHolder": "" } },
  { "name": "Alpha_NETZ_Ext_LobbyChat", "status": true, "description": "(v.1.0) Lobby Chat (ANETZ Extension)", "parameters": { "Alpha_NETZ_Ext_LobbyChat": "", "lobbyChatIsGlobal:b": "false", "spacer|endHolder": "" } },
  { "name": "Alpha_NETZ_Ext_Nameplates", "status": true, "description": "(v.1.0) Nameplates (ANETZ Extension)", "parameters": { "Alpha_NETZ_Ext_Nameplates": "", "isShowActorNameInNameplate:b": "true", "isShowMyNameplate:b": "false", "nameplatesDB:structA": "[\"{\\\"id:str\\\":\\\"default\\\",\\\"margins:s\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"-27\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"-20\\\\\\\"}\\\",\\\"backImage:s\\\":\\\"{\\\\\\\"visible:b\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"image:str\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"backImageMargins:s\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"backRect:s\\\":\\\"{\\\\\\\"visible:bool\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"size:struct\\\\\\\":\\\"{\\\\\\\\\\\\\\\"w:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"54\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"h:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"18\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"fillColor:str\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"fillOpacity:i\\\\\\\":\\\\\\\"120\\\\\\\",\\\\\\\"borderColor:str\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"borderThickness:i\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"borderOpacity:i\\\\\\\":\\\\\\\"255\\\\\\\"}\\\",\\\"backRectMargins:s\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"text:s\\\":\\\"{\\\\\\\"visible:bool\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"size:struct\\\\\\\":\\\"{\\\\\\\\\\\\\\\"w:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"54\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"h:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"18\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"font:struct\\\\\\\":\\\"{\\\\\\\\\\\\\\\"face:str\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"size:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"12\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"italic:bool\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"margins:struct\\\\\\\":\\\"{\\\\\\\\\\\\\\\"x:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"y:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\"}\\\"}\"]", "spacer|endHolder": "" } },
  { "name": "Alpha_NETZ_Ext_Trade", "status": true, "description": "(v.1.0) Trade (ANETZ Extension)", "parameters": { "Alpha_NETZ_Ext_Trade": "", "isTradeModalWindowActive:b": "true", "tradeModalWindow_openSE": "Bell3", "tradeModalWindow_text": "ตอบรับ \\C[1]การ Trade\\C[0] จาก \\C[2]%1\\C[0]?", "tradeModalWindow_hkYes": "y", "tradeModalWindow_hkNo": "n", "spacer|endHolder": "" } },
  { "name": "PKD_PhoneMenu", "status": true, "description": "(v.0.7)[BASIC] Mobile Phone Menu", "parameters": { "PKD_PhoneMenu": "", "phoneSettings:j": "\"\\\"openPhoneKey\\\": \\\"p\\\"\\n\\\"screenSize\\\": { \\\"w\\\": 278, \\\"h\\\": 434 }\\n\\\"screenOffset\\\": { \\\"x\\\": 16, \\\"y\\\": 86 }\\n\\\"phonePosition\\\": { \\\"x\\\": \\\"Graphics.width / 2 - 155\\\", \\\"y\\\": \\\"20\\\" }\\n\\\"appsGrid\\\": { \\\"x\\\": 3, \\\"y\\\": 4 }\\n\\\"isAnimate\\\": true\\n\\\"animationSpeed\\\": 24\\n\\\"appBackgroundColor\\\": \\\"#FFF\\\"\\n\\\"image\\\": \\\"PhoneFace\\\"\\n\\\"wallpaper\\\": \\\"Wallpaper1\\\"\\n\\\"isShowMapIcon\\\": true\\n\\\"mapIconPosition\\\": { \\\"x\\\": 4, \\\"y\\\": 120 }\"", "phoneDefaultAppsList": "messagesApp, saveApp, loadApp, settingsApp", "phoneApps:structA": "[\"{\\\"id:str\\\":\\\"messagesApp\\\",\\\"name:str\\\":\\\"ข้อความ\\\",\\\"icon:str\\\":\\\"AppIcon_Messages\\\",\\\"visibleSwitchId:i\\\":\\\"0\\\",\\\"enabledSwitchId:i\\\":\\\"0\\\",\\\"commonEventId:str\\\":\\\"Phone.StartApp('messagesApp')\\\",\\\"isOuterStart:b\\\":\\\"false\\\",\\\"alertSwitchId:i\\\":\\\"1\\\"}\",\"{\\\"id:str\\\":\\\"saveApp\\\",\\\"name:str\\\":\\\"เซฟเกม\\\",\\\"icon:str\\\":\\\"AppIcon_SaveGame\\\",\\\"visibleSwitchId:i\\\":\\\"0\\\",\\\"enabledSwitchId:i\\\":\\\"0\\\",\\\"commonEventId:str\\\":\\\"SceneManager.push(Scene_Save)\\\",\\\"isOuterStart:b\\\":\\\"false\\\",\\\"alertSwitchId:i\\\":\\\"0\\\"}\",\"{\\\"id:str\\\":\\\"loadApp\\\",\\\"name:str\\\":\\\"โหลดเกม\\\",\\\"icon:str\\\":\\\"AppIcon_LoadGame\\\",\\\"visibleSwitchId:i\\\":\\\"0\\\",\\\"enabledSwitchId:i\\\":\\\"0\\\",\\\"commonEventId:str\\\":\\\"SceneManager.push(Scene_Load)\\\",\\\"isOuterStart:b\\\":\\\"false\\\",\\\"alertSwitchId:i\\\":\\\"0\\\"}\",\"{\\\"id:str\\\":\\\"settingsApp\\\",\\\"name:str\\\":\\\"ตั้งค่า\\\",\\\"icon:str\\\":\\\"AppIcon_Settings\\\",\\\"visibleSwitchId:i\\\":\\\"0\\\",\\\"enabledSwitchId:i\\\":\\\"0\\\",\\\"commonEventId:str\\\":\\\"SceneManager.push(Scene_Options)\\\",\\\"isOuterStart:b\\\":\\\"false\\\",\\\"alertSwitchId:i\\\":\\\"0\\\"}\"]", "spacer|endHolder": "" } },
  { "name": "PKD_KeyCommands", "status": true, "description": "v1.0 - Call common event on keyboard key", "parameters": { "keyCommands:structA": "[]" } },
  { "name": "PKD_AmbientSound", "status": true, "description": "(v.1.0)[BASIC] Ambient Sound", "parameters": { "volumeMod": "60", "resetOnMapChange": "false" } },
  { "name": "PKD_MapEnhancer", "status": true, "description": "(v.1.0)[BASIC] Map Enhancer", "parameters": { "PKD_MapEnhancer": "", "openEditorKey": "F10", "editorHelpLanguageIndex:int": "0", "editorWindowSize:struct": "{\"width:int\":\"540\",\"height:int\":\"800\"}", "helpWindowSize:struct": "{\"width:int\":\"820\",\"height:int\":\"240\"}", "spacer|endHolder": "" } },
  { "name": "VoiceChat", "status": true, "description": "(v.2.1) Proximity Voice Chat — WebRTC P2P audio with distance-based volume", "parameters": { "maxHearDistance": "10", "muteKey": "m", "micVolume": "1.0" } },
  { "name": "ResolutionScale", "status": true, "description": "(v.1.0) Resolution Scaler — Scale game to fit height of device.", "parameters": { "mode": "inside" } }
];
