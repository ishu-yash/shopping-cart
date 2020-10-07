import actions from "../actions/actions";
import { orderBy } from "lodash";

const initial = {
  images: [],
  message: "",
  filteredList: [],
};

const imageReducer = (state = initial, action) => {
  switch (action.type) {
    case actions.IMAGES_LOAD_SUCCESS:
      return { ...state, images: action.payload };
    case actions.IMAGES_LOAD_ERROR:
      return { ...state, message: action.payload };
    case actions.SORT_ASC:
      const property = action.payload === 1 ? "rate" : "price";
      return {
        ...state,
        images: orderBy(state.images, [property], "asc"),
      };
    case actions.SORT_DESC:
      const prop = action.payload === 1 ? "rate" : "price";
      return {
        ...state,
        images: orderBy(state.images, [prop], "desc"),
      };
    case actions.FILTER_BY_SIZE:
      const criteria = action.payload;
      if (criteria === "ALL")
        return {
          ...state,
          filteredList: [],
        };
      return {
        ...state,
        filteredList: state.images.filter((cur) =>
          cur.availableSizes.includes(criteria)
        ),
      };
    default:
      return state;
  }
};

export default imageReducer;
