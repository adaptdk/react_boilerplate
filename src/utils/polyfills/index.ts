const inWindow = ['fetch', 'Intl', 'URL', 'Map'];
const inNodeList = ['forEach'];
const inString = ['startsWith', 'endsWith', 'includes'];
const inArray = ['includes'];
const inObject = ['assign', 'entries', 'keys', 'values'];

export const addPolyfills = () =>
  !(
    inWindow.some((feature) => feature in window) &&
    inNodeList.some((feature) => feature in NodeList.prototype) &&
    inString.some((feature) => feature in String.prototype) &&
    inArray.some((feature) => feature in Array.prototype) &&
    inObject.some((feature) => feature in Object)
  ) && import('./polyfills' /* webpackChunkName: 'polyfills' */);
