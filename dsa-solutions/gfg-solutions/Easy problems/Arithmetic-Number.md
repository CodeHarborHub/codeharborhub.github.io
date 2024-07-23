---
id: arithmetic-number
title: Arithmetic Number
sidebar_label: Arithmetic-Number
tags:
  - Intermediate
  - Array
  - Mathematical
  - GeeksforGeeks
  - CPP
  - Python
  - DSA
description: "This tutorial covers the solution to the Find the Arithmetic Number problem from the GeeksforGeeks."
---
## Problem Description

Given three integers  `'A'` denoting the first term of an arithmetic sequence , `'C'` denoting the common difference of an arithmetic sequence and an integer `'B'`. you need to tell whether `'B'` exists in the arithmetic sequence or not. Return `1` if `B` is present in the sequence. Otherwise, returns `0`.

## Examples

**Example 1:**

```
Input: A = 1, B = 3, C = 2
Output: 1
Explaination: 3 is the second term of the 
sequence starting with 1 and having a common 
difference 2.
```

**Example 2:**

```
Input: A = 1, B = 2, C = 3
Output: 0
Explaination: 2 is not present in the sequence.
```

## Your Task

You do not need to read input or print anything. Your task is to complete the function inSequence() which takes A, B and C and returns 1 if B is present in the sequence. Otherwise, returns 0.

Expected Time Complexity: $O(1)$

Expected Auxiliary Space: $O(1)$

## Constraints

* `-10^9 ≤ A, B, C ≤ 10^9`

## Problem Explanation
Given three integers  'A' denoting the first term of an arithmetic sequence , 'C' denoting the common difference of an arithmetic sequence and an integer 'B'. you need to tell whether 'B' exists in the arithmetic sequence or not. Return 1 if B is present in the sequence. Otherwise, returns 0.


## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```py
  def is_present(A, C, B):
  if (B - A) % C == 0 and (B - A) / C >= 0:
    return 1
  return 0


  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```cpp
 int isPresent(int A, int C, int B) {
  if ((B - A) % C == 0 && (B - A) / C >= 0) {
    return 1;
  }
  return 0;
}

  ```

  </TabItem>

  <TabItem value="Javascript" label="Javascript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```javascript
 function isPresent(A, C, B) {
  if ((B - A) % C === 0 && (B - A) / C >= 0) {
    return 1;
  }
  return 0;
}


  ```

  </TabItem>

  <TabItem value="Typescript" label="Typescript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```typescript
function isPresent(A, C, B) {
  if ((B - A) % C === 0 && (B - A) / C >= 0) {
    return 1;
  }
  return 0;
}

  ```

  </TabItem>

  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```java
  public int isPresent(int A, int C, int B) {
  if ((B - A) % C == 0 && (B - A) / C >= 0) {
    return 1;
  }
  return 0;
}


  ```

  </TabItem>
</Tabs>


## Solution Logic:
The solution checks if the difference between B and A is a multiple of C (the common difference) and if the result is non-negative. If both conditions are true, it means that B is present in the arithmetic sequence.


## Time Complexity

* The time complexity is $O(1)$, because it only involves simple arithmetic operations.


## Space Complexity

* The auxiliary space complexity is $O(1)$ because we are not using any extra space proportional to the size of the input array.