import { createReducer, on } from '@ngrx/store';

import { Todo } from './../../models/todo.model';
import * as TodoActions from './../actions/todo.actions';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.cleanTodos, (state) => state.filter(todo => !todo.done)),
  on(TodoActions.createTodo, (state, { text }) => [...state, new Todo(text)]),
  on(TodoActions.deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(TodoActions.togleCompleteTasks, (state, { completeTodos }) => state.map(todo => ({ ...todo, done: completeTodos }))),
  on(TodoActions.modifyTodo, (state, { id, text }) => {
    return state.map((todo) => {
      return todo.id !== id ? todo : { ...todo, text: text };
    });
  }),
  on(TodoActions.togleTask, (state, { id }) => {
    return state.map((todo) => {
      return todo.id !== id ? todo : { ...todo, done: !todo.done };
    });
  }),
);
