import React from "react";
import "./Backdrop.css"

const backdrop = (props) => {
    return(
    props.show ? <div className="Backdrop" onClick={props.onClicked}></div> : null
    )
};

export default backdrop;