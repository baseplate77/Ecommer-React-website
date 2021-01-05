import { all, call } from "redux-saga/effects";
import { userSaga } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";
import { shopsagas } from "./shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(userSaga), call(cartSagas), call(shopsagas)]);
}
