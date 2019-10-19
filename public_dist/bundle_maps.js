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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar BeLightMaps = function BeLightMaps() {\n  var _this = this;\n\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BeLightMaps);\n\n  this.initMap = function () {\n    navigator.geolocation.getCurrentPosition(function (pos) {\n      _this.map = new google.maps.Map(document.getElementById(\"map\"), {\n        center: {\n          lat: pos.coords.latitude,\n          lng: pos.coords.longitude\n        },\n        zoom: 10,\n        fullscreenControl: false,\n        streetViewControl: false,\n        mapTypeControl: false\n      });\n      var latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);\n\n      _this.showCurrentPosition(latLng);\n    });\n  };\n\n  this.getQueryString = function (key) {\n    var url = new URLSearchParams(window.location.search);\n    return url.get(key);\n  };\n\n  this.showCurrentPosition = function (latLng) {\n    var marker = new google.maps.Marker({\n      position: latLng,\n      title: \"My Position\",\n      map: _this.map,\n      draggable: false\n    });\n\n    _this.showInfoWindow(marker);\n  };\n\n  this.showInfoWindow = function (marker) {\n    var infoWindow = new google.maps.InfoWindow({\n      content: \"My Position\"\n    });\n    infoWindow.open(_this.map, marker);\n    setTimeout(function () {\n      infoWindow.close();\n    }, 3000);\n  };\n\n  this.createMarker = function (hosts) {\n    var _loop = function _loop(i) {\n      var latLng = new google.maps.LatLng(Number.parseFloat(hosts[i].hostLatitude), Number.parseFloat(hosts[i].hostLongitude));\n      var marker = new google.maps.Marker({\n        map: _this.map,\n        position: latLng,\n        title: \"Host\",\n        draggable: false\n      });\n      google.maps.event.addListener(marker, \"click\", function () {\n        var infoWindow = new google.maps.InfoWindow({\n          content: \"\\n            <div class=\\\"info__window\\\">\\n                <p class=\\\"info__window--hostName\\\">\".concat(hosts[i].hostName, \"</p>\\n                <div class=\\\"info__window--block\\\">\\n                    <img src=\\\"https://via.placeholder.com/150\\\" alt=\\\"placeholder\\\" />\\n                </div>\\n               <p class=\\\"info__window--hostTel\\\">\").concat(hosts[i].hostTel, \"</p>\\n               <p class=\\\"info__window--hostAddress\\\">\").concat(hosts[i].hostAddress, \"</p>\\n                <div class=\\\"info__window--block\\\">\\n                    Open <span class=\\\"info__window--hostOpenTime\\\"> \").concat(hosts[i].hostOpenTime, \"</span>\\n                    Close <span class=\\\"info__window--hostCloseTime\\\">\").concat(hosts[i].hostCloseTime, \"</span>\\n                </div>\\n\\n                <div class=\\\"info__window--buttons\\\">\\n                    <input type=\\\"button\\\" class=\\\"dropBtn info--btn\\\" value=\\\"\\uB9E1\\uAE30\\uAE30\\\" idx=\\\"\").concat(hosts[i].hostIdx, \"\\\"/>\\n                    <input type=\\\"button\\\" class=\\\"getBtn info--btn\\\" value=\\\"\\uCC3E\\uAE30\\\" idx=\\\"\").concat(hosts[i].hostIdx, \"\\\"/>\\n                </div>\\n\\n               \\n            </div>\\n          \")\n        });\n        if (_this.prev_infowindow) _this.prev_infowindow.close();\n        _this.prev_infowindow = infoWindow;\n        infoWindow.open(_this.map, marker);\n      });\n    };\n\n    for (var i = 0; i < hosts.length; i++) {\n      _loop(i);\n    }\n  };\n\n  this.addHostList = function (hostList) {\n    console.log(hostList);\n    var hostsColumns = document.querySelector(\".hosts__columns\");\n\n    for (var i = 0; i < hostList.length; i++) {\n      var hostsColumn = document.createElement(\"div\");\n      hostsColumn.className = \"hosts__column\";\n      var hostsColumnHeader = document.createElement(\"div\");\n      hostsColumnHeader.className = \"hosts__column__header\";\n      var hostsColumnTitle = document.createElement(\"p\");\n      hostsColumnTitle.className = \"hosts__column--title\";\n      hostsColumnTitle.innerText = \"Tour Information Center\";\n      var hostsColumnHeaderImages = document.createElement(\"div\");\n      hostsColumnHeaderImages.className = \"hosts__column__header--images\";\n      var hostsColumnContents = document.createElement(\"div\");\n      hostsColumnContents.className = \"hosts__column__contents\";\n      var hostsColumnContentsBlock = document.createElement(\"div\");\n      hostsColumnContentsBlock.className = \"hosts__column__contents--block\";\n      var hostsColumnHostName = document.createElement(\"p\");\n      hostsColumnHostName.className = \"hosts__column--hostName\";\n      hostsColumnHostName.innerHTML = hostList[i].hostName;\n      var hostsColumnHostTel = document.createElement(\"p\");\n      hostsColumnHostTel.className = \"hosts__column--hostTel\";\n      hostsColumnHostTel.innerHTML = hostList[i].hostTel;\n      var hostsColumnHostAddress = document.createElement(\"p\");\n      hostsColumnHostAddress.className = \"hosts__column--hostAddress\";\n      hostsColumnHostAddress.innerHTML = hostList[i].hostAddress;\n      var hostsColumnContentsImage = document.createElement(\"div\");\n      hostsColumnContentsImage.className = \"hosts__column__contents--image\";\n      var placeholder = document.createElement(\"img\");\n      placeholder.src = \"https://via.placeholder.com/100\";\n      placeholder.alt = \"placeholder\";\n      placeholder.className = \"placeholder\";\n      var hostsColumnsReview = document.createElement(\"div\");\n      hostsColumnsReview.className = \"hosts__columns__review\";\n      var hostsColumnsReviewBtn = document.createElement(\"input\");\n      hostsColumnsReviewBtn.className = \"hosts__columns__review--btn reviewButton\";\n      hostsColumnsReviewBtn.type = \"button\";\n      hostsColumnsReviewBtn.value = \"리뷰\";\n\n      for (var _i = 0; _i < 5; _i++) {\n        var starFull = document.createElement(\"img\");\n        starFull.src = \"images/star_full.png\";\n        starFull.className = \"star_full_image\";\n        starFull.alt = \"star_full\";\n        hostsColumnHeaderImages.appendChild(starFull);\n      }\n\n      hostsColumnHeader.appendChild(hostsColumnTitle);\n      hostsColumnHeader.appendChild(hostsColumnHeaderImages);\n      hostsColumnContentsBlock.appendChild(hostsColumnHostName);\n      hostsColumnContentsBlock.appendChild(hostsColumnHostTel);\n      hostsColumnContentsBlock.appendChild(hostsColumnHostAddress);\n      hostsColumnContentsImage.appendChild(placeholder);\n      hostsColumnContents.appendChild(hostsColumnContentsBlock);\n      hostsColumnContents.appendChild(hostsColumnContentsImage);\n      hostsColumn.appendChild(hostsColumnHeader);\n      hostsColumn.appendChild(hostsColumnContents);\n      hostsColumnsReview.appendChild(hostsColumnsReviewBtn);\n      hostsColumns.appendChild(hostsColumn);\n      hostsColumns.appendChild(hostsColumnsReview);\n    }\n  };\n\n  if (!navigator.geolocation) {\n    alert(\"위치 서비스를 허용 해주세요.\");\n    location.href = \"/\";\n  }\n\n  this.prev_infowindow = false;\n  var latitude = this.getQueryString(\"latitude\");\n  var longitude = this.getQueryString(\"longitude\");\n  fetch(\"/api/map/hosts?latitude=\".concat(latitude, \"&longitude=\").concat(longitude)).then(function (response) {\n    return response.json();\n  }).then(function (result) {\n    _this.createMarker(result);\n\n    _this.addHostList(result);\n  });\n  window.initMap = this.initMap;\n}\n/* initialize google maps */\n;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new BeLightMaps());\n\n//# sourceURL=webpack:///./public/js/belight_maps.js?");

/***/ })

/******/ });