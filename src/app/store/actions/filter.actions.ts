import { createAction, props } from '@ngrx/store';

export type validFilterType = 'all' | 'active' | 'completed';

export const setFilterTodo = createAction(
  '[FILTER] Set filter into Todo actions',
  props<{ filterTodo: validFilterType }>(),
);
