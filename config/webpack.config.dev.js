/* eslint-disable */

// Plugins
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");

module.exports = function(config, settings) {
  // Hot Loader
  config = rewireReactHotLoader(config, "development");

  // Set Source Map
  config.devtool = "source-map";

  // Resolve
  config.resolve.alias = {
    ...config.resolve.alias,
    "react-dom": "@hot-loader/react-dom",
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
