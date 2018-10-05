const paths = require('../paths');
const eslintFormatter = require('react-dev-utils/eslintFormatter');

const eslintLoader = {
  test: /\.(js|jsx|mjs)$/,
  enforce: 'pre',
  use: [
    {
      options: {
        formatter: eslintFormatter,
        eslintPath: require.resolve('eslint'),

      },
      loader: require.resolve('eslint-loader'),
    },
  ],
  include: paths.appSrc,
};

module.export = {
  eslintLoader,
};
