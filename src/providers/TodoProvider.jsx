import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const initialTodoList = [
  {
    title: "shopping list",
    content: "banana, apple, orange, milk, bread",
    completed: false,
  },
  {
    title: "homework",
    content: "cooking, car wash",
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

  const editTodo = (newTodo) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === newTodo.index) {
        todo.title = newTodo.title;
        todo.content = newTodo.content;
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
    editTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
