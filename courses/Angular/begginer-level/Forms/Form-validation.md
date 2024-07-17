---
id: lesson-3
title: "Form Validation"
sidebar_label: Form Validation
sidebar_position: 3
description: "Learn to Angular Form Validation"
tags: [courses,beginner-level,Form Validation,Introduction]
---

 

Validation in Angular forms can be achieved using built-in validators or custom validators.

**Built-in Validators**:
- `Validators.required`
- `Validators.email`
- `Validators.minLength`
- `Validators.maxLength`
- `Validators.pattern`

**Example**:
```typescript
this.userForm = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]]
});
```

**Custom Validators**:
Custom validators can be created by implementing the `ValidatorFn` interface.

**Example**:
```typescript
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

// Usage in FormBuilder
this.userForm = this.fb.group({
  name: ['', [Validators.required, forbiddenNameValidator(/admin/i)]],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]]
});
```
