import React, { Component } from "react";
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
                <div> Burger controls</div>
            </Auxs>
        )
    }

}
export default BurgerBuilder;