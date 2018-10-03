/* config-overrides.js */

// Loaders
const scssLoader = require('./config/loaders/scss');

module.exports = function override(config, env) {

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

  return config;
};
