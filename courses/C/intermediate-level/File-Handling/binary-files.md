---
id: lesson-2
title: "Working with Binary Files"
sidebar_label: Working with Binary Files
sidebar_position: 2
description: "Learn Working with Binary Files in C"
tags: [courses,intermediate-level,File Handling,Introduction]
---

#### Example : Working with Binary Files

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fptr;
    int numbers[] = {1, 2, 3, 4, 5};
    int n;

    // Writing to a binary file
    fptr = fopen("data.bin", "wb");
    if (fptr == NULL) {
        printf("Cannot open file \n");
        return 1;
    }
    fwrite(numbers, sizeof(int), 5, fptr);
    fclose(fptr);

    // Reading from a binary file
    fptr = fopen("data.bin", "rb");
    if (fptr == NULL) {
        printf("Cannot open file \n");
        return 1;
    }
    fread(&n, sizeof(int), 1, fptr);
    while (!feof(fptr)) {
        printf("%d ", n);
        fread(&n, sizeof(int), 1, fptr);
    }
    fclose(fptr);

    return 0;
}
```

**Output**:
```
1 2 3 4 5 
```