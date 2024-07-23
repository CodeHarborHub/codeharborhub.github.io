---
id: lesson-3
title: "Form Arrays"
sidebar_label: Async
sidebar_position: 3
description: "Form Arrays"
tags: [courses,Advanced-level,Form Arrays,Introduction]
---
 

Form arrays are used to manage an array of form controls or groups, allowing you to build complex forms.

1. **Creating a Form Array**:
   ```typescript
   import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

   this.form = this.fb.group({
     users: this.fb.array([
       this.fb.group({ name: '', age: '' }),
       this.fb.group({ name: '', age: '' })
     ])
   });
   ```

2. **Template for Form Array**:
   ```html
   <form [formGroup]="form">
     <div formArrayName="users">
       <div *ngFor="let user of form.get('users').controls; let i = index">
         <div [formGroupName]="i">
           <input formControlName="name" placeholder="Name"/>
           <input formControlName="age" placeholder="Age"/>
         </div>
       </div>
     </div>
   </form>
   ```
