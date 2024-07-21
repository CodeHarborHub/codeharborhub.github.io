---
id: lesson-4
title: "Dynamic Components"
sidebar_label: Dynamic Components
sidebar_position: 4
description: "Angular Dynamic Components"
tags: [courses,intermediate-level,Basic Structure,Introduction]
---
 

Dynamic components allow you to load components at runtime.

1. **Define Components**:
   ```typescript
   // dynamic.component.ts
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-dynamic',
     template: `<p>Dynamic Component Loaded</p>`
   })
   export class DynamicComponent {}
   ```

2. **Create a Directive for Dynamic Component Loading**:
   ```typescript
   // dynamic.directive.ts
   import { Directive, ViewContainerRef } from '@angular/core';

   @Directive({
     selector: '[appDynamicHost]'
   })
   export class DynamicDirective {
     constructor(public viewContainerRef: ViewContainerRef) {}
   }
   ```

3. **Load Dynamic Component in a Host Component**:
   ```typescript
   // host.component.ts
   import { Component, ComponentFactoryResolver, ViewChild, OnInit } from '@angular/core';
   import { DynamicDirective } from './dynamic.directive';
   import { DynamicComponent } from './dynamic.component';

   @Component({
     selector: 'app-host',
     template: `<ng-template appDynamicHost></ng-template>`
   })
   export class HostComponent implements OnInit {
     @ViewChild(DynamicDirective, { static: true }) dynamicHost: DynamicDirective;

     constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

     ngOnInit() {
       const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
       const viewContainerRef = this.dynamicHost.viewContainerRef;
       viewContainerRef.clear();
       viewContainerRef.createComponent(componentFactory);
     }
   }
   ```

4. **Include Components and Directives in Module**:
   ```typescript
   // app.module.ts
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { HostComponent } from './host.component';
   import { DynamicComponent } from './dynamic.component';
   import { DynamicDirective } from './dynamic.directive';

   @NgModule({
     declarations: [
       HostComponent,
       DynamicComponent,
       DynamicDirective
     ],
     entryComponents: [DynamicComponent], // required for dynamic components
     imports: [
       BrowserModule
     ],
     providers: [],
     bootstrap: [HostComponent]
   })
   export class AppModule { }
   ``` 