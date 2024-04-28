import React from "react";

const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log(`Rendering ${WrappedComponent.name} with props:`, props);
    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
