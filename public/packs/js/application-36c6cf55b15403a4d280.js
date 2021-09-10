/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"application": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"vendors~actioncable":"vendors~actioncable"}[chunkId]||chunkId) + "-" + {"vendors~actioncable":"a9a439982dea30932847"}[chunkId] + ".chunk.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/controllers sync recursive _controller\\.(js|ts)$":
/*!***************************************************************!*\
  !*** ./app/javascript/controllers sync _controller\.(js|ts)$ ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./hello_controller.js": "./app/javascript/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/controllers sync recursive _controller\\.(js|ts)$";

/***/ }),

/***/ "./app/javascript/controllers/hello_controller.js":
/*!********************************************************!*\
  !*** ./app/javascript/controllers/hello_controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = "Hello World!";
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);



/***/ }),

/***/ "./app/javascript/controllers/index.js":
/*!*********************************************!*\
  !*** ./app/javascript/controllers/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

var application = _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["Application"].start(); // Configure Stimulus development experience

application.warnings = true;
application.debug = false;
window.Stimulus = application; // Import and register all your controllers within this directory and all subdirectories
// Controller files must be named *_controller.js or *_controller.ts



var context = __webpack_require__("./app/javascript/controllers sync recursive _controller\\.(js|ts)$");

application.load(Object(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["definitionsFromContext"])(context));

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hotwired_turbo_rails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/turbo-rails */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/index.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var controllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! controllers */ "./app/javascript/controllers/index.js");




_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__["start"]();


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@hotwired/stimulus/dist/stimulus.js":
/*!**********************************************************!*\
  !*** ./node_modules/@hotwired/stimulus/dist/stimulus.js ***!
  \**********************************************************/
/*! exports provided: Application, AttributeObserver, Context, Controller, ElementObserver, IndexedMultimap, Multimap, StringMapObserver, TokenListObserver, ValueListObserver, add, defaultSchema, definitionsFromContext, del, fetch, identifierForContextKey, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return AttributeObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return ElementObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return IndexedMultimap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return Multimap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringMapObserver", function() { return StringMapObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return TokenListObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return ValueListObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return definitionsFromContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return identifierForContextKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return prune; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Stimulus 3.0.0-beta.1
Copyright © 2021 Basecamp, LLC
 */
var EventListener = /*#__PURE__*/function () {
  function EventListener(eventTarget, eventName, eventOptions) {
    _classCallCheck(this, EventListener);

    this.eventTarget = eventTarget;
    this.eventName = eventName;
    this.eventOptions = eventOptions;
    this.unorderedBindings = new Set();
  }

  _createClass(EventListener, [{
    key: "connect",
    value: function connect() {
      this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
    }
  }, {
    key: "bindingConnected",
    value: function bindingConnected(binding) {
      this.unorderedBindings.add(binding);
    }
  }, {
    key: "bindingDisconnected",
    value: function bindingDisconnected(binding) {
      this.unorderedBindings.delete(binding);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var extendedEvent = extendEvent(event);

      var _iterator = _createForOfIteratorHelper(this.bindings),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var binding = _step.value;

          if (extendedEvent.immediatePropagationStopped) {
            break;
          } else {
            binding.handleEvent(extendedEvent);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "bindings",
    get: function get() {
      return Array.from(this.unorderedBindings).sort(function (left, right) {
        var leftIndex = left.index,
            rightIndex = right.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    }
  }]);

  return EventListener;
}();

function extendEvent(event) {
  if ("immediatePropagationStopped" in event) {
    return event;
  } else {
    var _stopImmediatePropagation = event.stopImmediatePropagation;
    return Object.assign(event, {
      immediatePropagationStopped: false,
      stopImmediatePropagation: function stopImmediatePropagation() {
        this.immediatePropagationStopped = true;

        _stopImmediatePropagation.call(this);
      }
    });
  }
}

var Dispatcher = /*#__PURE__*/function () {
  function Dispatcher(application) {
    _classCallCheck(this, Dispatcher);

    this.application = application;
    this.eventListenerMaps = new Map();
    this.started = false;
  }

  _createClass(Dispatcher, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.eventListeners.forEach(function (eventListener) {
          return eventListener.connect();
        });
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        this.eventListeners.forEach(function (eventListener) {
          return eventListener.disconnect();
        });
      }
    }
  }, {
    key: "eventListeners",
    get: function get() {
      return Array.from(this.eventListenerMaps.values()).reduce(function (listeners, map) {
        return listeners.concat(Array.from(map.values()));
      }, []);
    }
  }, {
    key: "bindingConnected",
    value: function bindingConnected(binding) {
      this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    }
  }, {
    key: "bindingDisconnected",
    value: function bindingDisconnected(binding) {
      this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
    }
  }, {
    key: "handleError",
    value: function handleError(error, message) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.application.handleError(error, "Error ".concat(message), detail);
    }
  }, {
    key: "fetchEventListenerForBinding",
    value: function fetchEventListenerForBinding(binding) {
      var eventTarget = binding.eventTarget,
          eventName = binding.eventName,
          eventOptions = binding.eventOptions;
      return this.fetchEventListener(eventTarget, eventName, eventOptions);
    }
  }, {
    key: "fetchEventListener",
    value: function fetchEventListener(eventTarget, eventName, eventOptions) {
      var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      var cacheKey = this.cacheKey(eventName, eventOptions);
      var eventListener = eventListenerMap.get(cacheKey);

      if (!eventListener) {
        eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
        eventListenerMap.set(cacheKey, eventListener);
      }

      return eventListener;
    }
  }, {
    key: "createEventListener",
    value: function createEventListener(eventTarget, eventName, eventOptions) {
      var eventListener = new EventListener(eventTarget, eventName, eventOptions);

      if (this.started) {
        eventListener.connect();
      }

      return eventListener;
    }
  }, {
    key: "fetchEventListenerMapForEventTarget",
    value: function fetchEventListenerMapForEventTarget(eventTarget) {
      var eventListenerMap = this.eventListenerMaps.get(eventTarget);

      if (!eventListenerMap) {
        eventListenerMap = new Map();
        this.eventListenerMaps.set(eventTarget, eventListenerMap);
      }

      return eventListenerMap;
    }
  }, {
    key: "cacheKey",
    value: function cacheKey(eventName, eventOptions) {
      var parts = [eventName];
      Object.keys(eventOptions).sort().forEach(function (key) {
        parts.push("".concat(eventOptions[key] ? "" : "!").concat(key));
      });
      return parts.join(":");
    }
  }]);

  return Dispatcher;
}();

var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#([^:]+?))(:(.+))?$/;

function parseActionDescriptorString(descriptorString) {
  var source = descriptorString.trim();
  var matches = source.match(descriptorPattern) || [];
  return {
    eventTarget: parseEventTarget(matches[4]),
    eventName: matches[2],
    eventOptions: matches[9] ? parseEventOptions(matches[9]) : {},
    identifier: matches[5],
    methodName: matches[7]
  };
}

function parseEventTarget(eventTargetName) {
  if (eventTargetName == "window") {
    return window;
  } else if (eventTargetName == "document") {
    return document;
  }
}

function parseEventOptions(eventOptions) {
  return eventOptions.split(":").reduce(function (options, token) {
    return Object.assign(options, _defineProperty({}, token.replace(/^!/, ""), !/^!/.test(token)));
  }, {});
}

function stringifyEventTarget(eventTarget) {
  if (eventTarget == window) {
    return "window";
  } else if (eventTarget == document) {
    return "document";
  }
}

function camelize(value) {
  return value.replace(/(?:[_-])([a-z0-9])/g, function (_, char) {
    return char.toUpperCase();
  });
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function dasherize(value) {
  return value.replace(/([A-Z])/g, function (_, char) {
    return "-".concat(char.toLowerCase());
  });
}

function tokenize(value) {
  return value.trim().split(/\s+/).filter(function (content) {
    return content.length;
  });
}

var Action = /*#__PURE__*/function () {
  function Action(element, index, descriptor) {
    _classCallCheck(this, Action);

    this.element = element;
    this.index = index;
    this.eventTarget = descriptor.eventTarget || element;
    this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
    this.eventOptions = descriptor.eventOptions || {};
    this.identifier = descriptor.identifier || error("missing identifier");
    this.methodName = descriptor.methodName || error("missing method name");
  }

  _createClass(Action, [{
    key: "toString",
    value: function toString() {
      var eventNameSuffix = this.eventTargetName ? "@".concat(this.eventTargetName) : "";
      return "".concat(this.eventName).concat(eventNameSuffix, "->").concat(this.identifier, "#").concat(this.methodName);
    }
  }, {
    key: "params",
    get: function get() {
      if (this.eventTarget instanceof Element) {
        return this.getParamsFromEventTargetAttributes(this.eventTarget);
      } else {
        return {};
      }
    }
  }, {
    key: "getParamsFromEventTargetAttributes",
    value: function getParamsFromEventTargetAttributes(eventTarget) {
      var params = {};
      var pattern = new RegExp("^data-".concat(this.identifier, "-(.+)-param$"));
      var attributes = Array.from(eventTarget.attributes);
      attributes.forEach(function (_ref) {
        var name = _ref.name,
            value = _ref.value;
        var match = name.match(pattern);
        var key = match && match[1];

        if (key) {
          Object.assign(params, _defineProperty({}, camelize(key), typecast(value)));
        }
      });
      return params;
    }
  }, {
    key: "eventTargetName",
    get: function get() {
      return stringifyEventTarget(this.eventTarget);
    }
  }], [{
    key: "forToken",
    value: function forToken(token) {
      return new this(token.element, token.index, parseActionDescriptorString(token.content));
    }
  }]);

  return Action;
}();

var defaultEventNames = {
  "a": function a(e) {
    return "click";
  },
  "button": function button(e) {
    return "click";
  },
  "form": function form(e) {
    return "submit";
  },
  "input": function input(e) {
    return e.getAttribute("type") == "submit" ? "click" : "input";
  },
  "select": function select(e) {
    return "change";
  },
  "textarea": function textarea(e) {
    return "input";
  }
};

function getDefaultEventNameForElement(element) {
  var tagName = element.tagName.toLowerCase();

  if (tagName in defaultEventNames) {
    return defaultEventNames[tagName](element);
  }
}

function error(message) {
  throw new Error(message);
}

function typecast(value) {
  try {
    return JSON.parse(value);
  } catch (o_O) {
    return value;
  }
}

var Binding = /*#__PURE__*/function () {
  function Binding(context, action) {
    _classCallCheck(this, Binding);

    this.context = context;
    this.action = action;
  }

  _createClass(Binding, [{
    key: "index",
    get: function get() {
      return this.action.index;
    }
  }, {
    key: "eventTarget",
    get: function get() {
      return this.action.eventTarget;
    }
  }, {
    key: "eventOptions",
    get: function get() {
      return this.action.eventOptions;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.context.identifier;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (this.willBeInvokedByEvent(event)) {
        this.invokeWithEvent(event);
      }
    }
  }, {
    key: "eventName",
    get: function get() {
      return this.action.eventName;
    }
  }, {
    key: "method",
    get: function get() {
      var method = this.controller[this.methodName];

      if (typeof method == "function") {
        return method;
      }

      throw new Error("Action \"".concat(this.action, "\" references undefined method \"").concat(this.methodName, "\""));
    }
  }, {
    key: "invokeWithEvent",
    value: function invokeWithEvent(event) {
      var target = event.target,
          currentTarget = event.currentTarget;

      try {
        var params = this.action.params;
        var actionEvent = Object.assign(event, {
          params: params
        });
        this.method.call(this.controller, actionEvent);
        this.context.logDebugActivity(this.methodName, {
          event: event,
          target: target,
          currentTarget: currentTarget,
          action: this.methodName
        });
      } catch (error) {
        var identifier = this.identifier,
            controller = this.controller,
            element = this.element,
            index = this.index;
        var detail = {
          identifier: identifier,
          controller: controller,
          element: element,
          index: index,
          event: event
        };
        this.context.handleError(error, "invoking action \"".concat(this.action, "\""), detail);
      }
    }
  }, {
    key: "willBeInvokedByEvent",
    value: function willBeInvokedByEvent(event) {
      var eventTarget = event.target;

      if (this.element === eventTarget) {
        return true;
      } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
        return this.scope.containsElement(eventTarget);
      } else {
        return this.scope.containsElement(this.action.element);
      }
    }
  }, {
    key: "controller",
    get: function get() {
      return this.context.controller;
    }
  }, {
    key: "methodName",
    get: function get() {
      return this.action.methodName;
    }
  }, {
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }]);

  return Binding;
}();

var ElementObserver = /*#__PURE__*/function () {
  function ElementObserver(element, delegate) {
    var _this = this;

    _classCallCheck(this, ElementObserver);

    this.element = element;
    this.started = false;
    this.delegate = delegate;
    this.elements = new Set();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this.processMutations(mutations);
    });
  }

  _createClass(ElementObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, {
          attributes: true,
          childList: true,
          subtree: true
        });
        this.refresh();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (this.started) {
        var matches = new Set(this.matchElementsInTree());

        for (var _i = 0, _Array$from = Array.from(this.elements); _i < _Array$from.length; _i++) {
          var element = _Array$from[_i];

          if (!matches.has(element)) {
            this.removeElement(element);
          }
        }

        for (var _i2 = 0, _Array$from2 = Array.from(matches); _i2 < _Array$from2.length; _i2++) {
          var _element = _Array$from2[_i2];
          this.addElement(_element);
        }
      }
    }
  }, {
    key: "processMutations",
    value: function processMutations(mutations) {
      if (this.started) {
        var _iterator2 = _createForOfIteratorHelper(mutations),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var mutation = _step2.value;
            this.processMutation(mutation);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }, {
    key: "processMutation",
    value: function processMutation(mutation) {
      if (mutation.type == "attributes") {
        this.processAttributeChange(mutation.target, mutation.attributeName);
      } else if (mutation.type == "childList") {
        this.processRemovedNodes(mutation.removedNodes);
        this.processAddedNodes(mutation.addedNodes);
      }
    }
  }, {
    key: "processAttributeChange",
    value: function processAttributeChange(node, attributeName) {
      var element = node;

      if (this.elements.has(element)) {
        if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
          this.delegate.elementAttributeChanged(element, attributeName);
        } else {
          this.removeElement(element);
        }
      } else if (this.matchElement(element)) {
        this.addElement(element);
      }
    }
  }, {
    key: "processRemovedNodes",
    value: function processRemovedNodes(nodes) {
      for (var _i3 = 0, _Array$from3 = Array.from(nodes); _i3 < _Array$from3.length; _i3++) {
        var node = _Array$from3[_i3];
        var element = this.elementFromNode(node);

        if (element) {
          this.processTree(element, this.removeElement);
        }
      }
    }
  }, {
    key: "processAddedNodes",
    value: function processAddedNodes(nodes) {
      for (var _i4 = 0, _Array$from4 = Array.from(nodes); _i4 < _Array$from4.length; _i4++) {
        var node = _Array$from4[_i4];
        var element = this.elementFromNode(node);

        if (element && this.elementIsActive(element)) {
          this.processTree(element, this.addElement);
        }
      }
    }
  }, {
    key: "matchElement",
    value: function matchElement(element) {
      return this.delegate.matchElement(element);
    }
  }, {
    key: "matchElementsInTree",
    value: function matchElementsInTree() {
      var tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;
      return this.delegate.matchElementsInTree(tree);
    }
  }, {
    key: "processTree",
    value: function processTree(tree, processor) {
      var _iterator3 = _createForOfIteratorHelper(this.matchElementsInTree(tree)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var element = _step3.value;
          processor.call(this, element);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "elementFromNode",
    value: function elementFromNode(node) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        return node;
      }
    }
  }, {
    key: "elementIsActive",
    value: function elementIsActive(element) {
      if (element.isConnected != this.element.isConnected) {
        return false;
      } else {
        return this.element.contains(element);
      }
    }
  }, {
    key: "addElement",
    value: function addElement(element) {
      if (!this.elements.has(element)) {
        if (this.elementIsActive(element)) {
          this.elements.add(element);

          if (this.delegate.elementMatched) {
            this.delegate.elementMatched(element);
          }
        }
      }
    }
  }, {
    key: "removeElement",
    value: function removeElement(element) {
      if (this.elements.has(element)) {
        this.elements.delete(element);

        if (this.delegate.elementUnmatched) {
          this.delegate.elementUnmatched(element);
        }
      }
    }
  }]);

  return ElementObserver;
}();

var AttributeObserver = /*#__PURE__*/function () {
  function AttributeObserver(element, attributeName, delegate) {
    _classCallCheck(this, AttributeObserver);

    this.attributeName = attributeName;
    this.delegate = delegate;
    this.elementObserver = new ElementObserver(element, this);
  }

  _createClass(AttributeObserver, [{
    key: "element",
    get: function get() {
      return this.elementObserver.element;
    }
  }, {
    key: "selector",
    get: function get() {
      return "[".concat(this.attributeName, "]");
    }
  }, {
    key: "start",
    value: function start() {
      this.elementObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.elementObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.elementObserver.refresh();
    }
  }, {
    key: "started",
    get: function get() {
      return this.elementObserver.started;
    }
  }, {
    key: "matchElement",
    value: function matchElement(element) {
      return element.hasAttribute(this.attributeName);
    }
  }, {
    key: "matchElementsInTree",
    value: function matchElementsInTree(tree) {
      var match = this.matchElement(tree) ? [tree] : [];
      var matches = Array.from(tree.querySelectorAll(this.selector));
      return match.concat(matches);
    }
  }, {
    key: "elementMatched",
    value: function elementMatched(element) {
      if (this.delegate.elementMatchedAttribute) {
        this.delegate.elementMatchedAttribute(element, this.attributeName);
      }
    }
  }, {
    key: "elementUnmatched",
    value: function elementUnmatched(element) {
      if (this.delegate.elementUnmatchedAttribute) {
        this.delegate.elementUnmatchedAttribute(element, this.attributeName);
      }
    }
  }, {
    key: "elementAttributeChanged",
    value: function elementAttributeChanged(element, attributeName) {
      if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
        this.delegate.elementAttributeValueChanged(element, attributeName);
      }
    }
  }]);

  return AttributeObserver;
}();

var StringMapObserver = /*#__PURE__*/function () {
  function StringMapObserver(element, delegate) {
    var _this2 = this;

    _classCallCheck(this, StringMapObserver);

    this.element = element;
    this.delegate = delegate;
    this.started = false;
    this.stringMap = new Map();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this2.processMutations(mutations);
    });
  }

  _createClass(StringMapObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, {
          attributes: true,
          attributeOldValue: true
        });
        this.refresh();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (this.started) {
        var _iterator4 = _createForOfIteratorHelper(this.knownAttributeNames),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var attributeName = _step4.value;
            this.refreshAttribute(attributeName, null);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }
  }, {
    key: "processMutations",
    value: function processMutations(mutations) {
      if (this.started) {
        var _iterator5 = _createForOfIteratorHelper(mutations),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var mutation = _step5.value;
            this.processMutation(mutation);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  }, {
    key: "processMutation",
    value: function processMutation(mutation) {
      var attributeName = mutation.attributeName;

      if (attributeName) {
        this.refreshAttribute(attributeName, mutation.oldValue);
      }
    }
  }, {
    key: "refreshAttribute",
    value: function refreshAttribute(attributeName, oldValue) {
      var key = this.delegate.getStringMapKeyForAttribute(attributeName);

      if (key != null) {
        if (!this.stringMap.has(attributeName)) {
          this.stringMapKeyAdded(key, attributeName);
        }

        var value = this.element.getAttribute(attributeName);

        if (this.stringMap.get(attributeName) != value) {
          this.stringMapValueChanged(value, key, oldValue);
        }

        if (value == null) {
          var _oldValue = this.stringMap.get(attributeName);

          this.stringMap.delete(attributeName);
          if (_oldValue) this.stringMapKeyRemoved(key, attributeName, _oldValue);
        } else {
          this.stringMap.set(attributeName, value);
        }
      }
    }
  }, {
    key: "stringMapKeyAdded",
    value: function stringMapKeyAdded(key, attributeName) {
      if (this.delegate.stringMapKeyAdded) {
        this.delegate.stringMapKeyAdded(key, attributeName);
      }
    }
  }, {
    key: "stringMapValueChanged",
    value: function stringMapValueChanged(value, key, oldValue) {
      if (this.delegate.stringMapValueChanged) {
        this.delegate.stringMapValueChanged(value, key, oldValue);
      }
    }
  }, {
    key: "stringMapKeyRemoved",
    value: function stringMapKeyRemoved(key, attributeName, oldValue) {
      if (this.delegate.stringMapKeyRemoved) {
        this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
      }
    }
  }, {
    key: "knownAttributeNames",
    get: function get() {
      return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    }
  }, {
    key: "currentAttributeNames",
    get: function get() {
      return Array.from(this.element.attributes).map(function (attribute) {
        return attribute.name;
      });
    }
  }, {
    key: "recordedAttributeNames",
    get: function get() {
      return Array.from(this.stringMap.keys());
    }
  }]);

  return StringMapObserver;
}();

function _add(map, key, value) {
  fetch(map, key).add(value);
}

function del(map, key, value) {
  fetch(map, key).delete(value);
  prune(map, key);
}

function fetch(map, key) {
  var values = map.get(key);

  if (!values) {
    values = new Set();
    map.set(key, values);
  }

  return values;
}

function prune(map, key) {
  var values = map.get(key);

  if (values != null && values.size == 0) {
    map.delete(key);
  }
}

var Multimap = /*#__PURE__*/function () {
  function Multimap() {
    _classCallCheck(this, Multimap);

    this.valuesByKey = new Map();
  }

  _createClass(Multimap, [{
    key: "keys",
    get: function get() {
      return Array.from(this.valuesByKey.keys());
    }
  }, {
    key: "values",
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (values, set) {
        return values.concat(Array.from(set));
      }, []);
    }
  }, {
    key: "size",
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (size, set) {
        return size + set.size;
      }, 0);
    }
  }, {
    key: "add",
    value: function add(key, value) {
      _add(this.valuesByKey, key, value);
    }
  }, {
    key: "delete",
    value: function _delete(key, value) {
      del(this.valuesByKey, key, value);
    }
  }, {
    key: "has",
    value: function has(key, value) {
      var values = this.valuesByKey.get(key);
      return values != null && values.has(value);
    }
  }, {
    key: "hasKey",
    value: function hasKey(key) {
      return this.valuesByKey.has(key);
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      var sets = Array.from(this.valuesByKey.values());
      return sets.some(function (set) {
        return set.has(value);
      });
    }
  }, {
    key: "getValuesForKey",
    value: function getValuesForKey(key) {
      var values = this.valuesByKey.get(key);
      return values ? Array.from(values) : [];
    }
  }, {
    key: "getKeysForValue",
    value: function getKeysForValue(value) {
      return Array.from(this.valuesByKey).filter(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            values = _ref3[1];

        return values.has(value);
      }).map(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            key = _ref5[0],
            values = _ref5[1];

        return key;
      });
    }
  }]);

  return Multimap;
}();

var IndexedMultimap = /*#__PURE__*/function (_Multimap) {
  _inherits(IndexedMultimap, _Multimap);

  var _super = _createSuper(IndexedMultimap);

  function IndexedMultimap() {
    var _this3;

    _classCallCheck(this, IndexedMultimap);

    _this3 = _super.call(this);
    _this3.keysByValue = new Map();
    return _this3;
  }

  _createClass(IndexedMultimap, [{
    key: "values",
    get: function get() {
      return Array.from(this.keysByValue.keys());
    }
  }, {
    key: "add",
    value: function add(key, value) {
      _get(_getPrototypeOf(IndexedMultimap.prototype), "add", this).call(this, key, value);

      _add(this.keysByValue, value, key);
    }
  }, {
    key: "delete",
    value: function _delete(key, value) {
      _get(_getPrototypeOf(IndexedMultimap.prototype), "delete", this).call(this, key, value);

      del(this.keysByValue, value, key);
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      return this.keysByValue.has(value);
    }
  }, {
    key: "getKeysForValue",
    value: function getKeysForValue(value) {
      var set = this.keysByValue.get(value);
      return set ? Array.from(set) : [];
    }
  }]);

  return IndexedMultimap;
}(Multimap);

var TokenListObserver = /*#__PURE__*/function () {
  function TokenListObserver(element, attributeName, delegate) {
    _classCallCheck(this, TokenListObserver);

    this.attributeObserver = new AttributeObserver(element, attributeName, this);
    this.delegate = delegate;
    this.tokensByElement = new Multimap();
  }

  _createClass(TokenListObserver, [{
    key: "started",
    get: function get() {
      return this.attributeObserver.started;
    }
  }, {
    key: "start",
    value: function start() {
      this.attributeObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.attributeObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.attributeObserver.refresh();
    }
  }, {
    key: "element",
    get: function get() {
      return this.attributeObserver.element;
    }
  }, {
    key: "attributeName",
    get: function get() {
      return this.attributeObserver.attributeName;
    }
  }, {
    key: "elementMatchedAttribute",
    value: function elementMatchedAttribute(element) {
      this.tokensMatched(this.readTokensForElement(element));
    }
  }, {
    key: "elementAttributeValueChanged",
    value: function elementAttributeValueChanged(element) {
      var _this$refreshTokensFo = this.refreshTokensForElement(element),
          _this$refreshTokensFo2 = _slicedToArray(_this$refreshTokensFo, 2),
          unmatchedTokens = _this$refreshTokensFo2[0],
          matchedTokens = _this$refreshTokensFo2[1];

      this.tokensUnmatched(unmatchedTokens);
      this.tokensMatched(matchedTokens);
    }
  }, {
    key: "elementUnmatchedAttribute",
    value: function elementUnmatchedAttribute(element) {
      this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    }
  }, {
    key: "tokensMatched",
    value: function tokensMatched(tokens) {
      var _this4 = this;

      tokens.forEach(function (token) {
        return _this4.tokenMatched(token);
      });
    }
  }, {
    key: "tokensUnmatched",
    value: function tokensUnmatched(tokens) {
      var _this5 = this;

      tokens.forEach(function (token) {
        return _this5.tokenUnmatched(token);
      });
    }
  }, {
    key: "tokenMatched",
    value: function tokenMatched(token) {
      this.delegate.tokenMatched(token);
      this.tokensByElement.add(token.element, token);
    }
  }, {
    key: "tokenUnmatched",
    value: function tokenUnmatched(token) {
      this.delegate.tokenUnmatched(token);
      this.tokensByElement.delete(token.element, token);
    }
  }, {
    key: "refreshTokensForElement",
    value: function refreshTokensForElement(element) {
      var previousTokens = this.tokensByElement.getValuesForKey(element);
      var currentTokens = this.readTokensForElement(element);
      var firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            previousToken = _ref7[0],
            currentToken = _ref7[1];

        return !tokensAreEqual(previousToken, currentToken);
      });

      if (firstDifferingIndex == -1) {
        return [[], []];
      } else {
        return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
      }
    }
  }, {
    key: "readTokensForElement",
    value: function readTokensForElement(element) {
      var attributeName = this.attributeName;
      var tokenString = element.getAttribute(attributeName) || "";
      return parseTokenString(tokenString, element, attributeName);
    }
  }]);

  return TokenListObserver;
}();

