// Plugins
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDeleteAfterEmit = require('webpack-delete-after-emit');

// Paths
const paths = require('./paths');

// Define if the build should contain top html elements (<html> and <body>).
// TODO: Make this variable defineable when creating the project.
// TODO cont.: Something like "Will project PROD environment be embedded into another site? -
// TODO cont.: (Choosing "no" will generate index.html without <html>, <head> and <body> tags.)"
const useIndexFull = true;

module.exports = function (config, env, settings) {
  /*
   * Insert your production specific configuration here.
   */

  // Plugins
  config.plugins = [
    ...config.plugins,
    // Bundle Analyzer
    ...settings.bundleAnalyzer ? [
      new BundleAnalyzerPlugin(),
    ] : [],

    // Use the correct index.html template.
    new HtmlWebpackPlugin({
      inject: useIndexFull,
      template: useIndexFull ? paths.appHtmlFull : paths.appHtml,
    }),

    // Delete the index-full.html file after build.
    new WebpackDeleteAfterEmit({
      globs: ['index-full.html'],
    }),
  ];

  return config;
};
