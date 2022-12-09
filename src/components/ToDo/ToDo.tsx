import React from "react";

import { Button } from "react-bootstrap";

import { Todos } from "../../typescript/interfaces";

const Todo = ({ todo, index, markTodo, removeTodo, updateTodo }: Todos) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button
          variant="outline-success"
          onClick={() => markTodo(index)}
          title={todo.isDone ? "Reestablish" : "To complete"}
        >
          {todo.isDone ? "↺" : "✓"}
        </Button>{" "}
        <Button
          variant="outline-danger"
          onClick={() => removeTodo(index)}
          title="Delete"
        >
          ✕
        </Button>{" "}
        {!todo.isDone && (
          <Button
            variant="outline-warning"
            onClick={() => updateTodo(index)}
            title="Edit"
          >
            ✎
          </Button>
        )}
      </div>
    </div>
  );
};

export default Todo;
