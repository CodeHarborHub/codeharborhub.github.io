import { useState } from "react";

/**
 * @module Counter
 * @param {number} count - The count of the counter
 * @param {function} setCount - The function to set the count
 * @returns {JSX.Element} - The JSX code for the Counter component
 */

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <h2>Parent Component</h2>
        <p>Count: {count}</p>
        <div>
          <h3>Child Component</h3>
          <button
            onClick={(function () {
              setCount(count + 1);
            })()}
          >
            Increment Count
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
