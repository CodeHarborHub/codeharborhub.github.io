---
id: 3sum-with-multiplicity
title: 3Sum With Multiplicity
sidebar_label: 0923 - 3Sum With Multiplicity
tags:
  - Leetcode
---

## Problem Statement

Given an integer array `arr` and an integer `target`, return the number of tuples `(i, j, k)` such that `i < j < k` and `arr[i] + arr[j] + arr[k] == target`.

As the answer can be very large, return it modulo `10^9 + 7`.

## Examples

### Example 1

**Input:** `arr = [1,1,2,2,3,3,4,4,5,5]`, `target = 8`  
**Output:** `20`  
**Explanation:**
Enumerating by the values `(arr[i], arr[j], arr[k])`:

- `(1, 2, 5)` occurs 8 times;
- `(1, 3, 4)` occurs 8 times;
- `(2, 2, 4)` occurs 2 times;
- `(2, 3, 3)` occurs 2 times.

### Example 2

**Input:** `arr = [1,1,2,2,2,2]`, `target = 5`  
**Output:** `12`  
**Explanation:**
`arr[i] = 1`, `arr[j] = arr[k] = 2` occurs 12 times:

- We choose one `1` from `[1,1]` in 2 ways,
- and two `2`s from `[2,2,2,2]` in 6 ways.

### Example 3

**Input:** `arr = [2,1,3]`, `target = 6`  
**Output:** `1`  
**Explanation:** `(1, 2, 3)` occurred one time in the array so we return 1.

## Constraints

- $3 <= arr.length <= 3000$
- $0 <= arr[i] <= 100$
- $0 <= target <= 300$

## Algorithm

1. Use a hashmap to keep track of the frequency of each sum of pairs `(arr[i] + arr[j])` as we iterate through the array.
2. For each element in the array, count the number of valid pairs that can form the target with the current element using the hashmap.
3. Iterate through the array and update the hashmap for the sums of pairs.
4. Keep track of the results and return it modulo `10^9 + 7`.

## C++ Code

```cpp
class Solution {
public:
    int threeSumMulti(vector<int>& arr, int target) {
        int n = arr.size();
        const int mod = 1e9 + 7;
        long ans = 0;

        unordered_map<int, int> m;
        for (int i = 0; i < n; ++i) {
            ans = (ans + m[target - arr[i]]) % mod;
            for (int j = 0; j < i; ++j) {
                m[arr[i] + arr[j]]++;
            }
        }

        return ans;
    }
};
```

## Python Code

```python
class Solution:
    def threeSumMulti(self, arr: List[int], target: int) -> int:
        from collections import defaultdict

        mod = 10**9 + 7
        count = defaultdict(int)
        result = 0

        for i, x in enumerate(arr):
            result = (result + count[target - x]) % mod
            for j in range(i):
                count[arr[j] + x] += 1

        return result
```

## Java Code

```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int threeSumMulti(int[] arr, int target) {
        int n = arr.length;
        int mod = 1000000007;
        long result = 0;

        Map<Integer, Integer> countMap = new HashMap<>();
        for (int i = 0; i < n; i++) {
            result = (result + countMap.getOrDefault(target - arr[i], 0)) % mod;
            for (int j = 0; j < i; j++) {
                int sum = arr[i] + arr[j];
                countMap.put(sum, countMap.getOrDefault(sum, 0) + 1);
            }
        }

        return (int) result;
    }
}
```

## JavaScript Code

```javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
  const mod = 10 ** 9 + 7;
  let count = new Map();
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = (result + (count.get(target - arr[i]) || 0)) % mod;
    for (let j = 0; j < i; j++) {
      let sum = arr[i] + arr[j];
      count.set(sum, (count.get(sum) || 0) + 1);
    }
  }

  return result;
};
```
