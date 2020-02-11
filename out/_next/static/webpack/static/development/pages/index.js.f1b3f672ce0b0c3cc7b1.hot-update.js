webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/post-list.js":
/*!*********************************!*\
  !*** ./components/post-list.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _posts_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts/index */ "./posts/index.js");
/* harmony import */ var _posts_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_posts_index__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/sunilbagde/code/my-site/im-sunil.github.io/components/post-list.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PostList = function PostList() {
  function convertToSlug(title) {
    return title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
  }

  function reformatDate(fullDate) {
    var date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  function latestPost(date) {
    return moment__WEBPACK_IMPORTED_MODULE_2___default()(date) > moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(1, "months");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _posts_index__WEBPACK_IMPORTED_MODULE_3___default.a.map(function (post) {
    return __jsx("article", {
      key: post.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      className: "flex items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("h1", {
      className: "text-2xl mb-0 mr-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: post.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, post.title))), latestPost(post.date) && __jsx("span", {
      className: "rounded-full bg-green-500 px-3 py-1 mt-1 uppercase text-xs text-white font-bold mr-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "New")), __jsx("time", {
      className: "text-gray-600",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, reformatDate(post.date))), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, post.description), __jsx("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: post.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("a", {
      className: "underline text-blue-400 hover:text-blue-500",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Read more"))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ })

})
//# sourceMappingURL=index.js.f1b3f672ce0b0c3cc7b1.hot-update.js.map