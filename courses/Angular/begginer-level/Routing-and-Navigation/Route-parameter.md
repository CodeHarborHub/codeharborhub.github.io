---
id: lesson-3
title: "Route Parameters"
sidebar_label: Route Parameters
sidebar_position: 3
description: "Route Parameters"
tags: [courses,beginner-level,Route Parameters,Introduction]
---


Route parameters allow you to capture values from the URL and use them in your components.

**Example**:
1. **Define a Route with a Parameter**:
   ```typescript
   const routes: Routes = [
     { path: 'user/:id', component: UserComponent }
   ];
   ```

2. **Access Route Parameters**:
   ```typescript
   // user.component.ts
   import { Component, OnInit } from '@angular/core';
   import { ActivatedRoute } from '@angular/router';

   @Component({
     selector: 'app-user',
     templateUrl: './user.component.html',
     styleUrls: ['./user.component.css']
   })
   export class UserComponent implements OnInit {
     userId: string;

     constructor(private route: ActivatedRoute) {}

     ngOnInit(): void {
       this.userId = this.route.snapshot.paramMap.get('id');
     }
   }
   ```

3. **Use the Parameter in Template**:
   ```html
   <!-- user.component.html -->
   <p>User ID: {{ userId }}</p>
   ```

**Reacting to Parameter Changes**:
```typescript
ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.userId = params.get('id');
  });
}
```