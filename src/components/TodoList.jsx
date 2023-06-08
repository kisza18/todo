import classes from "./TodoList.module.css";
import tasksImage from "../assets/images/all-task.svg";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../providers/TodoProvider";

const TodoList = () => {
  const { todos, deleteTodo } = useTodoContext();

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
        <button>Clear All</button>
      </div>
      <div className={classes.list}>
        {todos.map((todo, index) => (
          <TodoItem
            deleteHandler={() => deleteTodo(index)}
            key={index}
            title={todo.title}
            content={todo.content}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
