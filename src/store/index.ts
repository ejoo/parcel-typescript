import { createStore } from "redux";

const initialState = {
  username: "ejaz",
  loading: false,

  Posts: {
    posts: [],
    loading: false
  },

  Home: {
    title: "Welcome to Redux",
    users: ["nosheen", "shaheen", "aliya"]
  }
};

// 1. state, 2. actions, 3. reducer
function reducer(state = initialState, action) {
  if (action.type === "CHANGE_LOADING_STATE") {
    const newState = { ...state, loading: !state.loading };
    return newState;
  } else if (action.type === "CHANGE_USERNAME") {
    return { ...state, username: action.payload };
  }
  return state;
}

const devTool =
  window["__REDUX_DEVTOOLS_EXTENSION__"] &&
  window["__REDUX_DEVTOOLS_EXTENSION__"]();
const store = createStore(reducer, devTool);

export default store;
