---
id: lesson-2
title: "Input and Output Operations (cin, cout)"
sidebar_label:  Input and Output Operations
sidebar_position: 2
description:  "Input and Output Operations (cin, cout)t"
tags: [courses,beginner-level,C++,Introduction]
---   

C++ uses `cin` and `cout` for input and output operations, respectively. They are part of the iostream library.

**Example:**
```cpp
#include <iostream>

int main() {
    int number;
    std::cout << "Enter a number: "; // Output a prompt to the console
    std::cin >> number; // Input a number from the user

    std::cout << "You entered: " << number << std::endl; // Output the entered number

    return 0;
}
```

**Output:**
```
Enter a number: 42
You entered: 42
```

:::tip
- **Consistent Indentation:** Keep your code readable by using consistent indentation and spacing.
- **Meaningful Variable Names:** Use descriptive names for your variables to make your code easier to understand.
- **Comment Your Code:** Use comments to explain the purpose of complex code blocks.
- **Practice Regularly:** Write and run small programs to familiarize yourself with the syntax and structure of C++.
- **Refer to Documentation:** Always refer to the official C++ documentation and resources for detailed information and examples.
:::