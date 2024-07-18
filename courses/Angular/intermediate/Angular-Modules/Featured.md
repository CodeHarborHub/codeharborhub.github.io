---
id: lesson-1
title: "Angular Modules"
sidebar_label: Modules 
sidebar_position: 1
description: "Angular Modules"
tags: [courses,intermediate-level,Modules,Introduction]
---
   

Angular modules are a fundamental concept that helps organize an application into cohesive blocks of functionality. They help in managing dependencies, optimizing load times, and promoting reusability. There are different types of modules in Angular, each serving a specific purpose.

#### Feature Modules

Feature modules are used to encapsulate a specific feature or functionality within an application. They help in organizing related components, services, and other code into a single, cohesive unit.

1. **Creating a Feature Module**:
   ```bash
   ng generate module feature --route feature --module app.module
   ```

2. **Feature Module Structure**:
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

3. **Lazy Loading Feature Module**:
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