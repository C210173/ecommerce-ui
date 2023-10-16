import axios from "axios";
import { BASE_API_URL } from "../../config/api";
import { LOGIN, LOGOUT, REGISTER, REQ_USER } from "./ActionType";

export const registerAction = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/auth/signup`, data);
    const resData = response.data;
    console.log("register ", resData);

    if (resData.jwt) {
      dispatch({ type: REGISTER, payload: resData });
    }
    return resData;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const loginAction = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/auth/signin`, data);
    const resData = response.data;
    console.log("login ", resData);
    if (resData.jwt) {
      localStorage.setItem("token", resData.jwt);
      dispatch({ type: LOGIN, payload: resData });
    }
    return resData;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const getUserAction = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = response.data;
    console.log("current user ", resData);
    dispatch({ type: REQ_USER, payload: resData });
    return resData;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const logoutAction = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT, payload: null });
  dispatch({ type: REQ_USER, payload: null });
};
