import StripeCheckout from "react-stripe-checkout";
import React from "react";
import axios from "axios";

function StripCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishkey =
    "pk_test_51I1mXrAWzQu6so15HdEebzKv65Cu1BAU4rpnMWFbvkLjdI2gdZh4jra436Iu5kM0aI50p3KvJomOGH0kjssoTucF00pZXeBVGa";

  const ontoken = (token) => {
    // axios({
    //   baseURL: "http://localhost:5000",
    //   url: "payment",
    //   method: "post",
    //   data: {
    //     amount: priceForStripe,
    //     token: token,
    //   },
    // })
    //   .then((response) => {
    //     alert("succesful payment");
    //   })
    //   .catch((error) => {
    //     console.log("Payment Error: ", error);
    //     alert(
    //       "There was an issue with your payment! Please make sure you use the provided credit card."
    //     );
    //   });
  };

  return (
    <StripeCheckout
      label="pay Now"
      name="Crwn Colthing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`your total price is $${price}`}
      panelLabel="pay Now"
      amount={priceForStripe}
      stripeKey={publishkey}
      token={ontoken}
    />
  );
}

export default StripCheckoutButton;
