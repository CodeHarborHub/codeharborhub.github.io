---
id: binary-sub-arrays-with-sum
title: Binary Sub Arrays With Sum
sidebar_label: 0930- Binary Sub Arrays With Sum
tags:
  - Leet code
description: "Solution to leetocde 930"
---

## Problem Statement

Given a binary array `nums` and an integer `goal`, return the number of non-empty subarrays with a sum equal to `goal`.

A subarray is a contiguous part of the array.

### Example 1

**Input:**

```
nums = [1,0,1,0,1]
goal = 2
```

**Output:**

```
4
```

**Explanation:**
The 4 subarrays are bolded and underlined below:

```
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
```

### Example 2

**Input:**

```
nums = [0,0,0,0,0]
goal = 0
```

**Output:**

```
15
```

### Constraints

- $1 <= nums.length <= 3 * 104$
- $nums[i] is either 0 or 1.$
- $0 <= goal <= nums.length$

### Algorithm

1. **Define a helper function `atMost(nums, goal)`**:

   - Initialize `head`, `tail`, `total`, and `result` to 0.
   - Iterate through the array using `head`:
     - Add the value at `nums[head]` to `total`.
     - While `total` is greater than `goal`:
       - Subtract the value at `nums[tail]` from `total`.
       - Increment `tail`.
     - Add `head - tail + 1` to `result`.
   - Return `result`.

2. **Calculate the number of subarrays with sum exactly equal to `goal`**:
   - Return `atMost(nums, goal) - atMost(nums, goal - 1)`.

### Code Implementation

### Python

```python
class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        return self.atMost(nums, goal) - self.atMost(nums, goal - 1)

    def atMost(self, nums: List[int], goal: int) -> int:
        head, tail, total, result = 0, 0, 0, 0
        for head in range(len(nums)):
            total += nums[head]
            while total > goal and tail <= head:
                total -= nums[tail]
                tail += 1
            result += head - tail + 1
        return result
```

### C++

```cpp
class Solution {
public:
    int numSubarraysWithSum(vector<int>& nums, int goal) {
        return atMost(nums, goal) - atMost(nums, goal - 1);
    }

private:
    int atMost(vector<int>& nums, int goal) {
        int head = 0, tail = 0, total = 0, result = 0;
        for (head = 0; head < nums.size(); ++head) {
            total += nums[head];
            while (total > goal && tail <= head) {
                total -= nums[tail];
                ++tail;
            }
            result += head - tail + 1;
        }
        return result;
    }
};
```

### Java

```java
class Solution {
    public int numSubarraysWithSum(int[] nums, int goal) {
        return atMost(nums, goal) - atMost(nums, goal - 1);
    }

    private int atMost(int[] nums, int goal) {
        int head = 0, tail = 0, total = 0, result = 0;
        for (head = 0; head < nums.length; ++head) {
            total += nums[head];
            while (total > goal && tail <= head) {
                total -= nums[tail];
                ++tail;
            }
            result += head - tail + 1;
        }
        return result;
    }
}
```

### JavaScript

```javascript
var numSubarraysWithSum = function (nums, goal) {
  return atMost(nums, goal) - atMost(nums, goal - 1);
};

function atMost(nums, goal) {
  let head = 0,
    tail = 0,
    total = 0,
    result = 0;
  for (head = 0; head < nums.length; ++head) {
    total += nums[head];
    while (total > goal && tail <= head) {
      total -= nums[tail];
      ++tail;
    }
    result += head - tail + 1;
  }
  return result;
}
```
