import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.todo}
          {!todo.completed && (
            <button onClick={() => handleComplete(index)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
