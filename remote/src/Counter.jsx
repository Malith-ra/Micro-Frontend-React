import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="mt-5">
      <div>Counter = {counter}</div>
      <button
        className="flex items-center justify-center px-3 py-1 mt-4 text-base font-bold bg-red-500 rounded-lg"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add One
      </button>
    </div>
  );
};

export default Counter;
