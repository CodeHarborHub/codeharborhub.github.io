---
id: lesson-2
title: "Reactive Forms"
sidebar_label: Reactive Forms
sidebar_position: 2
description: "Reactive Forms"
tags: [courses,beginner-level,Reactive Forms,Introduction]
---

 

Reactive forms are more powerful and scalable, providing more control and flexibility. They are built around observable streams, allowing for more dynamic interactions.

**Example**:

1. **Component**:
   ```typescript
   // app.component.ts
   import { Component } from '@angular/core';
   import { FormBuilder, FormGroup, Validators } from '@angular/forms';

   @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
   })
   export class AppComponent {
     userForm: FormGroup;

     constructor(private fb: FormBuilder) {
       this.userForm = this.fb.group({
         name: ['', Validators.required],
         email: ['', [Validators.required, Validators.email]]
       });
     }

     onSubmit() {
       console.log('Form Submitted!', this.userForm.value);
     }
   }
   ```

2. **Template**:
   ```html
   <!-- app.component.html -->
   <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
     <div>
       <label for="name">Name:</label>
       <input type="text" id="name" formControlName="name">
       <div *ngIf="userForm.get('name').invalid && userForm.get('name').touched">
         Name is required.
       </div>
     </div>
     <div>
       <label for="email">Email:</label>
       <input type="email" id="email" formControlName="email">
       <div *ngIf="userForm.get('email').invalid && userForm.get('email').touched">
         Enter a valid email.
       </div>
     </div>
     <button type="submit" [disabled]="!userForm.valid">Submit</button>
   </form>
   ```

3. **Module**:
   ```typescript
   // app.module.ts
   import { ReactiveFormsModule } from '@angular/forms';

   @NgModule({
     imports: [
       ReactiveFormsModule
     ],
     ...
   })
   export class AppModule { }
   ```
