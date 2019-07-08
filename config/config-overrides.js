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
    // Analyze the bundle including node_modules
    bundleAnalyzer: false,
    // Run a profiler and get the stats from the build
    profile: false,
    // TODO: Prerender the SPA, and get a blazing fast first load.
    prerender: false,
    // Embed your React app onto a proxied site
    useProxy: false,
  };

  // Loading Env Config
  config = {
    ...commonConfig(config, isProd, settings),
    ...(isProd ? prodConfig(config, settings) : {}),
    ...(isDev ? devConfig(config, settings) : {}),
  };

  return config;
};
