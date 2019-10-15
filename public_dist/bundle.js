/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/scss/styles.scss":
/*!*********************************!*\
  !*** ./public/scss/styles.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./public/scss/styles.scss?");

/***/ }),

/***/ "./public/ts/login.ts":
/*!****************************!*\
  !*** ./public/ts/login.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* Get Element */\r\nconst body = document.querySelector(\"body\");\r\nconst modal = document.getElementById(\"loginModal\");\r\nconst modalBtn = document.querySelector(\".header__menu--login\");\r\nconst closeBtn = document.querySelector(\".closeBtn\");\r\nconst contents = document.querySelector(\"#contents\");\r\nconst loginForm = document.querySelector(\".loginForm\");\r\nconst loginFooter = document.querySelector(\".login__footer\");\r\nconst loginLink = document.querySelector(\".login--link\");\r\nconst registerFooter = document.querySelector(\".register__footer\");\r\nconst registerForm = document.querySelector(\".registerForm\");\r\nconst registerLink = document.querySelector(\".register--link\");\r\nconst navTitle = document.querySelector(\".modal__nav__header--title\");\r\n/* Hide Register Form */\r\nregisterForm.style.display = \"none\";\r\nregisterFooter.style.display = \"none\";\r\n/* Open Register Form Event */\r\nregisterLink.addEventListener(\"click\", () => {\r\n    loginForm.style.display = \"none\";\r\n    registerForm.style.display = \"block\";\r\n    registerLink.innerText = \"Login\";\r\n    navTitle.innerText = \"Register\";\r\n    loginFooter.style.display = \"none\";\r\n    registerFooter.style.display = \"block\";\r\n});\r\n/* Open Login Event */\r\nloginLink.addEventListener(\"click\", () => {\r\n    initializeModal();\r\n});\r\n/* Open Modal Event */\r\nmodalBtn.addEventListener(\"click\", () => {\r\n    modal.style.display = \"block\";\r\n    contents.style.opacity = \"0.5\";\r\n});\r\n/* Click Outside and Close */\r\nwindow.addEventListener(\"click\", evt => {\r\n    if (evt.target === body) {\r\n        closeModalEvent();\r\n        initializeModal();\r\n    }\r\n});\r\n/* Close Modal Event */\r\ncloseBtn.addEventListener(\"click\", () => {\r\n    closeModalEvent();\r\n    initializeModal();\r\n});\r\n/* Close Modal Event Function */\r\nconst closeModalEvent = () => {\r\n    modal.style.display = \"none\";\r\n};\r\n/* Initialize Modal Function */\r\nconst initializeModal = () => {\r\n    contents.style.opacity = \"1.0\";\r\n    registerForm.style.display = \"none\";\r\n    registerLink.innerText = \"Register now\";\r\n    navTitle.innerText = \"Login\";\r\n    loginForm.style.display = \"block\";\r\n    registerFooter.style.display = \"none\";\r\n    loginFooter.style.display = \"block\";\r\n};\r\n\n\n//# sourceURL=webpack:///./public/ts/login.ts?");

/***/ }),

/***/ "./public/ts/main.ts":
/*!***************************!*\
  !*** ./public/ts/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! ../scss/styles.scss */ \"./public/scss/styles.scss\");\r\n__webpack_require__(/*! ./login.ts */ \"./public/ts/login.ts\");\r\n\n\n//# sourceURL=webpack:///./public/ts/main.ts?");

/***/ })

/******/ });