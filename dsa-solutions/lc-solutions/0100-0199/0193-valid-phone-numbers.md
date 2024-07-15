---
id: valid-phone-numbers
title: Valid Phone Numbers
difficulty: Easy
sidebar_label: 0193-Valid-Phone-Numbers
tags:
  - Shell
  - LeetCode Easy
---

## Problem Description
Given a text file `file.txt` that contains a list of phone numbers (one per line), write a one-liner bash script to print all valid phone numbers.

You may assume that a valid phone number must appear in one of the following two formats:
1. `(xxx) xxx-xxxx`
2. `xxx-xxx-xxxx`

(Here `x` denotes a digit.)

You may also assume each line in the text file is a single valid or invalid phone number that follows the above formats (no leading or trailing white spaces).

### Example
**Example 1:**
```plaintext
Assume that `file.txt` has the following content:
987-123-4567
123 456 7890
(123) 456-7890

Your script should output the following valid phone numbers:
987-123-4567
(123) 456-7890
```

### Constraints
- The file `file.txt` will be at most $10^4$ lines.
- The phone numbers in the file are either valid or invalid according to the described formats.

## Solution Approach

### Approach Overview
We can use regular expressions with the `grep` command to filter out valid phone numbers from the file.

### Detailed Steps

1. **Use `grep` with Regular Expressions**:
   - The `grep` command can be used to match lines in the file against the specified patterns.
   - We need to use the `-E` option for extended regular expressions.
   
2. **Regular Expression for Phone Numbers**:
   - Use the pattern `^\(\d{3}\) \d{3}-\d{4}$` to match phone numbers in the format `(xxx) xxx-xxxx`.
   - Use the pattern `^\d{3}-\d{3}-\d{4}$` to match phone numbers in the format `xxx-xxx-xxxx`.

## Code Examples

### Shell Script
```sh
# Using grep with extended regular expressions to match the two valid formats
grep -E '^\(\d{3}\) \d{3}-\d{4}$|^\d{3}-\d{3}-\d{4}$' file.txt
```

## Complexity

- **Time Complexity**: $O(n)$, where $n$ is the number of lines in the file. The `grep` command processes each line in the file once.
  
- **Space Complexity**: $O(1)$, as the space used by `grep` is constant and does not depend on the input size.
