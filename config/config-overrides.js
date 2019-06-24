/* eslint-disable */
/* config-overrides.js */

// Utilities
const {
  isProd: isProdUtils,
  isDev: isDevUtils,
} = require("./utilities/utilities");

// Loading Configs
const commonConfig = require("./webpack.config.common");
const prodConfig = require("./webpack.config.prod");
const devConfig = require("./webpack.config.dev");

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
    embedded: false,
  };

  // Loading Env Config
  config = {
    ...commonConfig(config, isProd, settings),
    ...(isProd ? prodConfig(config, settings) : {}),
    ...(isDev ? devConfig(config, settings) : {}),
  };

  return config;
};
