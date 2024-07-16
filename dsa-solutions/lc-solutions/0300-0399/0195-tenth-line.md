---
id: tenth-line
title: Tenth Line
difficulty: Easy
sidebar_label: 0195-Tenth-Line
tags:
  - Shell
  - LeetCode Easy
---

## Problem Description
Given a text file `file.txt`, print just the 10th line of the file.

If the file has less than 10 lines, what should you output? There's no need to output anything (an empty output).

### Example
**Example 1:**
```plaintext
Assume that `file.txt` has the following content:
Line 1
Line 2
Line 3
Line 4
Line 5
Line 6
Line 7
Line 8
Line 9
Line 10

Your script should output the following:
Line 10
```

**Example 2:**
```plaintext
Assume that `file.txt` has the following content:
Line 1
Line 2
Line 3

Your script should output nothing since there are less than 10 lines in the file.
```

### Constraints
- The file `file.txt` will have at most 10^3 lines.
- Each line in the file will have at most 10^3 characters.

## Solution Approach

### Approach Overview
There are multiple ways to achieve this using different shell commands. Here, we demonstrate solutions using `sed`, `awk`, and `tail` with `head`.

### Detailed Steps

1. **Using `sed`**:
   - The `sed` command can directly print the 10th line.

2. **Using `awk`**:
   - The `awk` command can be used to check the line number and print the 10th line.

3. **Using `tail` and `head`**:
   - The `tail` command can be used to get the last lines starting from the 10th, and then `head` can get the first of those lines.

## Code Examples

### Shell Script Using `sed`
```sh
# Using sed to print the 10th line
sed -n '10p' file.txt
```

### Shell Script Using `awk`
```sh
# Using awk to print the 10th line
awk 'NR == 10' file.txt
```

### Shell Script Using `tail` and `head`
```sh
# Using tail and head to print the 10th line
tail -n +10 file.txt | head -n 1
```

## Complexity

- **Time Complexity**: `O(n)`, where `n` is the number of lines in the file. Each line is read once until the 10th line.
  
- **Space Complexity**: `O(1)`, as no additional space is used beyond the required output.
