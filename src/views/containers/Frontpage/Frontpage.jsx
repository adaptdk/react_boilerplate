import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import { fooOperations } from 'state/ducks/foo';

class Frontpage extends Component {
  static defaultProps = {
    clickedValue: '1',
  };

  static propTypes = {
    onClick: PropTypes.func,
    clickedValue: PropTypes.string,
  };

  render() {
    const { onClick, clickedValue } = this.props;

    return (
      <div className="page page-frontpage">

        <h1>Home {clickedValue}</h1>

        <button type="button" onClick={() => onClick('1')}>1</button>
        <button type="button" onClick={() => onClick('2')}>2</button>
        <button type="button" onClick={() => onClick('3')}>3</button>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  clickedValue: state.foo.foo.value,
});

const mapDispatchToProps = dispatch => ({
  onClick: value => dispatch(fooOperations.fooAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);
