import axios from "axios";
import { BASE_API_URL } from "../../config/api";
import {
  CREATE_REVIEW,
  DELETE_REVIEW,
  GET_ALL_REVIEW,
  GET_PRODUCT_REVIEW,
  GET_USER_REVIEW,
  TOP_RATED_PRODUCTS,
} from "./ActionType";

export const createReviewAction = (reviewData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${BASE_API_URL}/api/reviews/create`,
      reviewData.data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${reviewData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("create review", resData);
    dispatch({ type: CREATE_REVIEW, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllReviewAction = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/api/reviews/all`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = response.data;
    console.log("all review ", resData);
    dispatch({ type: GET_ALL_REVIEW, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getProductReviewAction = (productId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/home/product/review/${productId}`
    );
    const resData = response.data;
    console.log("product review ", resData);
    dispatch({ type: GET_PRODUCT_REVIEW, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getTopRatedProductsAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/home/top-rated-products`);
    const resData = response.data;
    console.log("top rated products ", resData);
    dispatch({ type: TOP_RATED_PRODUCTS, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getUserReviewAction = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/api/reviews/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = response.data;
    console.log("user review ", resData);
    dispatch({ type: GET_USER_REVIEW, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteReviewAction = (reviewData) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `${BASE_API_URL}/api/reviews/${reviewData.reviewId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${reviewData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("delete review ", resData);
    dispatch({ type: DELETE_REVIEW, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};
