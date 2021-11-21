const initState = {
  cartList: [],
  openLoading: false,
  loginStatus: JSON.parse(localStorage.loginStatus)
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        cartList: [...state.cartList, action.payload]
      }
    }
    case "REMOVE_PRODUCT": {
      return {
        cartList: state.cartList.filter(item => item.id !== action.payload.id)
      }
    }
    case "SET_OPENLOADING": {
      return {
        openLoading: action.payload
      }
    }
    case "SET_LOGINSTATUS": {
      return {
        loginStatus: JSON.parse(localStorage.loginStatus)
      }
    }
    default:
      return state;
  }
}

export default reducer;