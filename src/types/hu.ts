export enum TodoState {
  Todo = 'todo',
  Doing = 'doing',
  Done = 'done',
}

export interface TodoItem {
  no: number;
  state: TodoState;
  name: string;
}

export const todoStates = [
  TodoState.Todo,
  TodoState.Doing,
  TodoState.Done,
];