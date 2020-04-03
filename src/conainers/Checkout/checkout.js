import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      // ['salad', '1']
      // ingredients param element 1 i.e 'salad' should be equal to the  param element 2 the value which is '1'
      if (param[0] === "price") { // see burgerBuilder line 101
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      } // +turns it into a number}
    }
    this.setState({ ingredients: ingredients, price: price });
    console.log(price);
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          ingredients={this.state.ingredients}
        />
        <Route
          path={this.props.match.url + "/contact-data"}
          render={props => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.price}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
