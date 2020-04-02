import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./conainers/BurgerBuilder/BurgerBuilder";
import Checkout from "./conainers/Checkout/checkout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
// Layout is a component contains the Nav bar and takes children which will be the burger app content.
// we have wrapped the Layout component around our content.
// "exact the order doesn't matter as it is not treated as a prefix
// Switch makes app load the first matched path
