import React, { useEffect, useState } from "react";

const UseEffecthook = () => {
  const [price, setPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(price * 5);
  }, [price]);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setPrice(isNaN(value) ? 0 : value);
  };

  return (
    <div className="container">
      <h2>No of units is 5</h2>
      <input
        type="number"
        placeholder="Enter unit price"
        value={price}
        onChange={handleChange}
      />
      <p>Unit price: {price}</p>
      <p>Total amount: {totalAmount}</p>
    </div>
  );
};

export default UseEffecthook;
