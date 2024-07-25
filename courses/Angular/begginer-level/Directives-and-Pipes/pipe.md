---
id: lesson-3
title: "Using Pipes for Data Transformation"
sidebar_label: Pipes
sidebar_position: 3
description: "Using Pipes for Data Transformation"
tags: [courses,beginner-level,Basic Structure,Introduction]
---


Pipes are used to transform data in templates. Angular provides several built-in pipes like `DatePipe`, `UpperCasePipe`, `LowerCasePipe`, `CurrencyPipe`, and `DecimalPipe`.

**Example**:
```html
<!-- app.component.html -->
<p>{{ today | date:'fullDate' }}</p>
<p>{{ name | uppercase }}</p>
<p>{{ price | currency:'USD':true }}</p>
```

**Component**:
```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = new Date();
  name = 'Angular';
  price = 123.45;
}
```
