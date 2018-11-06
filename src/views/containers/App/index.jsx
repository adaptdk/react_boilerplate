import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';

// Constants
import routes from 'constants/Routes';

// Components
import Loading from 'views/components/Loading';

const Footer = Loadable({
  loader: () => import('views/components/Footer'),
  loading: Loading,
});

const Header = Loadable({
  loader: () => import('views/components/Header'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <div className="app">

        <Header />

        <main>
          <Router>
            {renderRoutes(routes)}
          </Router>
        </main>

        <Footer />

      </div>
    );
  }
}

export default App;
