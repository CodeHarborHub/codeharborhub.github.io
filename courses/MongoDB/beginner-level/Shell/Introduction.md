---
id: lesson-1
title: "Introduction to MongoDB Shell"
sidebar_label: Introduction
sidebar_position: 1
description: "Introduction to MongoDB Shell"
tags: [courses,beginner-level,MongoDB,shell,Introduction]
--- 

The MongoDB shell (`mongo`) is an interactive JavaScript interface to MongoDB, used to perform administrative tasks and operations on the database. It provides a powerful way to interact with your MongoDB instance directly from the command line.

:::note

#### Basic Commands

1. **Starting the MongoDB Shell**:
   - Open your terminal and type `mongo` to start the MongoDB shell.
   ```bash
   mongo
   ```

2. **Connecting to a Database**:
   - By default, the shell connects to the `test` database. To switch to another database, use the `use` command.
   ```javascript
   use myDatabase
   ```

3. **Showing Databases and Collections**:
   - List all databases.
   ```javascript
   show dbs
   ```
   - List all collections in the current database.
   ```javascript
   show collections
   ```

4. **Creating a Collection**:
   - Collections are created implicitly when a document is inserted. However, you can also create them explicitly.
   ```javascript
   db.createCollection("myCollection")
   ```
   :::
