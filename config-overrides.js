/* eslint-disable */
/* config-overrides.js */
const rewireEslint = require('react-app-rewire-eslint');

// Utilities
const { isProd: isProdUtils, isDev: isDevUtils } = require('./config/utilities/utilities');

// Loading Configs
const commonConfig = require('./config/webpack.config.common');
const prodConfig = require('./config/webpack.config.prod');
const devConfig = require('./config/webpack.config.dev');

const eslintConfig = require('./config/loaders/eslint');

module.exports = function override(config, env) {
  const isProd = isProdUtils(env);
  const isDev = isDevUtils(env);

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

  // Loading Env Config
  config = {
    ...commonConfig(config, env, settings),
    ...(isProd ? prodConfig(config, isProd, settings) : {}),
    ...(isDev ? devConfig(config, isDev, settings) : {}),
  };

  // Loading Eslint Rewire
  config = rewireEslint(config, env, eslintConfig);

  return config;
};
