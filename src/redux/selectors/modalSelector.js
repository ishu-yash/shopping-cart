import { createSelector } from "reselect";

const getImages = (state) => state.setImages.images;
const getId = (state) => state.setModalId.id;

export const rootSelector = createSelector(
  getImages,
  getId,
  (images, id) => images.filter((cur) => cur._id === id)[0]
);

const productIncart = (state) => state.cart.productInCart;
export const cartSelector = createSelector(
  productIncart,
  getId,
  (products, id) => {
    if (products === undefined || products.length === 0) return false;
    const index = products.find((product) => product._id === id);
    // console.log("from cart selector", products, id, index);
    if (index === undefined) return false;
    return true;
  }
);
