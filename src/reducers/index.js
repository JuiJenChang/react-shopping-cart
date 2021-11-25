import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import loadingStatusReducer from "./loadingStatusReducer";

export default combineReducers({
  cartReducer,
  loadingStatusReducer
})