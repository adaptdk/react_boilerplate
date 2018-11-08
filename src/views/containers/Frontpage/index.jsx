import React, { Component } from 'react';

class Frontpage extends Component {
  state = {
    clickedValue: 1,
  };

  onClick = value => {
    this.setState({
      clickedValue: value,
    });
  };

  render() {
    const { clickedValue } = this.state;

    return (
      <div className="page page-frontpage">

        <h1>Home {clickedValue}</h1>

        <button type="button" onClick={() => this.onClick('1')}>1</button>
        <button type="button" onClick={() => this.onClick('2')}>2</button>
        <button type="button" onClick={() => this.onClick('3')}>3</button>

      </div>
    );
  }
}

export default Frontpage;
