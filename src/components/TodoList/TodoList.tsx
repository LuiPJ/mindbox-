import React, { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Form } from "react-bootstrap";
import { AddTodo } from "../../TypeScript/interfaces";

const TodoList = ({ addTodo }: AddTodo): JSX.Element => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    const uniqueId = uuidv4();
    const isDone = false;
    addTodo(uniqueId, value, isDone);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            setValue(e.target.value)
          }
          placeholder="What needs to be done?"
        />
      </Form.Group>
      <Button
        variant="success"
        style={{ margin: "10px 0px 10px auto", display: "block" }}
        type="submit"
      >
        Добавить
      </Button>
    </Form>
  );
};

export default TodoList;
