import axios from "axios"; // Import Axios
import { BASE_API_URL } from "../../config/api";
import {
  CREATE_BRAND,
  DELETE_BRAND,
  GET_ALL_BRAND,
  UPDATE_BRAND,
} from "./ActionType";

export const createBrandAction = (brandData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${BASE_API_URL}/api/admin/brands/create`,
      brandData.data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${brandData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("create brand ", resData);
    dispatch({ type: CREATE_BRAND, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllBrandAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/home/brand/all`);
    const resData = response.data;
    console.log("all brands ", resData);
    dispatch({ type: GET_ALL_BRAND, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const updateBrandAction = (brandData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${BASE_API_URL}/api/admin/brands/${brandData.brandId}/update`,
      brandData.data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${brandData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("update brand ", resData);
    dispatch({ type: UPDATE_BRAND, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteBrandAction = (brandData) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `${BASE_API_URL}/api/admin/brands/${brandData.brandId}/delete`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${brandData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("delete brand ", resData);
    dispatch({ type: DELETE_BRAND, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};
