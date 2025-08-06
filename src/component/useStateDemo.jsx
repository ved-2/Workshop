import React, { useState } from "react";

const UseStateDemo = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [sum, setSum] = useState(0);

  const handleAdd = () => {
    setSum(Number(first) + Number(second));
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter first number"
        onChange={(e) => setFirst(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        onChange={(e) => setSecond(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <br />
      <h1>Ans: {sum}</h1>
    </div>
  );
};

export default UseStateDemo;
