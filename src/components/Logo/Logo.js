import React from "react";
import burgerLogo from "../../components/assets/Images/burgerlogo.png";
import classes from "./Logo.css";
const Logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} style={{ height: props.height }} />
  </div>
);

export default Logo;