function parseTokenString(tokenString, element, attributeName) {
  return tokenString.trim().split(/\s+/).filter(function (content) {
    return content.length;
  }).map(function (content, index) {
    return {
      element: element,
      attributeName: attributeName,
      content: content,
      index: index
    };
  });
}

function zip(left, right) {
  var length = Math.max(left.length, right.length);
  return Array.from({
    length: length
  }, function (_, index) {
    return [left[index], right[index]];
  });
}

function tokensAreEqual(left, right) {
  return left && right && left.index == right.index && left.content == right.content;
}

var ValueListObserver = /*#__PURE__*/function () {
  function ValueListObserver(element, attributeName, delegate) {
    _classCallCheck(this, ValueListObserver);

    this.tokenListObserver = new TokenListObserver(element, attributeName, this);
    this.delegate = delegate;
    this.parseResultsByToken = new WeakMap();
    this.valuesByTokenByElement = new WeakMap();
  }

  _createClass(ValueListObserver, [{
    key: "started",
    get: function get() {
      return this.tokenListObserver.started;
    }
  }, {
    key: "start",
    value: function start() {
      this.tokenListObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.tokenListObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.tokenListObserver.refresh();
    }
  }, {
    key: "element",
    get: function get() {
      return this.tokenListObserver.element;
    }
  }, {
    key: "attributeName",
    get: function get() {
      return this.tokenListObserver.attributeName;
    }
  }, {
    key: "tokenMatched",
    value: function tokenMatched(token) {
      var element = token.element;

      var _this$fetchParseResul = this.fetchParseResultForToken(token),
          value = _this$fetchParseResul.value;

      if (value) {
        this.fetchValuesByTokenForElement(element).set(token, value);
        this.delegate.elementMatchedValue(element, value);
      } else {
        this.delegate.elementMatchedNoValue(token);
      }
    }
  }, {
    key: "tokenUnmatched",
    value: function tokenUnmatched(token) {
      var element = token.element;

      var _this$fetchParseResul2 = this.fetchParseResultForToken(token),
          value = _this$fetchParseResul2.value;

      if (value) {
        this.fetchValuesByTokenForElement(element).delete(token);
        this.delegate.elementUnmatchedValue(element, value);
      }
    }
  }, {
    key: "fetchParseResultForToken",
    value: function fetchParseResultForToken(token) {
      var parseResult = this.parseResultsByToken.get(token);

      if (!parseResult) {
        parseResult = this.parseToken(token);
        this.parseResultsByToken.set(token, parseResult);
      }

      return parseResult;
    }
  }, {
    key: "fetchValuesByTokenForElement",
    value: function fetchValuesByTokenForElement(element) {
      var valuesByToken = this.valuesByTokenByElement.get(element);

      if (!valuesByToken) {
        valuesByToken = new Map();
        this.valuesByTokenByElement.set(element, valuesByToken);
      }

      return valuesByToken;
    }
  }, {
    key: "parseToken",
    value: function parseToken(token) {
      try {
        var value = this.delegate.parseValueForToken(token);
        return {
          value: value
        };
      } catch (error) {
        return {
          error: error
        };
      }
    }
  }]);

  return ValueListObserver;
}();

var BindingObserver = /*#__PURE__*/function () {
  function BindingObserver(context, delegate) {
    _classCallCheck(this, BindingObserver);

    this.context = context;
    this.delegate = delegate;
    this.bindingsByAction = new Map();
  }

  _createClass(BindingObserver, [{
    key: "start",
    value: function start() {
      if (!this.valueListObserver) {
        this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
        this.valueListObserver.start();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.valueListObserver) {
        this.valueListObserver.stop();
        delete this.valueListObserver;
        this.disconnectAllActions();
      }
    }
  }, {
    key: "element",
    get: function get() {
      return this.context.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.context.identifier;
    }
  }, {
    key: "actionAttribute",
    get: function get() {
      return this.schema.actionAttribute;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.context.schema;
    }
  }, {
    key: "bindings",
    get: function get() {
      return Array.from(this.bindingsByAction.values());
    }
  }, {
    key: "connectAction",
    value: function connectAction(action) {
      var binding = new Binding(this.context, action);
      var controller = binding.context.controller;
      var method = controller[action.methodName];
      this.bindingsByAction.set(action, binding);
      this.delegate.bindingConnected(binding);

      if (typeof method != "function") {
        this.context.handleWarning("Action \"".concat(action.toString(), "\" references undefined method \"").concat(action.methodName, "\" on controller \"").concat(action.identifier, "\""), "connecting action \"".concat(action.toString(), "\""));
      }
    }
  }, {
    key: "disconnectAction",
    value: function disconnectAction(action) {
      var binding = this.bindingsByAction.get(action);

      if (binding) {
        this.bindingsByAction.delete(action);
        this.delegate.bindingDisconnected(binding);
      }
    }
  }, {
    key: "disconnectAllActions",
    value: function disconnectAllActions() {
      var _this6 = this;

      this.bindings.forEach(function (binding) {
        return _this6.delegate.bindingDisconnected(binding);
      });
      this.bindingsByAction.clear();
    }
  }, {
    key: "parseValueForToken",
    value: function parseValueForToken(token) {
      var action = Action.forToken(token);

      if (action.identifier == this.identifier) {
        return action;
      }
    }
  }, {
    key: "elementMatchedValue",
    value: function elementMatchedValue(element, action) {
      this.connectAction(action);
    }
  }, {
    key: "elementUnmatchedValue",
    value: function elementUnmatchedValue(element, action) {
      this.disconnectAction(action);
    }
  }, {
    key: "elementMatchedNoValue",
    value: function elementMatchedNoValue(token) {
      var action = Action.forToken(token);
      this.context.handleWarning("Action \"".concat(token.content, "\" references undefined controller \"").concat(action.identifier, "\""), "connecting action \"".concat(token.content, "\""));
    }
  }]);

  return BindingObserver;
}();

function readInheritableStaticArrayValues(constructor, propertyName) {
  var ancestors = getAncestorsForConstructor(constructor);
  return Array.from(ancestors.reduce(function (values, constructor) {
    getOwnStaticArrayValues(constructor, propertyName).forEach(function (name) {
      return values.add(name);
    });
    return values;
  }, new Set()));
}

function readInheritableStaticObjectPairs(constructor, propertyName) {
  var ancestors = getAncestorsForConstructor(constructor);
  return ancestors.reduce(function (pairs, constructor) {
    pairs.push.apply(pairs, _toConsumableArray(getOwnStaticObjectPairs(constructor, propertyName)));
    return pairs;
  }, []);
}

function getAncestorsForConstructor(constructor) {
  var ancestors = [];

  while (constructor) {
    ancestors.push(constructor);
    constructor = Object.getPrototypeOf(constructor);
  }

  return ancestors.reverse();
}

function getOwnStaticArrayValues(constructor, propertyName) {
  var definition = constructor[propertyName];
  return Array.isArray(definition) ? definition : [];
}

function getOwnStaticObjectPairs(constructor, propertyName) {
  var definition = constructor[propertyName];
  return definition ? Object.keys(definition).map(function (key) {
    return [key, definition[key]];
  }) : [];
}

var TargetGuide = /*#__PURE__*/function () {
  function TargetGuide(scope, controller) {
    _classCallCheck(this, TargetGuide);

    this.scope = scope;
    this.controller = controller;
    this.definedTargets = readInheritableStaticArrayValues(this.controller.constructor, "targets");
    this.searchForUndefinedTargets();
  }

  _createClass(TargetGuide, [{
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "targets",
    get: function get() {
      return this.scope.targets;
    }
  }, {
    key: "registeredControllers",
    get: function get() {
      return this.controller.application.router.modules.map(function (c) {
        return c.identifier;
      });
    }
  }, {
    key: "controllerRegistered",
    value: function controllerRegistered(controllerName) {
      return this.registeredControllers.includes(controllerName);
    }
  }, {
    key: "targetDefined",
    value: function targetDefined(targetName) {
      return this.definedTargets.includes(targetName);
    }
  }, {
    key: "getAllTargets",
    value: function getAllTargets(element) {
      var _this7 = this;

      var attribute = "data-".concat(this.identifier, "-target");
      var selector = "[".concat(attribute, "]");
      return Array.from(element.querySelectorAll(selector)).map(function (element) {
        var target = element.getAttribute(attribute);
        return {
          identifier: _this7.identifier,
          target: target,
          element: element,
          attribute: attribute,
          legacy: false
        };
      });
    }
  }, {
    key: "getAllLegacyTargets",
    value: function getAllLegacyTargets(element) {
      var attribute = "data-target";
      var selector = "[".concat(attribute, "]");
      return Array.from(element.querySelectorAll(selector)).map(function (element) {
        var value = element.getAttribute(attribute);
        var parts = value ? value.split(".") : [];
        return {
          identifier: parts[0],
          target: parts[1],
          element: element,
          attribute: attribute,
          legacy: true
        };
      });
    }
  }, {
    key: "searchForUndefinedTargets",
    value: function searchForUndefinedTargets() {
      var _this8 = this;

      var element = this.scope.element;
      var targets = [].concat(_toConsumableArray(this.getAllTargets(element)), _toConsumableArray(this.getAllLegacyTargets(element)));
      targets.forEach(function (descriptor) {
        var identifier = descriptor.identifier,
            attribute = descriptor.attribute,
            target = descriptor.target,
            legacy = descriptor.legacy,
            element = descriptor.element;

        if (identifier && target) {
          _this8.handleWarningForUndefinedTarget(descriptor);
        } else if (identifier && !target) {
          _this8.controller.context.handleWarning("The \"".concat(attribute, "\" attribute of the Element doesn't include a target. Please specify a target for the \"").concat(identifier, "\" controller."), "connecting target for \"".concat(identifier, "\""), {
            identifier: identifier,
            target: target,
            attribute: attribute,
            element: element
          });
        } else if (legacy && !target) {
          _this8.controller.context.handleWarning("The \"".concat(attribute, "\" attribute of the Element doesn't include a value. Please specify a controller and target value in the right format."), "connecting target", {
            identifier: identifier,
            target: target,
            attribute: attribute,
            element: element
          });
        }
      });
    }
  }, {
    key: "handleWarningForUndefinedTarget",
    value: function handleWarningForUndefinedTarget(descriptor) {
      var identifier = descriptor.identifier,
          target = descriptor.target,
          element = descriptor.element,
          attribute = descriptor.attribute;

      if (identifier === this.identifier) {
        if (!this.targetDefined(target)) {
          this.controller.context.handleWarning("Element references undefined target \"".concat(target, "\" for controller \"").concat(identifier, "\". Make sure you defined the target \"").concat(target, "\" in the \"static targets\" array of your controller."), "connecting target \"".concat(identifier, ".").concat(target, "\""), {
            identifier: identifier,
            target: target,
            element: element,
            attribute: attribute
          });
        }
      } else {
        if (!this.controllerRegistered(identifier)) {
          this.controller.context.handleWarning("Target \"".concat(target, "\" references undefined controller \"").concat(identifier, "\". Make sure you registered the \"").concat(identifier, "\" controller."), "connecting target \"".concat(identifier, ".").concat(target, "\""), {
            identifier: identifier,
            target: target,
            element: element,
            attribute: attribute
          });
        }
      }
    }
  }]);

  return TargetGuide;
}();

