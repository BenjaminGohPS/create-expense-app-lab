import React from "react";

const Inputbox = (props) => {
  return (
    <input
      className="col-sm-9"
      type="text"
      placeholder={props.name}
      onChange={props.handleItem}
      value={props.item}
    />
  );
};

export default Inputbox;


