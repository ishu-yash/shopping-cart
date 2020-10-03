import { combineReducers } from "redux";
import titleReducer from "./titleReducer";

const rootReducer = combineReducers({
  getTitle: titleReducer,
});
export default rootReducer;
