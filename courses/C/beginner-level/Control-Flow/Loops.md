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

```mermaid
flowchart TD
    A[Init] --> B[Condition]
    B -->|True| C[Statements]
    C --> D[Next]
    B -->|False| E[Update]
    E --> F[Statements]
    F --> D

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

```mermaid
flowchart TD
    A[Condition] -->|True| B[Statements]
    A -->|False| C[Update]
    B --> D[Update]
    C --> E[Next]
    D --> E
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

```mermaid
flowchart TD
    A[Statements] --> B[Update]
    B --> C[Condition]
    C -->|True| D[True]
    C -->|False| E[False]
    E --> F[Next]
    D --> F
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


```mermaid
flowchart TD
    A[Loop Start] --> B[Condition]
    B -->|True| C[Statements]
    B -->|False| D[Break]
    C --> E[Break]
    D --> F[Next]
    E --> F
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

```mermaid
flowchart TD
    A[Loop Start] --> B[Condition]
    B -->|True| C[Continue]
    B -->|False| F[Next]
    C --> D[Statements]
    D --> E[Update]
    E --> G[Next Iteration]
    F --> G
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
