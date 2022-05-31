import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
  '[TODO] Create a new Todo item',
  props<{ text: string }>(),
);

export const togleTask = createAction(
  '[TODO] Togle todo Task',
  props<{ id: string | undefined }>(),
);

export const modifyTodo = createAction(
  '[TODO] Modify a task text',
  props<{ id: string | undefined; text: string }>(),
);

export const deleteTodo = createAction(
  '[TODO] Delete todo task',
  props<{ id: string | undefined }>(),
);

export const togleCompleteTasks = createAction(
  '[TODO] togle checked tasks',
  props<{ completeTodos: boolean }>(),
);

export const cleanTodos = createAction('[TODO] Remove all checked todos');
