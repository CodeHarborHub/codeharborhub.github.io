---
id: plus-one
title: Plus One
sidebar_label: Plus-One
tags:
  - Arrays
  - STL
description: "This tutorial covers the solution to the Plus One problem from the GeeksforGeeks."
---
## Problem Description
Given a non-negative number represented as a list of digits, add `1` to the number (increment the number represented by the digits). The digits are stored such that the most significant digit is first element of array.



## Examples

**Example 1:**

```
Input: 
N = 3
arr[] = {1, 2, 4}
Output: 
1 2 5
Explanation:
124+1 = 125, and so the Output
```

**Example 2:**

```
Input: 
N = 3
arr[] = {9,9,9}
Output: 
1 0 0 0
Explanation:
999+1 = 1000, and so the output
```

## Your Task

You don't need to read input or print anything. You only need to complete the function `increment()` that takes an integer N, and an array arr of size N as input and returns a list of integers denoting the new number which we get after adding one to the number denoted by the array arr.

Expected Time Complexity: $O(n)$

Expected Auxiliary Space: $O(1)$ for iterative approach.

## Constraints

* `1 ≤ n ≤ 10^5`

## Problem Explanation

Given a non-negative number represented as a list of digits, add `1` to the number (increment the number represented by the digits). The digits are stored such that the most significant digit is first element of array.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@arunimad6yuq"/>

  ```py
 def increment(digits):
    for i in range(len(digits) - 1, -1, -1):
        if digits[i] == 9:
            digits[i] = 0
        else:
            digits[i] += 1
            return digits
    digits.insert(0, 1)
    return digits

  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@YourUsername"/>

  ```cpp
vector<int> increment(vector<int>& digits) {
    for (int i = digits.size() - 1; i >= 0; --i) {
        if (digits[i] == 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }
    digits.insert(digits.begin(), 1);
    return digits;
}

  ```

  </TabItem>

  <TabItem value="Javascript" label="Javascript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```javascript
function increment(digits) {
    for (let i = digits.length - 1; i >= 0; --i) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
}



  ```

  </TabItem>

  <TabItem value="Typescript" label="Typescript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```typescript
function increment(digits) {
    for (let i = digits.length - 1; i >= 0; --i) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
}



  ```

  </TabItem>

  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```java
public List<Integer> increment(List<Integer> digits) {
    for (int i = digits.size() - 1; i >= 0; --i) {
        if (digits.get(i) == 9) {
            digits.set(i, 0);
        } else {
            digits.set(i, digits.get(i) + 1);
            return digits;
        }
    }
    digits.add(0, 1);
    return digits;
}



  ```

  </TabItem>
</Tabs>


## Time Complexity

* The iterative approach has a time complexity of $O(n)$.

## Space Complexity

* The space complexity is $O(1)$ since we are using only a fixed amount of extra space.