import React, { useState } from "react";
import Aux from "../../hoc/Aux";

import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => {
  const [showBackdrop, setShowBackdrop] = useState("true");
  const [showSideDrawer, setShowSideDrawer] = useState("false");

  return (
    <Aux>
      <SideDrawer
        showSideDrawer={showSideDrawer} // true or false
        toggleSideDrawer={() => {
          setShowBackdrop(!showBackdrop); // triggers true or false state change
          setShowSideDrawer(!showSideDrawer); // triggers true or false state change
        }}
        showBackdrop={showBackdrop} // true or false
        toggleBackdrop={() => {
          setShowBackdrop(!showBackdrop); // triggers true or false state change
          setShowSideDrawer(!showSideDrawer); // triggers true or false state change
        }}
      />
      <Toolbar />
      <main className={classes.mainContent}> {props.children} </main>
    </Aux>
  );
};
export default layout;
// NOTES:
// want the clicked prop to close the side sideDrawer
// try and use use State hook to open and close the backdrop here, see if it works
// there is a prop called show in the backdrop component that needs to be clicked to be visible
// if show is equal to true it's visible if it's equal to false it's not
