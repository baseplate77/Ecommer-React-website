import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/homepage";
import Checkout from "./pages/checkout/Checkout";
import Header from "./componemts/Header/Header";
import Shop from "./pages/Shop/Shop";
import SignInOut from "./pages/sign-in-out/SignInOut";
import { checkSession } from "./redux/user/user.action";
import "./App.css";

const App = ({ checkSession, currentUser }) => {
  useEffect(() => {
    checkSession();
  }, [checkSession]);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInOut />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps, { checkSession })(App);
