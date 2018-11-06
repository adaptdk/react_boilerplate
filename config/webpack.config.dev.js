/* eslint-disable */

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDeleteAfterEmit = require('webpack-delete-after-emit');

// Loaders
const eslintLoader = require('./loaders/scss');

// Paths
const paths = require('./paths');

module.exports = function (config, env, settings) {

  /*
   * Insert your development specific configuration here.
   */

  config.module = {
    ...config.module,
    rules: [
      ...config.module.rules,
    ],
  };

  config.plugins = [
    ...config.plugins,

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
