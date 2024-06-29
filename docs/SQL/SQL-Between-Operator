---
id: sql-between-operator
title:  Between Operator in SQL
sidebar_label: Between Operator
sidebar_position: 10
tags: [sql, database, operator]
description: In this tutorial, you will learn how to Between Operator in the SQL.
---

The BETWEEN operator in SQL is used to filter the result set within a certain range. It selects values within a given range, inclusive of the start and end values. The BETWEEN operator can be used with numeric values, text values, and dates.


## Advantages of SQL Aggregate Functions

**1. Readability and Simplicity**
The BETWEEN operator makes SQL queries more readable and easier to write. Instead of using multiple comparison operators, you can express a range condition concisely.

**2. Inclusive Range**
The BETWEEN operator is inclusive, meaning it includes both the start and end values of the range. This simplifies the logic when you want to include boundary values in your results.

**3. Versatility**
The BETWEEN operator works with different data types, including numbers, dates, and strings, making it a versatile tool for various use cases.

**4. Performance**
In many cases, using the BETWEEN operator can be more efficient than using multiple AND conditions. Database engines often optimize range queries, especially if indexes are in place.

### Examples
**Numeric Range**
Suppose you have a table named employees with a column salary and you want to select employees with a salary between 30000 and 50000.

```
sql
SELECT * FROM employees
WHERE salary BETWEEN 30000 AND 50000;```

**Date Range**
 If you have a table named orders with a column order_date and you want to select orders placed between January 1, 2023, and June 30, 2023.

```sql
SELECT * FROM orders
WHERE order_date BETWEEN '2023-01-01' AND '2023-06-30';
```

**Text Range**
For a table named products with a column product_name, to select products with names between 'Apple' and 'Orange':

```sql
SELECT * FROM products
WHERE product_name BETWEEN 'Apple' AND 'Orange';
```


#### Equivalent BETWEEN with Comparison Operators
The BETWEEN operator can also be written using comparison operators:

```sql
SELECT * FROM employees
WHERE salary >= 30000 AND salary <= 50000;
```
### Using NOT BETWEEN
To select values outside a specified range, you can use the NOT BETWEEN operator.

```sql
SELECT * FROM employees
WHERE salary NOT BETWEEN 30000 AND 50000;
```
### Combining with Other Conditions
You can combine the BETWEEN operator with other conditions using AND or OR.

```sql
SELECT * FROM employees
WHERE salary BETWEEN 30000 AND 50000 AND department_id = 10;
```
### Conclusion
The BETWEEN operator enhances the clarity, conciseness, and efficiency of SQL queries when filtering data within a range. Its inclusive nature, versatility, and ease of maintenance make it a preferred choice for range-based conditions in SQL queries.






