import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import { hot } from "react-hot-loader";

// Utilities
import { isDev } from "utilities/development";

const widgets = [
  {
    query: "#query1",
    widget: Loadable({
      loader: () => import("views/widgets/Widget1/Widget1" /* webpackChunkName: "Widget1" */),
      loading: () => null,
    }),
  },
  {
    query: "#query2",
    widget: Loadable({
      loader: () => import("views/widgets/Widget2/Widget2" /* webpackChunkName: "Widget2" */),
      loading: () => null,
    }),
  },
];

// Initialize the Widgets
widgets.forEach(widget => {
  const { query, widget: component } = widget;
  // let {  } = widget;
  const querySelector = document.querySelector(query);

  if (!querySelector) {
    // eslint-disable-next-line
    console.warn(`The query selector doesn't exist: ${query}`);
    return;
  }

  // Setting up React Hot Loader
  const Component = isDev ? hot(module)(component) : component;

  // Setting ReactDOM.render for each widget.
  ReactDOM.render(<Component />, document.querySelector(query));
});
