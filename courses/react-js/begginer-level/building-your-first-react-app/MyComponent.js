const MyComponent = () => {
  const name = "Ajay";
  const isLoggedIn = true;
  const fruits = ["apple", "banana", "orange"];

  return (
    <div>
      <h1>Hello, {name}!</h1>
      
      <p>{isLoggedIn ? "You are logged in" : "Please log in"}</p>

      <img src="https://github.com/ajay-dhangar.png" alt="Ajay" style={{ width: "100px", borderRadius: "50%" }} />

      {isLoggedIn && <p>Welcome back, {name}!</p>}

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <Button text="Click me" onClick={() => alert("Button clicked!")} />
    </div>
  );
}

// Another component to compose
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
}

export default MyComponent;