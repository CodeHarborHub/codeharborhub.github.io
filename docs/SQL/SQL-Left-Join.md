---
id: sql-left-join
title: Left Join in SQL
sidebar_label: Left Join
sidebar_position: 13
tags: [sql, database, operation]
description: In this tutorial, we will learn about left joins in sql.
---

## What is a left join?
A left join of two tables, say table 1 and table 2, would return all the rows from the left table and matched values from table 2. If for a particular row in table 1 there is no matching entry in table 2, 'null' is returned.

## Syntax

```sql
select * 
from table_1 left join table_2
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

Now , lets try to obtain a result using left join.

```sql
select s.stud_id, s.stud_name, g.grade 
from students s left outer join grades g 
on s.stud_id=g.stud_id;

Output:
+---------+-----------+-------+
| stud_id | stud_name | grade |
+---------+-----------+-------+
|     101 | Shreeya   | A     |
|     102 | Aakash    | NULL  |
|     103 | Mansi     | NULL  |
|     104 | Aditya    | A+    |
+---------+-----------+-------+
```
Here we can see that the output contains the entry of student id's 102 and 103 even though they are not assigned any grade, i.e., they are not present in the 'grades' table.

## Conclusion
In this tutorial, we learnt how to use the left outer join with an example.
Left outer joins are used when we want to retrieve all the rows from the left(1st) table, irrespective of it being in the right(2nd) table.