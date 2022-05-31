import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './../../store/todo.state';
import { Todo } from './../../models/todo.model';
import { validFilterType } from './../../store/actions/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  cFilter: validFilterType = 'all';
  todoList: Todo[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe(({ todos, filters }) => {
      this.todoList = todos;
      this.cFilter = filters;
    });
  }
}
