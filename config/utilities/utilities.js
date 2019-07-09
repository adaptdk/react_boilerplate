/* eslint-disable */

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

// Environment variables
const envs = {
  profiler: process.env.PROFILER === "true",
  embedded: process.env.EMBEDDED === "true",
  bundleAnalyzer: process.env.BUNDLE_ANALYZER === "true",
};

module.exports = {
  envs,
  loaderUtil,
};
