[![Netlify Status](https://api.netlify.com/api/v1/badges/5421a36d-01e6-4842-b5fe-5e28f3c07463/deploy-status)](https://app.netlify.com/sites/adapt-react/deploys)

# 💡 What is it?

React Boilerplate aims to extends [Create React App](https://github.com/facebook/create-react-app) with custom webpack config using [react-app-rewired](https://github.com/timarney/react-app-rewired), and adding modules we use for every project. We highly recommend that use one of the two packages including [TypeScript](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html), to make a better product.

Check out [Create React App](https://github.com/facebook/create-react-app) for more documentation.

#### [See Live Demo of the `Typescript: Complex` variant](https://adapt-react.netlify.com/)

## 🖇 Dependencies

- [Yarn](https://yarnpkg.com/en/docs/install)
- [Node >=10](https://nodejs.org/en/download/)

# 🏎 Quick Start

```console
git clone git@github.com:adaptdk/react_boilerplate.git {my-project}
cd {my-project}
yarn setup
```

This will ask install your modules, ask you some questions and setup your project based on those answers.

<p align="center">
  <img src="https://github.com/adaptdk/react_boilerplate/blob/maintenance/setup/config/setup/docs/setup-script.gif?raw=true" alt="Intro Video" width="600">
</p>

# ⚙ Get started

Inside the newly created project, you can run some built-in commands:

### `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.rawgit.com/marionebl/create-react-app/9f62826/screencast-error.svg' width="500" alt='Build errors'>
</p>

### `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.]
https://reactjs.org/docs/testing.html

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## 👌 Quality and Performance

This project ships with an all green LightHouse audit, include PWA features.

Continuously while development keep running the audit to monitor how your features are impacting your score, will help you develop great applications.

<p align="center">
  <img src="https://github.com/adaptdk/react_boilerplate/blob/maintenance/setup/config/setup/docs/lighthouse-score.png?raw=true" alt="LightHouse Audit">
</p>

## 📦 Packages

This is the format, but needs to be updated with the right information

| Features                                                                                     | Base (TS) | Complex (TS) |  Widgets (TS)  |   Base    |  Complex  |
| :------------------------------------------------------------------------------------------- | :-------: | :----------: | :------------: | :-------: | :-------: |
| Status                                                                                       | **Ready** |  **Ready**   |    **Ready**   | **Ready** | **Ready** |
| **Build Size Gzipped (kb)**                                                                  |  `~41kb`  |   `~63kb`    |     `~40kb`    |  `~41kb`  |  `~62kb`  |
| **[Redux](https://github.com/reduxjs/redux)**                                                |    ❌     |      ✅      |      ✅       |    ❌     |    ✅    |
| **[Redux Persistor](https://github.com/rt2zz/redux-persist)**                                |    ❌     |      ✅      |      ✅       |    ❌     |    ✅    |
| **[React Router](https://github.com/ReactTraining/react-router)**                            |    ❌     |      ✅      |      ✅       |    ❌     |    ✅    |
| **[React-Loadable](https://github.com/jamiebuilds/react-loadable)**                          |    ✅     |      ✅      |      ✅       |    ✅     |    ✅    |
| **[Polyfills](https://reactjs.org/docs/react-dom.html#browser-support)**                     |    ✅     |      ✅      |      ✅       |    ✅     |    ✅    |
| **[Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers)** |    ✅     |      ✅      |      ✅       |    ✅     |    ✅    |
| **Scss**                                                                                     |    ✅     |      ✅      |      ✅       |    ✅     |    ✅    |
| **CSS Modules**                                                                              |    ✅     |      ✅      |      ✅       |    ✅     |    ✅    |
| **Autoprefixer**                                                                             |    ✅     |      ✅      |      ✅       |    ✅     |    ✅    |
| **[Critical CSS (inline)](#critical-css)**                                                   |    ✅     |      ✅      |      ✅       |    ✅     |    ✅    |
| **Typescript**                                                                               |    ✅     |      ✅      |      ✅       |    ❌     |    ❌    |
| **Proxy local env**                                                                          |    ⚡     |      ⚡      |      ⚡       |    ⚡     |    ⚡    |
| **Multiple Widget**                                                                          |    ❌     |      ❌      |      ✅       |    ❌     |    ❌    |

✅ Full support ⚡ Supported (Needs configuration) ❌ No Support

### Feature Documentation

#### Critical CSS

If you add `.crit` before your SCSS in your sass files like `*.crit.scss`, the file will be inlined in the top of the DOM instead of bundled in the main css file.

This is extremely vital to first paint, so use it for all the components, which is above the fold.

## 🎛 Configuration

Following options can be changed in the `.env` file

| Setting | Type | Description |
| :------ | :----: | :-------- |
| **`BUNDLE_ANALYZER`** | `boolean` | Analyze the Node Packages included in the build. |
| **`PROFILER`** | `boolean` | Get a profile of your build stats |
| **`CRIT_CSS`** | `boolean` | Enables Critical CSS generated by a headless Chrome |
| **`POLYFILL`** | `boolean` | Enables Polyfilling (IE11). - Relative to browserslist in package.json |
| **`SOURCE_MAP`** | `boolean` | Generated Source Map for the build - Useful for `Test` or `Staging` env. |
| **`GZIP`** | `boolean` | Enables Gzipping for the JS files |
| **`HASH_BUILD`** | `boolean` | Controls whether the build files should have a hashed filename for caching. - Useful if you're serving the files through another system if and they hash it |
| **`PROXY`** | `boolean` | Embed your React app and proxy against the local env. with the `PUBLIC_URL` as the URL. |
| **`PROXY_URL`** | `string` | The URL address that we'll proxy against |

## ⛺️ Maintainers

Feel free to write any of the maintainers, or create an issue if you run into a problem.

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="90" height="90"
        src="https://avatars0.githubusercontent.com/u/16097850?s=460&v=4">
        </br>
        <a href="https://github.com/https://github.com/mads-thines">Mads Thines</a>
      </td>
    </tr>
  <tbody>
</table>
