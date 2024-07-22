---
id: lesson-3
title: "Templates"
sidebar_label: Templates
sidebar_position: 3
description: "Angular Templates"
tags: [courses,beginner-level,Templates,Introduction]
---

 
Templates define the HTML structure and appearance of the view associated with a component. Angular templates are enhanced HTML with Angular directives and bindings.

Common template syntax includes:
- **Interpolation**: `{{ expression }}` for embedding expressions in the template.
- **Directives**: Special markers in the template that tell Angular to do something to the DOM elements and components. Common directives include `*ngIf`, `*ngFor`, and `ngModel`.
- **Property Binding**: `[property]="expression"` for binding DOM properties to component properties.
- **Event Binding**: `(event)="handler"` for binding DOM events to component methods.

Example of a template with directives:
```html
<!-- app.component.html -->
<h1>{{ title }}</h1>
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
<button (click)="addItem()">Add Item</button>
```
