import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Auxs from "../../hoc/Auxs";
import Modal from "../../components/Ui/Modal/Modal";
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery";

const INGREDIENT_PRICE = {
    meat: 1.3,
    cheese: 0.4,
    salad: 0.5,
    bacon: 0.7
}
class BurgerBuilder extends Component {
    state = {
        ingredient: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing:false  
    }

    updatePurchase = (ingredientss) => {
        const sum = Object.keys(ingredientss)
            .map(igKey => {
                return ingredientss[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchaseable: sum > 0 });

    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredient
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice, ingredient: updatedIngredient

        })
        this.updatePurchase(updatedIngredient)
    }

    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredient
        };
        updatedIngredient[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice, ingredient: updatedIngredient
        })
        this.updatePurchase(updatedIngredient)
    }

    purchaseHandler=()=>{
        this.setState({purchasing:true})
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredient
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Auxs>
                <Modal show={this.state.purchasing}>
                    <OrderSummery ingredient ={this.state.ingredient}/>
                </Modal>
                <Burger ingredient={this.state.ingredient} />
                <BuildControls
                    ingredientAdded={this.addIngredientsHandler}
                    ingredientRemove={this.removeIngredientsHandler}
                    disabledProperty={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice} />
            </Auxs>
        )
    }

}
export default BurgerBuilder;