var ValueObserver = /*#__PURE__*/function () {
  function ValueObserver(context, receiver) {
    _classCallCheck(this, ValueObserver);

    this.context = context;
    this.receiver = receiver;
    this.stringMapObserver = new StringMapObserver(this.element, this);
    this.valueDescriptorMap = this.controller.valueDescriptorMap;
    this.invokeChangedCallbacksForDefaultValues();
  }

  _createClass(ValueObserver, [{
    key: "start",
    value: function start() {
      this.stringMapObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.stringMapObserver.stop();
    }
  }, {
    key: "element",
    get: function get() {
      return this.context.element;
    }
  }, {
    key: "controller",
    get: function get() {
      return this.context.controller;
    }
  }, {
    key: "getStringMapKeyForAttribute",
    value: function getStringMapKeyForAttribute(attributeName) {
      if (attributeName in this.valueDescriptorMap) {
        return this.valueDescriptorMap[attributeName].name;
      }
    }
  }, {
    key: "stringMapKeyAdded",
    value: function stringMapKeyAdded(key, attributeName) {
      var descriptor = this.valueDescriptorMap[attributeName];

      if (!this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
      }
    }
  }, {
    key: "stringMapValueChanged",
    value: function stringMapValueChanged(value, name, oldValue) {
      var descriptor = this.valueDescriptorNameMap[name];
      if (value === null) return;

      if (oldValue === null) {
        oldValue = descriptor.writer(descriptor.defaultValue);
      }

      this.invokeChangedCallback(name, value, oldValue);
    }
  }, {
    key: "stringMapKeyRemoved",
    value: function stringMapKeyRemoved(key, attributeName, oldValue) {
      var descriptor = this.valueDescriptorNameMap[key];

      if (this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
      } else {
        this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
      }
    }
  }, {
    key: "invokeChangedCallbacksForDefaultValues",
    value: function invokeChangedCallbacksForDefaultValues() {
      var _iterator6 = _createForOfIteratorHelper(this.valueDescriptors),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _ref9 = _step6.value;
          var key = _ref9.key;
          var name = _ref9.name;
          var defaultValue = _ref9.defaultValue;
          var writer = _ref9.writer;

          if (defaultValue != undefined && !this.controller.data.has(key)) {
            this.invokeChangedCallback(name, writer(defaultValue), undefined);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "invokeChangedCallback",
    value: function invokeChangedCallback(name, rawValue, rawOldValue) {
      var changedMethodName = "".concat(name, "Changed");
      var changedMethod = this.receiver[changedMethodName];

      if (typeof changedMethod == "function") {
        var descriptor = this.valueDescriptorNameMap[name];
        var value = descriptor.reader(rawValue);
        var oldValue = rawOldValue;

        if (rawOldValue) {
          oldValue = descriptor.reader(rawOldValue);
        }

        changedMethod.call(this.receiver, value, oldValue);
      }
    }
  }, {
    key: "valueDescriptors",
    get: function get() {
      var valueDescriptorMap = this.valueDescriptorMap;
      return Object.keys(valueDescriptorMap).map(function (key) {
        return valueDescriptorMap[key];
      });
    }
  }, {
    key: "valueDescriptorNameMap",
    get: function get() {
      var _this9 = this;

      var descriptors = {};
      Object.keys(this.valueDescriptorMap).forEach(function (key) {
        var descriptor = _this9.valueDescriptorMap[key];
        descriptors[descriptor.name] = descriptor;
      });
      return descriptors;
    }
  }, {
    key: "hasValue",
    value: function hasValue(attributeName) {
      var descriptor = this.valueDescriptorNameMap[attributeName];
      var hasMethodName = "has".concat(capitalize(descriptor.name));
      return this.receiver[hasMethodName];
    }
  }]);

  return ValueObserver;
}();

var TargetObserver = /*#__PURE__*/function () {
  function TargetObserver(context, delegate) {
    _classCallCheck(this, TargetObserver);

    this.context = context;
    this.delegate = delegate;
    this.targetsByName = new Multimap();
  }

  _createClass(TargetObserver, [{
    key: "start",
    value: function start() {
      if (!this.tokenListObserver) {
        this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
        this.tokenListObserver.start();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.tokenListObserver) {
        this.disconnectAllTargets();
        this.tokenListObserver.stop();
        delete this.tokenListObserver;
      }
    }
  }, {
    key: "tokenMatched",
    value: function tokenMatched(_ref10) {
      var element = _ref10.element,
          name = _ref10.content;

      if (this.scope.containsElement(element)) {
        this.connectTarget(element, name);
      }
    }
  }, {
    key: "tokenUnmatched",
    value: function tokenUnmatched(_ref11) {
      var element = _ref11.element,
          name = _ref11.content;
      this.disconnectTarget(element, name);
    }
  }, {
    key: "connectTarget",
    value: function connectTarget(element, name) {
      if (!this.targetsByName.has(name, element)) {
        this.targetsByName.add(name, element);
        this.delegate.targetConnected(element, name);
      }
    }
  }, {
    key: "disconnectTarget",
    value: function disconnectTarget(element, name) {
      if (this.targetsByName.has(name, element)) {
        this.targetsByName.delete(name, element);
        this.delegate.targetDisconnected(element, name);
      }
    }
  }, {
    key: "disconnectAllTargets",
    value: function disconnectAllTargets() {
      var _iterator7 = _createForOfIteratorHelper(this.targetsByName.keys),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var name = _step7.value;

          var _iterator8 = _createForOfIteratorHelper(this.targetsByName.getValuesForKey(name)),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var element = _step8.value;
              this.disconnectTarget(element, name);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "attributeName",
    get: function get() {
      return "data-".concat(this.context.identifier, "-target");
    }
  }, {
    key: "element",
    get: function get() {
      return this.context.element;
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }]);

  return TargetObserver;
}();

var Context = /*#__PURE__*/function () {
  function Context(module, scope) {
    var _this10 = this;

    _classCallCheck(this, Context);

    this.logDebugActivity = function (functionName) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var identifier = _this10.identifier,
          controller = _this10.controller,
          element = _this10.element;
      detail = Object.assign({
        identifier: identifier,
        controller: controller,
        element: element
      }, detail);

      _this10.application.logDebugActivity(_this10.identifier, functionName, detail);
    };

    this.module = module;
    this.scope = scope;
    this.controller = new module.controllerConstructor(this);
    this.targetGuide = new TargetGuide(this.scope, this.controller);
    this.bindingObserver = new BindingObserver(this, this.dispatcher);
    this.valueObserver = new ValueObserver(this, this.controller);
    this.targetObserver = new TargetObserver(this, this);

    try {
      this.controller.initialize();
      this.logDebugActivity("initialize");
    } catch (error) {
      this.handleError(error, "initializing controller");
    }
  }

  _createClass(Context, [{
    key: "connect",
    value: function connect() {
      this.bindingObserver.start();
      this.valueObserver.start();
      this.targetObserver.start();

      try {
        this.controller.connect();
        this.logDebugActivity("connect");
      } catch (error) {
        this.handleError(error, "connecting controller");
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      try {
        this.controller.disconnect();
        this.logDebugActivity("disconnect");
      } catch (error) {
        this.handleError(error, "disconnecting controller");
      }

      this.targetObserver.stop();
      this.valueObserver.stop();
      this.bindingObserver.stop();
    }
  }, {
    key: "application",
    get: function get() {
      return this.module.application;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.module.identifier;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.application.schema;
    }
  }, {
    key: "dispatcher",
    get: function get() {
      return this.application.dispatcher;
    }
  }, {
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "parentElement",
    get: function get() {
      return this.element.parentElement;
    }
  }, {
    key: "dispatch",
    value: function dispatch(eventName) {
      var _ref12 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref12$target = _ref12.target,
          target = _ref12$target === void 0 ? this.element : _ref12$target,
          _ref12$detail = _ref12.detail,
          detail = _ref12$detail === void 0 ? {} : _ref12$detail,
          _ref12$prefix = _ref12.prefix,
          prefix = _ref12$prefix === void 0 ? this.identifier : _ref12$prefix,
          _ref12$bubbles = _ref12.bubbles,
          bubbles = _ref12$bubbles === void 0 ? true : _ref12$bubbles,
          _ref12$cancelable = _ref12.cancelable,
          cancelable = _ref12$cancelable === void 0 ? true : _ref12$cancelable;

      var type = prefix ? "".concat(prefix, ":").concat(eventName) : eventName;
      var event = new CustomEvent(type, {
        detail: detail,
        bubbles: bubbles,
        cancelable: cancelable
      });
      target.dispatchEvent(event);
      return event;
    }
  }, {
    key: "handleError",
    value: function handleError(error, message) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var identifier = this.identifier,
          controller = this.controller,
          element = this.element;
      detail = Object.assign({
        identifier: identifier,
        controller: controller,
        element: element
      }, detail);
      this.application.handleError(error, "Error ".concat(message), detail);
    }
  }, {
    key: "handleWarning",
    value: function handleWarning(warning, message) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var identifier = this.identifier,
          controller = this.controller,
          element = this.element;
      detail = Object.assign({
        identifier: identifier,
        controller: controller,
        element: element
      }, detail);
      this.application.handleWarning(warning, "Warning ".concat(message), detail);
    }
  }, {
    key: "targetConnected",
    value: function targetConnected(element, name) {
      this.invokeControllerMethod("".concat(name, "TargetConnected"), element);
    }
  }, {
    key: "targetDisconnected",
    value: function targetDisconnected(element, name) {
      this.invokeControllerMethod("".concat(name, "TargetDisconnected"), element);
    }
  }, {
    key: "invokeControllerMethod",
    value: function invokeControllerMethod(methodName) {
      var controller = this.controller;

      if (typeof controller[methodName] == "function") {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        controller[methodName].apply(controller, args);
      }
    }
  }]);

  return Context;
}();

function bless(constructor) {
  return shadow(constructor, getBlessedProperties(constructor));
}

function shadow(constructor, properties) {
  var shadowConstructor = extend(constructor);
  var shadowProperties = getShadowProperties(constructor.prototype, properties);
  Object.defineProperties(shadowConstructor.prototype, shadowProperties);
  return shadowConstructor;
}

function getBlessedProperties(constructor) {
  var blessings = readInheritableStaticArrayValues(constructor, "blessings");
  return blessings.reduce(function (blessedProperties, blessing) {
    var properties = blessing(constructor);

    for (var key in properties) {
      var descriptor = blessedProperties[key] || {};
      blessedProperties[key] = Object.assign(descriptor, properties[key]);
    }

    return blessedProperties;
  }, {});
}

function getShadowProperties(prototype, properties) {
  return getOwnKeys(properties).reduce(function (shadowProperties, key) {
    var descriptor = getShadowedDescriptor(prototype, properties, key);

    if (descriptor) {
      Object.assign(shadowProperties, _defineProperty({}, key, descriptor));
    }

    return shadowProperties;
  }, {});
}

function getShadowedDescriptor(prototype, properties, key) {
  var shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
  var shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;

  if (!shadowedByValue) {
    var descriptor = Object.getOwnPropertyDescriptor(properties, key).value;

    if (shadowingDescriptor) {
      descriptor.get = shadowingDescriptor.get || descriptor.get;
      descriptor.set = shadowingDescriptor.set || descriptor.set;
    }

    return descriptor;
  }
}

var getOwnKeys = function () {
  if (typeof Object.getOwnPropertySymbols == "function") {
    return function (object) {
      return [].concat(_toConsumableArray(Object.getOwnPropertyNames(object)), _toConsumableArray(Object.getOwnPropertySymbols(object)));
    };
  } else {
    return Object.getOwnPropertyNames;
  }
}();

var extend = function () {
  function extendWithReflect(constructor) {
    function extended() {
      return Reflect.construct(constructor, arguments, this instanceof extended ? this.constructor : void 0);
    }

    extended.prototype = Object.create(constructor.prototype, {
      constructor: {
        value: extended
      }
    });
    Reflect.setPrototypeOf(extended, constructor);
    return extended;
  }

  function testReflectExtension() {
    var a = function a() {
      this.a.call(this);
    };

    var b = extendWithReflect(a);

    b.prototype.a = function () {};

    return new b();
  }

  try {
    testReflectExtension();
    return extendWithReflect;
  } catch (error) {
    return function (constructor) {
      return /*#__PURE__*/function (_constructor) {
        _inherits(extended, _constructor);

        var _super2 = _createSuper(extended);

        function extended() {
          _classCallCheck(this, extended);

          return _super2.apply(this, arguments);
        }

        return extended;
      }(constructor);
    };
  }
}();

function blessDefinition(definition) {
  return {
    identifier: definition.identifier,
    controllerConstructor: bless(definition.controllerConstructor)
  };
}

var Module = /*#__PURE__*/function () {
  function Module(application, definition) {
    _classCallCheck(this, Module);

    this.application = application;
    this.definition = blessDefinition(definition);
    this.contextsByScope = new WeakMap();
    this.connectedContexts = new Set();
  }

  _createClass(Module, [{
    key: "identifier",
    get: function get() {
      return this.definition.identifier;
    }
  }, {
    key: "controllerConstructor",
    get: function get() {
      return this.definition.controllerConstructor;
    }
  }, {
    key: "contexts",
    get: function get() {
      return Array.from(this.connectedContexts);
    }
  }, {
    key: "connectContextForScope",
    value: function connectContextForScope(scope) {
      var context = this.fetchContextForScope(scope);
      this.connectedContexts.add(context);
      context.connect();
    }
  }, {
    key: "disconnectContextForScope",
    value: function disconnectContextForScope(scope) {
      var context = this.contextsByScope.get(scope);

      if (context) {
        this.connectedContexts.delete(context);
        context.disconnect();
      }
    }
  }, {
    key: "fetchContextForScope",
    value: function fetchContextForScope(scope) {
      var context = this.contextsByScope.get(scope);

      if (!context) {
        context = new Context(this, scope);
        this.contextsByScope.set(scope, context);
      }

      return context;
    }
  }]);

  return Module;
}();

var ClassMap = /*#__PURE__*/function () {
  function ClassMap(scope) {
    _classCallCheck(this, ClassMap);

    this.scope = scope;
  }

  _createClass(ClassMap, [{
    key: "has",
    value: function has(name) {
      return this.data.has(this.getDataKey(name));
    }
  }, {
    key: "get",
    value: function get(name) {
      return this.getAll(name)[0];
    }
  }, {
    key: "getAll",
    value: function getAll(name) {
      var tokenString = this.data.get(this.getDataKey(name)) || "";
      return tokenize(tokenString);
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName(name) {
      return this.data.getAttributeNameForKey(this.getDataKey(name));
    }
  }, {
    key: "getDataKey",
    value: function getDataKey(name) {
      return "".concat(name, "-class");
    }
  }, {
    key: "data",
    get: function get() {
      return this.scope.data;
    }
  }]);

  return ClassMap;
}();

var DataMap = /*#__PURE__*/function () {
  function DataMap(scope) {
    _classCallCheck(this, DataMap);

    this.scope = scope;
  }

  _createClass(DataMap, [{
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "get",
    value: function get(key) {
      var name = this.getAttributeNameForKey(key);
      return this.element.getAttribute(name);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var name = this.getAttributeNameForKey(key);
      this.element.setAttribute(name, value);
      return this.get(key);
    }
  }, {
    key: "has",
    value: function has(key) {
      var name = this.getAttributeNameForKey(key);
      return this.element.hasAttribute(name);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      if (this.has(key)) {
        var name = this.getAttributeNameForKey(key);
        this.element.removeAttribute(name);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "getAttributeNameForKey",
    value: function getAttributeNameForKey(key) {
      return "data-".concat(this.identifier, "-").concat(dasherize(key));
    }
  }]);

  return DataMap;
}();

var Guide = /*#__PURE__*/function () {
  function Guide(logger) {
    _classCallCheck(this, Guide);

    this.warnedKeysByObject = new WeakMap();
    this.logger = logger;
  }

  _createClass(Guide, [{
    key: "warn",
    value: function warn(object, key, message) {
      var warnedKeys = this.warnedKeysByObject.get(object);

      if (!warnedKeys) {
        warnedKeys = new Set();
        this.warnedKeysByObject.set(object, warnedKeys);
      }

      if (!warnedKeys.has(key)) {
        warnedKeys.add(key);
        this.logger.warn(message, object);
      }
    }
  }]);

  return Guide;
}();

function attributeValueContainsToken(attributeName, token) {
  return "[".concat(attributeName, "~=\"").concat(token, "\"]");
}

var TargetSet = /*#__PURE__*/function () {
  function TargetSet(scope) {
    _classCallCheck(this, TargetSet);

    this.scope = scope;
  }

  _createClass(TargetSet, [{
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.scope.schema;
    }
  }, {
    key: "has",
    value: function has(targetName) {
      return this.find(targetName) != null;
    }
  }, {
    key: "find",
    value: function find() {
      var _this11 = this;

      for (var _len2 = arguments.length, targetNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        targetNames[_key2] = arguments[_key2];
      }

      return targetNames.reduce(function (target, targetName) {
        return target || _this11.findTarget(targetName) || _this11.findLegacyTarget(targetName);
      }, undefined);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      var _this12 = this;

      for (var _len3 = arguments.length, targetNames = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        targetNames[_key3] = arguments[_key3];
      }

      return targetNames.reduce(function (targets, targetName) {
        return [].concat(_toConsumableArray(targets), _toConsumableArray(_this12.findAllTargets(targetName)), _toConsumableArray(_this12.findAllLegacyTargets(targetName)));
      }, []);
    }
  }, {
    key: "findTarget",
    value: function findTarget(targetName) {
      var selector = this.getSelectorForTargetName(targetName);
      return this.scope.findElement(selector);
    }
  }, {
    key: "findAllTargets",
    value: function findAllTargets(targetName) {
      var selector = this.getSelectorForTargetName(targetName);
      return this.scope.findAllElements(selector);
    }
  }, {
    key: "getSelectorForTargetName",
    value: function getSelectorForTargetName(targetName) {
      var attributeName = this.schema.targetAttributeForScope(this.identifier);
      return attributeValueContainsToken(attributeName, targetName);
    }
  }, {
    key: "findLegacyTarget",
    value: function findLegacyTarget(targetName) {
      var selector = this.getLegacySelectorForTargetName(targetName);
      return this.deprecate(this.scope.findElement(selector), targetName);
    }
  }, {
    key: "findAllLegacyTargets",
    value: function findAllLegacyTargets(targetName) {
      var _this13 = this;

      var selector = this.getLegacySelectorForTargetName(targetName);
      return this.scope.findAllElements(selector).map(function (element) {
        return _this13.deprecate(element, targetName);
      });
    }
  }, {
    key: "getLegacySelectorForTargetName",
    value: function getLegacySelectorForTargetName(targetName) {
      var targetDescriptor = "".concat(this.identifier, ".").concat(targetName);
      return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    }
  }, {
    key: "deprecate",
    value: function deprecate(element, targetName) {
      if (element) {
        var identifier = this.identifier;
        var attributeName = this.schema.targetAttribute;
        var revisedAttributeName = this.schema.targetAttributeForScope(identifier);
        this.guide.warn(element, "target:".concat(targetName), "Please replace ".concat(attributeName, "=\"").concat(identifier, ".").concat(targetName, "\" with ").concat(revisedAttributeName, "=\"").concat(targetName, "\". ") + "The ".concat(attributeName, " attribute is deprecated and will be removed in a future version of Stimulus."));
      }

      return element;
    }
  }, {
    key: "guide",
    get: function get() {
      return this.scope.guide;
    }
  }]);

  return TargetSet;
}();

var Scope = /*#__PURE__*/function () {
  function Scope(schema, element, identifier, logger) {
    var _this14 = this;

    _classCallCheck(this, Scope);

    this.targets = new TargetSet(this);
    this.classes = new ClassMap(this);
    this.data = new DataMap(this);

    this.containsElement = function (element) {
      return element.closest(_this14.controllerSelector) === _this14.element;
    };

    this.schema = schema;
    this.element = element;
    this.identifier = identifier;
    this.guide = new Guide(logger);
  }

  _createClass(Scope, [{
    key: "findElement",
    value: function findElement(selector) {
      return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
    }
  }, {
    key: "findAllElements",
    value: function findAllElements(selector) {
      return [].concat(_toConsumableArray(this.element.matches(selector) ? [this.element] : []), _toConsumableArray(this.queryElements(selector).filter(this.containsElement)));
    }
  }, {
    key: "queryElements",
    value: function queryElements(selector) {
      return Array.from(this.element.querySelectorAll(selector));
    }
  }, {
    key: "controllerSelector",
    get: function get() {
      return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
    }
  }]);

  return Scope;
}();

var ScopeObserver = /*#__PURE__*/function () {
  function ScopeObserver(element, schema, delegate) {
    _classCallCheck(this, ScopeObserver);

    this.element = element;
    this.schema = schema;
    this.delegate = delegate;
    this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
    this.scopesByIdentifierByElement = new WeakMap();
    this.scopeReferenceCounts = new WeakMap();
  }

  _createClass(ScopeObserver, [{
    key: "start",
    value: function start() {
      this.valueListObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.valueListObserver.stop();
    }
  }, {
    key: "controllerAttribute",
    get: function get() {
      return this.schema.controllerAttribute;
    }
  }, {
    key: "parseValueForToken",
    value: function parseValueForToken(token) {
      var element = token.element,
          identifier = token.content;
      var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
      var scope = scopesByIdentifier.get(identifier);

      if (!scope) {
        scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
        scopesByIdentifier.set(identifier, scope);
      }

      return scope;
    }
  }, {
    key: "elementMatchedValue",
    value: function elementMatchedValue(element, value) {
      var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
      this.scopeReferenceCounts.set(value, referenceCount);

      if (referenceCount == 1) {
        this.delegate.scopeConnected(value);
      }
    }
  }, {
    key: "elementUnmatchedValue",
    value: function elementUnmatchedValue(element, value) {
      var referenceCount = this.scopeReferenceCounts.get(value);

      if (referenceCount) {
        this.scopeReferenceCounts.set(value, referenceCount - 1);

        if (referenceCount == 1) {
          this.delegate.scopeDisconnected(value);
        }
      }
    }
  }, {
    key: "elementMatchedNoValue",
    value: function elementMatchedNoValue(token) {}
  }, {
    key: "fetchScopesByIdentifierForElement",
    value: function fetchScopesByIdentifierForElement(element) {
      var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);

      if (!scopesByIdentifier) {
        scopesByIdentifier = new Map();
        this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
      }

      return scopesByIdentifier;
    }
  }]);

  return ScopeObserver;
}();

var Router = /*#__PURE__*/function () {
  function Router(application) {
    _classCallCheck(this, Router);

    this.application = application;
    this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
    this.scopesByIdentifier = new Multimap();
    this.modulesByIdentifier = new Map();
  }

  _createClass(Router, [{
    key: "element",
    get: function get() {
      return this.application.element;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.application.schema;
    }
  }, {
    key: "logger",
    get: function get() {
      return this.application.logger;
    }
  }, {
    key: "controllerAttribute",
    get: function get() {
      return this.schema.controllerAttribute;
    }
  }, {
    key: "modules",
    get: function get() {
      return Array.from(this.modulesByIdentifier.values());
    }
  }, {
    key: "contexts",
    get: function get() {
      return this.modules.reduce(function (contexts, module) {
        return contexts.concat(module.contexts);
      }, []);
    }
  }, {
    key: "start",
    value: function start() {
      this.scopeObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.scopeObserver.stop();
    }
  }, {
    key: "loadDefinition",
    value: function loadDefinition(definition) {
      this.unloadIdentifier(definition.identifier);
      var module = new Module(this.application, definition);
      this.connectModule(module);
    }
  }, {
    key: "unloadIdentifier",
    value: function unloadIdentifier(identifier) {
      var module = this.modulesByIdentifier.get(identifier);

      if (module) {
        this.disconnectModule(module);
      }
    }
  }, {
    key: "getContextForElementAndIdentifier",
    value: function getContextForElementAndIdentifier(element, identifier) {
      var module = this.modulesByIdentifier.get(identifier);

      if (module) {
        return module.contexts.find(function (context) {
          return context.element == element;
        });
      }
    }
  }, {
    key: "handleError",
    value: function handleError(error, message, detail) {
      this.application.handleError(error, message, detail);
    }
  }, {
    key: "createScopeForElementAndIdentifier",
    value: function createScopeForElementAndIdentifier(element, identifier) {
      return new Scope(this.schema, element, identifier, this.logger);
    }
  }, {
    key: "scopeConnected",
    value: function scopeConnected(scope) {
      var identifier = scope.identifier,
          element = scope.element;
      this.scopesByIdentifier.add(identifier, scope);
      var module = this.modulesByIdentifier.get(identifier);

      if (module) {
        module.connectContextForScope(scope);
      } else {
        this.application.handleWarning("Element references undefined controller \"".concat(identifier, "\""), "Warning connecting controller \"".concat(identifier, "\""), {
          identifier: identifier,
          element: element
        });
      }
    }
  }, {
    key: "scopeDisconnected",
    value: function scopeDisconnected(scope) {
      this.scopesByIdentifier.delete(scope.identifier, scope);
      var module = this.modulesByIdentifier.get(scope.identifier);

      if (module) {
        module.disconnectContextForScope(scope);
      }
    }
  }, {
    key: "connectModule",
    value: function connectModule(module) {
      this.modulesByIdentifier.set(module.identifier, module);
      var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach(function (scope) {
        return module.connectContextForScope(scope);
      });
    }
  }, {
    key: "disconnectModule",
    value: function disconnectModule(module) {
      this.modulesByIdentifier.delete(module.identifier);
      var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach(function (scope) {
        return module.disconnectContextForScope(scope);
      });
    }
  }]);

  return Router;
}();

var defaultSchema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target",
  targetAttributeForScope: function targetAttributeForScope(identifier) {
    return "data-".concat(identifier, "-target");
  }
};

var Application = /*#__PURE__*/function () {
  function Application() {
    var _this15 = this;

    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
    var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSchema;

    _classCallCheck(this, Application);

    this.logger = console;
    this.debug = false;
    this.warnings = true;

    this.logDebugActivity = function (identifier, functionName) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (_this15.debug) {
        _this15.logFormattedMessage(identifier, functionName, detail);
      }
    };

    this.element = element;
    this.schema = schema;
    this.dispatcher = new Dispatcher(this);
    this.router = new Router(this);
  }

  _createClass(Application, [{
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return domReady();

              case 2:
                this.logDebugActivity("application", "starting");
                this.dispatcher.start();
                this.router.start();
                this.logDebugActivity("application", "start");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      this.logDebugActivity("application", "stopping");
      this.dispatcher.stop();
      this.router.stop();
      this.logDebugActivity("application", "stop");
    }
  }, {
    key: "register",
    value: function register(identifier, controllerConstructor) {
      this.load({
        identifier: identifier,
        controllerConstructor: controllerConstructor
      });
    }
  }, {
    key: "load",
    value: function load(head) {
      var _this16 = this;

      for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
      }

      var definitions = Array.isArray(head) ? head : [head].concat(rest);
      definitions.forEach(function (definition) {
        return _this16.router.loadDefinition(definition);
      });
    }
  }, {
    key: "unload",
    value: function unload(head) {
      var _this17 = this;

      for (var _len5 = arguments.length, rest = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        rest[_key5 - 1] = arguments[_key5];
      }

      var identifiers = Array.isArray(head) ? head : [head].concat(rest);
      identifiers.forEach(function (identifier) {
        return _this17.router.unloadIdentifier(identifier);
      });
    }
  }, {
    key: "controllers",
    get: function get() {
      return this.router.contexts.map(function (context) {
        return context.controller;
      });
    }
  }, {
    key: "getControllerForElementAndIdentifier",
    value: function getControllerForElementAndIdentifier(element, identifier) {
      var context = this.router.getContextForElementAndIdentifier(element, identifier);
      return context ? context.controller : null;
    }
  }, {
    key: "handleWarning",
    value: function handleWarning(warning, message, detail) {
      if (this.warnings) {
        this.logger.warn("%s\n\n%s\n\n%o", message, warning, detail);
      }
    }
  }, {
    key: "handleError",
    value: function handleError(error, message, detail) {
      var _a;

      this.logger.error("%s\n\n%o\n\n%o", message, error, detail);
      (_a = window.onerror) === null || _a === void 0 ? void 0 : _a.call(window, message, "", 0, 0, error);
    }
  }, {
    key: "logFormattedMessage",
    value: function logFormattedMessage(identifier, functionName) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var color = darkMode ? "#ffe000" : "#5D2F85";
      detail = Object.assign({
        application: this
      }, detail);
      this.logger.groupCollapsed("%c".concat(identifier, "%c #").concat(functionName), "color: ".concat(color), 'color: unset');
      this.logger.log("details:", Object.assign({}, detail));
      this.logger.groupEnd();
    }
  }], [{
    key: "start",
    value: function start(element, schema) {
      var application = new Application(element, schema);
      application.start();
      return application;
    }
  }]);

  return Application;
}();

function domReady() {
  return new Promise(function (resolve) {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        return resolve();
      });
    } else {
      resolve();
    }
  });
}

function ClassPropertiesBlessing(constructor) {
  var classes = readInheritableStaticArrayValues(constructor, "classes");
  return classes.reduce(function (properties, classDefinition) {
    return Object.assign(properties, propertiesForClassDefinition(classDefinition));
  }, {});
}

function propertiesForClassDefinition(key) {
  var _ref13;

  return _ref13 = {}, _defineProperty(_ref13, "".concat(key, "Class"), {
    get: function get() {
      var classes = this.classes;

      if (classes.has(key)) {
        return classes.get(key);
      } else {
        var attribute = classes.getAttributeName(key);
        throw new Error("Missing attribute \"".concat(attribute, "\""));
      }
    }
  }), _defineProperty(_ref13, "".concat(key, "Classes"), {
    get: function get() {
      return this.classes.getAll(key);
    }
  }), _defineProperty(_ref13, "has".concat(capitalize(key), "Class"), {
    get: function get() {
      return this.classes.has(key);
    }
  }), _ref13;
}

function TargetPropertiesBlessing(constructor) {
  var targets = readInheritableStaticArrayValues(constructor, "targets");
  return targets.reduce(function (properties, targetDefinition) {
    return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
  }, {});
}

function propertiesForTargetDefinition(name) {
  var _ref14;

  return _ref14 = {}, _defineProperty(_ref14, "".concat(name, "Target"), {
    get: function get() {
      var target = this.targets.find(name);

      if (target) {
        return target;
      } else {
        throw new Error("Missing target element \"".concat(name, "\" for \"").concat(this.identifier, "\" controller"));
      }
    }
  }), _defineProperty(_ref14, "".concat(name, "Targets"), {
    get: function get() {
      return this.targets.findAll(name);
    }
  }), _defineProperty(_ref14, "has".concat(capitalize(name), "Target"), {
    get: function get() {
      return this.targets.has(name);
    }
  }), _ref14;
}

function ValuePropertiesBlessing(constructor) {
  var valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
  var propertyDescriptorMap = {
    valueDescriptorMap: {
      get: function get() {
        var _this18 = this;

        return valueDefinitionPairs.reduce(function (result, valueDefinitionPair) {
          var valueDescriptor = parseValueDefinitionPair(valueDefinitionPair);

          var attributeName = _this18.data.getAttributeNameForKey(valueDescriptor.key);

          return Object.assign(result, _defineProperty({}, attributeName, valueDescriptor));
        }, {});
      }
    }
  };
  return valueDefinitionPairs.reduce(function (properties, valueDefinitionPair) {
    return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
  }, propertyDescriptorMap);
}

function propertiesForValueDefinitionPair(valueDefinitionPair) {
  var _ref15;

  var definition = parseValueDefinitionPair(valueDefinitionPair);
  var key = definition.key,
      name = definition.name,
      read = definition.reader,
      write = definition.writer;
  return _ref15 = {}, _defineProperty(_ref15, name, {
    get: function get() {
      var value = this.data.get(key);

      if (value !== null) {
        return read(value);
      } else {
        return definition.defaultValue;
      }
    },
    set: function set(value) {
      if (value === undefined) {
        this.data.delete(key);
      } else {
        this.data.set(key, write(value));
      }
    }
  }), _defineProperty(_ref15, "has".concat(capitalize(name)), {
    get: function get() {
      return this.data.has(key) || definition.hasCustomDefaultValue;
    }
  }), _ref15;
}

function parseValueDefinitionPair(_ref16) {
  var _ref17 = _slicedToArray(_ref16, 2),
      token = _ref17[0],
      typeDefinition = _ref17[1];

  return valueDescriptorForTokenAndTypeDefinition(token, typeDefinition);
}

function parseValueTypeConstant(constant) {
  switch (constant) {
    case Array:
      return "array";

    case Boolean:
      return "boolean";

    case Number:
      return "number";

    case Object:
      return "object";

    case String:
      return "string";
  }
}

function parseValueTypeDefault(defaultValue) {
  switch (_typeof(defaultValue)) {
    case "boolean":
      return "boolean";

    case "number":
      return "number";

    case "string":
      return "string";
  }

  if (Array.isArray(defaultValue)) return "array";
  if (Object.prototype.toString.call(defaultValue) === "[object Object]") return "object";
}

function parseValueTypeObject(typeObject) {
  var typeFromObject = parseValueTypeConstant(typeObject.type);

  if (typeFromObject) {
    var defaultValueType = parseValueTypeDefault(typeObject.default);

    if (typeFromObject !== defaultValueType) {
      throw new Error("Type \"".concat(typeFromObject, "\" must match the type of the default value. Given default value: \"").concat(typeObject.default, "\" as \"").concat(defaultValueType, "\""));
    }

    return typeFromObject;
  }
}

function parseValueTypeDefinition(typeDefinition) {
  var typeFromObject = parseValueTypeObject(typeDefinition);
  var typeFromDefaultValue = parseValueTypeDefault(typeDefinition);
  var typeFromConstant = parseValueTypeConstant(typeDefinition);
  var type = typeFromObject || typeFromDefaultValue || typeFromConstant;
  if (type) return type;
  throw new Error("Unknown value type \"".concat(typeDefinition, "\""));
}

function defaultValueForDefinition(typeDefinition) {
  var constant = parseValueTypeConstant(typeDefinition);
  if (constant) return defaultValuesByType[constant];
  var defaultValue = typeDefinition.default;
  if (defaultValue !== undefined) return defaultValue;
  return typeDefinition;
}

function valueDescriptorForTokenAndTypeDefinition(token, typeDefinition) {
  var key = "".concat(dasherize(token), "-value");
  var type = parseValueTypeDefinition(typeDefinition);
  return {
    type: type,
    key: key,
    name: camelize(key),

    get defaultValue() {
      return defaultValueForDefinition(typeDefinition);
    },

    get hasCustomDefaultValue() {
      return parseValueTypeDefault(typeDefinition) !== undefined;
    },

    reader: readers[type],
    writer: writers[type] || writers.default
  };
}

var defaultValuesByType = {
  get array() {
    return [];
  },

  boolean: false,
  number: 0,

  get object() {
    return {};
  },

  string: ""
};
var readers = {
  array: function array(value) {
    var array = JSON.parse(value);

    if (!Array.isArray(array)) {
      throw new TypeError("Expected array");
    }

    return array;
  },
  boolean: function boolean(value) {
    return !(value == "0" || value == "false");
  },
  number: function number(value) {
    return Number(value);
  },
  object: function object(value) {
    var object = JSON.parse(value);

    if (object === null || _typeof(object) != "object" || Array.isArray(object)) {
      throw new TypeError("Expected object");
    }

    return object;
  },
  string: function string(value) {
    return value;
  }
};
var writers = {
  default: writeString,
  array: writeJSON,
  object: writeJSON
};

function writeJSON(value) {
  return JSON.stringify(value);
}

function writeString(value) {
  return "".concat(value);
}

var Controller = /*#__PURE__*/function () {
  function Controller(context) {
    _classCallCheck(this, Controller);

    this.context = context;
  }

  _createClass(Controller, [{
    key: "application",
    get: function get() {
      return this.context.application;
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }, {
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "targets",
    get: function get() {
      return this.scope.targets;
    }
  }, {
    key: "classes",
    get: function get() {
      return this.scope.classes;
    }
  }, {
    key: "data",
    get: function get() {
      return this.scope.data;
    }
  }, {
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "connect",
    value: function connect() {}
  }, {
    key: "disconnect",
    value: function disconnect() {}
  }]);

  return Controller;
}();

Controller.blessings = [ClassPropertiesBlessing, TargetPropertiesBlessing, ValuePropertiesBlessing];
Controller.targets = [];
Controller.values = {};

function definitionsFromContext(context) {
  return context.keys().map(function (key) {
    return definitionForModuleWithContextAndKey(context, key);
  }).filter(function (value) {
    return value;
  });
}

function definitionForModuleWithContextAndKey(context, key) {
  var identifier = identifierForContextKey(key);

  if (identifier) {
    return definitionForModuleAndIdentifier(context(key), identifier);
  }
}

function definitionForModuleAndIdentifier(module, identifier) {
  var controllerConstructor = module.default;

  if (typeof controllerConstructor == "function") {
    return {
      identifier: identifier,
      controllerConstructor: controllerConstructor
    };
  }
}

function identifierForContextKey(key) {
  var logicalName = (key.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/) || [])[1];

  if (logicalName) {
    return logicalName.replace(/_/g, "-").replace(/\//g, "--");
  }
}



/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js ***!
  \**************************************************************************/
/*! exports provided: getConsumer, setConsumer, createConsumer, subscribeTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConsumer", function() { return getConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConsumer", function() { return setConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConsumer", function() { return createConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeTo", function() { return subscribeTo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var consumer;
function getConsumer() {
  return _getConsumer.apply(this, arguments);
}

function _getConsumer() {
  _getConsumer = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", consumer || setConsumer(createConsumer().then(setConsumer)));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getConsumer.apply(this, arguments);
}

function setConsumer(newConsumer) {
  return consumer = newConsumer;
}
function createConsumer() {
  return _createConsumer.apply(this, arguments);
}

function _createConsumer() {
  _createConsumer = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var _yield$import, createConsumer;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __webpack_require__.e(/*! import() | actioncable */ "vendors~actioncable").then(__webpack_require__.bind(null, /*! @rails/actioncable/src */ "./node_modules/@rails/actioncable/src/index.js"));

          case 2:
            _yield$import = _context2.sent;
            createConsumer = _yield$import.createConsumer;
            return _context2.abrupt("return", createConsumer());

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createConsumer.apply(this, arguments);
}

function subscribeTo(_x, _x2) {
  return _subscribeTo.apply(this, arguments);
}

