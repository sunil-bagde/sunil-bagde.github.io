webpackHotUpdate("static/development/pages/posts.js",{

/***/ "./components/page.js":
/*!****************************!*\
  !*** ./components/page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/gtag */ "./lib/gtag.js");
/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../site.config */ "./site.config.js");
/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_site_config__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/sunilbagde/code/my-site/im-sunil.github.io/components/page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('routeChangeComplete', function (url) {
  return url;
});

function Page(_ref) {
  var title = _ref.title,
      description = _ref.description,
      children = _ref.children;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, title || 'Sunil Bagde - Web Developer & Writer'), description !== false && __jsx("meta", {
    name: "description",
    content: description || _site_config__WEBPACK_IMPORTED_MODULE_4___default.a.siteDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    className: "flex flex-col min-h-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, children));
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=posts.js.9fb0ed1d0bf6891dfef9.hot-update.js.map