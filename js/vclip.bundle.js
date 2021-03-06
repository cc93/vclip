(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VClip"] = factory();
	else
		root["VClip"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1)
	__vue_script__ = __webpack_require__(5)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vue/vclip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-68d88f90/vclip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./vclip.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./vclip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n.vclip-container {\n    overflow: hidden;\n}\n\n.vclip-container-size {\n    position: relative;\n    width: 180px;\n    height: 300px;\n    margin: 0 auto;\n}\n\n.vclip-wrapper {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n.vclip-frame {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-align: center;\n}\n\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    props: {
	        class: {
	            type: String,
	            default: ''
	        },
	        play: {
	            type: Boolean,
	            default: true
	        },
	        fps: {
	            type: Number,
	            default: 3 },
	        loop: {
	            type: Boolean,
	            default: true
	        },
	        resize: {
	            type: Boolean,
	            default: false
	        },
	        playSection: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },

	        api: {
	            type: Object,
	            default: function _default() {
	                return {};
	            }
	        }

	    },
	    data: function data() {
	        return {
	            speed: 300,
	            eles: [],
	            frameWidth: 0,
	            frameHeight: 0,
	            totalFrames: 0,
	            currentFrame: 0,
	            lastFrame: 0,
	            frames: [],
	            playFrames: [],
	            playIndex: 0,
	            translateX: 0
	        };
	    },
	    methods: {
	        initData: function initData() {
	            this.speed = 1000 / this.fps;

	            this.eles = this.$els.wrapper.children;
	            this.totalFrames = this.eles.length;

	            this.frameWidth = this.$els.container.clientWidth;
	            this.frameHeight = this.$els.container.clientHeight;

	            if (this.playSection.length == 0) {
	                this.playSection = [1, this.totalFrames];
	            }
	            this.setPlayFrames(this.playSection);
	        },
	        setPlayFrames: function setPlayFrames(playSection) {
	            if (playSection.length == 1) {
	                this.playFrames[0] = playSection[0];
	            }
	            if (playSection.length == 2) {
	                for (var i = playSection[0]; i <= playSection[1]; i++) {
	                    this.playFrames.push(i);
	                }
	            }
	            if (playSection.length > 2) {
	                this.playFrames = playSection;
	            }
	        },
	        goFrame: function goFrame(framePage) {
	            if (framePage >= 1 && framePage <= this.totalFrames) {
	                this.currentFrame = framePage;
	                this.translateX = -(framePage - 1) * this.frameWidth;
	                this.$emit('on-frame-changed', this.currentFrame);
	            } else {
	                throw new Error('out of range!');
	            }
	        },
	        nextFrame: function nextFrame() {
	            if (this.currentFrame >= this.totalFrames) {
	                this.goFrame(1);
	            } else {
	                this.goFrame(this.currentFrame + 1);
	            }
	        },
	        prevFrame: function prevFrame() {
	            if (this.currentFrame <= 1) {
	                this.goFrame(this.totalFrames);
	            } else {
	                this.goFrame(this.currentFrame - 1);
	            }
	        },
	        startPlay: function startPlay() {
	            var me = this;
	            if (me.loop) {
	                me.intervalId = setInterval(function () {
	                    if (me.playIndex >= me.playFrames.length) {
	                        me.playIndex = 0;
	                    }
	                    me.goFrame(me.playFrames[me.playIndex]);
	                    me.playIndex++;
	                }, me.speed);
	            } else {
	                me.intervalId = setInterval(function () {
	                    if (me.playIndex >= me.playFrames.length) {
	                        clearInterval(me.intervalId);
	                        me.play = false;
	                        return;
	                    }
	                    me.goFrame(me.playFrames[me.playIndex]);
	                    me.playIndex++;
	                }, me.speed);
	            }
	            this.$emit('on-play-start', this.currentFrame);
	            console.log('on-play-start');
	            return true;
	        },
	        stopPlay: function stopPlay() {
	            if (this.intervalId) {
	                clearInterval(this.intervalId);
	            }
	            this.$emit('on-play-stop', this.currentFrame);
	            console.log('on-play-stop');
	            return true;
	        },
	        resizeContent: function resizeContent() {
	            var frameEles = null;
	            var maxWidth = 0,
	                maxHeight = 0,
	                ratio = 0;
	            var frameRatio = this.frameHeight / this.frameWidth;
	            var scale = 0,
	                newWidth = 0,
	                newHeight = 0;
	            for (var i = 0; i < this.totalFrames; i++) {
	                frameEles = this.eles[i].children;
	                maxWidth = 0;
	                maxHeight = 0;
	                ratio = 0;
	                for (var j = 0; j < frameEles.length; j++) {
	                    if (frameEles[j].clientWidth > maxWidth) {
	                        maxWidth = frameEles[j].clientWidth;
	                    }
	                    if (frameEles[j].clientHeight > maxHeight) {
	                        maxHeight = frameEles[j].clientHeight;
	                    }
	                }
	                ratio = maxHeight / maxWidth;
	                newWidth = this.frameWidth;
	                if (ratio > frameRatio) {
	                    newHeight = this.frameHeight;
	                    newWidth = newHeight / ratio;
	                } else {
	                    newWidth = this.frameWidth;
	                    newHeight = newWidth * ratio;
	                }
	                scale = newWidth / maxWidth;
	                this.eles[i].style.transform = 'scale(' + scale + ')';
	            }
	        },
	        exposeAPI: function exposeAPI() {
	            this.api.goFrame = this.goFrame;
	            this.api.nextFrame = this.nextFrame;
	            this.api.prevFrame = this.prevFrame;
	        }

	    },
	    ready: function ready() {
	        this.initData();
	        this.exposeAPI();
	        if (this.resize) {
	            var me = this;
	            window.addEventListener('load', function () {
	                me.resizeContent();
	            });
	        }
	        if (this.play) {
	            this.startPlay();
	        }
	    },
	    watch: {
	        'play': function play(val) {
	            if (val) {
	                this.startPlay();
	            } else {
	                this.stopPlay();
	            }
	            this.$emit('on-play-changed', this.play);
	        },
	        'fps': function fps(val) {
	            this.speed = 1000 / val;
	            if (this.play) {
	                this.stopPlay();
	                this.startPlay();
	            }
	            this.$emit('on-fps-changed', this.fps);
	        }
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div :class=\"['vclip-container',class == ''? 'vclip-container-size': class]\" v-el:container>\n    <div class=\"vclip-wrapper\"\n         v-el:wrapper\n         :style=\"{transform: 'translate3d(' + translateX + 'px, 0, 0)'}\"\n         >\n        <p> 这是控制台 </p>\n\n        <slot></slot>\n    </div>\n</div>\n";

/***/ }
/******/ ])
});
;