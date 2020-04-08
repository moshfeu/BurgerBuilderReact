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
import { updatePurchaseState } from "../../store/reducer";

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
  orderInProgressHandler = () => {
    this.setState({ orderInProgress: true });
  };

  orderCancelHandler = () => {
    this.setState({ orderInProgress: false });
  };
  orderContinueHandler = () => {
    this.props.history.push("/checkout");
  };
  //end result /checkout?salad=1&meat=2&bacon=1 etc

  render() {
    const disabledInfo = {
      ...this.props.ings // comes from redux state below
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
      //if ingredient value is less than or equal to 0 make disabled info true and pas down to disabled prop in buildControls.
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
            canPurchase={this.props.canPurchase}
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
