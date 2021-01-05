import React, { useState } from "react";
import { connect } from "react-redux";
import "./sign-in.styles.scss";

import { emailSignInStart } from "../../redux/user/user.action";
import { googleSignInStart } from "../../redux/user/user.action";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredential;
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredential({ ...userCredential, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          type="text"
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          label="password"
          handleChange={handleChange}
          value={password}
          type="password"
        />
        <div className="button">
          <CustomButton type="submit">Sing in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignin
          >
            Singin with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);
