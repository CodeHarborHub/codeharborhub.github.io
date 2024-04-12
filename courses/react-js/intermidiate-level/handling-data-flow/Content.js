import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ color: theme === "light" ? "#333" : "#fff", padding: "10px", backgroundColor: theme === "light" ? "#fff" : "#333" }}>
      <h2>Content Area</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        in turpis nec felis fermentum ultricies. Donec sit amet nunc
        vitae libero ultricies ultricies.
      </p>
    </div>
  );
}

export default Content;