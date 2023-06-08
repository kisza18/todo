import classes from "./TodoForm.module.css";
import addTaskImage from "../assets/images/add-task.svg";
import { useTodoContext } from "../providers/TodoProvider";
import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoForm = () => {
  const { addTodo } = useTodoContext();
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!todoTitle || !todoContent) {
      return;
    }
    addTodo({
      title: todoTitle,
      content: todoContent,
    });
    setTodoTitle("");
    setTodoContent("");
  };

  return (
    <div className={classes.form}>
      <div className={classes.formcontainer}>
        <div className={classes.header}>
          <img src={addTaskImage} alt="addtask" />
          <h3>Make New Task</h3>
        </div>
        <form onSubmit={submitHandler} className={classes.controller}>
          <div>
            <p>0/50</p>
            <input
              type="text"
              placeholder="your task topic"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
            />
          </div>
          <div>
            <p>0/75</p>
            <textarea
              cols="30"
              rows="4"
              placeholder="more info about task"
              value={todoContent}
              onChange={(e) => setTodoContent(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Create New Task</button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
