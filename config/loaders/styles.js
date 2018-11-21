/* eslint-disable */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const postcssCalc = require('postcss-calc');
const postcssFlexbugs = require('postcss-flexbugs-fixes');
const postcssInlineSvg = require('postcss-inline-svg');
const paths = require('../paths');

const baseStyleLoader = [
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
  },
  'sass-loader',
  {
    loader: 'sass-resources-loader',
    options: {
      resources: paths.appSrc + '/assets/styles/settings/settings.scss',
    },
  },
];

const styleLoader = isProd => ({
  test: /(?<!\.crit)\.(sa|sc)ss$/,
  use: [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader', 
    ...baseStyleLoader
  ],
});

const critLoader = isProd => ({
  test: /\.crit\.(sa|sc)ss$/,
  use: [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader', 
    ...baseStyleLoader
  ],
});

const cssModulesLoader = isProd => ({
  test: /\.css$/,
  use: [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: !isProd,
        modules: true,
        localIdentName: '[local]__[hash:base64:5]',
      },
    },
    ...baseStyleLoader,
  ],
});

module.exports = {
  stylesLoaders: isProd => [
    styleLoader(isProd),
    critLoader(isProd),
    cssModulesLoader(isProd),
  ]
};
