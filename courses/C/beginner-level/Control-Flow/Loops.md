---
title: Loops in c
sidebar_label: Loops
sidebar_position: 2
description: Learn Loops in C.
tags: [courses,C] 
---



Loops are used to execute a block of code repeatedly.

##### 1. for Loop

**Flowchart:**
```
  [Init]
    |
[Condition] ---+
    |         |
+---+---+   [False]
|       |      |
[True] [Update]|
    |         |
[Statements]---+
    |
 [Next]
```

**Example:**

```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("i = %d\n", i);
    }
    return 0;
}
```

**Output:**
```
i = 1
i = 2
i = 3
i = 4
i = 5
```

##### 2. while Loop

**Flowchart:**
```
[Condition]---+
    |        |
[True]    [False]
    |        |
[Statements] |
    |        |
 [Update]----+
    |
 [Next]
```

**Example:**

```c
#include <stdio.h>

int main() {
    int i = 1;
    while (i <= 5) {
        printf("i = %d\n", i);
        i++;
    }
    return 0;
}
```

**Output:**
```
i = 1
i = 2
i = 3
i = 4
i = 5
```

##### 3. do-while Loop

**Flowchart:**
```
 [Statements]
    |
 [Update]
    |
[Condition]
    |
[True]---+
    |    |
[False]  |
    |    |
 [Next]--+
```

**Example:**

```c
#include <stdio.h>

int main() {
    int i = 1;
    do {
        printf("i = %d\n", i);
        i++;
    } while (i <= 5);
    return 0;
}
```

**Output:**
```
i = 1
i = 2
i = 3
i = 4
i = 5
```

#### Break and Continue Statements

##### Example: break Statement

**Flowchart:**
```
   [Loop Start]
       |
   [Condition]
       |
      +--------+
     /         |
  [True]     [False]
    |           |
[Statements]  [Break]
    |           |
 [Break]      [Next]
```

**Example:**

```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            break;
        }
        printf("i = %d\n", i);
    }
    return 0;
}
```

**Output:**
```
i = 1
i = 2
```

##### Example: continue Statement

**Flowchart:**
```
   [Loop Start]
       |
   [Condition]
       |
      +--------+
     /         |
  [True]     [False]
    |           |
[Continue]   [Next]
    |
[Statements]
    |
 [Update]
    |
[Next Iteration]
```

**Example:**

```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            continue;
        }
        printf("i = %d\n", i);
    }
    return 0;
}
```

**Output:**
```
i = 1
i = 2
i = 4
i = 5
```
