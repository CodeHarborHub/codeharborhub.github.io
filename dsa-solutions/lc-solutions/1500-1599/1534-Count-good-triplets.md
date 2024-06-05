---
id: count-good-triplets
title: Count Good Triplets Solution
sidebar_label: 1534-Count-Good-Triplets
tags:
  - Count Good Triplets
  - Array
  - Brute Force
  - Optimization
  - LeetCode
  - Python
  - JavaScript
description: "This is a solution to the Count Good Triplets problem on LeetCode."
---

In this page, we will solve the Count Good Triplets problem using multiple approaches: brute-force and optimization. We will provide the implementation of the solution in Python, JavaScript, TypeScript, Java, and C++.

## Problem Description

Given an array of integers `arr`, and three integers `a`, `b`, and `c`. You need to find the number of good triplets.

A triplet $(arr[i], arr[j], arr[k])$ is good if the following conditions are true:

- $0 <= i < j < k < arr.length$
- $|arr[i] - arr[j]| <= a$
- $|arr[j] - arr[k]| <= b$
- $|arr[i] - arr[k]| <= c$

Where $|x|$ denotes the absolute value of `x`.

Return the number of good triplets.

### Examples

**Example 1:**

```plaintext
Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
Output: 4
Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
```

**Example 2:**

```plaintext
Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
Output: 0
Explanation: No triplet satisfies all conditions.
```

### Constraints

- $3 <= arr.length <= 100$
- $0 <= arr[i] <= 1000$
- $0 <= a, b, c <= 1000$

---

## Solution for Count Good Triplets Problem

### Intuition and Approach

The problem can be solved using different approaches. We will start with a brute-force approach and then look at an optimized approach using early exits to reduce unnecessary comparisons.

<Tabs>
 <tabItem value="Brute Force" label="Brute Force">

### Approach 1: Brute Force

We iterate through all possible triplets `(i, j, k)` where `0 <= i < j < k < arr.length` and check if they satisfy the conditions `|arr[i] - arr[j]| <= a`, `|arr[j] - arr[k]| <= b`, and `|arr[i] - arr[k]| <= c`. If they do, we count it as a good triplet.

