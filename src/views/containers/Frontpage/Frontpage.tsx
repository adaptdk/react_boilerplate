import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { fooOperations } from "state/ducks/foo";

export interface Props {
  onClick: Function;
  clickedValue: Number;
}

class Frontpage extends Component<Props, {}> {
  render() {
    const { onClick, clickedValue = 1 } = this.props;

    return (
      <div className="page page-frontpage">
        <h1>Home {clickedValue}</h1>

        <button type="button" onClick={() => onClick("1")}>
          1
        </button>
        <button type="button" onClick={() => onClick("2")}>
          2
        </button>
        <button type="button" onClick={() => onClick("3")}>
          3
        </button>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frontpage);
