import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import { addItem } from "../../redux/cart/cart.action";
import "./collection-item.styles.scss";
function CollectionItem({ item, addItem }) {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Go To cart
      </CustomButton>
    </div>
  );
}

export default connect(null, { addItem })(CollectionItem);
