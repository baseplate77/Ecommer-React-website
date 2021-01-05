export const addToCartItem = (cartItems, cartItemToAdd) => {
  const existCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeFromCartItem = (cartItems, CartItemToRemove) => {
  const existCartItem = cartItems.find(
    (cartItem) => cartItem.id === CartItemToRemove.id
  );
  if (existCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== CartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === CartItemToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
