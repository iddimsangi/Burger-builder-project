import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../Components/Burger/Burger";
export class BurgerBuilder extends Component {
  state = {
    ingridients: {
      meat: 2,
      salad: 1,
      cheese: 2,
      bacon: 1,
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
