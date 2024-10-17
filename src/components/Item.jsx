import React from "react";
import Label from "./Label";
import Button from "./Button";

const Item = (props) => {
  return (
    <div className="row">
      <div className="col-sm-3">
        Item: <Label name={props.expense.item} />
      </div>
      <div className="col-sm-3">
        Price: <Label name={props.expense.price} />
      </div>
      <div className="col-sm-3">
        Date: <Label name={props.expense.date} />
      </div>

      <Button>delete</Button>
    </div>
  );
};

export default Item;

/*
<Label name={props.expense[0].item} />
         <Label name={props.expense[0].price} />
      <Label name={props.expense[0].date} />
        <Button>delete</Button>
*/
