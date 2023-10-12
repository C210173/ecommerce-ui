import { BASE_API_URL } from "../../config/api";
import {
  CHANGE_PASSWORD,
  DELETE_ACCOUNT,
  GET_ALL_USER,
  UPDATE_USER,
} from "./ActionType";

export const updateUserAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/users/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      body: JSON.stringify(data.data),
    });
    const resData = await res.json();
    console.log("update user ", resData);
    dispatch({ type: UPDATE_USER, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllUserAction = (token) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/users/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = await res.json();
    console.log("all user ", resData);
    dispatch({ type: GET_ALL_USER, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const changePasswordAction =
  (token, currentPassword, newPassword) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_API_URL}/api/users/change-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const resData = await res.json();
      console.log("change password", resData);
      dispatch({ type: CHANGE_PASSWORD, payload: resData });
    } catch (error) {
      console.error("Error changing password", error);
    }
  };

export const deleteAccountAction = (userData) => async (dispatch) => {
  try {
    const res = await fetch(
      `${BASE_API_URL}/api/users/delete-account/${userData.userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );
    const resData = await res.json();
    console.log("delete account ", resData);
    dispatch({ type: DELETE_ACCOUNT, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};
