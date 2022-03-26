import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";

const sidedrawer = (props) => (
        <div className="SideDrawer">
            <div className="LogoSideDrawer">
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
export default sidedrawer;