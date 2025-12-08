import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Card = ({children, className=""}) => {
  return <div className={`card ${className}`.trim()} 
    style={{
        border: "7px solid #373633", 
        padding: "9px", 
        borderRadius: "8px",
        backgroundColor: "#a5e0e6",
        color: "#d300d6"}}>
    {children}</div>;
};

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Card;
