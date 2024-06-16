---
id: data-schema-dbms
title: DBMS Data Schemas
sidebar_label: Data Schemas
sidebar_position: 5
tags: [dbms, data schemas]
description: Learn about database schemas, including physical and logical schemas, and understand their role in defining the structure and constraints of a database.
---

# DBMS - Data Schemas

A database schema is the skeleton structure that represents the logical view of the entire database. It defines how the data is organized and how the relations among them are associated. It formulates all the constraints that are to be applied to the data.

## Database Schema

A database schema defines its entities and the relationship among them. It contains a descriptive detail of the database, which can be depicted by means of schema diagrams. It’s the database designers who design the schema to help programmers understand the database and make it useful.

![dbms_schemas](https://www.tutorialspoint.com/dbms/images/dbms_schemas.png)

### Categories of Database Schema

A database schema can be divided broadly into two categories:

- **Physical Database Schema**: This schema pertains to the actual storage of data and its form of storage like files, indices, etc. It defines how the data will be stored in a secondary storage.

- **Logical Database Schema**: This schema defines all the logical constraints that need to be applied to the data stored. It defines tables, views, and integrity constraints.

## Database Instance

> **Note:** It is important to distinguish these two terms individually:

- **Database Schema**: The skeleton of the database, designed before the database is created. Once the database is operational, it is very difficult to make any changes to it. A database schema does not contain any data or information.

- **Database Instance**: A state of the operational database with data at any given time. It contains a snapshot of the database. Database instances tend to change with time. A DBMS ensures that every instance (state) is valid by diligently following all the validations, constraints, and conditions that the database designers have imposed.
