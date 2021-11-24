import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import loadingStatusReducer from "./loadingStatusReducer"
import loginStatusReducer from "./loginStatusReducer"

export default combineReducers({
  cartReducer,
  loadingStatusReducer,
  loginStatusReducer
})