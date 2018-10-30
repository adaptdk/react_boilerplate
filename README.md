## 💡 What is it?
React Boilerplate aims to extends create-react-app with custom webpack config, and adding modules we use for every project.

### Dependencies
- [Yarn](https://yarnpkg.com/en/docs/install)
- [NodeJs](https://nodejs.org/en/download/)

## ⚙ Get started
### Setup
```console
git clone git@github.com:adaptdk/react_boilerplate.git projectName
cd projectName
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

### 📦 Packages

This is the format, but needs to be updated with the right information

| Features | Base | Variant 1 | Variant 2 |
| :-------- | :----: | :---------: | :---------: |
| Redux       | ✅ | ✅ | ❌ |
| Router      | ❌ | ✅ | ✅ |
| CSS Modules | ❌ | ❌ | ✅ |

### 🎛 Configuration
Following configs can be edited in `config-overrides.js`

| Setting | Type | Description |
| :-------- | :----: | :--------- |
| **`bundleAnalyzer`** | `boolean` | Analyze the Node Packages included in the build product. |
| **`isDevEmbedded`** | `boolean` | Set this to true if the development build is embedded into another site. This will generate a index.html file without <html>, <head> and <body> tags. |
| **`isProdEmbedded`** | `boolean` | Set this to true if the production build is embedded into another site. This will generate a index.html file without <html>, <head> and <body> tags. |

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
