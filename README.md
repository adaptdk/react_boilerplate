SIMPLE REPO

## 💡 What is it?
React Boilerplate aims to extends create-react-app with custom webpack config, and adding modules we use for every project.

## ⚙ Get started

### Setup
Run the setup to quickly get started with your project.

If you've got an empty git repository URL ready, the setup can prepare the git repo for you as well.

### Dependencies
- [Yarm](https://yarnpkg.com/en/docs/install)
```console
yarn setup
```

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

### Configuration
Following configs can be edited in `config-overrides.js`
- `bundleAnalyzer`: Set this to true to Analyze the Node Packages included in the build product.
- `isDevEmbedded`: Set this to true if the development build is embedded into another site. This will generate a index.html file without <html>, <head> and <body> tags.
- `isProdEmbedded`: Set this to true if the production build is embedded into another site. This will generate a index.html file without <html>, <head> and <body> tags.

## 🛠 Maintenance of React Boilerplate
### Version numbering.
**1.2.3**
- 1.x.x = Compatibility Breaking Changes
- x.1.x = Major Changes (New features)
- x.x.1 = Minor Changes (Patches)

### Updating
#### Patch Updating
*If you add `-n` after it skips all questions*
```bash
yarn release
```

#### Minor Updating
```bash
yarn release minor
```

#### Major Updating
```bash
yarn release major
```

Check out [Create React App](https://github.com/facebook/create-react-app) for more documentation.
