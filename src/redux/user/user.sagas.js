import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionType from "./user.type";
import {
  signInFailure,
  signInSuccess,
  userSignoutSuccess,
  userSignoutFailure,
  setSession,
} from "./user.action";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentuser,
} from "../../firebase/firebase.utils";

export function* setUserSnapshot(user, addtionalData) {
  try {
    const userRef = yield createUserProfileDocument(user, addtionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    console.log(error);
    yield put(signInFailure(error.message));
  }
}

export function* googleSignInStart() {
  try {
    console.log("user saga get called");
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield setUserSnapshot(user);
  } catch (error) {
    console.log(error);
    yield put(signInFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionType.GOOGLE_SIGN_IN_START, googleSignInStart);
}

export function* emailSignInStart({ payload: { email, password } }) {
  try {
    console.log("yess");
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield setUserSnapshot(user);
  } catch (error) {
    console.log(error);
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionType.EMAIL_SIGN_IN_START, emailSignInStart);
}

export function* userSignOut() {
  try {
    yield auth.signOut();
    yield put(userSignoutSuccess());
  } catch (error) {
    yield put(userSignoutFailure(error.message));
  }
}

export function* onUserSignOut() {
  yield takeLatest(userActionType.USER_SIGN_OUT_START, userSignOut);
}

function* signUpStart({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield setUserSnapshot(user, displayName);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onSignUpStart() {
  yield takeLatest(userActionType.SIGN_UP_START, signUpStart);
}

export function* sessionCheck() {
  const userAuth = yield call(getCurrentuser);
  console.log(userAuth);
  if (userAuth) yield put(setSession(userAuth));
}

export function* onCheckSession() {
  yield takeLatest(userActionType.CHECK_SEESION, sessionCheck);
}
export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onUserSignOut),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onCheckSession),
  ]);
}
