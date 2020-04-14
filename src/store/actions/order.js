import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

// syncronous action creators

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAILED,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

// asyncronous action creator the action we dispatch once we click the order button

export const purchaseBurger = orderData => {
  console.log(orderData)
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios.post("/orders.json", orderData)
      .then(response => {
        console.log(response.data);
        dispatch(purchaseBurgerSuccess(response.data, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};



// Action creators using actions from actionTypes file.
// We create action creators in order to execute a syncronous code.
