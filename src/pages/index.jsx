import { Form } from "@/components/Form";
import { Task } from "@/components/Task";
// import { Completed } from "@/components/Completed";
import { useState } from "react";

export default function Home() {
  const [taskList, setTaskList] = useState([]);

  const handleDelete = (id) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== id)
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "345px",
        width: "100%",
        margin: "auto",
        gap: "10px",
      }}
    >
      <h1>To-Do List</h1>
      <Form setTaskList={setTaskList} taskList={taskList} />
      {taskList.map((task, id) => (
        <Task
          taskList={taskList}
          key={id}
          task={task}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
