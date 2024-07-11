---
id: Smallest-Range-I
title: Smallest Range I
sidebar_label: 0908 - Smallest Range I
tags:
  - easy
  - Arrays
  - Algorithms
  - Math
---

## Problem Description

You are given an integer array `nums` and an integer `k`.

In one operation, you can choose any index `i` where `0 <= i < nums.length` and change `nums[i]` to `nums[i] + x` where `x` is an integer from the range `[-k, k]`. You can apply this operation at most once for each index `i`.

The score of `nums` is the difference between the maximum and minimum elements in `nums`.

Return the minimum score of `nums` after applying the mentioned operation at most once for each index in it.

### Example 1:

```
Input: nums = [1], k = 0
Output: 0
Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
```

### Example 2:

```
Input: nums = [0,10], k = 2
Output: 6
Explanation: Change nums to be [2, 8]. The score is max(nums) - min(nums) = 8 - 2 = 6.
```

### Example 3:

```
Input: nums = [1,3,6], k = 3
Output: 0
Explanation: Change nums to be [4, 4, 4]. The score is max(nums) - min(nums) = 4 - 4 = 0.
```

### Constraints:

```
1 <= nums.length <= 10^4
0 <= nums[i] <= 10^4
0 <= k <= 10^4
```

## Solution

The solution involves the following steps:

1. Calculate the minimum and maximum values of the array.
2. Consider the effect of adding or subtracting `k` from these values.
3. Calculate the new possible minimum and maximum values.
4. The minimum score will be the difference between these new possible maximum and minimum values.

### Python Code

```python
def minDifference(nums, k):
    if len(nums) == 1:
        return 0
    min_val, max_val = min(nums), max(nums)
    return max(0, max_val - min_val - 2 * k)

# Example usage:
nums1 = [1]
k1 = 0
print(minDifference(nums1, k1))  # Output: 0

nums2 = [0, 10]
k2 = 2
print(minDifference(nums2, k2))  # Output: 6

nums3 = [1, 3, 6]
k3 = 3
print(minDifference(nums3, k3))  # Output: 0
```

### C++ Code

```cpp
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int minDifference(vector<int>& nums, int k) {
        if (nums.size() == 1) return 0;
        int min_val = *min_element(nums.begin(), nums.end());
        int max_val = *max_element(nums.begin(), nums.end());
        return max(0, max_val - min_val - 2 * k);
    }
};

// Example usage:
int main() {
    Solution sol;
    vector<int> nums1 = {1};
    int k1 = 0;
    cout << sol.minDifference(nums1, k1) << endl;  // Output: 0

    vector<int> nums2 = {0, 10};
    int k2 = 2;
    cout << sol.minDifference(nums2, k2) << endl;  // Output: 6

    vector<int> nums3 = {1, 3, 6};
    int k3 = 3;
    cout << sol.minDifference(nums3, k3) << endl;  // Output: 0

    return 0;
}
```

### Java Code

```java
import java.util.Arrays;

public class Solution {
    public int minDifference(int[] nums, int k) {
        if (nums.length == 1) return 0;
        int minVal = Arrays.stream(nums).min().getAsInt();
        int maxVal = Arrays.stream(nums).max().getAsInt();
        return Math.max(0, maxVal - minVal - 2 * k);
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums1 = {1};
        int k1 = 0;
        System.out.println(sol.minDifference(nums1, k1));  // Output: 0

        int[] nums2 = {0, 10};
        int k2 = 2;
        System.out.println(sol.minDifference(nums2, k2));  // Output: 6

        int[] nums3 = {1, 3, 6};
        int k3 = 3;
        System.out.println(sol.minDifference(nums3, k3));  // Output: 0
    }
}
```

### JavaScript Code

```javascript
function minDifference(nums, k) {
  if (nums.length === 1) return 0;
  const minVal = Math.min(...nums);
  const maxVal = Math.max(...nums);
  return Math.max(0, maxVal - minVal - 2 * k);
}

// Example usage:
const nums1 = [1];
const k1 = 0;
console.log(minDifference(nums1, k1)); // Output: 0

const nums2 = [0, 10];
const k2 = 2;
console.log(minDifference(nums2, k2)); // Output: 6

const nums3 = [1, 3, 6];
const k3 = 3;
console.log(minDifference(nums3, k3)); // Output: 0
```
