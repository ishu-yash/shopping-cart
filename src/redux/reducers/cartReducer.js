import actions from "../actions/actions";

const initial = {
  productInCart: [],
};
const cartReducer = (state = initial, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return {
        ...state,
        productInCart: state.productInCart.concat(action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
