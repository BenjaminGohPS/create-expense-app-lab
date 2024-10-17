import React from "react";
import Label from "./Label";
import Item from "./Item";

const Form = (props) => {
 
  return (
    <div className="container-fluid">
        {props.expense.map((item, idx) => {
            return (<Item expense={item} />)
        })}
    </div>
  );
};

export default Form;

/**
<div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
          <Label name={props.name} />
          <p>test</p>
        </div>
        <div className="col-sm-3">
          <Label name="Item" />
          <p>test</p>
        </div>
        <div className="col-sm-3">
          <Label name="Item" />
          <p>test</p>
        </div>

        <p>Testing Form</p>
      </div>
    </div>
*/
