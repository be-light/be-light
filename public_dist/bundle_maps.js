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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/belight_maps.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./public/js/belight_maps.js":
/*!***********************************!*\
  !*** ./public/js/belight_maps.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar BeLightMaps = function BeLightMaps() {\n  var _this = this;\n\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BeLightMaps);\n\n  this.initMap = function () {\n    navigator.geolocation.getCurrentPosition(function (pos) {\n      _this.map = new google.maps.Map(document.getElementById(\"map\"), {\n        center: {\n          lat: pos.coords.latitude,\n          lng: pos.coords.longitude\n        },\n        zoom: 10,\n        fullscreenControl: false,\n        streetViewControl: false,\n        mapTypeControl: false\n      });\n      var latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);\n\n      _this.showCurrentPosition(latLng);\n    });\n  };\n\n  this.getQueryString = function (key) {\n    var url = new URLSearchParams(window.location.search);\n    return url.get(key);\n  };\n\n  this.showCurrentPosition = function (latLng) {\n    var marker = new google.maps.Marker({\n      position: latLng,\n      title: \"My Position\",\n      map: _this.map,\n      draggable: false\n    });\n\n    _this.showInfoWindow(marker);\n  };\n\n  this.showInfoWindow = function (marker) {\n    var infoWindow = new google.maps.InfoWindow({\n      content: \"My Position\"\n    });\n    infoWindow.open(_this.map, marker);\n    setTimeout(function () {\n      infoWindow.close();\n    }, 3000);\n  };\n\n  this.createMarker = function (hosts) {\n    var _loop = function _loop(i) {\n      var latLng = new google.maps.LatLng(Number.parseFloat(hosts[i].hostLatitude), Number.parseFloat(hosts[i].hostLongitude));\n      var marker = new google.maps.Marker({\n        map: _this.map,\n        position: latLng,\n        title: \"Host\",\n        draggable: false\n      });\n      google.maps.event.addListener(marker, \"click\", function () {\n        var infoWindow = new google.maps.InfoWindow({\n          content: hosts[i].hostName\n        });\n        if (_this.prev_infowindow) _this.prev_infowindow.close();\n        _this.prev_infowindow = infoWindow;\n        infoWindow.open(_this.map, marker);\n      });\n    };\n\n    for (var i = 0; i < hosts.length; i++) {\n      _loop(i);\n    }\n  };\n\n  if (!navigator.geolocation) {\n    alert(\"위치 서비스를 허용 해주세요.\");\n    location.href = \"/\";\n  }\n\n  this.prev_infowindow = false;\n  var latitude = this.getQueryString(\"latitude\");\n  var longitude = this.getQueryString(\"longitude\");\n  fetch(\"/api/map/hosts?latitude=\".concat(latitude, \"&longitude=\").concat(longitude)).then(function (response) {\n    return response.json();\n  }).then(function (result) {\n    console.log(result);\n\n    _this.createMarker(result);\n  });\n  window.initMap = this.initMap;\n}\n/* initialize google maps */\n;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new BeLightMaps());\n\n//# sourceURL=webpack:///./public/js/belight_maps.js?");

/***/ })

/******/ });