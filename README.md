## 💡 What is it?
React Boilerplate aims to extends create-react-app with custom webpack config, and adding modules we use for every project.

## ⚙️ Get started

### Setup
```console
git clone git@github.com:adaptdk/react_boilerplate.git [yourProjectName]
cd [yourProjectName]
yarn install
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
