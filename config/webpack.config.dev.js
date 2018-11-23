/* eslint-disable */

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDeleteAfterEmit = require('webpack-delete-after-emit');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Paths
const paths = require('./paths');

module.exports = function(config, isDev, settings) {
  /*
   * Insert your development specific configuration here.
   */

  config.plugins = [
    ...config.plugins,

    //  Minify CSS Etract Plugin
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    // Use the correct index.html template.
    new HtmlWebpackPlugin({
      inject: !settings.isDevEmbedded,
      template: settings.isDevEmbedded ? paths.appHtml : paths.appHtmlFull,
    }),

    // Delete the index-full.html file after build.
    new WebpackDeleteAfterEmit({
      globs: ['index-full.html'],
    }),
  ];

  return config;
};
