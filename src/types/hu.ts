export enum TodoState {
  Todo = 'todo',
  Doing = 'doing',
  Done = 'done',
}

export interface TodoItem {
  id: string;
  state: TodoState;
  name: string;
  favorite: boolean;
}

export const todoStates = [
  TodoState.Todo,
  TodoState.Doing,
  TodoState.Done,
];