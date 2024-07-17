---
id: lesson-4
title: "Custom Route Strategies"
sidebar_label: Custom Route
sidebar_position: 4
description: "Custom Route Strategies"
tags: [courses,Advanced-level,Custom Route,Introduction]
---


Custom route strategies allow you to implement advanced routing behaviors that suit specific application needs.

1. **Creating a Custom Route Strategy**:
   ```typescript
   import { RouteReuseStrategy, DetachedRouteHandle } from '@angular/router';

   export class CustomRouteReuseStrategy implements RouteReuseStrategy {
     storedRouteHandles: { [key: string]: DetachedRouteHandle } = {};

     shouldDetach(route: ActivatedRouteSnapshot): boolean {
       return true; // Modify as needed
     }

     store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
       this.storedRouteHandles[route.routeConfig.path] = handle;
     }

     shouldAttach(route: ActivatedRouteSnapshot): boolean {
       return !!this.storedRouteHandles[route.routeConfig.path];
     }

     retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
       return this.storedRouteHandles[route.routeConfig.path];
     }

     shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
       return future.routeConfig === curr.routeConfig;
     }
   }
   ```

2. **Providing the Custom Strategy**:
   Update your `AppModule` to use the custom route strategy.

   ```typescript
   import { NgModule } from '@angular/core';
   import { RouterModule, RouteReuseStrategy } from '@angular/router';

   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     providers: [{ provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }]
   })
   export class AppRoutingModule {}
   ``` 