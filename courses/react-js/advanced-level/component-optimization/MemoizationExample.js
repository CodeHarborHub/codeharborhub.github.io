import React, { useMemo, useState } from "react";
import PropTypes from 'prop-types';


const ExpensiveComponent = ({ value }) => {
  const expensiveFunction = (value) => {
    // Expensive computation
    return value * 2;
  };
  
  ExpensiveComponent.propTypes = {
    value: PropTypes.number.isRequired
  };
  const memoizedValue = useMemo(() => expensiveFunction(value), [value]);
  return <div>{memoizedValue}</div>;
};
const MemoizationExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpensiveComponent value={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default MemoizationExample;
