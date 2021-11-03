import "./App.css";
import AddTodo from "./components/AddTodo";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Counter />
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
