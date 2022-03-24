import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import "./Burger.css";

const Burger = (props) => {
    let transformIngredient = Object.keys(props.ingredient)
        .map(igKey => {
            return [...Array(props.ingredient[igKey])].map((_, i) => {
                return <BurgerIngredients key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        
    if (transformIngredient.length === 0) {
        transformIngredient = <p>please start add ingredients...</p>
    }
    return (
        <div className="Burger">
            <BurgerIngredients type="bread-top"></BurgerIngredients>
            {transformIngredient}
            <BurgerIngredients type="bread-bottom"></BurgerIngredients>
        </div>
    )
}

export default Burger;