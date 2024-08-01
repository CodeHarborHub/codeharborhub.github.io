---
id: kth-smallest
title: Kth Smallest
sidebar_label: Kth-Smallest
tags:
  - Sorting
  - Algorithms
  - Arrays
  - Searching
description: "This tutorial covers the solution to the Kth Smallest problem from the GeeksforGeeks."
---
## Problem Description

Given an array `arr[]` and an integer `k` where `k` is smaller than the size of the array, the task is to find the `kth` smallest element in the given array. It is given that all array elements are distinct.

Note:-  `l` and `r` denotes the starting and ending index of the array.

## Examples

**Example 1:**

```
Input:
n = 6
arr[] = 7 10 4 3 20 15
k = 3
l=0 r=5

Output : 
7

Explanation :
3rd smallest element in the given 
array is 7.
```

**Example 2:**
```
Input:
n = 5
arr[] = 7 10 4 20 15
k = 4 
l=0 r=4

Output : 
15

Explanation :
4th smallest element in the given 
array is 15.
```

### Your Task
You don't have to read input or print anything. Your task is to complete the function kthSmallest() which takes the array arr[], integers l and r denoting the starting and ending index of the array and an integer k as input and returns the kth smallest element.

Expected Time Complexity: O(n*log(n))

Expected Auxiliary Space: O(1)

## Constraints

* `1 ≤ N ≤ 10^5`

## Problem Explanation

Given an array `arr[]` and an integer `k` where `k` is smaller than the size of the array, the task is to find the `kth` smallest element in the given array. It is given that all array elements are distinct.

Note:-  `l` and `r` denotes the starting and ending index of the array.

## Code Implementation

### C++ Solution

```cpp
int kthSmallest(int arr[], int l, int r, int k) {
  sort(arr + l, arr + r + 1);
  return arr[l + k - 1];
}


```

```java

int kthSmallest(int arr[], int l, int r, int k) {
  Arrays.sort(arr, l, r + 1);
  return arr[l + k - 1];
}


```

```python
def kthSmallest(arr, l, r, k):
  arr.sort()
  return arr[l + k - 1]


```

```javascript
function kthSmallest(arr, l, r, k) {
  arr.sort((a, b) => a - b);
  return arr[l + k - 1];
}


```

## Solution Logic:

1. sort(arr + l, arr + r + 1) (C++), arr.sort() (Python, JavaScript, TypeScript):
    - Sort the array in ascending order.
    - This step is necessary to ensure that the array is in a sorted state, allowing us to easily access the kth smallest element.
2. return arr[l + k - 1]:
    - Return the element at the index l + k - 1.
    - l is the starting index of the array, k is the position of the element to be found, and -1 is to adjust for zero-based indexing.
    - Since the array is sorted in ascending order, the element at this index will be the kth smallest element.



## Time Complexity

* The time complexity is $O(n*log(n))$ due to the sorting step, where n is the length of the array.

## Space Complexity

* The auxiliary space complexity is $O(1)$ due to the only extra memory used is for temporary variables while swapping two values in Array.