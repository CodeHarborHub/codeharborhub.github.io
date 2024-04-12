import React from "react";

function ChildComponent({ incrementCount }) {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default ChildComponent;