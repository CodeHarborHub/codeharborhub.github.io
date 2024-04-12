import React, { useState } from "react";

function TernaryOperatorExample() {
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsError(true);
  };

  return (
    <div>
      {isError ? (
        <p style={{ color: "red" }}>An error occurred!</p>
      ) : (
        <button onClick={handleError}>Trigger Error</button>
      )}
    </div>
  );
}

export default TernaryOperatorExample;