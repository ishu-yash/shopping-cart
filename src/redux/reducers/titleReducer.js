import actions from "../actions/actions";

const initialValue = {
  title: "",
};
const titleReducer = (state = initialValue, action) => {
  switch (action.type) {
    case actions.SET_TITLE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export default titleReducer;
