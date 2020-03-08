import React, { useState } from "react";
import Aux from "../Aux";

import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  return (
    <Aux>
      <SideDrawer
        showSideDrawer={showSideDrawer}
        toggleSideDrawer={() => {
          setShowSideDrawer(!showSideDrawer);
        }}
      />
      <Toolbar
        onMenuClick={() => {
          setShowSideDrawer(!showSideDrawer);
        }}
      />
      <main className={classes.mainContent}> {props.children} </main>
    </Aux>
  );
};
export default layout;
// NOTES:
//  gave backdrop props the same props as show side drawer as they both do the same thing
// and are not independent of each other.
