## Introduction to SQL Syntax

Structured Query Language (SQL) is used for managing and manipulating relational databases.
SQL's versatility and simplicity make it an essential tool for database management and analysis.
 Here’s a brief introduction to its syntax:
 1. Basic Commands
 2. Clauses
 3.Joins

![SQL Syntax](image.png)

# Basic Command 

# 1.SELECT:
The SELECT command is used to retrieve data from a database. It allows you to specify which columns of data you want to retrieve.
Syntax:
`SELECT column1, column2 FROM table_name;`
Example:
`SELECT name, age FROM employees;`

# 2.INSERT:
The INSERT command is used to add new rows of data into a table.
Syntax:
`INSERT INTO table_name (column1, column2) VALUES (value1, value2);`
Example:
`INSERT INTO employees (name, age) VALUES ('John Doe', 30);`

# 3.UPDATE:
The UPDATE command is used to modify existing data within a table. You specify the table, the column to update, the new value, and the condition that identifies which rows to update.
Syntax:
`UPDATE table_name SET column1 = value1 WHERE condition;`
Example:
`UPDATE employees SET age = 31 WHERE name = 'John Doe';`

# 4.DELETE:
The DELETE command is used to remove rows from a table. You specify the table and the condition that identifies which rows to delete.
Syntax:
`DELETE FROM table_name WHERE condition;`
Example:
`DELETE FROM employees WHERE name = 'John Doe';`

# 5.CREATE TABLE:
The CREATE TABLE command is used to create a new table in the database. You define the table name and the columns along with their data types.
Syntax:
`CREATE TABLE table_name (
  column1 datatype,
  column2 datatype,
  ...
);`
Example:
`CREATE TABLE employees (
  id INT,
  name VARCHAR(100),
  age INT
);`

# 6.ALTER TABLE:
The ALTER TABLE command is used to modify an existing table structure, such as adding, deleting, or modifying columns.
Syntax:
`ALTER TABLE table_name ADD column_name datatype;`
Example:
`ALTER TABLE employees ADD salary DECIMAL(10, 2);`
These basic commands form the foundation of SQL operations, allowing you to perform a wide range of data manipulation tasks.

# Clauses
SQL clauses are used to perform specific operations on data, refine query results, and filter data. Here are some of the key clauses used in SQL:


# WHERE:
Filters records that meet a specified condition.

Syntax:
`SELECT column1, column2 FROM table_name WHERE condition;`
Example:
`SELECT * FROM employees WHERE age > 30;`

# ORDER BY:
Sorts the result set of a query by one or more columns, either in ascending (ASC) or descending (DESC) order.
Syntax:
`SELECT column1, column2 FROM table_name ORDER BY column1 [ASC|DESC];`

Example:
`SELECT * FROM employees ORDER BY age DESC;`

# GROUP BY:
Groups rows that have the same values in specified columns into summary rows, like “find the number of employees in each department.”
Syntax:
`SELECT column1, COUNT(*) FROM table_name GROUP BY column1;`

Example:
`SELECT department, COUNT(*) FROM employees GROUP BY department;`

# HAVING:
Filters groups based on a specified condition, often used with the GROUP BY clause.

Syntax:
`SELECT column1, COUNT(*) FROM table_name GROUP BY column1 HAVING condition;`

Example:
`SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 10;`


# Joins
SQL joins are used to combine rows from two or more tables based on a related column between them. Here are the main types of joins and their descriptions:

# INNER JOIN
Returns only the rows where there is a match in both tables.
Syntax:
`SELECT table1.column1, table2.column2
FROM table1
INNER JOIN table2 ON table1.common_column = table2.common_column;`
Example:
`SELECT employees.name, departments.department_name
FROM employees
INNER JOIN departments ON employees.department_id = departments.id;`
# LEFT JOIN (or LEFT OUTER JOIN):
Returns all rows from the left table, and the matched rows from the right table. If there is no match, NULL values are returned for columns from the right table.
Syntax:
`SELECT table1.column1, table2.column2
FROM table1
LEFT JOIN table2 ON table1.common_column = table2.common_column;`
Example:
`SELECT employees.name, departments.department_name
FROM employees
LEFT JOIN departments ON employees.department_id = departments.id;`

# RIGHT JOIN (or RIGHT OUTER JOIN):
Returns all rows from the right table, and the matched rows from the left table. If there is no match, NULL values are returned for columns from the left table.
Syntax:
`SELECT table1.column1, table2.column2
FROM table1
RIGHT JOIN table2 ON table1.common_column = table2.common_column;`
Example:
`SELECT employees.name, departments.department_name
FROM employees
RIGHT JOIN departments ON employees.department_id = departments.id;`

# FULL JOIN (or FULL OUTER JOIN):
Returns all rows when there is a match in either the left table or the right table. Rows without a match in one of the tables will contain NULL values for columns from that table.

Syntax:
`SELECT table1.column1, table2.column2
FROM table1
FULL JOIN table2 ON table1.common_column = table2.common_column;`

Example:
`SELECT employees.name, departments.department_name
FROM employees
FULL JOIN departments ON employees.department_id = departments.id;`

## Conclusion
SQL, a foundational language for managing and manipulating relational databases, uses various commands and clauses to perform operations on data. The basic commands include SELECT to retrieve data, INSERT to add new rows, UPDATE to modify existing data, and DELETE to remove rows. These commands are essential for data manipulation.

SQL clauses, such as WHERE, ORDER BY, GROUP BY, and HAVING, refine query results by filtering, sorting, and grouping data. The LIMIT and OFFSET clauses control the number of records returned and their starting point, while DISTINCT removes duplicates. The UNION and UNION ALL clauses combine results from multiple queries, with UNION removing duplicates and UNION ALL retaining them.

Joins in SQL combine rows from multiple tables based on related columns, allowing for comprehensive data analysis. The INNER JOIN returns rows with matching values in both tables, while LEFT JOIN and RIGHT JOIN include all rows from one table and the matched rows from the other, with unmatched rows returning as NULL. FULL JOIN returns all rows with matching or non-matching rows from both tables. CROSS JOIN generates the Cartesian product of two tables, and SELF JOIN joins a table with itself.

Together, these commands, clauses, and joins form a powerful toolkit for querying and managing relational databases, enabling users to extract meaningful insights and perform complex data operations efficiently.