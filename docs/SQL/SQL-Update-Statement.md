---
id: sql-update-statement
title: Update Statement
sidebar_label: Update Statement
sidebar_position: 7
tags: [sql, database, statement]
description: In this tutorial, you will learn how to Update the data into the database.
---


The UPDATE statement in SQL is used to modify the existing records in a table. Below is a comprehensive overview of the UPDATE statement, including syntax, usage, and examples.


## Syntax 
```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;


```

## Advantages of SQL Update into Statement

**1.Efficient Data Modification:**
The UPDATE statement allows you to efficiently modify existing records without the need to delete and reinsert them. This can save time and reduce the risk of errors.

**2.Targeted Updates:**
You can update specific records using the WHERE clause, ensuring that only the desired rows are affected. This precision helps maintain data integrity and prevents unintended changes.

**3.Bulk Updates:**
The UPDATE statement can be used to modify multiple records at once, which is particularly useful for batch updates and maintaining large datasets.

**4.Conditional Updates:**
With the WHERE clause, you can apply conditions to update only those records that meet certain criteria. This flexibility allows for dynamic and context-specific data modifications.

**5.Use of Expressions and Functions:**
You can incorporate SQL expressions and functions in the SET clause to perform complex updates. For example, you can calculate new values based on existing data.

## Examples of Update Into in SQL

### Updating a Single Column
Description - Let's assume we have a table called employees with the following columns: id, name, position, and salary.
To update the salary of an employee with id 1:
Example - 
```sql
UPDATE employees
SET salary = 75000
WHERE id = 1;
```

### Updating Multiple Columns
Description - To update both the position and salary of an employee with id 2:
Example - 
```sql
UPDATE employees
SET position = 'Senior Data Analyst', salary = 70000
WHERE id = 2;
```
### Updating Multiple Rows
Description - To increase the salary of all employees in the 'Sales' department by 5000:
Example - 
```sql
UPDATE employees
SET salary = salary + 5000
WHERE department = 'Sales';
```
### Updating All Rows
Description - To set the default department to 'General' for all employees:

Example - 
```sql
UPDATE employees
SET department = 'General';
```

Note: Be careful when omitting the WHERE clause, as this will update all rows in the table.

### Conditional Update Using Subquery
Description - To update the salary of employees based on their performance score stored in another table:
Example - 

```sql
UPDATE employees
SET salary = salary + 5000
WHERE id IN (SELECT employee_id FROM performance WHERE score > 90);
```

## Conclusion
In conclusion, the UPDATE statement in SQL is a powerful and essential tool for database management. Its advantages include efficient data modification, targeted updates, the ability to handle bulk and conditional updates, and the use of expressions and functions to perform complex operations. The UPDATE statement also enhances data consistency and integrity, improves performance, and is easy to use, making it a fundamental part of any database administrator's toolkit.
---

## Authors:

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
  {['Damini2004'].map(username => (
    <Author key={username} username={username} />
  ))}
</div>
Footer
