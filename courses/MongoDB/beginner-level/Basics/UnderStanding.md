---
id: lesson-1
title: "MongoDB Basics"
sidebar_label: Basics
sidebar_position: 1
description: "MongoDB Basics"
tags: [courses,beginner-level,Basics,Introduction]
--- 
 

#### Understanding Databases, Collections, and Documents

1. **Databases**:
   - A MongoDB database is a container for collections. Each database has its own set of files on the file system and can contain a large number of collections.
   - You can create multiple databases within a MongoDB instance, each serving a different application or use case.

2. **Collections**:
   - Collections are analogous to tables in relational databases. They are a group of MongoDB documents.
   - A collection exists within a single database. Collections do not enforce a schema, allowing documents within a collection to have different fields and structures.

3. **Documents**:
   - Documents are the basic units of data in MongoDB, stored in a BSON format (Binary JSON).
   - Each document is a set of key-value pairs and can contain nested documents, arrays, and more.
