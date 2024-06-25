---
id: sql-insert-into-statement
title: Insert into Statement
sidebar_label: Insert into Statement
sidebar_position: 6
tags: [sql, database, statement]
description: In this tutorial, you will learn how to insert the data into the database.
---


The INSERT INTO statement is used to insert new records in a table.


## Syntax 
```sql
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;

```

## Advantages of SQL Insert into Statement

**1.Exclusion of Unwanted Records:**
- The NOT operator allows you to exclude records that match a certain condition. This is useful when you need to filter out specific data from your results.

**2.Simplification of Complex Conditions:**
- It simplifies the writing of complex conditions by directly specifying what should not be included. Without the NOT operator, you might have to write more convoluted logic.

**3.Enhanced Readability and Maintainability:**
- Using NOT can make the intention of the query clearer to someone reading the SQL code. Clearer code is easier to maintain and less prone to errors.

**4.Combination with Other Operators:**
- The NOT operator can be combined with other operators such as IN, BETWEEN, and LIKE to provide more nuanced data filtering.

**5.Handling NULL Values:**
- The NOT operator can also be used effectively with IS NULL or IS NOT NULL to filter out or include rows with NULL values.

**6.Flexibility in Subqueries:**
- When used with subqueries, the NOT operator can help exclude sets of records efficiently.

**7.Versatility in Logical Expressions:**
- It can be used to invert the result of any logical expression, providing versatility in query construction.

## Examples of Insert Into in SQL

### Inserting Data into Specified Columns
- Description :Let's assume we have a table called employees with the following columns: id, name, position, and salary.
To insert a new employee record specifying the columns:
- Example :
```
INSERT INTO employees (id, name, position, salary)
VALUES (1, 'John Doe', 'Software Engineer', 70000);
```


### Inserting Data into All Columns
- Description : If you want to insert data into all columns of the employees table, you can omit the column names:
- Example :
```INSERT INTO employees
VALUES (2, 'Jane Smith', 'Data Analyst', 65000);
```
### Inserting Multiple Rows
- Description :You can insert multiple rows in a single INSERT INTO statement by separating each row with a comma:
- Example :

```INSERT INTO employees (id, name, position, salary)
VALUES 
(3, 'Alice Johnson', 'Project Manager', 80000),
(4, 'Bob Brown', 'UX Designer', 60000);```
 
 
 ### Using Subqueries to Insert Data
- Description :You can also insert data using the result of a query from another table:
- Example :
```INSERT INTO employees (id, name, position, salary)
SELECT id, name, 'Intern', 30000
FROM candidates
WHERE status = 'Accepted';```

This statement inserts data into the employees table by selecting specific columns from the candidates table where the status is 'Accepted'.

### Inserting Data into Specific Columns Only
- Description : If you don't need to insert data into all columns, you can specify only the columns you want to insert data into. The remaining columns will use their default values:
- Example :
```INSERT INTO employees (name, position)
VALUES ('Charlie Davis', 'HR Specialist');```
In this case, id and salary will take their default values (if defined).

### Handling NULL Values
- Description :If you want to insert NULL values explicitly, you can do so by specifying NULL:
- Example :
```INSERT INTO employees (id, name, position, salary)
VALUES (5, 'Eve Miller', NULL, NULL);```
## Conclusion
The NOT operator in SQL provides a straightforward way to negate conditions in SQL queries, allowing for more flexible and precise data retrieval. Understanding its usage is crucial for crafting effective SQL statements, particularly when dealing with complex filtering requirements.

---

## Authors:

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
  {['damini-chachane'].map(username => (
    <Author key={username} username={username} />
  ))}
</div>
