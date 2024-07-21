---
id: lesson-1
title: "Routing and Navigation in Angular"
sidebar_label: Routing and Navigation
sidebar_position: 1
description: "Routing and Navigation in Angular"
tags: [courses,beginner-level,Routing and Navigation,Introduction]
---


Angular's router enables navigation from one view to another as users perform application tasks. Below are the steps to set up the router, configure routes, use route parameters, and implement lazy loading.

#### Setting up the Angular Router

1. **Install Angular Router**: The router is included by default when you create a new Angular application using the Angular CLI. However, if you need to add it to an existing application, you can install it using npm:
   ```bash
   npm install @angular/router
   ```

2. **Import RouterModule**: In your `AppModule`, import `RouterModule` and define routes.
   ```typescript
   // app.module.ts
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { RouterModule, Routes } from '@angular/router';
   import { AppComponent } from './app.component';
   import { HomeComponent } from './home/home.component';
   import { AboutComponent } from './about/about.component';

   const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'about', component: AboutComponent }
   ];

   @NgModule({
     declarations: [
       AppComponent,
       HomeComponent,
       AboutComponent
     ],
     imports: [
       BrowserModule,
       RouterModule.forRoot(routes)
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

3. **Add RouterOutlet**: In your main component template, add `<router-outlet>` to render the routed components.
   ```html
   <!-- app.component.html -->
   <nav>
     <a routerLink="/">Home</a>
     <a routerLink="/about">About</a>
   </nav>
   <router-outlet></router-outlet>
   ```