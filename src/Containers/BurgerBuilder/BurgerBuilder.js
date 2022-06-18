import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../Components/Burger/Burger";
export class BurgerBuilder extends Component {
  state = {
    ingridients: {
      meat: 0,
      salad: 0,
      cheese: 0,
      bacon: 0,
    },
  };
  render() {
    return (
      <Aux>
        <Burger ingridients={this.state.ingridients} />
        <div>BurgerBuilder Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
