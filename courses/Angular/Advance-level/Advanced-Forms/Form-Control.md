---
id: lesson-2
title: "Custom Form Controls"
sidebar_label: Form Controls
sidebar_position: 2
description: "Custom Form Controls"
tags: [courses,Advanced-level,Form Controls,Introduction]
---



Creating custom form controls allows you to encapsulate complex form logic and UI in reusable components.

1. **Creating a Custom Control**:
   ```typescript
   import { Component, forwardRef } from '@angular/core';
   import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

   @Component({
     selector: 'app-custom-input',
     template: `<input [(ngModel)]="value" (ngModelChange)="onChange($event)" />`,
     providers: [
       {
         provide: NG_VALUE_ACCESSOR,
         useExisting: forwardRef(() => CustomInputComponent),
         multi: true
       }
     ]
   })
   export class CustomInputComponent implements ControlValueAccessor {
     value: string;

     onChange = (value: string) => {};
     onTouched = () => {};

     writeValue(value: string): void {
       this.value = value;
     }

     registerOnChange(fn: any): void {
       this.onChange = fn;
     }

     registerOnTouched(fn: any): void {
       this.onTouched = fn;
     }
   }
   ```

2. **Using Custom Control in a Form**:
   ```html
   <form [formGroup]="form">
     <app-custom-input formControlName="customField"></app-custom-input>
   </form>
   ```
