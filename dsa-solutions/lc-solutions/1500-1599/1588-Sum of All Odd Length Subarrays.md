---
id: sum-of-all-odd-length-subarrays
title: Sum of All Odd Length Subarrays Solution
sidebar_label: 1588-Sum-of-All-Odd-Length-Subarrays
tags:
  - Array
  - Prefix Sum
  - LeetCode
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the Sum of All Odd Length Subarrays problem on LeetCode."
---

In this page, we will solve the Sum of All Odd Length Subarrays problem using multiple approaches: brute-force and prefix sum optimization. We will provide the implementation of the solution in Python, JavaScript, TypeScript, Java, and C++.

## Problem Description

Given an array of positive integers `arr`, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of `arr`.

### Examples

**Example 1:**

```plaintext
Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of `arr` and their sums are:
- [1] => 1
- [4] => 4
- [2] => 2
- [5] => 5
- [3] => 3
- [1,4,2] => 7
- [4,2,5] => 11
- [2,5,3] => 10
- [1,4,2,5,3] => 15
If we sum everything, we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58.
```

**Example 2:**

```plaintext
Input: arr = [1,2]
Output: 3
Explanation: There are only 2 elements. So, only subarrays of length 1 and 2 will be considered. The sum of them is 1 + 2 = 3.
```

**Example 3:**

```plaintext
Input: arr = [10,11,12]
Output: 66
```

### Constraints

- $1 <= arr.length <= 100$
- $1 <= arr[i] <= 1000$

---

## Solution for Sum of All Odd Length Subarrays

### Intuition and Approach

The problem can be solved using different approaches. We will start with a brute-force approach and then look at an optimized approach using prefix sums.

<Tabs>
 <tabItem value="Brute Force" label="Brute Force">

### Approach 1: Brute Force

We iterate through all possible subarrays of odd lengths and calculate their sums.

#### Implementation
```jsx live
function sumOfOddLengthSubarrays() {
  const arr = [1, 4, 2, 5, 3];

  const sumOddLengthSubarrays = function(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j += 2) {
        for (let k = i; k <= j; k++) {
          result += arr[k];
        }
      }
    }
    return result;
  };

  const result = sumOddLengthSubarrays(arr);
  return (
    <div>
      <p>
        <b>Input:</b> arr = {JSON.stringify(arr)}
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
    function sumOddLengthSubarrays(arr) {
      let result = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j += 2) {
          for (let k = i; k <= j; k++) {
            result += arr[k];
          }
        }
      }
      return result;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function sumOddLengthSubarrays(arr: number[]): number {
      let result = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j += 2) {
          for (let k = i; k <= j; k++) {
            result += arr[k];
          }
        }
      }
      return result;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def sumOddLengthSubarrays(self, arr: List[int]) -> int:
            result = 0
            for i in range(len(arr)):
                for j in range(i, len(arr), 2):
                    result += sum(arr[i:j+1])
            return result
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int sumOddLengthSubarrays(int[] arr) {
            int result = 0;
            for (int i = 0; i < arr.length; i++) {
                for (int j = i; j < arr.length; j += 2) {
                    for (int k = i; k <= j; k++) {
                        result += arr[k];
                    }
                }
            }
            return result;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        int sumOddLengthSubarrays(vector<int>& arr) {
            int result = 0;
            for (int i = 0; i < arr.size(); i++) {
                for (int j = i; j < arr.size(); j += 2) {
                    for (int k = i; k <= j; k++) {
                        result += arr[k];
                    }
                }
            }
            return result;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n^3)$$
- Space Complexity: $$O(1)$$
- Where `n` is the length of the array `arr`.
- The time complexity is cubic due to three nested loops iterating through the array.
- The space complexity is constant as no additional space is required beyond a few variables.

</tabItem>
<tabItem value="Prefix Sum" label="Prefix Sum">

### Approach 2: Prefix Sum

We can optimize the brute-force solution by precomputing prefix sums. This allows us to calculate the sum of any subarray in constant time.

#### Implementation

```jsx live
function sumOfOddLengthSubarrays() {
  const arr = [1, 4, 2, 5, 3];

  const sumOddLengthSubarrays = function(arr) {
    const prefixSum = [0];
    for (let num of arr) {
      prefixSum.push(prefixSum[prefixSum.length - 1] + num);
    }

    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j += 2) {
        result += prefixSum[j + 1] - prefixSum[i];
      }
    }

    return result;
  };

  const result = sumOddLengthSubarrays(arr);
  return (
    <div>
      <p>
        <b>Input:</b> arr = {JSON.stringify(arr)}
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
    function sumOddLengthSubarrays(arr) {
      const prefixSum = [0];
      for (let num of arr) {
        prefixSum.push(prefixSum[prefixSum.length - 1] + num);
      }

      let result = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j += 2) {
          result += prefixSum[j + 1] - prefixSum[i];
        }
      }

      return result;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function sumOddLengthSubarrays(arr: number[]): number {
      const prefixSum = [0];
      for (let num of arr) {
        prefixSum.push(prefixSum[prefixSum.length - 1] + num);
      }

      let result = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j += 2) {
          result += prefixSum[j + 1] - prefixSum[i];
        }
      }

      return result;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def sumOddLengthSubarrays(self, arr: List[int]) -> int:
            prefix_sum = [0]
            for num in arr:
                prefix_sum.append(prefix_sum[-1] + num)

            result = 0
            for i in range(len(arr)):
                for j in range(i, len(arr), 2):
                    result += prefix_sum[j + 1] - prefix_sum[i]

            return result
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int sumOddLengthSubarrays(int[] arr) {
            int[] prefixSum = new int[arr.length + 1];
            for (int i = 0; i < arr.length; i++) {
                prefixSum[i + 1] = prefixSum[i] + arr[i];
            }

            int result = 0;
            for (int i = 0; i < arr.length; i++) {
                for (int j = i; j < arr.length; j += 2) {
                    result += prefixSum[j + 1] - prefixSum[i];
                }
            }

            return result;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        int sumOddLengthSubarrays(vector<int>& arr) {
            vector<int> prefixSum(arr.size() + 1, 0);
            for (int i = 0; i < arr.size(); i++) {
                prefixSum[i + 1] = prefixSum[i] + arr[i];
            }

            int result = 0;
            for (int i = 0; i < arr.size(); i++) {
                for (int j = i; j < arr.size(); j += 2) {
                    result += prefixSum[j + 1] - prefixSum[i];
                }
            }

            return result;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n^2)$$
- Space Complexity: $$O(n)$$
- Where `n` is the length of the array `arr`.
- The time complexity is quadratic due to two nested loops iterating through the array.
- The space complexity is linear as we use extra space to store prefix sums.

</tabItem>
</Tabs>

:::tip Note

By using these approaches, we can efficiently solve the Sum of All Odd Length Subarrays problem for the given constraints.

:::
## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/)
- **Solution Link:** [Sum of All Odd Length Subarrays Solution on LeetCode](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/discuss/851730/Brute-Force-and-Prefix-Sum-Solutions-in-Python-Java-JavaScript-C%2B%2B)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)

