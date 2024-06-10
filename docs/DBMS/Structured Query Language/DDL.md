# Data Definition Language (DDL)

Data Definition Language (DDL) is a subset of SQL used to define, modify, and delete database objects such as tables, indexes, views, and constraints. DDL statements enable users to create and manage the structure of the database schema.

## Key DDL Commands

### 1. CREATE

- `CREATE TABLE`: Defines a new table in the database.
  ```sql
  CREATE TABLE table_name (
      column1 datatype,
      column2 datatype,
      ...
  );
- `CREATE INDEX`: Creates an index on a table to improve data retrieval performance.

```sql
CREATE INDEX index_name ON table_name (column1, column2, ...);
```
- `CREATE VIEW`: Defines a virtual table based on the result set of a `SELECT` query.

```sql
CREATE VIEW view_name AS
SELECT column1, column2 FROM table_name WHERE condition;
```

### 2. ALTER

- `ALTER TABLE` : Modifies the structure of an existing table.
  - Add a new column
    ```sql
    ALTER TABLE table_name ADD column_name datatype;
    ```
  - Modify column definition
    ```sql
    ALTER TABLE table_name MODIFY column_name datatype;
    ````
  - Drop a column
    ```sql
    ALTER TABLE table_name DROP COLUMN column_name;
    ```

### 3. DROP
- `DROP TABLE`: Deletes a table and its data from the database.
  ```sql
  DROP TABLE table_name;
  ```
- `DROP INDEX`: Removes an index from the database.
  ```sql
  DROP INDEX index_name;
  ```
- `DROP VIEW`: Deletes a view from the database.
  ```sql
  DROP VIEW view_name;
  ```
