import React from "react";
import Auxs from "../../../hoc/Auxs";
import Button from "../../Ui/Button/Button";

const orderSummery = (props) => {
    let ingredientSummery = Object.keys(props.ingredient) 
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{[igKey]}</span>:{props.ingredient[igKey]}
            </li>);
        });
    return (
        <Auxs>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients:  </p>
            <ul>
                {ingredientSummery}
            </ul>
            <strong><p> Total Price :- {props.price.toFixed(2)}</p></strong>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.cancled}> Cancel </Button>
            <Button btnType="Success" clicked={props.continue}> Continue </Button>
        </Auxs>

    )
}

export default orderSummery;