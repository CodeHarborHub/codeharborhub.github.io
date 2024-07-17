---
id: lesson-3
title: "Operators in RxJS"
sidebar_label: Operators
sidebar_position: 3
description: "Operators in RxJS"
tags: [courses,Advanced-level,Operators,Introduction]
---

Operators are functions that allow you to transform, filter, and combine Observables. They can be categorized into three types: creation, transformation, and utility operators.

**Common Operators:**

1. **`map`**: Transforms emitted values.
   ```javascript
   import { of } from 'rxjs';
   import { map } from 'rxjs/operators';

   const observable = of(1, 2, 3).pipe(
     map(value => value * 2)
   );

   observable.subscribe(value => console.log(value)); // Outputs: 2, 4, 6
   ```

2. **`filter`**: Filters emitted values based on a condition.
   ```javascript
   import { of } from 'rxjs';
   import { filter } from 'rxjs/operators';

   const observable = of(1, 2, 3, 4).pipe(
     filter(value => value % 2 === 0)
   );

   observable.subscribe(value => console.log(value)); // Outputs: 2, 4
   ```

3. **`mergeMap`**: Projects each source value to an Observable and merges the resulting Observables into one.
   ```javascript
   import { of } from 'rxjs';
   import { mergeMap } from 'rxjs/operators';

   const observable = of(1, 2).pipe(
     mergeMap(value => of(value * 2))
   );

   observable.subscribe(value => console.log(value)); // Outputs: 2, 4
   ```

4. **`switchMap`**: Projects each source value to an Observable and emits values from the most recent Observable only.
   ```javascript
   import { of, interval } from 'rxjs';
   import { switchMap } from 'rxjs/operators';

   const observable = interval(1000).pipe(
     switchMap(value => of(`Current Value: ${value}`))
   );

   observable.subscribe(value => console.log(value));
   ```

5. **`combineLatest`**: Combines the latest values from multiple Observables.
   ```javascript
   import { combineLatest, of } from 'rxjs';

   const obs1 = of('Hello');
   const obs2 = of('World');

   const combined = combineLatest([obs1, obs2]);
   combined.subscribe(value => console.log(value)); // Outputs: ['Hello', 'World']
   ```