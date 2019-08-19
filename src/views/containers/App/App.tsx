import React from "react";
import Loadable from "react-loadable";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Utilities
import { isDev } from "utilities/development";

// Components
import Header from "views/components/Header";
import Loading from "views/components/Loading";

// Icons
import Logo from "assets/icons/logo.svg";

const NotFound = Loadable({
  loader: (): Promise<any> => import("views/containers/NotFound/NotFound"),
  loading: (): null => null,
});

const Footer = Loadable({
  loader: (): Promise<any> => import("views/components/Footer"),
  loading: Loading,
});

const Frontpage = Loadable({
  loader: (): Promise<any> => import("views/containers/Frontpage/Frontpage"),
  loading: Loading,
});

const App = (): JSX.Element => (
  <Router>
    <div className="app">
      <Header />

      <main>
        <Switch>
          <Route path="/" component={Frontpage} exact />
          <Route component={NotFound} />
        </Switch>
      </main>

      <Logo style={{ height: 200, width: 200 }} />

      <Footer />
    </div>
  </Router>
);

export default (isDev ? hot(module)(App) : App);
