---
id: lesson-4
title: "Advanced Form Validation"
sidebar_label: Form Validation
sidebar_position: 4
description: "Advanced Form Validation"
tags: [courses,Advanced-level,Form Validation,Introduction]
---

 

Advanced validation techniques allow you to implement complex validation rules for your forms.

1. **Custom Validators**:
   ```typescript
   import { AbstractControl, ValidatorFn } from '@angular/forms';

   export function ageValidator(min: number): ValidatorFn {
     return (control: AbstractControl): { [key: string]: any } | null => {
       const valid = control.value >= min;
       return valid ? null : { 'ageInvalid': { value: control.value } };
     };
   }
   ```

2. **Using Custom Validators**:
   ```typescript
   this.form = this.fb.group({
     age: ['', [Validators.required, ageValidator(18)]]
   });
   ```

3. **Asynchronous Validators**:
   Asynchronous validators are useful for checking values against a remote server.
   ```typescript
   import { Observable, of } from 'rxjs';
   import { delay } from 'rxjs/operators';

   export function usernameValidator(): AsyncValidatorFn {
     return (control: AbstractControl): Observable<ValidationErrors | null> => {
       const forbidden = control.value === 'admin';
       return of(forbidden ? { 'usernameForbidden': { value: control.value } } : null).pipe(delay(1000));
     };
   }
   ```

4. **Using Async Validators**:
   ```typescript
   this.form = this.fb.group({
     username: ['', { validators: [Validators.required], asyncValidators: [usernameValidator()] }]
   });
   ```
 