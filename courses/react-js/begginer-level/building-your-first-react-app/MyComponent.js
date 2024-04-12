import React from 'react';

// Define a functional component using JSX
const MyComponent = () => {
  // Define some variables to use in JSX expressions
  const name = "Ajay";
  const isLoggedIn = true;
  const fruits = ["apple", "banana", "orange"];

  // JSX component rendering
  return (
    <div>
      <h1>Hello, {name}!</h1>
      
      {/* Embedding expressions */}
      <p>{isLoggedIn ? "You are logged in" : "Please log in"}</p>

      {/* Defining attributes */}
      <img src="https://github.com/ajay-dhangar.png" alt="Ajay" style={{ width: "100px", borderRadius: "50%" }} />

      {/* Conditionally render elements */}
      {isLoggedIn && <p>Welcome back, {name}!</p>}

      {/* Mapping over arrays */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {/* Compose components */}
      <Button text="Click me" onClick={() => alert("Button clicked!")} />
    </div>
  );
}

// Another component to compose
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
}

export default MyComponent;