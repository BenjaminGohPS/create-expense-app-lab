import React, { useState } from "react";
import Label from "./Label";
import Inputbox from "./Inputbox";
import Button from "./Button";

const Input = (props) => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  
  const currentDate = new Date().toISOString().split("T")[0]
  const [date, setDate] = useState(currentDate)

  const handleItem = (event) => {
    setItem(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <Label name="Item" />
        </div>
        <Inputbox name="Item" handleItem={handleItem} item={item} />
      </div>

      <div className="row">
        <div className="col-sm-3">
          <Label name="Price" />
        </div>
        <Inputbox name="Price" handleItem={handlePrice} item={price} />
      </div>

      <div className="row">
        <div className="col-sm-3">
          <Label name="Date" />
        </div>
        <Inputbox name="date" handleItem={handleDate} item={date} />
      </div>

      <Button
        handleExpense={() => props.handleExpense({ item, price, date })}
        className="create"
      >
        create
      </Button>
    </div>
  );
};

export default Input;
