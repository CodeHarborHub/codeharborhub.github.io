---
id: Exponential-Search
title: Exponential Search
sidebar_label: Exponential Search
tags:
  - Intermediate
  - Search Algorithms
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Exponential Search problem."
---

## What is Exponential Search?

Exponential Search is a search algorithm for sorted arrays. It works by finding a range where the target element is likely to be and then performing a binary search within that range. This makes it more efficient than a simple binary search when the target element is expected to be close to the beginning of the array.

## Algorithm for Exponential Search

1. If the first element is the target, return its index.
2. Find the range for binary search by repeated doubling. Start with the range [1].
3. Double the range size until the target is within the range or the range exceeds the size of the list.
4. Perform a binary search within the identified range.
5. If the target element is found, return its index.
6. If the target element is not found, return -1.

## How does Exponential Search work?

- It starts by checking if the first element is the target.
- Then, it repeatedly doubles the range to find a suitable interval where the target element might be located.
- Finally, it performs a binary search within the identified range.

## Problem Description

Given a sorted list and a target element, implement the Exponential Search algorithm to find the index of the target element in the list. If the element is not present, return -1.

## Examples

**Example 1:**
Input:
list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target = 6
Output: 5


**Example 2:**
Input:
list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
target = 25
Output: -1


## Your Task:

You don't need to read input or print anything. Complete the function `exponential_search()` which takes `arr[]`, `N` and `K` as input parameters and returns the index of `K` in the array. If `K` is not present in the array, return -1.

Expected Time Complexity: $O(\log i)$, where $i$ is the index of the target element.
Expected Auxiliary Space: $O(1)$

## Constraints

- $1 <= N <= 10^5$
- $1 <= arr[i] <= 10^6$
- $1 <= K <= 10^6$

## Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
    
```python
def binary_search(arr, left, right, target):
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

def exponential_search(arr, target):
    if arr[0] == target:
        return 0
    
    n = len(arr)
    i = 1
    while i < n and arr[i] <= target:
        i *= 2
    
    return binary_search(arr, i // 2, min(i, n - 1), target)
```

 </TabItem>
  <TabItem value="C++" label="C++">

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int binary_search(const std::vector<int>& arr, int left, int right, int target) {
   while (left <= right) {
       int mid = left + (right - left) / 2;
       if (arr[mid] == target) {
           return mid;
       } else if (arr[mid] < target) {
           left = mid + 1;
       } else {
           right = mid - 1;
       }
   }
   return -1;
}

int exponential_search(const std::vector<int>& arr, int target) {
   if (arr[0] == target) {
       return 0;
   }

   int n = arr.size();
   int i = 1;
   while (i < n && arr[i] <= target) {
       i *= 2;
   }

   return binary_search(arr, i / 2, std::min(i, n - 1), target);
}

int main() {
   std::vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
   int target = 6;
   std::cout << "Index: " << exponential_search(arr, target) << std::endl;
   return 0;
}
```

</TabItem>
  <TabItem value="Java" label="Java">

```java

import java.util.Arrays;

public class ExponentialSearch {
    public static int binarySearch(int[] arr, int left, int right, int target) {
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    public static int exponentialSearch(int[] arr, int target) {
        if (arr[0] == target) {
            return 0;
        }

        int n = arr.length;
        int i = 1;
        while (i < n && arr[i] <= target) {
            i *= 2;
        }

        return binarySearch(arr, i / 2, Math.min(i, n - 1), target);
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int target = 6;
        System.out.println("Index: " + exponentialSearch(arr, target));
    }
}
```

</TabItem>
  <TabItem value="JavaScript" label="JavaScript">

```javascript

function binarySearch(arr, left, right, target) {
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function exponentialSearch(arr, target) {
    if (arr[0] === target) {
        return 0;
    }

    let n = arr.length;
    let i = 1;
    while (i < n && arr[i] <= target) {
        i *= 2;
    }

    return binarySearch(arr, Math.floor(i / 2), Math.min(i, n - 1), target);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 6;
console.log("Index:", exponentialSearch(arr, target));
```

</TabItem>
</Tabs>

# Complexity Analysis
### Time Complexity: $O(\log i)$, where $i$ is the index of the target element. The doubling step takes logarithmic time, and the binary search within the range also takes logarithmic time.
### Space Complexity: $O(1)$, as no extra space is required apart from the input list.
# Advantages and Disadvantages
## Advantages:

Efficient for searching in sorted arrays, especially when the target element is close to the beginning.

Combines the benefits of both linear and binary search.
## Disadvantages:

Requires the list to be sorted.

Slightly more complex to implement compared to binary search alone.
