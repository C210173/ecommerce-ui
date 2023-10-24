import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCT,
  GET_PRODUCT,
  SEARCH_PRODUCT_BY_BRAND,
  SEARCH_PRODUCT_BY_CATEGORY,
  SEARCH_PRODUCT_BY_NAME,
  UPDATE_PRODUCT,
} from "./ActionType";

const initialState = {
  createProduct: null,
  allProduct: [],
  updateProduct: null,
  deleteProduct: null,
  reqProduct: null,
  searchProductByCategory: [],
  searchProductByBrand: [],
  searchProductByName: [],
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
  } else if (type === GET_PRODUCT) {
    return { ...store, reqProduct: payload };
  } else if (type === SEARCH_PRODUCT_BY_CATEGORY) {
    return { ...store, searchProductByCategory: payload };
  } else if (type === SEARCH_PRODUCT_BY_BRAND) {
    return { ...store, searchProductByBrand: payload };
  } else if (type === SEARCH_PRODUCT_BY_NAME) {
    return { ...store, searchProductByName: payload };
  }
  return store;
};
