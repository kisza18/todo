import classes from "./TodoItem.module.css";

const TodoItem = ({ title, content, deleteHandler }) => {
  return (
    <div className={classes.todo}>
      <div className={classes.buttons}>
        <button onClick={deleteHandler} className={classes.delete}></button>
        <button className={classes.edit}></button>
        <button className={classes.done}></button>
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default TodoItem;
