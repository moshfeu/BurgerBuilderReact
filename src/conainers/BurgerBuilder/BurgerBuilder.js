import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../../src/axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

// a global constant
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      bacon: 0,
      meat: 0
    },
    totalPrice: 0,
    canPurchase: false,
    orderInProgress: false,
    loading: false
  };

  // this method if to check if there are any ingredients in the burger so that the user can actually purchase the burger - check on line 36
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]; //returns value for each key in the ingredients object e.g [0,2,3]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0); // starting number of 0, 0 if no ingredients added
    this.setState({ canPurchase: sum > 0 });
  }
  // turn object into an array
  // line 29 create an array of string entries ['salad', 'bacon' 'cheese'] etc.
  // line 31 add ingredient values together, starting value of this is 0.
  // line 34 if  the array has numbers in it i.e has ingredients in itthe user can purcahse the burger. If not they can't

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount; //2
    const priceAddition = INGREDIENT_PRICES[type]; //cheese
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  orderInProgressHandler = () => {
    this.setState({ orderInProgress: true });
  };

  orderCancelHandler = () => {
    this.setState({ orderInProgress: false });
  };
  orderContinueHandler = () => {
    // alert("continue with order");
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Angela Inniss",
        address: {
          street: "16 Test street",
          postcode: "M43 567",
          country: "England"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    // data that gets sent to to server (2nd argument)
    axios
      .post("", order)
      .then(response => {
        this.setState({ loading: false, orderInProgress: false });
        this.orderCancelHandler();
      })
      .catch(error => {
        this.setState({ loading: false, orderInProgress: false });
        this.orderCancelHandler();
      });
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = (
      <OrderSummary
        orderCancelled={this.orderCancelHandler}
        orderContinue={this.orderContinueHandler}
        ingredients={this.state.ingredients}
        price={this.state.totalPrice}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal
          show={this.state.orderInProgress}
          modalClosed={this.orderCancelHandler}
        >
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          canPurchase={this.state.canPurchase}
          price={this.state.totalPrice}
          ordered={this.orderInProgressHandler}
        />
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
// We want this component to be a class component because we will eventually manage state in here.
// we will pass this component to the
