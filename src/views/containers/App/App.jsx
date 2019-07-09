import React from "react";
import Loadable from "react-loadable";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Utilities
import { isDev } from "utilities/development";

// Components
import Header from "views/components/Header";
import Loading from "views/components/Loading";

const NotFound = Loadable({
  loader: () => import("views/containers/NotFound/NotFound"),
  loading: () => null,
});

const Footer = Loadable({
  loader: () => import("views/components/Footer"),
  loading: Loading,
});

const Frontpage = Loadable({
  loader: () => import("views/containers/Frontpage/Frontpage"),
  loading: Loading,
});

const App = () => (
  <Router>
    <div className="app">
      <Header />

      <main>
        <Switch>
          <Route path="/" component={Frontpage} exact />
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
    </div>
  </Router>
);

export default (isDev ? hot(module)(App) : App);
