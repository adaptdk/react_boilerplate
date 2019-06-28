import React from "react";
import Types from "RootTypes";
// import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

// Actions
import { actions as fooActions } from "state/ducks/foo";

const mapStateToProps = (state: Types.RootState) => ({
  title: state.foo.title,
  elements: state.foo.elements,
});

const mapDispatchToProps = dispatch => ({
  addElement: (value: string) => dispatch(fooActions.addElement(value)),
  updateTitle: (value: string) => dispatch(fooActions.updateTitle(value)),
  deleteElement: () => dispatch(fooActions.deleteElement()),
});

// Collecting the props into one type you can refer to.
type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {};

const Frontpage: React.FC<Props> = ({
  elements,
  title,
  updateTitle,
  addElement,
  deleteElement,
}) => {
  return (
    <div className="page page-frontpage">
      <h1>Home {title}</h1>

      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateTitle(e.target.value)}
      />

      <button type="button" onClick={() => addElement("1")}>
        1
      </button>
      <button type="button" onClick={() => addElement("2")}>
        2
      </button>
      <button type="button" onClick={() => addElement("3")}>
        3
      </button>

      <button type="button" onClick={deleteElement}>
        Delete the last added
      </button>

      {elements &&
        elements.map(e => (
          <p key={e.id}>
            {e.title} {e.id}
          </p>
        ))}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frontpage);
