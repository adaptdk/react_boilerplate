/* eslint-disable */

// Plugins
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDeleteAfterEmit = require('webpack-delete-after-emit');

// Paths
const paths = require('./paths');

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
      inject: !settings.isProdEmbedded,
      template: settings.isProdEmbedded ? paths.appHtml : paths.appHtmlFull,
    }),

    // Delete the index-full.html file after build.
    new WebpackDeleteAfterEmit({
      globs: ['index-full.html'],
    }),
  ];

  return config;
};
