---
id: sort-0s-1s-2s
title: Sort 0s, 1s And 2s
sidebar_label: Sort-0s-1s-and-2s
tags:
  - Arrays
  - Sorting
description: "This tutorial covers the solution to the SSort 0s, 1s and 2s problem from the GeeksforGeeks website."
---
## Problem Description
Given an array of size `N` containing only `0s`, `1s`, and `2s`; sort the array in ascending order.

## Examples

**Example 1:**

```
Input: 
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated 
into ascending order.
```

**Example 2:**

```
Input: 
N = 3
arr[] = {0 1 0}
Output:
0 0 1
Explanation:
0s 1s and 2s are segregated 
into ascending order.
```

## Your Task
You don't need to read input or print anything. Your task is to complete the function sort012() that takes an array arr and N as input parameters and sorts the array in-place.



Expected Time Complexity: O(N)

Expected Auxiliary Space: O(1)

## Constraints

* `1 <= N <= 10^6`

## Problem Explanation

The task is to traverse the array and sort 0s, 1s, 2s.

## Code Implementation

### C++ Solution

```cpp
void sortArray(vector<int>& arr) {
  int low = 0, mid = 0, high = arr.size() - 1;
  while (mid <= high) {
    if (arr[mid] == 0) {
      swap(arr[low], arr[mid]);
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      swap(arr[mid], arr[high]);
      high--;
    }
  }
}
```

```java
public void sortArray(int[] arr) {
  int low = 0, mid = 0, high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] == 0) {
      swap(arr, low, mid);
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      swap(arr, mid, high);
      high--;
    }
  }
}
public void swap(int[] arr, int i, int j) {
  int temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


```

```python
def sortArray(arr):
  low, mid, high = 0, 0, len(arr) - 1
  while mid <= high:
    if arr[mid] == 0:
      arr[low], arr[mid] = arr[mid], arr[low]
      low += 1
      mid += 1
    elif arr[mid] == 1:
      mid += 1
    else:
      arr[mid], arr[high] = arr[high], arr[mid]
      high -= 1



```

```javascript
function sortArray(arr) {
  let low = 0, mid = 0, high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
}


```

```typescript
function sortArray(arr) {
  let low = 0, mid = 0, high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
}

```

## Solution Logic:
The solution uses a variation of the Dutch National Flag algorithm, which is used to sort an array of 0s, 1s, and 2s. The algorithm uses three pointers: low, mid, and high. The low pointer is used to track the position of the next 0, the mid pointer is used to track the position of the next 1, and the high pointer is used to track the position of the next 2.




## Time Complexity

* The time complexity is $O(N)$,where N is the length of the array. This is because we only need to iterate through the array once to sort it.



## Space Complexity

* The auxiliary space complexity is $O(1)$ due to the algorithm only uses a fixed amount of space to store the indices and the target element.