function _subscribeTo() {
  _subscribeTo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(channel, mixin) {
    var _yield$getConsumer, subscriptions;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getConsumer();

          case 2:
            _yield$getConsumer = _context3.sent;
            subscriptions = _yield$getConsumer.subscriptions;
            return _context3.abrupt("return", subscriptions.create(channel, mixin));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _subscribeTo.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable_stream_source_element.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable_stream_source_element.js ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
/* harmony import */ var _cable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cable */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var TurboCableStreamSourceElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TurboCableStreamSourceElement, _HTMLElement);

  var _super = _createSuper(TurboCableStreamSourceElement);

  function TurboCableStreamSourceElement() {
    _classCallCheck(this, TurboCableStreamSourceElement);

    return _super.apply(this, arguments);
  }

  _createClass(TurboCableStreamSourceElement, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Object(_hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__["connectStreamSource"])(this);
                _context.next = 3;
                return Object(_cable__WEBPACK_IMPORTED_MODULE_2__["subscribeTo"])(this.channel, {
                  received: this.dispatchMessageEvent.bind(this)
                });

              case 3:
                this.subscription = _context.sent;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      Object(_hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__["disconnectStreamSource"])(this);
      if (this.subscription) this.subscription.unsubscribe();
    }
  }, {
    key: "dispatchMessageEvent",
    value: function dispatchMessageEvent(data) {
      var event = new MessageEvent("message", {
        data: data
      });
      return this.dispatchEvent(event);
    }
  }, {
    key: "channel",
    get: function get() {
      var channel = this.getAttribute("channel");
      var signed_stream_name = this.getAttribute("signed-stream-name");
      return {
        channel: channel,
        signed_stream_name: signed_stream_name
      };
    }
  }]);

  return TurboCableStreamSourceElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("turbo-cable-stream-source", TurboCableStreamSourceElement);

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/app/javascript/turbo/index.js ***!
  \**************************************************************************/
/*! exports provided: Turbo, cable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cable_stream_source_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cable_stream_source_element */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable_stream_source_element.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Turbo", function() { return _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _cable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cable */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "cable", function() { return _cable__WEBPACK_IMPORTED_MODULE_2__; });






/***/ }),

/***/ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js ***!
  \***************************************************************/
/*! exports provided: PageRenderer, PageSnapshot, clearCache, connectStreamSource, disconnectStreamSource, navigator, registerAdapter, renderStreamMessage, session, setProgressBarDelay, start, visit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return PageRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSnapshot", function() { return PageSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCache", function() { return clearCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectStreamSource", function() { return connectStreamSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectStreamSource", function() { return disconnectStreamSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAdapter", function() { return registerAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderStreamMessage", function() { return renderStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "session", function() { return session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProgressBarDelay", function() { return setProgressBarDelay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject, _templateObject2;

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
Turbo 7.0.0-rc.2
Copyright © 2021 Basecamp, LLC
 */
(function () {
  if (window.Reflect === undefined || window.customElements === undefined || window.customElements.polyfillWrapFlushCallback) {
    return;
  }

  var BuiltInHTMLElement = HTMLElement;
  var wrapperForTheName = {
    'HTMLElement': function HTMLElement() {
      return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
    }
  };
  window.HTMLElement = wrapperForTheName['HTMLElement'];
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();

var submittersByForm = new WeakMap();

function findSubmitterFromClickTarget(target) {
  var element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
  var candidate = element ? element.closest("input, button") : null;
  return (candidate === null || candidate === void 0 ? void 0 : candidate.type) == "submit" ? candidate : null;
}

function clickCaptured(event) {
  var submitter = findSubmitterFromClickTarget(event.target);

  if (submitter && submitter.form) {
    submittersByForm.set(submitter.form, submitter);
  }
}

(function () {
  if ("SubmitEvent" in window) return;
  addEventListener("click", clickCaptured, true);
  Object.defineProperty(Event.prototype, "submitter", {
    get: function get() {
      if (this.type == "submit" && this.target instanceof HTMLFormElement) {
        return submittersByForm.get(this.target);
      }
    }
  });
})();

var FrameLoadingStyle;

(function (FrameLoadingStyle) {
  FrameLoadingStyle["eager"] = "eager";
  FrameLoadingStyle["lazy"] = "lazy";
})(FrameLoadingStyle || (FrameLoadingStyle = {}));

var FrameElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FrameElement, _HTMLElement);

  var _super = _createSuper(FrameElement);

  function FrameElement() {
    var _this;

    _classCallCheck(this, FrameElement);

    _this = _super.call(this);
    _this.loaded = Promise.resolve();
    _this.delegate = new FrameElement.delegateConstructor(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FrameElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.delegate.connect();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.delegate.disconnect();
    }
  }, {
    key: "reload",
    value: function reload() {
      var src = this.src;
      this.src = null;
      this.src = src;
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name) {
      if (name == "loading") {
        this.delegate.loadingStyleChanged();
      } else if (name == "src") {
        this.delegate.sourceURLChanged();
      } else {
        this.delegate.disabledChanged();
      }
    }
  }, {
    key: "src",
    get: function get() {
      return this.getAttribute("src");
    },
    set: function set(value) {
      if (value) {
        this.setAttribute("src", value);
      } else {
        this.removeAttribute("src");
      }
    }
  }, {
    key: "loading",
    get: function get() {
      return frameLoadingStyleFromString(this.getAttribute("loading") || "");
    },
    set: function set(value) {
      if (value) {
        this.setAttribute("loading", value);
      } else {
        this.removeAttribute("loading");
      }
    }
  }, {
    key: "disabled",
    get: function get() {
      return this.hasAttribute("disabled");
    },
    set: function set(value) {
      if (value) {
        this.setAttribute("disabled", "");
      } else {
        this.removeAttribute("disabled");
      }
    }
  }, {
    key: "autoscroll",
    get: function get() {
      return this.hasAttribute("autoscroll");
    },
    set: function set(value) {
      if (value) {
        this.setAttribute("autoscroll", "");
      } else {
        this.removeAttribute("autoscroll");
      }
    }
  }, {
    key: "complete",
    get: function get() {
      return !this.delegate.isLoading;
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.ownerDocument === document && !this.isPreview;
    }
  }, {
    key: "isPreview",
    get: function get() {
      var _a, _b;

      return (_b = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.documentElement) === null || _b === void 0 ? void 0 : _b.hasAttribute("data-turbo-preview");
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["disabled", "loading", "src"];
    }
  }]);

  return FrameElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

function frameLoadingStyleFromString(style) {
  switch (style.toLowerCase()) {
    case "lazy":
      return FrameLoadingStyle.lazy;

    default:
      return FrameLoadingStyle.eager;
  }
}

function expandURL(locatable) {
  return new URL(locatable.toString(), document.baseURI);
}

function getAnchor(url) {
  var anchorMatch;

  if (url.hash) {
    return url.hash.slice(1);
  } else if (anchorMatch = url.href.match(/#(.*)$/)) {
    return anchorMatch[1];
  }
}

function getExtension(url) {
  return (getLastPathComponent(url).match(/\.[^.]*$/) || [])[0] || "";
}

function isHTML(url) {
  return !!getExtension(url).match(/^(?:|\.(?:htm|html|xhtml))$/);
}

function isPrefixedBy(baseURL, url) {
  var prefix = getPrefix(url);
  return baseURL.href === expandURL(prefix).href || baseURL.href.startsWith(prefix);
}

function getRequestURL(url) {
  var anchor = getAnchor(url);
  return anchor != null ? url.href.slice(0, -(anchor.length + 1)) : url.href;
}

function toCacheKey(url) {
  return getRequestURL(url);
}

function urlsAreEqual(left, right) {
  return expandURL(left).href == expandURL(right).href;
}

function getPathComponents(url) {
  return url.pathname.split("/").slice(1);
}

function getLastPathComponent(url) {
  return getPathComponents(url).slice(-1)[0];
}

function getPrefix(url) {
  return addTrailingSlash(url.origin + url.pathname);
}

function addTrailingSlash(value) {
  return value.endsWith("/") ? value : value + "/";
}

var FetchResponse = /*#__PURE__*/function () {
  function FetchResponse(response) {
    _classCallCheck(this, FetchResponse);

    this.response = response;
  }

  _createClass(FetchResponse, [{
    key: "succeeded",
    get: function get() {
      return this.response.ok;
    }
  }, {
    key: "failed",
    get: function get() {
      return !this.succeeded;
    }
  }, {
    key: "clientError",
    get: function get() {
      return this.statusCode >= 400 && this.statusCode <= 499;
    }
  }, {
    key: "serverError",
    get: function get() {
      return this.statusCode >= 500 && this.statusCode <= 599;
    }
  }, {
    key: "redirected",
    get: function get() {
      return this.response.redirected;
    }
  }, {
    key: "location",
    get: function get() {
      return expandURL(this.response.url);
    }
  }, {
    key: "isHTML",
    get: function get() {
      return this.contentType && this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/);
    }
  }, {
    key: "statusCode",
    get: function get() {
      return this.response.status;
    }
  }, {
    key: "contentType",
    get: function get() {
      return this.header("Content-Type");
    }
  }, {
    key: "responseText",
    get: function get() {
      return this.response.text();
    }
  }, {
    key: "responseHTML",
    get: function get() {
      if (this.isHTML) {
        return this.response.text();
      } else {
        return Promise.resolve(undefined);
      }
    }
  }, {
    key: "header",
    value: function header(name) {
      return this.response.headers.get(name);
    }
  }]);

  return FetchResponse;
}();

function dispatch(eventName) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      target = _ref.target,
      cancelable = _ref.cancelable,
      detail = _ref.detail;

  var event = new CustomEvent(eventName, {
    cancelable: cancelable,
    bubbles: true,
    detail: detail
  });
  void (target || document.documentElement).dispatchEvent(event);
  return event;
}

function nextAnimationFrame() {
  return new Promise(function (resolve) {
    return requestAnimationFrame(function () {
      return resolve();
    });
  });
}

function nextEventLoopTick() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve();
    }, 0);
  });
}

function nextMicrotask() {
  return Promise.resolve();
}

function parseHTMLDocument() {
  var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return new DOMParser().parseFromString(html, "text/html");
}

function unindent(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var lines = interpolate(strings, values).replace(/^\n/, "").split("\n");
  var match = lines[0].match(/^\s+/);
  var indent = match ? match[0].length : 0;
  return lines.map(function (line) {
    return line.slice(indent);
  }).join("\n");
}

function interpolate(strings, values) {
  return strings.reduce(function (result, string, i) {
    var value = values[i] == undefined ? "" : values[i];
    return result + string + value;
  }, "");
}

function uuid() {
  return Array.apply(null, {
    length: 36
  }).map(function (_, i) {
    if (i == 8 || i == 13 || i == 18 || i == 23) {
      return "-";
    } else if (i == 14) {
      return "4";
    } else if (i == 19) {
      return (Math.floor(Math.random() * 4) + 8).toString(16);
    } else {
      return Math.floor(Math.random() * 15).toString(16);
    }
  }).join("");
}

var FetchMethod;

(function (FetchMethod) {
  FetchMethod[FetchMethod["get"] = 0] = "get";
  FetchMethod[FetchMethod["post"] = 1] = "post";
  FetchMethod[FetchMethod["put"] = 2] = "put";
  FetchMethod[FetchMethod["patch"] = 3] = "patch";
  FetchMethod[FetchMethod["delete"] = 4] = "delete";
})(FetchMethod || (FetchMethod = {}));

function fetchMethodFromString(method) {
  switch (method.toLowerCase()) {
    case "get":
      return FetchMethod.get;

    case "post":
      return FetchMethod.post;

    case "put":
      return FetchMethod.put;

    case "patch":
      return FetchMethod.patch;

    case "delete":
      return FetchMethod.delete;
  }
}

var FetchRequest = /*#__PURE__*/function () {
  function FetchRequest(delegate, method, location) {
    var body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new URLSearchParams();

    _classCallCheck(this, FetchRequest);

    this.abortController = new AbortController();

    this.resolveRequestPromise = function (value) {};

    this.delegate = delegate;
    this.method = method;
    this.headers = this.defaultHeaders;

    if (this.isIdempotent) {
      this.url = mergeFormDataEntries(location, _toConsumableArray(body.entries()));
    } else {
      this.body = body;
      this.url = location;
    }
  }

  _createClass(FetchRequest, [{
    key: "location",
    get: function get() {
      return this.url;
    }
  }, {
    key: "params",
    get: function get() {
      return this.url.searchParams;
    }
  }, {
    key: "entries",
    get: function get() {
      return this.body ? Array.from(this.body.entries()) : [];
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.abortController.abort();
    }
  }, {
    key: "perform",
    value: function () {
      var _perform = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _a, _b, fetchOptions, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetchOptions = this.fetchOptions;
                (_b = (_a = this.delegate).prepareHeadersForRequest) === null || _b === void 0 ? void 0 : _b.call(_a, this.headers, this);
                _context.next = 4;
                return this.allowRequestToBeIntercepted(fetchOptions);

              case 4:
                _context.prev = 4;
                this.delegate.requestStarted(this);
                _context.next = 8;
                return fetch(this.url.href, fetchOptions);

              case 8:
                response = _context.sent;
                _context.next = 11;
                return this.receive(response);

              case 11:
                return _context.abrupt("return", _context.sent);

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](4);

                if (!(_context.t0.name !== 'AbortError')) {
                  _context.next = 19;
                  break;
                }

                this.delegate.requestErrored(this, _context.t0);
                throw _context.t0;

              case 19:
                _context.prev = 19;
                this.delegate.requestFinished(this);
                return _context.finish(19);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 14, 19, 22]]);
      }));

      function perform() {
        return _perform.apply(this, arguments);
      }

      return perform;
    }()
  }, {
    key: "receive",
    value: function () {
      var _receive = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(response) {
        var fetchResponse, event;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fetchResponse = new FetchResponse(response);
                event = dispatch("turbo:before-fetch-response", {
                  cancelable: true,
                  detail: {
                    fetchResponse: fetchResponse
                  }
                });

                if (event.defaultPrevented) {
                  this.delegate.requestPreventedHandlingResponse(this, fetchResponse);
                } else if (fetchResponse.succeeded) {
                  this.delegate.requestSucceededWithResponse(this, fetchResponse);
                } else {
                  this.delegate.requestFailedWithResponse(this, fetchResponse);
                }

                return _context2.abrupt("return", fetchResponse);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function receive(_x) {
        return _receive.apply(this, arguments);
      }

      return receive;
    }()
  }, {
    key: "fetchOptions",
    get: function get() {
      var _a;

      return {
        method: FetchMethod[this.method].toUpperCase(),
        credentials: "same-origin",
        headers: this.headers,
        redirect: "follow",
        body: this.body,
        signal: this.abortSignal,
        referrer: (_a = this.delegate.referrer) === null || _a === void 0 ? void 0 : _a.href
      };
    }
  }, {
    key: "defaultHeaders",
    get: function get() {
      return {
        "Accept": "text/html, application/xhtml+xml"
      };
    }
  }, {
    key: "isIdempotent",
    get: function get() {
      return this.method == FetchMethod.get;
    }
  }, {
    key: "abortSignal",
    get: function get() {
      return this.abortController.signal;
    }
  }, {
    key: "allowRequestToBeIntercepted",
    value: function () {
      var _allowRequestToBeIntercepted = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(fetchOptions) {
        var _this2 = this;

        var requestInterception, event;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                requestInterception = new Promise(function (resolve) {
                  return _this2.resolveRequestPromise = resolve;
                });
                event = dispatch("turbo:before-fetch-request", {
                  cancelable: true,
                  detail: {
                    fetchOptions: fetchOptions,
                    url: this.url.href,
                    resume: this.resolveRequestPromise
                  }
                });

                if (!event.defaultPrevented) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 5;
                return requestInterception;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function allowRequestToBeIntercepted(_x2) {
        return _allowRequestToBeIntercepted.apply(this, arguments);
      }

      return allowRequestToBeIntercepted;
    }()
  }]);

  return FetchRequest;
}();

function mergeFormDataEntries(url, entries) {
  var currentSearchParams = new URLSearchParams(url.search);

  var _iterator = _createForOfIteratorHelper(entries),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ref4 = _step.value;

      var _ref3 = _slicedToArray(_ref4, 2);

      var name = _ref3[0];
      var value = _ref3[1];
      if (value instanceof File) continue;

      if (currentSearchParams.has(name)) {
        currentSearchParams.delete(name);
        url.searchParams.set(name, value);
      } else {
        url.searchParams.append(name, value);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return url;
}

var AppearanceObserver = /*#__PURE__*/function () {
  function AppearanceObserver(delegate, element) {
    var _this3 = this;

    _classCallCheck(this, AppearanceObserver);

    this.started = false;

    this.intersect = function (entries) {
      var lastEntry = entries.slice(-1)[0];

      if (lastEntry === null || lastEntry === void 0 ? void 0 : lastEntry.isIntersecting) {
        _this3.delegate.elementAppearedInViewport(_this3.element);
      }
    };

    this.delegate = delegate;
    this.element = element;
    this.intersectionObserver = new IntersectionObserver(this.intersect);
  }

  _createClass(AppearanceObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.intersectionObserver.observe(this.element);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        this.intersectionObserver.unobserve(this.element);
      }
    }
  }]);

  return AppearanceObserver;
}();

var StreamMessage = /*#__PURE__*/function () {
  function StreamMessage(html) {
    _classCallCheck(this, StreamMessage);

    this.templateElement = document.createElement("template");
    this.templateElement.innerHTML = html;
  }

  _createClass(StreamMessage, [{
    key: "fragment",
    get: function get() {
      var fragment = document.createDocumentFragment();

      var _iterator2 = _createForOfIteratorHelper(this.foreignElements),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var element = _step2.value;
          fragment.appendChild(document.importNode(element, true));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return fragment;
    }
  }, {
    key: "foreignElements",
    get: function get() {
      return this.templateChildren.reduce(function (streamElements, child) {
        if (child.tagName.toLowerCase() == "turbo-stream") {
          return [].concat(_toConsumableArray(streamElements), [child]);
        } else {
          return streamElements;
        }
      }, []);
    }
  }, {
    key: "templateChildren",
    get: function get() {
      return Array.from(this.templateElement.content.children);
    }
  }], [{
    key: "wrap",
    value: function wrap(message) {
      if (typeof message == "string") {
        return new this(message);
      } else {
        return message;
      }
    }
  }]);

  return StreamMessage;
}();

StreamMessage.contentType = "text/vnd.turbo-stream.html";
var FormSubmissionState;

(function (FormSubmissionState) {
  FormSubmissionState[FormSubmissionState["initialized"] = 0] = "initialized";
  FormSubmissionState[FormSubmissionState["requesting"] = 1] = "requesting";
  FormSubmissionState[FormSubmissionState["waiting"] = 2] = "waiting";
  FormSubmissionState[FormSubmissionState["receiving"] = 3] = "receiving";
  FormSubmissionState[FormSubmissionState["stopping"] = 4] = "stopping";
  FormSubmissionState[FormSubmissionState["stopped"] = 5] = "stopped";
})(FormSubmissionState || (FormSubmissionState = {}));

var FormEnctype;

(function (FormEnctype) {
  FormEnctype["urlEncoded"] = "application/x-www-form-urlencoded";
  FormEnctype["multipart"] = "multipart/form-data";
  FormEnctype["plain"] = "text/plain";
})(FormEnctype || (FormEnctype = {}));

function formEnctypeFromString(encoding) {
  switch (encoding.toLowerCase()) {
    case FormEnctype.multipart:
      return FormEnctype.multipart;

    case FormEnctype.plain:
      return FormEnctype.plain;

    default:
      return FormEnctype.urlEncoded;
  }
}

