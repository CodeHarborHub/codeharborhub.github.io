---
id: lesson-2
title: "Using `BehaviorSubject` for State Management"
sidebar_label: BehaviorSubject 
sidebar_position: 2
description: "Using `BehaviorSubject` for State Management"
tags: [courses,intermediate-level,subject behaviour,Introduction]
---
  

`BehaviorSubject` is a part of RxJS and is used to handle state management in a more straightforward way. It holds a value and emits it to new subscribers immediately upon subscription.

1. **Creating a Service with `BehaviorSubject`**:
   ```typescript
   // state.service.ts
   import { Injectable } from '@angular/core';
   import { BehaviorSubject } from 'rxjs';

   @Injectable({
     providedIn: 'root'
   })
   export class StateService {
     private stateSubject = new BehaviorSubject<string>('initial state');
     state$ = this.stateSubject.asObservable();

     updateState(newState: string) {
       this.stateSubject.next(newState);
     }
   }
   ```

2. **Using the Service in Components**:
   - **Component 1**:
     ```typescript
     // component1.component.ts
     import { Component } from '@angular/core';
     import { StateService } from './state.service';

     @Component({
       selector: 'app-component1',
       template: `
         <div>
           <p>Component 1</p>
           <button (click)="updateState()">Update State</button>
         </div>
       `
     })
     export class Component1 {
       constructor(private stateService: StateService) {}

       updateState() {
         this.stateService.updateState('new state from component 1');
       }
     }
     ```

   - **Component 2**:
     ```typescript
     // component2.component.ts
     import { Component, OnInit } from '@angular/core';
     import { StateService } from './state.service';

     @Component({
       selector: 'app-component2',
       template: `
         <div>
           <p>Component 2</p>
           <p>State: {{ state }}</p>
         </div>
       `
     })
     export class Component2 implements OnInit {
       state: string;

       constructor(private stateService: StateService) {}

       ngOnInit() {
         this.stateService.state$.subscribe(state => {
           this.state = state;
         });
       }
     }
     ```