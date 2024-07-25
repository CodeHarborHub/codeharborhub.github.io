---
id: print-pattern
title: Print Pattern
sidebar_label: Print-Pattern
tags:
  - Recursion
  - Algorithms
description: "This tutorial covers the solution to the Print Pattern problem from the GeeksforGeeks."
---
## Problem Description
Print a sequence of numbers starting with nn, without using a loop. Replace `nn` with `n−5n - 5n−5` until `n≤0n` `\leq 0n≤0`. Then, replace n with `n+5n + 5n+5` until `nn` regains its initial value. Complete the function pattern(n) which takes n as input and returns a list containing the pattern.

## Examples

**Example 1:**

```
Input: n = 16
Output: 16 11 6 1 -4 1 6 11 16
Explanation: The value decreases until it is greater than 0. After that it increases and stops when it becomes 16 again.
```

**Example 2:**

```
Input: n = 10
Output: 10 5 0 5 10
Explanation: It follows the same logic as per the above example.
```



Expected Time Complexity: $O(n)$

Expected Auxiliary Space: $O(n)$ for dynamic programming 

## Constraints

* `-10^5 ≤ n ≤ 10^5`

## Problem Explanation
Print a sequence of numbers starting with nn, without using a loop. Replace `nn` with `n−5n - 5n−5` until `n≤0n` `\leq 0n≤0`. Then, replace n with `n+5n + 5n+5` until nn regains its initial value. Complete the function pattern(n) which takes n as input and returns a list containing the pattern.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```py
 def pattern(n, initial=None, result=None):
    if result is None:
        result = []
    if initial is None:
        initial = n
    if n > 0:
        result.append(n)
        return pattern(n - 5, initial, result)
    elif n < initial:
        result.append(n)
        return pattern(n + 5, initial, result)
    return result

  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```cpp
 vector<int> pattern(int n) {
    vector<int> result;
    while (n > 0) {
        result.push_back(n);
        n -= 5;
    }
    while (n < result[0]) {
        result.push_back(n);
        n += 5;
    }
    return result;
}

  
  ```

  </TabItem>


  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```java
public List<Integer> pattern(int n) {
    List<Integer> result = new ArrayList<>();
    while (n > 0) {
        result.add(n);
        n -= 5;
    }
    while (n < result.get(0)) {
        result.add(n);
        n += 5;
    }
    return result;
}

  ```

  </TabItem>
</Tabs>


## Time Complexity

* The iterative approach has a time complexity of $O(n)$ because we are iterating through the sequence of numbers twice: once from n to 0, and once from 0 to n.

## Space Complexity

* The space complexity is O(n) because we are storing the sequence of numbers in the result list.
