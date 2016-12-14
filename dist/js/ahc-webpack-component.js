/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var component_1 = __webpack_require__(1);
	angular
	    .module("ahcWebpackComponent", [])
	    .directive("myDirective", function () { return new component_1.MyDirective(); })
	    .service("myService", component_1.MyService);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(2));
	__export(__webpack_require__(5));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var my_directive_controller_1 = __webpack_require__(3);
	var MyDirective = (function () {
	    function MyDirective() {
	        this.restrict = "E";
	        this.template = __webpack_require__(4);
	        this.replace = true;
	        this.controller = my_directive_controller_1.MyDirectiveController;
	        this.controllerAs = "myCtrl";
	        this.bindToController = true;
	    }
	    return MyDirective;
	}());
	exports.MyDirective = MyDirective;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var MyDirectiveController = (function () {
	    function MyDirectiveController($location) {
	        this.$location = $location;
	        this.greeting = "Hello world";
	    }
	    MyDirectiveController.prototype.getUrl = function () {
	        return this.$location.protocol() + "://" + this.$location.host() + ":" + this.$location.port() + this.$location.url();
	    };
	    return MyDirectiveController;
	}());
	MyDirectiveController.$inject = ["$location"];
	exports.MyDirectiveController = MyDirectiveController;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <span class=\"greeting\" data-ng-bind=\"myCtrl.greeting\"></span>\r\n    <span class=\"url\" data-ng-bind=\"myCtrl.getUrl()\"></span>\r\n</div>\r\n"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var my_entity_1 = __webpack_require__(6);
	var MyService = (function () {
	    function MyService() {
	    }
	    MyService.prototype.getAll = function () {
	        var returnObj = new Array();
	        for (var i = 0; i < 5; i++) {
	            returnObj.push(new my_entity_1.MyEntity("@user", "Content", false));
	        }
	        return returnObj;
	    };
	    return MyService;
	}());
	exports.MyService = MyService;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	var MyEntity = (function () {
	    function MyEntity(user, content, starred) {
	        this.user = user;
	        this.content = content;
	        this.starred = starred;
	    }
	    return MyEntity;
	}());
	exports.MyEntity = MyEntity;


/***/ }
/******/ ]);
//# sourceMappingURL=ahc-webpack-component.js.map