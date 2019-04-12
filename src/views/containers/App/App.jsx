import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

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

class App extends Component {
  render() {
    return (
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
  }
}

// export default App;
export default (isDev() ? hot(module)(App) : App);
