---
id: lesson-3
title: "Nested Routes"
sidebar_label: Nested Routes
sidebar_position: 3
description: "Nested Routes"
tags: [courses,Advanced-level,Nested Routes,Introduction]
---
 
 

Nested routes allow you to create hierarchical route structures, making your application more organized and maintainable.

1. **Defining Nested Routes**:
   ```typescript
   const routes: Routes = [
     {
       path: 'products',
       component: ProductsComponent,
       children: [
         { path: '', component: ProductListComponent },
         { path: ':id', component: ProductDetailComponent }
       ]
     }
   ];
   ```

2. **Using Router Outlet**:
   In the `ProductsComponent` template, include a `<router-outlet>` for nested views.

   ```html
   <h1>Products</h1>
   <router-outlet></router-outlet>
   ```
