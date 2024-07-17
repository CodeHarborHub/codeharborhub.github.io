---
id: lesson-1
title: "Angular Forms"
sidebar_label: Angular Forms
sidebar_position: 1
description: "Angular Forms"
tags: [courses,beginner-level,Angular Forms,Introduction]
---
 

Angular provides two approaches for working with forms: template-driven forms and reactive forms. Both approaches provide powerful ways to handle user inputs, validate data, and manage form submissions.

#### Template-Driven Forms

Template-driven forms rely on Angular's directives and are simpler to implement for basic scenarios.

**Example**:

1. **Template**:
   ```html
   <!-- app.component.html -->
   <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
     <div>
       <label for="name">Name:</label>
       <input type="text" id="name" name="name" ngModel required>
     </div>
     <div>
       <label for="email">Email:</label>
       <input type="email" id="email" name="email" ngModel required>
     </div>
     <button type="submit" [disabled]="!userForm.valid">Submit</button>
   </form>
   ```

2. **Component**:
   ```typescript
   // app.component.ts
   import { Component } from '@angular/core';
   import { NgForm } from '@angular/forms';

   @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
   })
   export class AppComponent {
     onSubmit(form: NgForm) {
       console.log('Form Submitted!', form.value);
     }
   }
   ```

3. **Module**:
   ```typescript
   // app.module.ts
   import { FormsModule } from '@angular/forms';

   @NgModule({
     imports: [
       FormsModule
     ],
     ...
   })
   export class AppModule { }
   ```
