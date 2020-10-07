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
    getImages: () => dispatch(actionCreator(actions.GET_IMAGES)),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setId: (val) => dispatch(actionCreator(actions.SET_MODAL_ID, val)),
    addToCart: (product) =>
      dispatch(actionCreator(actions.ADD_TO_CART, product)),
  };
};

export const mapCartStateToProps = (state) => {
  return {
    productInCart: state.cart.productInCart,
  };
};
