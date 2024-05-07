import React from "react";

function TodoItem({ todo, toggleTodo }) {
  const { id, text, completed } = todo;

  const handleToggle = () => {
    toggleTodo?.(id);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleToggle();
    }
  };

  return (
    <div style={{ marginBottom: "5px" }}>
      <span
        style={{
          textDecoration: completed ? "line-through" : "none",
          marginLeft: "10px",
          cursor: "pointer",
          color: completed ? "var(--ifm-task-complete-color)" : "var(--ifm-task-incomplete-color)",
        }}
        onClick={handleToggle}
        onKeyDown={handleKeyPress} 
        tabIndex={0}
      >
        {text}
      </span>
    </div>
  );
}

export default TodoItem;