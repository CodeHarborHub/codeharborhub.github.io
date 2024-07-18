---
id: lesson-3
title: "Keyframe Animations"
sidebar_label: Keyframe
sidebar_position: 3
description: "Keyframe Animations in Angular"
tags: [courses,intermediate-level,Basic Structure,Introduction]
---
  

Keyframe animations allow you to define multiple intermediate steps in an animation.

1. **Defining Keyframe Animations**:
   ```typescript
   import { keyframes } from '@angular/animations';

   @Component({
     selector: 'app-root',
     template: `
       <div [@keyframeAnimation]="state" (click)="toggleState()">
         Click me to animate with keyframes
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
       trigger('keyframeAnimation', [
         state('start', style({
           backgroundColor: 'lightblue',
           transform: 'scale(1)'
         })),
         state('end', style({
           backgroundColor: 'lightgreen',
           transform: 'scale(1.5)'
         })),
         transition('start <=> end', [
           animate('1000ms ease-in', keyframes([
             style({ transform: 'scale(1.1)', offset: 0.2 }),
             style({ transform: 'scale(1.2)', offset: 0.4 }),
             style({ transform: 'scale(1.3)', offset: 0.6 }),
             style({ transform: 'scale(1.4)', offset: 0.8 }),
             style({ transform: 'scale(1.5)', offset: 1 })
           ]))
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
