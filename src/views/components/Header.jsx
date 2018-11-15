import React, { Component } from 'react';

import styles from './header.scss';

class HeaderComponent extends Component {
  render() {
    console.log(styles);
    return (
      <header className="header" />
    );
  }
}

export default HeaderComponent;
