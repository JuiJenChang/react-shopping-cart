export default function loadingStatus(state = false, action) {
  switch (action.type) {
    case "SET_OPENLOADING":
      return state = action.payload
    default: 
      return state
  }
}