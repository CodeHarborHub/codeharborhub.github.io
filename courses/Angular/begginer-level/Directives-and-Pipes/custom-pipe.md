---
id: lesson-4
title: "Creating Custom Pipes"
sidebar_label: Custom Pipes
sidebar_position: 4
description: "Creating Custom Pipes"
tags: [courses,beginner-level,Custom Pipes,Introduction]
---


Custom pipes are used to create custom data transformations.

1. **Create the Pipe**:
   ```typescript
   // reverse.pipe.ts
   import { Pipe, PipeTransform } from '@angular/core';

   @Pipe({
     name: 'reverse'
   })
   export class ReversePipe implements PipeTransform {
     transform(value: string): string {
       return value.split('').reverse().join('');
     }
   }
   ```

2. **Register the Pipe**:
   ```typescript
   // app.module.ts
   import { ReversePipe } from './reverse.pipe';

   @NgModule({
     declarations: [
       AppComponent,
       ReversePipe
     ],
     ...
   })
   export class AppModule { }
   ```

3. **Use the Pipe**:
   ```html
   <!-- app.component.html -->
   <p>{{ 'Hello Angular' | reverse }}</p>
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
export class AppComponent {}
```
 