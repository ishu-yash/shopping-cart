import actions from "../actions/actions";
import { orderBy } from "lodash";

const initial = {
  images: [],
  message: "",
  filteredList: [],
  filtersApplied: false,
};

const imageReducer = (state = initial, action) => {
  switch (action.type) {
    case actions.IMAGES_LOAD_SUCCESS:
      return { ...state, images: action.payload, filteredList: action.payload };
    case actions.IMAGES_LOAD_ERROR:
      return { ...state, message: action.payload };
    case actions.SORT_ASC:
      const property = action.payload === 1 ? "rate" : "price";
      return {
        ...state,
        filteredList: orderBy(state.filteredList, [property], "asc"),
        filtersApplied: true,
      };
    case actions.SORT_DESC:
      const prop = action.payload === 1 ? "rate" : "price";
      return {
        ...state,
        filteredList: orderBy(state.filteredList, [prop], "desc"),
        filtersApplied: true,
      };
    case actions.FILTER_BY_SIZE:
      const criteria = action.payload;
      if (criteria === "ALL")
        return {
          ...state,
          filteredList: state.images,
          filtersApplied: true,
        };
      return {
        ...state,
        filteredList: state.filteredList.filter((cur) =>
          cur.availableSizes.includes(criteria)
        ),
        filtersApplied: true,
      };

    case actions.CLEAR_FILTERS:
      return {
        ...(state || {}),
        filteredList: state.images,
        filtersApplied: false,
      };
    default:
      return state;
  }
};

export default imageReducer;
