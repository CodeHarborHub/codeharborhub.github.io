---
id: sql-aggregate-function
title: DBMS - SQL Aggregate Functions
sidebar_label: Aggregate Functions
sidebar_position: 3
description: Learn about the SQL Aggregate Functions.
tags:
  - DBMS
  - SQL
  - SQL-Functions
  - Database Design
---

# DBMS - SQL Aggregate Functions

Aggregate functions in SQL are used to perform calculations on multiple rows of a table's column and return a single value. These functions are essential for data analysis and reporting as they help in summarizing large datasets.

## COMMON AGGREGATE FUNCTIONS

1. **COUNT():** The COUNT() function returns the number of rows that match a specified condition. This query returns the total number of rows in the table.
    ```sql
    SELECT COUNT(*) AS total_rows
    FROM table_name;
    ```

2. **SUM():** The SUM() function returns the total sum of a numeric column. This query calculates the sum of all values in column_name.
    ```sql
    SELECT SUM(column_name) AS total_sum
    FROM table_name;
    ```

3. **AVG():** The AVG() function returns the average value of a numeric column. This query calculates the average value of column_name.
    ```sql
    SELECT AVG(column_name) AS average_value
    FROM table_name;
    ```

4. **MIN():** The MIN() function returns the smallest value in a specified column. This query finds the smallest value in column_name.
    ```sql
    SELECT MIN(column_name) AS minimum_value
    FROM table_name;
    ```

5. **MAX():** The MAX() function returns the largest value in a specified column. This query finds the largest value in column_name.
    ```sql
    SELECT MAX(column_name) AS maximum_value
    FROM table_name;
    ```

## AGGREGATE FUNCTIONS WITH GROUP BY

Aggregate functions are often used in conjunction with the GROUP BY clause to group the result set by one or more columns and perform the calculation on each group.
    ```sql
     SELECT department, COUNT(*) AS total_employees
     FROM employees
     GROUP BY department; 
    ```
    This query groups the employees by their department and returns the number of employees in each department.

    ```sql
    SELECT department, COUNT(*) AS total_employees, AVG(salary) AS average_salary, MAX(salary) AS highest_salary
    FROM employees
    GROUP BY department;
    ```
    This query groups the employees by their department and returns the total number of employees, average salary, and highest salary in each department.

## AGGREGATE FUNCTIONS USING HAVING

The HAVING clause is used to filter groups based on the result of aggregate functions. It is similar to the WHERE clause, but WHERE cannot be used with aggregate functions.
    ```sql
    SELECT department, COUNT(*) AS total_employees
    GROUP BY department
    HAVING COUNT(*) > 10;
    ```
    This query groups the employees by their department and returns the departments that have more than 10 employees.

You can combine multiple aggregate functions in a single query to perform various calculations. 
    ```sql
    SELECT COUNT(*) AS total_rows, SUM(column_name) AS total_sum, AVG(column_name) AS average_value
    FROM table_name;
    ```
    This query returns the total number of rows, the sum of column_name, and the average value of column_name.

Aggregate functions are powerful tools in SQL for summarizing and analyzing data. By mastering these functions, you can perform complex data analysis and gain valuable insights from your database.