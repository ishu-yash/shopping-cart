import actions from "../actions/actions";
import actionCreator from "../actions/actionCreator";
import {
  takeLatest,
  all,
  put,
  call,
  take,
  takeEvery,
  fork,
} from "redux-saga/effects";
import data from "../../data";
import Axios from "axios";

const BaseUrl =
  "https://api.unsplash.com/topics/fashion/photos?client_id=rCkcRB4aESzoCIuIyoMdT-AB7FbjPZBgIxaTk5R0jeo";
function* workerSaga() {
  try {
    const response = yield Axios.get(BaseUrl);
    const newData = data.map((cur, index) => ({
      ...cur,
      image: response.data[index].urls.regular,
    }));
    yield put(actionCreator(actions.IMAGES_LOAD_SUCCESS, newData));
  } catch {
    yield put(actionCreator(actions.IMAGES_LOAD_ERROR, "Data not fetched!"));
  }
}

function* watchSaga() {
  yield takeLatest(actions.GET_IMAGES, workerSaga);
}

function* workerAddToCartSaga(action) {
  yield put(actionCreator(actions.ADD_TO_CART, action.payload));
}
function* workerCountSaga(action) {
  yield put(actionCreator(actions.SET_COUNT, action.payload.value));
  yield put(actionCreator(actions.SET_TOTAL, action.payload.price));
}

function* watchAddToCartSaga() {
  while (true) {
    const action1 = yield take(actions.ASYNC_ADD_TO_CART);
    yield call(workerAddToCartSaga, action1);
  }
}

function* watchCountSaga() {
  yield takeEvery(actions.ASYNC_SET_COUNT, workerCountSaga);
}

function* workerDeleteSaga(action) {
  yield put(actionCreator(actions.DELETE_ITEM_FROM_ORDER, action.payload.id));
}

function* watchCartDeleteSaga() {
  yield takeLatest(actions.ASYNC_DELETE_ITEM_FROM_ORDER, workerDeleteSaga);
}
export default function* rootSaga() {
  yield all([
    fork(watchSaga),
    fork(watchAddToCartSaga),
    fork(watchCountSaga),
    fork(watchCartDeleteSaga),
  ]);
}
