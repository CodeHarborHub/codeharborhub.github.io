To write and run tests with the JUnit framework, you can follow these steps:

### 1. Write Test Classes

Create test classes containing test methods annotated with `@Test` to specify which methods should be executed as tests. Use JUnit's assertion methods to validate the expected behavior of your code.

```java
import org.junit.*;
import static org.junit.Assert.*;

public class MyMathTest {

    @Test
    public void testAdd() {
        assertEquals(5, MyMath.add(2, 3));
    }

    @Test
    public void testSubtract() {
        assertEquals(2, MyMath.subtract(5, 3));
    }

    @Test(expected = ArithmeticException.class)
    public void testDivideByZero() {
        MyMath.divide(5, 0);
    }
}
```

### 2. Compile Test Classes

Compile your test classes along with the classes being tested. Ensure that JUnit library is in your classpath.

### 3. Run Tests

Execute your tests using a test runner. You can use one of the following methods:

- **JUnit Runner**: Run tests programmatically using `JUnitCore` class.

    ```java
    import org.junit.runner.JUnitCore;
    import org.junit.runner.Result;
    import org.junit.runner.notification.Failure;

    public class TestRunner {
        public static void main(String[] args) {
            Result result = JUnitCore.runClasses(MyMathTest.class);
            for (Failure failure : result.getFailures()) {
                System.out.println(failure.toString());
            }
            System.out.println(result.wasSuccessful());
        }
    }
    ```

- **IDE Integration**: Run tests directly from your IDE (e.g., Eclipse, IntelliJ IDEA) by right-clicking on the test class and selecting "Run as JUnit Test".

- **Maven or Gradle**: Run tests using build automation tools like Maven or Gradle by executing test goals/tasks.

### 4. Analyze Results

Review the test results to identify any failures or errors. JUnit provides detailed information about which tests passed, which failed, and any exceptions that occurred during testing.

### Tips:

- Use `@Before` and `@After` annotations to execute setup and teardown methods before and after each test method.

- Utilize parameterized tests with `@RunWith(Parameterized.class)` for testing multiple inputs.

- Organize your test classes into separate packages and naming conventions (e.g., `MyClassTest`, `MyClassIntegrationTest`) for better organization.

By following these steps, you can effectively write and run tests using the JUnit framework to ensure the quality and reliability of your Java applications.