import React from "react";
import Auxs from "../../../hoc/Auxs";

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
            <p>Continue to Checkout?</p>
        </Auxs>

    )
}

export default orderSummery;