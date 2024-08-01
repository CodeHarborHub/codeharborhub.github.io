---
id: excel-sheet-column-number
title: Excel Sheet Column Number
sidebar_label: 0171-Excel Sheet Column Number
tags: [Math, String]
  
description: Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.
---

## Problem Statement


Given a string `columnTitle` that represents the column title as appear in an Excel sheet, return its corresponding column number.

For example:  
A -> 1  
B -> 2  
C -> 3  
...  
Z -> 26  
AA -> 27  
AB -> 28  
...  

### Examples

**Example 1:**

```plaintext
Input: columnTitle = "A"
Output: 1
```

**Example 2:**

```plaintext
Input: columnTitle = "AB"
Output: 28
```

**Example 3:**

```plaintext
Input: columnTitle = "ZY"
Output: 701
```

### Constraints

- $1 \leq \text{columnTitle.length} \leq 7$
- columnTitle consists only of uppercase English letters.
- columnTitle is in the range ["A", "FXSHRXW"].

## Solution

### Approach 

To convert the Excel column title to a number, you can think of it as a base-26 number system. Each character in the string corresponds to a digit in this base-26 system, where 'A' represents 1, 'B' represents 2, ..., 'Z' represents 26.


#### Algorithm

1. Initialization:  
- Initialize `result` to 0. This will hold the final column number.  
2. Processing Each Character:  
- Iterate through each character in the columnTitle string.
- For each character, convert it to its corresponding number using `ord(char) - ord('A') + 1`.
- Multiply the current `result` by 26 and add the value of the current character.

3. Return the Result:
- Return the final `result`.



#### Implementation

```Java
public class Solution {
    public int titleToNumber(String columnTitle) {
        int result = 0;
        for (int i = 0; i < columnTitle.length(); i++) {
            result = result * 26 + (columnTitle.charAt(i) - 'A' + 1);
        }
        return result;
    }
}
```

### Complexity Analysis

- **Time complexity**: $O(N)$
    * The time complexity is $O(N)$, where N is the length of the columnTitle string. This is because we iterate through each character in the string once.

- **Space complexity**: $O(1)$
    * The space complexity is $O(1)$ as we are using only a constant amount of extra space.

### Conclusion

This solution effectively converts an Excel sheet column title into its corresponding column number using a base-26 number system approach. The time complexity is efficient, making the solution suitable for handling large input sizes.
