import {
  CREATE_ORDER,
  DELETE_ORDER,
  GET_ALL_ORDER,
  GET_ORDER_BY_ID,
  GET_USER_ORDER,
  GET_USER_ORDER_BY_ID,
  UPDATE_ORDER_STATUS,
} from "./ActionType";

const initialState = {
  createOrder: null,
  allOrder: [],
  resOrder: null,
  userOrder: [],
  userOrderById: [],
  updateOrder: null,
  deleteOrder: null,
};

export const orderReducer = (store = initialState, { type, payload }) => {
  if (type === CREATE_ORDER) {
    return { ...store, createOrder: payload };
  } else if (type === GET_ALL_ORDER) {
    return { ...store, allOrder: payload };
  } else if (type === UPDATE_ORDER_STATUS) {
    return { ...store, updateOrder: payload };
  } else if (type === DELETE_ORDER) {
    return { ...store, deleteOrder: payload };
  } else if (type === GET_ORDER_BY_ID) {
    return { ...store, resOrder: payload };
  } else if (type === GET_USER_ORDER) {
    return { ...store, userOrder: payload };
  } else if (type === GET_USER_ORDER_BY_ID) {
    return { ...store, userOrderById: payload };
  }
  return store;
};
