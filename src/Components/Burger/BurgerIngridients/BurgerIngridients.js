import React, { Component } from "react";
import classes from "./BurgerIngridients.css";
import PropTypes from "prop-types";

export class BurgerIngridients extends Component {
  render() {
    let ingridients = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingridients = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingridients = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingridients = <div className={classes.Meat}></div>;
        break;
      case "cheese":
        ingridients = <div className={classes.Cheese}></div>;
        break;
      case "salad":
        ingridients = <div className={classes.Salad}></div>;
        break;
      case "bacon":
        ingridients = <div className={classes.Bacon}></div>;
        break;
      default:
        ingridients = null;
        break;
    }
    return <div>{ingridients}</div>;
  }
}

BurgerIngridients.PropTypes = {
  type: PropTypes.string.isRequired,
};
export default BurgerIngridients;