#### Implementation
```jsx live
function countGoodTriplets() {
  const arr = [3, 0, 1, 1, 9, 7];
  const a = 7;
  const b = 2;
  const c = 3;

  const countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        if (Math.abs(arr[i] - arr[j]) > a) continue;
        for (let k = j + 1; k < arr.length; k++) {
          if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
            count++;
          }
        }
      }
    }
    return count;
  };

  const result = countGoodTriplets(arr, a, b, c);
  return (
    <div>
      <p>
        <b>Input:</b> arr = {JSON.stringify(arr)}, a = {a}, b = {b}, c = {c}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function countGoodTriplets(arr, a, b, c) {
      let count = 0;
      for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
          for (let k = j + 1; k < arr.length; k++) {
            if (Math.abs(arr[i] - arr[j]) <= a &&
                Math.abs(arr[j] - arr[k]) <= b &&
                Math.abs(arr[i] - arr[k]) <= c) {
              count++;
            }
          }
        }
      }
      return count;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/> 
   ```typescript
    function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
      let count = 0;
      for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
          for (let k = j + 1; k < arr.length; k++) {
            if (Math.abs(arr[i] - arr[j]) <= a &&
                Math.abs(arr[j] - arr[k]) <= b &&
                Math.abs(arr[i] - arr[k]) <= c) {
              count++;
            }
          }
        }
      }
      return count;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def countGoodTriplets(self, arr: List[int], a: int, b: int, c: int) -> int:
            count = 0
            for i in range(len(arr) - 2):
                for j in range(i + 1, len(arr) - 1):
                    for k in range(j + 1, len(arr)):
                        if abs(arr[i] - arr[j]) <= a and abs(arr[j] - arr[k]) <= b and abs(arr[i] - arr[k]) <= c:
                            count += 1
            return count
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int countGoodTriplets(int[] arr, int a, int b, int c) {
            int count = 0;
            for (int i = 0; i < arr.length - 2; i++) {
                for (int j = i + 1; j < arr.length - 1; j++) {
                    for (int k = j + 1; k < arr.length; k++) {
                        if (Math.abs(arr[i] - arr[j]) <= a &&
                            Math.abs(arr[j] - arr[k]) <= b &&
                            Math.abs(arr[i] - arr[k]) <= c) {
                            count++;
                        }
                    }
                }
            }
            return count;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        int countGoodTriplets(vector<int>& arr, int a, int b, int c) {
            int count = 0;
            for (int i = 0; i < arr.size() - 2; i++) {
                for (int j = i + 1; j < arr.size() - 1; j++) {
                    for (int k = j + 1; k < arr.size(); k++) {
                        if (abs(arr[i] - arr[j]) <= a &&
                            abs(arr[j] - arr[k]) <= b &&
                            abs(arr[i] - arr[k]) <= c) {
                            count++;
                        }
                    }
                }
            }
            return count;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n^3)$$
- Space Complexity: $$O(1)$$
- Where `n` is the length of the array `arr`.
- The time complexity is determined by the three nested loops iterating through the array.
- The space complexity is constant as no additional space is required beyond a few variables.

</tabItem>
<tabItem value="Optimized Brute Force" label="Optimized Brute Force">

### Approach 2: Optimized Brute Force

To optimize the brute force solution, we can use early exits to avoid unnecessary comparisons. Specifically, if a pair does not satisfy one of the conditions, we can skip further comparisons for that triplet.

#### Implementation

```jsx live
function countGoodTriplets() {
  const arr = [3, 0, 1, 1, 9, 7];
  const a = 7;
  const b = 2;
  const c = 3;
  const countGoodTripletsOptimized = function(arr, a, b, c) {
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        if (Math.abs(arr[i] - arr[j]) > a) continue;
        for (let k = j + 1; k < arr.length; k++) {
          if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
            count++;
          }
        }
      }
    }
    return count;
  };

  const resultOptimized = countGoodTripletsOptimized(arr, a, b, c);

  return (
    <div>
      <p>
        <b>Input:</b> arr = {JSON.stringify(arr)}, a = {a}, b = {b}, c = {c}
      </p>
      <p>
        <b>Output:</b> {resultOptimized}
      </p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function countGoodTriplets(arr, a, b, c) {
      let count = 0;
      for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
          if (Math.abs(arr[i] - arr[j]) > a) continue;
          for (let k = j + 1; k < arr.length; k++) {
            if (Math.abs(arr[j] - arr[k]) <= b &&
                Math.abs(arr[i] - arr[k]) <= c) {
              count++;
            }
          }
        }
      }
      return count;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/> 
   ```typescript
    function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
      let count = 0;
      for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
          if (Math.abs(arr[i] - arr[j]) > a) continue;
          for (let k = j + 1; k < arr.length; k++) {
            if (Math.abs(arr[j] - arr[k]) <= b &&
                Math.abs(arr[i] - arr[k]) <= c) {
              count++;
            }
          }
        }
      }
      return count;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def countGoodTriplets(self, arr: List[int], a: int, b: int, c: int) -> int:
            count = 0
            for i in range(len(arr) - 2):
                for j in range(i + 1, len(arr) - 1):
                    if abs(arr[i] - arr[j]) > a:
                        continue
                    for k in range(j + 1, len(arr)):
                        if abs(arr[j] - arr[k]) <= b and abs(arr[i] - arr[k]) <= c:
                            count += 1
            return count
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int countGoodTriplets(int[] arr, int a, int b, int c) {
            int count = 0;
            for (int i = 0; i < arr.length - 2; i++) {
                for (int j = i + 1; j < arr.length - 1; j++) {
                    if (Math.abs(arr[i] - arr[j]) > a) continue;
                    for (int k = j + 1; k < arr.length; k++) {
                        if (Math.abs(arr[j] - arr[k]) <= b &&
                            Math.abs(arr[i] - arr[k]) <= c) {
                            count++;
                        }
                    }
                }
            }
            return count;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        int countGoodTriplets(vector<int>& arr, int a, int b, int c) {
            int count = 0;
            for (int i = 0; i < arr.size() - 2; i++) {
                for (int j = i + 1; j < arr.size() - 1; j++) {
                    if (abs(arr[i] - arr[j]) > a) continue;
                    for (int k = j + 1; k < arr.size(); k++) {
                        if (abs(arr[j] - arr[k]) <= b &&
                            abs(arr[i] - arr[k]) <= c) {
                            count++;
                        }
                    }
                }
            }
            return count;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n^3)$$
- Space Complexity: $$O(1)$$
- Where `n` is the length of the array `arr`.
- The time complexity remains cubic but the constant factor is reduced due to early exits.

</tabItem>
</Tabs>

:::tip Note

By using these approaches, we can efficiently solve the Count Good Triplets problem for the given constraints.

:::
## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/count-good-triplets/)
- **Solution Link:** [Count Good Triplets Solution on LeetCode](https://leetcode.com/problems/count-good-triplets/discuss/762344/Brute-Force-O(n3)-with-JavaC%2B%2B)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)



