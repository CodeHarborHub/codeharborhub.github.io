import React, { useState } from "react";

function IfElseExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <p>Welcome, user!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else
    return (
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
}

export default IfElseExample;