var FormSubmission = /*#__PURE__*/function () {
  function FormSubmission(delegate, formElement, submitter) {
    var mustRedirect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, FormSubmission);

    this.state = FormSubmissionState.initialized;
    this.delegate = delegate;
    this.formElement = formElement;
    this.submitter = submitter;
    this.formData = buildFormData(formElement, submitter);
    this.fetchRequest = new FetchRequest(this, this.method, this.location, this.body);
    this.mustRedirect = mustRedirect;
  }

  _createClass(FormSubmission, [{
    key: "method",
    get: function get() {
      var _a;

      var method = ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formmethod")) || this.formElement.getAttribute("method") || "";
      return fetchMethodFromString(method.toLowerCase()) || FetchMethod.get;
    }
  }, {
    key: "action",
    get: function get() {
      var _a;

      var formElementAction = typeof this.formElement.action === 'string' ? this.formElement.action : null;
      return ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formaction")) || this.formElement.getAttribute("action") || formElementAction || "";
    }
  }, {
    key: "location",
    get: function get() {
      return expandURL(this.action);
    }
  }, {
    key: "body",
    get: function get() {
      if (this.enctype == FormEnctype.urlEncoded || this.method == FetchMethod.get) {
        return new URLSearchParams(this.stringFormData);
      } else {
        return this.formData;
      }
    }
  }, {
    key: "enctype",
    get: function get() {
      var _a;

      return formEnctypeFromString(((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formenctype")) || this.formElement.enctype);
    }
  }, {
    key: "isIdempotent",
    get: function get() {
      return this.fetchRequest.isIdempotent;
    }
  }, {
    key: "stringFormData",
    get: function get() {
      return _toConsumableArray(this.formData).reduce(function (entries, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            name = _ref6[0],
            value = _ref6[1];

        return entries.concat(typeof value == "string" ? [[name, value]] : []);
      }, []);
    }
  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _FormSubmissionState, initialized, requesting;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _FormSubmissionState = FormSubmissionState, initialized = _FormSubmissionState.initialized, requesting = _FormSubmissionState.requesting;

                if (!(this.state == initialized)) {
                  _context4.next = 4;
                  break;
                }

                this.state = requesting;
                return _context4.abrupt("return", this.fetchRequest.perform());

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      var _FormSubmissionState2 = FormSubmissionState,
          stopping = _FormSubmissionState2.stopping,
          stopped = _FormSubmissionState2.stopped;

      if (this.state != stopping && this.state != stopped) {
        this.state = stopping;
        this.fetchRequest.cancel();
        return true;
      }
    }
  }, {
    key: "prepareHeadersForRequest",
    value: function prepareHeadersForRequest(headers, request) {
      if (!request.isIdempotent) {
        var token = getCookieValue(getMetaContent("csrf-param")) || getMetaContent("csrf-token");

        if (token) {
          headers["X-CSRF-Token"] = token;
        }

        headers["Accept"] = [StreamMessage.contentType, headers["Accept"]].join(", ");
      }
    }
  }, {
    key: "requestStarted",
    value: function requestStarted(request) {
      this.state = FormSubmissionState.waiting;
      dispatch("turbo:submit-start", {
        target: this.formElement,
        detail: {
          formSubmission: this
        }
      });
      this.delegate.formSubmissionStarted(this);
    }
  }, {
    key: "requestPreventedHandlingResponse",
    value: function requestPreventedHandlingResponse(request, response) {
      this.result = {
        success: response.succeeded,
        fetchResponse: response
      };
    }
  }, {
    key: "requestSucceededWithResponse",
    value: function requestSucceededWithResponse(request, response) {
      if (response.clientError || response.serverError) {
        this.delegate.formSubmissionFailedWithResponse(this, response);
      } else if (this.requestMustRedirect(request) && responseSucceededWithoutRedirect(response)) {
        var error = new Error("Form responses must redirect to another location");
        this.delegate.formSubmissionErrored(this, error);
      } else {
        this.state = FormSubmissionState.receiving;
        this.result = {
          success: true,
          fetchResponse: response
        };
        this.delegate.formSubmissionSucceededWithResponse(this, response);
      }
    }
  }, {
    key: "requestFailedWithResponse",
    value: function requestFailedWithResponse(request, response) {
      this.result = {
        success: false,
        fetchResponse: response
      };
      this.delegate.formSubmissionFailedWithResponse(this, response);
    }
  }, {
    key: "requestErrored",
    value: function requestErrored(request, error) {
      this.result = {
        success: false,
        error: error
      };
      this.delegate.formSubmissionErrored(this, error);
    }
  }, {
    key: "requestFinished",
    value: function requestFinished(request) {
      this.state = FormSubmissionState.stopped;
      dispatch("turbo:submit-end", {
        target: this.formElement,
        detail: Object.assign({
          formSubmission: this
        }, this.result)
      });
      this.delegate.formSubmissionFinished(this);
    }
  }, {
    key: "requestMustRedirect",
    value: function requestMustRedirect(request) {
      return !request.isIdempotent && this.mustRedirect;
    }
  }]);

  return FormSubmission;
}();

function buildFormData(formElement, submitter) {
  var formData = new FormData(formElement);
  var name = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("name");
  var value = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("value");

  if (name && value != null && formData.get(name) != value) {
    formData.append(name, value);
  }

  return formData;
}

function getCookieValue(cookieName) {
  if (cookieName != null) {
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var cookie = cookies.find(function (cookie) {
      return cookie.startsWith(cookieName);
    });

    if (cookie) {
      var value = cookie.split("=").slice(1).join("=");
      return value ? decodeURIComponent(value) : undefined;
    }
  }
}

function getMetaContent(name) {
  var element = document.querySelector("meta[name=\"".concat(name, "\"]"));
  return element && element.content;
}

function responseSucceededWithoutRedirect(response) {
  return response.statusCode == 200 && !response.redirected;
}

var Snapshot = /*#__PURE__*/function () {
  function Snapshot(element) {
    _classCallCheck(this, Snapshot);

    this.element = element;
  }

  _createClass(Snapshot, [{
    key: "children",
    get: function get() {
      return _toConsumableArray(this.element.children);
    }
  }, {
    key: "hasAnchor",
    value: function hasAnchor(anchor) {
      return this.getElementForAnchor(anchor) != null;
    }
  }, {
    key: "getElementForAnchor",
    value: function getElementForAnchor(anchor) {
      return anchor ? this.element.querySelector("[id='".concat(anchor, "'], a[name='").concat(anchor, "']")) : null;
    }
  }, {
    key: "isConnected",
    get: function get() {
      return this.element.isConnected;
    }
  }, {
    key: "firstAutofocusableElement",
    get: function get() {
      return this.element.querySelector("[autofocus]");
    }
  }, {
    key: "permanentElements",
    get: function get() {
      return _toConsumableArray(this.element.querySelectorAll("[id][data-turbo-permanent]"));
    }
  }, {
    key: "getPermanentElementById",
    value: function getPermanentElementById(id) {
      return this.element.querySelector("#".concat(id, "[data-turbo-permanent]"));
    }
  }, {
    key: "getPermanentElementMapForSnapshot",
    value: function getPermanentElementMapForSnapshot(snapshot) {
      var permanentElementMap = {};

      var _iterator3 = _createForOfIteratorHelper(this.permanentElements),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var currentPermanentElement = _step3.value;
          var id = currentPermanentElement.id;
          var newPermanentElement = snapshot.getPermanentElementById(id);

          if (newPermanentElement) {
            permanentElementMap[id] = [currentPermanentElement, newPermanentElement];
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return permanentElementMap;
    }
  }]);

  return Snapshot;
}();

var FormInterceptor = /*#__PURE__*/function () {
  function FormInterceptor(delegate, element) {
    var _this4 = this;

    _classCallCheck(this, FormInterceptor);

    this.submitBubbled = function (event) {
      if (event.target instanceof HTMLFormElement) {
        var form = event.target;
        var submitter = event.submitter || undefined;

        if (_this4.delegate.shouldInterceptFormSubmission(form, submitter)) {
          event.preventDefault();
          event.stopImmediatePropagation();

          _this4.delegate.formSubmissionIntercepted(form, submitter);
        }
      }
    };

    this.delegate = delegate;
    this.element = element;
  }

  _createClass(FormInterceptor, [{
    key: "start",
    value: function start() {
      this.element.addEventListener("submit", this.submitBubbled);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.element.removeEventListener("submit", this.submitBubbled);
    }
  }]);

  return FormInterceptor;
}();

var View = /*#__PURE__*/function () {
  function View(delegate, element) {
    _classCallCheck(this, View);

    this.resolveRenderPromise = function (value) {};

    this.resolveInterceptionPromise = function (value) {};

    this.delegate = delegate;
    this.element = element;
  }

  _createClass(View, [{
    key: "scrollToAnchor",
    value: function scrollToAnchor(anchor) {
      var element = this.snapshot.getElementForAnchor(anchor);

      if (element) {
        this.scrollToElement(element);
        this.focusElement(element);
      } else {
        this.scrollToPosition({
          x: 0,
          y: 0
        });
      }
    }
  }, {
    key: "scrollToAnchorFromLocation",
    value: function scrollToAnchorFromLocation(location) {
      this.scrollToAnchor(getAnchor(location));
    }
  }, {
    key: "scrollToElement",
    value: function scrollToElement(element) {
      element.scrollIntoView();
    }
  }, {
    key: "focusElement",
    value: function focusElement(element) {
      if (element instanceof HTMLElement) {
        if (element.hasAttribute("tabindex")) {
          element.focus();
        } else {
          element.setAttribute("tabindex", "-1");
          element.focus();
          element.removeAttribute("tabindex");
        }
      }
    }
  }, {
    key: "scrollToPosition",
    value: function scrollToPosition(_ref7) {
      var x = _ref7.x,
          y = _ref7.y;
      this.scrollRoot.scrollTo(x, y);
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      this.scrollToPosition({
        x: 0,
        y: 0
      });
    }
  }, {
    key: "scrollRoot",
    get: function get() {
      return window;
    }
  }, {
    key: "render",
    value: function () {
      var _render = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(renderer) {
        var _this5 = this;

        var isPreview, shouldRender, snapshot, renderInterception, immediateRender;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                isPreview = renderer.isPreview, shouldRender = renderer.shouldRender, snapshot = renderer.newSnapshot;

                if (!shouldRender) {
                  _context5.next = 22;
                  break;
                }

                _context5.prev = 2;
                this.renderPromise = new Promise(function (resolve) {
                  return _this5.resolveRenderPromise = resolve;
                });
                this.renderer = renderer;
                this.prepareToRenderSnapshot(renderer);
                renderInterception = new Promise(function (resolve) {
                  return _this5.resolveInterceptionPromise = resolve;
                });
                immediateRender = this.delegate.allowsImmediateRender(snapshot, this.resolveInterceptionPromise);

                if (immediateRender) {
                  _context5.next = 11;
                  break;
                }

                _context5.next = 11;
                return renderInterception;

              case 11:
                _context5.next = 13;
                return this.renderSnapshot(renderer);

              case 13:
                this.delegate.viewRenderedSnapshot(snapshot, isPreview);
                this.finishRenderingSnapshot(renderer);

              case 15:
                _context5.prev = 15;
                delete this.renderer;
                this.resolveRenderPromise(undefined);
                delete this.renderPromise;
                return _context5.finish(15);

              case 20:
                _context5.next = 23;
                break;

              case 22:
                this.invalidate();

              case 23:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2,, 15, 20]]);
      }));

      function render(_x3) {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "invalidate",
    value: function invalidate() {
      this.delegate.viewInvalidated();
    }
  }, {
    key: "prepareToRenderSnapshot",
    value: function prepareToRenderSnapshot(renderer) {
      this.markAsPreview(renderer.isPreview);
      renderer.prepareToRender();
    }
  }, {
    key: "markAsPreview",
    value: function markAsPreview(isPreview) {
      if (isPreview) {
        this.element.setAttribute("data-turbo-preview", "");
      } else {
        this.element.removeAttribute("data-turbo-preview");
      }
    }
  }, {
    key: "renderSnapshot",
    value: function () {
      var _renderSnapshot = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(renderer) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return renderer.render();

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function renderSnapshot(_x4) {
        return _renderSnapshot.apply(this, arguments);
      }

      return renderSnapshot;
    }()
  }, {
    key: "finishRenderingSnapshot",
    value: function finishRenderingSnapshot(renderer) {
      renderer.finishRendering();
    }
  }]);

  return View;
}();

var FrameView = /*#__PURE__*/function (_View) {
  _inherits(FrameView, _View);

  var _super2 = _createSuper(FrameView);

  function FrameView() {
    _classCallCheck(this, FrameView);

    return _super2.apply(this, arguments);
  }

  _createClass(FrameView, [{
    key: "invalidate",
    value: function invalidate() {
      this.element.innerHTML = "";
    }
  }, {
    key: "snapshot",
    get: function get() {
      return new Snapshot(this.element);
    }
  }]);

  return FrameView;
}(View);

var LinkInterceptor = /*#__PURE__*/function () {
  function LinkInterceptor(delegate, element) {
    var _this6 = this;

    _classCallCheck(this, LinkInterceptor);

    this.clickBubbled = function (event) {
      if (_this6.respondsToEventTarget(event.target)) {
        _this6.clickEvent = event;
      } else {
        delete _this6.clickEvent;
      }
    };

    this.linkClicked = function (event) {
      if (_this6.clickEvent && _this6.respondsToEventTarget(event.target) && event.target instanceof Element) {
        if (_this6.delegate.shouldInterceptLinkClick(event.target, event.detail.url)) {
          _this6.clickEvent.preventDefault();

          event.preventDefault();

          _this6.delegate.linkClickIntercepted(event.target, event.detail.url);
        }
      }

      delete _this6.clickEvent;
    };

    this.willVisit = function () {
      delete _this6.clickEvent;
    };

    this.delegate = delegate;
    this.element = element;
  }

  _createClass(LinkInterceptor, [{
    key: "start",
    value: function start() {
      this.element.addEventListener("click", this.clickBubbled);
      document.addEventListener("turbo:click", this.linkClicked);
      document.addEventListener("turbo:before-visit", this.willVisit);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.element.removeEventListener("click", this.clickBubbled);
      document.removeEventListener("turbo:click", this.linkClicked);
      document.removeEventListener("turbo:before-visit", this.willVisit);
    }
  }, {
    key: "respondsToEventTarget",
    value: function respondsToEventTarget(target) {
      var element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
      return element && element.closest("turbo-frame, html") == this.element;
    }
  }]);

  return LinkInterceptor;
}();

var Bardo = /*#__PURE__*/function () {
  function Bardo(permanentElementMap) {
    _classCallCheck(this, Bardo);

    this.permanentElementMap = permanentElementMap;
  }

  _createClass(Bardo, [{
    key: "enter",
    value: function enter() {
      for (var id in this.permanentElementMap) {
        var _this$permanentElemen = _slicedToArray(this.permanentElementMap[id], 2),
            newPermanentElement = _this$permanentElemen[1];

        this.replaceNewPermanentElementWithPlaceholder(newPermanentElement);
      }
    }
  }, {
    key: "leave",
    value: function leave() {
      for (var id in this.permanentElementMap) {
        var _this$permanentElemen2 = _slicedToArray(this.permanentElementMap[id], 1),
            currentPermanentElement = _this$permanentElemen2[0];

        this.replaceCurrentPermanentElementWithClone(currentPermanentElement);
        this.replacePlaceholderWithPermanentElement(currentPermanentElement);
      }
    }
  }, {
    key: "replaceNewPermanentElementWithPlaceholder",
    value: function replaceNewPermanentElementWithPlaceholder(permanentElement) {
      var placeholder = createPlaceholderForPermanentElement(permanentElement);
      permanentElement.replaceWith(placeholder);
    }
  }, {
    key: "replaceCurrentPermanentElementWithClone",
    value: function replaceCurrentPermanentElementWithClone(permanentElement) {
      var clone = permanentElement.cloneNode(true);
      permanentElement.replaceWith(clone);
    }
  }, {
    key: "replacePlaceholderWithPermanentElement",
    value: function replacePlaceholderWithPermanentElement(permanentElement) {
      var placeholder = this.getPlaceholderById(permanentElement.id);
      placeholder === null || placeholder === void 0 ? void 0 : placeholder.replaceWith(permanentElement);
    }
  }, {
    key: "getPlaceholderById",
    value: function getPlaceholderById(id) {
      return this.placeholders.find(function (element) {
        return element.content == id;
      });
    }
  }, {
    key: "placeholders",
    get: function get() {
      return _toConsumableArray(document.querySelectorAll("meta[name=turbo-permanent-placeholder][content]"));
    }
  }], [{
    key: "preservingPermanentElements",
    value: function preservingPermanentElements(permanentElementMap, callback) {
      var bardo = new this(permanentElementMap);
      bardo.enter();
      callback();
      bardo.leave();
    }
  }]);

  return Bardo;
}();

function createPlaceholderForPermanentElement(permanentElement) {
  var element = document.createElement("meta");
  element.setAttribute("name", "turbo-permanent-placeholder");
  element.setAttribute("content", permanentElement.id);
  return element;
}

var Renderer = /*#__PURE__*/function () {
  function Renderer(currentSnapshot, newSnapshot, isPreview) {
    var _this7 = this;

    _classCallCheck(this, Renderer);

    this.currentSnapshot = currentSnapshot;
    this.newSnapshot = newSnapshot;
    this.isPreview = isPreview;
    this.promise = new Promise(function (resolve, reject) {
      return _this7.resolvingFunctions = {
        resolve: resolve,
        reject: reject
      };
    });
  }

  _createClass(Renderer, [{
    key: "shouldRender",
    get: function get() {
      return true;
    }
  }, {
    key: "prepareToRender",
    value: function prepareToRender() {
      return;
    }
  }, {
    key: "finishRendering",
    value: function finishRendering() {
      if (this.resolvingFunctions) {
        this.resolvingFunctions.resolve();
        delete this.resolvingFunctions;
      }
    }
  }, {
    key: "createScriptElement",
    value: function createScriptElement(element) {
      if (element.getAttribute("data-turbo-eval") == "false") {
        return element;
      } else {
        var createdScriptElement = document.createElement("script");

        if (this.cspNonce) {
          createdScriptElement.nonce = this.cspNonce;
        }

        createdScriptElement.textContent = element.textContent;
        createdScriptElement.async = false;
        copyElementAttributes(createdScriptElement, element);
        return createdScriptElement;
      }
    }
  }, {
    key: "preservingPermanentElements",
    value: function preservingPermanentElements(callback) {
      Bardo.preservingPermanentElements(this.permanentElementMap, callback);
    }
  }, {
    key: "focusFirstAutofocusableElement",
    value: function focusFirstAutofocusableElement() {
      var element = this.connectedSnapshot.firstAutofocusableElement;

      if (elementIsFocusable(element)) {
        element.focus();
      }
    }
  }, {
    key: "connectedSnapshot",
    get: function get() {
      return this.newSnapshot.isConnected ? this.newSnapshot : this.currentSnapshot;
    }
  }, {
    key: "currentElement",
    get: function get() {
      return this.currentSnapshot.element;
    }
  }, {
    key: "newElement",
    get: function get() {
      return this.newSnapshot.element;
    }
  }, {
    key: "permanentElementMap",
    get: function get() {
      return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot);
    }
  }, {
    key: "cspNonce",
    get: function get() {
      var _a;

      return (_a = document.head.querySelector('meta[name="csp-nonce"]')) === null || _a === void 0 ? void 0 : _a.getAttribute("content");
    }
  }]);

  return Renderer;
}();

function copyElementAttributes(destinationElement, sourceElement) {
  for (var _i2 = 0, _arr2 = _toConsumableArray(sourceElement.attributes); _i2 < _arr2.length; _i2++) {
    var _ref9 = _arr2[_i2];
    var name = _ref9.name;
    var value = _ref9.value;
    destinationElement.setAttribute(name, value);
  }
}

function elementIsFocusable(element) {
  return element && typeof element.focus == "function";
}

