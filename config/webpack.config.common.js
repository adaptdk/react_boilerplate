/* eslint-disable */

// Loaders
const { scssLoader } = require('./loaders/scss');

// Utilities
const { getIndexOfObjProperty, filterOutLoaders } = require('./utilities/utilities');

module.exports = function (config, env, settings) {

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
  // Find index of OneOf
  const oneOfIndex = getIndexOfObjProperty(config.module.rules, 'oneOf');
  console.log(oneOfIndex);
  let rulesOneOf = config.module.rules[oneOfIndex].oneOf;

  // Filter Out loaders we don't want from CRA.
  // const excludeLoaders = ['/\\.(scss|sass)$/'];
  // rulesOneOf = filterOutLoaders(rulesOneOf, excludeLoaders);

  // getIndexOfObjProperty(config.module.rules[oneOfIndex].oneOf, '/\\.(scss|sass)$/');
  // Add your ownFilters
  // rulesOneOf.push({ ...scssLoader });

  // Manipulate the real oneOf loaders list with the new manipulated
  // config.module.rules[oneOfIndex].oneOf = rulesOneOf;

  return config;
};
