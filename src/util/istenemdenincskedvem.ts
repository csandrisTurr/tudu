import { TodoState } from "../types/hu";

export function todoToIcon(state: TodoState) {
    switch (state) {
      case TodoState.Todo: return 'circle-off';
      case TodoState.Doing: return 'circle-on';
      case TodoState.Done: return 'check';
    }
}

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase()
      + str.slice(1);
}