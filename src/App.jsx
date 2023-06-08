import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoProvider from "./providers/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <Navbar />
        <main className="grid-container">
          <TodoForm />
          <TodoList />
        </main>
      </div>
    </TodoProvider>
  );
}

export default App;
