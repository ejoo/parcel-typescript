import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./saga";

const initialState = {
  username: "ejaz",
  loading: false,
  users: [],

  Posts: {
    posts: [],
    loading: false
  },

  Home: {
    title: "Welcome to Redux",
    users: ["nosheen", "shaheen", "aliya"]
  }
};

const c = {
  JL: "CHANGE_LOADING_STATE"
};
// 1. state, 2. actions, 3. reducer
function reducer(state = initialState, action) {
  if (action.type === c.JL) {
    const newState = { ...state, loading: !state.loading };
    return newState;
  } else if (action.type === "CHANGE_USERNAME") {
    return { ...state, username: action.payload };
  } else if (action.type === "ADD_USERS") {
    return { ...state, users: action.payload };
  }
  return state;
}

const sagaMiddleWare: any = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

export default store;
