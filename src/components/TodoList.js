import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.todo}>
          {todo.todo}
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.todo)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
