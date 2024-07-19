---
id: lesson-4
title: "Module Lazy Loading"
sidebar_label: Module Lazy Loading
sidebar_position: 4
description: "Module Lazy Loading"
tags: [courses,intermediate-level,Lazy Loading,Introduction]
---
 

Lazy loading helps in improving the initial load time of the application by loading feature modules on demand rather than loading them upfront.

1. **Configuring Lazy Loading in Routing**:
   ```typescript
   // app-routing.module.ts
   import { NgModule } from '@angular/core';
   import { RouterModule, Routes } from '@angular/router';

   const routes: Routes = [
     { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }
   ];

   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
   })
   export class AppRoutingModule { }
   ```

2. **Defining Routes in Feature Module**:
   ```typescript
   // feature.module.ts
   import { NgModule } from '@angular/core';
   import { CommonModule } from '@angular/common';
   import { RouterModule, Routes } from '@angular/router';
   import { FeatureComponent } from './feature.component';

   const routes: Routes = [
     { path: '', component: FeatureComponent }
   ];

   @NgModule({
     declarations: [FeatureComponent],
     imports: [
       CommonModule,
       RouterModule.forChild(routes)
     ]
   })
   export class FeatureModule { }
   ```

By organizing your Angular application into feature modules, shared modules, core modules, and using lazy loading, you can create a scalable, maintainable, and performant application.