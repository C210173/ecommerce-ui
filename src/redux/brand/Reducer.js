import {
  CREATE_BRAND,
  DELETE_BRAND,
  GET_ALL_BRAND,
  UPDATE_BRAND,
} from "./ActionType";

const initialState = {
  createBrand: null,
  allBrand: [],
  updateBrand: null,
  deleteBrand: null,
};

export const brandReducer = (store = initialState, { type, payload }) => {
  if (type === CREATE_BRAND) {
    return { ...store, createBrand: payload };
  } else if (type === GET_ALL_BRAND) {
    return { ...store, allBrand: payload };
  } else if (type === UPDATE_BRAND) {
    return { ...store, updateBrand: payload };
  } else if (type === DELETE_BRAND) {
    return { ...store, deleteBrand: payload };
  }
  return store;
};
