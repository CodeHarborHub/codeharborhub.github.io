import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo }) {
  return (
    <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "20px", borderRadius: "5px" }}>
      <h2 style={{ marginBottom: "20px" }}>Todo List</h2>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
}

export default TodoList;