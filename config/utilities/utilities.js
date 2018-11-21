/**
 * Get the index of an object in a array
 * @param {array} array         The Array to want to check.
 * @param {string} match        The string matching the property name of the array's object
 * @param {string} ascendant    If you want to check on an ascendant of the arrays item.
 * @returns {number}
 */
const getIndex = (array, match, ascendant) => {
  if (ascendant) {
    return array.findIndex(item => !!item[ascendant][match]);
  }
  return array.findIndex(item => !!item[match]);
};

/**
 * Filter Out the Loaders that you don't need
 * @param {array} loaders  The loaders you want to filter
 * @returns {array}
 */
const filterOutLoaders = (loaders, filter, ascendant) => {
  if (ascendant) {
    return loaders.filter(loader => !(
      loader[ascendant] && !Array.isArray(loader[ascendant]) && filter.includes(loader[ascendant].toString()))
    );
  }
  return loaders.filter(loader => loader && filter.includes(loader.toString()));
};

const isProd = env => env === 'production';

const isDev = env => env === 'development';

module.exports = {
  getIndex,
  filterOutLoaders,
  isProd,
  isDev,
};
