import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { IsTodo, UpdateTodo } from "../../typescript/interfaces";

const ToDoUpdate = ({
  index,
  todo,
  canceled,
  edit,
}: UpdateTodo): JSX.Element => {
  const FindElement = todo?.find((el: IsTodo) => el.id === index);
  const [value, setValue] = useState<string | undefined>(FindElement?.text);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    if (FindElement) {
      edit(FindElement.id, value);
      canceled();
    }
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
          placeholder="Can't be empty"
        />
      </Form.Group>
      <div
        style={{
          margin: "10px 0 10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
        }}
      >
        <Button variant="success" style={{ marginLeft: "10px" }} type="submit">
          Edit
        </Button>
        <Button
          variant="success"
          style={{ marginLeft: "10px" }}
          type="submit"
          onClick={canceled}
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default ToDoUpdate;
