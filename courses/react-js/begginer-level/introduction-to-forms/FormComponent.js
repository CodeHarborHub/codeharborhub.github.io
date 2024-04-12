import React, { useState } from "react";

function FormComponent() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted: " + JSON.stringify(formData));
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: "10px",
        maxWidth: "300px",
        margin: "auto",
        boxShadow: "2px 2px 5px #666",
        borderRadius: "5px",
      }}
    >
      <label>Username:</label>

      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <button
        type="submit"
        style={{
          padding: "5px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default FormComponent;
