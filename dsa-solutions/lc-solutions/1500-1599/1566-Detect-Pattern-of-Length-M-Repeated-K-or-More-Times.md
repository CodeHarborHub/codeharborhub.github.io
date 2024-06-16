---
id: detect-pattern
title: Detect Pattern Solution
sidebar_label: 1566-Detect Pattern of Length M Repeated K or More Times
tags:
  - Detect Pattern
  - String
  - LeetCode
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the Detect Pattern problem on LeetCode."
---

In this page, we will solve the Detect Pattern problem using multiple approaches. We will provide the implementation of the solution in Python, JavaScript, TypeScript, Java, and C++.

## Problem Description

Given an array of positive integers `arr`,  find a pattern of length `m` that is repeated `k` or more times.

A pattern is a subarray (consecutive elements) that occurs `k` or more times within the array `arr`.

The pattern can be of any length and must not overlap.

### Examples

**Example 1:**

```plaintext
Input: arr = [1,2,4,4,4,4], m = 1, k = 3
Output: true
Explanation: The repeated pattern is [4].

```

**Example 2:**

```plaintext
Input: arr = [1,2,1,2,1,1,1,3], m = 2, k = 2
Output: true
Explanation: The repeated pattern is [1,2].
```

**Example 3:**

```plaintext
Input: arr = [1,2,1,2,1,3], m = 2, k = 3
Output: false
Explanation: There is no such pattern.
```

**Example 4:**

```plaintext
Input: arr = [1,2,3,1,2], m = 2, k = 2
Output: false
Explanation: There is no such pattern.
```

### Constraints

- $2 <= arr.length <= 100$
- $1 <= arr[i] <= 100$
- $1 <= m <= 100$
- $2 <= k <= 100$

---

## Solution for Detect Pattern Problem

### Intuition and Approach

We can solve this problem using a sliding window approach. We iterate through the array and check if there is a pattern of length `m` that repeats `k` or more times.

<Tabs>
 <tabItem value="Sliding Window" label="Sliding Window">

### Approach: Sliding Window

In this approach, we use a sliding window of length `m` to check for repeated patterns.

