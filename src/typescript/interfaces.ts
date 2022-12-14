export interface IsTodo {
  id: string;
  text: string;
  isDone?: boolean;
}

export interface UpdateTodo {
  index: string | null;
  todo: IsTodo[];
  canceled: () => void;
  edit: (id: string, text?: string) => void;
}

export interface AddTodo {
  addTodo: (id: string, text: string, isDone: boolean) => void;
}

export interface Todos {
  todo: IsTodo;
  index: string;
  markTodo: (index: string) => void;
  removeTodo: (index: string) => void;
  updateTodo: (index: string) => void;
}

export interface RadioValue {
  name: string;
  variant: string;
}

export interface ISRadio {
  [key: string]: string | boolean;
}
