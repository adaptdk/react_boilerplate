/* config-overrides.js */

// Loading Configs
const commonConfig = require('./config/webpack.config.common');
const prodConfig = require('./config/webpack.config.prod');
const devConfig = require('./config/webpack.config.dev');

module.exports = function override(config, env) {

  // Settings
  const settings = {
    bundleAnalyzer: false,
  };

  config = {
    ...commonConfig(config, env, settings),
    ...env === 'production' ? prodConfig(config, env, settings) : {},
    ...env === 'development' ? devConfig(config, env, settings) : {},
  };

  return config;
};
