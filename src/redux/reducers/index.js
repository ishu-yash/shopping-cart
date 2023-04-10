import { combineReducers } from "redux";
import titleReducer from "./titleReducer";
import countReducer from "./countReducer";
import totalReducer from "./totalReducer";
import cartReducer from "./cartReducer";
import modalReducer from "./modalReducer";
import { imageReducer } from "./index1";

const rootReducer = combineReducers({
  setModalId: modalReducer,
  setImages: imageReducer,
  getTitle: titleReducer,
  count: countReducer,
  total: totalReducer,
  cart: cartReducer,
});
export default rootReducer;
