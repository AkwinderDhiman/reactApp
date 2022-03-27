import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../Ui/Backdrop/Backdrop";
import Auxs from "../../../hoc/Auxs/Auxs";

const sidedrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <Auxs>
            <Backdrop
                show={props.open}
                onClicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className="LogoSideDrawer">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxs>
    )
}
export default sidedrawer;