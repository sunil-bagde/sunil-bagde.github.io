const withCSS = require("@zeit/next-css");
const path = require("path");

const withMDX = require("@next/mdx")();
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");

const dynamicRoutes = {
  "/": { page: "/" },
  "/about": { page: "/about" },
  "/contact": { page: "/contact" },
  "/posts": { page: "/posts" },
  "/posts/2020-personal-website": {
    page: "/posts/2020-personal-website",
  },
};
const basePath = "";
const webpackBasePath = process.env.SPA_EXP_BUILD === "true" ? basePath : "";
module.exports = withCSS(
  withMDX({
    pageExtensions: ["js", "jsx", "mdx"],
    env: {},
    publicRuntimeConfig: {
      basePath: webpackBasePath,
    },
    assetPrefix: webpackBasePath,
    exportPathMap: async function(defaultPathMap) {
      return Object.assign({}, defaultPathMap, dynamicRoutes);
    },
    /* webpack: function(config) {
      config.module.rules.push({
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            fallback: "file-loader",
            publicPath: `${webpackBasePath}/_next/static/img/`,
            outputPath: "public/img/",
            name: "[name].[hash:15].[ext]",
          },
        },
      });

      config.plugins.push(new CompressionPlugin());

      return config;
    },*/
  })
);
