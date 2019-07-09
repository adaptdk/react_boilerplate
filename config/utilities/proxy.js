const cssRegExp = RegExp(/(\.css)/);

const appendToProxyResponse = inject => (proxyRes, req, res) => {
  if (Array.isArray(inject)) inject = inject.join("");

  if (cssRegExp.test(res.req.path)) res.setHeader("Content-Type", "text/css");

  if (
    proxyRes.headers["content-type"] &&
    proxyRes.headers["content-type"].indexOf("text/html") >= 0
  ) {
    // Create flag to detect modification
    let responseModified = false;
    // need to remove this header as we may modify the response
    if (proxyRes.headers["content-length"]) delete proxyRes.headers["content-length"];

    // Listen to Proxy Response.
    proxyRes.on("data", data => {
      // The Tag which we're going to inject before
      const tag = "</body>";
      const dataAsString = data.toString();
      // Check whether the we've modified before
      if (!responseModified && dataAsString.indexOf(tag) >= 0) {
        responseModified = true;
        // Inject the scripts
        inject = `${inject}${tag}`;
        res.write(Buffer.from(dataAsString.replace(tag, inject), "utf8"));
      } else {
        res.write(data);
      }
    });
    proxyRes.on("end", () => res.end());
  } else {
    proxyRes.pipe(res);
  }
};

module.exports = {
  appendToProxyResponse,
};