var FrameRenderer = /*#__PURE__*/function (_Renderer) {
  _inherits(FrameRenderer, _Renderer);

  var _super3 = _createSuper(FrameRenderer);

  function FrameRenderer() {
    _classCallCheck(this, FrameRenderer);

    return _super3.apply(this, arguments);
  }

  _createClass(FrameRenderer, [{
    key: "shouldRender",
    get: function get() {
      return true;
    }
  }, {
    key: "render",
    value: function () {
      var _render2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var _this8 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return nextAnimationFrame();

              case 2:
                this.preservingPermanentElements(function () {
                  _this8.loadFrameElement();
                });
                this.scrollFrameIntoView();
                _context7.next = 6;
                return nextAnimationFrame();

              case 6:
                this.focusFirstAutofocusableElement();
                _context7.next = 9;
                return nextAnimationFrame();

              case 9:
                this.activateScriptElements();

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function render() {
        return _render2.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "loadFrameElement",
    value: function loadFrameElement() {
      var _a;

      var destinationRange = document.createRange();
      destinationRange.selectNodeContents(this.currentElement);
      destinationRange.deleteContents();
      var frameElement = this.newElement;
      var sourceRange = (_a = frameElement.ownerDocument) === null || _a === void 0 ? void 0 : _a.createRange();

      if (sourceRange) {
        sourceRange.selectNodeContents(frameElement);
        this.currentElement.appendChild(sourceRange.extractContents());
      }
    }
  }, {
    key: "scrollFrameIntoView",
    value: function scrollFrameIntoView() {
      if (this.currentElement.autoscroll || this.newElement.autoscroll) {
        var element = this.currentElement.firstElementChild;
        var block = readScrollLogicalPosition(this.currentElement.getAttribute("data-autoscroll-block"), "end");

        if (element) {
          element.scrollIntoView({
            block: block
          });
          return true;
        }
      }

      return false;
    }
  }, {
    key: "activateScriptElements",
    value: function activateScriptElements() {
      var _iterator4 = _createForOfIteratorHelper(this.newScriptElements),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var inertScriptElement = _step4.value;
          var activatedScriptElement = this.createScriptElement(inertScriptElement);
          inertScriptElement.replaceWith(activatedScriptElement);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "newScriptElements",
    get: function get() {
      return this.currentElement.querySelectorAll("script");
    }
  }]);

  return FrameRenderer;
}(Renderer);

function readScrollLogicalPosition(value, defaultValue) {
  if (value == "end" || value == "start" || value == "center" || value == "nearest") {
    return value;
  } else {
    return defaultValue;
  }
}

var ProgressBar = /*#__PURE__*/function () {
  function ProgressBar() {
    var _this9 = this;

    _classCallCheck(this, ProgressBar);

    this.hiding = false;
    this.value = 0;
    this.visible = false;

    this.trickle = function () {
      _this9.setValue(_this9.value + Math.random() / 100);
    };

    this.stylesheetElement = this.createStylesheetElement();
    this.progressElement = this.createProgressElement();
    this.installStylesheetElement();
    this.setValue(0);
  }

  _createClass(ProgressBar, [{
    key: "show",
    value: function show() {
      if (!this.visible) {
        this.visible = true;
        this.installProgressElement();
        this.startTrickling();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this10 = this;

      if (this.visible && !this.hiding) {
        this.hiding = true;
        this.fadeProgressElement(function () {
          _this10.uninstallProgressElement();

          _this10.stopTrickling();

          _this10.visible = false;
          _this10.hiding = false;
        });
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.value = value;
      this.refresh();
    }
  }, {
    key: "installStylesheetElement",
    value: function installStylesheetElement() {
      document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
    }
  }, {
    key: "installProgressElement",
    value: function installProgressElement() {
      this.progressElement.style.width = "0";
      this.progressElement.style.opacity = "1";
      document.documentElement.insertBefore(this.progressElement, document.body);
      this.refresh();
    }
  }, {
    key: "fadeProgressElement",
    value: function fadeProgressElement(callback) {
      this.progressElement.style.opacity = "0";
      setTimeout(callback, ProgressBar.animationDuration * 1.5);
    }
  }, {
    key: "uninstallProgressElement",
    value: function uninstallProgressElement() {
      if (this.progressElement.parentNode) {
        document.documentElement.removeChild(this.progressElement);
      }
    }
  }, {
    key: "startTrickling",
    value: function startTrickling() {
      if (!this.trickleInterval) {
        this.trickleInterval = window.setInterval(this.trickle, ProgressBar.animationDuration);
      }
    }
  }, {
    key: "stopTrickling",
    value: function stopTrickling() {
      window.clearInterval(this.trickleInterval);
      delete this.trickleInterval;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this11 = this;

      requestAnimationFrame(function () {
        _this11.progressElement.style.width = "".concat(10 + _this11.value * 90, "%");
      });
    }
  }, {
    key: "createStylesheetElement",
    value: function createStylesheetElement() {
      var element = document.createElement("style");
      element.type = "text/css";
      element.textContent = ProgressBar.defaultCSS;
      return element;
    }
  }, {
    key: "createProgressElement",
    value: function createProgressElement() {
      var element = document.createElement("div");
      element.className = "turbo-progress-bar";
      return element;
    }
  }], [{
    key: "defaultCSS",
    get: function get() {
      return unindent(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      .turbo-progress-bar {\n        position: fixed;\n        display: block;\n        top: 0;\n        left: 0;\n        height: 3px;\n        background: #0076ff;\n        z-index: 9999;\n        transition:\n          width ", "ms ease-out,\n          opacity ", "ms ", "ms ease-in;\n        transform: translate3d(0, 0, 0);\n      }\n    "])), ProgressBar.animationDuration, ProgressBar.animationDuration / 2, ProgressBar.animationDuration / 2);
    }
  }]);

  return ProgressBar;
}();

ProgressBar.animationDuration = 300;

var HeadSnapshot = /*#__PURE__*/function (_Snapshot) {
  _inherits(HeadSnapshot, _Snapshot);

  var _super4 = _createSuper(HeadSnapshot);

  function HeadSnapshot() {
    var _this12;

    _classCallCheck(this, HeadSnapshot);

    _this12 = _super4.apply(this, arguments);
    _this12.detailsByOuterHTML = _this12.children.filter(function (element) {
      return !elementIsNoscript(element);
    }).reduce(function (result, element) {
      var outerHTML = element.outerHTML;
      var details = outerHTML in result ? result[outerHTML] : {
        type: elementType(element),
        tracked: elementIsTracked(element),
        elements: []
      };
      return Object.assign(Object.assign({}, result), _defineProperty({}, outerHTML, Object.assign(Object.assign({}, details), {
        elements: [].concat(_toConsumableArray(details.elements), [element])
      })));
    }, {});
    return _this12;
  }

  _createClass(HeadSnapshot, [{
    key: "trackedElementSignature",
    get: function get() {
      var _this13 = this;

      return Object.keys(this.detailsByOuterHTML).filter(function (outerHTML) {
        return _this13.detailsByOuterHTML[outerHTML].tracked;
      }).join("");
    }
  }, {
    key: "getScriptElementsNotInSnapshot",
    value: function getScriptElementsNotInSnapshot(snapshot) {
      return this.getElementsMatchingTypeNotInSnapshot("script", snapshot);
    }
  }, {
    key: "getStylesheetElementsNotInSnapshot",
    value: function getStylesheetElementsNotInSnapshot(snapshot) {
      return this.getElementsMatchingTypeNotInSnapshot("stylesheet", snapshot);
    }
  }, {
    key: "getElementsMatchingTypeNotInSnapshot",
    value: function getElementsMatchingTypeNotInSnapshot(matchedType, snapshot) {
      var _this14 = this;

      return Object.keys(this.detailsByOuterHTML).filter(function (outerHTML) {
        return !(outerHTML in snapshot.detailsByOuterHTML);
      }).map(function (outerHTML) {
        return _this14.detailsByOuterHTML[outerHTML];
      }).filter(function (_ref10) {
        var type = _ref10.type;
        return type == matchedType;
      }).map(function (_ref11) {
        var _ref11$elements = _slicedToArray(_ref11.elements, 1),
            element = _ref11$elements[0];

        return element;
      });
    }
  }, {
    key: "provisionalElements",
    get: function get() {
      var _this15 = this;

      return Object.keys(this.detailsByOuterHTML).reduce(function (result, outerHTML) {
        var _this15$detailsByOute = _this15.detailsByOuterHTML[outerHTML],
            type = _this15$detailsByOute.type,
            tracked = _this15$detailsByOute.tracked,
            elements = _this15$detailsByOute.elements;

        if (type == null && !tracked) {
          return [].concat(_toConsumableArray(result), _toConsumableArray(elements));
        } else if (elements.length > 1) {
          return [].concat(_toConsumableArray(result), _toConsumableArray(elements.slice(1)));
        } else {
          return result;
        }
      }, []);
    }
  }, {
    key: "getMetaValue",
    value: function getMetaValue(name) {
      var element = this.findMetaElementByName(name);
      return element ? element.getAttribute("content") : null;
    }
  }, {
    key: "findMetaElementByName",
    value: function findMetaElementByName(name) {
      var _this16 = this;

      return Object.keys(this.detailsByOuterHTML).reduce(function (result, outerHTML) {
        var _this16$detailsByOute = _slicedToArray(_this16.detailsByOuterHTML[outerHTML].elements, 1),
            element = _this16$detailsByOute[0];

        return elementIsMetaElementWithName(element, name) ? element : result;
      }, undefined);
    }
  }]);

  return HeadSnapshot;
}(Snapshot);

function elementType(element) {
  if (elementIsScript(element)) {
    return "script";
  } else if (elementIsStylesheet(element)) {
    return "stylesheet";
  }
}

function elementIsTracked(element) {
  return element.getAttribute("data-turbo-track") == "reload";
}

function elementIsScript(element) {
  var tagName = element.tagName.toLowerCase();
  return tagName == "script";
}

function elementIsNoscript(element) {
  var tagName = element.tagName.toLowerCase();
  return tagName == "noscript";
}

function elementIsStylesheet(element) {
  var tagName = element.tagName.toLowerCase();
  return tagName == "style" || tagName == "link" && element.getAttribute("rel") == "stylesheet";
}

function elementIsMetaElementWithName(element, name) {
  var tagName = element.tagName.toLowerCase();
  return tagName == "meta" && element.getAttribute("name") == name;
}

var PageSnapshot = /*#__PURE__*/function (_Snapshot2) {
  _inherits(PageSnapshot, _Snapshot2);

  var _super5 = _createSuper(PageSnapshot);

  function PageSnapshot(element, headSnapshot) {
    var _this17;

    _classCallCheck(this, PageSnapshot);

    _this17 = _super5.call(this, element);
    _this17.headSnapshot = headSnapshot;
    return _this17;
  }

  _createClass(PageSnapshot, [{
    key: "clone",
    value: function clone() {
      return new PageSnapshot(this.element.cloneNode(true), this.headSnapshot);
    }
  }, {
    key: "headElement",
    get: function get() {
      return this.headSnapshot.element;
    }
  }, {
    key: "rootLocation",
    get: function get() {
      var _a;

      var root = (_a = this.getSetting("root")) !== null && _a !== void 0 ? _a : "/";
      return expandURL(root);
    }
  }, {
    key: "cacheControlValue",
    get: function get() {
      return this.getSetting("cache-control");
    }
  }, {
    key: "isPreviewable",
    get: function get() {
      return this.cacheControlValue != "no-preview";
    }
  }, {
    key: "isCacheable",
    get: function get() {
      return this.cacheControlValue != "no-cache";
    }
  }, {
    key: "isVisitable",
    get: function get() {
      return this.getSetting("visit-control") != "reload";
    }
  }, {
    key: "getSetting",
    value: function getSetting(name) {
      return this.headSnapshot.getMetaValue("turbo-".concat(name));
    }
  }], [{
    key: "fromHTMLString",
    value: function fromHTMLString() {
      var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      return this.fromDocument(parseHTMLDocument(html));
    }
  }, {
    key: "fromElement",
    value: function fromElement(element) {
      return this.fromDocument(element.ownerDocument);
    }
  }, {
    key: "fromDocument",
    value: function fromDocument(_ref12) {
      var head = _ref12.head,
          body = _ref12.body;
      return new this(body, new HeadSnapshot(head));
    }
  }]);

  return PageSnapshot;
}(Snapshot);

var TimingMetric;

(function (TimingMetric) {
  TimingMetric["visitStart"] = "visitStart";
  TimingMetric["requestStart"] = "requestStart";
  TimingMetric["requestEnd"] = "requestEnd";
  TimingMetric["visitEnd"] = "visitEnd";
})(TimingMetric || (TimingMetric = {}));

var VisitState;

(function (VisitState) {
  VisitState["initialized"] = "initialized";
  VisitState["started"] = "started";
  VisitState["canceled"] = "canceled";
  VisitState["failed"] = "failed";
  VisitState["completed"] = "completed";
})(VisitState || (VisitState = {}));

var defaultOptions = {
  action: "advance",
  historyChanged: false
};
var SystemStatusCode;

(function (SystemStatusCode) {
  SystemStatusCode[SystemStatusCode["networkFailure"] = 0] = "networkFailure";
  SystemStatusCode[SystemStatusCode["timeoutFailure"] = -1] = "timeoutFailure";
  SystemStatusCode[SystemStatusCode["contentTypeMismatch"] = -2] = "contentTypeMismatch";
})(SystemStatusCode || (SystemStatusCode = {}));

var Visit = /*#__PURE__*/function () {
  function Visit(delegate, location, restorationIdentifier) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Visit);

    this.identifier = uuid();
    this.timingMetrics = {};
    this.followedRedirect = false;
    this.historyChanged = false;
    this.scrolled = false;
    this.snapshotCached = false;
    this.state = VisitState.initialized;
    this.delegate = delegate;
    this.location = location;
    this.restorationIdentifier = restorationIdentifier || uuid();

    var _Object$assign2 = Object.assign(Object.assign({}, defaultOptions), options),
        action = _Object$assign2.action,
        historyChanged = _Object$assign2.historyChanged,
        referrer = _Object$assign2.referrer,
        snapshotHTML = _Object$assign2.snapshotHTML,
        response = _Object$assign2.response;

    this.action = action;
    this.historyChanged = historyChanged;
    this.referrer = referrer;
    this.snapshotHTML = snapshotHTML;
    this.response = response;
    this.isSamePage = this.delegate.locationWithActionIsSamePage(this.location, this.action);
  }

  _createClass(Visit, [{
    key: "adapter",
    get: function get() {
      return this.delegate.adapter;
    }
  }, {
    key: "view",
    get: function get() {
      return this.delegate.view;
    }
  }, {
    key: "history",
    get: function get() {
      return this.delegate.history;
    }
  }, {
    key: "restorationData",
    get: function get() {
      return this.history.getRestorationDataForIdentifier(this.restorationIdentifier);
    }
  }, {
    key: "silent",
    get: function get() {
      return this.isSamePage;
    }
  }, {
    key: "start",
    value: function start() {
      if (this.state == VisitState.initialized) {
        this.recordTimingMetric(TimingMetric.visitStart);
        this.state = VisitState.started;
        this.adapter.visitStarted(this);
        this.delegate.visitStarted(this);
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this.state == VisitState.started) {
        if (this.request) {
          this.request.cancel();
        }

        this.cancelRender();
        this.state = VisitState.canceled;
      }
    }
  }, {
    key: "complete",
    value: function complete() {
      if (this.state == VisitState.started) {
        this.recordTimingMetric(TimingMetric.visitEnd);
        this.state = VisitState.completed;
        this.adapter.visitCompleted(this);
        this.delegate.visitCompleted(this);
        this.followRedirect();
      }
    }
  }, {
    key: "fail",
    value: function fail() {
      if (this.state == VisitState.started) {
        this.state = VisitState.failed;
        this.adapter.visitFailed(this);
      }
    }
  }, {
    key: "changeHistory",
    value: function changeHistory() {
      var _a;

      if (!this.historyChanged) {
        var actionForHistory = this.location.href === ((_a = this.referrer) === null || _a === void 0 ? void 0 : _a.href) ? "replace" : this.action;
        var method = this.getHistoryMethodForAction(actionForHistory);
        this.history.update(method, this.location, this.restorationIdentifier);
        this.historyChanged = true;
      }
    }
  }, {
    key: "issueRequest",
    value: function issueRequest() {
      if (this.hasPreloadedResponse()) {
        this.simulateRequest();
      } else if (this.shouldIssueRequest() && !this.request) {
        this.request = new FetchRequest(this, FetchMethod.get, this.location);
        this.request.perform();
      }
    }
  }, {
    key: "simulateRequest",
    value: function simulateRequest() {
      if (this.response) {
        this.startRequest();
        this.recordResponse();
        this.finishRequest();
      }
    }
  }, {
    key: "startRequest",
    value: function startRequest() {
      this.recordTimingMetric(TimingMetric.requestStart);
      this.adapter.visitRequestStarted(this);
    }
  }, {
    key: "recordResponse",
    value: function recordResponse() {
      var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.response;
      this.response = response;

      if (response) {
        var statusCode = response.statusCode;

        if (isSuccessful(statusCode)) {
          this.adapter.visitRequestCompleted(this);
        } else {
          this.adapter.visitRequestFailedWithStatusCode(this, statusCode);
        }
      }
    }
  }, {
    key: "finishRequest",
    value: function finishRequest() {
      this.recordTimingMetric(TimingMetric.requestEnd);
      this.adapter.visitRequestFinished(this);
    }
  }, {
    key: "loadResponse",
    value: function loadResponse() {
      var _this18 = this;

      if (this.response) {
        var _this$response = this.response,
            statusCode = _this$response.statusCode,
            responseHTML = _this$response.responseHTML;
        this.render( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _this18.cacheSnapshot();

                  if (!_this18.view.renderPromise) {
                    _context8.next = 4;
                    break;
                  }

                  _context8.next = 4;
                  return _this18.view.renderPromise;

                case 4:
                  if (!(isSuccessful(statusCode) && responseHTML != null)) {
                    _context8.next = 11;
                    break;
                  }

                  _context8.next = 7;
                  return _this18.view.renderPage(PageSnapshot.fromHTMLString(responseHTML));

                case 7:
                  _this18.adapter.visitRendered(_this18);

                  _this18.complete();

                  _context8.next = 15;
                  break;

                case 11:
                  _context8.next = 13;
                  return _this18.view.renderError(PageSnapshot.fromHTMLString(responseHTML));

                case 13:
                  _this18.adapter.visitRendered(_this18);

                  _this18.fail();

                case 15:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        })));
      }
    }
  }, {
    key: "getCachedSnapshot",
    value: function getCachedSnapshot() {
      var snapshot = this.view.getCachedSnapshotForLocation(this.location) || this.getPreloadedSnapshot();

      if (snapshot && (!getAnchor(this.location) || snapshot.hasAnchor(getAnchor(this.location)))) {
        if (this.action == "restore" || snapshot.isPreviewable) {
          return snapshot;
        }
      }
    }
  }, {
    key: "getPreloadedSnapshot",
    value: function getPreloadedSnapshot() {
      if (this.snapshotHTML) {
        return PageSnapshot.fromHTMLString(this.snapshotHTML);
      }
    }
  }, {
    key: "hasCachedSnapshot",
    value: function hasCachedSnapshot() {
      return this.getCachedSnapshot() != null;
    }
  }, {
    key: "loadCachedSnapshot",
    value: function loadCachedSnapshot() {
      var _this19 = this;

      var snapshot = this.getCachedSnapshot();

      if (snapshot) {
        var isPreview = this.shouldIssueRequest();
        this.render( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _this19.cacheSnapshot();

                  if (!_this19.isSamePage) {
                    _context9.next = 5;
                    break;
                  }

                  _this19.adapter.visitRendered(_this19);

                  _context9.next = 12;
                  break;

                case 5:
                  if (!_this19.view.renderPromise) {
                    _context9.next = 8;
                    break;
                  }

                  _context9.next = 8;
                  return _this19.view.renderPromise;

                case 8:
                  _context9.next = 10;
                  return _this19.view.renderPage(snapshot, isPreview);

                case 10:
                  _this19.adapter.visitRendered(_this19);

                  if (!isPreview) {
                    _this19.complete();
                  }

                case 12:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        })));
      }
    }
  }, {
    key: "followRedirect",
    value: function followRedirect() {
      if (this.redirectedToLocation && !this.followedRedirect) {
        this.adapter.visitProposedToLocation(this.redirectedToLocation, {
          action: 'replace',
          response: this.response
        });
        this.followedRedirect = true;
      }
    }
  }, {
    key: "goToSamePageAnchor",
    value: function goToSamePageAnchor() {
      var _this20 = this;

      if (this.isSamePage) {
        this.render( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _this20.cacheSnapshot();

                  _this20.adapter.visitRendered(_this20);

                case 2:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        })));
      }
    }
  }, {
    key: "requestStarted",
    value: function requestStarted() {
      this.startRequest();
    }
  }, {
    key: "requestPreventedHandlingResponse",
    value: function requestPreventedHandlingResponse(request, response) {}
  }, {
    key: "requestSucceededWithResponse",
    value: function () {
      var _requestSucceededWithResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(request, response) {
        var responseHTML;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return response.responseHTML;

              case 2:
                responseHTML = _context11.sent;

                if (responseHTML == undefined) {
                  this.recordResponse({
                    statusCode: SystemStatusCode.contentTypeMismatch
                  });
                } else {
                  this.redirectedToLocation = response.redirected ? response.location : undefined;
                  this.recordResponse({
                    statusCode: response.statusCode,
                    responseHTML: responseHTML
                  });
                }

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function requestSucceededWithResponse(_x5, _x6) {
        return _requestSucceededWithResponse.apply(this, arguments);
      }

      return requestSucceededWithResponse;
    }()
  }, {
    key: "requestFailedWithResponse",
    value: function () {
      var _requestFailedWithResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(request, response) {
        var responseHTML;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return response.responseHTML;

              case 2:
                responseHTML = _context12.sent;

                if (responseHTML == undefined) {
                  this.recordResponse({
                    statusCode: SystemStatusCode.contentTypeMismatch
                  });
                } else {
                  this.recordResponse({
                    statusCode: response.statusCode,
                    responseHTML: responseHTML
                  });
                }

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function requestFailedWithResponse(_x7, _x8) {
        return _requestFailedWithResponse.apply(this, arguments);
      }

      return requestFailedWithResponse;
    }()
  }, {
    key: "requestErrored",
    value: function requestErrored(request, error) {
      this.recordResponse({
        statusCode: SystemStatusCode.networkFailure
      });
    }
  }, {
    key: "requestFinished",
    value: function requestFinished() {
      this.finishRequest();
    }
  }, {
    key: "performScroll",
    value: function performScroll() {
      if (!this.scrolled) {
        if (this.action == "restore") {
          this.scrollToRestoredPosition() || this.scrollToAnchor() || this.view.scrollToTop();
        } else {
          this.scrollToAnchor() || this.view.scrollToTop();
        }

        if (this.isSamePage) {
          this.delegate.visitScrolledToSamePageLocation(this.view.lastRenderedLocation, this.location);
        }

        this.scrolled = true;
      }
    }
  }, {
    key: "scrollToRestoredPosition",
    value: function scrollToRestoredPosition() {
      var scrollPosition = this.restorationData.scrollPosition;

      if (scrollPosition) {
        this.view.scrollToPosition(scrollPosition);
        return true;
      }
    }
  }, {
    key: "scrollToAnchor",
    value: function scrollToAnchor() {
      var anchor = getAnchor(this.location);

      if (anchor != null) {
        this.view.scrollToAnchor(anchor);
        return true;
      }
    }
  }, {
    key: "recordTimingMetric",
    value: function recordTimingMetric(metric) {
      this.timingMetrics[metric] = new Date().getTime();
    }
  }, {
    key: "getTimingMetrics",
    value: function getTimingMetrics() {
      return Object.assign({}, this.timingMetrics);
    }
  }, {
    key: "getHistoryMethodForAction",
    value: function getHistoryMethodForAction(action) {
      switch (action) {
        case "replace":
          return history.replaceState;

        case "advance":
        case "restore":
          return history.pushState;
      }
    }
  }, {
    key: "hasPreloadedResponse",
    value: function hasPreloadedResponse() {
      return _typeof(this.response) == "object";
    }
  }, {
    key: "shouldIssueRequest",
    value: function shouldIssueRequest() {
      if (this.isSamePage) {
        return false;
      } else if (this.action == "restore") {
        return !this.hasCachedSnapshot();
      } else {
        return true;
      }
    }
  }, {
    key: "cacheSnapshot",
    value: function cacheSnapshot() {
      if (!this.snapshotCached) {
        this.view.cacheSnapshot();
        this.snapshotCached = true;
      }
    }
  }, {
    key: "render",
    value: function () {
      var _render3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(callback) {
        var _this21 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.cancelRender();
                _context13.next = 3;
                return new Promise(function (resolve) {
                  _this21.frame = requestAnimationFrame(function () {
                    return resolve();
                  });
                });

              case 3:
                _context13.next = 5;
                return callback();

              case 5:
                delete this.frame;
                this.performScroll();

              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function render(_x9) {
        return _render3.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "cancelRender",
    value: function cancelRender() {
      if (this.frame) {
        cancelAnimationFrame(this.frame);
        delete this.frame;
      }
    }
  }]);

  return Visit;
}();

function isSuccessful(statusCode) {
  return statusCode >= 200 && statusCode < 300;
}

var BrowserAdapter = /*#__PURE__*/function () {
  function BrowserAdapter(session) {
    var _this22 = this;

    _classCallCheck(this, BrowserAdapter);

    this.progressBar = new ProgressBar();

    this.showProgressBar = function () {
      _this22.progressBar.show();
    };

    this.session = session;
  }

  _createClass(BrowserAdapter, [{
    key: "visitProposedToLocation",
    value: function visitProposedToLocation(location, options) {
      this.navigator.startVisit(location, uuid(), options);
    }
  }, {
    key: "visitStarted",
    value: function visitStarted(visit) {
      visit.issueRequest();
      visit.changeHistory();
      visit.goToSamePageAnchor();
      visit.loadCachedSnapshot();
    }
  }, {
    key: "visitRequestStarted",
    value: function visitRequestStarted(visit) {
      this.progressBar.setValue(0);

      if (visit.hasCachedSnapshot() || visit.action != "restore") {
        this.showVisitProgressBarAfterDelay();
      } else {
        this.showProgressBar();
      }
    }
  }, {
    key: "visitRequestCompleted",
    value: function visitRequestCompleted(visit) {
      visit.loadResponse();
    }
  }, {
    key: "visitRequestFailedWithStatusCode",
    value: function visitRequestFailedWithStatusCode(visit, statusCode) {
      switch (statusCode) {
        case SystemStatusCode.networkFailure:
        case SystemStatusCode.timeoutFailure:
        case SystemStatusCode.contentTypeMismatch:
          return this.reload();

        default:
          return visit.loadResponse();
      }
    }
  }, {
    key: "visitRequestFinished",
    value: function visitRequestFinished(visit) {
      this.progressBar.setValue(1);
      this.hideVisitProgressBar();
    }
  }, {
    key: "visitCompleted",
    value: function visitCompleted(visit) {}
  }, {
    key: "pageInvalidated",
    value: function pageInvalidated() {
      this.reload();
    }
  }, {
    key: "visitFailed",
    value: function visitFailed(visit) {}
  }, {
    key: "visitRendered",
    value: function visitRendered(visit) {}
  }, {
    key: "formSubmissionStarted",
    value: function formSubmissionStarted(formSubmission) {
      this.progressBar.setValue(0);
      this.showFormProgressBarAfterDelay();
    }
  }, {
    key: "formSubmissionFinished",
    value: function formSubmissionFinished(formSubmission) {
      this.progressBar.setValue(1);
      this.hideFormProgressBar();
    }
  }, {
    key: "showVisitProgressBarAfterDelay",
    value: function showVisitProgressBarAfterDelay() {
      this.visitProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
    }
  }, {
    key: "hideVisitProgressBar",
    value: function hideVisitProgressBar() {
      this.progressBar.hide();

      if (this.visitProgressBarTimeout != null) {
        window.clearTimeout(this.visitProgressBarTimeout);
        delete this.visitProgressBarTimeout;
      }
    }
  }, {
    key: "showFormProgressBarAfterDelay",
    value: function showFormProgressBarAfterDelay() {
      if (this.formProgressBarTimeout == null) {
        this.formProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
      }
    }
  }, {
    key: "hideFormProgressBar",
    value: function hideFormProgressBar() {
      this.progressBar.hide();

      if (this.formProgressBarTimeout != null) {
        window.clearTimeout(this.formProgressBarTimeout);
        delete this.formProgressBarTimeout;
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
  }, {
    key: "navigator",
    get: function get() {
      return this.session.navigator;
    }
  }]);

  return BrowserAdapter;
}();

var CacheObserver = /*#__PURE__*/function () {
  function CacheObserver() {
    _classCallCheck(this, CacheObserver);

    this.started = false;
  }

  _createClass(CacheObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        addEventListener("turbo:before-cache", this.removeStaleElements, false);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        removeEventListener("turbo:before-cache", this.removeStaleElements, false);
      }
    }
  }, {
    key: "removeStaleElements",
    value: function removeStaleElements() {
      var staleElements = _toConsumableArray(document.querySelectorAll('[data-turbo-cache="false"]'));

      var _iterator5 = _createForOfIteratorHelper(staleElements),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var element = _step5.value;
          element.remove();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }]);

  return CacheObserver;
}();

var FormSubmitObserver = /*#__PURE__*/function () {
  function FormSubmitObserver(delegate) {
    var _this23 = this;

    _classCallCheck(this, FormSubmitObserver);

    this.started = false;

    this.submitCaptured = function () {
      removeEventListener("submit", _this23.submitBubbled, false);
      addEventListener("submit", _this23.submitBubbled, false);
    };

    this.submitBubbled = function (event) {
      if (!event.defaultPrevented) {
        var form = event.target instanceof HTMLFormElement ? event.target : undefined;
        var submitter = event.submitter || undefined;

        if (form) {
          var method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || form.method;

          if (method != "dialog" && _this23.delegate.willSubmitForm(form, submitter)) {
            event.preventDefault();

            _this23.delegate.formSubmitted(form, submitter);
          }
        }
      }
    };

    this.delegate = delegate;
  }

  _createClass(FormSubmitObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        addEventListener("submit", this.submitCaptured, true);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        removeEventListener("submit", this.submitCaptured, true);
        this.started = false;
      }
    }
  }]);

  return FormSubmitObserver;
}();

var FrameRedirector = /*#__PURE__*/function () {
  function FrameRedirector(element) {
    _classCallCheck(this, FrameRedirector);

    this.element = element;
    this.linkInterceptor = new LinkInterceptor(this, element);
    this.formInterceptor = new FormInterceptor(this, element);
  }

  _createClass(FrameRedirector, [{
    key: "start",
    value: function start() {
      this.linkInterceptor.start();
      this.formInterceptor.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.linkInterceptor.stop();
      this.formInterceptor.stop();
    }
  }, {
    key: "shouldInterceptLinkClick",
    value: function shouldInterceptLinkClick(element, url) {
      return this.shouldRedirect(element);
    }
  }, {
    key: "linkClickIntercepted",
    value: function linkClickIntercepted(element, url) {
      var frame = this.findFrameElement(element);

      if (frame) {
        frame.setAttribute("reloadable", "");
        frame.src = url;
      }
    }
  }, {
    key: "shouldInterceptFormSubmission",
    value: function shouldInterceptFormSubmission(element, submitter) {
      return this.shouldRedirect(element, submitter);
    }
  }, {
    key: "formSubmissionIntercepted",
    value: function formSubmissionIntercepted(element, submitter) {
      var frame = this.findFrameElement(element);

      if (frame) {
        frame.removeAttribute("reloadable");
        frame.delegate.formSubmissionIntercepted(element, submitter);
      }
    }
  }, {
    key: "shouldRedirect",
    value: function shouldRedirect(element, submitter) {
      var frame = this.findFrameElement(element);
      return frame ? frame != element.closest("turbo-frame") : false;
    }
  }, {
    key: "findFrameElement",
    value: function findFrameElement(element) {
      var id = element.getAttribute("data-turbo-frame");

      if (id && id != "_top") {
        var frame = this.element.querySelector("#".concat(id, ":not([disabled])"));

        if (frame instanceof FrameElement) {
          return frame;
        }
      }
    }
  }]);

  return FrameRedirector;
}();

var History = /*#__PURE__*/function () {
  function History(delegate) {
    var _this24 = this;

    _classCallCheck(this, History);

    this.restorationIdentifier = uuid();
    this.restorationData = {};
    this.started = false;
    this.pageLoaded = false;

    this.onPopState = function (event) {
      if (_this24.shouldHandlePopState()) {
        var _ref16 = event.state || {},
            turbo = _ref16.turbo;

        if (turbo) {
          _this24.location = new URL(window.location.href);
          var restorationIdentifier = turbo.restorationIdentifier;
          _this24.restorationIdentifier = restorationIdentifier;

          _this24.delegate.historyPoppedToLocationWithRestorationIdentifier(_this24.location, restorationIdentifier);
        }
      }
    };

    this.onPageLoad = /*#__PURE__*/function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return nextMicrotask();

              case 2:
                _this24.pageLoaded = true;

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      return function (_x10) {
        return _ref17.apply(this, arguments);
      };
    }();

    this.delegate = delegate;
  }

  _createClass(History, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        addEventListener("popstate", this.onPopState, false);
        addEventListener("load", this.onPageLoad, false);
        this.started = true;
        this.replace(new URL(window.location.href));
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        removeEventListener("popstate", this.onPopState, false);
        removeEventListener("load", this.onPageLoad, false);
        this.started = false;
      }
    }
  }, {
    key: "push",
    value: function push(location, restorationIdentifier) {
      this.update(history.pushState, location, restorationIdentifier);
    }
  }, {
    key: "replace",
    value: function replace(location, restorationIdentifier) {
      this.update(history.replaceState, location, restorationIdentifier);
    }
  }, {
    key: "update",
    value: function update(method, location) {
      var restorationIdentifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : uuid();
      var state = {
        turbo: {
          restorationIdentifier: restorationIdentifier
        }
      };
      method.call(history, state, "", location.href);
      this.location = location;
      this.restorationIdentifier = restorationIdentifier;
    }
  }, {
    key: "getRestorationDataForIdentifier",
    value: function getRestorationDataForIdentifier(restorationIdentifier) {
      return this.restorationData[restorationIdentifier] || {};
    }
  }, {
    key: "updateRestorationData",
    value: function updateRestorationData(additionalData) {
      var restorationIdentifier = this.restorationIdentifier;
      var restorationData = this.restorationData[restorationIdentifier];
      this.restorationData[restorationIdentifier] = Object.assign(Object.assign({}, restorationData), additionalData);
    }
  }, {
    key: "assumeControlOfScrollRestoration",
    value: function assumeControlOfScrollRestoration() {
      var _a;

      if (!this.previousScrollRestoration) {
        this.previousScrollRestoration = (_a = history.scrollRestoration) !== null && _a !== void 0 ? _a : "auto";
        history.scrollRestoration = "manual";
      }
    }
  }, {
    key: "relinquishControlOfScrollRestoration",
    value: function relinquishControlOfScrollRestoration() {
      if (this.previousScrollRestoration) {
        history.scrollRestoration = this.previousScrollRestoration;
        delete this.previousScrollRestoration;
      }
    }
  }, {
    key: "shouldHandlePopState",
    value: function shouldHandlePopState() {
      return this.pageIsLoaded();
    }
  }, {
    key: "pageIsLoaded",
    value: function pageIsLoaded() {
      return this.pageLoaded || document.readyState == "complete";
    }
  }]);

  return History;
}();

var LinkClickObserver = /*#__PURE__*/function () {
  function LinkClickObserver(delegate) {
    var _this25 = this;

    _classCallCheck(this, LinkClickObserver);

    this.started = false;

    this.clickCaptured = function () {
      removeEventListener("click", _this25.clickBubbled, false);
      addEventListener("click", _this25.clickBubbled, false);
    };

    this.clickBubbled = function (event) {
      if (_this25.clickEventIsSignificant(event)) {
        var target = event.composedPath && event.composedPath()[0] || event.target;

        var link = _this25.findLinkFromClickTarget(target);

        if (link) {
          var _location = _this25.getLocationForLink(link);

          if (_this25.delegate.willFollowLinkToLocation(link, _location)) {
            event.preventDefault();

            _this25.delegate.followedLinkToLocation(link, _location);
          }
        }
      }
    };

    this.delegate = delegate;
  }

  _createClass(LinkClickObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        addEventListener("click", this.clickCaptured, true);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        removeEventListener("click", this.clickCaptured, true);
        this.started = false;
      }
    }
  }, {
    key: "clickEventIsSignificant",
    value: function clickEventIsSignificant(event) {
      return !(event.target && event.target.isContentEditable || event.defaultPrevented || event.which > 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);
    }
  }, {
    key: "findLinkFromClickTarget",
    value: function findLinkFromClickTarget(target) {
      if (target instanceof Element) {
        return target.closest("a[href]:not([target^=_]):not([download])");
      }
    }
  }, {
    key: "getLocationForLink",
    value: function getLocationForLink(link) {
      return expandURL(link.getAttribute("href") || "");
    }
  }]);

  return LinkClickObserver;
}();

function isAction(action) {
  return action == "advance" || action == "replace" || action == "restore";
}

