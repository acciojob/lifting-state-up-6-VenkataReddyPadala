import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

function handleTodo(todo, setTodosList) {
  let updatedTodo = { ...todo, completed: true };
  setTodosList((prevTodos) => {
    return prevTodos.map((t) =>
      t.todo === updatedTodo.todo ? updatedTodo : t
    );
  });
}
const App = () => {
  const todos = [
    { todo: "Learn React", completed: false },
    { todo: "Build a React app", completed: false },
    { todo: "Deploy the React app", completed: false },
  ];
  const [todosList, setTodosList] = useState(todos);
  console.log(todosList);
  return (
    <div>
      <ul>
        {todosList.map((todo) => (
          <TodoList
            key={todo.todo}
            todo={todo}
            handleTodo={handleTodo}
            setTodosList={setTodosList}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
