export default function cartReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload]
    case "REMOVE_PRODUCT":
      return state.filter(item => item.id !== action.payload.id)
    default: 
      return state
  }
}