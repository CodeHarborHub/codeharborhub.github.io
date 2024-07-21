---
id: lesson-2
title: "Modules"
sidebar_label: Modules
sidebar_position: 2
description: "Angular Modules"
tags: [courses,beginner-level,Basic Structure,Introduction]
---

Modules are used to group related components, directives, pipes, and services together. Every Angular application has at least one module, the root module, which is conventionally named `AppModule`.

A module is defined using the `@NgModule` decorator:
```typescript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
- **declarations**: The components, directives, and pipes that belong to this module.
- **imports**: Other modules whose exported classes are needed by component templates declared in this module.
- **providers**: Services that are available to the entire application.
- **bootstrap**: The root component that Angular creates and inserts into the index.html host web page.
