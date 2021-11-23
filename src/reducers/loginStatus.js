export default function loginStatus(state = false, action) {
  localStorage.setItem('loginStatus', action.payload)
  switch (action.type) {
    case "SET_LOGINSTATUS":
      return state = localStorage.loginStatus && JSON.parse(localStorage.loginStatus)
    default: 
      return state
  }
}