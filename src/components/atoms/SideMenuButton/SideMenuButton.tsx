import React from "react";
import "./SideMenuButton.scss";


export const SideMenuButton = (props:any) => {
    return(
        <div className="container">
            <button className="sideMenuButton" onClick={props.callback}> {props.title} </button>
          
        </div>
      
    )
}

