---
id: sql-data-types
title: DBMS - SQL data-types
sidebar_label: Data-Types
sidebar_position: 5
description: SQL data-types
tags:
  - DBMS
  - SQL
  - Data Types
---

## Introduction:
Varios datatypes are supported in SQL. They include numeric data types, string data types and date and time.

## Numeric data types

1. int- <br /> For integer data.
eg:
```sql
create table temp(
 age int
);
```
2. tinyint- <br />For very small values.
3. smallint- <br />For small values.
4. mediumint- <br /> For medium vakues.
5. bigint- <br /> Upto 20 digits.
6. float- <br /> Used for decimals. It has 2 arguments, length and the number of digits after decimals.
eg:
```sql
create table temp(
    cash float(10,2)
);
```
7. double- <br /> Similar to float but can denote much larger numbers.


## String data types

1. char- <br /> Used if the length of string is fixed. Has an argument, the length.
2. varchar- <br /> Used for variable length strings. It also has an argument, the maximum possible length.
eg:
```sql
create table temp(
 name varchar(50)
);
```

## Date and Time

1. date
2. time
3. datetime
4. timestamnp