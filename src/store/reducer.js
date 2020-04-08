import * as actionTypes from "./actions";
import PropTypes from "react";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 0,
  canPurchase: false
};

// a global constant
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const reducer = (state = initialState, action) => {
  // you always have to have a "type" property on your action, that's why we can access it below.
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] + 1 // setting new value and assign to ingredient
          //action.payload is what the user selects i.e salad then select name access value update value
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload],
        canPurchase: state.canPurchase,

      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
// ...state does not copy objects within objects you have to also always spread the state of
// the inner objects too (see ADD_INGREDIENTS action
