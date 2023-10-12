import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./auth/Reducer";
import thunk from "redux-thunk";
import { brandReducer } from "./brand/Reducer";
import { categoryReducer } from "./category/Reducer";
import { productReducer } from "./product/Reducer";
import { reviewReducer } from "./review/Reducer";
import { userReducer } from "./user/Reducer";
import { cartReducer } from "./cart/Reducer";
import { orderReducer } from "./order/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  brand: brandReducer,
  category: categoryReducer,
  product: productReducer,
  review: reviewReducer,
  user: userReducer,
  cart: cartReducer,
  order: orderReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
