import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./conainers/BurgerBuilder/BurgerBuilder";

import Checkout from "./conainers/Checkout/checkout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
// Layout is a component contains the Nav bar and takes children which will be the burger app content.
// we have wrapped the Layout component around our content.
