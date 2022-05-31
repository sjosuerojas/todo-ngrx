import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as TodoActions from '../store/actions/todo.actions';
import { AppState } from '../store/todo.state';

@Component({
  selector: 'app-todo-layout',
  templateUrl: './todo-layout.component.html',
})
export class TodoLayoutComponent {
  completeTodos: boolean = false;

  constructor(private store: Store<AppState>) {}

  checkAllTodos() {
    this.completeTodos = !this.completeTodos;
    this.store.dispatch(
      TodoActions.togleCompleteTasks({ completeTodos: this.completeTodos }),
    );
  }
}
