/* eslint-disable */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const postcssCalc = require('postcss-calc');
const postcssFlexbugs = require('postcss-flexbugs-fixes');
const postcssInlineSvg = require('postcss-inline-svg');
const paths = require('../paths');

// Style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

// Config
// PostCSS Config
const postcssConfig = [
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [
        autoprefixer({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
          ],
        }),
        postcssFlexbugs,
        postcssCalc,
        postcssInlineSvg({
          path: paths.appSrc + '/assets/icons',
        }),
      ],
    },
  }
];

// Sass/Scss Config
const sassConfig = [
  'sass-loader',
  {
    loader: 'sass-resources-loader',
    options: {
      resources: paths.appSrc + '/assets/styles/settings/settings.scss',
    },
  },
];

// Loaders
// Sass/Scss Loader
const sassLoader = isProd => ({
  test: sassRegex,
  exclude: sassModuleRegex,
  use: [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    ...postcssConfig,
    ...sassConfig
  ],
});

// Sass/Scss Module Loader (CSS Modules)
const sassModuleLoader = isProd => ({
  test: sassModuleRegex,
  use: [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: !isProd,
        modules: true,
        localIdentName: isProd ? 's[hash:base64:3]' : '[local]__[hash:base64:3]',
      },
    },
    ...postcssConfig,
    ...sassConfig
  ],
});

// CSS Loader (Including CSS Modules)
const cssLoader = isProd => ({
  test: cssRegex,
  exclude: cssModuleRegex,
  use: [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    ...postcssConfig,
  ],
});

// CSS Module Loader (CSS Modules)
const cssModuleLoader = isProd => ({
  test: cssModuleRegex,
  use: [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: !isProd,
        modules: true,
        localIdentName: isProd ? 's[hash:base64:3]' : '[local]__[hash:base64:3]',
      },
    },
    ...postcssConfig,
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
