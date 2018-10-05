// Plugins
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function(config, env, settings) {

  /*
   * Insert your production specific configuration here.
   */

  // Plugins
  config.plugins = [
    ...config.plugins,
    // Bundle Analyzer
    ...settings.bundleAnalyzer ? [
      new BundleAnalyzerPlugin()
    ] : []
  ];

  return config;
};
