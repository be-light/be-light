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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/place_autocomplete.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/place_autocomplete.js":
/*!*****************************************!*\
  !*** ./public/js/place_autocomplete.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var map;\nvar input;\nvar autocomplete;\nvar geocoder;\nvar searchBtn;\nvar hostsColumns;\nvar prev_infowindow = false;\ndocument.addEventListener(\"DOMContentLoaded\", function (event) {\n  input = document.querySelector(\".input__place\");\n  searchBtn = document.querySelector(\".header__contents--searchBtn\");\n  geocoder = new google.maps.Geocoder();\n  autocomplete = new google.maps.places.Autocomplete(input, {\n    types: [\"geocode\"]\n  });\n  /* SeachBtn Click Event */\n\n  searchBtn.addEventListener(\"click\", function (event) {\n    if (!input.value) {\n      alert(\"장소를 입력해 주세요.\");\n      event.preventDefault();\n      return;\n    }\n\n    setLocation(geocoder, input.value).then(function (res) {\n      map = new google.maps.Map(document.getElementById(\"map\"), {\n        center: {\n          lat: res.lat,\n          lng: res.lng\n        },\n        zoom: 10,\n        fullscreenControl: false,\n        streetViewControl: false,\n        mapTypeControl: false\n      });\n      var latLng = new google.maps.LatLng(res.lat, res.lng);\n      console.log(res);\n      showCurrentPosition(latLng);\n      fetch(\"/api/map/hosts?latitude=\".concat(res.lat, \"&longitude=\").concat(res.lng)).then(function (response) {\n        return response.json();\n      }).then(function (result) {\n        createMarker(result);\n        addHostList(result);\n      });\n    });\n  });\n});\n/* Show Current Position with Marker */\n\nshowCurrentPosition = function showCurrentPosition(latLng) {\n  var marker = new google.maps.Marker({\n    position: latLng,\n    title: \"My Position\",\n    map: map,\n    draggable: false\n  });\n  showInfoWindow(marker);\n};\n/* Open info Window */\n\n\nshowInfoWindow = function showInfoWindow(marker) {\n  var infoWindow = new google.maps.InfoWindow({\n    content: \"My Position\"\n  });\n  infoWindow.open(map, marker);\n  setTimeout(function () {\n    infoWindow.close();\n  }, 3000);\n};\n/* Create Marker of Hosts*/\n\n\ncreateMarker = function createMarker(hosts) {\n  var _loop = function _loop(i) {\n    var latLng = new google.maps.LatLng(Number.parseFloat(hosts[i].hostLatitude), Number.parseFloat(hosts[i].hostLongitude));\n    var marker = new google.maps.Marker({\n      map: map,\n      position: latLng,\n      title: \"Host\",\n      draggable: false\n    });\n    google.maps.event.addListener(marker, \"click\", function () {\n      var infoWindow = new google.maps.InfoWindow({\n        content: \"\\n            <div class=\\\"info__window\\\">\\n                <p class=\\\"info__window--hostName\\\">\".concat(hosts[i].hostName, \"</p>\\n                <div class=\\\"info__window--block\\\">\\n                    <img src=\\\"\").concat(hosts[i].hostImage, \"\\\" alt=\\\"hostImage\\\" class=\\\"hostImage\\\" />\\n                </div>\\n               <p class=\\\"info__window--hostTel\\\">\").concat(hosts[i].hostTel, \"</p>\\n               <p class=\\\"info__window--hostAddress\\\">\").concat(hosts[i].hostAddress, \"</p>\\n                <div class=\\\"info__window--block\\\">\\n                    Open <span class=\\\"info__window--hostOpenTime\\\"> \").concat(hosts[i].hostOpenTime, \"</span>\\n                    Close <span class=\\\"info__window--hostCloseTime\\\">\").concat(hosts[i].hostCloseTime, \"</span>\\n                </div>\\n\\n                <div class=\\\"info__window--buttons\\\">\\n                    <input type=\\\"button\\\" class=\\\"dropBtn info--btn\\\" value=\\\"\\uB9E1\\uAE38\\uAC70\\uC5D0\\uC694\\\" idx=\\\"\").concat(hosts[i].hostIdx, \"\\\"/>\\n                    <input type=\\\"button\\\" class=\\\"getBtn info--btn\\\" value=\\\"\\uCC3E\\uC744\\uAC70\\uC5D0\\uC694\\\" idx=\\\"\").concat(hosts[i].hostIdx, \"\\\"/>\\n                </div>\\n\\n               \\n            </div>\\n          \")\n      });\n      if (prev_infowindow) prev_infowindow.close();\n      prev_infowindow = infoWindow;\n      infoWindow.open(map, marker);\n    });\n  };\n\n  for (var i = 0; i < hosts.length; i++) {\n    _loop(i);\n  }\n};\n/* Insert Host Informations from Left Side Menu */\n\n\naddHostList = function addHostList(hostList) {\n  hostsColumns = document.querySelector(\".hosts__columns\");\n  hostsColumns.innerHTML = \"\";\n\n  for (var i = 0; i < hostList.length; i++) {\n    var hostsColumn = document.createElement(\"div\");\n    hostsColumn.className = \"hosts__column\";\n    var hostsColumnHeader = document.createElement(\"div\");\n    hostsColumnHeader.className = \"hosts__column__header\";\n    var hostsColumnTitle = document.createElement(\"p\");\n    hostsColumnTitle.className = \"hosts__column--title\";\n    hostsColumnTitle.innerText = \"Tour Information Center\";\n    var hostsColumnHeaderImages = document.createElement(\"div\");\n    hostsColumnHeaderImages.className = \"hosts__column__header--images\";\n    var hostsColumnContents = document.createElement(\"div\");\n    hostsColumnContents.className = \"hosts__column__contents\";\n    var hostsColumnContentsBlock = document.createElement(\"div\");\n    hostsColumnContentsBlock.className = \"hosts__column__contents--block\";\n    var hostsColumnHostName = document.createElement(\"p\");\n    hostsColumnHostName.className = \"hosts__column--hostName\";\n    hostsColumnHostName.innerHTML = hostList[i].hostName;\n    var hostsColumnHostTel = document.createElement(\"p\");\n    hostsColumnHostTel.className = \"hosts__column--hostTel\";\n    hostsColumnHostTel.innerHTML = hostList[i].hostTel;\n    var hostsColumnHostAddress = document.createElement(\"p\");\n    hostsColumnHostAddress.className = \"hosts__column--hostAddress\";\n    hostsColumnHostAddress.innerHTML = hostList[i].hostAddress;\n    var hostsColumnContentsImage = document.createElement(\"div\");\n    hostsColumnContentsImage.className = \"hosts__column__contents--image\";\n    var placeholder = document.createElement(\"img\");\n    placeholder.src = \"\".concat(hostList[i].hostImage);\n    placeholder.alt = \"hostImage\";\n    placeholder.className = \"hostProfileImage\";\n    var hostsColumnsReview = document.createElement(\"div\");\n    hostsColumnsReview.className = \"hosts__columns__review\";\n    var hostsColumnsReviewBtn = document.createElement(\"input\");\n    hostsColumnsReviewBtn.className = \"hosts__columns__review--btn reviewButton\";\n    hostsColumnsReviewBtn.type = \"button\";\n    hostsColumnsReviewBtn.value = \"리뷰\";\n    hostsColumnsReviewBtn.setAttribute(\"idx\", hostList[i].hostIdx);\n\n    for (var _i = 0; _i < 5; _i++) {\n      var starFull = document.createElement(\"img\");\n      starFull.src = \"images/star_full.png\";\n      starFull.className = \"star_full_image\";\n      starFull.alt = \"star_full\";\n      hostsColumnHeaderImages.appendChild(starFull);\n    }\n\n    hostsColumnHeader.appendChild(hostsColumnTitle);\n    hostsColumnHeader.appendChild(hostsColumnHeaderImages);\n    hostsColumnContentsBlock.appendChild(hostsColumnHostName);\n    hostsColumnContentsBlock.appendChild(hostsColumnHostTel);\n    hostsColumnContentsBlock.appendChild(hostsColumnHostAddress);\n    hostsColumnContentsImage.appendChild(placeholder);\n    hostsColumnContents.appendChild(hostsColumnContentsBlock);\n    hostsColumnContents.appendChild(hostsColumnContentsImage);\n    hostsColumn.appendChild(hostsColumnHeader);\n    hostsColumn.appendChild(hostsColumnContents);\n    hostsColumnsReview.appendChild(hostsColumnsReviewBtn);\n    hostsColumns.appendChild(hostsColumn);\n    hostsColumns.appendChild(hostsColumnsReview);\n  }\n};\n\nsetLocation = function setLocation(geocoder, address) {\n  return new Promise(function (resolve, reject) {\n    geocoder.geocode({\n      address: address\n    }, function (results, status) {\n      if (status === \"ZERO_RESULTS\") {\n        alert(\"유효하지 않은 주소입니다.\");\n        return;\n      }\n\n      resolve({\n        lat: results[0].geometry.location.lat(),\n        lng: results[0].geometry.location.lng()\n      });\n    });\n  });\n};\n\n//# sourceURL=webpack:///./public/js/place_autocomplete.js?");

/***/ })

/******/ });