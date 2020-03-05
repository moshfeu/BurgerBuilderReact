import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";

const SideDrawer = () => {
  //... css will go here
  return (
    <div className={classes.SideDrawer}>
      <Logo height="30%" />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
