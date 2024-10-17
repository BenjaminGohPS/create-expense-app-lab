import React from "react";

// Reusable Button component partial codes
const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={props.handleExpense}
    >
      {props.children}
    </button>
  );
};

export default Button;

/**
 onClick={() => {
        props.handleExpense(props.item, props.price, props.date);
*/
