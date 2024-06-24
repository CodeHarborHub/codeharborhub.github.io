---
id: sql-order-by-clause
title: Order By Clause in SQL
sidebar_label: Order By Clause
sidebar_position: 4
tags: [sql, database, clause ]
description: In this tutorial, you will learn how to sort the data as per the desired condition.
---

The ORDER BY clause in SQL is used to sort the result set of a query by one or more columns. The sorting can be done in ascending order (ASC) or descending order (DESC). By default, the ORDER BY clause sorts the records in ascending order if no explicit sort order is specified.

# Syntax 
`SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC; `

# Advantage of SQL WHERE Clause

**1. Improved Data Presentation**
- User-Friendly Display: The ORDER BY clause allows you to present data in a logical and readable order, which is particularly important for reports, dashboards, and user interfaces. For example, sorting customers by their last name makes it easier to find a specific person.
Natural Sorting: Sorting data in a way that aligns with natural human understanding, such as chronological order for dates or alphabetical order for names.
**2. Enhanced Data Analysis**
- Trend Analysis: Sorting data by time (e.g., order dates, transaction timestamps) helps in analyzing trends and patterns over specific periods.
- Top/Bottom Analysis: Quickly identify the top or bottom performers in a dataset, such as the highest-grossing products or the lowest sales figures.
**3. Data Integrity and Accuracy**
- Consistent Results: When combined with LIMIT and OFFSET, the ORDER BY clause ensures consistent results across multiple queries, essential for pagination and batch processing.
- Deterministic Output: For ordered datasets, the results are deterministic and predictable, ensuring that the same query yields the same order every time.
**4. Enhanced Query Functionality**
- Multi-Column Sorting: Ability to sort by multiple columns to achieve more granular control over data organization. For example, sorting by department and then by employee name within each department.
- Custom Sorting: Sorting by calculated columns or expressions, such as sorting by total compensation (salary + bonus) or age groups.

# Example of Order By Clause in SQL

**1.Ascending Order (Default):**
When no sorting order is specfied, SQL sorts the results in ascending order by default.
- Example : `SELECT first_name, last_name, age FROM employees ORDER BY last_name;`
- Description : This query sorts employees by their last name in ascending order.

**2.Descending Order:**

You can explicitly specify descending order using the DESC keyword.
- Example : `SELECT first_name, last_name, age FROM employees ORDER BY last_name DESC;`
- Description : This query sorts employees by their last name in descending order.

**3.Multiple Columns:**
You can sort by multiple columns, providing more detailed sorting criteria.
- Example : ` SELECT first_name, last_name, age FROM employees ORDER BY last_name ASC, first_name DESC`
- Descriptiom : This query sorts employees first by their last name in ascending order, and then by their first name in descending order for those with the same last name.

**4.Using Column Aliases:**
Column aliases can be used in the ORDER BY clause.
- Example : `SELECT first_name AS fname, last_name AS lname, age FROM employees ORDER BY lname ASC fname DESC;`
- Description : This query sorts using the aliases lname and fname.

**5.Sorting by Computed Values:**
You can sort by expressions or computed columns.
- Example : `SELECT first_name, last_name, age, (salary + bonus) AS total_compensation FROM employees ORDER BY total_compensation DESC;`
- Description: This query sorts employees by their total compensation in descending order.

**6.Ordering by Column Position:**
You can also use the position of the columns in the SELECT clause for sorting.
- Example : ` SELECT first_name, last_name, age FROM employees ORDER BY 2, 1; ` 
- Example : This query sorts employees by the second column (last_name) and then by the first column (first_name).

**7.Combining with Other Clauses:**
The ORDER BY clause is often used in combination with other clauses like LIMIT or OFFSET to paginate results.
- Example : `SELECT first_name, last_name, age FROM employees ORDER BY last_name ASC LIMIT 10 OFFSET 20;`
- Description : This query retrieves 10 rows starting from the 21st row, sorted by last_name.

# Conclusion
The ORDER BY clause is a powerful tool in SQL for sorting result sets. By using it effectively, you can organize your data in a meaningful way, making it easier to analyze and interpret.


---


## Authors:

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
  {['damini-chachane'].map(username => (
    <Author key={username} username={username} />
  ))}
</div>