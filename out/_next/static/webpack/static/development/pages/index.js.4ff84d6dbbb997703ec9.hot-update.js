webpackHotUpdate("static/development/pages/index.js",{

/***/ "./posts/index.js":
/*!************************!*\
  !*** ./posts/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The preval plugin pre-evaluates code at build time. We use this to get the
 * meta from the MDX files (blog posts) and use it for displaying the list of
 * posts in the `index.js` page
 *
 * This code is not used in the browser or the app at all, but only in build
 * time when Node is available.
 */
var posts = [{
  "date": "2020-01-01",
  "title": "Personal website",
  "description": "My personal website and  a platform to share the knowledge I learn throughout my career.",
  "path": "/posts/2020-personal-website",
  "index": 0
}];
console.log("posts", posts);
module.exports = posts;

/***/ })

})
//# sourceMappingURL=index.js.4ff84d6dbbb997703ec9.hot-update.js.map