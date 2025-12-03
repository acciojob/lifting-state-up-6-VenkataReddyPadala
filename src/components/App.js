import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { todo: "Learn React", completed: false },
    { todo: "Build a React app", completed: false },
    { todo: "Deploy the React app", completed: false },
  ]);

  const handleComplete = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((t, i) => (i === index ? { ...t, completed: true } : t))
    );
  };

  return (
    <div id="main">
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
