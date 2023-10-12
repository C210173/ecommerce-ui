import { BASE_API_URL } from "../../config/api";
import {
  CREATE_ORDER,
  DELETE_ORDER,
  GET_ALL_ORDER,
  GET_ORDER_BY_ID,
  GET_USER_ORDER,
  UPDATE_ORDER_STATUS,
} from "./ActionType";

export const createOrderAction = (oderData) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/orders/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${oderData.token}`,
      },
      body: JSON.stringify(oderData.data),
    });
    const resData = await res.json();
    console.log("create order ", resData);
    dispatch({ type: CREATE_ORDER, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllOrderAction = (token) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/orders/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = await res.json();
    console.log("all order ", resData);
    dispatch({ type: GET_ALL_ORDER, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getOrderByIdAction = (orderData) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/orders/${orderData.orderId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${orderData.token}`,
      },
    });
    const resData = await res.json();
    console.log("get order id", resData);
    dispatch({ type: GET_ORDER_BY_ID, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const getUserOrderAction = (token) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/orders/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = await res.json();
    console.log("order of user", resData);
    dispatch({ type: GET_USER_ORDER, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const updateOrderStatusAction = (orderData) => async (dispatch) => {
  try {
    const res = await fetch(
      `${BASE_API_URL}/api/orders/update-status/${orderData.orderId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${orderData.token}`,
        },
        body: JSON.stringify(orderData.data),
      }
    );
    const resData = await res.json();
    console.log("update order status ", resData);
    dispatch({ type: UPDATE_ORDER_STATUS, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteOrderAction = (orderData) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/orders/${orderData.orderId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${orderData.token}`,
      },
    });
    const resData = await res.json();
    console.log("delete order ", resData);
    dispatch({ type: DELETE_ORDER, payload: resData });
  } catch (error) {
    console.log("error", error);
  }
};
