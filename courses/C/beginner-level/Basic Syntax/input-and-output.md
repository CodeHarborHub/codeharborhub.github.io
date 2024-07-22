---
id: lesson-2
title: "Input and Output Operations"
sidebar_label: Input and Output Operations
sidebar_position: 2
description: "Learn Input and Output Operations"
tags: [courses,beginner-level,C,Introduction]
--- 
 

C provides standard input and output functions through the `stdio.h` library. The most commonly used functions are:

- **printf**: Used to print output to the console.
- **scanf**: Used to read input from the console.

Example of using `printf` and `scanf`:

```c
#include <stdio.h>

int main() {
    int age;
    float salary;
    char name[50];

    // Input
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("Enter your salary: ");
    scanf("%f", &salary);
    printf("Enter your name: ");
    scanf("%s", name); // Note: %s reads a single word

    // Output
    printf("Age: %d\n", age);
    printf("Salary: %.2f\n", salary);
    printf("Name: %s\n", name);

    return 0;
}
```

In this program:
- `scanf("%d", &age);` reads an integer input and stores it in the variable `age`.
- `scanf("%f", &salary);` reads a floating-point input and stores it in the variable `salary`.
- `scanf("%s", name);` reads a string input and stores it in the character array `name`.

**Sample Output:**

Assuming the user inputs:
- Age: `30`
- Salary: `75000.75`
- Name: `Alice`

```
Enter your age: 30
Enter your salary: 75000.75
Enter your name: Alice
Age: 30
Salary: 75000.75
Name: Alice
```

By understanding the basic syntax and structure of C, you can start writing simple programs and gradually move to more complex programming tasks.