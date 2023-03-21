import * as React from "react";
import "./CircleButton.scss";




export const CircleButton = (props:any) => {
    return(
        <a href="javascript:;" className="btn">
            <span className="btn__circle"></span>
                <span className="btn__white-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" id="icon-arrow-right" viewBox="0 0 21 12">
                        <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                    </svg>
                </span>
            <span className="btn__text">{props.title}</span>
        </a>
      
    )
}

