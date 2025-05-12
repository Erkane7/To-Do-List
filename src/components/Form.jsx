import { useState } from "react";
import styles from "./styles/Form.module.css";
import { RedirectType } from "next/navigation";

export const Form = ({
  setTaskList,
  taskList,
  allTask,
  activeTask,
  completedTask,
}) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAdd = () => {
    const newTask = {
      id: new Date(),
      taskName: inputValue,
      isCompleted: false,
    };
    if (!inputValue) {
      alert("Please enter a task!");
      return;
    }
    if (taskList.some((task) => task.taskName === inputValue)) {
      alert("Task alreadt existsss!");
    }
    setTaskList([...taskList, newTask]);
    setInputValue("");
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          value={inputValue}
          placeholder="Add a new task..."
          className={styles.taskInput}
          onChange={handleChange}
        />
        <button className={styles.taskAddButton} onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};
