import axios from "axios";
import { BASE_API_URL } from "../../config/api";
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

export const getAllProductAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/home/product/all`);
    const resData = response.data;
    console.log("all product ", resData);
    dispatch({ type: GET_ALL_PRODUCT, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getProductByNameAction = (productName) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/home/product?productName=${productName}`
    );
    const resData = response.data;
    console.log("find product by name", resData);
    dispatch({ type: GET_PRODUCT, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const searchProductByCategoryAction =
  (categoryName) => async (dispatch) => {
    try {
      const response = await axios.get(
        `${BASE_API_URL}/home/product/search/category?keyword=${categoryName}`
      );
      const resData = response.data;
      console.log("find product by category", resData);
      dispatch({ type: SEARCH_PRODUCT_BY_CATEGORY, payload: resData });
    } catch (error) {
      console.log("error", error);
    }
  };

export const searchProductByBrandAction = (brandName) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/home/product/search/brand?keyword=${brandName}`
    );
    const resData = response.data;
    console.log("find product by brand", resData);
    dispatch({ type: SEARCH_PRODUCT_BY_BRAND, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const searchProductByNameAction = (productName) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/home/product/search/name?keyword=${productName}`
    );
    const resData = response.data;
    console.log("find product by name", resData);
    dispatch({ type: SEARCH_PRODUCT_BY_NAME, payload: resData });
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
