import React from "react";
import Component from "../component/page";

const Card = (props) => {
    return(
        <div>
            <Component/>
        <p>{props.nomi}</p>
        <p>{props.massasi}</p>
        <p>{props.narx}</p>
        </div>
    )
}

export default Card