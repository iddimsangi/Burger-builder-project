import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../Components/Burger/Burger";
export class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>BurgerBuilder Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
