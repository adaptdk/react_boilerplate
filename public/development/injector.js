const body = document.querySelector("body");

const filterRegExp = RegExp(/(\.js$|\.css$)/);

const injector = {
  createLoadingElement: () => {
    const loaderElement = document.createElement("div");
    loaderElement.className = "injector-loader-element";
    loaderElement.innerHTML = "Injecting...";
    document.body.appendChild(loaderElement);
  },
  destroyLoadingElement: () => {
    const loaderElement = document.querySelector("div.injector-loader-element");
    document.body.removeChild(loaderElement);
  },
  setLoading: async () => {
    await injector.createLoadingElement();
    body.classList.add("injector--loading");
  },
  setLoaded: () => {
    body.classList.remove("injector--loading");
  },
  injectScripts: async () => {
    await fetch("/asset-manifest.json")
      .then(res => res.json())
      .then(res => {
        Object.values(res.files)
          .filter(file => filterRegExp.test(file))
          .forEach(file => file && import(file));
      });
  },
  init: async () => {
    injector.setLoading();
    await injector.injectScripts();
    injector.setLoaded();
    setTimeout(injector.destroyLoadingElement, 5000);
  },
};

injector.init();
