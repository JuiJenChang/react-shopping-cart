import { combineReducers } from "redux"
import cart from "./cart"
import loadingStatus from "./loadingStatus"
import loginStatus from "./loginStatus"

export default combineReducers({
  cart,
  loadingStatus,
  loginStatus
})