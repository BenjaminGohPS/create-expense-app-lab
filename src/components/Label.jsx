import React from "react";

const Label = (props) => {
  return (
    <div>
      <label>{props.item}</label>
      <label>{props.price}</label>
      <label>{props.date}</label>
    </div>
  );
};

export default Label;
