// Environments Checks
const isProd = env => env === 'production';
const isDev = env => env === 'development';

module.exports = {
  isProd,
  isDev,
};
