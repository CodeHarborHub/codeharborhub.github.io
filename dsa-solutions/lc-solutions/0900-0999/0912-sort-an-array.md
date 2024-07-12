---
id: Sort-an-Array
title: Sort an Array
sidebar_label: 0912 - Sort an Array
tags:
  - medium
  - Array
  - Divide and Conquer
  - Sorting
---

## Problem: Sort an Array of Integers

### Description

Given an array of integers `nums`, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in `O(n log n)` time complexity and with the smallest space complexity possible.

## Example 1

**Input**: nums = [5, 2, 3, 1]  
**Output**: [1, 2, 3, 5]  
**Explanation**: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

## Example 2

**Input**: nums = [5, 1, 1, 2, 0, 0]  
**Output**: [0, 0, 1, 1, 2, 5]  
**Explanation**: Note that the values of nums are not necessarily unique.

## Constraints

- `1 <= nums.length <= 5 * 10^4`
- `-5 * 10^4 <= nums[i] <= 5 * 10^4`

## Solution

### Approach

To achieve `O(n log n)` time complexity with the smallest space complexity possible, we can use the Merge Sort algorithm. Merge Sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts them, and then merges the sorted halves.

### Implementation

#### C++

```cpp
class Solution {
public:
    void merge(vector<int>& nums, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        vector<int> L(n1), R(n2);

        for (int i = 0; i < n1; i++)
            L[i] = nums[left + i];
        for (int j = 0; j < n2; j++)
            R[j] = nums[mid + 1 + j];

        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                nums[k] = L[i];
                i++;
            } else {
                nums[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            nums[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            nums[k] = R[j];
            j++;
            k++;
        }
    }

    void mergeSort(vector<int>& nums, int left, int right) {
        if (left >= right)
            return;
        int mid = left + (right - left) / 2;
        mergeSort(nums, left, mid);
        mergeSort(nums, mid + 1, right);
        merge(nums, left, mid, right);
    }

    vector<int> sortArray(vector<int>& nums) {
        mergeSort(nums, 0, nums.size() - 1);
        return nums;
    }
};
```

#### Python

```python
class Solution:
    def merge(self, left, right):
        sorted_list = []
        while left and right:
            if left[0] < right[0]:
                sorted_list.append(left.pop(0))
            else:
                sorted_list.append(right.pop(0))
        sorted_list.extend(left if left else right)
        return sorted_list

    def merge_sort(self, nums):
        if len(nums) <= 1:
            return nums
        mid = len(nums) // 2
        left = self.merge_sort(nums[:mid])
        right = self.merge_sort(nums[mid:])
        return self.merge(left, right)

    def sortArray(self, nums):
        return self.merge_sort(nums)
```

#### Java

```java
class Solution {
    public void merge(int[] nums, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; ++i)
            L[i] = nums[left + i];
        for (int j = 0; j < n2; ++j)
            R[j] = nums[mid + 1 + j];

        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                nums[k] = L[i];
                i++;
            } else {
                nums[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            nums[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            nums[k] = R[j];
            j++;
            k++;
        }
    }

    public void mergeSort(int[] nums, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSort(nums, left, mid);
            mergeSort(nums, mid + 1, right);
            merge(nums, left, mid, right);
        }
    }

    public int[] sortArray(int[] nums) {
        mergeSort(nums, 0, nums.length - 1);
        return nums;
    }
}
```

#### JavaScript

```javascript
var sortArray = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left).concat(right);
  };

  const mergeSort = (nums) => {
    if (nums.length <= 1) {
      return nums;
    }
    const mid = Math.floor(nums.length / 2);
    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid));
    return merge(left, right);
  };

  return mergeSort(nums);
};
```
