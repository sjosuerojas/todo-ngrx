import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from './../../models/todo.model';
import { validFilterType } from './../../store/actions/filter.actions';

@Pipe({
  name: 'filtersTodo',
})
export class FiltersPipe implements PipeTransform {
  transform(todos: Todo[], filter: validFilterType): Todo[] {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.done);
      case 'completed':
        return todos.filter((todo) => todo.done);
    }
  }
}
