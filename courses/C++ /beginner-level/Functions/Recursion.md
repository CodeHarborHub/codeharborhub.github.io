---
id: lesson-2
title: "Recursion"
sidebar_label:  Recursion & Scope variable
sidebar_position: 2
description:  "Learn Recursion & Scope Variable in C++"
tags: [courses,beginner-level,C++,Introduction]
---  
 
 

A function calling itself to solve a problem.

#### Example
```cpp
#include <iostream>
using namespace std;

int factorial(int n) {
    if (n <= 1)
        return 1;
    else
        return n * factorial(n - 1);
}

int main() {
    int num = 5;
    cout << "Factorial of " << num << " is " << factorial(num) << endl;
    return 0;
}
```

**Output:**
```
Factorial of 5 is 120
```

### Scope and Lifetime of Variables

- **Scope:** The region of code where a variable is accessible.
- **Lifetime:** The duration for which a variable exists in memory.

#### Example
```cpp
#include <iostream>
using namespace std;

void display() {
    int localVar = 10; // local scope
    cout << "Local variable: " << localVar << endl;
}

int main() {
    display();
    // cout << localVar; // Error: localVar is not accessible here
    return 0;
}
```

**Output:**
```
Local variable: 10
```

:::tip
- **Meaningful Names:** Use descriptive names for functions and variables to make your code more readable.
- **Modular Code:** Break your code into smaller, reusable functions.
- **Avoid Global Variables:** Minimize the use of global variables to reduce dependency and potential bugs.
- **Commenting:** Document your functions with comments explaining their purpose and usage.
- **Testing:** Thoroughly test each function independently to ensure it works correctly.
:::