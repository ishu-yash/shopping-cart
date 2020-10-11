import actions from "../actions/actions";

const initial = {
  count: 0,
};

const countReducer = (state = initial, action) => {
  switch (action.type) {
    case actions.SET_COUNT:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

export default countReducer;
