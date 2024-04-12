import React, { useState } from "react";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Deploy to production", completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState("");

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: prevTodos.length + 1,
          text: newTodoText,
          completed: false,
        },
      ]);
      setNewTodoText("");
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px" }}>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          style={{ marginRight: "10px", padding: "5px"}}
        />
        <button onClick={handleAddTodo} style={{ padding: "5px 10px", cursor: "pointer" }}> Add Todo </button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default TodoApp;