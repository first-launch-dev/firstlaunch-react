import { types as t } from "../types";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // Register
    case t.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case t.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    
    // Login
    case t.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case t.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
      
    // DEFAULT
    default:
      return state;
  }
};

export default authReducer;
