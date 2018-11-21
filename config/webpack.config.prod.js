/* eslint-disable */

// Plugins
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDeleteAfterEmit = require('webpack-delete-after-emit');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Paths
const paths = require('./paths');

module.exports = function (config, isProd, settings) {

  /*
   * Insert your production specific configuration here.
   */

     // Optimizations
  config.optimization = {
    ...config.optimization,
    minimizer: [
      ...config.optimization.minimizer,
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
  };

  // Plugins
  config.plugins = [
    ...config.plugins,

    // Bundle Analyzer
    ...settings.bundleAnalyzer ? [
      new BundleAnalyzerPlugin(),
    ] : [],

    //  Minify CSS Etract Plugin
    new MiniCssExtractPlugin({
      filename: '/static/css/[name].[hash:5].css',
      chunkFilename: '/static/css/[id].[hash:5].css',
    }),

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