#### Implementation
```jsx live
function detectPattern() {
  const arr = [1, 2, 4, 4, 4, 4];
  const m = 1;
  const k = 3;

  const containsPattern = function(arr, m, k) {
    const n = arr.length;
    for (let i = 0; i <= n - m * k; i++) {
      let pattern = arr.slice(i, i + m);
      let count = 1;
      for (let j = i + m; j < n; j += m) {
        if (arr.slice(j, j + m).toString() === pattern.toString()) {
          count++;
          if (count >= k) return true;
        } else {
          break;
        }
      }
    }
    return false;
  };

  const result = containsPattern(arr, m, k);
  return (
    <div>
      <p>
        <b>Input:</b> arr = {JSON.stringify(arr)}, m = {m}, k = {k}
      </p>
      <p>
        <b>Output:</b> {result ? "true" : "false"}
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
    function containsPattern(arr, m, k) {
      const n = arr.length;
      for (let i = 0; i <= n - m * k; i++) {
        let pattern = arr.slice(i, i + m);
        let count = 1;
        for (let j = i + m; j < n; j += m) {
          if (arr.slice(j, j + m).toString() === pattern.toString()) {
            count++;
            if (count >= k) return true;
          } else {
            break;
          }
        }
      }
      return false;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/> 
   ```typescript
    function containsPattern(arr: number[], m: number, k: number): boolean {
      const n = arr.length;
      for (let i = 0; i <= n - m * k; i++) {
        let pattern = arr.slice(i, i + m);
        let count = 1;
        for (let j = i + m; j < n; j += m) {
          if (arr.slice(j, j + m).toString() === pattern.toString()) {
            count++;
            if (count >= k) return true;
          } else {
            break;
          }
        }
      }
      return false;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def containsPattern(self, arr: List[int], m: int, k: int) -> bool:
            n = len(arr)
            for i in range(n - m * k + 1):
                pattern = arr[i:i + m]
                count = 1
                for j in range(i + m, n, m):
                    if arr[j:j + m] == pattern:
                        count += 1
                        if count >= k:
                            return True
                    else:
                        break
            return False
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public boolean containsPattern(int[] arr, int m, int k) {
            int n = arr.length;
            for (int i = 0; i <= n - m * k; i++) {
                int[] pattern = Arrays.copyOfRange(arr, i, i + m);
                int count = 1;
                for (int j = i + m; j < n; j += m) {
                    int[] subArray = Arrays.copyOfRange(arr, j, j + m);
                    if (Arrays.equals(pattern, subArray)) {
                        count++;
                        if (count >= k) return true;
                    } else {
                        break;
                    }
                }
            }
            return false;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        bool containsPattern(vector<int>& arr, int m, int k) {
            int n = arr.size();
            for (int i

 = 0; i <= n - m * k; i++) {
                vector<int> pattern(arr.begin() + i, arr.begin() + i + m);
                int count = 1;
                for (int j = i + m; j < n; j += m) {
                    vector<int> subArray(arr.begin() + j, arr.begin() + j + m);
                    if (pattern == subArray) {
                        count++;
                        if (count >= k) return true;
                    } else {
                        break;
                    }
                }
            }
            return false;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n \cdot m)$$
- Space Complexity: $$O(1)$$
- Where `n` is the length of the array `arr` and `m` is the length of the pattern.
- We iterate through the array once and compare patterns of length `m`.
- The space complexity is constant as we use only a few variables irrespective of the size of the input.

</tabItem>
<tabItem value="Hash Map" label="Hash Map">

### Approach: Hash Map

In this approach, we use a hash map to store the occurrence of patterns.

#### Implementation

```jsx live
function detectPattern() {
  const arr = [1, 2, 4, 4, 4, 4];
  const m = 1;
  const k = 3;

  const containsPattern = function(arr, m, k) {
    const patternMap = new Map();
    for (let i = 0; i <= arr.length - m * k; i++) {
      let pattern = arr.slice(i, i + m).toString();
      if (!patternMap.has(pattern)) {
        patternMap.set(pattern, 1);
      } else {
        patternMap.set(pattern, patternMap.get(pattern) + 1);
      }
      if (patternMap.get(pattern) >= k) return true;
    }
    return false;
  };

  const result = containsPattern(arr, m, k);
  return (
    <div>
      <p>
        <b>Input:</b> arr = {JSON.stringify(arr)}, m = {m}, k = {k}
      </p>
      <p>
        <b>Output:</b> {result ? "true" : "false"}
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
    function containsPattern(arr, m, k) {
      const patternMap = new Map();
      for (let i = 0; i <= arr.length - m * k; i++) {
        let pattern = arr.slice(i, i + m).toString();
        if (!patternMap.has(pattern)) {
          patternMap.set(pattern, 1);
        } else {
          patternMap.set(pattern, patternMap.get(pattern) + 1);
        }
        if (patternMap.get(pattern) >= k) return true;
      }
      return false;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/> 
   ```typescript
    function containsPattern(arr: number[], m: number, k: number): boolean {
      const patternMap = new Map();
      for (let i = 0; i <= arr.length - m * k; i++) {
        let pattern = arr.slice(i, i + m).toString();
        if (!patternMap.has(pattern)) {
          patternMap.set(pattern, 1);
        } else {
          patternMap.set(pattern, patternMap.get(pattern) + 1);
        }
        if (patternMap.get(pattern) >= k) return true;
      }
      return false;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def containsPattern(self, arr: List[int], m: int, k: int) -> bool:
            pattern_map = {}
            for i in range(len(arr) - m * k + 1):
                pattern = tuple(arr[i:i + m])
                pattern_map[pattern] = pattern_map.get(pattern, 0) + 1
                if pattern_map[pattern] >= k:
                    return True
            return False
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public boolean containsPattern(int[] arr, int m, int k) {
            Map<String, Integer> patternMap = new HashMap<>();
            for (int i = 0; i <= arr.length - m * k; i++) {
                String pattern = Arrays.toString(Arrays.copyOfRange(arr, i, i + m));
                patternMap.put(pattern, patternMap.getOrDefault(pattern, 0) + 1);
                if (patternMap.get(pattern) >= k) return true;
            }
            return false;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        bool containsPattern(vector<int>& arr, int m, int k) {
            unordered_map<string, int> patternMap;
            for (int i = 0; i <= arr.size() - m * k; i++) {
                string pattern = "";
                for (int j = i; j < i + m; j++) {
                    pattern += to_string(arr[j]) + ",";
                }
                patternMap[pattern]++;
                if (patternMap[pattern] >= k) return true;
            }
            return false;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n \cdot m)$$
- Space Complexity: $$O(n \cdot m)$$
- Where `n` is the length of the array `arr` and `m` is the length of the pattern.
- We iterate through the array once and store patterns in the hash map.
- The space complexity is proportional to the number of distinct patterns.

</tabItem>
</Tabs>

:::tip Note

By using these approaches, we can efficiently solve the Detect Pattern problem for the given constraints.

:::
## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/)
- **Solution Link:** [Detect Pattern Solution on LeetCode](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/discuss/812851/JavaPythonC%2B%2B-Simple-Solution)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)

