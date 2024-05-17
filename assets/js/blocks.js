/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index/js/blocks.js":
/*!**************************************!*\
  !*** ./src/pages/index/js/blocks.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/burger */ \"./src/pages/index/js/blocks/burger.js\");\n/* harmony import */ var _blocks_blind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/blind */ \"./src/pages/index/js/blocks/blind.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    (0,_blocks_burger__WEBPACK_IMPORTED_MODULE_0__.burger)();\r\n    (0,_blocks_blind__WEBPACK_IMPORTED_MODULE_1__.blind)()\r\n})\r\n\n\n//# sourceURL=webpack://project-3/./src/pages/index/js/blocks.js?");

/***/ }),

/***/ "./src/pages/index/js/blocks/blind.js":
/*!********************************************!*\
  !*** ./src/pages/index/js/blocks/blind.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blind: () => (/* binding */ blind)\n/* harmony export */ });\nfunction blind() {\r\n\tconst btn = document.querySelector('[data-header=\"blind-btn\"]')\r\n\r\n\tbtn.addEventListener('click', function () {\r\n\t\tconst existingLink = document.head.querySelector('link[href=\"assets/css/blind.css\"]')\r\n\r\n\t\tif (existingLink) {\r\n\t\t\texistingLink.remove()\r\n\t\t} else {\r\n\t\t\tconst link = document.createElement('link')\r\n\t\t\tlink.rel = 'stylesheet'\r\n\t\t\tlink.href = 'assets/css/blind.css'\r\n\t\t\tdocument.head.appendChild(link)\r\n\t\t}\r\n\t})\r\n}\n\n//# sourceURL=webpack://project-3/./src/pages/index/js/blocks/blind.js?");

/***/ }),

/***/ "./src/pages/index/js/blocks/burger.js":
/*!*********************************************!*\
  !*** ./src/pages/index/js/blocks/burger.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   burger: () => (/* binding */ burger)\n/* harmony export */ });\nfunction burger() {\r\n\tconst btn = document.querySelector('[data-header=\"burger\"]');\r\n\tconst menu = document.querySelector('[data-header=\"menu\"]');\r\n\tconst body = document.body;\r\n\r\n\tconst burgerOpen = () => {\r\n\t\tbtn.classList.toggle('header__burger_active');\r\n\t\tmenu.classList.toggle('header__menu_active');\r\n\t\tbody.classList.toggle('fixed');\r\n\t}\r\n\r\n\tconst burgerClose = () => {\r\n\t\tbtn.classList.remove('header__burger_active');\r\n\t\tmenu.classList.remove('header__menu_active');\r\n\t\tbody.classList.remove('fixed');\r\n\t}\r\n\r\n\tbtn.addEventListener('click', burgerOpen);\r\n\tmenu.addEventListener('click', event => {\r\n\t\tif (event.target && event.target.tagName === 'A') {\r\n\t\t\tburgerClose();\r\n\t\t}\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack://project-3/./src/pages/index/js/blocks/burger.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index/js/blocks.js");
/******/ 	
/******/ })()
;