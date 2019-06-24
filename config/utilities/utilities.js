/* eslint-disable */

// Environments Checks
/**
 * Checks whether it's the production env.
 * @param {string} env - The env variable
 * @return {boolean}
 */
const isProd = env => env === "production";

/**
 * Checks whether it's the production env.
 * @param {string} env - The env variable
 * @return {boolean}
 */
const isDev = env => env === "development";

/**
 * Helper functions and variables for the loaders
 * @param {Array} rules - The rules array coming from the config.modules.rules,
 * @return {any}
 */
const loaderUtil = rules => {
  /** The index of oneOf in the rules */
  const oneOfIndex = rules.findIndex(item => item["oneOf"]);

  /** The oneOf rule */
  const oneOf = rules[oneOfIndex].oneOf;

  /**
   * Find a specfic loader within the oneOf
   * @param {string} loader - RegEx testing each loader
   * @return {any} The Loader
   */
  const findLoader = loader =>
    oneOf.find(item => {
      return new RegExp(loader).test(item.loader);
    });

  /** The fileLoader object */
  const fileLoader = findLoader("file-loader");

  return {
    oneOfIndex,
    oneOf,
    findLoader,
    fileLoader,
  };
};

module.exports = {
  isProd,
  isDev,
  loaderUtil,
};
