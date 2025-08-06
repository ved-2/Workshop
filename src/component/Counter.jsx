import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container my-5 text-center">
      <h3 className="mb-4">Counter</h3>
      <p className="fs-4">Current Count: {count}</p>

      {/* Flex container for spacing */}
      <div className="d-flex justify-content-center gap-3 mt-3">
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          INCREMENT
        </button>
        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
          DECREMENT
        </button>
      </div>
    </div>
  );
};

export default Counter;
