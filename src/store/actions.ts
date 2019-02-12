export const postsLoadingAction = () => {
  return {
    type: "CHANGE_LOADING_STATE"
  };
};

export const changeUsernameAction = name => {
  return {
    type: "CHANGE_USERNAME",
    payload: name
  };
};

export const setUsersAction = users => {
  return {
    type: "ADD_USERS",
    payload: users
  };
};
