// Loaders
const eslintLoader = require('./loaders/scss');

module.exports = function(config, env, settings) {

  /*
   * Insert your development specific configuration here.
   */

  config.module = {
    ...config.module,
    rules: [
      ...config.module.rules,
    ]
  };

  return config;
};
