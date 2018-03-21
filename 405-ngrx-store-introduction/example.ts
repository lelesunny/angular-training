﻿import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import * as state from './state';

@Component({
  selector: 'abc-page',
  templateUrl: './example.html'
})
export class ExampleComponent {
  berry$: Observable<number>;
  apple$: Observable<number>;
  total$: Observable<number>;

  constructor(public store: Store<state.AppState>) {
    this.berry$ = store.select(state => state.berryCounter);
    this.apple$ = store.select(state => state.appleCounter);
    this.total$ = store.map(s => s.berryCounter + s.appleCounter);
  }

  pickBerry() {
    this.store.dispatch({ type: state.PICK_BERRY });
  }

  pickBerries() {
    this.store.dispatch({ type: state.PICK_BERRIES, payload: 20 });
  }

  pickApple() {
    this.store.dispatch({ type: state.PICK_APPLE });
  }

  pickApples() {
    this.store.dispatch({ type: state.PICK_APPLES, payload: 3 });
  }

  empty() {
    this.store.dispatch({ type: state.EMPTY_CART });
  }
}
