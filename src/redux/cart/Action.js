import axios from "axios";
import { BASE_API_URL } from "../../config/api";
import {
  ADD_PRODUCT_TO_CART,
  CLEAR_CART,
  DELETE_ITEM_FROM_CART,
  GET_CART,
  GET_PRODUCTS_FROM_CART,
  UPDATE_CART_ITEM,
} from "./ActionType";

export const addToCartAction = (cartData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${BASE_API_URL}/api/carts/add-item`,
      cartData.data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cartData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("add product to cart ", resData);
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getProductsFromCartAction = (token) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/api/carts/get-cart-items`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const resData = response.data;
    console.log("all product from cart ", resData);
    dispatch({ type: GET_PRODUCTS_FROM_CART, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getCartAction = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/api/carts/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = response.data;
    console.log("cart ", resData);
    dispatch({ type: GET_CART, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const updateCartItemAction = (cartData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${BASE_API_URL}/api/carts/update-item`,
      cartData.data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cartData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("update cart item ", resData);
    dispatch({ type: UPDATE_CART_ITEM, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteItemFromCartAction = (cartData) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `${BASE_API_URL}/api/carts/delete-item/${cartData.productId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cartData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("delete cart item ", resData);
    dispatch({ type: DELETE_ITEM_FROM_CART, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const clearCartAction = (token) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `${BASE_API_URL}/api/carts/clear-cart`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const resData = response.data;
    console.log("clear cart", resData);
    dispatch({ type: CLEAR_CART, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};
