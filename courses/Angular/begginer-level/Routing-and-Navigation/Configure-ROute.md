---
id: lesson-2
title: "Configuring Routes"
sidebar_label: Configuring Routes
sidebar_position: 2
description: "Configuring Routes"
tags: [courses,beginner-level,Configuring Routes,Introduction]
---


Routes are defined in the `Routes` array, where each route maps a URL path to a component.

**Example**:
```typescript
// app.module.ts (continued)
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];
```

**Navigating Programmatically**:
```typescript
// some.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-some',
  template: '<button (click)="goToAbout()">Go to About</button>'
})
export class SomeComponent {
  constructor(private router: Router) {}

  goToAbout() {
    this.router.navigate(['/about']);
  }
}
```