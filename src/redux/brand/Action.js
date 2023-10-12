import { BASE_API_URL } from "../../config/api";
import {
  CREATE_BRAND,
  DELETE_BRAND,
  GET_ALL_BRAND,
  UPDATE_BRAND,
} from "./ActionType";

export const createBrandAction = (brandData) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/admin/brands/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${brandData.token}`,
      },
      body: JSON.stringify(brandData.data),
    });
    const resData = await res.json();
    console.log("create brand ", resData);
    dispatch({ type: CREATE_BRAND, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllBrandAction = (token) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/admin/brands/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = await res.json();
    console.log("all brands ", resData);
    dispatch({ type: GET_ALL_BRAND, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const updateBrandAction = (brandData) => async (dispatch) => {
  try {
    const res = await fetch(
      `${BASE_API_URL}/api/admin/brands/${brandData.brandId}/update`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${brandData.token}`,
        },
        body: JSON.stringify(brandData.data),
      }
    );
    const resData = await res.json();
    console.log("update brand ", resData);
    dispatch({ type: UPDATE_BRAND, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteBrandAction = (brandData) => async (dispatch) => {
  try {
    const res = await fetch(
      `${BASE_API_URL}/api/admin/brands/${brandData.brandId}/delete`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${brandData.token}`,
        },
      }
    );
    const resData = await res.json();
    console.log("delete brand ", resData);
    dispatch({ type: DELETE_BRAND, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};
