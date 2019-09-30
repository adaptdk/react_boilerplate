import React from 'react';
import Types from 'RootTypes';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// Actions
import { actions as fooActions } from 'state/ducks/foo';

const mapStateToProps = (state: Types.RootState) => ({
  title: state.foo.title,
  elements: state.foo.elements,
});

const mapDispatchToProps = (dispatch: Function) => ({
  addElement: (value: string): Dispatch => dispatch(fooActions.addElement(value)),
  updateTitle: (value: string): Dispatch => dispatch(fooActions.updateTitle(value)),
  deleteElement: (): Dispatch => dispatch(fooActions.deleteElement()),
});

// Collecting the props into one type you can refer to.
type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {};

const Frontpage: React.FC<Props> = ({
  elements,
  title,
  updateTitle,
  addElement,
  deleteElement,
}) => (
  <div className="page page-frontpage">
    <h1>Home {title}</h1>

    <label htmlFor="idChanger">
      Change the title
      <input
        type="text"
        id="idChanger"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): Dispatch => updateTitle(e.target.value)}
      />
    </label>

    <button type="button" onClick={(): Dispatch => addElement('1')}>
      1
    </button>
    <button type="button" onClick={(): Dispatch => addElement('2')}>
      2
    </button>
    <button type="button" onClick={(): Dispatch => addElement('3')}>
      3
    </button>

    <button type="button" onClick={deleteElement}>
      Delete the last added
    </button>

    {elements &&
      elements.map((e) => (
        <p key={e.id}>
          {e.title} {e.id}
        </p>
      ))}
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Frontpage);
