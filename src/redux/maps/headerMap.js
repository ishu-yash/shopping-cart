import actions from "../actions/actions";
import actionCreator from "../actions/actionCreator";
import {
  rootSelector,
  cartSelector,
} from "../../redux/selectors/modalSelector";

export const mapHeaderStateToProps = (state) => {
  return {
    title: state.getTitle.title,
    count: state.count.count,
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
      dispatch(actionCreator(actions.ASYNC_ADD_TO_CART, product)),
    setCount: (val) => dispatch(actionCreator(actions.ASYNC_SET_COUNT, val)),
  };
};

export const mapCartDispatchToProps = (dispatch) => {
  return {
    setCount: (val) => dispatch(actionCreator(actions.ASYNC_SET_COUNT, val)),
  };
};

export const mapCartStateToProps = (state) => {
  return {
    productInCart: state.cart.productInCart,
    total: state.total.total,
  };
};

export const mapStateToProps = (state) => {
  return {
    id: state.setModalId.id,
    product: rootSelector(state),
    check: cartSelector(state),
  };
};
