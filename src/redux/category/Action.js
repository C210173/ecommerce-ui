import axios from "axios";
import { BASE_API_URL } from "../../config/api";
import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  GET_ALL_CATEGORY,
  UPDATE_CATEGORY,
} from "./ActionType";

export const createCategoryAction = (categoryData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${BASE_API_URL}/api/admin/categories/create`,
      categoryData.data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${categoryData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("create category", resData);
    dispatch({ type: CREATE_CATEGORY, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllCategoryAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/home/category/all`);
    const resData = response.data;
    console.log("all category ", resData);
    dispatch({ type: GET_ALL_CATEGORY, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const updateCategoryAction = (categoryData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${BASE_API_URL}/api/admin/categories/${categoryData.categoryId}/update`,
      categoryData.data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${categoryData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("update category ", resData);
    dispatch({ type: UPDATE_CATEGORY, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteCategoryAction = (categoryData) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `${BASE_API_URL}/api/admin/categories/${categoryData.categoryId}/delete`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${categoryData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("delete category ", resData);
    dispatch({ type: DELETE_CATEGORY, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};
