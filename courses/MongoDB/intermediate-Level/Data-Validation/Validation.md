---
id: lesson-1
title: "Validation at the Collection Level"
sidebar_label: Collection Level
sidebar_position: 1
description: "Validation at the Collection Level"
tags: [courses,beginner-level,Data Validation,Introduction]
---  
 

MongoDB allows you to specify validation rules at the collection level using the `validator` option. You can also define the validation level and action to take when validation fails.

:::note
**Validation Levels**:
- **strict**: The default level. MongoDB rejects documents that do not meet the validation criteria.
- **moderate**: MongoDB applies validation rules only to documents that contain fields specified in the validator expression.
:::

:::note
**Validation Actions**:
- **error**: The default action. MongoDB returns an error if a document does not meet the validation criteria.
- **warn**: MongoDB logs a warning but allows the operation to proceed.
:::

**Example of Setting Validation Level and Action**:
```javascript
db.runCommand({
  collMod: "users",
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
  },
  validationLevel: "strict",
  validationAction: "error"
})
```
 