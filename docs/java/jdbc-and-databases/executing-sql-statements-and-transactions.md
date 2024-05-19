To execute SQL statements and transactions using JDBC, you can use the Statement and PreparedStatement interfaces. Here's how you can execute SQL statements and transactions:

### Executing SQL Statements

1. **Statement**: Use when you have a static SQL query that does not contain user input.

```java
try {
    Statement statement = connection.createStatement();
    ResultSet resultSet = statement.executeQuery("SELECT * FROM my_table");
    // Process ResultSet
    statement.close();
} catch (SQLException e) {
    e.printStackTrace();
}
```

2. **PreparedStatement**: Use when you have a dynamic SQL query that may contain user input.

```java
try {
    PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM my_table WHERE id = ?");
    preparedStatement.setInt(1, 1); // Set parameter values
    ResultSet resultSet = preparedStatement.executeQuery();
    // Process ResultSet
    preparedStatement.close();
} catch (SQLException e) {
    e.printStackTrace();
}
```

### Executing Transactions

1. **Auto-commit Mode**: By default, JDBC operates in auto-commit mode, where each SQL statement is automatically committed as soon as it is executed. To start a transaction, you need to disable auto-commit.

```java
try {
    connection.setAutoCommit(false); // Disable auto-commit
    // Execute SQL statements
    connection.commit(); // Commit transaction
} catch (SQLException e) {
    e.printStackTrace();
    try {
        connection.rollback(); // Rollback transaction if an exception occurs
    } catch (SQLException ex) {
        ex.printStackTrace();
    }
} finally {
    try {
        connection.setAutoCommit(true); // Enable auto-commit
    } catch (SQLException ex) {
        ex.printStackTrace();
    }
}
```

2. **Savepoints**: You can set savepoints within a transaction to mark points where you can rollback to if necessary.

```java
try {
    connection.setAutoCommit(false); // Disable auto-commit
    // Execute SQL statements
    Savepoint savepoint = connection.setSavepoint("savepoint1"); // Set savepoint
    // More SQL statements
    connection.rollback(savepoint); // Rollback to savepoint
    connection.commit(); // Commit transaction
} catch (SQLException e) {
    e.printStackTrace();
    try {
        connection.rollback(); // Rollback transaction if an exception occurs
    } catch (SQLException ex) {
        ex.printStackTrace();
    }
} finally {
    try {
        connection.setAutoCommit(true); // Enable auto-commit
    } catch (SQLException ex) {
        ex.printStackTrace();
    }
}
```

### Note:

- Always handle exceptions properly and close resources in a finally block to ensure proper cleanup.
- Use PreparedStatement to prevent SQL injection attacks and improve performance.
- Transactions are typically used when you need to execute multiple SQL statements as a single unit of work, ensuring data consistency.