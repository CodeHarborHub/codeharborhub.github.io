---
id: sql-inner-join
title: Inner Join in SQL
sidebar_label: Inner Join
sidebar_position: 14
tags: [sql, database, operation]
description: In this tutorial, we will learn about inner joins in sql.
---

## What is an inner join?
An inner join of 2 tables, say table_1 and table_2 on a column would return all rows with same values in common columns.An inner join may or may not have an 'on' clause. An inner join without an 'on' clause returns the cross join of the tables.

## Syntax

```sql
select * 
from table_1 inner join table_2
on table_1.col=table_2.col;
```

##### Note that the columns of table_1 and table_2 in the on clause must be the same attribute.

## Example

Consider the following tables:

```sql
select * from students;
+---------+-----------+
| stud_id | stud_name |
+---------+-----------+
|     101 | Shreeya   |
|     102 | Aakash    |
|     103 | Mansi     |
|     104 | Aditya    |
+---------+-----------+

 select * from grades;
+---------+-------+
| stud_id | grade |
+---------+-------+
|     101 | A     |
|     104 | A+    |
+---------+-------+
```

Now , lets try to obtain a result using inner join with and without the on clause.

##### With 'on' clause: 
```sql
select s.stud_id, s.stud_name, g.grade 
from students s inner join grades g 
on s.stud_id=g.stud_id;

Output:
+---------+-----------+-------+
| stud_id | stud_name | grade |
+---------+-----------+-------+
|     101 | Shreeya   | A     |
|     104 | Aditya    | A+    |
+---------+-----------+-------+
```
We can observe that only the rows with matching values in common column (stud_id) are returned.

##### Without 'on' clause: 
```sql
select s.stud_id, s.stud_name, g.grade 
from students s inner join grades g;

Output:
+---------+-----------+-------+
| stud_id | stud_name | grade |
+---------+-----------+-------+
|     101 | Shreeya   | A     |
|     101 | Shreeya   | A+    |
|     102 | Aakash    | A     |
|     102 | Aakash    | A+    |
|     103 | Mansi     | A     |
|     103 | Mansi     | A+    |
|     104 | Aditya    | A     |
|     104 | Aditya    | A+    |
+---------+-----------+-------+
```
Here we can see that the output is the cross join of both the tables.

## Conclusion
In this tutorial, we learnt how to use the inner join with and without the 'on' clause.
Inner joins are used when we want to retrieve all the rows with same values in common column(s).