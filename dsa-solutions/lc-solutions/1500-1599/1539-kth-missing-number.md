---

id: kth-missing-positive-number
title: Kth Missing Positive Number Solution
sidebar_label: 1539-Kth-Missing-Positive-Number
tags:
  - Array
  - Binary Search
  - LeetCode
  - JavaScript
  - TypeScript
  - Python
  - Java
  - C++
description: "This is a solution to the Kth Missing Positive Number problem on LeetCode."
---

In this page, we will solve the Kth Missing Positive Number problem using different approaches: linear search and binary search. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

Given an array `arr` of positive integers sorted in a strictly increasing order, and an integer `k`.

Return the `k`th positive integer that is missing from this array.

### Examples

**Example 1:**

```plaintext
Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
```

**Example 2:**

```plaintext
Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
```

### Constraints

- `1 <= arr.length <= 1000`
- `1 <= arr[i] <= 1000`
- `1 <= k <= 1000`
- `arr[i] < arr[j]` for `1 <= i < j <= arr.length`

---

## Solution for Kth Missing Positive Number Problem

### Intuition and Approach

The problem can be solved using linear search or binary search. Linear search is straightforward, while binary search is more efficient.

<Tabs>
 <tabItem value="Linear Search" label="Linear Search">

### Approach 1: Linear Search

We iterate through the positive integers, checking if they are present in the array. If a number is missing, we decrement `k`. When `k` reaches 0, we have found the `k`th missing positive integer.

#### Implementation

```jsx live
function kthMissingPositiveNumber() {
  const arr = [2, 3, 4, 7, 11];
  const k = 5;

  const findKthPositive = function(arr, k) {
    let missingCount = 0;
    let current = 1;

    while (missingCount < k) {
      if (!arr.includes(current)) {
        missingCount++;
      }
      if (missingCount < k) {
        current++;
      }
    }

    return current;
  };

  const result = findKthPositive(arr, k);
  return (
    <div>
      <p>
        <b>Input:</b> arr = {JSON.stringify(arr)}, k = {k}
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
    function findKthPositive(arr, k) {
      let missingCount = 0;
      let current = 1;

      while (missingCount < k) {
        if (!arr.includes(current)) {
          missingCount++;
        }
        if (missingCount < k) {
          current++;
        }
      }

      return current;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function findKthPositive(arr: number[], k: number): number {
      let missingCount = 0;
      let current = 1;

      while (missingCount < k) {
        if (!arr.includes(current)) {
          missingCount++;
        }
        if (missingCount < k) {
          current++;
        }
      }

      return current;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def findKthPositive(self, arr: List[int], k: int) -> int:
            missing_count = 0
            current = 1

            while missing_count < k:
                if current not in arr:
                    missing_count += 1
                if missing_count < k:
                    current += 1

            return current
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int findKthPositive(int[] arr, int k) {
            int missingCount = 0;
            int current = 1;

            while (missingCount < k) {
                boolean found = false;
                for (int num : arr) {
                    if (num == current) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    missingCount++;
                }
                if (missingCount < k) {
                    current++;
                }
            }

            return current;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        int findKthPositive(vector<int>& arr, int k) {
            int missingCount = 0;
            int current = 1;

            while (missingCount < k) {
                if (find(arr.begin(), arr.end(), current) == arr.end()) {
                    missingCount++;
                }
                if (missingCount < k) {
                    current++;
                }
            }

            return current;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n \times m)$$, where `n` is the length of the array and `m` is the `k`th missing positive number.
- Space Complexity: $$O(1)$$, as no additional space is used.
- The time complexity is high due to the nested loops in `arr.includes()`.

</tabItem>
<tabItem value="Binary Search" label="Binary Search">

### Approach 2: Binary Search

We can optimize the solution using binary search by calculating the number of missing elements at each index and adjusting our search range accordingly.

#### Implementation

```jsx live
function kthMissingPositiveNumber() {
  const arr = [2, 3, 4, 7, 11];
  const k = 5;

  const findKthPositive = function(arr, k) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      const missing = arr[mid] - mid - 1;

      if (missing < k) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left + k;
  };

  const result = findKthPositive(arr, k);
  return (
    <div>
      <p>
        <b>Input:</b> arr = {JSON.stringify(arr)}, k = {k}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function findKthPositive(arr, k) {
      let left = 0;
      let right = arr.length;

      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const missing = arr[mid] - mid - 1;

        if (missing < k) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }

      return left + k;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function findKthPositive(arr: number[], k: number): number {
      let left = 0;
      let right = arr.length;

      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const missing = arr[mid] - mid - 1;

        if (missing < k) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }

      return left + k;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def findKthPositive(self, arr: List[int], k: int) -> int:
            left, right = 0, len(arr)

            while left < right:
                mid = (left + right) // 2
                missing = arr[mid] - mid - 1

                if missing < k:
                    left = mid + 1
                else:
                    right = mid

            return left + k
    ```

  </TabItem>
 

 <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int findKthPositive(int[] arr, int k) {
            int left = 0, right = arr.length;

            while (left < right) {
                int mid = (left + right) / 2;
                int missing = arr[mid] - mid - 1;

                if (missing < k) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }

            return left + k;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        int findKthPositive(vector<int>& arr, int k) {
            int left = 0, right = arr.size();

            while (left < right) {
                int mid = (left + right) / 2;
                int missing = arr[mid] - mid - 1;

                if (missing < k) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }

            return left + k;
        }
    };
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(\log n)$$, where `n` is the length of the array.
- Space Complexity: $$O(1)$$, as no additional space is used.
- The binary search significantly reduces the time complexity compared to the linear search approach.

</tabItem>
</Tabs>

:::tip Note

By using both linear search and binary search approaches, we can efficiently solve the Kth Missing Positive Number problem. The binary search approach is more efficient, especially for larger inputs.

:::
## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/kth-missing-positive-number/)
- **Solution Link:** [Kth Missing Positive Number Solution on LeetCode](https://leetcode.com/problems/kth-missing-positive-number/solutions/5016750/easy-binary-search-solution-in-c-100-beats-full-expanation-with-example/)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)

---
