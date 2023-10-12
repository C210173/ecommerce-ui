import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  GET_ALL_CATEGORY,
  UPDATE_CATEGORY,
} from "./ActionType";

const initialState = {
  createCategory: null,
  allCategory: [],
  updateCategory: null,
  deleteCategory: null,
};

export const categoryReducer = (store = initialState, { type, payload }) => {
  if (type === CREATE_CATEGORY) {
    return { ...store, createCategory: payload };
  } else if (type === GET_ALL_CATEGORY) {
    return { ...store, allCategory: payload };
  } else if (type === UPDATE_CATEGORY) {
    return { ...store, updateCategory: payload };
  } else if (type === DELETE_CATEGORY) {
    return { ...store, deleteCategory: payload };
  }
  return store;
};
