/* eslint-disable */

// Plugins
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpackDeleteAfterEmit = require("webpack-delete-after-emit");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");

// Paths
const paths = require("./paths");

module.exports = function(config, isDev, settings) {
  /*
   * Insert your development specific configuration here.
   */

  // Hot Loader
  config = rewireReactHotLoader(config, "development");

  config.plugins = [
    ...config.plugins,

    //  Minify CSS Etract Plugin
    new miniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),

    // Use the correct index.html template.
    new htmlWebpackPlugin({
      inject: !settings.isDevEmbedded,
      template: settings.isDevEmbedded ? paths.appHtml : paths.appHtmlFull,
    }),

    // Delete the index-full.html file after build.
    new webpackDeleteAfterEmit({
      globs: ["index-full.html"],
    }),
  ];

  return config;
};
