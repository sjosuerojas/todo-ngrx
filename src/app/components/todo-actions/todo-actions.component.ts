import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './../../store/todo.state';
import * as FilterActions from 'src/app/store/actions/filter.actions';
import * as TodoActions from 'src/app/store/actions/todo.actions';

@Component({
  selector: 'app-todo-actions',
  templateUrl: './todo-actions.component.html',
})
export class TodoActionsComponent implements OnInit {
  pending: number = 0;
  currentFilter: FilterActions.validFilterType = 'all';
  filters: FilterActions.validFilterType[] = ['all', 'active', 'completed'];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe(({ todos, filters }) => {
      this.currentFilter = filters;
      this.pending = todos.filter((todo) => !todo.done).length;
    });
  }

  changeFilter(filter: FilterActions.validFilterType) {
    this.store.dispatch(FilterActions.setFilterTodo({ filterTodo: filter }));
  }

  removeCompleted() {
    this.store.dispatch(TodoActions.cleanTodos());
  }
}
