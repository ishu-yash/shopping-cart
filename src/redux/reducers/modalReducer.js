import actions from "../actions/actions";
const initial = {
  id: -1,
};
const modalReducer = (state = initial, action) => {
  switch (action.type) {
    case actions.SET_MODAL_ID:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

export default modalReducer;
