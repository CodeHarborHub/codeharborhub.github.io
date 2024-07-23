---
id: lesson-4
title: "Handling Asynchronous Operations"
sidebar_label: Async
sidebar_position: 4
description: "Handling Asynchronous Operations"
tags: [courses,Advanced-level,Async,Introduction]
---
 

RxJS is particularly useful for handling asynchronous operations, such as HTTP requests or user input events.

1. **Using RxJS with HTTP Requests**:
   ```javascript
   import { HttpClient } from '@angular/common/http';
   import { Injectable } from '@angular/core';

   @Injectable({
     providedIn: 'root'
   })
   export class DataService {
     constructor(private http: HttpClient) {}

     fetchData() {
       return this.http.get('https://api.example.com/data');
     }
   }
   ```

2. **Using Operators with HTTP Requests**:
   ```javascript
   this.dataService.fetchData().pipe(
     map(data => data['items']),
     filter(item => item.active)
   ).subscribe(items => console.log(items));
   ```

3. **Error Handling with `catchError`**:
   ```javascript
   import { catchError } from 'rxjs/operators';
   import { of } from 'rxjs';

   this.dataService.fetchData().pipe(
     catchError(error => {
       console.error('Error fetching data', error);
       return of([]); // Return an empty array on error
     })
   ).subscribe(items => console.log(items));
   ```

By mastering RxJS and its powerful operators, you can effectively manage asynchronous operations and create highly reactive Angular applications.