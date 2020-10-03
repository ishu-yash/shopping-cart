import actions from "../actions/actions";
import actionCreator from "../actions/actionCreator";

export const mapHeaderStateToProps = (state) => {
  return {
    title: state.getTitle.title,
  };
};

export const mapHeaderDispatchToProps = (dispatch) => {
  return {
    setTitle: (text) => dispatch(actionCreator(actions.SET_TITLE, text)),
  };
};
