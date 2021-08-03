import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { FilterValids, setFilter } from '../../../filter/filter.action';
import { clearAllCompleted } from '../../todos.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: FilterValids = 'all';
  filters: FilterValids[] = ['all', 'pending', 'completed'];

  pendings = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(({todos, filter}) => {
      this.currentFilter = filter as FilterValids;
      this.pendings = todos.filter(todo => !todo.completed).length;
    });
  }

  changeFilter(filter: FilterValids): void {
    this.store.dispatch(setFilter({filter}));
  }

  clearAll(): void {
    this.store.dispatch(clearAllCompleted());
  }

}
