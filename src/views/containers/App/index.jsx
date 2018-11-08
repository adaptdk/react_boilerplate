import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

// Containers
import Frontpage from 'views/containers/Frontpage';
import NotFound from 'views/containers/NotFound';

// Components
import Loading from 'views/components/Loading';
import Header from 'views/components/Header';

// Code Splitting Components
const Footer = Loadable({
  loader: () => import('views/components/Footer'),
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