var Navigator = /*#__PURE__*/function () {
  function Navigator(delegate) {
    _classCallCheck(this, Navigator);

    this.delegate = delegate;
  }

  _createClass(Navigator, [{
    key: "proposeVisit",
    value: function proposeVisit(location) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.delegate.allowsVisitingLocationWithAction(location, options.action)) {
        this.delegate.visitProposedToLocation(location, options);
      }
    }
  }, {
    key: "startVisit",
    value: function startVisit(locatable, restorationIdentifier) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.stop();
      this.currentVisit = new Visit(this, expandURL(locatable), restorationIdentifier, Object.assign({
        referrer: this.location
      }, options));
      this.currentVisit.start();
    }
  }, {
    key: "submitForm",
    value: function submitForm(form, submitter) {
      this.stop();
      this.formSubmission = new FormSubmission(this, form, submitter, true);

      if (this.formSubmission.isIdempotent) {
        this.proposeVisit(this.formSubmission.fetchRequest.url, {
          action: this.getActionForFormSubmission(this.formSubmission)
        });
      } else {
        this.formSubmission.start();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.formSubmission) {
        this.formSubmission.stop();
        delete this.formSubmission;
      }

      if (this.currentVisit) {
        this.currentVisit.cancel();
        delete this.currentVisit;
      }
    }
  }, {
    key: "adapter",
    get: function get() {
      return this.delegate.adapter;
    }
  }, {
    key: "view",
    get: function get() {
      return this.delegate.view;
    }
  }, {
    key: "history",
    get: function get() {
      return this.delegate.history;
    }
  }, {
    key: "formSubmissionStarted",
    value: function formSubmissionStarted(formSubmission) {
      if (typeof this.adapter.formSubmissionStarted === 'function') {
        this.adapter.formSubmissionStarted(formSubmission);
      }
    }
  }, {
    key: "formSubmissionSucceededWithResponse",
    value: function () {
      var _formSubmissionSucceededWithResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(formSubmission, fetchResponse) {
        var responseHTML, statusCode, visitOptions;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (!(formSubmission == this.formSubmission)) {
                  _context15.next = 5;
                  break;
                }

                _context15.next = 3;
                return fetchResponse.responseHTML;

              case 3:
                responseHTML = _context15.sent;

                if (responseHTML) {
                  if (formSubmission.method != FetchMethod.get) {
                    this.view.clearSnapshotCache();
                  }

                  statusCode = fetchResponse.statusCode;
                  visitOptions = {
                    response: {
                      statusCode: statusCode,
                      responseHTML: responseHTML
                    }
                  };
                  this.proposeVisit(fetchResponse.location, visitOptions);
                }

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function formSubmissionSucceededWithResponse(_x11, _x12) {
        return _formSubmissionSucceededWithResponse.apply(this, arguments);
      }

      return formSubmissionSucceededWithResponse;
    }()
  }, {
    key: "formSubmissionFailedWithResponse",
    value: function () {
      var _formSubmissionFailedWithResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16(formSubmission, fetchResponse) {
        var responseHTML, snapshot;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return fetchResponse.responseHTML;

              case 2:
                responseHTML = _context16.sent;

                if (!responseHTML) {
                  _context16.next = 14;
                  break;
                }

                snapshot = PageSnapshot.fromHTMLString(responseHTML);

                if (!fetchResponse.serverError) {
                  _context16.next = 10;
                  break;
                }

                _context16.next = 8;
                return this.view.renderError(snapshot);

              case 8:
                _context16.next = 12;
                break;

              case 10:
                _context16.next = 12;
                return this.view.renderPage(snapshot);

              case 12:
                this.view.scrollToTop();
                this.view.clearSnapshotCache();

              case 14:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function formSubmissionFailedWithResponse(_x13, _x14) {
        return _formSubmissionFailedWithResponse.apply(this, arguments);
      }

      return formSubmissionFailedWithResponse;
    }()
  }, {
    key: "formSubmissionErrored",
    value: function formSubmissionErrored(formSubmission, error) {
      console.error(error);
    }
  }, {
    key: "formSubmissionFinished",
    value: function formSubmissionFinished(formSubmission) {
      if (typeof this.adapter.formSubmissionFinished === 'function') {
        this.adapter.formSubmissionFinished(formSubmission);
      }
    }
  }, {
    key: "visitStarted",
    value: function visitStarted(visit) {
      this.delegate.visitStarted(visit);
    }
  }, {
    key: "visitCompleted",
    value: function visitCompleted(visit) {
      this.delegate.visitCompleted(visit);
    }
  }, {
    key: "locationWithActionIsSamePage",
    value: function locationWithActionIsSamePage(location, action) {
      var anchor = getAnchor(location);
      var currentAnchor = getAnchor(this.view.lastRenderedLocation);
      var isRestorationToTop = action === 'restore' && typeof anchor === 'undefined';
      return action !== "replace" && getRequestURL(location) === getRequestURL(this.view.lastRenderedLocation) && (isRestorationToTop || anchor != null && anchor !== currentAnchor);
    }
  }, {
    key: "visitScrolledToSamePageLocation",
    value: function visitScrolledToSamePageLocation(oldURL, newURL) {
      this.delegate.visitScrolledToSamePageLocation(oldURL, newURL);
    }
  }, {
    key: "location",
    get: function get() {
      return this.history.location;
    }
  }, {
    key: "restorationIdentifier",
    get: function get() {
      return this.history.restorationIdentifier;
    }
  }, {
    key: "getActionForFormSubmission",
    value: function getActionForFormSubmission(formSubmission) {
      var formElement = formSubmission.formElement,
          submitter = formSubmission.submitter;
      var action = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("data-turbo-action")) || formElement.getAttribute("data-turbo-action");
      return isAction(action) ? action : "advance";
    }
  }]);

  return Navigator;
}();

var PageStage;

(function (PageStage) {
  PageStage[PageStage["initial"] = 0] = "initial";
  PageStage[PageStage["loading"] = 1] = "loading";
  PageStage[PageStage["interactive"] = 2] = "interactive";
  PageStage[PageStage["complete"] = 3] = "complete";
})(PageStage || (PageStage = {}));

var PageObserver = /*#__PURE__*/function () {
  function PageObserver(delegate) {
    var _this26 = this;

    _classCallCheck(this, PageObserver);

    this.stage = PageStage.initial;
    this.started = false;

    this.interpretReadyState = function () {
      var readyState = _this26.readyState;

      if (readyState == "interactive") {
        _this26.pageIsInteractive();
      } else if (readyState == "complete") {
        _this26.pageIsComplete();
      }
    };

    this.pageWillUnload = function () {
      _this26.delegate.pageWillUnload();
    };

    this.delegate = delegate;
  }

  _createClass(PageObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        if (this.stage == PageStage.initial) {
          this.stage = PageStage.loading;
        }

        document.addEventListener("readystatechange", this.interpretReadyState, false);
        addEventListener("pagehide", this.pageWillUnload, false);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        document.removeEventListener("readystatechange", this.interpretReadyState, false);
        removeEventListener("pagehide", this.pageWillUnload, false);
        this.started = false;
      }
    }
  }, {
    key: "pageIsInteractive",
    value: function pageIsInteractive() {
      if (this.stage == PageStage.loading) {
        this.stage = PageStage.interactive;
        this.delegate.pageBecameInteractive();
      }
    }
  }, {
    key: "pageIsComplete",
    value: function pageIsComplete() {
      this.pageIsInteractive();

      if (this.stage == PageStage.interactive) {
        this.stage = PageStage.complete;
        this.delegate.pageLoaded();
      }
    }
  }, {
    key: "readyState",
    get: function get() {
      return document.readyState;
    }
  }]);

  return PageObserver;
}();

var ScrollObserver = /*#__PURE__*/function () {
  function ScrollObserver(delegate) {
    var _this27 = this;

    _classCallCheck(this, ScrollObserver);

    this.started = false;

    this.onScroll = function () {
      _this27.updatePosition({
        x: window.pageXOffset,
        y: window.pageYOffset
      });
    };

    this.delegate = delegate;
  }

  _createClass(ScrollObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        addEventListener("scroll", this.onScroll, false);
        this.onScroll();
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        removeEventListener("scroll", this.onScroll, false);
        this.started = false;
      }
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(position) {
      this.delegate.scrollPositionChanged(position);
    }
  }]);

  return ScrollObserver;
}();

var StreamObserver = /*#__PURE__*/function () {
  function StreamObserver(delegate) {
    var _this28 = this;

    _classCallCheck(this, StreamObserver);

    this.sources = new Set();
    this.started = false;

    this.inspectFetchResponse = function (event) {
      var response = fetchResponseFromEvent(event);

      if (response && fetchResponseIsStream(response)) {
        event.preventDefault();

        _this28.receiveMessageResponse(response);
      }
    };

    this.receiveMessageEvent = function (event) {
      if (_this28.started && typeof event.data == "string") {
        _this28.receiveMessageHTML(event.data);
      }
    };

    this.delegate = delegate;
  }

  _createClass(StreamObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        addEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        removeEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
      }
    }
  }, {
    key: "connectStreamSource",
    value: function connectStreamSource(source) {
      if (!this.streamSourceIsConnected(source)) {
        this.sources.add(source);
        source.addEventListener("message", this.receiveMessageEvent, false);
      }
    }
  }, {
    key: "disconnectStreamSource",
    value: function disconnectStreamSource(source) {
      if (this.streamSourceIsConnected(source)) {
        this.sources.delete(source);
        source.removeEventListener("message", this.receiveMessageEvent, false);
      }
    }
  }, {
    key: "streamSourceIsConnected",
    value: function streamSourceIsConnected(source) {
      return this.sources.has(source);
    }
  }, {
    key: "receiveMessageResponse",
    value: function () {
      var _receiveMessageResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17(response) {
        var html;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return response.responseHTML;

              case 2:
                html = _context17.sent;

                if (html) {
                  this.receiveMessageHTML(html);
                }

              case 4:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function receiveMessageResponse(_x15) {
        return _receiveMessageResponse.apply(this, arguments);
      }

      return receiveMessageResponse;
    }()
  }, {
    key: "receiveMessageHTML",
    value: function receiveMessageHTML(html) {
      this.delegate.receivedMessageFromStream(new StreamMessage(html));
    }
  }]);

  return StreamObserver;
}();

function fetchResponseFromEvent(event) {
  var _a;

  var fetchResponse = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.fetchResponse;

  if (fetchResponse instanceof FetchResponse) {
    return fetchResponse;
  }
}

function fetchResponseIsStream(response) {
  var _a;

  var contentType = (_a = response.contentType) !== null && _a !== void 0 ? _a : "";
  return contentType.startsWith(StreamMessage.contentType);
}

var ErrorRenderer = /*#__PURE__*/function (_Renderer2) {
  _inherits(ErrorRenderer, _Renderer2);

  var _super6 = _createSuper(ErrorRenderer);

  function ErrorRenderer() {
    _classCallCheck(this, ErrorRenderer);

    return _super6.apply(this, arguments);
  }

  _createClass(ErrorRenderer, [{
    key: "render",
    value: function () {
      var _render4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                this.replaceHeadAndBody();
                this.activateScriptElements();

              case 2:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function render() {
        return _render4.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "replaceHeadAndBody",
    value: function replaceHeadAndBody() {
      var _document = document,
          documentElement = _document.documentElement,
          head = _document.head,
          body = _document.body;
      documentElement.replaceChild(this.newHead, head);
      documentElement.replaceChild(this.newElement, body);
    }
  }, {
    key: "activateScriptElements",
    value: function activateScriptElements() {
      var _iterator6 = _createForOfIteratorHelper(this.scriptElements),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var replaceableElement = _step6.value;
          var parentNode = replaceableElement.parentNode;

          if (parentNode) {
            var element = this.createScriptElement(replaceableElement);
            parentNode.replaceChild(element, replaceableElement);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "newHead",
    get: function get() {
      return this.newSnapshot.headSnapshot.element;
    }
  }, {
    key: "scriptElements",
    get: function get() {
      return _toConsumableArray(document.documentElement.querySelectorAll("script"));
    }
  }]);

  return ErrorRenderer;
}(Renderer);

var PageRenderer = /*#__PURE__*/function (_Renderer3) {
  _inherits(PageRenderer, _Renderer3);

  var _super7 = _createSuper(PageRenderer);

  function PageRenderer() {
    _classCallCheck(this, PageRenderer);

    return _super7.apply(this, arguments);
  }

  _createClass(PageRenderer, [{
    key: "shouldRender",
    get: function get() {
      return this.newSnapshot.isVisitable && this.trackedElementsAreIdentical;
    }
  }, {
    key: "prepareToRender",
    value: function prepareToRender() {
      this.mergeHead();
    }
  }, {
    key: "render",
    value: function () {
      var _render5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                this.replaceBody();

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function render() {
        return _render5.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "finishRendering",
    value: function finishRendering() {
      _get(_getPrototypeOf(PageRenderer.prototype), "finishRendering", this).call(this);

      if (!this.isPreview) {
        this.focusFirstAutofocusableElement();
      }
    }
  }, {
    key: "currentHeadSnapshot",
    get: function get() {
      return this.currentSnapshot.headSnapshot;
    }
  }, {
    key: "newHeadSnapshot",
    get: function get() {
      return this.newSnapshot.headSnapshot;
    }
  }, {
    key: "newElement",
    get: function get() {
      return this.newSnapshot.element;
    }
  }, {
    key: "mergeHead",
    value: function mergeHead() {
      this.copyNewHeadStylesheetElements();
      this.copyNewHeadScriptElements();
      this.removeCurrentHeadProvisionalElements();
      this.copyNewHeadProvisionalElements();
    }
  }, {
    key: "replaceBody",
    value: function replaceBody() {
      var _this29 = this;

      this.preservingPermanentElements(function () {
        _this29.activateNewBody();

        _this29.assignNewBody();
      });
    }
  }, {
    key: "trackedElementsAreIdentical",
    get: function get() {
      return this.currentHeadSnapshot.trackedElementSignature == this.newHeadSnapshot.trackedElementSignature;
    }
  }, {
    key: "copyNewHeadStylesheetElements",
    value: function copyNewHeadStylesheetElements() {
      var _iterator7 = _createForOfIteratorHelper(this.newHeadStylesheetElements),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var element = _step7.value;
          document.head.appendChild(element);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "copyNewHeadScriptElements",
    value: function copyNewHeadScriptElements() {
      var _iterator8 = _createForOfIteratorHelper(this.newHeadScriptElements),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var element = _step8.value;
          document.head.appendChild(this.createScriptElement(element));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  }, {
    key: "removeCurrentHeadProvisionalElements",
    value: function removeCurrentHeadProvisionalElements() {
      var _iterator9 = _createForOfIteratorHelper(this.currentHeadProvisionalElements),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var element = _step9.value;
          document.head.removeChild(element);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }, {
    key: "copyNewHeadProvisionalElements",
    value: function copyNewHeadProvisionalElements() {
      var _iterator10 = _createForOfIteratorHelper(this.newHeadProvisionalElements),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var element = _step10.value;
          document.head.appendChild(element);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }
  }, {
    key: "activateNewBody",
    value: function activateNewBody() {
      document.adoptNode(this.newElement);
      this.activateNewBodyScriptElements();
    }
  }, {
    key: "activateNewBodyScriptElements",
    value: function activateNewBodyScriptElements() {
      var _iterator11 = _createForOfIteratorHelper(this.newBodyScriptElements),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var inertScriptElement = _step11.value;
          var activatedScriptElement = this.createScriptElement(inertScriptElement);
          inertScriptElement.replaceWith(activatedScriptElement);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }
  }, {
    key: "assignNewBody",
    value: function assignNewBody() {
      if (document.body && this.newElement instanceof HTMLBodyElement) {
        document.body.replaceWith(this.newElement);
      } else {
        document.documentElement.appendChild(this.newElement);
      }
    }
  }, {
    key: "newHeadStylesheetElements",
    get: function get() {
      return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot);
    }
  }, {
    key: "newHeadScriptElements",
    get: function get() {
      return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot);
    }
  }, {
    key: "currentHeadProvisionalElements",
    get: function get() {
      return this.currentHeadSnapshot.provisionalElements;
    }
  }, {
    key: "newHeadProvisionalElements",
    get: function get() {
      return this.newHeadSnapshot.provisionalElements;
    }
  }, {
    key: "newBodyScriptElements",
    get: function get() {
      return this.newElement.querySelectorAll("script");
    }
  }]);

  return PageRenderer;
}(Renderer);

var SnapshotCache = /*#__PURE__*/function () {
  function SnapshotCache(size) {
    _classCallCheck(this, SnapshotCache);

    this.keys = [];
    this.snapshots = {};
    this.size = size;
  }

  _createClass(SnapshotCache, [{
    key: "has",
    value: function has(location) {
      return toCacheKey(location) in this.snapshots;
    }
  }, {
    key: "get",
    value: function get(location) {
      if (this.has(location)) {
        var snapshot = this.read(location);
        this.touch(location);
        return snapshot;
      }
    }
  }, {
    key: "put",
    value: function put(location, snapshot) {
      this.write(location, snapshot);
      this.touch(location);
      return snapshot;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.snapshots = {};
    }
  }, {
    key: "read",
    value: function read(location) {
      return this.snapshots[toCacheKey(location)];
    }
  }, {
    key: "write",
    value: function write(location, snapshot) {
      this.snapshots[toCacheKey(location)] = snapshot;
    }
  }, {
    key: "touch",
    value: function touch(location) {
      var key = toCacheKey(location);
      var index = this.keys.indexOf(key);
      if (index > -1) this.keys.splice(index, 1);
      this.keys.unshift(key);
      this.trim();
    }
  }, {
    key: "trim",
    value: function trim() {
      var _iterator12 = _createForOfIteratorHelper(this.keys.splice(this.size)),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var key = _step12.value;
          delete this.snapshots[key];
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }
  }]);

  return SnapshotCache;
}();

var PageView = /*#__PURE__*/function (_View2) {
  _inherits(PageView, _View2);

  var _super8 = _createSuper(PageView);

  function PageView() {
    var _this30;

    _classCallCheck(this, PageView);

    _this30 = _super8.apply(this, arguments);
    _this30.snapshotCache = new SnapshotCache(10);
    _this30.lastRenderedLocation = new URL(location.href);
    return _this30;
  }

  _createClass(PageView, [{
    key: "renderPage",
    value: function renderPage(snapshot) {
      var isPreview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var renderer = new PageRenderer(this.snapshot, snapshot, isPreview);
      return this.render(renderer);
    }
  }, {
    key: "renderError",
    value: function renderError(snapshot) {
      var renderer = new ErrorRenderer(this.snapshot, snapshot, false);
      return this.render(renderer);
    }
  }, {
    key: "clearSnapshotCache",
    value: function clearSnapshotCache() {
      this.snapshotCache.clear();
    }
  }, {
    key: "cacheSnapshot",
    value: function () {
      var _cacheSnapshot = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20() {
        var snapshot, _location2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (!this.shouldCacheSnapshot) {
                  _context20.next = 6;
                  break;
                }

                this.delegate.viewWillCacheSnapshot();
                snapshot = this.snapshot, _location2 = this.lastRenderedLocation;
                _context20.next = 5;
                return nextEventLoopTick();

              case 5:
                this.snapshotCache.put(_location2, snapshot.clone());

              case 6:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function cacheSnapshot() {
        return _cacheSnapshot.apply(this, arguments);
      }

      return cacheSnapshot;
    }()
  }, {
    key: "getCachedSnapshotForLocation",
    value: function getCachedSnapshotForLocation(location) {
      return this.snapshotCache.get(location);
    }
  }, {
    key: "snapshot",
    get: function get() {
      return PageSnapshot.fromElement(this.element);
    }
  }, {
    key: "shouldCacheSnapshot",
    get: function get() {
      return this.snapshot.isCacheable;
    }
  }]);

  return PageView;
}(View);

var Session = /*#__PURE__*/function () {
  function Session() {
    _classCallCheck(this, Session);

    this.navigator = new Navigator(this);
    this.history = new History(this);
    this.view = new PageView(this, document.documentElement);
    this.adapter = new BrowserAdapter(this);
    this.pageObserver = new PageObserver(this);
    this.cacheObserver = new CacheObserver();
    this.linkClickObserver = new LinkClickObserver(this);
    this.formSubmitObserver = new FormSubmitObserver(this);
    this.scrollObserver = new ScrollObserver(this);
    this.streamObserver = new StreamObserver(this);
    this.frameRedirector = new FrameRedirector(document.documentElement);
    this.drive = true;
    this.enabled = true;
    this.progressBarDelay = 500;
    this.started = false;
  }

  _createClass(Session, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.pageObserver.start();
        this.cacheObserver.start();
        this.linkClickObserver.start();
        this.formSubmitObserver.start();
        this.scrollObserver.start();
        this.streamObserver.start();
        this.frameRedirector.start();
        this.history.start();
        this.started = true;
        this.enabled = true;
      }
    }
  }, {
    key: "disable",
    value: function disable() {
      this.enabled = false;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.pageObserver.stop();
        this.cacheObserver.stop();
        this.linkClickObserver.stop();
        this.formSubmitObserver.stop();
        this.scrollObserver.stop();
        this.streamObserver.stop();
        this.frameRedirector.stop();
        this.history.stop();
        this.started = false;
      }
    }
  }, {
    key: "registerAdapter",
    value: function registerAdapter(adapter) {
      this.adapter = adapter;
    }
  }, {
    key: "visit",
    value: function visit(location) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.navigator.proposeVisit(expandURL(location), options);
    }
  }, {
    key: "connectStreamSource",
    value: function connectStreamSource(source) {
      this.streamObserver.connectStreamSource(source);
    }
  }, {
    key: "disconnectStreamSource",
    value: function disconnectStreamSource(source) {
      this.streamObserver.disconnectStreamSource(source);
    }
  }, {
    key: "renderStreamMessage",
    value: function renderStreamMessage(message) {
      document.documentElement.appendChild(StreamMessage.wrap(message).fragment);
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      this.view.clearSnapshotCache();
    }
  }, {
    key: "setProgressBarDelay",
    value: function setProgressBarDelay(delay) {
      this.progressBarDelay = delay;
    }
  }, {
    key: "location",
    get: function get() {
      return this.history.location;
    }
  }, {
    key: "restorationIdentifier",
    get: function get() {
      return this.history.restorationIdentifier;
    }
  }, {
    key: "historyPoppedToLocationWithRestorationIdentifier",
    value: function historyPoppedToLocationWithRestorationIdentifier(location, restorationIdentifier) {
      if (this.enabled) {
        this.navigator.startVisit(location, restorationIdentifier, {
          action: "restore",
          historyChanged: true
        });
      } else {
        this.adapter.pageInvalidated();
      }
    }
  }, {
    key: "scrollPositionChanged",
    value: function scrollPositionChanged(position) {
      this.history.updateRestorationData({
        scrollPosition: position
      });
    }
  }, {
    key: "willFollowLinkToLocation",
    value: function willFollowLinkToLocation(link, location) {
      return this.elementDriveEnabled(link) && this.locationIsVisitable(location) && this.applicationAllowsFollowingLinkToLocation(link, location);
    }
  }, {
    key: "followedLinkToLocation",
    value: function followedLinkToLocation(link, location) {
      var action = this.getActionForLink(link);
      this.convertLinkWithMethodClickToFormSubmission(link) || this.visit(location.href, {
        action: action
      });
    }
  }, {
    key: "convertLinkWithMethodClickToFormSubmission",
    value: function convertLinkWithMethodClickToFormSubmission(link) {
      var linkMethod = link.getAttribute("data-turbo-method");

      if (linkMethod) {
        var form = document.createElement("form");
        form.method = linkMethod;
        form.action = link.getAttribute("href") || "undefined";
        document.body.appendChild(form);
        return dispatch("submit", {
          cancelable: true,
          target: form
        });
      } else {
        return false;
      }
    }
  }, {
    key: "allowsVisitingLocationWithAction",
    value: function allowsVisitingLocationWithAction(location, action) {
      return this.locationWithActionIsSamePage(location, action) || this.applicationAllowsVisitingLocation(location);
    }
  }, {
    key: "visitProposedToLocation",
    value: function visitProposedToLocation(location, options) {
      extendURLWithDeprecatedProperties(location);
      this.adapter.visitProposedToLocation(location, options);
    }
  }, {
    key: "visitStarted",
    value: function visitStarted(visit) {
      extendURLWithDeprecatedProperties(visit.location);

      if (!visit.silent) {
        this.notifyApplicationAfterVisitingLocation(visit.location, visit.action);
      }
    }
  }, {
    key: "visitCompleted",
    value: function visitCompleted(visit) {
      this.notifyApplicationAfterPageLoad(visit.getTimingMetrics());
    }
  }, {
    key: "locationWithActionIsSamePage",
    value: function locationWithActionIsSamePage(location, action) {
      return this.navigator.locationWithActionIsSamePage(location, action);
    }
  }, {
    key: "visitScrolledToSamePageLocation",
    value: function visitScrolledToSamePageLocation(oldURL, newURL) {
      this.notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL);
    }
  }, {
    key: "willSubmitForm",
    value: function willSubmitForm(form, submitter) {
      return this.elementDriveEnabled(form) && this.elementDriveEnabled(submitter);
    }
  }, {
    key: "formSubmitted",
    value: function formSubmitted(form, submitter) {
      this.navigator.submitForm(form, submitter);
    }
  }, {
    key: "pageBecameInteractive",
    value: function pageBecameInteractive() {
      this.view.lastRenderedLocation = this.location;
      this.notifyApplicationAfterPageLoad();
    }
  }, {
    key: "pageLoaded",
    value: function pageLoaded() {
      this.history.assumeControlOfScrollRestoration();
    }
  }, {
    key: "pageWillUnload",
    value: function pageWillUnload() {
      this.history.relinquishControlOfScrollRestoration();
    }
  }, {
    key: "receivedMessageFromStream",
    value: function receivedMessageFromStream(message) {
      this.renderStreamMessage(message);
    }
  }, {
    key: "viewWillCacheSnapshot",
    value: function viewWillCacheSnapshot() {
      var _a;

      if (!((_a = this.navigator.currentVisit) === null || _a === void 0 ? void 0 : _a.silent)) {
        this.notifyApplicationBeforeCachingSnapshot();
      }
    }
  }, {
    key: "allowsImmediateRender",
    value: function allowsImmediateRender(_ref18, resume) {
      var element = _ref18.element;
      var event = this.notifyApplicationBeforeRender(element, resume);
      return !event.defaultPrevented;
    }
  }, {
    key: "viewRenderedSnapshot",
    value: function viewRenderedSnapshot(snapshot, isPreview) {
      this.view.lastRenderedLocation = this.history.location;
      this.notifyApplicationAfterRender();
    }
  }, {
    key: "viewInvalidated",
    value: function viewInvalidated() {
      this.adapter.pageInvalidated();
    }
  }, {
    key: "frameLoaded",
    value: function frameLoaded(frame) {
      this.notifyApplicationAfterFrameLoad(frame);
    }
  }, {
    key: "frameRendered",
    value: function frameRendered(fetchResponse, frame) {
      this.notifyApplicationAfterFrameRender(fetchResponse, frame);
    }
  }, {
    key: "applicationAllowsFollowingLinkToLocation",
    value: function applicationAllowsFollowingLinkToLocation(link, location) {
      var event = this.notifyApplicationAfterClickingLinkToLocation(link, location);
      return !event.defaultPrevented;
    }
  }, {
    key: "applicationAllowsVisitingLocation",
    value: function applicationAllowsVisitingLocation(location) {
      var event = this.notifyApplicationBeforeVisitingLocation(location);
      return !event.defaultPrevented;
    }
  }, {
    key: "notifyApplicationAfterClickingLinkToLocation",
    value: function notifyApplicationAfterClickingLinkToLocation(link, location) {
      return dispatch("turbo:click", {
        target: link,
        detail: {
          url: location.href
        },
        cancelable: true
      });
    }
  }, {
    key: "notifyApplicationBeforeVisitingLocation",
    value: function notifyApplicationBeforeVisitingLocation(location) {
      return dispatch("turbo:before-visit", {
        detail: {
          url: location.href
        },
        cancelable: true
      });
    }
  }, {
    key: "notifyApplicationAfterVisitingLocation",
    value: function notifyApplicationAfterVisitingLocation(location, action) {
      return dispatch("turbo:visit", {
        detail: {
          url: location.href,
          action: action
        }
      });
    }
  }, {
    key: "notifyApplicationBeforeCachingSnapshot",
    value: function notifyApplicationBeforeCachingSnapshot() {
      return dispatch("turbo:before-cache");
    }
  }, {
    key: "notifyApplicationBeforeRender",
    value: function notifyApplicationBeforeRender(newBody, resume) {
      return dispatch("turbo:before-render", {
        detail: {
          newBody: newBody,
          resume: resume
        },
        cancelable: true
      });
    }
  }, {
    key: "notifyApplicationAfterRender",
    value: function notifyApplicationAfterRender() {
      return dispatch("turbo:render");
    }
  }, {
    key: "notifyApplicationAfterPageLoad",
    value: function notifyApplicationAfterPageLoad() {
      var timing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return dispatch("turbo:load", {
        detail: {
          url: this.location.href,
          timing: timing
        }
      });
    }
  }, {
    key: "notifyApplicationAfterVisitingSamePageLocation",
    value: function notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL) {
      dispatchEvent(new HashChangeEvent("hashchange", {
        oldURL: oldURL.toString(),
        newURL: newURL.toString()
      }));
    }
  }, {
    key: "notifyApplicationAfterFrameLoad",
    value: function notifyApplicationAfterFrameLoad(frame) {
      return dispatch("turbo:frame-load", {
        target: frame
      });
    }
  }, {
    key: "notifyApplicationAfterFrameRender",
    value: function notifyApplicationAfterFrameRender(fetchResponse, frame) {
      return dispatch("turbo:frame-render", {
        detail: {
          fetchResponse: fetchResponse
        },
        target: frame,
        cancelable: true
      });
    }
  }, {
    key: "elementDriveEnabled",
    value: function elementDriveEnabled(element) {
      var container = element === null || element === void 0 ? void 0 : element.closest("[data-turbo]");

      if (this.drive) {
        if (container) {
          return container.getAttribute("data-turbo") != "false";
        } else {
          return true;
        }
      } else {
        if (container) {
          return container.getAttribute("data-turbo") == "true";
        } else {
          return false;
        }
      }
    }
  }, {
    key: "getActionForLink",
    value: function getActionForLink(link) {
      var action = link.getAttribute("data-turbo-action");
      return isAction(action) ? action : "advance";
    }
  }, {
    key: "locationIsVisitable",
    value: function locationIsVisitable(location) {
      return isPrefixedBy(location, this.snapshot.rootLocation) && isHTML(location);
    }
  }, {
    key: "snapshot",
    get: function get() {
      return this.view.snapshot;
    }
  }]);

  return Session;
}();

