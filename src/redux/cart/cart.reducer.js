import { cartActionType } from "./cart.type";
import { addToCartItem, removeFromCartItem } from "./cart.util";
const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.HIDE_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addToCartItem(state.cartItems, action.payload),
      };
    case cartActionType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeFromCartItem(state.cartItems, action.payload),
      };
    case cartActionType.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartActionType.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
