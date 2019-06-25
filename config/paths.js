const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appBuild: resolveApp('build'),
  appNodeModules: resolveApp('node_modules'),
  appPackageJson: resolveApp('package.json'),
  appHtmlMini: resolveApp('public/index-mini.html'),
  appHtml: resolveApp('public/index.html'),
  appPublic: resolveApp('public'),
  appIndex: resolveApp('src/index.tsx'),
  appSrc: resolveApp('src'),
  dotenv: resolveApp('.env'),
};
