---
id: database-languages
title: DBMS Database Languages
sidebar_label: Database Languages
sidebar_position: 7
tags: [dbms]
description: Learn about different types of languages in DBMS.
---

There are 4 types of database languages:
- DDL (Data Definition Language)
- DML (Data Manipulation Language)
- DCL (Data Control Language)
- TCL (Transaction Control Language)

## DDL - Data Definition Language

DDL commands result in structural changes in the database.

These commands include:
- create
- alter
- truncate 
- drop
- comment
- rename

1.  ### Create
create command can be used to create a database or a table.

Example:
```sql
create table customers(
    name varchar(50), 
    age int
);
```
This command would create a new table 'customers' with two columns, name and age.

2. ### Alter 

Alter command can be used for different purposes, such as adding a column, dropping a column, modifying a column name,etc.

Example: 

```sql
alter table customers
add column city varchar(20);
```
This command would add a new coulum 'city' of type varchar to the table customers.<br />Since alter is a ddl command, it cannot be used to delete a row!


3. ### Truncate

The 'truncate' command is used to remove all the current data from a table, without deleting the table.

Consider the table below:
------------------
| name    | age  |
|---------|------|
| Siya    |   24 |
| Dipti   |   45 |
| Aditya  |   18 |
| Lakshya |   51 |
------------------

Now, lets use the truncate command:

```sql
truncate table customers;

/* Output:
mysql> select * from customers;
Empty set (0.00 sec)
*/
```
As expected, the command deletes all the rows from the table.

4. ### Rename

The 'rename' command is used to change the name of the table or a column.

example:
```sql
alter table customers 
rename to cust;

```
This example would rename the table 'customers' to 'cust'.

5. Drop

Drop command is used to delete a column or to to delete a table, or even a database.

example:
```sql
drop table cust;
```
This example would drop the table 'cust' from the database.

## DML - Data Manipulation Language

DML commands modify / retrieve the data in the database and do not result in any structural changes.

These command include:
- insert
- select
- delete
- update

1. ### Insert

The insert command is used to add data, a row, in a table.

example.
```sql
 insert into customers values
  ("Siya",24),
  ("Dipti",45),
  ("Aditya",18),
  ("Lakshya",51);
```
Thsi query would insert 4 rows in the 'customers' table.

2. ### Select

Data is retrieved using this command.
example:
```sql
 select * from customers;

 /* Output:
 +---------+------+
| name    | age  |
+---------+------+
| Siya    |   24 |
| Dipti   |   45 |
| Aditya  |   18 |
| Lakshya |   51 |
+---------+------+
 */
```
3. ### Update

This DML command is used to update values in a table.

example:
```sql
update customers
set age=28
where name="Siya";

/* Output: 
mysql> select age from customers where name="Siya";
+------+
| age  |
+------+
|   28 |
+------+
1 row in set (0.00 sec)
*/
```

4. ### Delete

This command is used to delete a row from the table.
example:
```sql
delete from customers 
where name="Siya";

/* Output:
mysql> select age from customers where name="Siya";
Empty set (0.00 sec)
*/
```

## DCL - Data Control Language

DCL commands are used to control the accessto the database.

These command include:
- grant
- revoke

The grant command grants the access to the database. Revoke, on the other hamd, revokes the access to the database.

### TCL - Transaction Control Language

TCL commands include:
- Commit
- Rollback

Commit command saves the state after a transaction is complete.<br />
Rollback command retrieves the original state of the database, i.e. the state before any operations of that transaction are performed.

### Conclusion:
In this tutorial, we learnt about the different types of database languages, how to execute various commands and their results.
