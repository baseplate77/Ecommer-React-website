import { createSelector } from "reselect";

const selecteCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selecteCart],
  (cart) => cart.cartItems
);
export const selectCartHidden = createSelector(
  [selecteCart],
  (cart) => cart.hidden
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((a, cartItem) => a + cartItem.quantity, 0)
);
export const selectTotalCartItemPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumaticePrice, cartItem) =>
        accumaticePrice + cartItem.quantity * cartItem.price,
      0
    )
);
