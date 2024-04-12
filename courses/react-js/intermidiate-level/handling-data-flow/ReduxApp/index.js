import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";

function ReduxApp() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Redux App</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default ReduxApp;