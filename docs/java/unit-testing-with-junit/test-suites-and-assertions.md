In JUnit, test suites allow you to group multiple test classes together to execute them as a single unit. Assertions are used to verify expected outcomes in test methods. Here's how you can work with test suites and assertions in JUnit:

### Test Suites

A test suite is a collection of test cases (i.e., test classes) that can be executed together. You can create a test suite to run multiple test classes at once.

```java
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({MyMathTest.class, OtherTest.class})
public class AllTests {
    // This class is just a holder for the above annotations
}
```

### Assertions

JUnit provides a set of assertion methods in the `org.junit.Assert` class to verify expected outcomes in test methods.

```java
import static org.junit.Assert.*;

public class MyMathTest {

    @Test
    public void testAdd() {
        assertEquals(5, MyMath.add(2, 3)); // Verifies that the actual result is equal to the expected value
    }

    @Test
    public void testSubtract() {
        assertTrue(MyMath.subtract(5, 3) == 2); // Verifies that the condition is true
    }

    @Test
    public void testDivideByZero() {
        try {
            MyMath.divide(5, 0);
            fail("Expected ArithmeticException was not thrown"); // Fails the test if the expected exception is not thrown
        } catch (ArithmeticException e) {
            // Expected exception
        }
    }
}
```

### Common Assertion Methods

- `assertEquals(expected, actual)`: Verifies that the expected and actual values are equal.
- `assertTrue(condition)`: Verifies that the given condition is true.
- `assertFalse(condition)`: Verifies that the given condition is false.
- `assertNull(object)`: Verifies that the given object is null.
- `assertNotNull(object)`: Verifies that the given object is not null.
- `assertThrows(expectedException, executable)`: Verifies that the executable throws the expected exception.

### Tips

- Choose appropriate assertion methods based on the type of condition you want to verify.
- Use descriptive error messages to provide context when assertions fail.
- Combine multiple assertions in a single test method to verify different aspects of the code.

By using test suites and assertions effectively in your JUnit tests, you can organize your tests efficiently and ensure that your code behaves as expected under different conditions.