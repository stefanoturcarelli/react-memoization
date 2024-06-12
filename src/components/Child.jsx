// checkCondition = f => f is a default value for checkCondition prop
// const { log } = console; is a destructuring assignment

import React, { useState, useEffect, memo } from "react";

function Child({ condition = false, checkCondition = (f) => f }) {
  useEffect(() => {
    const { log } = console;
    log(`Child rendered`);
  });

  return (
    <button className="secondary" onClick={checkCondition}>
      Child
    </button>
  );
}

export default memo(Child);
