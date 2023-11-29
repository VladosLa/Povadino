/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/***/ (() => {

eval("var showBurger = document.getElementById('burger');\nvar closeBurger = document.getElementById('closeburger');\nshowBurger.addEventListener('click', function (event) {\n  var sidebar = document.querySelector('.nav__sidebar');\n  event.preventDefault();\n  sidebar.style.display = 'flex';\n});\ncloseBurger.addEventListener('click', function (event) {\n  var sidebar = document.querySelector('.nav__sidebar');\n  event.preventDefault();\n  sidebar.style.display = 'none';\n});\n\n//# sourceURL=webpack://povadino/./src/js/burger.js?");

/***/ }),

/***/ "./src/js/flip-card.js":
/*!*****************************!*\
  !*** ./src/js/flip-card.js ***!
  \*****************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var flipBtns = document.querySelectorAll('.vehicle__flip-btn');\n  var closeBtns = document.querySelectorAll('.close-btn');\n  var flipContainers = document.querySelectorAll('.flip');\n  flipBtns.forEach(function (btn, index) {\n    btn.addEventListener('click', function () {\n      flipContainers[index].classList.toggle('flipped');\n    });\n  });\n  closeBtns.forEach(function (btn, index) {\n    btn.addEventListener('click', function () {\n      flipContainers[index].classList.remove('flipped');\n    });\n  });\n});\n\n//# sourceURL=webpack://povadino/./src/js/flip-card.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _js_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/burger */ \"./src/js/burger.js\");\n/* harmony import */ var _js_burger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_burger__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/slider */ \"./src/js/slider.js\");\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_slider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_partners_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/partners-popup */ \"./src/js/partners-popup.js\");\n/* harmony import */ var _js_partners_popup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_partners_popup__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_flip_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/flip-card */ \"./src/js/flip-card.js\");\n/* harmony import */ var _js_flip_card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_flip_card__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _js_swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/swiper */ \"./src/js/swiper.js\");\n/* harmony import */ var _js_swiper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_swiper__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n//# sourceURL=webpack://povadino/./src/js/main.js?");

/***/ }),

/***/ "./src/js/partners-popup.js":
/*!**********************************!*\
  !*** ./src/js/partners-popup.js ***!
  \**********************************/
/***/ (() => {

eval("// Selecting the preview container and preview cards\nvar previewContainer = document.querySelector('.partners__preview');\nvar previewBoxes = previewContainer.querySelectorAll('.partners__previewcard');\n\n// Selecting all logo elements\ndocument.querySelectorAll('.partners__logo').forEach(function (logo) {\n  logo.onclick = function () {\n    // Hiding all preview cards\n    previewBoxes.forEach(function (preview) {\n      preview.classList.remove('active');\n    });\n\n    // Displaying only the corresponding preview card\n    var name = logo.getAttribute('data-name');\n    var correspondingPreview = document.querySelector(\"[data-target=\\\"\".concat(name, \"\\\"]\"));\n    if (correspondingPreview) {\n      correspondingPreview.classList.add('active');\n      previewContainer.style.display = 'flex';\n    }\n  };\n});\n\n// Handling close button click for each preview card\npreviewBoxes.forEach(function (close) {\n  close.querySelector('.fa-times').onclick = function () {\n    close.classList.remove('active');\n    previewContainer.style.display = 'none';\n  };\n});\n\n//# sourceURL=webpack://povadino/./src/js/partners-popup.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("var navButtons = document.querySelectorAll('.hero__slide-btn');\nvar slides = document.querySelectorAll('.hero__video-slide');\nvar sliderNav = function sliderNav(manual) {\n  navButtons.forEach(function (navButton) {\n    navButton.classList.remove('active');\n  });\n  slides.forEach(function (slide) {\n    slide.classList.remove('active');\n  });\n  slides[manual].classList.add('active');\n  navButtons[manual].classList.add('active');\n};\nnavButtons.forEach(function (navButton, i) {\n  navButton.addEventListener('click', function () {\n    sliderNav(i);\n  });\n});\n\n//# sourceURL=webpack://povadino/./src/js/slider.js?");

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/***/ (() => {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nvar slider = document.querySelector('.awards__swiper');\nvar container = document.querySelector('.awards__swiper-wrapper');\nvar slides = document.querySelectorAll('.awards__slide');\nvar navigations = document.querySelectorAll('.awards__navigation');\nvar activeOrder = 0;\ninit();\nfunction init() {\n  for (var i = 0; i < slides.length; i++) {\n    var slide = slides[i];\n    slide.dataset.order = i;\n    slide.style.transform = \"translate(-50%, -50%)\";\n    slide.addEventListener('click', clickHandler);\n  }\n  var _iterator = _createForOfIteratorHelper(navigations),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var navigation = _step.value;\n      navigation.addEventListener('click', navigationHandler);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  activeOrder = Math.floor(slides.length / 2);\n  update();\n}\nfunction update() {\n  var _container$getBoundin = container.getBoundingClientRect(),\n    width = _container$getBoundin.width,\n    height = _container$getBoundin.height;\n  var a = width / 2;\n  var b = height / 2;\n  var delta = Math.PI / slides.length / 4;\n  for (var i = 0; i < slides.length; i++) {\n    var leftSlide = document.querySelector(\".awards__slide[data-order=\\\"\".concat(activeOrder - i, \"\\\"]\"));\n    if (leftSlide) {\n      leftSlide.style.zIndex = slides.length - i;\n      leftSlide.style.opacity = 1 - 2 * i / slides.length;\n      leftSlide.style.left = \"\".concat(width / 2 + a * Math.cos(Math.PI * 3 / 2 - delta * i * 2), \"px\");\n      leftSlide.style.top = \"\".concat(-b * Math.sin(Math.PI * 3 / 2 - delta * i * 2), \"px\");\n    }\n    var rightSlide = document.querySelector(\".awards__slide[data-order=\\\"\".concat(activeOrder + i, \"\\\"]\"));\n    if (rightSlide) {\n      rightSlide.style.zIndex = slides.length - i;\n      rightSlide.style.opacity = 1 - 2 * i / slides.length;\n      rightSlide.style.left = \"\".concat(width / 2 + a * Math.cos(Math.PI * 3 / 2 + delta * i * 2), \"px\");\n      rightSlide.style.top = \"\".concat(-b * Math.sin(Math.PI * 3 / 2 + delta * i * 2), \"px\");\n    }\n  }\n}\nfunction clickHandler() {\n  var order = parseInt(this.dataset.order, 10);\n  activeOrder = order;\n  update();\n}\nfunction navigationHandler(e) {\n  e.preventDefault();\n  var dir = this.dataset.dir;\n  if (dir === 'prev') {\n    activeOrder = Math.max(0, activeOrder - 1);\n  } else if (dir === 'next') {\n    activeOrder = Math.min(slides.length - 1, activeOrder + 1);\n  }\n  update();\n}\n\n//# sourceURL=webpack://povadino/./src/js/swiper.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://povadino/./src/sass/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;