// Math.floor(Math.random() * 9) + 1; // Random number between 1 and 9

import React, { useState, useEffect, useCallback } from "react";
import Child from "./components/Child.jsx";

function App() {
  const [condition, setCondition] = useState(false);
  const [count, setCount] = useState(0);

  let number = 0;

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 9) + 1;
  };

  useEffect(() => {
    console.log(count);
  });

  return (
    <>
      <main>
        <div className="container">
          <h2>Avoiding unnecessary re-renders</h2>
          <Child />
        </div>
      </main>
    </>
  );
}

export default App;
