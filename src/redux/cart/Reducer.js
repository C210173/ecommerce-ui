import {
  ADD_PRODUCT_TO_CART,
  CLEAR_CART,
  DELETE_ITEM_FROM_CART,
  GET_PRODUCTS_FROM_CART,
  UPDATE_CART_ITEM,
} from "./ActionType";

const initialState = {
  addToCart: null,
  productsFromCart: [],
  updateCartItem: null,
  deleteCartItem: null,
  clearCart: null,
};

export const cartReducer = (store = initialState, { type, payload }) => {
  if (type === ADD_PRODUCT_TO_CART) {
    return { ...store, addToCart: payload };
  } else if (type === GET_PRODUCTS_FROM_CART) {
    return { ...store, productsFromCart: payload };
  } else if (type === UPDATE_CART_ITEM) {
    return { ...store, updateCartItem: payload };
  } else if (type === DELETE_ITEM_FROM_CART) {
    return { ...store, deleteCartItem: payload };
  } else if (type === CLEAR_CART) {
    return { ...store, clearCart: payload };
  }
  return store;
};
