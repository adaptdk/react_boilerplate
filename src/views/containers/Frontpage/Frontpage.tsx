import React from "react";
import Types from "RootTypes";
import { Dispatch } from "redux";
import { connect } from "react-redux";

// Actions
import * as fooActions from "state/ducks/foo/actions";

// interface SProps {
//   label: number;
// }

// interface DProps {
//   onClick: (value: string) => void;
// }

// type IProps = SProps & DProps;

const add = label => async (dispatch: Dispatch): Promise<void> => {
  setTimeout(() => dispatch(fooActions.add(label)), 1000);
};

const mapStateToProps = (state: Types.RootState) => ({
  label: state.foo.foo,
});

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => ({
  updateString: (value: string) => dispatch(add(value)),
});

type Props = ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps> & {
  label: string;
};

const Frontpage: React.FunctionComponent<Props> = ({ label }) => (
  <div className="page page-frontpage">
    <h1>Home {label}</h1>

    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frontpage);

// export default Frontpage;

// import React from "react";
// import { connect, DispatchProps } from "react-redux";
// import { Dispatch } from "redux";

// // Actions
// import { fooOperations } from "state/ducks/foo";

// interface SProps {
//   clickedValue: number;
// }

// interface DProps {
//   onClick: (value: string) => void;
// }

// type IProps = SProps & DProps;

// const Frontpage: React.FunctionComponent<IProps> = ({ onClick, clickedValue = 1 }) => (
//   <div className="page page-frontpage">
//     <h1>Home {clickedValue}</h1>

//     <button type="button" onClick={() => onClick("1")}>
//       1
//     </button>
//     <button type="button" onClick={() => onClick("2")}>
//       2
//     </button>
//     <button type="button" onClick={() => onClick("3")}>
//       3
//     </button>
//   </div>
// );

// const mapStateToProps = (state: any): SProps => ({
//   clickedValue: state.foo.foo.value,
// });

// const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
//   onClick: value => dispatch(fooOperations.fooAction(value)),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Frontpage);
