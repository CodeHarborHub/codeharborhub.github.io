---
id: excel-sheet-column-title
title: Excel Sheet Column Title
sidebar_label: 0168-Excel Sheet Column Title
tags:
  - Math
  - String
description: Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
---

## Problem Statement

Given an integer `columnNumber`, return its corresponding column title as it appears in an Excel sheet.  

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
Input: columnNumber = 1
Output: "A"
```

**Example 2:**

```plaintext
Input: columnNumber = 28
Output: "AB"
```

**Example 3:**

```plaintext
Input: columnNumber = 701
Output: "ZY"
```

### Constraints

- $1 \leq  \text{columnNumber} \leq 2^{23} - 1$

## Solution

### Approach 

To solve the "Excel Sheet Column Title" problem using the iterative approach, we continuously divide the given number by 26 and determine the remainder. This remainder gives us the current character of the Excel title, starting from the least significant character.



Key Data Structures
- **List (result)**: Used to store the characters of the Excel title.

#### Algorithm

1. Initialization:  
- Create an empty list named result.   
2. Processing Each Number:  
- While columnNumber is not zero:  
  *  Use the divmod function to get the quotient and remainder of columnNumber when divided by 26.  
  * Decrement the columnNumber by 1 and append the corresponding character to the result list.
3. Wrap-up:
- Reverse the result list and join the characters to form the final Excel title.



#### Implementation

```Java
public class Solution {
    public String convertToTitle(int columnNumber) {
        StringBuilder result = new StringBuilder();
        while (columnNumber > 0) {
            columnNumber--;
            char c = (char) ('A' + columnNumber % 26);
            result.insert(0, c);
            columnNumber /= 26;
        }
        return result.toString();
    }
}
```

### Complexity Analysis

- **Time complexity**: $O(log26n)$
    * The time complexity is O(log26n), where n is the given columnNumber. This is because we're continuously dividing the number by 26 until it becomes zero.

- **Space complexity**: $O(1)$
    * The space complexity is O(log26n) due to the list we use to store the Excel title characters.

### Conclusion

This problem provides an elegant demonstration of how to convert base-10 numbers to another base, in this case, base-26. It's a great reminder that sometimes algorithmic problems can be rooted in simple number base conversions.
