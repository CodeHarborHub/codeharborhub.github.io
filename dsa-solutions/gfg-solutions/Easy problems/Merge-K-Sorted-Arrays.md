---
id: merge-k-sorted-arrays
title: Merge K Sorted Arrays
sidebar_label: Merge-K-Sorted-Arrays
tags:
  - Sorting
  - Algorithms
description: "This tutorial covers the solution to the Merge K Sorted Arrays problem from the GeeksforGeeks."
---
## Problem Description
Given `k` sorted arrays arranged in the form of a matrix of size `k * k`. The task is to merge them into one sorted array. Return the merged sorted array 

## Examples

**Example 1:**

```
Input: k = 3, arr[][] = {{1,2,3},{4,5,6},{7,8,9}}
Output: 1 2 3 4 5 6 7 8 9
Explanation: Above test case has 3 sorted arrays of size 3, 3, 3 arr[][] = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]. The merged list will be [1, 2, 3, 4, 5, 6, 7, 8, 9].
```

**Example 2:**

```
Input: k = 4, arr[][]={{1,2,3,4},{2,2,3,4},{5,5,6,6},{7,8,9,9}}
Output: 1 2 2 2 3 3 4 4 5 5 6 6 7 8 9 9 
Explanation: Above test case has 4 sorted arrays of size 4, 4, 4, 4 arr[][] = [[1, 2, 2, 2], [3, 3, 4, 4], [5, 5, 6, 6], [7, 8, 9, 9 ]]. The merged list will be [1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9, 9].
```

## Constraints

* `1 <= k <= 100`

## Problem Explanation
Given k sorted arrays arranged in the form of a matrix of size k * k. The task is to merge them into one sorted array. Return the merged sorted array

## Code Implementation

### C++ Solution

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

std::vector<int> mergeSortedArrays(std::vector<std::vector<int>> arrays) {
  std::vector<int> result;
  for (const auto& array : arrays) {
    result.insert(result.end(), array.begin(), array.end());
  }
  std::sort(result.begin(), result.end());
  return result;
}

int main() {
  std::vector<std::vector<int>> arrays = { { 1, 3, 5 }, { 2, 4, 6 }, { 0, 7, 8 } };
  std::vector<int> result = mergeSortedArrays(arrays);
  for (int num : result) {
    std::cout << num << " ";
  }
  return 0;
}


```

```java


import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    int[][] arrays = { { 1, 3, 5 }, { 2, 4, 6 }, { 0, 7, 8 } };
    int[] result = mergeSortedArrays(arrays);
    System.out.println(Arrays.toString(result));
  }

  public static int[] mergeSortedArrays(int[][] arrays) {
    int[] result = new int[arrays.length * arrays[0].length];
    int index = 0;
    for (int[] array : arrays) {
      for (int num : array) {
        result[index++] = num;
      }
    }
    Arrays.sort(result);
    return result;
  }
}


```

```python
import itertools

def merge_sorted_arrays(arrays):
  return sorted(itertools.chain(*arrays))

```

```javascript

function mergeSortedArrays(arrays) {
  return arrays.flat().sort((a, b) => a - b);
}


```

## Solution Logic:


1. Flatten the 2D array:
    - Iterate through each subarray in the 2D array.
    - Concatenate each subarray to a single array.
2. Sort the 1D array:
    - Use a sorting algorithm (e.g. quicksort, mergesort) to sort the array in ascending order.
3. Return the sorted 1D array:
    - Return the sorted array as the final result.

## Time Complexity

* The time complexity is $O(n*log(n))$ where n is the total number of elements in the arrays.

## Space Complexity

* $O(n)$ where n is the total number of elements in the arrays.
