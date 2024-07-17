---
id: lesson-3
title: "Writing GraphQL Queries and Mutations"
sidebar_label: GraphQL Queries and Mutations
sidebar_position: 3
description: "Writing GraphQL Queries and Mutations"
tags: [courses,Advanced-level,GraphQL Queries,Mutations,Introduction]
--- 
 

1. **Defining Queries**:
   ```typescript
   import { gql } from 'apollo-angular';

   export const GET_ITEMS = gql`
     query GetItems {
       items {
         id
         name
         description
       }
     }
   `;
   ```

2. **Defining Mutations**:
   ```typescript
   import { gql } from 'apollo-angular';

   export const ADD_ITEM = gql`
     mutation AddItem($name: String!, $description: String!) {
       addItem(name: $name, description: $description) {
         id
         name
         description
       }
     }
   `;
   ```
