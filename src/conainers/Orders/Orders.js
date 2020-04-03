import React, { Component } from "react";

import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };
  // using component did mount because we only want to fetch orders once this is mounted
  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
         console.log(res.data);
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price}
          />
        ))}
      </div>
    );
  }
}
export default withErrorHandler(Orders, axios);

// this file is pulling the orders from the DB
// then looping through each order and storing the order key in an array called "FetchedOrders"
// the orders state is the updated with fetchedOrders (See state).
// in the return we then map over all the orders from the state (which is a list of keys)
// this then gets passed to the Order component
