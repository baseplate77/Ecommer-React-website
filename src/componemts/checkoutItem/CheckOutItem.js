import React from "react";
import { connect } from "react-redux";
import { clearCartItem } from "../../redux/cart/cart.action";
import { addItem, removeItem } from "../../redux/cart/cart.action";
import "./checkout-item.styles.scss";

function CheckOutItem({ cartItem, clearCartItem, addItem, removeItem }) {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearCartItem(cartItem)}>
        <span>&#10005;</span>
      </div>
    </div>
  );
}

export default connect(null, { clearCartItem, addItem, removeItem })(
  CheckOutItem
);
