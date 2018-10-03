import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

// Constants
import routes from 'constants/Routes';

class App extends Component {
  render() {
    return (
      <div className="app">

        {/* Header */}

        {/* Router */}
        <Router>

          <main>
            {/* Header */}
            <header>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </header>

            {/* Render the Route Content */}
            {renderRoutes(routes)}
          </main>

        </Router>

        {/* Footer */}

      </div>
    );
  }
}

export default App;
