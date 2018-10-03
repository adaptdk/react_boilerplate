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
