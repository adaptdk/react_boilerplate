import React from "react";
import Types from "RootTypes";
import { Dispatch } from "redux";
import { connect } from "react-redux";

// Actions
import * as fooActions from "state/ducks/foo/actions";

const add = value => async (dispatch: Dispatch): Promise<void> => {
  setTimeout(() => dispatch(fooActions.add(value)), 1000);
};

const mapStateToProps = (state: Types.RootState) => ({
  foos: state.foo.foo,
});

const mapDispatchToProps = dispatch => ({
  updateFoo: (value: string) => dispatch(fooActions.add(value)),
  // updateFoo: (value: string) => dispatch(add(value)),
});

type Props = ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps> & {
  label: string;
  updateFoo: Function;
};

const Frontpage: React.FC<Props> = ({ foos, updateFoo }) => {
  return (
    <div className="page page-frontpage">
      <h1>Home</h1>

      <button type="button" onClick={() => updateFoo("1")}>
        1
      </button>
      <button type="button" onClick={() => updateFoo("2")}>
        2
      </button>
      <button type="button" onClick={() => updateFoo("3")}>
        3
      </button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frontpage);
