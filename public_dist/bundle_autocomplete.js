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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/belight_autocomplete.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/belight_autocomplete.js":
/*!*******************************************!*\
  !*** ./public/js/belight_autocomplete.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var input;\nvar autocomplete;\nvar geocoder;\nvar userLatitude;\nvar userLongitude;\nvar searchSubmitBtn;\nvar searchForm;\ndocument.addEventListener(\"DOMContentLoaded\", function (event) {\n  searchSubmitBtn = document.querySelector(\".intro__searchform--submitbtn\");\n  searchForm = document.querySelector(\".intro__searchform\");\n  input = document.querySelector(\".input__place\");\n  geocoder = new google.maps.Geocoder();\n  autocomplete = new google.maps.places.Autocomplete(input, {\n    types: [\"geocode\"]\n  });\n  /* Set LatLng */\n\n  userLatitude = document.querySelector(\".user__latitude\");\n  userLongitude = document.querySelector(\".user__longitude\");\n\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(function (pos) {\n      userLatitude.value = pos.coords.latitude;\n      userLongitude.value = pos.coords.longitude;\n    });\n  }\n  /* Search Text */\n\n\n  searchForm.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n\n    if (input.value) {\n      setLocation(geocoder, input.value).then(function (res) {\n        userLatitude.value = res.lat;\n        userLongitude.value = res.lng;\n        document.querySelector(\".intro__searchform\").submit();\n      });\n    } else {\n      document.querySelector(\".intro__searchform\").submit();\n    }\n  });\n});\n\nsetLocation = function setLocation(geocoder, address) {\n  return new Promise(function (resolve, reject) {\n    geocoder.geocode({\n      address: address\n    }, function (results, status) {\n      if (status === \"ZERO_RESULTS\") {\n        alert(\"유효하지 않은 주소입니다.\");\n        return;\n      }\n\n      resolve({\n        lat: results[0].geometry.location.lat(),\n        lng: results[0].geometry.location.lng()\n      });\n    });\n  });\n};\n\n//# sourceURL=webpack:///./public/js/belight_autocomplete.js?");

/***/ })

/******/ });