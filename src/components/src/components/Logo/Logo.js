import React from "react";
import BurgerLogo from "../../Assests/Images/burger-logo.jpg"
import "./Logo.css"

const logo = (props) => {
    return (
        <div className="Logo">
            <img src={BurgerLogo} alt="Burger" />
        </div>

    )
}
export default logo;