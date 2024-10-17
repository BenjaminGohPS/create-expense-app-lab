import React from "react";
import Label from "./Label";

const Form = (props) => {
  return (
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
  );
};

export default Form;

/**
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

*/
