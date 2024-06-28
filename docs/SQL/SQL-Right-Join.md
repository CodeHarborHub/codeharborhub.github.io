---
id: sql-Right-join
title: Right Join in SQL
sidebar_label: Right Join
sidebar_position: 12
tags: [sql, database, operation]
description: In this tutorial, you will learn how to build queries with Right Join to get the desired output.
---

Certainly! A RIGHT JOIN (or RIGHT OUTER JOIN) in SQL is used to return all rows from the right table (table2), and the matched rows from the left table (table1). If there is no match, NULL values are returned for columns from the left table.

### Syntax
```sql
SELECT columns
FROM table1
RIGHT JOIN table2
ON table1.common_column = table2.common_column;
```
### Example
Consider two tables, employees and departments:

**employees Table:**
employee_id	name	department_id
1	John	10
2	Jane	20
3	Mike	30
**departments Table:**
department_id	department_name
10	HR
20	Finance
40	Marketing

To perform a RIGHT JOIN to get all departments and their corresponding employees:

```sql
SELECT employees.employee_id, employees.name, departments.department_name
FROM employees
RIGHT JOIN departments
ON employees.department_id = departments.department_id;
```
**Result:**
employee_id	name	department_name
1	John	HR
2	Jane	Finance
NULL	NULL	Marketing

**Explanation**
- Row 1: The employee with ID 1 (John) works in the HR department.
- Row 2: The employee with ID 2 (Jane) works in the Finance department.
- Row 3: There are no employees assigned to the Marketing department, so NULL values are returned for employee_id and name.

### Conclusion
A RIGHT JOIN retrieves all records from the right table (table2) and matched records from the left table (table1). It ensures that every row from the right table is returned, even if there are no matching rows in the left table, in which case NULL values are used. This type of join is useful when you want to include all records from the right table, ensuring no data is left out from that side of the join operation.
