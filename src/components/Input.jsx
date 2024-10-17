import React from "react";
import Label from "./Label";

const Input = () => {
  return (
    <div className="container">
      <div className="row">
        <Label item="Item" />
        <Label price="Price" />
        <Label date="Date" />
      </div>

      <div className="row">
        <input
          className="col-md-5"
          type="text"
          placeholder="item"
          //   onChange={(event) => setActivity(event.target.value)}
          //   value={activity} // need to add this
        />

        <input
          className="col-md-5"
          type="text"
          placeholder="price"
          //   onChange={(event) => setTime(event.target.value)}
          //   value={time}
        />

        <input
          className="col-md-5"
          type="text"
          placeholder="date"
          //   onChange={(event) => setTime(event.target.value)}
          //   value={time}
        />
        <button className="col-md-2">create</button>
      </div>
    </div>
  );
};

export default Input;
