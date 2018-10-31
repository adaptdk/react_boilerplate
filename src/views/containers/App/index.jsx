import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

// Constants
import routes from 'constants/Routes';

// Components
import Header from 'views/components/Header';
import Footer from 'views/components/Footer';

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

