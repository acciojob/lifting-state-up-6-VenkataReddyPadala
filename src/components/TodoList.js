import React from "react";
function TodoList({ todo, handleTodo, setTodosList }) {
  return (
    <li>
      {todo.todo}
      {!todo.completed && (
        <button onClick={() => handleTodo(todo, setTodosList)}>Complete</button>
      )}
    </li>
  );
}

export default TodoList;
