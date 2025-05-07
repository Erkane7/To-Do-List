import React, { useState } from "react";

export const Todos = ({ todo }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-betweem",
        width: "100%",
        alignItems: "center",
        padding: "12px 16px",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <input type="checkbox" value={input} />
        <p>{todo.todoName}</p>
        <button onClick={add}>Delete</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={active}></button>
        <button onClick={all}></button>
        <button onClick={completed}></button>
        <button onClick={clearCompleted}></button>
      </div>
    </div>
  );
};
