---
id: lesson-1
title: "Built-in Directives"
sidebar_label: Directives
sidebar_position: 1
description: "Built-in Directives"
tags: [courses,beginner-level,Directives,Introduction]
--- 

**1. `ngIf`**: Conditionally includes or excludes an element in the DOM.
```html
<div *ngIf="condition">Content to display if condition is true</div>
```

**2. `ngFor`**: Repeats an element for each item in a collection.
```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

**3. `ngClass`**: Adds and removes CSS classes dynamically.
```html
<div [ngClass]="{'class-name': condition}">Content</div>
```

**4. `ngStyle`**: Adds and removes inline styles dynamically.
```html
<div [ngStyle]="{'color': condition ? 'red' : 'blue'}">Content</div>
```

**Example**:
```html
<!-- app.component.html -->
<div *ngIf="isVisible">This is conditionally visible.</div>

<ul>
  <li *ngFor="let user of users">{{ user.name }}</li>
</ul>

<div [ngClass]="{'highlight': isActive, 'bold': isBold}">Styled content</div>

<div [ngStyle]="{'background-color': isHighlighted ? 'yellow' : 'white'}">Styled content</div>
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
  isVisible = true;
  users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
  isActive = true;
  isBold = false;
  isHighlighted = true;
}
```
