---
id: lesson-3
title: "Data Validation in MongoDB"
sidebar_label: Data Validation
sidebar_position: 3
description: "Data Validation in MongoDB"
tags: [courses,beginner-level,Data Validation,Introduction]
---  


Data validation in MongoDB ensures that the data being inserted or updated in the database adheres to specified rules. This helps maintain data integrity and consistency. MongoDB supports schema validation using JSON Schema, allowing for detailed validation rules.

#### Schema Validation with JSON Schema

JSON Schema is a powerful way to define the structure and constraints of JSON documents. MongoDB uses JSON Schema to validate documents during insert and update operations.

**Example JSON Schema**:
```json
{
  "$jsonSchema": {
    "bsonType": "object",
    "required": ["name", "age", "email"],
    "properties": {
      "name": {
        "bsonType": "string",
        "description": "must be a string and is required"
      },
      "age": {
        "bsonType": "int",
        "minimum": 0,
        "description": "must be an integer greater than or equal to 0 and is required"
      },
      "email": {
        "bsonType": "string",
        "pattern": "^.+@.+\\..+$",
        "description": "must be a string and match the regular expression pattern"
      },
      "address": {
        "bsonType": "object",
        "required": ["street", "city"],
        "properties": {
          "street": {
            "bsonType": "string",
            "description": "must be a string and is required"
          },
          "city": {
            "bsonType": "string",
            "description": "must be a string and is required"
          }
        }
      }
    }
  }
}
```
