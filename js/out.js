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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Furry = function Furry() {\n  _classCallCheck(this, Furry);\n\n  this.x = 0;\n  this.y = 0;\n  this.direction = \"right\";\n};\n\nvar Coin = function Coin() {\n  _classCallCheck(this, Coin);\n\n  this.x = Math.floor(Math.random() * 10);\n  this.y = Math.floor(Math.random() * 10);\n};\n\nvar Game = function Game() {\n  var _this = this;\n\n  _classCallCheck(this, Game);\n\n  this.index = function (x, y) {\n    return x + y * 10;\n  };\n\n  this.hideVisibleFurry = function () {\n    document.querySelector('.furry').classList.remove('furry');\n  };\n\n  this.showFurry = function () {\n    _this.board[_this.index(_this.furry.x, _this.furry.y)].classList.add('furry');\n  };\n\n  this.showCoin = function () {\n    _this.board[_this.index(_this.coin.x, _this.coin.y)].classList.add('coin');\n  };\n\n  this.startGame = function () {\n    _this.idSetinterval = setInterval(function () {\n      if (_this.furry.direction === \"right\") {\n        _this.furry.x = _this.furry.x + 1;\n      } else if (_this.furry.direction === \"left\") {\n        _this.furry.x = _this.furry.x - 1;\n      } else if (_this.furry.direction === \"down\") {\n        _this.furry.y = _this.furry.y + 1;\n      } else if (_this.furry.direction === \"top\") {\n        _this.furry.y = _this.furry.y - 1;\n      }\n\n      _this.gameOver();\n      if (_this.state) {\n        _this.hideVisibleFurry();\n        _this.showFurry();\n        _this.checkCoinCollision();\n      }\n    }, 350);\n  };\n\n  this.turnFurry = function (event) {\n    switch (event.which) {\n      case 37:\n        _this.furry.direction = 'left';\n        break;\n      case 39:\n        _this.furry.direction = 'right';\n        break;\n      case 38:\n        _this.furry.direction = 'top';\n        break;\n      case 40:\n        _this.furry.direction = 'down';\n        break;\n    }\n  };\n\n  this.checkCoinCollision = function () {\n    if (_this.furry.x === _this.coin.x && _this.furry.y === _this.coin.y) {\n      document.querySelector('.coin').classList.remove('coin');\n      _this.score = _this.score + 1;\n      document.querySelector('#score strong').innerText = _this.score;\n      _this.coin = new Coin();\n      _this.showCoin();\n    }\n  };\n\n  this.gameOver = function () {\n    if (_this.furry.x < 0 || _this.furry.x > 9 || _this.furry.y < 0 || _this.furry.y > 9) {\n      clearInterval(_this.idSetinterval);\n      _this.hideVisibleFurry();\n      document.querySelector('h1').innerText = \"Game Over\";\n      _this.state = false;\n    }\n  };\n\n  this.board = document.querySelectorAll('#board div');\n  this.furry = new Furry();\n  this.coin = new Coin();\n  this.score = 0;\n  this.state = true;\n};\n\nvar startGame = new Game();\nstartGame.showFurry();\nstartGame.showCoin();\nstartGame.startGame();\n\ndocument.addEventListener('keydown', function (event) {\n  startGame.turnFurry(event);\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });