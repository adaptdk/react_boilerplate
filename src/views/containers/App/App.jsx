import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

// Components
import Loading from 'views/components/Loading';
import Header from 'views/components/Header';

// Containers
const Footer = Loadable({
  loader: () => import('views/components/Footer'),
  loading: Loading,
});

const Frontpage = Loadable({
  loader: () => import('views/containers/Frontpage/Frontpage'),
  loading: () => null,
});

const NotFound = Loadable({
  loader: () => import('views/containers/NotFound/NotFound'),
  loading: () => null,
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">

          <Header />

          <main>
            <Switch>
              <Route
                path="/"
                component={Frontpage}
                exact
              />
              <Route
                component={NotFound}
              />
            </Switch>
          </main>

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
