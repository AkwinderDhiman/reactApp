import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Auxs from "../../hoc/Auxs";
class BurgerBuilder extends Component {
    state = {
        ingredient: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        }
    }
    render() {
        return (
            <Auxs>
                <Burger ingredient={this.state.ingredient} />
                <BuildControls/>
            </Auxs>
        )
    }

}
export default BurgerBuilder;