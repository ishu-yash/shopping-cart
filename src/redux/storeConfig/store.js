import { createStore } from "redux";
import reducer from "../reducers/index";
import createSagaMiddleWare from "redux-saga";
import { compose, applyMiddleware } from "redux";
import saga from "../sagas/index";

const sagaMiddleWare = createSagaMiddleWare();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;
const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleWare), devTools)
);

sagaMiddleWare.run(saga);
export default store;
