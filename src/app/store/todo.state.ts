import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './../models/todo.model';
import { validFilterType } from './actions/filter.actions';

import { todoReducer } from './reducers/todo.reducer';
import { filterReducer } from './reducers/filter.reducer';

export interface AppState {
  todos: Todo[];
  filters: validFilterType;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filters: filterReducer,
};
