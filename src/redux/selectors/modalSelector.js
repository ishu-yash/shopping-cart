import { createSelector } from "reselect";

const getImages = (state) => state.setImages.images;
const getId = (state) => state.setModalId.id;

const rootSelector = createSelector(
  getImages,
  getId,
  (images, id) => images.filter((cur) => cur._id === id)[0]
);

export default rootSelector;
