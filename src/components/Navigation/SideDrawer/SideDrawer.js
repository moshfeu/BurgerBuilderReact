import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

import classes from "./SideDrawer.css";

const SideDrawer = props => {
  //... css will go here
  return (
    <Aux>
      <Backdrop show={props.showBackdrop} clicked={props.closeBackdrop} />
      <div className={classes.SideDrawer}>
        <Logo height="30%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
