import classes from "./TodoList.module.css";
import tasksImage from "../assets/images/all-task.svg";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../providers/TodoProvider";

const TodoList = () => {
  const { todos, deleteTodo, doneTodo, deleteAll } = useTodoContext();

  return (
    <div className={classes.todolist}>
      <header>
        <img src={tasksImage} alt="taskslogo" />
        <h3>All Tasks</h3>
      </header>
      <div className={classes.controllers}>
        <select>
          <option value="All">All task</option>
          <option value="Done">Done task</option>
        </select>
        <button onClick={() => deleteAll()}>Clear All</button>
      </div>
      <div className={classes.list}>
        {todos.map((todo, index) => (
          <TodoItem
            deleteHandler={() => deleteTodo(index)}
            doneHandler={() => doneTodo(index)}
            key={index}
            title={todo.title}
            content={todo.content}
            complete={todo.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
