import { useState, useEffect } from "react";

const Button = ({ text, onClick, color = "primary" }) => { 

    const validColors = ["primary", "secondary", "success", "danger", "warning", "info"]; 
    const buttonColor = validColors.includes(color) ? color : "primary";
    
    return ( 
        <button className={`btn btn-${buttonColor}`} onClick={onClick}> 
            {text} 
        </button> 
    ); 
}; 

export default Button;