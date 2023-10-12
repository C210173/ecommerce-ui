import { BASE_API_URL } from "../../config/api";
import {
  ADD_PRODUCT_TO_CART,
  CLEAR_CART,
  DELETE_ITEM_FROM_CART,
  GET_PRODUCTS_FROM_CART,
  UPDATE_CART_ITEM,
} from "./ActionType";

export const addToCartAction = (cartData) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/carts/add-item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cartData.token}`,
      },
      body: JSON.stringify(cartData.data),
    });
    const resData = await res.json();
    console.log("add product to cart ", resData);
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getProductsFromCartAction = (token) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/carts/get-cart-items`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = await res.json();
    console.log("all product from cart ", resData);
    dispatch({ type: GET_PRODUCTS_FROM_CART, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const updateCartItemAction = (cartData) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/carts/update-item`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cartData.token}`,
      },
      body: JSON.stringify(cartData.data),
    });
    const resData = await res.json();
    console.log("update cart item ", resData);
    dispatch({ type: UPDATE_CART_ITEM, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteItemFromCartAction = (cartData) => async (dispatch) => {
  try {
    const res = await fetch(
      `${BASE_API_URL}/api/carts/delete-item/${cartData.productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cartData.token}`,
        },
      }
    );
    const resData = await res.json();
    console.log("delete cart item ", resData);
    dispatch({ type: DELETE_ITEM_FROM_CART, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const clearCartAction = (token) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/carts/clear-cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = await res.json();
    console.log("clear cart", resData);
    dispatch({ type: CLEAR_CART, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};
