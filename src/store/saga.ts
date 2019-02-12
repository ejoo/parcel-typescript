import { takeLatest, call, put } from "redux-saga/effects";
import { setUsersAction } from "./actions";
function* sayHi() {
  try {
    const resposne = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = yield resposne.json();
    yield put(setUsersAction(users));
  } catch (error) {
    console.log("error");
  }
}
export default function* rootSaga() {
  yield takeLatest("CHANGE_LOADING_STATE", sayHi);
}
