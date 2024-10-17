import React from "react";
import Label from "./Label";
import Item from "./Item";

const Form = (props) => {
  return (
    <div className="container-fluid">
      {props.expense.map((item, idx) => {
        return (
          <Item expense={item} handleExpense={props.handleExpense} idx={idx} />
        );
      })}
    </div>
  );
};

export default Form;
