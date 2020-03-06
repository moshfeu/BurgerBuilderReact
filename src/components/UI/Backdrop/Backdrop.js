import React from "react";
import classes from "./Backdrop.css";
const Backdrop = props =>
  props.showBackdrop ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default Backdrop;

// backdrop when clicked should close
// onclick clicked prop up to the lay pass this up to the
// this backdrop has the ability to be clicked and if show is true then it will show the backdrop
// we need the click prop to turn show to false in order for it to disappear.
