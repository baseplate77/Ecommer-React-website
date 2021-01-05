import { all, put, takeLatest, call } from "redux-saga/effects";
import userActionType from "../user/user.type";
import { clearCart } from "./cart.action";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutClearCart() {
  yield takeLatest(userActionType.USER_SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutClearCart)]);
}
