import actions from "../actions/actions";

const initial = {
  count: 0,
};

const countReducer = (state = initial, action) => {
  switch (action.type) {
    case actions.SET_COUNT:
      const result = state.count + action.payload;
      return {
        ...state,
        count: action.payload === 0 ? 0 : result < 0 ? 0 : result,
      };
    default:
      return state;
  }
};

export default countReducer;
