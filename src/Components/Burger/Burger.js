import React from "react";
import classes from "./Burger.css";
import BurgerIngridients from "./BurgerIngridients/BurgerIngridients";
const Burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngridients type="bread-top" />
      <BurgerIngridients type="bread-bottom" />
    </div>
  );
};

export default Burger;
