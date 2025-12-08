import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Card = ({children, className=""}) => {
  return <div className={`card ${className}`.trim()} 
    style={{
        border: "7px solid #ccc", 
        padding: "9px", 
        borderRadius: "8px"}}>
    {children}</div>;
};

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Card;
