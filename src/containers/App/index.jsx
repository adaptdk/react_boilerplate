import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';

// Actions
import {
  updateTitleAction,
} from 'actions/App';

// Constants
import routes from 'constants/Routes';

class App extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onClick = () => {
    const { actions } = this.props;
    const { inputValue } = this.state;
    return actions.updateTitleAction(inputValue);
  };

  render() {
    const { inputValue } = this.state;
    const { title } = this.props;
    return (
      <div className="app">
        <BrowserRouter>

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

            <input
              type="text"
              onChange={this.handleChange}
              value={inputValue}
            />

            <button
              type="button"
              onClick={this.onClick}
            >
              Click me
            </button>

            {title && (
              <h4>{title}</h4>
            )}

            {/* Render the Route Content */}
            {renderRoutes(routes)}

          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(state => {
  const { app: { title } } = state;
  return {
    title,
  };
}, dispatch => ({
  actions: bindActionCreators({
    updateTitleAction,
  }, dispatch),
}))(App);

