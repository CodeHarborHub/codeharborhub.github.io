---
id: lesson-2
title: "Setting Up Apollo Client in Angular"
sidebar_label: Setting Up 
sidebar_position: 2
description: "Setting Up Apollo Client in Angular"
tags: [courses,Advanced-level,GraphQL Queries,Mutations,Introduction]
--- 


Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.

1. **Install Dependencies**:
   ```bash
   ng add apollo-angular
   npm install @apollo/client graphql
   ```

2. **Setting Up Apollo Client**:
   Create a new service to configure the Apollo Client.

   ```typescript
   // graphql.module.ts
   import { NgModule } from '@angular/core';
   import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
   import { HttpLink } from 'apollo-angular/http';
   import { InMemoryCache } from '@apollo/client/core';

   @NgModule({
     exports: [ApolloModule],
     providers: [
       {
         provide: APOLLO_OPTIONS,
         useFactory: (httpLink: HttpLink) => {
           return {
             cache: new InMemoryCache(),
             link: httpLink.create({ uri: 'https://your-graphql-endpoint' }),
           };
         },
         deps: [HttpLink],
       },
     ],
   })
   export class GraphQLModule {}
   ```

   Add `GraphQLModule` to your `AppModule`:

   ```typescript
   import { GraphQLModule } from './graphql.module';

   @NgModule({
     imports: [
       // other imports...
       GraphQLModule,
     ],
   })
   export class AppModule {}
   ```

