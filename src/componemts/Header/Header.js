import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { userSignoutStart } from "../../redux/user/user.action";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import "./Header.styles.scss";

function Header({ user, showDropDown, hideDropDown, userSignoutStart }) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {user ? (
          <div className="option" onClick={() => userSignoutStart()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {showDropDown && <CartDropdown />}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  showDropDown: selectCartHidden,
});

export default connect(mapStateToProps, { userSignoutStart })(Header);
