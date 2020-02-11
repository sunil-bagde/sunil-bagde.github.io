require("dotenv").config();
const debug = process.env.NODE_ENV !== "production";

const withCSS = require("@zeit/next-css");
const withMDX = require("@next/mdx")();

module.exports = withCSS(
  withMDX({
    pageExtensions: ["js", "jsx", "mdx"],
    env: {},
    exportPathMap: function() {
      return {
        "/": { page: "/" },
        "/about": { page: "/about" },
        "/posts": { page: "/posts" },
        "/contact": { page: "/contact" },
      };
    },
    //assetPrefix: '',
    assetPrefix: !debug ? "im-sunil.github.io/" : "",
  })
);
