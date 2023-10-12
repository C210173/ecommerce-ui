import { BASE_API_URL } from "../../config/api";
import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  GET_ALL_CATEGORY,
  UPDATE_CATEGORY,
} from "./ActionType";

export const createCategoryAction = (categoryData) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/admin/categories/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${categoryData.token}`,
      },
      body: JSON.stringify(categoryData.data),
    });
    const resData = await res.json();
    console.log("create category", resData);
    dispatch({ type: CREATE_CATEGORY, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllCategoryAction = (token) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/admin/categories/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = await res.json();
    console.log("all category ", resData);
    dispatch({ type: GET_ALL_CATEGORY, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const updateCategoryAction = (categoryData) => async (dispatch) => {
  try {
    const res = await fetch(
      `${BASE_API_URL}/api/admin/categories/${categoryData.categoryId}/update`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${categoryData.token}`,
        },
        body: JSON.stringify(categoryData.data),
      }
    );
    const resData = await res.json();
    console.log("update category ", resData);
    dispatch({ type: UPDATE_CATEGORY, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteCategoryAction = (categoryData) => async (dispatch) => {
  try {
    const res = await fetch(
      `${BASE_API_URL}/api/admin/categories/${categoryData.categoryId}/delete`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${categoryData.token}`,
        },
      }
    );
    const resData = await res.json();
    console.log("delete category ", resData);
    dispatch({ type: DELETE_CATEGORY, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};
