import { LOGIN, REGISTER, REQ_USER } from "./ActionType";

const initialState = {
  signup: null,
  signin: null,
  reqUser: null,
};

export const authReducer = (store = initialState, { type, payload }) => {
  if (type === REGISTER) {
    return { ...store, signup: payload };
  } else if (type === LOGIN) {
    return { ...store, signin: payload };
  } else if (type === REQ_USER) {
    return { ...store, reqUser: payload };
  }
  return store;
};
