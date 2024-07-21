---
id: lesson-4
title: "Animation Transitions and Sequences"
sidebar_label: Transitions and Sequences
sidebar_position: 4
description: "Animation Transitions and Sequences"
tags: [courses,intermediate-level,Basic Structure,Introduction]
---
 
 

Transitions define how to switch from one state to another, while sequences allow you to run animations in a specific order.

1. **Defining Animation Transitions**:
   ```typescript
   @Component({
     selector: 'app-root',
     template: `
       <div [@sequenceAnimation]="state" (click)="toggleState()">
         Click me for sequential animation
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
       trigger('sequenceAnimation', [
         state('start', style({
           backgroundColor: 'lightblue',
           transform: 'translateX(0) scale(1)'
         })),
         state('end', style({
           backgroundColor: 'lightgreen',
           transform: 'translateX(100px) scale(1.5)'
         })),
         transition('start => end', [
           animate('500ms ease-in', style({ transform: 'translateX(50px) scale(1.2)' })),
           animate('500ms ease-in')
         ]),
         transition('end => start', [
           animate('500ms ease-out', style({ transform: 'translateX(-50px) scale(1.2)' })),
           animate('500ms ease-out')
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
 