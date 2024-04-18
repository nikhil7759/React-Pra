import React from "react";
import "./Card.css";

const Card = (props) => {
  return <div className={`card1 ${props.className}`}>{props.children}</div>; // to define two css classname one here, and in another , we heave to use literal temoer
};

export default Card;
