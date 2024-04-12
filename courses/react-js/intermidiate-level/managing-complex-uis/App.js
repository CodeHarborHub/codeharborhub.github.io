import React, { useState } from "react";
import ParentComponent from "./ParentComponent";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <ParentComponent count={count} incrementCount={incrementCount} />
    </div>
  );
}

export default App;