import actions from "../actions/actions";

const initial = {
  productInCart: [],
  orders: [],
};
const cartReducer = (state = initial, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return {
        ...state,
        productInCart: state.productInCart.concat(action.payload),
      };
    case actions.SET_CART_ITEM_COUNT:
      const id = action.payload.id;
      const count = action.payload.count;
      const newArray = [...state.productInCart].map((product) => {
        if (product._id === id) {
          return {
            ...product,
            count: count,
          };
        }
        return product;
      });
      return {
        ...state,
        productInCart: newArray,
      };
    case actions.ADD_TO_ORDER:
      return {
        ...state,
        orders: state.orders.concat(action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
