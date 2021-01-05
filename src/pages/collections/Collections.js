import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../../componemts/Collection-item/CollectionItem";
import "./collections.styles.scss";

function Collections({ collection }) {
  console.log(collection);
  const { title, items } = collection;
  return (
    <div className="collections">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collections);
