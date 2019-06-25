/* eslint-disable */

const {
  useBabelRc,
  useEslintRc,
  enableEslintTypescript,
} = require("customize-cra");

// Plugins
const paths = require("./paths");

// Utils
const { loaderUtil } = require("./utilities/utilities");

// Loaders
const { stylesLoaders } = require("./loaders/styles");
const svgLoader = require("./loaders/svg");

module.exports = function(config, isProd, settings) {
  const { fileLoader, oneOf } = loaderUtil(config.module.rules);

  // Use the local .babelrc file
  useBabelRc();

  useEslintRc();

  enableEslintTypescript();

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
  const styles = stylesLoaders(isProd);

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
