import React, { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  ButtonGroup,
  Card,
  ListGroup,
  ToggleButton,
} from "react-bootstrap";

import ToDoList from "./components/ToDoList/ToDoList";
import Todo from "./components/ToDo/ToDo";

import { ISRadio, IsTodo, RadioValue } from "./typescript/interfaces";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
  const [radioValue, setRadioValue] = useState<string>("All");
  const radios: RadioValue[] = [
    { name: "All", variant: "outline-warning" },
    { name: "Active", variant: "outline-primary" },
    { name: "Completed", variant: "outline-success" },
  ];

  const [todos, setTodos] = useState<IsTodo[]>([
    {
      id: uuidv4(),
      text: "Выполнить тестовое задание",
      isDone: true,
    },
    {
      id: uuidv4(),
      text: "Покормить дракона",
      isDone: false,
    },
  ]);

  const countTodo = todos.filter((todo: IsTodo) => !todo.isDone);

  const isRadios: ISRadio = {
    All: "All",
    Active: false,
    Completed: true,
  };

  const filterTodo = todos.filter(
    (todo: IsTodo) =>
      isRadios[radioValue] === "All" || todo.isDone === isRadios[radioValue]
  );

  const addTodo = (id: string, text: string, isDone: boolean = false): void => {
    const newTodos = [...todos, { id, text, isDone }];
    setTodos(newTodos);
  };

  const markTodo = (index: string): void => {
    const newTodos = [...todos];
    const foundElementIndex = newTodos.findIndex(
      ({ id }: { id: string }) => id === index
    );
    newTodos[foundElementIndex].isDone = !newTodos[foundElementIndex].isDone;
    setTodos(newTodos);
  };

  const removeTodo = (index: string): void => {
    const newTodos = [...todos];
    const foundElementIndex = newTodos.findIndex(
      ({ id }: { id: string }) => id === index
    );
    newTodos.splice(foundElementIndex, 1);
    setTodos(newTodos);
  };

  const clearDoneTodo = (): void => {
    const newTodos = [...todos];
    const CompletedTodo = newTodos.filter((todo: IsTodo) => !todo.isDone);
    setTodos(CompletedTodo);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todos</h1>
        <div className="button-group">
          <ToDoList addTodo={addTodo} />
          <div className="items-group">
            <ButtonGroup style={{ position: "absolute", top: 48 }}>
              {radios.map((radio: RadioValue, index: number) => (
                <ToggleButton
                  style={{ margin: "1px" }}
                  key={index}
                  id={`radio-${index}`}
                  type="radio"
                  variant={radio.variant}
                  name="radio"
                  value={radio.name}
                  checked={radioValue === radio.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setRadioValue(e.currentTarget.value)
                  }
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
            <Card style={{ width: "8rem", marginBottom: "10px" }}>
              <ListGroup variant="flush">
                <ListGroup.Item
                  style={{
                    color: countTodo.length > 0 ? "#0d6efd" : "#198754",
                  }}
                >
                  {countTodo.length} items left
                </ListGroup.Item>
              </ListGroup>
            </Card>
            <Button variant="danger" onClick={clearDoneTodo}>
              Clear Completed
            </Button>
          </div>
        </div>
        <div>
          {filterTodo.map((todo: IsTodo) => (
            <Card className="mb-3" key={todo.id}>
              <Card.Body>
                <Todo
                  key={todo.id}
                  index={todo.id}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
