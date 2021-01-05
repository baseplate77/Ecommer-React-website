import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverviewWithContainer from "../../componemts/collection-overview/CollectionOverview.container";
import CollectionsWithContainer from "../collections/Collection.container";
import { fetchCollectionStart } from "../../redux/shop/shop.action";

const Shop = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div>
      <Route
        exact
        key={1}
        path={`${match.path}`}
        component={CollectionOverviewWithContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        key={2}
        component={CollectionsWithContainer}
      />
    </div>
  );
};

export default connect(null, { fetchCollectionStart })(Shop);
