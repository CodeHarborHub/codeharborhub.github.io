---
id: lesson-1
title: "Advanced Component Interaction in Angular"
sidebar_label: Component Interaction 
sidebar_position: 1
description: "Advanced Component Interaction in Angular"
tags: [courses,intermediate-level,Basic Structure,Introduction]
---
 

In Angular, components interact with each other in various ways. This includes passing data between parent and child components, accessing child component instances, emitting custom events, and dynamically loading components. Here’s a detailed guide on each of these advanced component interaction techniques.

#### Input and Output Decorators

The `@Input` and `@Output` decorators facilitate data binding between parent and child components.

1. **@Input Decorator**:
   - Used to pass data from parent to child component.

   **Parent Component**:
   ```typescript
   // parent.component.ts
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-parent',
     template: `<app-child [childMessage]="parentMessage"></app-child>`
   })
   export class ParentComponent {
     parentMessage = 'Hello from Parent';
   }
   ```

   **Child Component**:
   ```typescript
   // child.component.ts
   import { Component, Input } from '@angular/core';

   @Component({
     selector: 'app-child',
     template: `<p>{{childMessage}}</p>`
   })
   export class ChildComponent {
     @Input() childMessage: string;
   }
   ```

2. **@Output Decorator**:
   - Used to emit events from child to parent component.

   **Parent Component**:
   ```typescript
   // parent.component.ts
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-parent',
     template: `
       <app-child (messageEvent)="receiveMessage($event)"></app-child>
       <p>{{message}}</p>
     `
   })
   export class ParentComponent {
     message: string;

     receiveMessage($event: string) {
       this.message = $event;
     }
   }
   ```

   **Child Component**:
   ```typescript
   // child.component.ts
   import { Component, Output, EventEmitter } from '@angular/core';

   @Component({
     selector: 'app-child',
     template: `<button (click)="sendMessage()">Send Message</button>`
   })
   export class ChildComponent {
     @Output() messageEvent = new EventEmitter<string>();

     sendMessage() {
       this.messageEvent.emit('Hello from Child');
     }
   }
   ```
