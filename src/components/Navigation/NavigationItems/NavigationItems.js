import React from "react";
import { useSelector } from "react-redux";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";

const NavigationItems = props => {
  const userLoggedIn = useSelector(state => state.auth.token);
  console.log(userLoggedIn);
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      {userLoggedIn ? (
        <NavigationItem link="/logout">Logout</NavigationItem>
      ) : (
        <NavigationItem link="/auth">Authentication</NavigationItem>
      )}
    </ul>
  );
};

export default NavigationItems;

// pseudo code for logic:
// if the user is not logged in show authenticate
// if the user is logged in show log out
// depending on the "token" prop which is in the auth state.
// get state using useSelector
