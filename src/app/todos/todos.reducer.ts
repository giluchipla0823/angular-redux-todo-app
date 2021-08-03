import { createReducer, on } from '@ngrx/store';
import * as actions from './todos.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [];

const _todosReducer = createReducer(
  initialState,
  on(actions.create, (state, {text}) => [...state, new Todo(text)]),
  on(actions.toggle, (state, {id}) => _toogle(state, id)),
  on(actions.edit, (state, {id, text}) => _edit(state, id, text)),
  on(actions.remove, (state, {id}) => state.filter((todo: Todo) => todo.id !== id)),
  on(actions.toggleAll, (state, {completed}) => _toggleAll(state, completed)),
  on(actions.clearAllCompleted, (state) => state.filter(todo => !todo.completed)),
);

const _toggleAll = (state: Todo[], completed: boolean): Todo[] => {
  return state.map(todo => {
    return {
      ...todo,
      completed
    };
  });
};

const _toogle = (state: Todo[], id: number): Todo[] => {
  return state.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }

    return todo;
  });
};

const _edit = (state: Todo[], id: number, text: string): Todo[] => {
  return state.map(todo => {
    if (todo.id === id) {
      return { ...todo, text };
    }

    return todo;
  });
};

export function todosReducer(state, action) {
  return _todosReducer(state, action);
}

