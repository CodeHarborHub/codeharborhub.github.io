---
id: lesson-3
title: "Embedding vs. Referencing"
sidebar_label: Embedding vs. Referencing
sidebar_position: 3
description: "Embedding vs. Referencing"
tags: [courses,beginner-level,Embedding vs. Referencing,Introduction]
---
 

1. **Embedding**:
   - Embed related data within a single document.
   - Benefits:
     - Reduces the number of queries and joins.
     - Ensures data consistency and atomicity.
     - Ideal for one-to-few or one-to-many relationships.
   - Drawbacks:
     - Can lead to larger documents.
     - Not suitable for many-to-many relationships.

   ```javascript
   {
     _id: 1,
     name: "John Doe",
     address: {
       street: "123 Main St",
       city: "New York",
       state: "NY"
     }
   }
   ```

2. **Referencing**:
   - Store related data in separate documents and use references (foreign keys) to link them.
   - Benefits:
     - Keeps documents small and manageable.
     - Suitable for many-to-many relationships.
   - Drawbacks:
     - Requires multiple queries to retrieve related data.
     - Can lead to data inconsistency if not managed properly.

   ```javascript
   // User document
   {
     _id: 1,
     name: "John Doe",
     address_id: 101
   }

   // Address document
   {
     _id: 101,
     street: "123 Main St",
     city: "New York",
     state: "NY"
   }
   ```