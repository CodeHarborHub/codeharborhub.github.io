---
id: excel-sheet-column-number
title: Excel Sheet Column Number
sidebar_label: 0171-excel-sheet-column-number
tags:
  - Math
  - String

description: "This is a solution to the Excel Sheet Column Number on LeetCode."
---


## Problem Description

Given a string **columnTitle** that represents the column title as appears in an Excel sheet, return its corresponding column number.
For example:

```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
```


### Examples

**Example 1:**

**Input**: columnTitle = "A"
**Output**: 1

**Example 2:**

**Input**: columnTitle = "AB"
**Output**: 28

**Example 3:**
**Input**: columnTitle = "ZY"
**Output**: 701

## Constraints

- `1 <= columnTitle.length <= 7`
- `columnTitle consists only of uppercase English letters.`
- `columnTitle is in the range ["A", "FXSHRXW"]`

---

## Solution for Best Time to Buy and Sell Stock Problem

### Intuition
The intuition behind the solution is to treat each letter as a digit in a base-26 number system, where 'A' represents 1, 'B' represents 2, ..., 'Z' represents 26. The solution then iterates through each character in the column title, calculates the numeric value of the corresponding letter, and accumulates the result by considering the positional weight of each letter.

### Approach

- Initialize variables x and ans to keep track of the positional weight and the accumulated result, respectively.
- Iterate through each character s in the columnTitle.
- Convert the character s to its numeric representation by using the ord function (ASCII value) and subtracting 64 (since 'A' corresponds to 65 in ASCII).
- Update the result (ans) by adding the product of the numeric representation, positional weight (26**x), and decrease the positional weight x by 1.
- Repeat this process for each character in the column title.
- Return the final accumulated result.


### Code in Different languages

#### Code in C++

```c++
class Solution {
public:
    int titleToNumber(std::string columnTitle) {
        int x = columnTitle.length() - 1;
        int ans = 0;

        for (char s : columnTitle) {
            int letter = s - 'A' + 1;
            ans += letter * pow(26, x);
            x--;
        }

        return ans;
    }
};

    
```

```python
class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        x = len(columnTitle)-1
        ans = 0

        for s in columnTitle:
            letter = ord(s)-64
            ans += letter*(26**x)
            x -= 1

        return ans
        
```

### Complexity Analysis

- Time complexity: $O(n)$
- Space complexity: $O(1)$
