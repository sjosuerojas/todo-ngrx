import { Action, createReducer, on } from '@ngrx/store';

import * as FilterActions from './../actions/filter.actions';

export const initialState: FilterActions.validFilterType = 'all';

export const filterReducer = createReducer<FilterActions.validFilterType, Action>(
  initialState,
  on(FilterActions.setFilterTodo, (_, { filterTodo }) => filterTodo),
);
