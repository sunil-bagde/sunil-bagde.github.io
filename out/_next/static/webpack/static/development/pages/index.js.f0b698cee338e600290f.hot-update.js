webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _active_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./active-link */ "./components/active-link.js");
/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../site.config */ "./site.config.js");
/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_site_config__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/sunilbagde/code/my-site/im-sunil.github.io/components/header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "headerOnScroll", function () {
      if (window.scrollY > 60) {
        _this.setState({
          scrolled: true
        });
      } else {
        _this.setState({
          scrolled: false
        });
      }
    });

    _this.state = {
      scrolled: false,
      isOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.headerOnScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.headerOnScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("header", {
        id: "header",
        className: "".concat(this.state.scrolled ? "scroll" : "", " w-full bg-white lg:p-2 xs:border-2 xs:border-gray-200 sm:border-2 sm:border-gray-200 md:border-2 md:border-gray-200 lg:border-0 fixed top-0 z-50"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("div", {
        className: "w-full container mx-auto flex flex-wrap items-center mt-0 py-3 xs:px-4 sm:px-4 md:px-4 lg:px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("div", {
        className: "brand justify-between flex items-center xs:w-full sm:w-full md:w-full md:px-0 lg:px-0 lg:w-1/2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx(_active_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("a", {
        className: "block text-black no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("span", {
        className: "text-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, _site_config__WEBPACK_IMPORTED_MODULE_9___default.a.siteTitle)))), __jsx("nav", {
        className: "w-full flex-grow xs:hidden sm:hidden lg:flex lg:items-center lg:w-1/2 lg:block mt-2 lg:mt-0",
        id: "nav-content",
        role: "navigation",
        "aria-label": "main navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("ul", {
        className: "lg:flex flex-1 items-center lg:justify-end md:px-0 py-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("li", {
        className: "lg:mr-3 lg:ml-3 lg:invisible xs:pb-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx(_active_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("a", {
        className: "text-gray-600 hover:underline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Home"))), __jsx("li", {
        className: "lg:mr-3 lg:ml-3 xs:py-1 sm:py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(_active_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("a", {
        className: "text-gray-600 hover:underline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "About"))), __jsx("li", {
        className: "lg:mr-3 lg:ml-3 xs:py-1 sm:py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(_active_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/posts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("a", {
        className: "text-gray-600 hover:underline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Posts"))), __jsx("li", {
        className: "lg:mr-3 lg:ml-3 xs:py-1 sm:py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx(_active_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("a", {
        className: "text-gray-600 hover:underline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Contact")))))), __jsx("nav", {
        className: "py-3 px-4 lg:hidden xl:hidden",
        role: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("ul", {
        className: "flex items-center justify-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("li", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(_active_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("a", {
        className: "text-gray-600 font-normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Home"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx(_active_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("a", {
        className: "text-gray-600 font-normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "About"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx(_active_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/posts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("a", {
        className: "text-gray-600 font-normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Posts"))), __jsx("li", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx(_active_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("a", {
        className: "text-gray-600 font-normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Contact"))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.f0b698cee338e600290f.hot-update.js.map