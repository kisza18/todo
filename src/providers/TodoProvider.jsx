import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const initialTodoList = [
  {
    id: 1,
    title: "shopping list",
    content: "banana, apple, orange, milk, bread",
    completed: false,
  },
  {
    id: 2,
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
    const newTodos = todos.filter((todo) => todo.id !== todoIndex);
    setTodos(newTodos);
  };

  const doneTodo = (todoIndex) => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.id === todoIndex) {
        todo.completed = !todo.completed;
      }
    });
    setTodos(newTodos);
  };

  const editTodo = (newTodo) => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.id === newTodo.id) {
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
