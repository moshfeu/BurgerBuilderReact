import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../../src/axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionTypes from "../../store/actions";

class BurgerBuilder extends Component {
  state = {
    orderInProgress: false,
    loading: false,
    error: false
  };
  componentDidMount() {
    // axios
    //   .get("https://my-burger-app-react-5c423.firebaseio.com/ingredients.json")
    //   .then(response => {
    //     this.setState({ ingredients: response.data });
    //   })
    //   .catch(error => {
    //     this.setState({ error: true });
    //   });
  }

  // this method if to check if there are any ingredients in the burger so that the user can actually purchase the burger - check on line 36
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]; //returns value for each key in the ingredients object e.g [0,2,3]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0); // starting number of 0, 0 if no ingredients added
    return sum > 0; // true/false
  }
  // turn object into an array
  // create an array of string entries ['salad', 'bacon' 'cheese'] etc.
  // add ingredient values together, starting value of this is 0.
  //  if  the array has numbers in it i.e has ingredients in it then user can purchase the burger. If not they can't

  orderInProgressHandler = () => {
    this.setState({ orderInProgress: true });
  };

  orderCancelHandler = () => {
    this.setState({ orderInProgress: false });
  };
  orderContinueHandler = () => {
    // property name = property value
    // below is just taking the property key and setting it equal to property value
    //encode URI is just a helper method which allows us to have right format for the URL
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
  };
  //end result /checkout?salad=1&meat=2&bacon=1 etc

  render() {
    const disabledInfo = {
      ...this.props.ings // comes from redux state below
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Ingredients can't be loaded </p>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      // console.log(this.state.ingredients);

      orderSummary = (
        <OrderSummary
          orderCancelled={this.orderCancelHandler}
          orderContinue={this.orderContinueHandler}
          ingredients={this.props.ings}
          price={this.props.price}
        />
      );
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            canPurchase={this.updatePurchaseState(this.props.ings)}
            price={this.props.price}
            ordered={this.orderInProgressHandler}
          />
        </Aux>
      );
    }

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
        {burger}
      </Aux>
    );
  }
}
// defines which props should hold which slice of the state from the reducer
const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
    canPurchase: state.canPurchase

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingNamePayload =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, payload: ingNamePayload }),
    onIngredientRemoved: ingNamePayload =>
      dispatch({ type: actionTypes.REMOVE_INGREDIENT, payload: ingNamePayload })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
