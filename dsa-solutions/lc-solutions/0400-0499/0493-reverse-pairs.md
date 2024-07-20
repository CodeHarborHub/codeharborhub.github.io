---
id: reverse-pairs
title: Reverse Pairs
sidebar_label: 493-Reverse-Pairs
tags:
  - Array
  - Binary Search
  - Divide and conquer
  - Binary Indexed Tree
  - Segment Tree
  - Merge Sort
  - Ordered Set
description: The problem is to reverse the pairs.
sidebar_position: 2667
---

## Problem Statement 

### Problem Description

Given an integer array `nums`, return the number of reverse pairs in the array.

A reverse pair is a pair `(i, j)` where:

`0 <= i < j < nums.length` and
`nums[i] > 2 * nums[j]`.

### Examples

**Example 1:**

```
Input: nums = [1,3,2,3,1]
Output: 2
Explanation: The reverse pairs are:
(1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
(3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1
```

**Example 2:**

```
Input: nums = [2,4,3,5,1]
Output: 3
Explanation: The reverse pairs are:
(1, 4) --> nums[1] = 4, nums[4] = 1, 4 > 2 * 1
(2, 4) --> nums[2] = 3, nums[4] = 1, 3 > 2 * 1
(3, 4) --> nums[3] = 5, nums[4] = 1, 5 > 2 * 1
```

### Constraints

- `1 <= nums.length <= 5 * 10^4`

## Solution of Given Problem

### Intuition and Approach

The intuition behind this solution is to use a modified Merge Sort algorithm to count the number of reverse pairs in the array.


### Approaches

- Divide the array into smaller subarrays until each subarray has only one element.
- Merge the subarrays back together, counting the number of reverse pairs between each pair of subarrays.
- The merge step is done in a way that ensures the count of reverse pairs is accurate.


#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    function mergeSortedArrays(nums, left, mid, right, temp) {
  let i = left, j = mid + 1, k = 0;
  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j]) temp[k++] = nums[i++];
    else temp[k++] = nums[j++];
  }
  while (i <= mid) temp[k++] = nums[i++];
  while (j <= right) temp[k++] = nums[j++];
}

function merge(nums, left, mid, right) {
  let count = 0;
  let j = mid + 1;
  for (let i = left; i <= mid; i++) {
    while (j <= right && nums[i] > 2 * nums[j]) j++;
    count += j - mid - 1;
  }
  let temp = new Array(right - left + 1);
  mergeSortedArrays(nums, left, mid, right, temp);
  for (let i = left; i <= right; i++) nums[i] = temp[i - left];
  return count;
}
function mergeSort(nums, left, right) {
  if (left >= right) return 0;
  let mid = left + (right - left) / 2;
  let count = mergeSort(nums, left, mid) + mergeSort(nums, mid + 1, right);
  count += merge(nums, left, mid, right);
  return count;
}

class Solution {
  reversePairs(nums) {
    return mergeSort(nums, 0, nums.length - 1);
  }
}


    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    function mergeSortedArrays(nums: number[], left: number, mid: number, right: number, temp: number[]) {
  let i = left, j = mid + 1, k = 0;
  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j]) temp[k++] = nums[i++];
    else temp[k++] = nums[j++];
  }
  while (i <= mid) temp[k++] = nums[i++];
  while (j <= right) temp[k++] = nums[j++];
}

function merge(nums: number[], left: number, mid: number, right: number) {
  let count = 0;
  let j = mid + 1;
  for (let i = left; i <= mid; i++) {
    while (j <= right && nums[i] > 2 * nums[j]) j++;
    count += j - mid - 1;
  }
  let temp = new Array(right - left + 1);
  mergeSortedArrays(nums, left, mid, right, temp);
  for (let i = left; i <= right; i++) nums[i] = temp[i - left];
  return count;
}
function mergeSort(nums: number[], left: number, right: number) {
  if (left >= right) return 0;
  let mid = left + (right - left) / 2;
  let count = mergeSort(nums, left, mid) + mergeSort(nums, mid + 1, right);
  count += merge(nums, left, mid, right);
  return count;
}

