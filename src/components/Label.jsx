import React from "react";

const Label = (props) => {
  return <label key={props.idx}>{props.name}</label>;
};

export default Label;
