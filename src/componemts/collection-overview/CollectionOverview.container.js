import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { seletIsFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/WithSpinner";
import CollectionOverview from "./CollectionOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: seletIsFetching,
});

export default connect(mapStateToProps)(WithSpinner(CollectionOverview));
