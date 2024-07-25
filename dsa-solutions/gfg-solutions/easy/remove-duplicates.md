---
id: remove-duplicates
title: Remove Duplicates
sidebar_label: 0107-Remoeve Duplicates
tags:
  - Strings
  - Data Structures
description: "A solution to the problem of finding the unique characters in the given string"
---

In this page, we will solve the problem of finding the unique characters in the given string.

## Problem Description

Given a string without spaces, the task is to remove duplicates from it.

Note: The original order of characters must be kept the same. 

### Examples

**Example 1:**

```plaintext
Input: S = "zvvo"
Output: "zvo"
Explanation: Only keep the first
occurrence
```

**Example 2:**

```plaintext
Input: S = "gfg"
Output: gf
Explanation: Only keep the first
occurrence
```

### Constraints

- $1 \leq$ |S| $\leq10^5$

## Solution

### Intuition and Approach

This problem can be solved by using an empty string and traversing the given string and storing the unique element in the empty string and then return it.

### Approach: 

1. The variable res is initialized to an empty string. This string will store the characters of S without duplicates.
2. We then Iterate through the input string:
   - The for loop iterates through each character i in the string S.
   - Inside the loop, there is an if statement that checks if the character i is not already in the result string ans.
     If i is not in res, it means this character hasn't been added yet.and so we add unique characters in res variable
3. After the loop completes, the method returns the result string res, which now contains the characters of S without duplicates, in the order of their first appearance.
#### Code in Python
```python

class Solution:
  def removeDups(self, S):
	  res=''
    for i in S:
        if i not in res:
            res+=i
    return res 
 ```

#### Complexity Analysis

- **Time Complexity:** $O(N^2)$
- **Space Complexity:** $O(N)$
