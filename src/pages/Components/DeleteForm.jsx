import React from "react";

const DeleteForm = ({ todos, removtodo }) => {
  return (
    <div>
      <div>
        {todos.map((todo, id) => (
          <div key={id}>
            <h1>{todo.text}</h1>
            <button onClick={() => removtodo(id)}></button>
          </div>
        ))}
      </div>
    </div>
  );
};
