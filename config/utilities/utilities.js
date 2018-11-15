/**
 * When you don't know the index of the object in an array, then you can use this
 * @param {array} array               The Array to want to manipulate.
 * @param {string} match              The string matching the property name of the array's objects you're looping over
 * @returns {array}
 */
const getIndexOfObjProperty = (array, match) => {
  let index;
  array.forEach((rule, i) => {
    if (rule[match]) index = i;
  });
  return index;
};

const filterOutLoaders = (loaders, filter) => loaders.filter(
  loader => !(!Array.isArray(loader.test) && loader.test
    && filter.includes(loader.test.toString())
  )
);

module.exports = {
  getIndexOfObjProperty,
  filterOutLoaders,
};
