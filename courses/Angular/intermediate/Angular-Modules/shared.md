---
id: lesson-2
title: "Shared Modules"
sidebar_label: Shared Modules
sidebar_position: 2
description: "Shared Modules"
tags: [courses,intermediate-level,Shared Modules,Introduction]
---
 

Shared modules are used to encapsulate common components, directives, and pipes that will be used across multiple feature modules. They help in avoiding code duplication and centralizing reusable code.

1. **Creating a Shared Module**:
   ```bash
   ng generate module shared
   ```

2. **Shared Module Structure**:
   ```typescript
   // shared.module.ts
   import { NgModule } from '@angular/core';
   import { CommonModule } from '@angular/common';
   import { SharedComponent } from './shared.component';
   import { SharedDirective } from './shared.directive';
   import { SharedPipe } from './shared.pipe';

   @NgModule({
     declarations: [
       SharedComponent,
       SharedDirective,
       SharedPipe
     ],
     imports: [
       CommonModule
     ],
     exports: [
       SharedComponent,
       SharedDirective,
       SharedPipe,
       CommonModule
     ]
   })
   export class SharedModule { }
   ```

3. **Using Shared Module in Feature Module**:
   ```typescript
   // feature.module.ts
   import { NgModule } from '@angular/core';
   import { CommonModule } from '@angular/common';
   import { RouterModule, Routes } from '@angular/router';
   import { FeatureComponent } from './feature.component';
   import { SharedModule } from '../shared/shared.module';

   const routes: Routes = [
     { path: '', component: FeatureComponent }
   ];

   @NgModule({
     declarations: [FeatureComponent],
     imports: [
       CommonModule,
       SharedModule,
       RouterModule.forChild(routes)
     ]
   })
   export class FeatureModule { }
   ```