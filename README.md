## 💡 What is it?
React Boilerplate aims to extends create-react-app with custom webpack config, and adding modules we use for every project.

## 🏎 Quick Start
```console
git clone git@github.com:adaptdk/react_boilerplate.git my-project
cd my-project
yarn setup
```
This will ask install your modules, ask you some questions and setup your project based on those answers.

<p align="center">  
  <img src="https://media.giphy.com/media/9J8VoAXRJ5gtjxxLjm/giphy.gif" alt="Intro Video">
</p>

### 📦 Packages

This is the format, but needs to be updated with the right information

| Features       | Base | Simple | Complex |
| :------------- | :--: | :----: | :-----: |
| Status | **WIP** | **WIP** | **WIP** |
| **Project Size (kb)** | `~54kb` | `~54kb` | N/A |
| **[Redux](https://github.com/reduxjs/redux)** | ❌ | ✅ | ✅ |
| **[Redux Persistor](https://github.com/rt2zz/redux-persist)** | ❌ | ❌ | ✅ |
| **[React Router](https://github.com/ReactTraining/react-router)** | ❌ | ✅ | ✅ |
| **[React-Loadable](https://github.com/jamiebuilds/react-loadable)** | ❌ | ✅ | ✅ |
| **[Polyfills](https://reactjs.org/docs/react-dom.html#browser-support)** | ✅ | ✅ | ✅ |
| **Scss** | ✅ | ✅ | ✅ |
| **[Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers)** | ✅ | ✅ | ✅ |
| **Critical CSS** | ✅ | ✅ | ✅ |
| **Autoprefixer** | ✅ | ✅ | ✅ |

✅ Full support ⚡ Supported (Needs configuration) ❌ No Support

### Dependencies
- [Yarn](https://yarnpkg.com/en/docs/install)
- [NodeJs](https://nodejs.org/en/download/)

## ⚙ Get started
### Developing
```console
yarn start
```

### Production Build
```console
yarn build
```

### Jest Testing
```console
yarn test
```

### 👌 Quality and Performance
This project ships with an all green LightHouse audit, include PWA features.

Continuously while development keep running the audit to monitor how your features are impacting your score, will help you develop great applications.

<p align="center">
  <img src="https://raw.githubusercontent.com/adaptdk/react_boilerplate/readme/doc/LightHouse-Audit.jpg?token=APWiOisYr34d0h796_AJLG_qf6AgvS29ks5b4sCWwA%3D%3D" alt="LightHouse Audit">
</p>


### 🎛 Configuration
Following configs can be edited in `config-overrides.js`

| Setting | Type | Description |
| :-------- | :----: | :--------- |
| **`bundleAnalyzer`** | `boolean` | Analyze the Node Packages included in the build product. |
| **`isDevEmbedded`** | `boolean` | Set this to true if the development build is embedded into another site. This will generate a index.html file without <html>, <head> and <body> tags. |
| **`isProdEmbedded`** | `boolean` | Set this to true if the production build is embedded into another site. This will generate a index.html file without <html>, <head> and <body> tags. |


Check out [Create React App](https://github.com/facebook/create-react-app) for more documentation.
