import React from "react";
import { connect } from "react-redux";

function Counter({ count, increment, decrement }) {
  return (
    <div>
      <h2>Count: <span style={{ color: count < 0 ? "red" : "" }}>{count}</span></h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={decrement} style={{ margin: "10px", padding: "5px 10px" }}>Decrement ( - )</button>
        <button onClick={increment} style={{ margin: "10px",padding: "5px 10px" }}>Increment ( + )</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);