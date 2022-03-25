import { React } from "react";
import Auxs from "../../hoc/Auxs";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";


const Layout = (props) => {
    return (
        <Auxs>
            <Toolbar />
            <SideDrawer />
            <main className="Content" >{props.children}</main>
        </Auxs >
    )
}
export default Layout;