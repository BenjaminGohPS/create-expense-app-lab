import React from "react";

const Inputbox = (props) => {
  return (
    <input
      className="col-sm-9"
      type="text"
      placeholder={props.name}
      onChange={props.handleItem}
      value={props.item} // need to add this
    />
  );
};

export default Inputbox;

/**
onChange={(event) => props.handleItem(event.target.value)}
*/
