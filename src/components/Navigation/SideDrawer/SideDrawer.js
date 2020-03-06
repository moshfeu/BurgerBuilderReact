import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

import classes from "./SideDrawer.css";

const SideDrawer = props => {
  // ... css will go here
  // let attachedClasses = [classes.SideDrawer, classes.Close];
  // if (props.showBackdrop) {
  //   attachedClasses = [classes.SideDrawer, classes.Open];
  // }
  return (
    <Aux>
      <Backdrop
        showBackdrop={props.showBackdrop}
        clicked={props.toggleBackdrop}
      />
      {props.showSideDrawer && (
        <div onClick={props.toggleSideDrawer} className={classes.SideDrawer}>
          <div className={classes.Logo}>
            {" "}
            <Logo />
          </div>

          <nav>
            <NavigationItems />
          </nav>
        </div>
      )}
    </Aux>
  );
};

export default SideDrawer;
//if this sidedrawer prop is true - boolean true show the side drawer
