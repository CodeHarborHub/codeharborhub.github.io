---
id: lesson-4
title: "NgRx Concept(Actions, Reducers, and Effects)"
sidebar_label: NgRx Concept
sidebar_position: 4
description: "NgRx Concept"
tags: [courses,intermediate-level,NgRx concept,Introduction]
---
 
NgRx divides state management into three key concepts: Actions, Reducers, and Effects.

1. **Actions**:
   - Actions are payloads of information that send data from your application to your store.

   ```typescript
   // actions.ts
   import { createAction, props } from '@ngrx/store';

   export const loadItems = createAction('[Items] Load Items');
   export const loadItemsSuccess = createAction('[Items] Load Items Success', props<{ items: any[] }>());
   export const loadItemsFailure = createAction('[Items] Load Items Failure', props<{ error: any }>());
   ```

2. **Reducers**:
   - Reducers specify how the application's state changes in response to actions.

   ```typescript
   // reducer.ts
   import { createReducer, on } from '@ngrx/store';
   import { loadItemsSuccess, loadItemsFailure } from './actions';

   export const initialState = {
     items: [],
     error: null
   };

   const _itemsReducer = createReducer(initialState,
     on(loadItemsSuccess, (state, { items }) => ({ ...state, items, error: null })),
     on(loadItemsFailure, (state, { error }) => ({ ...state, error }))
   );

   export function itemsReducer(state, action) {
     return _itemsReducer(state, action);
   }
   ```

3. **Effects**:
   - Effects handle side effects like data fetching, processing responses, and dispatching new actions.

   ```typescript
   // effects.ts
   import { Injectable } from '@angular/core';
   import { Actions, createEffect, ofType } from '@ngrx/effects';
   import { of } from 'rxjs';
   import { catchError, map, mergeMap } from 'rxjs/operators';
   import { ItemService } from './item.service';
   import { loadItems, loadItemsSuccess, loadItemsFailure } from './actions';

   @Injectable()
   export class ItemEffects {
     loadItems$ = createEffect(() => this.actions$.pipe(
       ofType(loadItems),
       mergeMap(() => this.itemService.getAllItems().pipe(
         map(items => loadItemsSuccess({ items })),
         catchError(error => of(loadItemsFailure({ error })))
       ))
     ));

     constructor(
       private actions$: Actions,
       private itemService: ItemService
     ) {}
   }
   ```

   - **Register Effects**:
     ```typescript
     // app.module.ts
     import { EffectsModule } from '@ngrx/effects';
     import { ItemEffects } from './effects';

     @NgModule({
       imports: [
         EffectsModule.forRoot([ItemEffects])
       ]
     })
     export class AppModule { }
     ```

By understanding and implementing these state management techniques, you can effectively manage the state of your Angular applications, ensuring data consistency and predictable behavior across your app.