import React, { useState } from "react";
import Label from "./Label";
import Inputbox from "./Inputbox";

const Input = () => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

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
        {item}
      </div>

      <div className="row">
        <div className="col-sm-3">
          <Label name="Price" />
        </div>
        <Inputbox name="Price" handleItem={handlePrice} item={price} />
        {price}
      </div>

      <div className="row">
        <div className="col-md-3">
          <Label name="Date" />
        </div>
        <Inputbox name="date" handleItem={handleDate} item={date} />
        {date}
      </div>

      <button className="col--2">create</button>
    </div>
  );
};

export default Input;

/**
RMB TO DELETE THE ADDITIONAL {item} {price} {date}
because this wanted to check
 
*/
