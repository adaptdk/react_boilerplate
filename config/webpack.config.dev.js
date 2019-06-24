/* eslint-disable */

// Plugins
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpackDeleteAfterEmit = require("webpack-delete-after-emit");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const { useBabelRc, enableEslintTypescript } = require("customize-cra");

// Paths
const paths = require("./paths");

module.exports = function(config, settings) {
  // Hot Loader
  config = rewireReactHotLoader(config, "development");

  enableEslintTypescript();

  // Use .babelrc
  useBabelRc();

  config.devtool = "source-map";

  // Resolve
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    },
  };

  // Plugins
  config.plugins = [
    ...config.plugins,

    //  Minify CSS Etract Plugin
    new ExtractCssChunks({
      filename: "[name].css",
      chunkFilename: "[id].css",
      orderWarning: true, // Disable to remove warnings about conflicting order between imports
    }),

    // Use the correct index.html template.
    new htmlWebpackPlugin({
      inject: !settings.isDevEmbedded,
      template: settings.isDevEmbedded ? paths.appHtmlMini : paths.appHtml,
    }),

    // Delete the index-full.html file after build.
    new webpackDeleteAfterEmit({
      globs: ["index-full.html"],
    }),
  ];

  return config;
};
