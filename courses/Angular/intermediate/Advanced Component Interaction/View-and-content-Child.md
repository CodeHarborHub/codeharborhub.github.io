---
id: lesson-2
title: "ViewChild and ContentChild"
sidebar_label: ViewChild and ContentChild
sidebar_position: 2
description: "ViewChild and ContentChild"
tags: [courses,intermediate-level,Basic Structure,Introduction]
---


These decorators are used to access child components, directives, or DOM elements.

1. **@ViewChild**:
   - Access a child component, directive, or DOM element from the parent component.

   **Parent Component**:
   ```typescript
   // parent.component.ts
   import { Component, AfterViewInit, ViewChild } from '@angular/core';
   import { ChildComponent } from './child.component';

   @Component({
     selector: 'app-parent',
     template: `
       <app-child></app-child>
       <button (click)="accessChild()">Access Child</button>
     `
   })
   export class ParentComponent implements AfterViewInit {
     @ViewChild(ChildComponent) child: ChildComponent;

     ngAfterViewInit() {
       console.log(this.child.childMessage);
     }

     accessChild() {
       this.child.childMessage = 'Message updated by Parent';
     }
   }
   ```

   **Child Component**:
   ```typescript
   // child.component.ts
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-child',
     template: `<p>{{childMessage}}</p>`
   })
   export class ChildComponent {
     childMessage = 'Hello from Child';
   }
   ```

2. **@ContentChild**:
   - Access projected content (ng-content) in a component.

   **Parent Component**:
   ```typescript
   // parent.component.ts
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-parent',
     template: `
       <app-child>
         <p>Content projected from Parent</p>
       </app-child>
     `
   })
   export class ParentComponent {}
   ```

   **Child Component**:
   ```typescript
   // child.component.ts
   import { Component, ContentChild, AfterContentInit } from '@angular/core';

   @Component({
     selector: 'app-child',
     template: `<ng-content></ng-content>`
   })
   export class ChildComponent implements AfterContentInit {
     @ContentChild('projectedContent') content;

     ngAfterContentInit() {
       console.log(this.content.nativeElement.textContent);
     }
   }
   ```

   **Template**:
   ```html
   <!-- parent.component.html -->
   <app-child>
     <p #projectedContent>Content projected from Parent</p>
   </app-child>
   ```

