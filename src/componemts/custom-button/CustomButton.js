import React from "react";
import "./custom-button.styles.scss";

function CustomButton({ children, isGoogleSignin, inverted, ...otherProps }) {
  return (
    <button
      className={`${inverted && "inverted"} ${
        isGoogleSignin && "google-sign-in"
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;