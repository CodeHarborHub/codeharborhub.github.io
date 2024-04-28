import React from "react";

function useCounter(initialCount = 0) {
  const [count, setCount] = React.useState(initialCount);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return { count, increment, decrement };
}

function AppUseCustomHook() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <div style={{ display: "flex", gap: "5px" }}>
        <button onClick={decrement}> Decrement </button>
        <button onClick={increment}> Increment </button>
      </div>
    </div>
  );
}

export default AppUseCustomHook;
