import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const initialTodoList = [
  {
    title: "todo number one",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta",
    completed: false,
  },
  {
    title: "todo number two",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta",
    completed: true,
  },
  {
    title: "todo number three",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta",
    completed: true,
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

  const doneTodo = (todoIndex) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === todoIndex) {
        todo.completed = !todo.completed;
      }
    });
    setTodos(newTodos);
  };

  const deleteAll = () => {
    setTodos([]);
  };

  const contextValue = {
    todos,
    addTodo,
    deleteTodo,
    doneTodo,
    deleteAll,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
