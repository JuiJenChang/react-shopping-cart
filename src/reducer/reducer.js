const initState = {
  cartList: []
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
    default:
      return state;
  }
}

export default reducer;