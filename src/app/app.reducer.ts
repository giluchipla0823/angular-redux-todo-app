import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todosReducer } from './todos/todos.reducer';
import { FilterValids } from './filter/filter.action';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
    todos: Todo[];
    filter: string;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todosReducer,
    filter: filterReducer
};
