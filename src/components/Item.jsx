import React from "react";
import Label from "./Label";
import Button from "./Button";

const Item = (props) => {
  return (
    <div className="row">
      <div className="col-sm-3">
        Item: <Label name={props.expense.item} idx={props.idx} />
      </div>
      <div className="col-sm-3">
        Price: <Label name={props.expense.price} idx={props.idx} />
      </div>
      <div className="col-sm-3">
        Date: <Label name={props.expense.date} idx={props.idx} />
      </div>
      <div className="col-sm-3">
        <Button handleExpense={props.handleExpense}>delete</Button>
      </div>
    </div>
  );
};

export default Item;
