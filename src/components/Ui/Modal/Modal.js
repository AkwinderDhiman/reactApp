import React from "react";
import "./Modal.css";
import Auxs from "../../../hoc/Auxs";
import Backdrop from "../Backdrop/Backdrop";


const modal = (props) => {
    return (
        <Auxs>
            <Backdrop show={ props.show} onClicked={props.purchaseCancel}/>
            <div className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>

        </Auxs>
    )
}
export default modal;