import actions from "../actions/actions";

const initial = {
  total: 0.0,
};

const totalReducer = (state = initial, action) => {
  switch (action.type) {
    case actions.SET_TOTAL:
      return {
        ...state,
        total: action.payload === 0.0 ? 0.0 : state.total + action.payload,
      };
    default:
      return state;
  }
};

export default totalReducer;
