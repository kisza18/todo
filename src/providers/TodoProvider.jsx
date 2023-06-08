import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const initialTodoList = [
  {
    title: "todo number one",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta",
  },
  {
    title: "todo number two",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta",
  },
  {
    title: "todo number three",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta",
  },
];

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialTodoList);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(newTodos);
  };

  const contextValue = {
    todos,
    addTodo,
    deleteTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
