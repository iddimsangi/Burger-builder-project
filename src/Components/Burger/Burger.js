import React from "react";
import classes from "./Burger.css";
import BurgerIngridients from "./BurgerIngridients/BurgerIngridients";
const Burger = (props) => {
  console.log(props.ingridients);
  const transformedIngridients = Object.keys(props.ingridients).map((igKey) => {
    console.log(igKey);
    return [...Array(props.ingridients[igKey])].map((_, i) => {
    return  <BurgerIngridients key={igKey + 1} type={igKey} />;
    });
  });
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
