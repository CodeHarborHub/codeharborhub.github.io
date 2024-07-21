---
id: lesson-2
title: "Enforcing Schema Rules"
sidebar_label: Schema Rules
sidebar_position: 2
description: "Enforcing Schema Rules"
tags: [courses,beginner-level,Schema Rules,Introduction]
---  

To enforce schema rules in MongoDB, you need to define the validation rules when creating or updating a collection.

**Create a Collection with Schema Validation**:
```javascript
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "email"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        age: {
          bsonType: "int",
          minimum: 0,
          description: "must be an integer greater than or equal to 0 and is required"
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+\\..+$",
          description: "must be a string and match the regular expression pattern"
        },
        address: {
          bsonType: "object",
          required: ["street", "city"],
          properties: {
            street: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            city: {
              bsonType: "string",
              description: "must be a string and is required"
            }
          }
        }
      }
    }
  }
})
```