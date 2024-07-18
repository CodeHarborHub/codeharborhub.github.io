---
id: lesson-2
title: "Animation Triggers and States"
sidebar_label: Triggers and States
sidebar_position: 2
description: "Animation Triggers and States"
tags: [courses,intermediate-level,Basic Structure,Introduction]
---
 

Animation triggers are used to define named sets of animations, and states define the end styles of the animation.

1. **Installing Angular Animations**:
   ```bash
   ng add @angular/animations
   ```

2. **Setting Up Animations**:
   ```typescript
   // app.module.ts
   import { BrowserModule } from '@angular/platform-browser';
   import { NgModule } from '@angular/core';
   import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
   import { AppComponent } from './app.component';

   @NgModule({
     declarations: [
       AppComponent
     ],
     imports: [
       BrowserModule,
       BrowserAnimationsModule
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

3. **Defining Animation Triggers and States**:
   ```typescript
   // app.component.ts
   import { Component } from '@angular/core';
   import { trigger, state, style, transition, animate } from '@angular/animations';

   @Component({
     selector: 'app-root',
     template: `
       <div [@simpleAnimation]="state" (click)="toggleState()">
         Click me to animate
       </div>
     `,
     styles: [`
       div {
         width: 200px;
         height: 200px;
         background-color: lightblue;
         margin: 100px auto;
         text-align: center;
         line-height: 200px;
       }
     `],
     animations: [
       trigger('simpleAnimation', [
         state('start', style({
           backgroundColor: 'lightblue',
           transform: 'scale(1)'
         })),
         state('end', style({
           backgroundColor: 'lightgreen',
           transform: 'scale(1.5)'
         })),
         transition('start <=> end', [
           animate('300ms ease-in')
         ])
       ])
     ]
   })
   export class AppComponent {
     state = 'start';

     toggleState() {
       this.state = this.state === 'start' ? 'end' : 'start';
     }
   }
   ```
