---
id: lesson-2
title: "Route Resolvers"
sidebar_label: Route Resolvers
sidebar_position: 2
description: "Route Resolvers"
tags: [courses,Advanced-level,Route Resolvers,Introduction]
---
 
Route resolvers are a powerful way to fetch data before the route loads. This ensures the data is available when the component is initialized.

1. **Using a Resolver**:
   ```typescript
   const routes: Routes = [
     {
       path: 'dashboard',
       component: DashboardComponent,
       resolve: {
         data: DataResolver
       }
     }
   ];
   ```

2. **Accessing Resolved Data**:
   ```typescript
   import { ActivatedRoute } from '@angular/router';

   @Component({
     selector: 'app-dashboard',
     templateUrl: './dashboard.component.html',
   })
   export class DashboardComponent {
     data: any;

     constructor(private route: ActivatedRoute) {
       this.route.data.subscribe(data => {
         this.data = data['data'];
       });
     }
   }
   ```