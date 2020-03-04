import React from "react";
import Aux from "../../hoc/Aux";

import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = props => (
  <Aux>
    <div> Toolbar, Sidedraw, Backdrop </div>
    <Toolbar />
    <main className={classes.mainContent}> {props.children} </main>
  </Aux>
);
export default layout;
