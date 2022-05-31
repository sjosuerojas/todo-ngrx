import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as TodoActions from './../../store/actions/todo.actions';
import { AppState } from './../../store/todo.state';
import { Todo } from './../../models/todo.model';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;
  @ViewChild('refInput') refInputEditing: ElementRef | undefined;

  checkDone: FormControl = new FormControl();
  editInput: FormControl = new FormControl();
  isEditing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkDone = new FormControl(this.todo?.done);
    this.editInput = new FormControl(this.todo?.text, Validators.required);
    this.checkDone.valueChanges.subscribe((value: boolean) => {
      this.store.dispatch(TodoActions.togleTask({ id: this.todo?.id }));
    });
  }

  modifyTask() {
    this.isEditing = true;
    this.editInput.setValue(this.todo?.text)
    this.refInputEditing?.nativeElement.focus();
  }

  editingOff() {
    this.isEditing = false;
    if (this.editInput.invalid) return;
    if (this.editInput.value === this.todo?.text) return;

    this.store.dispatch(
      TodoActions.modifyTodo({ id: this.todo?.id, text: this.editInput.value }),
    );
  }

  deleteTask() {
    this.store.dispatch(
      TodoActions.deleteTodo({ id: this.todo?.id }),
    )
  }
}
