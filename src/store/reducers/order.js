import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData, // same orderData we post to the server
        id: action.orderId // id we get back from server
      };
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder) // concat returns a new array
      };

    case actionTypes.PURCHASE_BURGER_FAILED:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};
export default reducer;
