import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoActionsComponent } from './todo-actions/todo-actions.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoLayoutComponent } from './todo-layout.component';
import { CopyRightComponent } from './copy-right/copy-right.component';
import { FiltersPipe } from './pipes/filters.pipe';

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoActionsComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoLayoutComponent,
    CopyRightComponent,
    FiltersPipe,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodoLayoutComponent, CopyRightComponent],
})
export class TodoModule {}
