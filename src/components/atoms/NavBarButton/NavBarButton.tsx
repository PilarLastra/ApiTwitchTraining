import * as React from "react";
import "./NavBarButton.scss";
import { Link } from "react-router-dom";



export const NavBarButton = (props:any) => {
    return(
        <div className="container">
            <button className="btn-12" onClick={props.callback}> {props.title} </button>
          
        </div>
      
    )
}

