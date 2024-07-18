---
id: lesson-3
title: "NgRx (Redux for Angular) Basics"
sidebar_label: NgRx
sidebar_position: 3
description: "NgRx (Redux for Angular) Basics"
tags: [courses,intermediate-level,Redux,Introduction]
---
 
 

NgRx is a state management library for Angular that implements the Redux pattern, providing a predictable state container for managing the state of Angular applications.

1. **Installing NgRx**:
   ```bash
   ng add @ngrx/store
   ng add @ngrx/effects
   ```

2. **Setting Up NgRx Store**:
   - **Define State and Actions**:
     ```typescript
     // state.ts
     export interface AppState {
       counter: number;
     }

     export const initialState: AppState = {
       counter: 0
     };
     ```

     ```typescript
     // actions.ts
     import { createAction } from '@ngrx/store';

     export const increment = createAction('[Counter] Increment');
     export const decrement = createAction('[Counter] Decrement');
     export const reset = createAction('[Counter] Reset');
     ```

   - **Create Reducer**:
     ```typescript
     // reducer.ts
     import { createReducer, on } from '@ngrx/store';
     import { increment, decrement, reset } from './actions';
     import { initialState } from './state';

     const _counterReducer = createReducer(initialState,
       on(increment, state => ({ ...state, counter: state.counter + 1 })),
       on(decrement, state => ({ ...state, counter: state.counter - 1 })),
       on(reset, state => ({ ...state, counter: 0 }))
     );

     export function counterReducer(state, action) {
       return _counterReducer(state, action);
     }
     ```

   - **Register Reducer in App Module**:
     ```typescript
     // app.module.ts
     import { BrowserModule } from '@angular/platform-browser';
     import { NgModule } from '@angular/core';
     import { StoreModule } from '@ngrx/store';
     import { counterReducer } from './reducer';

     import { AppComponent } from './app.component';

     @NgModule({
       declarations: [
         AppComponent
       ],
       imports: [
         BrowserModule,
         StoreModule.forRoot({ counter: counterReducer })
       ],
       providers: [],
       bootstrap: [AppComponent]
     })
     export class AppModule { }
     ```

   - **Using the Store in Components**:
     ```typescript
     // app.component.ts
     import { Component } from '@angular/core';
     import { Store } from '@ngrx/store';
     import { Observable } from 'rxjs';
     import { increment, decrement, reset } from './actions';
     import { AppState } from './state';

     @Component({
       selector: 'app-root',
       template: `
         <div>
           <h1>Counter: {{ counter$ | async }}</h1>
           <button (click)="increment()">Increment</button>
           <button (click)="decrement()">Decrement</button>
           <button (click)="reset()">Reset</button>
         </div>
       `
     })
     export class AppComponent {
       counter$: Observable<number>;

       constructor(private store: Store<{ counter: AppState }>) {
         this.counter$ = store.select('counter').pipe(map(state => state.counter));
       }

       increment() {
         this.store.dispatch(increment());
       }

       decrement() {
         this.store.dispatch(decrement());
       }

       reset() {
         this.store.dispatch(reset());
       }
     }
     ```

