---
id: 3Sum Closest
title: 3Sum losest (LeetCode)
sidebar_label: 0016-3Sum Closest
tags:
  - Array
  - two pointers
  - Sorting
description: Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
sidebar_position: 16
---

## Problem Description

Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

### Example 1

- **Input:** `nums = [-1,2,1,-4]`, `target = 1`
- **Output:** `2`
- **Explanation:** The sum that is closest to the target is `2` (`-1 + 2 + 1 = 2`).

### Example 2

- **Input:** `nums = [0,0,0]`, `target = 1`
- **Output:** `0`
- **Explanation:** The sum that is closest to the target is `0` (`0 + 0 + 0 = 0`).

### Constraints

- `3 <= nums.length <= 500`
- `-1000 <= nums[i] <= 1000`
- `-10^4 <= target <= 10^4`

### Topics

- Array
- Two Pointers
- Sorting

### Intuition

- Sorting combined with the two-pointer technique.

### Complexity

- **Time Complexity:** $O(N \log N + N^2)$ approx $O(N^2)$
- **Space Complexity:** $(O(1))$

### Solution Code and Explanation

#### C++

```cpp
#include <vector>
#include <algorithm>
#include <climits>

class Solution {
public:
    int threeSumClosest(std::vector<int>& nums, int target) {
        int mindiff = INT_MAX;
        int n = nums.size();
        std::sort(nums.begin(), nums.end());
        int ans = 0;

        for (int i = 0; i < n; i++) {
            int j = i + 1;
            int k = n - 1;

            while (j < k) {
                int sum = nums[i] + nums[j] + nums[k];

                if (sum == target) return target;
                else {
                    int diff = std::abs(target - sum);

                    if (diff < mindiff) {
                        mindiff = diff;
                        ans = sum;
                    }
                }

                if (sum < target) j++;
                else if (sum > target) k--;
            }
        }
        return ans;
    }
};
```

#### Java

```java
import java.util.Arrays;

class Solution {
    public int threeSumClosest(int[] nums, int target) {
        int mindiff = Integer.MAX_VALUE;
        int n = nums.length;
        Arrays.sort(nums);
        int ans = 0;

        for (int i = 0; i < n; i++) {
            int j = i + 1;
            int k = n - 1;

            while (j < k) {
                int sum = nums[i] + nums[j] + nums[k];

                if (sum == target) return target;

                else {
                    int diff = Math.abs(target - sum);

                    if (diff < mindiff) {
                        mindiff = diff;
                        ans = sum;
                    }
                }

                if (sum < target) j++;
                else if (sum > target) k--;
            }
        }
        return ans;
    }
}
```

#### Python

```python
from typing import List

class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        mindiff = float('inf')
        nums.sort()
        n = len(nums)
        ans = 0

        for i in range(n):
            j = i + 1
            k = n - 1

            while j < k:
                sum_val = nums[i] + nums[j] + nums[k]

                if sum_val == target:
                    return target
                else:
                    diff = abs(target - sum_val)

                    if diff < mindiff:
                        mindiff = diff
                        ans = sum_val

                if sum_val < target:
                    j += 1
                elif sum_val > target:
                    k -= 1

        return ans
```

### Explanation

1. **Sort the Array:**

   - The array `nums` is sorted to facilitate the two-pointer technique.

   ```python
   nums.sort()
   ```

2. **Initialize Variables:**

   - `mindiff` is initialized to infinity to keep track of the minimum difference found.
   - `ans` is initialized to 0 to store the closest sum.

3. **Iterate Through the Array:**

   - For each element `nums[i]`, use two pointers `j` and `k` to find the other two elements.

   ```python
   for i in range(n):
       j = i + 1
       k = n - 1
   ```

4. **Two-Pointer Approach:**

   - Calculate the sum of `nums[i]`, `nums[j]`, and `nums[k]`.
   - If the sum equals the target, return the target immediately.
   - If the sum does not equal the target, calculate the difference between the target and the sum.
   - If the difference is less than `mindiff`, update `mindiff` and `ans`.
   - Adjust the pointers `j` and `k` based on whether the sum is less than or greater than the target.

   ```python
   while j < k:
       sum_val = nums[i] + nums[j] + nums[k]

       if sum_val == target:
           return target
       else:
           diff = abs(target - sum_val)

           if diff < mindiff:
               mindiff = diff
               ans = sum_val

       if sum_val < target:
           j += 1
       elif sum_val > target:
           k -= 1
   ```

5. **Return the Closest Sum:**
   - After checking all possible triplets, return the closest sum found.
   ```python
   return ans
   ```

### Conclusion

The above solution efficiently finds the sum of three integers in the array `nums` that is closest to the given `target`. It employs a combination of sorting and the two-pointer technique to achieve a time complexity of $(O(N^2))$ and a space complexity of $(O(1))$. This ensures that the algorithm can handle input sizes up to the upper limit specified in the constraints efficiently.
