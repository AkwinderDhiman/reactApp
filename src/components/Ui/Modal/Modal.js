import React, { Component } from "react";
import "./Modal.css";
import Auxs from "../../../hoc/Auxs/Auxs";
import Backdrop from "../Backdrop/Backdrop";


class Modal extends Component {
    shouldComponentUpdate(nxtProps, nxtState) {
        return nxtProps.show !== this.props.show || nxtProps.children !== this.props.children
    }
    componentDidUpdate() {
        console.log("[Modal],update ")
    }
    render() {
        return (
            <Auxs>
                <Backdrop show={this.props.show} onClicked={this.props.purchaseCancel} />
                <div className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxs>
        )
    }
}
export default Modal;