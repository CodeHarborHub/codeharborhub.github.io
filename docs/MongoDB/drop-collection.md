---
id: mongodb-drop-collection
title: MongoDB - Drop Collection
sidebar_label: Drop Collection
sidebar_position: 9
tags: [mongodb, drop collection, commands]
description: Learn how to drop a collection in MongoDB using the drop() method, along with examples, additional commands, and a detailed diagram.
---

# MongoDB - Drop Collection

In this chapter, we will see how to drop a collection using MongoDB.

## The `drop()` Method

MongoDB's `db.collection.drop()` is used to drop a collection from the database.

### Syntax

The basic syntax of the `drop()` command is as follows:

```sql
db.COLLECTION_NAME.drop()
```

### Example

First, check the available collections in your database `mydb`.

```bash
> use mydb
switched to db mydb
> show collections
mycol
mycollection
system.indexes
tutorialspoint
```

Now drop the collection with the name `mycollection`.

```bash
> db.mycollection.drop()
true
```

Again, check the list of collections in the database.

```bash
> show collections
mycol
system.indexes
tutorialspoint
```

The `drop()` method will return `true` if the selected collection is dropped successfully; otherwise, it will return `false`.

## Drop Collection Diagram

```mermaid
graph TD
    A[Drop Collection] --> B[drop Method]
    B --> C[Syntax]
    B --> D[Example]
    D --> E[Check Collections]
    E --> F[Drop Collection]
    F --> G[Verify Collection Dropped]
```

## Command Summary

| Command                       | Description                                          |
|-------------------------------|------------------------------------------------------|
| `db.COLLECTION_NAME.drop()`   | Drop the specified collection from the database      |
| `show collections`            | List all collections in the current database         |
| `use DATABASE_NAME`           | Switch to the specified database                     |
