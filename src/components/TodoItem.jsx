import { useState } from "react";
import classes from "./TodoItem.module.css";

const TodoItem = ({
  title,
  content,
  index,
  deleteHandler,
  complete,
  doneHandler,
  sendEditedTodo,
}) => {
  const [editAvailable, setEditAvailable] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);

  const handleEdit = () => {
    const newTodo = { title: editTitle, content: editContent, id: index };
    if (editTitle === "" || editContent === "") {
      setEditAvailable(false);
      return;
    }
    sendEditedTodo(newTodo);
    setEditAvailable(false);
  };

  return (
    <div className={classes.todo}>
      <div className={classes.buttons}>
        <button onClick={deleteHandler} className={classes.delete}></button>
        <button
          onClick={() => setEditAvailable(!editAvailable)}
          className={classes.edit}
        ></button>
        <button onClick={doneHandler} className={classes.done}></button>
      </div>
      <div
        className={complete ? classes.greenindicator : classes.redindicator}
      ></div>
      {editAvailable && (
        <div className={classes.editfield}>
          <input
            type="text"
            maxLength="30"
            defaultValue={title}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            cols="30"
            rows="2"
            maxLength="75"
            defaultValue={content}
            onChange={(e) => setEditContent(e.target.value)}
          ></textarea>
          <button onClick={handleEdit}>save</button>
        </div>
      )}
      {!editAvailable && (
        <div className={classes.contents}>
          <h3 className={complete ? classes.active : undefined}>{title}</h3>
          <p className={complete ? classes.active : undefined}>{content}</p>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
