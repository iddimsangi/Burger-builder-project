import React from "react";
import classes from "./Burger.css";
import BurgerIngridients from "./BurgerIngridients/BurgerIngridients";
const Burger = (props) => {
  console.log(props.ingridients);
  let transformedIngridients = Object.keys(props.ingridients).map((igKey) => {
    console.log(igKey);
    return [...Array(props.ingridients[igKey])].map((_, i) => {
    return  <BurgerIngridients key={igKey + 1} type={igKey} />;
    })
  }).reduce((arr, el) => {
    return arr.concat(el);
  },[]);
  if (transformedIngridients.length === 0) {
    transformedIngridients = <p>Please start adding ingridients!</p>
  }
  // console.log(transformedIngridients);
  return (
    <div className={classes.Burger}>
      <BurgerIngridients type="bread-top" />
      {transformedIngridients}
      <BurgerIngridients type="bread-bottom" />
    </div>
  );
};

export default Burger;
