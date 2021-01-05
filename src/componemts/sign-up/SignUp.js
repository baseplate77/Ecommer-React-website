import React, { useState } from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import { signUpStart } from "../../redux/user/user.action";
import "./sign-up.styles.scss";

const SignUp = () => {
  const [userDetail, setUserDetail] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password don;t match");
      return;
    }
    signUpStart(email, password, displayName);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };
  const { displayName, email, password, confirmPassword } = userDetail;
  return (
    <div className="sign-up">
      <h2 className="title">I don't have a account</h2>
      <span>sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm password"
        />

        <CustomButton type="submit">sign up</CustomButton>
      </form>
    </div>
  );
};

export default connect(null, { signUpStart })(SignUp);
