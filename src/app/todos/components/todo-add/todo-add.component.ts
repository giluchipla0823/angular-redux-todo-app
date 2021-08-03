import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import * as actions from '../../todos.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  inputText: FormControl;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.inputText = new FormControl('', Validators.required);
  }

  add(): void {
    if (this.inputText.invalid) {
      return;
    }

    this.store.dispatch(actions.create({text: this.inputText.value}));

    this.inputText.reset();
  }

}
