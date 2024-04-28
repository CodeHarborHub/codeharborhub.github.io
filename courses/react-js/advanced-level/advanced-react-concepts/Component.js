import React from "react";

import withLogger from "./withLogger";

const Component = ({ message }) => {
  return <div>{message}</div>;
};

export default withLogger(Component);