class Solution {
  reversePairs(nums: number[]) {
    return mergeSort(nums, 0, nums.length - 1);
  }
}

    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    def merge_sorted_arrays(nums, left, mid, right, temp):
    i, j, k = left, mid + 1, 0
    while i <= mid and j <= right:
        if nums[i] <= nums[j]:
            temp[k] = nums[i]
            i += 1
        else:
            temp[k] = nums[j]
            j += 1
        k += 1
    while i <= mid:
        temp[k] = nums[i]
        i += 1
        k += 1
    while j <= right:
        temp[k] = nums[j]
        j += 1
        k += 1

def merge(nums, left, mid, right):
    count = 0
    j = mid + 1
    for i in range(left, mid + 1):
        while j <= right and nums[i] > 2 * nums[j]:
            j += 1
        count += j - mid - 1
    temp = [0] * (right - left + 1)
    merge_sorted_arrays(nums, left, mid, right, temp)
    for i in range(left, right + 1):
        nums[i] = temp[i - left]
    return count

def merge_sort(nums, left, right):
    if left >= right:
        return 0
    mid = left + (right - left) // 2
    count = merge_sort(nums, left, mid) + merge_sort(nums, mid + 1, right)
    count += merge(nums, left, mid, right)
    return count

class Solution:
    def reversePairs(self, nums):
        return merge_sort(nums, 0, len(nums) - 1)

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
    public int reversePairs(int[] nums) {
        return mergeSort(nums, 0, nums.length - 1);
    }

    public int mergeSort(int[] nums, int left, int right) {
        if (left >= right) {
            return 0;
        }
        int mid = left + (right - left) / 2;
        int count = mergeSort(nums, left, mid) + mergeSort(nums, mid + 1, right);
        count += merge(nums, left, mid, right);
        return count;
    }
     public int merge(int[] nums, int left, int mid, int right) {
        int count = 0;
        int j = mid + 1;
        for (int i = left; i <= mid; i++) {
            while (j <= right && nums[i] > 2 * nums[j]) {
                j++;
            }
            count += j - mid - 1;
        }
        int[] temp = new int[right - left + 1];
        mergeSortedArrays(nums, left, mid, right, temp);
        for (int i = left; i <= right; i++) {
            nums[i] = temp[i - left];
        }
        return count;
    }

    public void
    mergeSortedArrays(int[] nums, int left, int mid, int right, int[] temp) {
        int i = left, j = mid + 1, k = 0;
        while (i <= mid && j <= right) {
            if (nums[i] <= nums[j]) {
                temp[k++] = nums[i++];
            } else {
                temp[k++] = nums[j++];
            }
        }
        while (i <= mid) {
            temp[k++] = nums[i++];
        }
        while (j <= right) {
            temp[k++] = nums[j++];
        }
    }
}

    ```
  </TabItem>
  <TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
    void mergeSortedArrays(vector<int>& nums, int left, int mid, int right, vector<int>& temp) {
    int i = left, j = mid + 1, k = 0;
    while (i <= mid && j <= right) {
        if (nums[i] <= nums[j]) temp[k++] = nums[i++];
        else temp[k++] = nums[j++];
    }
    while (i <= mid) temp[k++] = nums[i++];
    while (j <= right) temp[k++] = nums[j++];
}
int merge(vector<int>& nums, int left, int mid, int right) {
    int count = 0;
    int j = mid + 1;
    for (int i = left; i <= mid; i++) {
        while (j <= right && nums[i] > 2 * nums[j]) j++;
        count += j - mid - 1;
    }
    vector<int> temp(right - left + 1);
    mergeSortedArrays(nums, left, mid, right, temp);
    for (int i = left; i <= right; i++) nums[i] = temp[i - left];
    return count;
}
int mergeSort(vector<int>& nums, int left, int right) {
    if (left >= right) return 0;
    int mid = left + (right - left) / 2;
    int count = mergeSort(nums, left, mid) + mergeSort(nums, mid + 1, right);
    count += merge(nums, left, mid, right);
    return count;
}


class Solution {
public:
    int reversePairs(vector<int>& nums) {
       return mergeSort(nums, 0, nums.size() - 1);


    }
};
    ```
  </TabItem>  
</Tabs>

### Complexity Analysis

- **Time Complexity**: $$O(n*log(n))$$, where n is the length of the input array. This is because the solution uses a modified Merge Sort algorithm, which has a time complexity of O(n log n).


- **Space Complexity**: $$O(n)$$, where n is the length of the input array. This is because the solution uses a temporary array to store the merged sorted arrays.



---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['Ishitamukherjee2004'].map(username => (
 <Author key={username} username={username} />
))} </div>