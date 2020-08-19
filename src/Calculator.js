import React, { useState } from "react";

export default function Calculator() {
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

  return <div className="calculator-container"></div>;
}
