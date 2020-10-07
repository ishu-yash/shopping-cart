import { createStore } from "redux";
import reducer from "../reducers/index";
import createSagaMiddleWare from "redux-saga";
import { compose, applyMiddleware } from "redux";
import saga from "../sagas/index";

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleWare.run(saga);
export default store;
