---
id: lesson-1
title: "Advanced Forms in Angular"
sidebar_label: Advanced Forms
sidebar_position: 1
description: "Advanced Forms in Angular"
tags: [courses,Advanced-level,Form,Introduction]
---
 
Angular's reactive forms provide powerful tools for creating complex form structures and handling user input efficiently. Here are some advanced concepts you can leverage in Angular forms.

#### Dynamic Forms

Dynamic forms allow you to create forms whose structure can change at runtime based on user actions or external data.

1. **Creating Dynamic Forms**:
   ```typescript
   import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-dynamic-form',
     templateUrl: './dynamic-form.component.html',
   })
   export class DynamicFormComponent {
     form: FormGroup;

     constructor(private fb: FormBuilder) {
       this.form = this.fb.group({
         items: this.fb.array([])
       });
     }

     get items(): FormArray {
       return this.form.get('items') as FormArray;
     }

     addItem() {
       const item = this.fb.control('');
       this.items.push(item);
     }

     removeItem(index: number) {
       this.items.removeAt(index);
     }
   }
   ```

2. **Dynamic Form Template**:
   ```html
   <form [formGroup]="form">
     <div formArrayName="items">
       <div *ngFor="let item of items.controls; let i = index">
         <input [formControlName]="i" placeholder="Item"/>
         <button (click)="removeItem(i)">Remove</button>
       </div>
     </div>
     <button (click)="addItem()">Add Item</button>
   </form>
   ```
