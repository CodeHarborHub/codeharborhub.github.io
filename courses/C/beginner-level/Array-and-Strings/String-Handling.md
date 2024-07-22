---
id: lesson-2
title: "String Handling and Manipulation"
sidebar_label: String Handling and Manipulation
sidebar_position: 2
description: "Learn String Handling and Manipulation"
tags: [courses,beginner-level,C,Introduction]
--- 
 

Strings in C are arrays of characters terminated by a null character (`'\0'`). The C standard library provides several functions to handle and manipulate strings.

**Example: String Declaration and Initialization**

```c
#include <stdio.h>

int main() {
    // Declaration and initialization
    char str[20] = "Hello, World!";

    // Printing string
    printf("%s\n", str);

    return 0;
}
```

**Output:**

```
Hello, World!
```

:::note
**String Handling Functions:**

1. **`strlen`**: Returns the length of the string.
2. **`strcpy`**: Copies one string to another.
3. **`strcat`**: Concatenates two strings.
4. **`strcmp`**: Compares two strings.
:::

**Example: Using String Functions**

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "Hello";
    char str2[20] = "World";
    char str3[40];

    // String length
    printf("Length of str1: %lu\n", strlen(str1));

    // String copy
    strcpy(str3, str1);
    printf("str3 after copying str1: %s\n", str3);

    // String concatenation
    strcat(str3, str2);
    printf("str3 after concatenation: %s\n", str3);

    // String comparison
    int cmp = strcmp(str1, str2);
    if (cmp == 0) {
        printf("str1 and str2 are equal\n");
    } else if (cmp < 0) {
        printf("str1 is less than str2\n");
    } else {
        printf("str1 is greater than str2\n");
    }

    return 0;
}
```

**Output:**

```
Length of str1: 5
str3 after copying str1: Hello
str3 after concatenation: HelloWorld
str1 is less than str2
```
 