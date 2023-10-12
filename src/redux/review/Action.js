import { BASE_API_URL } from "../../config/api";
import {
  CREATE_REVIEW,
  DELETE_REVIEW,
  GET_ALL_REVIEW,
  GET_PRODUCT_REVIEW,
  GET_USER_REVIEW,
} from "./ActionType";

export const createReviewAction = (reviewData) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/reviews/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${reviewData.token}`,
      },
      body: JSON.stringify(reviewData.data),
    });
    const resData = await res.json();
    console.log("create review", resData);
    dispatch({ type: CREATE_REVIEW, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllReviewAction = (token) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/reviews/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = await res.json();
    console.log("all review ", resData);
    dispatch({ type: GET_ALL_REVIEW, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getProductReviewAction = (reviewData) => async (dispatch) => {
  try {
    const res = await fetch(
      `${BASE_API_URL}/api/reviews/${reviewData.productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${reviewData.token}`,
        },
      }
    );
    const resData = await res.json();
    console.log("product review ", resData);
    dispatch({ type: GET_PRODUCT_REVIEW, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getUserReviewAction = (token) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/reviews/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = await res.json();
    console.log("user review ", resData);
    dispatch({ type: GET_USER_REVIEW, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteReviewAction = (reviewData) => async (dispatch) => {
  try {
    const res = await fetch(
      `${BASE_API_URL}/api/reviews/${reviewData.reviewId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${reviewData.token}`,
        },
      }
    );
    const resData = await res.json();
    console.log("delete review ", resData);
    dispatch({ type: DELETE_REVIEW, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};
