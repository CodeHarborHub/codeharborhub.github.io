---
id: sql-sub-queries
title: DBMS - SQL Sub-Queries
sidebar_label: Sub-Queries
sidebar_position: 4
description: Learn with an example.
tags:
  - DBMS
  - SQL
  - SQL-Queries
  - Database Design
---

# DBMS - SQL Sub-Queries

Subqueries, also known as inner queries or nested queries, are queries within a query. They are used to perform operations that require multiple steps, providing intermediate results for the outer query to process. Subqueries can be essential for complex data retrieval and manipulation, allowing you to break down complex queries into manageable parts.

## WHY USE SUBQUERIES?

1. **Modularity:** Break down complex queries into simpler parts.
2. **Reusability:** Use results from subqueries in multiple parts of the main query.
3. **Isolation:** Encapsulate logic to ensure clarity and correctness.
4. **Flexibility:** Perform operations like filtering, aggregating, and joining in a more readable way.

## SYNTAX OF SUBQUERY

A subquery is enclosed within parentheses and can be used in various parts of an SQL statement, such as the `SELECT`, `FROM`, `WHERE`, and `HAVING` clauses.
```sql
SELECT column1, column2
FROM table1
WHERE column3 = (SELECT column1 FROM table2 WHERE condition);
```


## TYPES OF SUBQUERIES
1. **SCALAR:** These return a single value and are often used in SELECT or WHERE clauses.
   ```sql
   SELECT first_name, last_name
   FROM employees
   WHERE salary > (SELECT AVG(salary) FROM employees);
   ```
   This query selects employees whose salary is above the average salary.

2. **COLUMN:** These return a single column of values and can be used with IN or ANY.
   ```sql
   SELECT first_name, last_name
   FROM employees
   WHERE department_id IN (SELECT department_id FROM departments WHERE department_name = 'IT');
   ```
   This query selects employees who work in the IT department.

3. **ROW:** These return a single row of values and are used in comparisons involving multiple columns.
   ```sql
   SELECT first_name, last_name
   FROM employees
   WHERE (department_id, salary) = (SELECT department_id, MAX(salary) FROM employees);
   ```
   This query selects the employee with the highest salary in each department.

4. **TABLE:** These return a result set that can be used as a temporary table in the FROM clause.
   ```sql
   SELECT department_id, AVG(salary)
   FROM (SELECT department_id, salary FROM employees WHERE salary > 50000) AS high_salaries
   GROUP BY department_id;
   ```
   This query calculates the average salary for employees earning more than 50,000, grouped by department.

 
## SUBQUERIES IN DIFFERENT CLAUSES
1. **SELECT Clause:** Used to return a value for each row selected by the outer query.
    ```sql
    SELECT first_name, last_name, (SELECT department_name FROM departments WHERE departments.department_id = employees.department_id) AS department
    FROM employees;
    ```
    This query retrieves the department name for each employee.

2. **FROM Clause:** Used to create a temporary table for the outer query to use.
    ```sql
    SELECT temp.department_id, AVG(temp.salary) AS avg_salary
    FROM (SELECT department_id, salary FROM employees WHERE salary > 50000) AS temp
    GROUP BY temp.department_id;
    ```
    This query calculates the average salary of employees earning more than 50,000, grouped by department.

3. **WHERE Clause:** Used to filter rows based on the result of the subquery.
    ```sql
    SELECT first_name, last_name
    FROM employees
    WHERE department_id = (SELECT department_id FROM departments WHERE department_name = 'HR');
    ```
    This query selects employees working in the HR department.

4. **HAVING Clause:** Used to filter groups based on the result of the subquery.
    ```sql
    SELECT department_id, COUNT(*) AS num_employees
    FROM employees
    GROUP BY department_id
    HAVING COUNT(*) > (SELECT AVG(num_employees) FROM (SELECT department_id, COUNT(*) AS num_employees FROM employees GROUP BY department_id) AS sub);
    ```
    This query selects departments with a number of employees greater than the average number of employees per department.

## TIPS FOR USING SUBQUERIES
1. **Performance:** Subqueries can be less efficient than joins, especially for large datasets. Optimize where possible.
2. **Readability:** Use subqueries to simplify complex queries, but ensure they remain readable.
3. **Testing:** Test subqueries separately to ensure they return the expected results before integrating them into the main query.

Subqueries are powerful tools for SQL query formulation, allowing for modular, reusable, and flexible query structures. Mastering subqueries can significantly enhance your ability to manipulate and retrieve data effectively.