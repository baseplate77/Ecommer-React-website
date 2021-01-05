import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckOutItem from "../../componemts/checkoutItem/CheckOutItem";
import { selectTotalCartItemPrice } from "../../redux/cart/cart.selector";
import { selectCartItems } from "../../redux//cart/cart.selector";
import StripCheckoutButton from "../../componemts/stripe-checkout/stripCheckout";
import "./checkout.styles.scss";

function Checkout({ cartItems, totalPrice }) {
  console.log(cartItems);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length !== 0 ? (
        cartItems.map((cartItem) => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <div className="empty-cart-message">
          <span>You have no item in your cart</span>
        </div>
      )}
      <div className="total">TOTAL : ${totalPrice}</div>
      <div style={{ color: "red", padding: "20px" }}>
        *** card : 4242 4242 4242 4242 month : 1/20 cvc : 123 ****
      </div>
      <StripCheckoutButton price={totalPrice} />
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalCartItemPrice,
});
export default connect(mapStateToProps)(Checkout);
