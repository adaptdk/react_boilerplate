/* eslint-disable */

const proxy = require("http-proxy-middleware");

const { envs } = require("../config/utils");
const { appendToProxyResponse } = require("../config/utils/proxy");

module.exports = app => {
  // If you're not proxying to another site, just ignore this file.
  if (!envs.proxy) return;
  // Exclude specific URL's which shouldn't be proxied to the target URL,
  // but use the Webpack Dev Server. Like static files, hot module reloader and development script
  const excludes = ["/static/**", "/sockjs-node/**", "/asset-manifest.json", "/development/**"];
  // Setup Proxy
  app.use(
    proxy(`!(${excludes.join("|")})`, {
      target: process.env.PROXY_URL,
      changeOrigin: true,
      selfHandleResponse: true,
      headers: { "Access-Control-Allow-Origin": "*", "accept-encoding": "gzip;q=0,deflate,sdch" },
      onProxyRes: appendToProxyResponse([
        '<link rel="stylesheet" type="text/css" href="/development/injector.css">',
        '<script src="/development/injector.js" defer></script>',
      ]),
    })
  );
};
