// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDeleteAfterEmit = require('webpack-delete-after-emit');

// Loaders
const eslintLoader = require('./loaders/scss');

// Paths
const paths = require('./paths');

// Define if the build should contain top html elements (<html> and <body>).
// TODO: Make this variable defineable when creating the project.
// TODO cont.: Something like "Will project DEV environment be embedded into another site? -
// TODO cont.: (Choosing "no" will generate index.html without <html>, <head> and <body> tags )"
const useIndexFull = true;

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
