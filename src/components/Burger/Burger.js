import React from "react"; // so we can use JSX
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const Burger = props => {
  // props.ingredients[ingredient] - accessing the ingredients object with the particular key from the object
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => {
        return <BurgerIngredient key={ingredient + i} type={ingredient} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  const defaultText =
    transformedIngredients.length === 0 ? "Build your burger" : null;

  // console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {defaultText}
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;

// salad bacon cheese
// [salad] [cheese] [bacon]
// reduce method is a built in array function which allows us to transform an array into something else
// takes a function which takes in teh previous value and the current value recieves 2 args
// line 7 returns an array of key strings i.e ["cheese","salad", "meat"]
//line 8 and 9  maps over those array strings and returns an array with the value of each ingredient e.g.  [1,2,3,4] and maps over them takes the index
// line 10 returns a burger ingredient component in an array e.g.[<BurgerIngredient key={cheese + 0} type={cheese}/>,<BurgerIngredient key={meat + 0} type={meat}/>, <BurgerIngredient key={cheese + 0} type={cheese}/>]
// line 13 takes the arrays or  of burger ingredients adds them up ?? and merges them into one array. so we can call .length on it?
