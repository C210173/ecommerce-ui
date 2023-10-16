import axios from "axios";
import { BASE_API_URL } from "../../config/api";
import {
  CREATE_ORDER,
  DELETE_ORDER,
  GET_ALL_ORDER,
  GET_ORDER_BY_ID,
  GET_USER_ORDER,
  UPDATE_ORDER_STATUS,
} from "./ActionType";

export const createOrderAction = (orderData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${BASE_API_URL}/api/orders/create`,
      orderData.data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${orderData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("create order ", resData);
    dispatch({ type: CREATE_ORDER, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllOrderAction = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/api/orders/all`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = response.data;
    console.log("all order ", resData);
    dispatch({ type: GET_ALL_ORDER, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getOrderByIdAction = (orderData) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/api/orders/${orderData.orderId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${orderData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("get order id", resData);
    dispatch({ type: GET_ORDER_BY_ID, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getUserOrderAction = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/api/orders/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = response.data;
    console.log("order of user", resData);
    dispatch({ type: GET_USER_ORDER, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const updateOrderStatusAction = (orderData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${BASE_API_URL}/api/orders/update-status/${orderData.orderId}`,
      orderData.data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${orderData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("update order status ", resData);
    dispatch({ type: UPDATE_ORDER_STATUS, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteOrderAction = (orderData) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `${BASE_API_URL}/api/orders/${orderData.orderId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${orderData.token}`,
        },
      }
    );
    const resData = response.data;
    console.log("delete order ", resData);
    dispatch({ type: DELETE_ORDER, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};
