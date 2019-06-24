/* eslint-disable */

// Plugins
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const { useBabelRc, enableEslintTypescript } = require("customize-cra");

module.exports = function(config, settings) {
  // Hot Loader
  config = rewireReactHotLoader(config, "development");

  // enable Typescript Eslint
  enableEslintTypescript();

  // Use the local .babelrc file
  useBabelRc();

  // Set Source Map
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
  ];

  return config;
};
