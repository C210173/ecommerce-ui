import { BASE_API_URL } from "../../config/api";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCT,
  UPDATE_PRODUCT,
} from "./ActionType";

export const createProductAction = (productData) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/admin/products/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${productData.token}`,
      },
      body: JSON.stringify(productData.data),
    });
    const resData = await res.json();
    console.log("create product", resData);
    dispatch({ type: CREATE_PRODUCT, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllProductAction = (token) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/admin/products/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = await res.json();
    console.log("all product ", resData);
    dispatch({ type: GET_ALL_PRODUCT, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const updateProductAction = (productData) => async (dispatch) => {
  try {
    const res = await fetch(
      `${BASE_API_URL}/api/admin/products/${productData.productId}/update`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${productData.token}`,
        },
        body: JSON.stringify(productData.data),
      }
    );
    const resData = await res.json();
    console.log("update product ", resData);
    dispatch({ type: UPDATE_PRODUCT, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteProductAction = (productData) => async (dispatch) => {
  try {
    const res = await fetch(
      `${BASE_API_URL}/api/admin/products/${productData.productId}/delete`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${productData.token}`,
        },
      }
    );
    const resData = await res.json();
    console.log("delete product ", resData);
    dispatch({ type: DELETE_PRODUCT, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};
