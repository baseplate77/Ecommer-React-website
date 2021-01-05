import React from "react";
import SignIn from "../../componemts/sign-in/SignIn";
import SignUp from "../../componemts/sign-up/SignUp";
import "./sign-in-out.styles.scss";
function SignInOut() {
  return (
    <div className="sign-in-out">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInOut;
