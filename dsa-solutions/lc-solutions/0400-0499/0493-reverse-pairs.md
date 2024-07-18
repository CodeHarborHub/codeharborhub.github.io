---
id: reverse-pairs
title: Reverse Pairs
sidebar_label: 0493 - Reverse Pairs
tags:
  - Leetcode
  - Merge Sort
---

## Problem Statement

Given an integer array `nums`, return the number of reverse pairs in the array.

A reverse pair is defined as a pair `(i, j)` where:

- $0 <= i < j < nums.length and$
- $nums[i] > 2 * nums[j].$

## Examples

### Example 1

- Input: `nums = [1,3,2,3,1]`
- Output: `2`
- Explanation: The reverse pairs are:
  - `(1, 4)` -> `nums[1] = 3`, `nums[4] = 1`, `3 > 2 * 1`
  - `(3, 4)` -> `nums[3] = 3`, `nums[4] = 1`, `3 > 2 * 1`

### Example 2

- Input: `nums = [2,4,3,5,1]`
- Output: `3`
- Explanation: The reverse pairs are:
  - `(1, 4)` -> `nums[1] = 4`, `nums[4] = 1`, `4 > 2 * 1`
  - `(2, 4)` -> `nums[2] = 3`, `nums[4] = 1`, `3 > 2 * 1`
  - `(3, 4)` -> `nums[3] = 5`, `nums[4] = 1`, `5 > 2 * 1`

## Constraints

- $1 <= nums.length <= 5 * 104$
- $-231 <= nums[i] <= 231 - 1$

## Algorithm

To solve this problem efficiently, we can use a modified merge sort algorithm, which not only sorts the array but also counts the number of reverse pairs during the merging process. The idea is to leverage the divide-and-conquer approach to count pairs in `O(n log n)` time complexity.

### Steps:

1. **Divide**: Split the array into two halves.
2. **Count**: Count the reverse pairs in each half recursively.
3. **Merge and Count**: While merging the two halves, count the reverse pairs where one element is from the left half and the other is from the right half.

## Code

### Python

```python
class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        def merge_sort(nums, l, r):
            if l >= r:
                return 0

            mid = (l + r) // 2
            count = merge_sort(nums, l, mid) + merge_sort(nums, mid + 1, r)

            j = mid + 1
            for i in range(l, mid + 1):
                while j <= r and nums[i] > 2 * nums[j]:
                    j += 1
                count += j - (mid + 1)

            nums[l:r + 1] = sorted(nums[l:r + 1])
            return count

        return merge_sort(nums, 0, len(nums) - 1)
```

### C++

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int reversePairs(vector<int>& nums) {
        return reversePairsSub(nums, 0, nums.size() - 1);
    }

private:
    int reversePairsSub(vector<int>& nums, int l, int r) {
        if (l >= r) return 0;

        int m = l + ((r - l) >> 1);
        int res = reversePairsSub(nums, l, m) + reversePairsSub(nums, m + 1, r);

        int i = l, j = m + 1, k = 0, p = m + 1;
        vector<int> merge(r - l + 1);

        while (i <= m) {
            while (p <= r && nums[i] > 2L * nums[p]) p++;
            res += p - (m + 1);

            while (j <= r && nums[i] >= nums[j]) merge[k++] = nums[j++];
            merge[k++] = nums[i++];
        }

        while (j <= r) merge[k++] = nums[j++];

        copy(merge.begin(), merge.end(), nums.begin() + l);

        return res;
    }
};
```

### Java

```java
import java.util.Arrays;

class Solution {
    public int reversePairs(int[] nums) {
        return mergeSort(nums, 0, nums.length - 1);
    }

    private int mergeSort(int[] nums, int left, int right) {
        if (left >= right) return 0;

        int mid = left + (right - left) / 2;
        int count = mergeSort(nums, left, mid) + mergeSort(nums, mid + 1, right);

        int j = mid + 1;
        for (int i = left; i <= mid; i++) {
            while (j <= right && nums[i] > 2L * nums[j]) j++;
            count += j - (mid + 1);
        }

        Arrays.sort(nums, left, right + 1);
        return count;
    }
}
```

### JavaScript

```javascript
var reversePairs = function (nums) {
  function mergeSort(nums, left, right) {
    if (left >= right) return 0;

    let mid = left + Math.floor((right - left) / 2);
    let count = mergeSort(nums, left, mid) + mergeSort(nums, mid + 1, right);

    let j = mid + 1;
    for (let i = left; i <= mid; i++) {
      while (j <= right && nums[i] > 2 * nums[j]) j++;
      count += j - (mid + 1);
    }

    nums.splice(
      left,
      right - left + 1,
      ...nums.slice(left, right + 1).sort((a, b) => a - b)
    );
    return count;
  }

  return mergeSort(nums, 0, nums.length - 1);
};
```
