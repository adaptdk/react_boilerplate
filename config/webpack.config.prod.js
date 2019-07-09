/* eslint-disable */

// Plugins
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackDeleteAfterEmit = require("webpack-delete-after-emit");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const Critters = require("critters-webpack-plugin");
const WebpackBar = require("webpackbar");

const { envs } = require("./utilities/utilities");

// Paths
const paths = require("./paths");

module.exports = function(config) {
  // Optimizations
  config.optimization = {
    ...config.optimization,
    minimizer: [
      ...config.optimization.minimizer,
      // Minify and compress Js
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false, // set to true if you want JS source maps
      }),
    ],
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
          minChunks: 2,
        },
      },
    },
  };

  // Plugins
  config.plugins = [
    ...config.plugins,

    // Webpack Bar with profiler
    new WebpackBar({
      ...(envs.profiler
        ? {
            profile: true,
            reporters: ["profile"],
          }
        : {}),
    }),

    // Adding CSS Extract Plugin
    new ExtractCssChunks({
      filename: "static/css/[name].[hash:3].css",
      chunkFilename: "static/css/[id].[hash:3].css",
      orderWarning: true,
    }),

    // Use the correct index.html template.
    !envs.embedded &&
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      favicon: `${paths.appPublic}/favicons/favicon.ico`,
      manifest: `/manifest.json`,
    }),

    // Creating Critical CSS
    new Critters({
      preloadFonts: true,
    }),

    // Delete files in build folder after build
    new WebpackDeleteAfterEmit({
      globs: ["index-mini.html"],
    }),

    // Bundle Analyzer
    ...(envs.bundleAnalyzer ? [new BundleAnalyzerPlugin()] : []),
  ];

  return config;
};
