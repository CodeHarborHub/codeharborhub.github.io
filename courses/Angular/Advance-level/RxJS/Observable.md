---
id: lesson-2
title: "Observable Creation and Manipulation"
sidebar_label: Observable Creation
sidebar_position: 2
description: "Observable Creation and Manipulation"
tags: [courses,Advanced-level,Observable Creation,Manipulation,Introduction]
---
 

**Creating Observables:**

1. **Using `of` to create an Observable:**
   ```javascript
   import { of } from 'rxjs';

   const observable = of(1, 2, 3);
   observable.subscribe(value => console.log(value));
   ```

2. **Using `from` to create an Observable from an array:**
   ```javascript
   import { from } from 'rxjs';

   const observableFromArray = from([1, 2, 3]);
   observableFromArray.subscribe(value => console.log(value));
   ```

3. **Using `new Observable` to create a custom Observable:**
   ```javascript
   import { Observable } from 'rxjs';

   const customObservable = new Observable(subscriber => {
     subscriber.next('Hello');
     subscriber.next('World');
     subscriber.complete();
   });

   customObservable.subscribe({
     next: value => console.log(value),
     complete: () => console.log('Completed'),
   });
   ```

