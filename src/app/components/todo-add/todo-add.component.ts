import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';

import { AppState } from './../../store/todo.state';
import * as TodoActions from './../../store/actions/todo.actions';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
})
export class TodoAddComponent {
  todoInputAdd: FormControl;

  constructor(private store: Store<AppState>) {
    this.todoInputAdd = new FormControl('', Validators.required);
  }

  addtTask() {
    if (this.todoInputAdd.invalid) return;
    this.store.dispatch(
      TodoActions.createTodo({ text: this.todoInputAdd.value }),
    );

    this.todoInputAdd.reset()
  }
}
