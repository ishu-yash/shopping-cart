import actions from "../actions/actions";
import actionCreator from "../actions/actionCreator";
import { takeLatest, all, put } from "redux-saga/effects";
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

export default function* rootSaga() {
  yield all([watchSaga()]);
}
