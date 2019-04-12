/* eslint-disable */
// Plugins
const rewireTypescript = require("react-app-rewire-typescript");
const { getLoader, loaderNameMatches } = require("react-app-rewired");
const paths = require("./paths");

// Utils
const { isProd: isProdUtils } = require("./utilities/utilities");

// Loaders
const { stylesLoaders } = require("./loaders/styles");
const svgLoader = require("./loaders/svg");

module.exports = function(config, env, settings) {
  const isProd = isProdUtils(env);

  // Type Script
  config = rewireTypescript(config, env);

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
  const fileLoader = getLoader(config.module.rules, rule =>
    loaderNameMatches(rule, "file-loader")
  );
  fileLoader.exclude.push([/\.(sa|sc|c)ss$/, /\.crit\.(sa|sc|c)ss$/]);

  // Get the Style Loaders from the loader folder
  const styles = stylesLoaders(isProd);

  // Collect the loaders
  const loaders = [svgLoader, ...styles];

  // Add the Style Loaders to the config.module.rules list.
  // Depending on whether there's a oneOf
  const oneOfRule = config.module.rules.find(rule => !!rule.oneOf);
  if (oneOfRule) {
    oneOfRule.oneOf.unshift(...loaders);
  } else {
    config.module.rules.push(...loaders);
  }

  return config;
};
