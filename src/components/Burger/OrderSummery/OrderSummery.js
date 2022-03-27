import React, { Component } from "react";
import Auxs from "../../../hoc/Auxs/Auxs";
import Button from "../../Ui/Button/Button";

class OrderSummery extends Component {
    componentDidUpdate(){
        console.log("componentUpdates")
    }
    render() {
        let ingredientSummery = Object.keys(this.props.ingredient)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{[igKey]}</span>:{this.props.ingredient[igKey]}
                    </li>);
            });
        return (
            <Auxs>
                <h3>Your Order</h3>
                <p>A delicious Burger with the following ingredients:  </p>
                <ul>
                    {ingredientSummery}
                </ul>
                <strong><p> Total Price :- {this.props.price.toFixed(2)}</p></strong>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancled}> Cancel </Button>
                <Button btnType="Success" clicked={this.props.continue}> Continue </Button>
            </Auxs>
        );
    }
}

export default OrderSummery;