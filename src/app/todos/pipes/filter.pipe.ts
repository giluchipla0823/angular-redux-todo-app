import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FilterValids } from '../../filter/filter.action';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: FilterValids): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);

      case 'pending':
        return todos.filter(todo => !todo.completed);

      default:
        return todos;
    }
  }

}
