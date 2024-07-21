---
id: lesson-3
title: "Interceptors"
sidebar_label: Interceptors
sidebar_position: 3
description: "Interceptors"
tags: [courses,beginner-level,Interceptors,Introduction]
---
 

Interceptors are used to inspect and transform HTTP requests and responses. They are useful for adding headers, handling authentication, logging, etc.

1. **Create an Interceptor**:
   ```typescript
   // auth.interceptor.ts
   import { Injectable } from '@angular/core';
   import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
   import { Observable } from 'rxjs';

   @Injectable()
   export class AuthInterceptor implements HttpInterceptor {
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const clonedRequest = req.clone({
         headers: req.headers.set('Authorization', 'Bearer YOUR_TOKEN_HERE')
       });

       return next.handle(clonedRequest);
     }
   }
   ```

2. **Provide the Interceptor**:
   ```typescript
   // app.module.ts
   import { HTTP_INTERCEPTORS } from '@angular/common/http';
   import { AuthInterceptor } from './auth.interceptor';

   @NgModule({
     providers: [
       { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
     ],
     // other configurations
   })
   export class AppModule { }
   ```
