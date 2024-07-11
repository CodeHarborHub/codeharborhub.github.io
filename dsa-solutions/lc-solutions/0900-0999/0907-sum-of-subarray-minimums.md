---
id: Sum-of-Subarray-Minimums
title: Sum of Subarray Minimums
sidebar_label: 0907 - Sum of Subarray Minimums
tags:
  - intermediate
  - Arrays
  - Stack
  - Algorithms
---

## Problem Description

Given an array of integers `arr`, find the sum of `min(b)`, where `b` ranges over every (contiguous) subarray of `arr`. Since the answer may be large, return the answer modulo \(10^9 + 7\).

### Examples

**Example 1:**

```
Input: arr = [3,1,2,4]
Output: 17
Explanation:
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.
```

**Example 2:**

```
Input: arr = [11,81,94,43,3]
Output: 444
```

## Constraints

```
1 <= arr.length <= 3 * 104
1 <= arr[i] <= 3 * 104
```

## Solution Approach

### Intuition:

We can solve this problem efficiently using a monotonic stack. The idea is to find the contribution of each element in the array as the minimum of various subarrays. By using a stack, we can determine the previous and next smaller elements for each element in the array.

### Implementation:

#### Code (C++):

```cpp
#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int sumSubarrayMins(vector<int>& arr) {
        const int MOD = 1e9 + 7;
        int n = arr.size();
        vector<int> left(n), right(n);
        stack<pair<int, int>> s1, s2;

        for (int i = 0; i < n; ++i) {
            int count = 1;
            while (!s1.empty() && s1.top().first > arr[i]) {
                count += s1.top().second;
                s1.pop();
            }
            s1.push({arr[i], count});
            left[i] = count;
        }

        for (int i = n - 1; i >= 0; --i) {
            int count = 1;
            while (!s2.empty() && s2.top().first >= arr[i]) {
                count += s2.top().second;
                s2.pop();
            }
            s2.push({arr[i], count});
            right[i] = count;
        }

        long long result = 0;
        for (int i = 0; i < n; ++i) {
            result = (result + (long long)arr[i] * left[i] * right[i]) % MOD;
        }
        return result;
    }
};
```

#### Code (Python):

```python
class Solution:
    def sumSubarrayMins(self, arr):
        MOD = 10**9 + 7
        n = len(arr)
        left, right = [0] * n, [0] * n
        s1, s2 = [], []

        for i in range(n):
            count = 1
            while s1 and s1[-1][0] > arr[i]:
                count += s1.pop()[1]
            s1.append((arr[i], count))
            left[i] = count

        for i in range(n-1, -1, -1):
            count = 1
            while s2 and s2[-1][0] >= arr[i]:
                count += s2.pop()[1]
            s2.append((arr[i], count))
            right[i] = count

        result = 0
        for i in range(n):
            result = (result + arr[i] * left[i] * right[i]) % MOD

        return result

# Example usage:
solution = Solution()
print(solution.sumSubarrayMins([3, 1, 2, 4]))  # Output: 17
```

#### Code (Java):

```java
import java.util.Stack;

class Solution {
    public int sumSubarrayMins(int[] arr) {
        final int MOD = 1000000007;
        int n = arr.length;
        int[] left = new int[n];
        int[] right = new int[n];
        Stack<int[]> s1 = new Stack<>(), s2 = new Stack<>();

        for (int i = 0; i < n; ++i) {
            int count = 1;
            while (!s1.isEmpty() && s1.peek()[0] > arr[i]) {
                count += s1.pop()[1];
            }
            s1.push(new int[]{arr[i], count});
            left[i] = count;
        }

        for (int i = n - 1; i >= 0; --i) {
            int count = 1;
            while (!s2.isEmpty() && s2.peek()[0] >= arr[i]) {
                count += s2.pop()[1];
            }
            s2.push(new int[]{arr[i], count});
            right[i] = count;
        }

        long result = 0;
        for (int i = 0; i < n; ++i) {
            result = (result + (long)arr[i] * left[i] * right[i]) % MOD;
        }
        return (int)result;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.sumSubarrayMins(new int[]{3, 1, 2, 4}));  // Output: 17
    }
}
```

#### Code (JavaScript):

```javascript
var sumSubarrayMins = function (arr) {
  const MOD = 1e9 + 7;
  const n = arr.length;
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  const s1 = [],
    s2 = [];

  for (let i = 0; i < n; ++i) {
    let count = 1;
    while (s1.length && s1[s1.length - 1][0] > arr[i]) {
      count += s1.pop()[1];
    }
    s1.push([arr[i], count]);
    left[i] = count;
  }

  for (let i = n - 1; i >= 0; --i) {
    let count = 1;
    while (s2.length && s2[s2.length - 1][0] >= arr[i]) {
      count += s2.pop()[1];
    }
    s2.push([arr[i], count]);
    right[i] = count;
  }

  let result = 0;
  for (let i = 0; i < n; ++i) {
    result = (result + arr[i] * left[i] * right[i]) % MOD;
  }
  return result;
};

// Example usage:
console.log(sumSubarrayMins([3, 1, 2, 4])); // Output: 17
```

### Complexity:

- **Time Complexity:** $O(n)$, where $n$ is the number of elements in the array. We traverse the array twice and use stack operations which are efficient.
- **Space Complexity:** $O(n)$, for the stack and auxiliary arrays.
