import React, { useState } from "react";
import "./Calculator.css";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [operators, setOperators] = useState([]);
  const [selectedOperator, setSelectedOperator] = useState("");
  const [storedValue, setStoredValue] = useState("");

  const callOperator = () => {
    console.log("call operation");
  };

  const setOperator = () => {
    console.log("set operation");
  };

  const updateDisplay = () => {
    console.log("update display");
  };

  return (
    <div className="calculator-container">
      <Display displayValue={displayValue} />
      <Keypad />
    </div>
  );
};

export default Calculator;
