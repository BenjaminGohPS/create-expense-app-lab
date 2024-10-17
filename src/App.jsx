import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Form from "./components/Form";

// src/App.jsx

const App = () => {
  

  return (
    <div className="container-fluid">
      <h1>Expense App</h1>
      <div className="container" style={{ border: "1px black solid" }}>
        <Input />
      </div>
      <br />
      <div className="container" style={{ border: "1px black solid" }}>
        <Form />
      </div>
    </div>
  );
};
export default App;
