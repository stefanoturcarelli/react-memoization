// checkCondition = f => f is a default value for checkCondition prop
// const { log } = console; is a destructuring assignment

import React, { useState, useEffect } from "react";

function Child({ condition = false, checkCondition = (f) => f }) {
  useEffect(() => {
    const { log } = console;
    log("Child component mounted");
  });

  return (
    <section>
      <button
        className="secondary"
        onClick={increment}
        number={number}
        condition={condition}
        checkCondition={checkCondition}
      >
        Child
      </button>
    </section>
  );
}

export default Child;
