import classes from "./TodoList.module.css";
import tasksImage from "../assets/images/all-task.svg";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../providers/TodoProvider";
import { useState } from "react";

const TodoList = () => {
  const { todos, deleteTodo, doneTodo, deleteAll, editTodo } = useTodoContext();
  const [filter, setFilter] = useState(false);

  const checkFilter = (e) => {
    if (e === "true") {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  return (
    <div className={classes.todolist}>
      <header>
        <img src={tasksImage} alt="taskslogo" />
        <h3>All Tasks</h3>
      </header>
      <div className={classes.controllers}>
        <select onChange={(e) => checkFilter(e.target.value)}>
          <option value="false">All task</option>
          <option value="true">Done task</option>
        </select>
        <button onClick={() => deleteAll()}>Clear All</button>
      </div>
      {!filter && (
        <div className={classes.list}>
          {todos.map((todo) => (
            <TodoItem
              deleteHandler={() => deleteTodo(todo.id)}
              doneHandler={() => doneTodo(todo.id)}
              key={todo.id}
              title={todo.title}
              content={todo.content}
              index={todo.id}
              complete={todo.completed}
              sendEditedTodo={editTodo}
            />
          ))}
        </div>
      )}
      {filter && (
        <div className={classes.list}>
          {todos
            .filter((todo) => todo.completed === true)
            .map((todo) => (
              <TodoItem
                deleteHandler={() => deleteTodo(todo.id)}
                doneHandler={() => doneTodo(todo.id)}
                key={todo.id}
                title={todo.title}
                content={todo.content}
                index={todo.id}
                complete={todo.completed}
                sendEditedTodo={editTodo}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
