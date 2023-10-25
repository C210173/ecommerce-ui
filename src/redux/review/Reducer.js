import {
  CREATE_REVIEW,
  DELETE_REVIEW,
  GET_ALL_REVIEW,
  GET_PRODUCT_REVIEW,
  GET_USER_REVIEW,
  TOP_RATED_PRODUCTS,
} from "./ActionType";

const initialState = {
  createReview: null,
  allReview: [],
  productReview: [],
  userReview: [],
  deleteReview: null,
  topRatedProducts: [],
};

export const reviewReducer = (store = initialState, { type, payload }) => {
  if (type === CREATE_REVIEW) {
    return { ...store, createReview: payload };
  } else if (type === GET_ALL_REVIEW) {
    return { ...store, allReview: payload };
  } else if (type === GET_PRODUCT_REVIEW) {
    return { ...store, productReview: payload };
  } else if (type === GET_USER_REVIEW) {
    return { ...store, userReview: payload };
  } else if (type === DELETE_REVIEW) {
    return { ...store, deleteReview: payload };
  } else if (type === TOP_RATED_PRODUCTS) {
    return { ...store, topRatedProducts: payload };
  }
  return store;
};
