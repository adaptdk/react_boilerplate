/* eslint-disable */

// Plugins
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackDeleteAfterEmit = require("webpack-delete-after-emit");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// Paths
const paths = require("./paths");

module.exports = function(config, settings) {
  // Optimizations
  config.optimization = {
    ...config.optimization,
    minimizer: [
      ...config.optimization.minimizer,
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

    // Use the correct index.html template.
    new HtmlWebpackPlugin({
      inject: !settings.isProdEmbedded,
      template: settings.isProdEmbedded ? paths.appHtmlMini : paths.appHtml,
    }),

    //  Minify CSS Etract Plugin
    new ExtractCssChunks({
      filename: "static/css/[name].[hash:3].css",
      chunkFilename: "static/css/[id].[hash:3].css",
      orderWarning: true,
    }),

    // Delete the index-full.html file after build.
    new WebpackDeleteAfterEmit({
      globs: ["index-mini.html"],
    }),

    // Bundle Analyzer
    ...(settings.bundleAnalyzer ? [new BundleAnalyzerPlugin()] : []),
  ];

  return config;
};
