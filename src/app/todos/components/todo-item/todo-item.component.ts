import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../../todos.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @ViewChild('inputEdit', {static: false}) inputEdit: ElementRef;
  @Input() todo: Todo;

  editing = false;
  checkCompleted: FormControl;
  inputEditText: FormControl;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.inputEditText = new FormControl(this.todo.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe(() => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    });
  }

  edit(): void {
    this.editing = true;

    this.inputEditText.setValue(this.todo.text);

    setTimeout(() => this.inputEdit.nativeElement.select(), 0);
  }

  save(): void {
    this.editing = false;

    if (this.inputEditText.invalid || this.inputEditText.value === this.todo.text) {
      return;
    }

    this.store.dispatch(actions.edit({id: this.todo.id, text: this.inputEditText.value}));
  }

  remove(): void {
    this.store.dispatch(actions.remove({id: this.todo.id}));
  }

}
