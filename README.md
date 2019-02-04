# 💡 What is it?
React Boilerplate aims to extends [Create React App](https://github.com/facebook/create-react-app) with custom webpack config using [react-app-rewired](https://github.com/timarney/react-app-rewired), and adding modules we use for every project.

Check out [Create React App](https://github.com/facebook/create-react-app) for more documentation.

## 🖇 Dependencies
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Node >=10](https://nodejs.org/en/download/)

# 🏎 Quick Start
```console
git clone git@github.com:adaptdk/react_boilerplate.git my-project
cd my-project
yarn setup
```
This will ask install your modules, ask you some questions and setup your project based on those answers.

<p align="center">
  <img src="https://raw.githubusercontent.com/adaptdk/react_boilerplate/docs/doc/setup-intro-video.gif?token=APWiOp_OQJvk2uDLjqfi0MiDPrEaCLPOks5b6vy-wA%3D%3D" alt="Intro Video" width="500">
</p>

# ⚙ Get started

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.rawgit.com/marionebl/create-react-app/9f62826/screencast-error.svg' width="500" alt='Build errors'>
</p>

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## 👌 Quality and Performance
This project ships with an all green LightHouse audit, include PWA features.

Continuously while development keep running the audit to monitor how your features are impacting your score, will help you develop great applications.

<p align="center">
  <img src="https://raw.githubusercontent.com/adaptdk/react_boilerplate/docs/doc/LightHouse-Audit.jpg?token=APWiOomvEvnCx4kDbaleAMcYSW6T0UqPks5b6vy6wA%3D%3D" alt="LightHouse Audit">
</p>

## 📦 Packages

This is the format, but needs to be updated with the right information

| Features       | Base | Complex |
| :------------- | :--: | :-----: |
| Status | **Ready** | **Ready** |
| **Build Size Gzipped (kb)** | `~37kb` | `~55kb` |
| **[Redux](https://github.com/reduxjs/redux)** | ❌ | ✅ |
| **[Redux Persistor](https://github.com/rt2zz/redux-persist)** | ❌ | ✅ |
| **[React Router](https://github.com/ReactTraining/react-router)** | ❌ | ✅ |
| **[React-Loadable](https://github.com/jamiebuilds/react-loadable)** | ❌ | ✅ |
| **[Polyfills](https://reactjs.org/docs/react-dom.html#browser-support)** | ✅ | ✅ |
| **Scss** | ✅ | ✅ |
| **[Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers)** | ✅ | ✅ |
| **[Critical CSS (inline)](#critical-css)** | ✅ | ✅ |
| **CSS Modules** | ✅ | ✅ |
| **Autoprefixer** | ✅ | ✅ |

✅ Full support ⚡ Supported (Needs configuration) ❌ No Support

### Feature Documentation

#### Critical CSS
If you add `.crit` before your SCSS in your sass files like `*.crit.scss`, the file will be inlined in the top of the DOM instead of bundled in the main css file.

This is extremely vital to first paint, so use it for all the components, which is above the fold.

## 🎛 Configuration
Following configs can be edited in `config-overrides.js`

| Setting | Type | Description |
| :-------- | :----: | :--------- |
| **`bundleAnalyzer`** | `boolean` | Analyze the Node Packages included in the build product. |
| **`isDevEmbedded`** | `boolean` | Set this to true if the development build is embedded into another site. This will generate a index.html file without <html>, <head> and <body> tags. |
| **`isProdEmbedded`** | `boolean` | Set this to true if the production build is embedded into another site. This will generate a index.html file without <html>, <head> and <body> tags. |


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
      <td align="center">
        <img width="90" height="90"
        src="https://avatars0.githubusercontent.com/u/6573200?s=460&v=4">
        </br>
        <a href="https://github.com/ChrEsb">Christian Esbensen</a>
      </td>
    </tr>
  <tbody>
</table>
