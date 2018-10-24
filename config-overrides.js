/* config-overrides.js */

// Loading Configs
const commonConfig = require('./config/webpack.config.common');
const prodConfig = require('./config/webpack.config.prod');
const devConfig = require('./config/webpack.config.dev');

module.exports = function override(config, env) {

  // Settings
  const settings = {
    bundleAnalyzer: false,

    // Define if the build should contain top html elements (<html> and <body>).
    // TODO: Make this variable defineable when creating the project.
    // TODO cont.: Something like "Will project PROD/DEV environment be embedded into another site?
    // TODO cont.: (Choosing "no" will generate index.html without <html>, <head> and <body> tags.)"
    isDevEmbedded: false,
    isProdEmbedded: false,
  };

  config = {
    ...commonConfig(config, env, settings),
    ...env === 'production' ? prodConfig(config, env, settings) : {},
    ...env === 'development' ? devConfig(config, env, settings) : {},
  };

  return config;
};
