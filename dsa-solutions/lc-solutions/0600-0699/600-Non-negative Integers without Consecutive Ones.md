---
id: non-negative-integers-without-consecutive-ones
title: Non-negative Integers without Consecutive Ones
sidebar_label: Non-negative Integers without Consecutive Ones
tags:
  - Dynamic Programming
  - Bit Manipulation
  - Algorithms
  - DSA
  - Python
  - C++
  - Java
  - JavaScript
description: "This page explains the problem of finding non-negative integers without consecutive ones."
---

# Non-negative Integers without Consecutive Ones

## 1. Problem Description

Given a non-negative integer $n$, find the number of non-negative integers less than or equal to $n$ that do not contain consecutive ones in their binary representation.

## 2. Examples

### Example 1:
**Input:** $n = 5$  
**Output:** $5$  
**Explanation:**  
There are five such numbers: 0, 1, 2, 4, 5.  
Their binary representations are: 0 (0), 1 (1), 2 (10), 4 (100), 5 (101).

### Example 2:
**Input:** $n = 10$  
**Output:** $8$
**Explanation:**  
There are eight such numbers: 0, 1, 2, 4, 5, 8, 9, 10.  
Their binary representations are: 0 (0), 1 (1), 2 (10), 4 (100), 5 (101), 8 (1000), 9 (1001), 10 (1010).

## 3. Constraints

- $0 <= n <= 10^9$

## 4. Algorithm

### Approach:
The problem can be approached using dynamic programming. We need to count the numbers up to $n$ that do not have consecutive ones in their binary representation. This can be solved by considering the binary digits of $n$.

1. **Initialize Variables:**
   - $dp0[i]$: Number of valid integers of length $i$ ending with $0$.
   - $dp1[i]$: Number of valid integers of length $i$ ending with $1$.

2. **Base Case:**
   - $dp0[1] = 1$: Only one number of length 1 ending with $0$ (i.e., $0$).
   - $dp1[1] = 1$: Only one number of length 1 ending with $1$ (i.e., $1$).

3. **DP Transition:**
   - For each bit position from 2 to the length of $n$ in binary:
     - $dp0[i] = dp0[i-1] + dp1[i-1]$ : If the current bit is $0$, the previous bit can be either $0$ or $1$.
     - $dp1[i] = dp0[i-1]$ : If the current bit is $1$, the previous bit must be $0$.

4. **Calculate Result:**
   - Sum up all the valid numbers up to the highest bit of $n$.

### Example Calculation:

For $n = 5$ (binary $101$):
1. Calculate the number of valid integers for each bit length.
2. Use the DP arrays to count valid integers.

## 5. Implementation (Code for 4 Languages)

<Tabs>
  <TabItem value="Python" label="Python" default>
  ```python
  def findIntegers(n):
      bin_n = bin(n)[2:]
      length = len(bin_n)
      dp0 = [0] * (length + 1)
      dp1 = [0] * (length + 1)
      dp0[1] = dp1[1] = 1
      for i in range(2, length + 1):
          dp0[i] = dp0[i - 1] + dp1[i - 1]
          dp1[i] = dp0[i - 1]
      result = dp0[length] + dp1[length]
      for i in range(1, length):
          if bin_n[i] == '1' and bin_n[i - 1] == '1':
              break
          if bin_n[i] == '0' and bin_n[i - 1] == '0':
              result -= dp1[length - i]
      return result

  # Example usage:
  print(findIntegers(5))  # Output: 5
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  ```cpp
  #include <iostream>
  #include <vector>
  using namespace std;

  int findIntegers(int n) {
      vector<int> bin;
      while (n) {
          bin.push_back(n % 2);
          n /= 2;
      }
      int length = bin.size();
      vector<int> dp0(length + 1, 0), dp1(length + 1, 0);
      dp0[1] = dp1[1] = 1;
      for (int i = 2; i <= length; ++i) {
          dp0[i] = dp0[i - 1] + dp1[i - 1];
          dp1[i] = dp0[i - 1];
      }
      int result = dp0[length] + dp1[length];
      for (int i = length - 2; i >= 0; --i) {
          if (bin[i] == 1 && bin[i + 1] == 1) break;
          if (bin[i] == 0 && bin[i + 1] == 0) result -= dp1[i + 1];
      }
      return result;
  }

  // Example usage:
  int main() {
      cout << findIntegers(5) << endl;  // Output: 5
      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">
  ```java
  public class NonNegativeIntegers {
      public int findIntegers(int n) {
          String binN = Integer.toBinaryString(n);
          int length = binN.length();
          int[] dp0 = new int[length + 1];
          int[] dp1 = new int[length + 1];
          dp0[1] = dp1[1] = 1;
          for (int i = 2; i <= length; i++) {
              dp0[i] = dp0[i - 1] + dp1[i - 1];
              dp1[i] = dp0[i - 1];
          }
          int result = dp0[length] + dp1[length];
          for (int i = 1; i < length; i++) {
              if (binN.charAt(i) == '1' && binN.charAt(i - 1) == '1') break;
              if (binN.charAt(i) == '0' && binN.charAt(i - 1) == '0') result -= dp1[length - i];
          }
          return result;
      }

      public static void main(String[] args) {
          NonNegativeIntegers solution = new NonNegativeIntegers();
          System.out.println(solution.findIntegers(5));  // Output: 5
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  ```javascript
  function findIntegers(n) {
      const binN = n.toString(2);
      const length = binN.length;
      const dp0 = new Array(length + 1).fill(0);
      const dp1 = new Array(length + 1).fill(0);
      dp0[1] = dp1[1] = 1;
      for (let i = 2; i <= length; i++) {
          dp0[i] = dp0[i - 1] + dp1[i - 1];
          dp1[i] = dp0[i - 1];
      }
      let result = dp0[length] + dp1[length];
      for (let i = 1; i < length; i++) {
          if (binN[i] === '1' && binN[i - 1] === '1') break;
          if (binN[i] === '0' && binN[i - 1] === '0') result -= dp1[length - i];
      }
      return result;
  }

  // Example usage:
  console.log(findIntegers(5));  // Output: 5
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity:** $O(log n)$, where $n$ is the input number. This is because we are working with the binary representation of $n$, which has a length of $O(log n)$.
- **Space Complexity:** $O(log n)$, due to the storage of the $dp0$ and $dp1$ arrays and the binary representation of $n$.

## 9. Advantages and Disadvantages

### Advantages:
- Efficiently solves the problem using dynamic programming.
- Works well for large values of $n$ up to $(10^9)$.

### Disadvantages:
- Requires understanding of bit manipulation and dynamic programming concepts.

## 10. References

- [GeeksforGeeks - Non-negative Integers without Consecutive Ones](https://www.geeksforgeeks.org/non-negative-integers-without-consecutive-ones/)
- [LeetCode - Non-negative Integers without Consecutive Ones](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/)


- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)

This Markdown file includes a detailed explanation of the problem, an algorithmic approach, code implementations in four programming languages, complexity analysis, advantages and disadvantages, and references.