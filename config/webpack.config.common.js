/* eslint-disable */

// Loaders
const scssLoader = require('./loaders/scss');

module.exports = function(config, env, settings) {

  /*
   * Insert your shared configuration here.
   */

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
    ],
  };

  return config;
};
