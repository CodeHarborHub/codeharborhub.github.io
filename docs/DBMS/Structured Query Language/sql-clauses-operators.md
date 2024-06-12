---
id: sql-clauses-operators
title: DBMS - SQL Clauses & Operators
sidebar_label: Clauses & Operators
sidebar_position: 2
description: Learn about the SQL clauses and operators.
tags:
  - DBMS
  - SQL-Operators
  - SQL
  - Database Design
---

# DBMS - SQL Clauses & Operators

In SQL, clauses and operators play a crucial role in forming queries that manipulate and retrieve data from databases. Understanding these elements is essential for effective database management and query execution.

## SQL Clauses

SQL clauses are used to specify various conditions and constraints in SQL statements. Here are some of the most commonly used clauses:

1. **SELECT:**
   The SELECT clause is used to retrieve data from a database.
   ```sql
   SELECT column1, column2, ...
   FROM table_name;
2. **WHERE:**
   The WHERE clause is used to filter records based on a specified condition.
   ```sql
   SELECT column1, column2, ...
   FROM table_name
   WHERE condition;
3. **ORDER BY:**
   The ORDER BY clause is used to sort the result set in ascending or descending order.
   ```sql
   SELECT column1, column2, ...
   FROM table_name
   ORDER BY column1 ASC | DESC;
4. **GROUP BY:**
   The GROUP BY clause is used to group rows that have the same values into summary rows.
   ```sql
   SELECT column1, COUNT(*)
   FROM table_name
   GROUP BY column1;
5. **HAVING:**
   The HAVING clause is used to filter groups based on a specified condition, often used with GROUP BY.
   ```sql
   SELECT column1, COUNT(*)
   FROM table_name
   GROUP BY column1
   HAVING condition;
6. **JOIN:**
   The JOIN clause is used to combine rows from two or more tables based on a related column.
  - **INNER JOIN:**
      ```sql
      SELECT columns
      FROM table1
      INNER JOIN table2
      ON table1.column = table2.column;
  - **LEFT JOIN (or LEFT OUTER JOIN):**
      ```sql
      SELECT columns
      FROM table1
      LEFT JOIN table2
      ON table1.column = table2.column;
  - **RIGHT JOIN (or RIGHT OUTER JOIN):**
      ```sql
      SELECT columns
      FROM table1
      RIGHT JOIN table2
      ON table1.column = table2.column;
  - **FULL JOIN (or FULL OUTER JOIN):**
      ```sql
      SELECT columns
      FROM table1
      FULL JOIN table2
      ON table1.column = table2.column;
      ```

## SQL Operators

SQL operators are used to perform operations on data. Here are some of the most commonly used operators:

1. **ARITHMETIC OPERATORS:**
    Arithmetic operators are used to perform arithmetic operations on numeric data.
 
  - **ADDITION:**
    ```sql
    SELECT column1 + column2 AS result
    FROM table_name;
    ```
  - **SUBTRACTION:**
    ```sql
    SELECT column1 - column2 AS result
    FROM table_name;
    ```
  - **MULTIPLICATION:**
    ```sql
    SELECT column1 * column2 AS result
    FROM table_name;
    ```  
  - **DIVISION:**
    ```sql
    SELECT column1 / column2 AS result
    FROM table_name;
    ```

2. **COMPARISON OPERATORS:**
    Comparison operators are used to compare two values. 
  
  - **EQUAL TO:**
    ```sql
    SELECT columns
    FROM table_name
    WHERE column = value;
    ```  
  - **NOT EQUAL TO:**
    ```sql
    SELECT columns
    FROM table_name
    WHERE column <> value;
    ```    
  - **GREATER THAN:**
    ```sql
    SELECT columns
    FROM table_name
    WHERE column > value;
    ```    
  - **LESS THAN:**
    ```sql
    SELECT columns
    FROM table_name
    WHERE column < value;
    ```    
  - **GREATER THAN OR EQUAL TO:**
    ```sql
    SELECT columns
    FROM table_name
    WHERE column >= value;
    ```    
  - **LESS THAN OR EQUAL TO:**
    ```sql
    SELECT columns
    FROM table_name
    WHERE column <= value;
    ```

3. **LOGICAL OPERATORS:**
    Logical operators are used to combine two or more conditions.
  
  - **AND:**
    ```sql
    SELECT columns
    FROM table_name
    WHERE condition1 AND condition2;  
    ```    
  - **OR:**
    ```sql
    SELECT columns
    FROM table_name
    WHERE condition1 OR condition2;
    ```    
  - **NOT:**
    ```sql
    SELECT columns
    FROM table_name
    WHERE NOT condition;
    ```

4. **OTHER USEFUL OPERATORS:**

  - **BETWEEN:** The BETWEEN operator selects values within a given range.
    ```sql
    SELECT columns
    FROM table_name
    WHERE column BETWEEN value1 AND value2;
    ```  
  - **IN:** The IN operator allows you to specify multiple values in a WHERE clause.
    ```sql
    SELECT columns
    FROM table_name
    WHERE column IN (value1, value2, ...);
    ```  
  - **LIKE:** The LIKE operator is used to search for a specified pattern in a column.
    ```sql
    SELECT columns
    FROM table_name
    WHERE column LIKE pattern;
    ```  
  - **IS NULL:** The IS NULL operator is used to test for empty values (NULL).
    ```sql
    SELECT columns
    FROM table_name
    WHERE column IS NULL;
    ```
  - **IS NOT NULL:** The IS NOT NULL operator is used to test for non-empty values.
    ```sql
    SELECT columns
    FROM table_name
    WHERE column IS NOT NULL;
    ```

This covers the basic SQL clauses and operators, which are essential for writing effective SQL queries. By mastering these elements, you can perform complex data manipulations and retrieve valuable insights from your database.