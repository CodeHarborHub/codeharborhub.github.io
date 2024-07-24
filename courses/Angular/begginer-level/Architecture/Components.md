---
id: lesson-1
title: "Components"
sidebar_label: Components
sidebar_position: 1
description: "Angular Components"
tags: [courses,beginner-level,Components,Introduction]
---
 
Components are the building blocks of an Angular application. Each component consists of:

1. **A TypeScript class**: Contains the business logic and data for the component.
2. **An HTML template**: Defines the view (UI) for the component.
3. **CSS styles**: Specify the look and feel for the component.
4. **Metadata**: Defined using the `@Component` decorator, which provides additional information about the component.

Example of a component:
```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
}
```
```html
<!-- app.component.html -->
<h1>{{ title }}</h1>
```
