---
id: index-of-an-extra-element
title: Index of an Extra Element
sidebar_label: 0103-Index of an Extra Element

tags:
  - arrays
  - searching
  - data structures
  - algorithms
description: "A solution to the problem of determining the index of the extra element in the array "
---

In this page, we will solve the problem of determining the index of the extra element in the array.

## Problem Description

You have given two sorted arrays arr1[] & arr2[] of distinct elements. The first array has one element extra added in between. Return the index of the extra element.

Note: 0-based indexing is followed.

### Examples

**Example 1:**

```plaintext
Input: n = 7, arr1[] = {2,4,6,8,9,10,12}, arr2[] = {2,4,6,8,10,12}

Output: 4

Explanation: In the first array, 9 is extra added and it's index is 4.
```

**Example 2:**

```plaintext
Input: n = 6, arr1[] = {3,5,7,8,11,13}, arr2[] = {3,5,7,11,13}

Output: 3

Explanation: In the first array, 8 is extra and it's index is 3.
```

### Constraints

- $1 \leq N \leq10^5$, where $N$ is number of nodes
- $1 \leq arr1[i], arr2[i] \leq 10^6$
## Solution

### Intuition and Approach

This problem can be solved by iterating over the array by runnig the loop from o to the length of the smallest array 
<Tabs>
 <tabItem value="Inorder Traversal" label="Inorder Traversal">

### Approach: Inorder Traversal

1. Run a for loop from 0 to length of the smallest array.
2. If at any point in loop the element on ith index of both arrays are different then return the index as it is the answer
3. If loop runs completely and didn't terminate this means the last index of the largest array is the answer and return that index       

#### Code in Python
```python
class Solution:
    def findExtra(self,n,a,b):
        for i in range(min(len(a),len(b))):
            if a[i]!=b[i]:return i
        return i+1
```

#### Complexity Analysis

- **Time Complexity:** $O(N)$
- **Space Complexity:** $O(1)$

</tabItem>
</Tabs>
