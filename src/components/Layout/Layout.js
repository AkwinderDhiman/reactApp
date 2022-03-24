import { React } from "react";
import Auxs from "../../hoc/Auxs";
import "./Layout.css";

const Layout = (props) => {
    return (
        <Auxs>
            <div>toolbar,sidedrawer,backdrop</div>
            <main className="Content" >{props.children}</main>
        </Auxs >
    )
}
export default Layout;