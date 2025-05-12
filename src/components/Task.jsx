import { useState } from "react";

export const Task = ({ task, onDelete, onChecked }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#F3F4F6",
        padding: "12px 16px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <input
          onChange={() => onChecked(task.id)}
          type="checkbox"
          checked={task.isCompleted}
        />
        <p>{task.taskName}</p>
      </div>
      <div>
        <button onClick={() => onDelete(task.id)} className="deleteButton">
          Delete
        </button>
      </div>
      <div>
        <div>Powered by blah2</div>
      </div>
    </div>
  );
};
