import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function AppUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <div style={{ display: "flex", gap: "5px" }}>
        <button onClick={() => dispatch({ type: "decrement" })}>
          {" "}
          Decrement{" "}
        </button>
        <button onClick={() => dispatch({ type: "increment" })}>
          {" "}
          Increment{" "}
        </button>
      </div>
    </div>
  );
}

export default AppUseReducer;
