---
id: c-enums
title: C Enums
sidebar_label: C Enums
sidebar_position: 15
tags: [c, c enums]
description: In this tutorial, you will learn about the C Enums, what it is.
---

Enums, short for enumerations, in C provide a way to define a new data type with a set of named constants. Enums are used to assign names to integral constants, making the code more readable and easier to maintain. 

Enums are defined using the `enum` keyword, followed by the enum tag (optional) and curly braces `{}` containing a comma-separated list of identifiers (constants).

```c
#include <stdio.h>

// Define an enum named 'Weekday' with constants
enum Weekday {
    Sunday,    // 0
    Monday,    // 1
    Tuesday,   // 2
    Wednesday, // 3
    Thursday,  // 4
    Friday,    // 5
    Saturday   // 6
};
```

- `Weekday` is the enum tag.
- `Sunday`, `Monday`, etc., are constants (enumerators) with default integer values starting from 0.

### Enum Constants and Values

By default, enums assign values starting from 0 and increment by 1 for each subsequent enumerator. You can explicitly assign values to enum constants:

```c
enum Month {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
};
```

- `January` is assigned the value `1`.
- `February` automatically gets the value `2`, and so on up to `December` which gets the value `12`.

### Using Enums in C

Enums are used to declare variables, function parameters, and return types, providing meaningful names instead of numeric constants:

```c
int main() {
    enum Weekday today = Wednesday; // Declare a variable of enum type

    printf("Today is ");
    switch (today) {
        case Sunday:
            printf("Sunday.\n");
            break;
        case Monday:
            printf("Monday.\n");
            break;
        case Tuesday:
            printf("Tuesday.\n");
            break;
        case Wednesday:
            printf("Wednesday.\n");
            break;
        case Thursday:
            printf("Thursday.\n");
            break;
        case Friday:
            printf("Friday.\n");
            break;
        case Saturday:
            printf("Saturday.\n");
            break;
        default:
            printf("Unknown day.\n");
    }

    return 0;
}
```

### Benefits of Enums

1. **Readability**: Enums improve code readability by replacing magic numbers with meaningful names.
   
2. **Compiler Checks**: The compiler checks enum usage for type safety, ensuring that only valid enum values are used.

3. **Ease of Maintenance**: Changing the value associated with an enum constant updates all references automatically.

4. **Scoped Constants**: Enums provide scope for constants, avoiding name clashes with other constants or variables.

### Conclusion

Enums in C provide a convenient way to define named integral constants, making the code more readable and maintainable. They are widely used in scenarios where a variable can take one of a fixed set of values, such as days of the week, months of the year, error codes, and more. Understanding enums is essential for writing clear and robust C code, improving both development efficiency and code reliability.