import {
  CHANGE_PASSWORD,
  CHANGE_ROLE_USER,
  DELETE_ACCOUNT,
  GET_ALL_USER,
  UPDATE_USER,
} from "./ActionType";

const initialState = {
  updateUser: null,
  changeRoleUser: null,
  allUser: [],
  changePassword: null,
  deleteAccount: null,
};

export const userReducer = (store = initialState, { type, payload }) => {
  if (type === UPDATE_USER) {
    return { ...store, updateUser: payload };
  } else if (type === CHANGE_ROLE_USER) {
    return { ...store, changeRoleUser: payload };
  } else if (type === GET_ALL_USER) {
    return { ...store, allUser: payload };
  } else if (type === CHANGE_PASSWORD) {
    return { ...store, changePassword: payload };
  } else if (type === DELETE_ACCOUNT) {
    return { ...store, deleteAccount: payload };
  }
  return store;
};
