import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Content from "./Content";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;