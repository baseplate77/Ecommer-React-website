import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectColletionsPerview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/CollectionPreview";
import "./collection-overview.styles.scss";

function CollectionOverview({ collections, match }) {
  console.log(collections);
  return (
    <div className="collection-overview">
      {collections.map(({ ...otherProps }, inx) => (
        <CollectionPreview key={inx} {...otherProps} match={match} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectColletionsPerview,
});

export default connect(mapStateToProps)(CollectionOverview);
