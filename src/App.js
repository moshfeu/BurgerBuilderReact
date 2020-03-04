import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./conainers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
// Layout is a component contains the Nav bar and takes children which will be the burger app content.
// we have wrapped the Layout component around our content.
