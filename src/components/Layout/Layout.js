import React from "react";
import Aux from "../../hoc/Aux";

import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => (
  <Aux>
    <SideDrawer />
    <Toolbar />
    <main className={classes.mainContent}> {props.children} </main>
  </Aux>
);
export default layout;
