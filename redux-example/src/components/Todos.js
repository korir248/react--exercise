import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, markTodoAsComplete } from "../redux/actions/todosActions";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo) => (
        <>
          <h4
            key={todo.id}
            
          >
            {todo.title}
          </h4>
          <div style={{ display: "flex" }}>
            <button onClick={() => dispatch(removeTodo(todo.id))}>x</button>
            <button onClick={() => dispatch(markTodoAsComplete(todo.id))}>
              completed
            </button>
          </div>
        </>
      ))}
    </div>
  );
}

export default Todos;
