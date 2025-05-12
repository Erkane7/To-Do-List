import { Filter } from "@/components/Filter";
import { Form } from "@/components/Form";
import { Task } from "@/components/Task";
import { useState } from "react";

export default function Home() {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleDelete = (id) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== id)
    );
  };
  const onChecked = (id) => {
    setTaskList((prevTasklist) =>
      prevTasklist.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const filterdTaskList = taskList.filter((task) => {
    if (filter === "active" && task.isCompleted === false) {
      return task;
    }
    if (filter === "completed" && task.isCompleted === true) {
      return task;
    }
    if (filter === "all") {
      return task;
    }
  });

  console.log(filterdTaskList, filter);
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
      }}
    >
      <h1>To-Do List</h1>
      <Form setTaskList={setTaskList} taskList={taskList} />
      <Filter
        filters={["all", "active", "completed"]}
        setFilter={setFilter}
        checkedFilter={filter}
      />
      {filterdTaskList.map((task, id) => (
        <Task
          taskList={task}
          key={id}
          task={task}
          onDelete={handleDelete}
          onChecked={onChecked}
        />
      ))}
    </div>
  );
}
