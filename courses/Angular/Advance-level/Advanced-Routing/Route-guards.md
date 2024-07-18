---
id: lesson-1
title: "Advanced Routing Techniques in Angular"
sidebar_label: Advanced Routing
sidebar_position: 1
description: "Advanced Routing Techniques in Angular"
tags: [courses,Advanced-level,Advanced Routing,Introduction]
---

Angular’s routing capabilities are powerful and flexible, enabling developers to create complex applications with ease. Here’s a look at advanced routing techniques including route guards, resolvers, nested routes, and custom route strategies.

#### Route Guards

Route guards are interfaces that allow you to control access to routes based on specific conditions. They help protect routes from unauthorized access or to prompt users before leaving a route.

1. **CanActivate**: Prevents unauthorized users from activating a route.
   ```typescript
   import { Injectable } from '@angular/core';
   import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

   @Injectable({
     providedIn: 'root',
   })
   export class AuthGuard implements CanActivate {
     constructor(private router: Router) {}

     canActivate(
       next: ActivatedRouteSnapshot,
       state: RouterStateSnapshot
     ): boolean {
       const isAuthenticated = false; // replace with real authentication check
       if (!isAuthenticated) {
         this.router.navigate(['/login']);
         return false;
       }
       return true;
     }
   }
   ```

2. **CanDeactivate**: Prevents users from leaving a route without confirmation.
   ```typescript
   import { Injectable } from '@angular/core';
   import { CanDeactivate } from '@angular/router';
   import { Observable } from 'rxjs';

   export interface CanComponentDeactivate {
     canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
   }

   @Injectable({
     providedIn: 'root',
   })
   export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
     canDeactivate(
       component: CanComponentDeactivate
     ): Observable<boolean> | Promise<boolean> | boolean {
       return component.canDeactivate ? component.canDeactivate() : true;
     }
   }
   ```

3. **Resolve**: Fetches data before a route is activated.
   ```typescript
   import { Injectable } from '@angular/core';
   import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
   import { DataService } from './data.service';

   @Injectable({
     providedIn: 'root',
   })
   export class DataResolver implements Resolve<any> {
     constructor(private dataService: DataService) {}

     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return this.dataService.getData();
     }
   }
   ```