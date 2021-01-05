import userActionType from "./user.type";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionType.USER_SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
      };
    case userActionType.USER_SIGN_OUT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case userActionType.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
      };
    case userActionType.SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case userActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
