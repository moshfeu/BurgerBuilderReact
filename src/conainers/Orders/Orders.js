import React, { Component } from "react";

import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  // using component did mount because we only want to fetch orders once this is mounted
  componentDidMount() {
    this.props.onFetchOrders();
  }
  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}
        />
      ));
    }
    return <div>{orders}</div>;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => {
      dispatch(actions.fetchOrders());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));

// this file is pulling the orders from the DB
// then looping through each order and storing the order key in an array called "FetchedOrders"
// the orders state is the updated with fetchedOrders (See state).
// in the return we then map over all the orders from the state (which is a list of keys)
// this then gets passed to the Order component
