import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { duckOperations } from 'state/ducks/duck'

class Frontpage extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="page page-frontpage">

        <h1>
          Home
        </h1>

        <button type="button" onClick={() => onClick(1)}>1</button>
        <button type="button" onClick={() => onClick(2)}>2</button>
        <button type="button" onClick={() => onClick(3)}>3</button>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: state.duckState.active,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: value => dispatch(duckOperations.duckAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);
