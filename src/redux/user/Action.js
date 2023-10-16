import axios from "axios";
import { BASE_API_URL } from "../../config/api";
import {
  CHANGE_PASSWORD,
  CHANGE_ROLE_USER,
  DELETE_ACCOUNT,
  GET_ALL_USER,
  UPDATE_USER,
} from "./ActionType";

export const updateUserAction = (userData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${BASE_API_URL}/api/users/profile`,
      userData.data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("update user ", resData);
    dispatch({ type: UPDATE_USER, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const changeRoleUserAction = (userData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${BASE_API_URL}/api/users/change-role`,
      userData.data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("change role ", resData);
    dispatch({ type: CHANGE_ROLE_USER, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllUserAction = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/api/users/all`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = response.data;
    console.log("all user ", resData);
    dispatch({ type: GET_ALL_USER, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

// Thay đổi changePasswordAction
export const changePasswordAction =
  (token, currentPassword, newPassword) => async (dispatch) => {
    try {
      const response = await axios.put(
        `${BASE_API_URL}/api/users/change-password`,
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const resData = response.data;
      console.log("change password", resData);
      dispatch({ type: CHANGE_PASSWORD, payload: resData });
    } catch (error) {
      console.error("Error changing password", error);
    }
  };

export const deleteAccountAction = (userData) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `${BASE_API_URL}/api/users/delete-account/${userData.userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("delete account ", resData);
    dispatch({ type: DELETE_ACCOUNT, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};
