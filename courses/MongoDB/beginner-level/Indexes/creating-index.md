---
id: lesson-2
title: "Creating Indexes"
sidebar_label: Creating Indexes
sidebar_position: 2
description: "Creating Indexes"
tags: [courses,beginner-level,Creating Indexes,Introduction]
--- 
 

Indexes can be created using the `createIndex` method. MongoDB provides various options for creating and customizing indexes.

**Basic Syntax**:
```javascript
db.collection.createIndex({ <field1>: <type1>, <field2>: <type2>, ... }, { <options> })
```
:::note
**Types**:
- **Ascending (`1`)**: Sorts index entries in ascending order.
- **Descending (`-1`)**: Sorts index entries in descending order.

**Options**:
- **unique**: Ensures the indexed field does not contain duplicate values.
- **sparse**: Indexes only documents that contain the indexed field.
- **expireAfterSeconds**: Creates a TTL (Time-To-Live) index that automatically removes documents after a specified number of seconds.
:::

#### Single Field Indexes

A single field index is an index on a single field of a collection.

**Example**:
```javascript
db.users.createIndex({ name: 1 })  // Creates an ascending index on the 'name' field
```

**Query Optimization**:
With a single field index on `name`, queries that filter by `name` will be significantly faster.
```javascript
db.users.find({ name: "John Doe" })
```

**Unique Index**:
To create a unique index, use the `unique` option.
```javascript
db.users.createIndex({ email: 1 }, { unique: true })  // Ensures no duplicate emails
```