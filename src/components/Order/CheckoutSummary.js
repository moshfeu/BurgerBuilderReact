import React from "react";
import Burger from "../Burger/Burger";
import Button from "../UI/Button/Button";

import classes from "./CheckoutSummary.css";


const CheckoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>mmm... nearly there!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      {props.showCheckoutMessage && (
        <p>
          Click <b>continue</b> to fill in your delivery details:
        </p>
      )}
      <Button clicked={props.checkoutCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.checkoutContinued} btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};
export default CheckoutSummary;

// added new prop which can controls whether text is visible or not "showCheckoutMessage"
// if "showCheckoutMessage" is  passed to checkout component added state to state as true  then used
// function handler in checkout file to switch state to false when checkoutContinued is clicked.
