---
id: lesson-3
title: "Data Binding"
sidebar_label: Data BindingHooks
sidebar_position: 3
description: "Data Binding"
tags: [courses,beginner-level,Data Binding,Introduction]
---


1. **Interpolation**: Used to bind data from the component to the template.
   ```html
   <p>{{ message }}</p>
   ```

2. **Property Binding**: Used to bind property values in the template.
   ```html
   <img [src]="imageUrl">
   ```

3. **Event Binding**: Used to bind events to methods in the component.
   ```html
   <button (click)="handleClick()">Click Me</button>
   ```

4. **Two-Way Binding**: Combines property and event binding using `ngModel`.
   ```html
   <input [(ngModel)]="name">
   ```

Example of data binding in a component:
```typescript
// data-binding.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  message: string = 'Hello, Angular!';
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  name: string = '';

  handleClick() {
    alert('Button clicked!');
  }
}
```

`data-binding.component.html`:
```html
<p>{{ message }}</p>
<img [src]="imageUrl">
<button (click)="handleClick()">Click Me</button>
<input [(ngModel)]="name">
<p>Your name: {{ name }}</p>
```