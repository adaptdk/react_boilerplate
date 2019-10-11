/* eslint-disable */

// Plugins
const CompressionPlugin = require('compression-webpack-plugin');
const Critters = require('critters-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackBar = require('webpackbar');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { envs } = require('./utils');

// Paths
const paths = require('./paths');

module.exports = function(config) {
  // Enables Polyfill depending on .env variable
  config.entry = envs.polyfill
    ? ['core-js/stable', 'regenerator-runtime/runtime', ...config.entry]
    : config.entry;

  // Defines the Output of the bundles
  config.output = {
    ...config.output,
    filename: !envs.hashBuild ? 'static/js/[name].js' : config.output.filename,
    chunkFilename: !envs.hashBuild ? 'static/js/[name].js' : config.output.chunkFilename,
  };

  // Optimizations
  config.optimization = {
    ...config.optimization,
    minimizer: [
      ...config.optimization.minimizer,
      // Minify and compress Js
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: envs.sourceMap,
      }),
    ],
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        polyfills: {
          test: /[\\/]src[\\/]utils[\\/]polyfills[\\/]polyfills.js[\\/]/,
          chunks: 'all',
          minChunks: 1,
          priority: -10,
          reuseExistingChunk: true,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
        },
      },
    },
  };

  // Plugins
  config.plugins = [
    ...config.plugins,

    // Webpack Bar with profiler
    new WebpackBar(
      envs.profiler
        ? {
            profile: true,
            reporters: ['profile'],
          }
        : {},
    ),

    // Adding CSS Extract Plugin
    new ExtractCssChunks({
      filename: !envs.hashBuild ? 'static/css/[name].css' : 'static/css/[name].[hash:3].css',
      chunkFilename: !envs.hashBuild ? 'static/css/[name].css' : 'static/css/[name].[hash:3].css',
      orderWarning: true,
    }),

    // Use the correct index.html template.
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      favicon: `${paths.appPublic}/favicons/favicon.ico`,
      manifest: !envs.proxy ? '/manifest.json' : undefined,
    }),

    // Creating Critical CSS
    ...(envs.criticalCSS
      ? [
          new Critters({
            preloadFonts: true,
          }),
        ]
      : []),

    // Add gzipzed files
    ...(envs.gzip
      ? [
          new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
            cache: true,
          }),
        ]
      : []),

    // Add gzipzed files
    ...(!envs.proxy
      ? [
          new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['development/*'],
          }),
        ]
      : []),

    // Bundle Analyzer
    ...(envs.bundleAnalyzer ? [new BundleAnalyzerPlugin()] : []),
  ];

  return config;
};
