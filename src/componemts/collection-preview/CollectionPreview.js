import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectShopCollections } from "../../redux/shop/shop.selector";
import CollectionItem from "../Collection-item/CollectionItem";
import "./collection-preview.styles.scss";
function CollectionPreview({ title, items, match }) {
  return (
    <div
      className="collection-preview"
      to={`${match.path}/${title.toLowerCase()}`}
    >
      <Link className="title" to={`${match.path}/${title.toLowerCase()}`}>
        {title.toUpperCase()}
      </Link>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionPreview);
