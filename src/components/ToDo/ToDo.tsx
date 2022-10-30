import React from "react";

import { Button } from "react-bootstrap";

import { Todos } from "../../typescript/interfaces";

const Todo = ({ todo, index, markTodo, removeTodo }: Todos) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          {todo.isDone ? "↺" : "✓"}
        </Button>{" "}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </Button>
      </div>
    </div>
  );
};

export default Todo;
