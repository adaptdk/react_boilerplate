// Plugins
// const rewireTypescript = require("react-app-rewire-typescript");
const paths = require("./paths");

// Loaders
const { stylesLoaders } = require("./loaders/styles");
const svgLoader = require("./loaders/svg");

const getIndex = rules => {
  const oneOfIndex = rules.findIndex(item => item["oneOf"]);

  const oneOf = rules[oneOfIndex].oneOf;

  const findLoader = loader =>
    oneOf.find(item => {
      return new RegExp(loader).test(item.loader);
    });

  const fileLoader = findLoader("file-loader");

  return { oneOfIndex, oneOf, findLoader, fileLoader };
};

module.exports = function(config, settings) {
  const { fileLoader, oneOf } = getIndex(config.module.rules);

  // Type Script
  // config = rewireTypescript(config, env);

  // Resolve
  config.resolve = {
    ...config.resolve,
    modules: [...config.resolve.modules, "./src"],
    extensions: [...config.resolve.extensions, ".ts", ".tsx", ".js"],
    alias: {
      assets: `${paths.appSrc}/assets`,
      state: `${paths.appSrc}/state`,
      utilities: `${paths.appSrc}/utilities`,
      views: `${paths.appSrc}/views`,
    },
  };

  // Modules
  // Apply loaders
  // We need to exclude the stylesheet extensions from the file-loader, so webpack know they're styles
  fileLoader.exclude.push(/\.(sa|sc|c)ss$/);

  // Get the Style Loaders from the loader folder
  const styles = stylesLoaders(true);

  // // Collect the loaders
  const loaders = [svgLoader, ...styles];

  // // Add the Style Loaders to the config.module.rules list.
  // // Depending on whether there's a oneOf
  if (oneOf) {
    oneOf.unshift(...loaders);
  } else {
    config.module.rules.push(...loaders);
  }

  return config;
};
