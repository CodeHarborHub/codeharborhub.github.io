---
id: transpose-file
title: Transpose File
difficulty: Medium
sidebar_label: 0194-Transpose-File
tags:
  - Shell
  - LeetCode Medium
---

## Problem Description
Given a text file `file.txt`, transpose its content.

You may assume that each row has the same number of columns and each field is separated by the `' '` character.

### Example
**Example 1:**
```plaintext
Assume that `file.txt` has the following content:
name age
alice 21
ryan 30

Your script should output the following transposed content:
name alice ryan
age 21 30
```

### Constraints
- The file `file.txt` will be at most 10^3 lines.
- Each line in the file will have at most 10^3 characters.
- Each field in the file is separated by a single space character.

## Solution Approach

### Approach Overview
We can use a combination of `awk`, `paste`, and `cut` commands in a bash script to transpose the content of the file.

### Detailed Steps

1. **Read Each Line and Store Columns**:
   - Use `awk` to read each line and store columns in arrays.
   
2. **Print Transposed Content**:
   - Loop through the columns and print them as rows.

## Code Examples

### Shell Script
```sh
awk '
{
    for (i = 1; i <= NF; i++) {
        if (NR == 1) {
            s[i] = $i;
        } else {
            s[i] = s[i] " " $i;
        }
    }
}
END {
    for (i = 1; i <= NF; i++) {
        print s[i];
    }
}
' file.txt
```

## Complexity

- **Time Complexity**: `O(n * m)`, where `n` is the number of rows and `m` is the number of columns. Each element is processed once.
  
- **Space Complexity**: `O(n * m)`, as we store each element in memory to perform the transposition.
