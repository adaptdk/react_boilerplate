/* config-overrides.js */

// Plugins
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Loaders
const scssLoader = require('./config/loaders/scss');

module.exports = function override(config, env) {

  // Constants
  const isProduction = env === 'production';

  // Settings
  const settings = {
    bundleAnalyzer: false,
  };

  // Resolve
  config.resolve = {
    ...config.resolve,
    modules: [
      ...config.resolve.modules,
      './src',
    ],
  };

  // Module
  config.module = {
    ...config.module,
    rules: [
      ...config.module.rules,
      { ...scssLoader },
    ]
  };

  // Plugins
  config.plugins = [
    ...config.plugins,
    // Bundle Analyzer
    ...(isProduction && settings.bundleAnalyzer) ? [
      new BundleAnalyzerPlugin()
    ] : []
  ];

  return config;
};
