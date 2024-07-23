---
id: lesson-2
title: "Handling HTTP Responses"
sidebar_label: HTTP Response
sidebar_position: 2
description: "Handling HTTP Responses"
tags: [courses,beginner-level,Response,Introduction]
---
 

You can handle HTTP responses using RxJS operators to manipulate or transform the data.

1. **Using RxJS Operators**:
   ```typescript
   // data.service.ts (updated)
   import { Injectable } from '@angular/core';
   import { HttpClient } from '@angular/common/http';
   import { Observable } from 'rxjs';
   import { map } from 'rxjs/operators';

   @Injectable({
     providedIn: 'root'
   })
   export class DataService {
     private apiUrl = 'https://api.example.com/data';

     constructor(private http: HttpClient) {}

     getData(): Observable<any> {
       return this.http.get(this.apiUrl).pipe(
         map(response => {
           // transform the response if needed
           return response;
         })
       );
     }

     postData(data: any): Observable<any> {
       return this.http.post(this.apiUrl, data).pipe(
         map(response => {
           // transform the response if needed
           return response;
         })
       );
     }
   }
   ```