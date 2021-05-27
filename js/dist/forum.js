module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/components/GlossaryPage.js":
/*!**********************************************!*\
  !*** ./src/forum/components/GlossaryPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlossaryPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);




/*  global m  */

/*  global $  */

var GlossaryPage = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GlossaryPage, _Page);

  function GlossaryPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = GlossaryPage.prototype;

  _proto.view = function view() {
    var mappings = JSON.parse(app.forum.attribute('AdDef')); // Funzione ricerca live

    $(document).ready(function () {
      $('#filter').keyup(function () {
        // Ricerca dal campo di testo
        var filter = $(this).val(),
            count = 0; // Lopp nella lista ordinata ol e li

        $('ol li').each(function () {
          // Nascondi i risultati che non servono più
          if ($(this).text().search(new RegExp(filter, 'i')) < 0) {
            $(this).fadeOut(); // Alrimenti mostra tutto il contenuto della pagina
          } else {
            $(this).show();
            count++;
          }
        });
      });
    });
    return m('.IndexPage', [flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.hero(), m('.container', m('.sideNavContainer', [m('nav.IndexPage-nav.sideNav', m('ul', flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.sidebarItems().toArray()))), m('.IndexPage-results.sideNavOffset', m('h1', {
      className: 'glostitle'
    }, app.translator.trans('flarum-ext-keywords.forum.pagetitle')), m('div', {
      className: 'rowgl'
    }, [m('div', {
      className: 'columngl'
    }, m('div', {
      className: 'leftdiv'
    }, m('h3', {
      className: 'tagline'
    }, app.translator.trans('flarum-ext-keywords.forum.tagline')))), m('div', {
      className: 'columngl'
    }, m('div', {
      className: 'rightdiv'
    }, m('form', {
      className: 'searchform cf'
    }, [m('input', {
      id: 'filter',
      type: 'text',
      placeholder: app.translator.trans('flarum-ext-keywords.forum.searchtext')
    })])))]), m('div', {
      className: 'containDef'
    }, m('ol', {
      id: 'myUL',
      className: 'rectangle-list'
    }, Object.keys(mappings).sort().map(function (key) {
      return m('li', {
        className: 'lista'
      }, key + ' - ' + 'Definition:   ' + mappings[key]);
    }))))]))]);
  };

  return GlossaryPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _replaceKeywords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./replaceKeywords */ "./src/forum/replaceKeywords.js");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_GlossaryPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/GlossaryPage */ "./src/forum/components/GlossaryPage.js");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_6__);
/*
 * This file is part of justoverclock/flarum-ext-keywords.
 *
 * Copyright (c) 2021 Marco Colia.
 * Special thanks to Askvortsov
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */







flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('justoverclock/flarum-ext-keywords', function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'oninit', _replaceKeywords__WEBPACK_IMPORTED_MODULE_3__["default"]);
});
flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes.GlossaryPage = {
  path: '/glossary',
  component: _components_GlossaryPage__WEBPACK_IMPORTED_MODULE_5__["default"]
};
Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'navItems', function (navItems) {
  navItems.add('Glossary', m(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route('GlossaryPage'),
    icon: "fas fa-atlas"
  }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('flarum-ext-keywords.forum.title')), 100);
  return navItems;
});

/***/ }),

/***/ "./src/forum/replaceKeywords.js":
/*!**************************************!*\
  !*** ./src/forum/replaceKeywords.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/*
 * This file is part of justoverclock/flarum-ext-keywords.
 *
 * Copyright (c) 2021 Marco Colia.
 * Special thanks to Askvortsov
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  // Lettura dell'input form in formato JSON
  var mappings = JSON.parse(flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('AdDef')); // filtro per evitare il parsing doppio delle parole

  Object.keys(mappings).filter(function (w) {
    var regex;

    if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('ParseOnce') === true) {
      regex = new RegExp('\\b(' + w + ')\\b(?![^<]*>|[^<>]*</[^p])', 'i');
    } else {
      regex = new RegExp('\\b(' + w + ')\\b(?![^<]*>|[^<>]*</[^p])', 'gi');
    }

    _this.attrs.post.data.attributes.contentHtml = _this.attrs.post.data.attributes.contentHtml.replace(regex, function (match) {
      var tooltip = mappings[match.toLowerCase()];

      if (tooltip) {
        return "<span class=\"definition\" data-tooltip=\"" + tooltip + "\">" + match + "<i class=\"fas fa-caret-left\"></i></i></span>";
      } else {
        return match;
      }
    });
  });
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map