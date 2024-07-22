---
id: lesson-3
title: "Core Modules"
sidebar_label: Core Modules
sidebar_position: 3
description: "Core Modules"
tags: [courses,intermediate-level,Core Modules,Introduction]
---
  

Core modules are used to provide singleton services that are needed across the entire application. These services are typically provided in the root injector and should only be imported in the root AppModule to avoid multiple instances.

1. **Creating a Core Module**:
   ```bash
   ng generate module core
   ```

2. **Core Module Structure**:
   ```typescript
   // core.module.ts
   import { NgModule, Optional, SkipSelf } from '@angular/core';
   import { CommonModule } from '@angular/common';
   import { CoreService } from './core.service';

   @NgModule({
     declarations: [],
     imports: [
       CommonModule
     ],
     providers: [CoreService]
   })
   export class CoreModule { 
     constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
       if (parentModule) {
         throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
       }
     }
   }
   ```

3. **Using Core Module in App Module**:
   ```typescript
   // app.module.ts
   import { BrowserModule } from '@angular/platform-browser';
   import { NgModule } from '@angular/core';
   import { AppComponent } from './app.component';
   import { CoreModule } from './core/core.module';

   @NgModule({
     declarations: [AppComponent],
     imports: [
       BrowserModule,
       CoreModule
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```
