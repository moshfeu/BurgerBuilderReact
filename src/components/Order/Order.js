import React from "react";
import classes from "./Order.css";

const Order = props => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    }); // value of ingredients
    // console.log(ingredientName); name of ingredient Bacon, Salad etc.
    // console.log(props.ingredients[ingredientName]) amount of each ingredient 1,2,3
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>{ingredientOutput}</p>
      <p> £{props.price.toFixed(2)}</p>
    </div>
  );
};

export default Order;

// we loop through the ingredients array and create an object with the ingredient name and amount and store in ingredients array 6 - 10
// then we map over the newly created ingredients array  (store in a variable) and return the name and amount with styles line 25 -17
// then we return the ingredients and price -lines 34- 25
//not sure how we have access to ingredients in this file or price - need to find out.
