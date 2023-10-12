import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCT,
  UPDATE_PRODUCT,
} from "./ActionType";

const initialState = {
  createProduct: null,
  allProduct: [],
  updateProduct: null,
  deleteProduct: null,
};

export const productReducer = (store = initialState, { type, payload }) => {
  if (type === CREATE_PRODUCT) {
    return { ...store, createProduct: payload };
  } else if (type === GET_ALL_PRODUCT) {
    return { ...store, allProduct: payload };
  } else if (type === UPDATE_PRODUCT) {
    return { ...store, updateProduct: payload };
  } else if (type === DELETE_PRODUCT) {
    return { ...store, deleteProduct: payload };
  }
  return store;
};
