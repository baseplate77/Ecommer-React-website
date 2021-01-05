import userActionType from "./user.type";

export const setCurrentUser = (user) => ({
  type: userActionType.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: userActionType.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: userActionType.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (errorMessage) => ({
  type: userActionType.SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const emailSignInStart = (email, password) => ({
  type: userActionType.EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const userSignoutStart = () => ({
  type: userActionType.USER_SIGN_OUT_START,
});
export const userSignoutSuccess = () => ({
  type: userActionType.USER_SIGN_OUT_SUCCESS,
});
export const userSignoutFailure = (error) => ({
  type: userActionType.USER_SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (email, password, displayName) => ({
  type: userActionType.SIGN_UP_START,
  payload: { email, password, displayName },
});

export const checkSession = () => ({
  type: userActionType.CHECK_SEESION,
});

export const setSession = (user) => ({
  type: userActionType.SET_SEESION,
  payload: user,
});
