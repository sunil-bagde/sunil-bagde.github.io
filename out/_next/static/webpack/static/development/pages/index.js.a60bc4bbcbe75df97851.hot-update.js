webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../site.config */ "./site.config.js");
/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_site_config__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/sunilbagde/code/my-site/im-sunil.github.io/components/page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on("routeChangeComplete", function (url) {
  return url;
});

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeStart = function (url) {
  console.log("Loading: ".concat(url));
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeComplete = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeError = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
};

function Page(_ref) {
  var title = _ref.title,
      description = _ref.description,
      children = _ref.children;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, title || "Sunil Bagde - Web Developer & Writer"), description !== false && __jsx("meta", {
    name: "description",
    content: description || _site_config__WEBPACK_IMPORTED_MODULE_4___default.a.siteDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/nprogress.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "flex flex-col min-h-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, children));
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=index.js.a60bc4bbcbe75df97851.hot-update.js.map