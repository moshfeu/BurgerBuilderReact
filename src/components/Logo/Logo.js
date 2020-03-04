import React from "react";
import burgerLogo from "../../components/assets/Images/burgerlogo.png";
import classes from "./Logo.css";
const Logo = () => (
  <div className={classes.Logo}>
    {" "}
    <img src={burgerLogo} />
  </div>
);

export default Logo;
