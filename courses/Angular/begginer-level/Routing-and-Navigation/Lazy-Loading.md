---
id: lesson-4
title: "Lazy Loading Modules"
sidebar_label: Lazy Loading
sidebar_position: 4
description: "Lazy Loading Modules"
tags: [courses,beginner-level,Angular Forms,Introduction]
---


Lazy loading allows you to load feature modules only when they are needed, improving the performance of your application.

1. **Create a Feature Module**:
   ```typescript
   // feature.module.ts
   import { NgModule } from '@angular/core';
   import { CommonModule } from '@angular/common';
   import { RouterModule, Routes } from '@angular/router';
   import { FeatureComponent } from './feature/feature.component';

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

2. **Update Main Routes to Lazy Load**:
   ```typescript
   // app.module.ts
   const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'about', component: AboutComponent },
     { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }
   ];
   ```

3. **Ensure RouterModule Configuration in Feature Module**:
   ```typescript
   // feature.module.ts (continued)
   @NgModule({
     imports: [
       CommonModule,
       RouterModule.forChild(routes)
     ],
     declarations: [FeatureComponent]
   })
   export class FeatureModule { }
   ```
 