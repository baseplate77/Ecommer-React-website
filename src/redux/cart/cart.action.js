import { cartActionType } from "./cart.type";

export const toggleCartHidden = () => ({
  type: cartActionType.HIDE_DROPDOWN,
});

export const addItem = (item) => ({
  type: cartActionType.ADD_ITEM,
  payload: item,
});
export const clearCartItem = (item) => ({
  type: cartActionType.CLEAR_CART_ITEM,
  payload: item,
});
export const removeItem = (item) => ({
  type: cartActionType.REMOVE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: cartActionType.CLEAR_CART,
});
