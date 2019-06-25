import React from "react";
import { connect, DispatchProps } from "react-redux";
import { Dispatch } from "redux";

// Actions
import { fooOperations } from "state/ducks/foo";

interface SProps {
  clickedValue: number;
}

interface DProps {
  onClick: (value: string) => void;
}

type IProps = SProps & DProps;

const Frontpage: React.FunctionComponent<IProps> = ({
  onClick,
  clickedValue = 1,
}) => (
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

const mapStateToProps = (state: any): SProps => ({
  clickedValue: state.foo.foo.value,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  onClick: value => dispatch(fooOperations.fooAction(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frontpage);
