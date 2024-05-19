

## Introduction to JDBC

Java Database Connectivity (JDBC) is a Java API for connecting and interacting with relational databases from Java programs. It provides a standard interface for Java applications to access databases, execute SQL queries, and manipulate database data.

### Key Components of JDBC

1. **Driver Manager**: Manages a list of database drivers. It is responsible for loading the appropriate driver based on the database URL provided by the application.

2. **Driver**: Implements the JDBC interfaces to communicate with a specific type of database. Each database vendor provides its own JDBC driver.

3. **Connection**: Represents a connection to a database. It is used to establish communication with the database and provides methods for executing SQL statements.

4. **Statement**: Represents an SQL statement to be executed against the database. It can be a simple statement, a prepared statement, or a callable statement.

5. **ResultSet**: Represents the result of a query executed against the database. It provides methods for navigating through the rows of the result set and retrieving column values.

### Steps to Use JDBC

1. **Load the Driver**: Register the JDBC driver using `Class.forName()` or let the DriverManager automatically load the appropriate driver.

2. **Establish Connection**: Create a connection to the database using `DriverManager.getConnection()` method by providing the database URL, username, and password.

3. **Create Statement**: Create a Statement object using the connection to execute SQL queries.

4. **Execute Query**: Execute SQL queries using the Statement object. For example, `executeQuery()` for SELECT queries and `executeUpdate()` for INSERT, UPDATE, DELETE queries.

5. **Process Results**: Process the results returned by the query using the ResultSet object.

6. **Close Resources**: Close the ResultSet, Statement, and Connection objects when they are no longer needed to release database resources.

### Example Code Snippet

```java
import java.sql.*;

public class JDBCDemo {
    public static void main(String[] args) {
        try {
            // Load the driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establish connection
            String url = "jdbc:mysql://localhost:3306/mydatabase";
            String username = "username";
            String password = "password";
            Connection connection = DriverManager.getConnection(url, username, password);

            // Create statement
            Statement statement = connection.createStatement();

            // Execute query
            ResultSet resultSet = statement.executeQuery("SELECT * FROM employees");

            // Process results
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                double salary = resultSet.getDouble("salary");
                System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
            }

            // Close resources
            resultSet.close();
            statement.close();
            connection.close();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }
}
```

### JDBC Drivers

There are four types of JDBC drivers:

1. **Type 1 (JDBC-ODBC Bridge)**: Uses ODBC (Open Database Connectivity) to connect to databases. It requires native code and is platform-dependent.

2. **Type 2 (Native-API Driver)**: Uses a database-specific native library to communicate with the database. It is platform-dependent and requires native code.

3. **Type 3 (Network Protocol Driver)**: Communicates with a middle-tier server using a database-independent protocol, which then communicates with the database. It is platform-independent but requires additional software.

4. **Type 4 (Thin Driver, JDBC Net Pure Java Driver)**: Communicates directly with the database using a pure Java implementation. It is platform-independent and does not require additional software.

### Conclusion

JDBC provides a powerful and flexible API for Java applications to interact with relational databases. By following the JDBC architecture and using appropriate drivers, developers can easily connect to databases, execute SQL queries, and manage database data from their Java programs.