function extendURLWithDeprecatedProperties(url) {
  Object.defineProperties(url, deprecatedLocationPropertyDescriptors);
}

var deprecatedLocationPropertyDescriptors = {
  absoluteURL: {
    get: function get() {
      return this.toString();
    }
  }
};
var session = new Session();
var navigator = session.navigator;

function start() {
  session.start();
}

function registerAdapter(adapter) {
  session.registerAdapter(adapter);
}

function visit(location, options) {
  session.visit(location, options);
}

function connectStreamSource(source) {
  session.connectStreamSource(source);
}

function disconnectStreamSource(source) {
  session.disconnectStreamSource(source);
}

function renderStreamMessage(message) {
  session.renderStreamMessage(message);
}

function clearCache() {
  session.clearCache();
}

function setProgressBarDelay(delay) {
  session.setProgressBarDelay(delay);
}

var Turbo = /*#__PURE__*/Object.freeze({
  __proto__: null,
  navigator: navigator,
  session: session,
  PageRenderer: PageRenderer,
  PageSnapshot: PageSnapshot,
  start: start,
  registerAdapter: registerAdapter,
  visit: visit,
  connectStreamSource: connectStreamSource,
  disconnectStreamSource: disconnectStreamSource,
  renderStreamMessage: renderStreamMessage,
  clearCache: clearCache,
  setProgressBarDelay: setProgressBarDelay
});

var FrameController = /*#__PURE__*/function () {
  function FrameController(element) {
    _classCallCheck(this, FrameController);

    this.resolveVisitPromise = function () {};

    this.connected = false;
    this.hasBeenLoaded = false;
    this.settingSourceURL = false;
    this.element = element;
    this.view = new FrameView(this, this.element);
    this.appearanceObserver = new AppearanceObserver(this, this.element);
    this.linkInterceptor = new LinkInterceptor(this, this.element);
    this.formInterceptor = new FormInterceptor(this, this.element);
  }

  _createClass(FrameController, [{
    key: "connect",
    value: function connect() {
      if (!this.connected) {
        this.connected = true;
        this.reloadable = false;

        if (this.loadingStyle == FrameLoadingStyle.lazy) {
          this.appearanceObserver.start();
        }

        this.linkInterceptor.start();
        this.formInterceptor.start();
        this.sourceURLChanged();
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.connected) {
        this.connected = false;
        this.appearanceObserver.stop();
        this.linkInterceptor.stop();
        this.formInterceptor.stop();
      }
    }
  }, {
    key: "disabledChanged",
    value: function disabledChanged() {
      if (this.loadingStyle == FrameLoadingStyle.eager) {
        this.loadSourceURL();
      }
    }
  }, {
    key: "sourceURLChanged",
    value: function sourceURLChanged() {
      if (this.loadingStyle == FrameLoadingStyle.eager || this.hasBeenLoaded) {
        this.loadSourceURL();
      }
    }
  }, {
    key: "loadingStyleChanged",
    value: function loadingStyleChanged() {
      if (this.loadingStyle == FrameLoadingStyle.lazy) {
        this.appearanceObserver.start();
      } else {
        this.appearanceObserver.stop();
        this.loadSourceURL();
      }
    }
  }, {
    key: "loadSourceURL",
    value: function () {
      var _loadSourceURL = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21() {
        var previousURL;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (!(!this.settingSourceURL && this.enabled && this.isActive && (this.reloadable || this.sourceURL != this.currentURL))) {
                  _context21.next = 17;
                  break;
                }

                previousURL = this.currentURL;
                this.currentURL = this.sourceURL;

                if (!this.sourceURL) {
                  _context21.next = 17;
                  break;
                }

                _context21.prev = 4;
                this.element.loaded = this.visit(this.sourceURL);
                this.appearanceObserver.stop();
                _context21.next = 9;
                return this.element.loaded;

              case 9:
                this.hasBeenLoaded = true;
                session.frameLoaded(this.element);
                _context21.next = 17;
                break;

              case 13:
                _context21.prev = 13;
                _context21.t0 = _context21["catch"](4);
                this.currentURL = previousURL;
                throw _context21.t0;

              case 17:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[4, 13]]);
      }));

      function loadSourceURL() {
        return _loadSourceURL.apply(this, arguments);
      }

      return loadSourceURL;
    }()
  }, {
    key: "loadResponse",
    value: function () {
      var _loadResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22(fetchResponse) {
        var html, _parseHTMLDocument, body, snapshot, renderer;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (fetchResponse.redirected) {
                  this.sourceURL = fetchResponse.response.url;
                }

                _context22.prev = 1;
                _context22.next = 4;
                return fetchResponse.responseHTML;

              case 4:
                html = _context22.sent;

                if (!html) {
                  _context22.next = 19;
                  break;
                }

                _parseHTMLDocument = parseHTMLDocument(html), body = _parseHTMLDocument.body;
                _context22.t0 = Snapshot;
                _context22.next = 10;
                return this.extractForeignFrameElement(body);

              case 10:
                _context22.t1 = _context22.sent;
                snapshot = new _context22.t0(_context22.t1);
                renderer = new FrameRenderer(this.view.snapshot, snapshot, false);

                if (!this.view.renderPromise) {
                  _context22.next = 16;
                  break;
                }

                _context22.next = 16;
                return this.view.renderPromise;

              case 16:
                _context22.next = 18;
                return this.view.render(renderer);

              case 18:
                session.frameRendered(fetchResponse, this.element);

              case 19:
                _context22.next = 25;
                break;

              case 21:
                _context22.prev = 21;
                _context22.t2 = _context22["catch"](1);
                console.error(_context22.t2);
                this.view.invalidate();

              case 25:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this, [[1, 21]]);
      }));

      function loadResponse(_x16) {
        return _loadResponse.apply(this, arguments);
      }

      return loadResponse;
    }()
  }, {
    key: "elementAppearedInViewport",
    value: function elementAppearedInViewport(element) {
      this.loadSourceURL();
    }
  }, {
    key: "shouldInterceptLinkClick",
    value: function shouldInterceptLinkClick(element, url) {
      if (element.hasAttribute("data-turbo-method")) {
        return false;
      } else {
        return this.shouldInterceptNavigation(element);
      }
    }
  }, {
    key: "linkClickIntercepted",
    value: function linkClickIntercepted(element, url) {
      this.reloadable = true;
      this.navigateFrame(element, url);
    }
  }, {
    key: "shouldInterceptFormSubmission",
    value: function shouldInterceptFormSubmission(element, submitter) {
      return this.shouldInterceptNavigation(element, submitter);
    }
  }, {
    key: "formSubmissionIntercepted",
    value: function formSubmissionIntercepted(element, submitter) {
      if (this.formSubmission) {
        this.formSubmission.stop();
      }

      this.reloadable = false;
      this.formSubmission = new FormSubmission(this, element, submitter);

      if (this.formSubmission.fetchRequest.isIdempotent) {
        this.navigateFrame(element, this.formSubmission.fetchRequest.url.href);
      } else {
        var fetchRequest = this.formSubmission.fetchRequest;
        this.prepareHeadersForRequest(fetchRequest.headers, fetchRequest);
        this.formSubmission.start();
      }
    }
  }, {
    key: "prepareHeadersForRequest",
    value: function prepareHeadersForRequest(headers, request) {
      headers["Turbo-Frame"] = this.id;
    }
  }, {
    key: "requestStarted",
    value: function requestStarted(request) {
      this.element.setAttribute("busy", "");
    }
  }, {
    key: "requestPreventedHandlingResponse",
    value: function requestPreventedHandlingResponse(request, response) {
      this.resolveVisitPromise();
    }
  }, {
    key: "requestSucceededWithResponse",
    value: function () {
      var _requestSucceededWithResponse2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23(request, response) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.next = 2;
                return this.loadResponse(response);

              case 2:
                this.resolveVisitPromise();

              case 3:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function requestSucceededWithResponse(_x17, _x18) {
        return _requestSucceededWithResponse2.apply(this, arguments);
      }

      return requestSucceededWithResponse;
    }()
  }, {
    key: "requestFailedWithResponse",
    value: function requestFailedWithResponse(request, response) {
      console.error(response);
      this.resolveVisitPromise();
    }
  }, {
    key: "requestErrored",
    value: function requestErrored(request, error) {
      console.error(error);
      this.resolveVisitPromise();
    }
  }, {
    key: "requestFinished",
    value: function requestFinished(request) {
      this.element.removeAttribute("busy");
    }
  }, {
    key: "formSubmissionStarted",
    value: function formSubmissionStarted(formSubmission) {
      var frame = this.findFrameElement(formSubmission.formElement);
      frame.setAttribute("busy", "");
    }
  }, {
    key: "formSubmissionSucceededWithResponse",
    value: function formSubmissionSucceededWithResponse(formSubmission, response) {
      var frame = this.findFrameElement(formSubmission.formElement);
      frame.delegate.loadResponse(response);
    }
  }, {
    key: "formSubmissionFailedWithResponse",
    value: function formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
      this.element.delegate.loadResponse(fetchResponse);
    }
  }, {
    key: "formSubmissionErrored",
    value: function formSubmissionErrored(formSubmission, error) {
      console.error(error);
    }
  }, {
    key: "formSubmissionFinished",
    value: function formSubmissionFinished(formSubmission) {
      var frame = this.findFrameElement(formSubmission.formElement);
      frame.removeAttribute("busy");
    }
  }, {
    key: "allowsImmediateRender",
    value: function allowsImmediateRender(snapshot, resume) {
      return true;
    }
  }, {
    key: "viewRenderedSnapshot",
    value: function viewRenderedSnapshot(snapshot, isPreview) {}
  }, {
    key: "viewInvalidated",
    value: function viewInvalidated() {}
  }, {
    key: "visit",
    value: function () {
      var _visit = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24(url) {
        var _this31 = this;

        var request;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                request = new FetchRequest(this, FetchMethod.get, expandURL(url));
                return _context24.abrupt("return", new Promise(function (resolve) {
                  _this31.resolveVisitPromise = function () {
                    _this31.resolveVisitPromise = function () {};

                    resolve();
                  };

                  request.perform();
                }));

              case 2:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function visit(_x19) {
        return _visit.apply(this, arguments);
      }

      return visit;
    }()
  }, {
    key: "navigateFrame",
    value: function navigateFrame(element, url) {
      var frame = this.findFrameElement(element);
      frame.src = url;
    }
  }, {
    key: "findFrameElement",
    value: function findFrameElement(element) {
      var _a;

      var id = element.getAttribute("data-turbo-frame") || this.element.getAttribute("target");
      return (_a = getFrameElementById(id)) !== null && _a !== void 0 ? _a : this.element;
    }
  }, {
    key: "extractForeignFrameElement",
    value: function () {
      var _extractForeignFrameElement = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25(container) {
        var element, id;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                id = CSS.escape(this.id);
                _context25.prev = 1;

                if (!(element = activateElement(container.querySelector("turbo-frame#".concat(id)), this.currentURL))) {
                  _context25.next = 4;
                  break;
                }

                return _context25.abrupt("return", element);

              case 4:
                if (!(element = activateElement(container.querySelector("turbo-frame[src][recurse~=".concat(id, "]")), this.currentURL))) {
                  _context25.next = 10;
                  break;
                }

                _context25.next = 7;
                return element.loaded;

              case 7:
                _context25.next = 9;
                return this.extractForeignFrameElement(element);

              case 9:
                return _context25.abrupt("return", _context25.sent);

              case 10:
                console.error("Response has no matching <turbo-frame id=\"".concat(id, "\"> element"));
                _context25.next = 16;
                break;

              case 13:
                _context25.prev = 13;
                _context25.t0 = _context25["catch"](1);
                console.error(_context25.t0);

              case 16:
                return _context25.abrupt("return", new FrameElement());

              case 17:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this, [[1, 13]]);
      }));

      function extractForeignFrameElement(_x20) {
        return _extractForeignFrameElement.apply(this, arguments);
      }

      return extractForeignFrameElement;
    }()
  }, {
    key: "shouldInterceptNavigation",
    value: function shouldInterceptNavigation(element, submitter) {
      var id = element.getAttribute("data-turbo-frame") || this.element.getAttribute("target");

      if (!this.enabled || id == "_top") {
        return false;
      }

      if (id) {
        var frameElement = getFrameElementById(id);

        if (frameElement) {
          return !frameElement.disabled;
        }
      }

      if (!session.elementDriveEnabled(element)) {
        return false;
      }

      if (submitter && !session.elementDriveEnabled(submitter)) {
        return false;
      }

      return true;
    }
  }, {
    key: "id",
    get: function get() {
      return this.element.id;
    }
  }, {
    key: "enabled",
    get: function get() {
      return !this.element.disabled;
    }
  }, {
    key: "sourceURL",
    get: function get() {
      if (this.element.src) {
        return this.element.src;
      }
    },
    set: function set(sourceURL) {
      this.settingSourceURL = true;
      this.element.src = sourceURL !== null && sourceURL !== void 0 ? sourceURL : null;
      this.currentURL = this.element.src;
      this.settingSourceURL = false;
    }
  }, {
    key: "reloadable",
    get: function get() {
      var frame = this.findFrameElement(this.element);
      return frame.hasAttribute("reloadable");
    },
    set: function set(value) {
      var frame = this.findFrameElement(this.element);

      if (value) {
        frame.setAttribute("reloadable", "");
      } else {
        frame.removeAttribute("reloadable");
      }
    }
  }, {
    key: "loadingStyle",
    get: function get() {
      return this.element.loading;
    }
  }, {
    key: "isLoading",
    get: function get() {
      return this.formSubmission !== undefined || this.resolveVisitPromise() !== undefined;
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.element.isActive && this.connected;
    }
  }]);

  return FrameController;
}();

function getFrameElementById(id) {
  if (id != null) {
    var element = document.getElementById(id);

    if (element instanceof FrameElement) {
      return element;
    }
  }
}

function activateElement(element, currentURL) {
  if (element) {
    var src = element.getAttribute("src");

    if (src != null && currentURL != null && urlsAreEqual(src, currentURL)) {
      throw new Error("Matching <turbo-frame id=\"".concat(element.id, "\"> element has a source URL which references itself"));
    }

    if (element.ownerDocument !== document) {
      element = document.importNode(element, true);
    }

    if (element instanceof FrameElement) {
      element.connectedCallback();
      return element;
    }
  }
}

var StreamActions = {
  after: function after() {
    var _this32 = this;

    this.targetElements.forEach(function (e) {
      var _a;

      return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(_this32.templateContent, e.nextSibling);
    });
  },
  append: function append() {
    var _this33 = this;

    this.removeDuplicateTargetChildren();
    this.targetElements.forEach(function (e) {
      return e.append(_this33.templateContent);
    });
  },
  before: function before() {
    var _this34 = this;

    this.targetElements.forEach(function (e) {
      var _a;

      return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(_this34.templateContent, e);
    });
  },
  prepend: function prepend() {
    var _this35 = this;

    this.removeDuplicateTargetChildren();
    this.targetElements.forEach(function (e) {
      return e.prepend(_this35.templateContent);
    });
  },
  remove: function remove() {
    this.targetElements.forEach(function (e) {
      return e.remove();
    });
  },
  replace: function replace() {
    var _this36 = this;

    this.targetElements.forEach(function (e) {
      return e.replaceWith(_this36.templateContent);
    });
  },
  update: function update() {
    var _this37 = this;

    this.targetElements.forEach(function (e) {
      e.innerHTML = "";
      e.append(_this37.templateContent);
    });
  }
};

var StreamElement = /*#__PURE__*/function (_HTMLElement2) {
  _inherits(StreamElement, _HTMLElement2);

  var _super9 = _createSuper(StreamElement);

  function StreamElement() {
    _classCallCheck(this, StreamElement);

    return _super9.apply(this, arguments);
  }

  _createClass(StreamElement, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.prev = 0;
                _context26.next = 3;
                return this.render();

              case 3:
                _context26.next = 8;
                break;

              case 5:
                _context26.prev = 5;
                _context26.t0 = _context26["catch"](0);
                console.error(_context26.t0);

              case 8:
                _context26.prev = 8;
                this.disconnect();
                return _context26.finish(8);

              case 11:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this, [[0, 5, 8, 11]]);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "render",
    value: function () {
      var _render6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee28() {
        var _this38 = this;

        var _a;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                return _context28.abrupt("return", (_a = this.renderPromise) !== null && _a !== void 0 ? _a : this.renderPromise = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee27() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee27$(_context27) {
                    while (1) {
                      switch (_context27.prev = _context27.next) {
                        case 0:
                          if (!_this38.dispatchEvent(_this38.beforeRenderEvent)) {
                            _context27.next = 4;
                            break;
                          }

                          _context27.next = 3;
                          return nextAnimationFrame();

                        case 3:
                          _this38.performAction();

                        case 4:
                        case "end":
                          return _context27.stop();
                      }
                    }
                  }, _callee27);
                }))());

              case 1:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function render() {
        return _render6.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "disconnect",
    value: function disconnect() {
      try {
        this.remove();
      } catch (_a) {}
    }
  }, {
    key: "removeDuplicateTargetChildren",
    value: function removeDuplicateTargetChildren() {
      this.duplicateChildren.forEach(function (c) {
        return c.remove();
      });
    }
  }, {
    key: "duplicateChildren",
    get: function get() {
      var _a;

      var existingChildren = this.targetElements.flatMap(function (e) {
        return _toConsumableArray(e.children);
      }).filter(function (c) {
        return !!c.id;
      });

      var newChildrenIds = _toConsumableArray((_a = this.templateContent) === null || _a === void 0 ? void 0 : _a.children).filter(function (c) {
        return !!c.id;
      }).map(function (c) {
        return c.id;
      });

      return existingChildren.filter(function (c) {
        return newChildrenIds.includes(c.id);
      });
    }
  }, {
    key: "performAction",
    get: function get() {
      if (this.action) {
        var actionFunction = StreamActions[this.action];

        if (actionFunction) {
          return actionFunction;
        }

        this.raise("unknown action");
      }

      this.raise("action attribute is missing");
    }
  }, {
    key: "targetElements",
    get: function get() {
      if (this.target) {
        return this.targetElementsById;
      } else if (this.targets) {
        return this.targetElementsByQuery;
      } else {
        this.raise("target or targets attribute is missing");
      }
    }
  }, {
    key: "templateContent",
    get: function get() {
      return this.templateElement.content.cloneNode(true);
    }
  }, {
    key: "templateElement",
    get: function get() {
      if (this.firstElementChild instanceof HTMLTemplateElement) {
        return this.firstElementChild;
      }

      this.raise("first child element must be a <template> element");
    }
  }, {
    key: "action",
    get: function get() {
      return this.getAttribute("action");
    }
  }, {
    key: "target",
    get: function get() {
      return this.getAttribute("target");
    }
  }, {
    key: "targets",
    get: function get() {
      return this.getAttribute("targets");
    }
  }, {
    key: "raise",
    value: function raise(message) {
      throw new Error("".concat(this.description, ": ").concat(message));
    }
  }, {
    key: "description",
    get: function get() {
      var _a, _b;

      return (_b = ((_a = this.outerHTML.match(/<[^>]+>/)) !== null && _a !== void 0 ? _a : [])[0]) !== null && _b !== void 0 ? _b : "<turbo-stream>";
    }
  }, {
    key: "beforeRenderEvent",
    get: function get() {
      return new CustomEvent("turbo:before-stream-render", {
        bubbles: true,
        cancelable: true
      });
    }
  }, {
    key: "targetElementsById",
    get: function get() {
      var _a;

      var element = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.getElementById(this.target);

      if (element !== null) {
        return [element];
      } else {
        return [];
      }
    }
  }, {
    key: "targetElementsByQuery",
    get: function get() {
      var _a;

      var elements = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.querySelectorAll(this.targets);

      if (elements.length !== 0) {
        return Array.prototype.slice.call(elements);
      } else {
        return [];
      }
    }
  }]);

  return StreamElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

FrameElement.delegateConstructor = FrameController;
customElements.define("turbo-frame", FrameElement);
customElements.define("turbo-stream", StreamElement);

(function () {
  var element = document.currentScript;
  if (!element) return;
  if (element.hasAttribute("data-turbo-suppress-warning")) return;

  while (element = element.parentElement) {
    if (element == document.body) {
      return console.warn(unindent(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!\n\n        Load your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\n        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements\n\n        \u2014\u2014\n        Suppress this warning by adding a \"data-turbo-suppress-warning\" attribute to: %s\n      "]))), element.outerHTML);
    }
  }
})();

window.Turbo = Turbo;
start();


/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm.delete(form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form:not([data-turbo=true])',
        formInputClickSelector: 'form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }

        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-36c6cf55b15403a4d280.js.map