/* eslint-disable */

const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const autoprefixer = require("autoprefixer");
const postcssCalc = require("postcss-calc");
const postcssFlexbugs = require("postcss-flexbugs-fixes");
const postcssInlineSvg = require("postcss-inline-svg");
const paths = require("../paths");

// Style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

// Config
const _cssModuleLoader = isProd => [
  {
    loader: "css-loader",
    options: {
      sourceMap: !isProd,
      modules: {
        localIdentName: isProd
          ? "s[hash:base64:3]"
          : "[name]__[local]--[hash:base64:3]",
      }
    },
  },
];

// PostCSS Config
const _postcssConfig = [
  {
    loader: "postcss-loader",
    options: {
      ident: "postcss",
      plugins: () => [
        autoprefixer(),
        postcssFlexbugs,
        postcssCalc,
        postcssInlineSvg({
          path: paths.appSrc + "/assets/icons",
        }),
      ],
    },
  },
];

// Sass/Scss Config
const _sassConfig = [
  "sass-loader",
  {
    loader: "sass-resources-loader",
    options: {
      resources: paths.appSrc + "/assets/styles/settings/settings.scss",
    },
  },
];

const _extractCssPlugin = isProd => ({
  loader: ExtractCssChunks.loader,
  options: {
    hmr: !isProd,
  },
});

// Loaders
// Sass/Scss Loader
const sassLoader = isProd => ({
  test: sassRegex,
  exclude: sassModuleRegex,
  use: [
    isProd ? _extractCssPlugin(isProd) : "style-loader",
    "css-loader",
    ..._postcssConfig,
    ..._sassConfig,
  ],
});

// Sass/Scss Module Loader (CSS Modules)
const sassModuleLoader = isProd => ({
  test: sassModuleRegex,
  use: [
    isProd ? _extractCssPlugin(isProd) : "style-loader",
    ..._cssModuleLoader(isProd),
    ..._postcssConfig,
    ..._sassConfig,
  ],
});

// CSS Loader (Including CSS Modules)
const cssLoader = isProd => ({
  test: cssRegex,
  exclude: cssModuleRegex,
  use: [
    isProd ? _extractCssPlugin(isProd) : "style-loader",
    "css-loader",
    ..._postcssConfig,
  ],
});

// CSS Module Loader (CSS Modules)
const cssModuleLoader = isProd => ({
  test: cssModuleRegex,
  use: [
    isProd ? _extractCssPlugin(isProd) : "style-loader",
    ..._cssModuleLoader(isProd),
    ..._postcssConfig,
  ],
});

// Collect and export
module.exports = {
  stylesLoaders: isProd => [
    sassLoader(isProd),
    sassModuleLoader(isProd),
    cssLoader(isProd),
    cssModuleLoader(isProd),
  ],
};
