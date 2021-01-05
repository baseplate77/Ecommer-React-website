import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectISCollectionLoaded } from "../../redux/shop/shop.selector";
import WithSpinner from "../../componemts/with-spinner/WithSpinner";
import Collections from "./Collections";

const mapStateToProp = createStructuredSelector({
  isLoading: (state) => !selectISCollectionLoaded(state),
});

const CollectionsWithContainer = compose(
  connect(mapStateToProp),
  WithSpinner
)(Collections);

export default CollectionsWithContainer;
