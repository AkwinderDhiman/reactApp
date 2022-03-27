import { Component, React } from "react";
import Auxs from "../Auxs/Auxs";
import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";


class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !this.state.showSideDrawer }
        });
    }

    render() {
        return (
            <Auxs>
                <Toolbar drawerTogglerClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className="Content" >{this.props.children}</main>
            </Auxs >
        )
    }
}
export default Layout;