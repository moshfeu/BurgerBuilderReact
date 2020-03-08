import React from "react";
import classes from "./DrawToggle.css";
const DrawToggle = props => (
  <div className={classes.DrawerToggle} onClick={props.onMenuClick}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawToggle;
// needs to have an on click function to be clicked
// needs to always be visible
// on click of th menu button open sidedraw on click close sidedraw.
