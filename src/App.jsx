import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Form from "./components/Form";

// src/App.jsx

const App = () => {
  const [expense, setExpense] = useState([]);

  const handleExpense = (item) => {
    setExpense((prevState) => [...prevState, item]);
  };

  return (
    <div className="container-fluid">
      <h1>Expense App</h1>
      <div className="container" style={{ border: "1px black solid" }}>
        <Input handleExpense={handleExpense} />
      </div>
      <br />
      <div className="container" style={{ border: "1px black solid" }}>
        <Form expense={expense} />
        {JSON.stringify({ expense })}
      </div>
    </div>
  );
};
export default App;

/* 
 {JSON.stringify({ expense })}
  {expense[0].item}
  if (i=0;i<expense.length;i++)

setExpense((prevState) => [...prevState, item])

  [...prevState].tospliced(0, 1, item));
*/
