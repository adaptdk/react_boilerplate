import React from "react";
import { connect } from "react-redux";

// Actions
import { actions as fooActions } from "state/ducks/foo";

const mapStateToProps = state => ({
  title: state.foo.title,
  elements: state.foo.elements,
});

const mapDispatchToProps = dispatch => ({
  addElement: value => dispatch(fooActions.addElement(value)),
  updateTitle: value => dispatch(fooActions.updateTitle(value)),
  deleteElement: () => dispatch(fooActions.deleteElement()),
});

const Frontpage = ({ elements, title, updateTitle, addElement, deleteElement }) => {
  return (
    <div className="page page-frontpage">
      <h1>Home {title}</h1>

      <label htmlFor="idChanger">
        Change the title
        <input type="text" id="idChanger" onChange={e => updateTitle(e.target.value)} />
      </label>

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
