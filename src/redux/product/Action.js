import axios from "axios";
import { BASE_API_URL } from "../../config/api";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCT,
  UPDATE_PRODUCT,
} from "./ActionType";

export const createProductAction = (productData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${BASE_API_URL}/api/admin/products/create`,
      productData.data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${productData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("create product", resData);
    dispatch({ type: CREATE_PRODUCT, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllProductAction = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/api/admin/products/all`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = response.data;
    console.log("all product ", resData);
    dispatch({ type: GET_ALL_PRODUCT, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const updateProductAction = (productData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${BASE_API_URL}/api/admin/products/${productData.productId}/update`,
      productData.data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${productData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("update product ", resData);
    dispatch({ type: UPDATE_PRODUCT, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteProductAction = (productData) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `${BASE_API_URL}/api/admin/products/${productData.productId}/delete`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${productData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("delete product ", resData);
    dispatch({ type: DELETE_PRODUCT, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};
