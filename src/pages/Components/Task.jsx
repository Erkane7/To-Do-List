import { useState } from "react";

const toggleTask = (id) => {
  const updateTask = newTask.map((task) => {
    if (task.id !== id) {
      return task;
    }
    const updateTask = {
      ...task,
      isCompleted: !task.isCompleted,
    };
    return updateTask;
  });
};

export const Task = ({ task, onDelete }) => {
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
        <input type="checkbox" />
        <p>{task.taskName}</p>
      </div>
      <div>
        <button onClick={() => onDelete(task.id)} className="deleteButton">
          Delete
        </button>
      </div>
    </div>
  );
};
