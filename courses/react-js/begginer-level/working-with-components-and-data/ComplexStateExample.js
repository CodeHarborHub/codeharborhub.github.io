import React, { useState } from "react";

function ComplexStateExample() {
  const [user, setUser] = useState({ name: "Ajay", age: 24 });

  const updateName = () => {
    setUser({ ...user, name: "Pawan" });
  };

  const updateAge = () => {
    setUser({ ...user, age: 23 });
  };

  return (
    <div>
        <h2>Complex State Example</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <div style={{ display: "flex", gap: "8px" }}>
            <button onClick={updateName}>Update Name</button>
            <button onClick={updateAge}>Update Age</button>
        </div>      
    </div>
  );
}

export default ComplexStateExample;
