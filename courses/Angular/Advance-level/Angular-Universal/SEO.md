---
id: lesson-4
title: "SEO Optimization with Angular Universal"
sidebar_label: SEO
sidebar_position: 4
description: "SEO Optimization with Angular Universal"
tags: [courses,Advanced-level,Introduction]
---
 

To improve the SEO performance of your application using Angular Universal, consider the following strategies:

1. **Meta Tags and Title Management**:
   Use Angular's `Meta` and `Title` services to manage metadata dynamically.

   ```typescript
   import { Component } from '@angular/core';
   import { Meta, Title } from '@angular/platform-browser';

   @Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
   })
   export class HomeComponent {
     constructor(private meta: Meta, private title: Title) {
       this.title.setTitle('Home Page Title');
       this.meta.addTags([
         { name: 'description', content: 'Description of the home page' },
         { name: 'keywords', content: 'Angular, Universal, SSR' },
       ]);
     }
   }
   ```

2. **Structured Data**:
   Implement structured data using JSON-LD to enhance your site's presence in search results.

   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "WebSite",
     "name": "Your Website Name",
     "url": "https://www.yourwebsite.com"
   }
   </script>
   ```

3. **Handling 404 Pages**:
   Create a custom 404 page to improve user experience and SEO.

   ```typescript
   // 404.component.ts
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-not-found',
     templateUrl: './not-found.component.html',
   })
   export class NotFoundComponent {}
   ```

   Update routing to handle 404 errors:

   ```typescript
   const routes: Routes = [
     // your routes here
     { path: '**', component: NotFoundComponent }
   ];
   ```
 