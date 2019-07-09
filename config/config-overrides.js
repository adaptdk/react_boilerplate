/* eslint-disable */
/* config-overrides.js */

// Loading Configs
const commonConfig = require("./webpack.config.common");
const prodConfig = require("./webpack.config.prod");
const devConfig = require("./webpack.config.dev");

module.exports = function override(config, env) {
  const isProd = env === "production";
  const isDev = env === "development";

  // Loading Env Config
  config = {
    ...commonConfig(config, isProd),
    ...(isProd ? prodConfig(config) : {}),
    ...(isDev ? devConfig(config) : {}),
  };

  return config;
};
