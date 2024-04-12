import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent({ count, incrementCount }) {
  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <ChildComponent incrementCount={incrementCount} />
    </div>
  );
}

export default ParentComponent;