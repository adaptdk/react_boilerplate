import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">FrontPage</Link>
        <Link to="/notfound">Not Found</Link>
      </header>
    );
  }
}

export default HeaderComponent;
