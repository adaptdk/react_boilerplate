import express from "express";
import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";

// Container
import App from "views/containers/App/App";

const server = express();

server.use("/assets", express.static("assets"));

const context = {};
server.get("/", (req, res) => {
  const isMobile = true;
  const initialState = { isMobile };
  const appString = renderToString(
    <StaticRouter context={context} location={req.url}>
      <App {...initialState} />
    </StaticRouter>
  );

  res.send(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${JSON.stringify(
          initialState
        )}</script>
        <title>Yaauw</title>
        <link rel="stylesheet" href="/assets/index.css" />
      </head>
      
      <body>
        <div id="root">${appString}</div>
      </body>
      
      <script src="/assets/bundle.js"></script>
    </html>
  `
  );
});

server.listen(8080);
console.log("listening");
