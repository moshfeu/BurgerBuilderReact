import * as actionTypes from "./actionTypes";
import axios from "../../../src/axios-orders";

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    startingIngredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};
// action to load initial ingredients in the burger builder
//dispatch is available here because of the thunk middleware

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://my-burger-app-react-5c423.firebaseio.com/ingredients.json")
      .then(response => {
        // console.log(response);
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
