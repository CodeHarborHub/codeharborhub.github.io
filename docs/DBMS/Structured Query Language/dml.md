# Data Manipulation Language

DML is used for performing non-structural updates to a database. For example, adding a row to an existing table, retrieving data from a table, etc.

### DML commands include:
- Select
- Insert 
- Update
- Delete

Let's see each command in detail:

## select

This command is used to retrieve data from the database. It is generally followed by from and where clauses.

Example:
```sql
select * from customers;
```
This query will return all the rows from the table customers including all attributes (columns).

```sql
select * 
from customers 
where address="India";
```
This query will return all the rows where the address of the customer is India.

```sql
select name,address
from customers;
```
This type of query returns only the name and address of the customers, i.e. the required information, instead of returning all the information. 

## insert

The insert command is used to add rows to a table in the database.

Example:
```sql
insert into customers values("Riya","India");
```
We can also insert multiple rows at a time:
```sql
insert into customers values
("Riya","India")
("Aditya","India")
("Chris","Germany");
```

## update

This command is used to update a certain row, given some information about that row.

Example:
```sql
update customers
set name="Tanisha"
where customer_id=125;
```
This query would update the name of the customer with id=125 to Tanisha.

## delete

Delete command is used to delete some rows in the table.

Example:
```sql
delete from customers where customer_id=125;
```
This will delete all the information of customer with id=125.

We can also delete multiple rows at a time:
```sql
delete from customers where address="India";
```
This query would delete information of all customers from India.
