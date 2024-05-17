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

/***/ "./src/pages/faq/js/faq.js":
/*!*********************************!*\
  !*** ./src/pages/faq/js/faq.js ***!
  \*********************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n\t// Получаем все элементы с классом \"faq__box\"\r\n\tconst boxes = document.querySelectorAll('.faq__box')\r\n\r\n\t// Проходимся по каждому элементу и добавляем обработчик события \"click\"\r\n\tboxes.forEach(box => {\r\n\t\t// Находим дочерние элементы с классами \"faq__box-img\" и \"faq__box-description\"\r\n\t\tconst img = box.querySelector('.faq__box-img')\r\n\t\tconst description = box.querySelector('.faq__box-description')\r\n\r\n\t\t// Добавляем обработчик события \"click\" для каждого \"box\"\r\n\t\tbox.addEventListener('click', () => {\r\n\t\t\t// Добавляем классы при нажатии\r\n\t\t\timg.classList.toggle('faq__box-img_active')\r\n\t\t\tdescription.classList.toggle('faq__box-description_active')\r\n\t\t})\r\n\t})\r\n})\n\n//# sourceURL=webpack://project-3/./src/pages/faq/js/faq.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/pages/faq/js/faq.js"]();
/******/ 	
/******/ })()
;