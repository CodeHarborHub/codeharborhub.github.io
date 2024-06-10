---
id: sql-basic-concepts
title: DBMS - SQL Basic Concepts
sidebar_label: Basic Concepts
sidebar_position: 1
description: Learn about the Structured Query language (SQL), its basic concepts, data types, operators, and commands that form the foundation of database manipulation.
tags:
  - DBMS
  - SQL
  - Database Design
---

# DBMS - SQL Basic Concepts

SQL stands for Structured Query Language. It is used to access and manipulate data in databases. By executing queries SQL can *create*, *update*, *delete*, and *retrieve* data in databases like MySQL, Oracle, PostgreSQL, etc. Overall, SQL is a query language that communicates with databases.

## Why SQL?
SQL helps to easily get information from data with high efficiency. Best Part? Without a lot of coding knowledge, we can manage a database with SQL. Anyone who knows English can master SQL queries in no time.
When we are executing the command of SQL on any Relational database managemnet system, then the system automatically finds the best routine to carry out our requests, and the SQL engine determines how to interpret the particular command.


## SQL DATABASE
The very first step is to store the information in database, hence, we will first create a database.

1. **CREATE:**
   To create a new database in SQL we use this command. Note that blank spaces are not allowed in the name and is case-insenitive.
   ```sql
   CREATE DATABASE database_name;
2. **SHOW:**
   To view all the databases, we can use the keyword show. It returns a list of all the databases that exist in our system.
   ```sql
   SHOW DATABASE;
3. **USE:**
   To change the database or select another database, we use the command:
   ```sql
   USE database_name;
4. **DROP:**
    It is used to remove the entire database from the system. Once deleted, it can not be retrieved.
    We can use the if exists clause to avoid any errors.
    ```sql
    DROP DATABASE database_name;
    DROP DATABASE IF EXISTS database_name; 
5. **RENAME:**
    It is used to rename the database.
    ```sql
    RENAME DATABASE former_database_name TO new_database_name;

## SQL TABLES
Now we have created the database. We will create tables inside our database. They are very similar to spreadsheets, which store data in very organized grid format. We can create as many tables as we require.
1. **CREATE:**
   To create a new table in database we use this command. We define the structure of table and the datatypes of columns.
   ```sql
   CREATE table Employee(
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Department VARCHAR(50),
    Salary DECIMAL(10, 2)
   );
2. **DELETE:**
   It is used to delete data in a database. We selectively remove records from a database table based on certain conditions.
   ```sql
   DELETE FROM table_name WHERE some_condition;
3. **DROP:**
    It is used to delete data and structure of the table from the database permanently.
    ```sql
    DROP TABLE table_name;
4. **ALTER:**
    It is used to rename the table.
    ```sql
    ALTER TABLE former_table_name RENAME TO new_table_name;
