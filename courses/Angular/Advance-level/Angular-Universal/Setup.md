---
id: lesson-2
title: "Setting Up Server-Side Rendering"
sidebar_label: Setting Up
sidebar_position: 2
description: "Setting Up Server-Side Rendering"
tags: [courses,Advanced-level,Introduction]
---

 

1. **Installing Angular Universal**:
   Use Angular CLI to add Universal support to your existing Angular application.

   ```bash
   ng add @nguniversal/express-engine
   ```

   This command sets up the necessary files and dependencies for server-side rendering.

2. **Updating App Module**:
   Modify the `app.module.ts` to ensure your application can run in a server environment.

   ```typescript
   import { AppServerModule } from './app/app.server.module';
   ```

3. **Creating Server Module**:
   Generate a new module specifically for the server:

   ```typescript
   // app.server.module.ts
   import { NgModule } from '@angular/core';
   import { ServerModule } from '@angular/platform-server';
   import { AppModule } from './app.module';
   import { AppComponent } from './app.component';

   @NgModule({
     imports: [
       AppModule,
       ServerModule,
     ],
     bootstrap: [AppComponent],
   })
   export class AppServerModule {}
   ```

4. **Creating a Server File**:
   Create an `server.ts` file to bootstrap your application.

   ```typescript
   import 'zone.js/dist/zone-node';
   import { enableProdMode } from '@angular/core';
   import { ngExpressEngine } from '@nguniversal/express-engine';
   import * as express from 'express';
   import { join } from 'path';
   import { AppServerModule } from './dist/server/main';

   enableProdMode();

   const app = express();
   const PORT = process.env.PORT || 4000;
   const DIST_FOLDER = join(process.cwd(), 'dist/browser');

   app.engine('html', ngExpressEngine({
     bootstrap: AppServerModule,
   }));

   app.set('view engine', 'html');
   app.set('views', DIST_FOLDER);

   app.get('*.*', express.static(DIST_FOLDER, {
     maxAge: '1y'
   }));

   app.get('*', (req, res) => {
     res.render('index', { req });
   });

   app.listen(PORT, () => {
     console.log(`Node server listening on http://localhost:${PORT}`);
   });
   ```

5. **Building and Running the Application**:
   Build your application for server-side rendering.

   ```bash
   npm run build:ssr
   npm run serve:ssr
   ```
