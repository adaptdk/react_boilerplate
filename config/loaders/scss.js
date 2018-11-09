const autoprefixer = require('autoprefixer');
const postcssCalc = require('postcss-calc');
const postcssFlexbugs = require('postcss-flexbugs-fixes');
const postcssInlineSvg = require('postcss-inline-svg');
const paths = require('../paths');

const scssLoader = {
  test: /\.scss$/,
  use: [
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: () => ([
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
        ]),
      },
    },
    {
      loader: 'sass-resources-loader',
      options: {
        resources: paths.appSrc + '/assets/styles/settings/settings.scss',
      },
    },
  ],
};

module.export = {
  scssLoader,
};
