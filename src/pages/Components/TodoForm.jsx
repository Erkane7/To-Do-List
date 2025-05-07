import { useState } from "react";
import styles from "../../styles/Home.module.css";

export const TodoForm = ({ setTaskList, taskList }) => {
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

    setTaskList([...taskList, newTask]);
    setInputValue("");
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          className={styles.taskInput}
          value={inputValue}
          placeholder="Add a new task..."
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className={styles.taskAddButton} onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
  // };
  // const addTodo = () => {
  //   const newTodo = {
  //     id: new Date().getTime(),
  //     text: input,
  //     isCompleted: false,
  //   };
  //   setTodos((prevTodos) => [...prevTodos, newTodo]);
  // };

  // const removeTodo = (index) => {
  //   setTodos((prevTodos) => {
  //     const newTodos = [...prevTodos];
  //     newTodos.splice(index, 1);
  //     return newTodos;
  //   });
  // };
  // const toggleTodo = (index) => {
  //   setTodos((prevTodos) => {
  //     const newTodos = [...prevTodos];
  //     newTodos[index].completed = !newTodos[index].completed;
  //     return newTodos;
  //   });
  // };
  // const editTodo = (index, newText) => {
  //   setTodos((prevTodos) => {
  //     const newTodos = [...prevTodos];
  //     newTodos[index].text = newText;
  //     return newTodos;
  //   });
  // };

  // const clearcompleted = () => {
  //   setTodos((prevTodos) => {
  //     const newTodos = [...prevTodos];
  //     return newTodos.filter((todo) => !todo.completed);
  //   })
};
