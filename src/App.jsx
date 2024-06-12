// Math.floor(Math.random() * 9) + 1; // Random number between 1 and 9
// memo prevents unnecessary re-renders of the the Child componenent by
// checking for actual changes in props. Since 'checkCondition' is stabilized
// by 'useCallback', and 'condition' changes only when 'checkCondition' causes
// it, Child only re-renders when necessary

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
    console.log(`Parent = count: ${count}`);
  });

  const checkCondition = useCallback(() => {
    let randomNumber = getRandomNumber();
    console.log(`randomNumber: ${randomNumber}`);
    setCondition(randomNumber % 2 === 0);
  }, []);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <main>
        <div className="container">
          <h2>Avoiding unnecessary re-renders</h2>
          <div className="flex gap-2">
            <button onClick={increment}>Parent</button>
            <Child condition={condition} checkCondition={checkCondition} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
