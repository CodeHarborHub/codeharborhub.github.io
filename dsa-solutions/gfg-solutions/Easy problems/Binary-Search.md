---
id: binary-search
title: Binary Search
sidebar_label: Binary-Search
tags:
  - Modular Arithmetic
  - Algorithms
description: "This tutorial covers the solution to the Count Digits problem from the GeeksforGeeks."
---
## Problem Description
Given a sorted array `arr` and an integer `k`, find the position(0-based indexing) at which `k` is present in the array using binary search. when divided.

## Examples

**Example 1:**

```
Input: k = 4, arr= [1, 2, 3, 4, 5]  
Output: 3
Explanation: 4 appears at index 3.
```

**Example 2:**

```
Input: k = 445, arr= [11, 22, 33, 44, 55] 
Output: -1
Explanation: 445 is not present.
```


Expected Time Complexity: O(logn)

Expected Auxiliary Space: O(logn)

## Constraints

* `1 ≤ N ≤ 10^5`

## Problem Explanation

The task is to traverse the array and search the number.

## Code Implementation

### C++ Solution

```cpp

#include <iostream>
#include <vector>

int binarySearch(const std::vector<int>& arr, int k) {
    int low = 0;
    int high = arr.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == k) {
            return mid;
        } else if (arr[mid] < k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1; // return -1 if k is not found in the array
}
int main() {
    std::vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int k = 5;
    int position = binarySearch(arr, k);
    if (position != -1) {
        std::cout << "Element " << k << " is present at position " << position << std::endl;
    } else {
        std::cout << "Element " << k << " is not present in the array" << std::endl;
    }
    return 0;
}




```

```java
import java.util.*;

public class Main {
    public static int binarySearch(int[] arr, int k) {
        int low = 0;
        int high = arr.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] == k) {
                return mid;
            } else if (arr[mid] < k) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1; // return -1 if k is not found in the array
    }
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        int k = 5;
        int position = binarySearch(arr, k);
        if (position != -1) {
            System.out.println("Element " + k + " is present at position " + position);
        } else {
            System.out.println("Element " + k + " is not present in the array");
        }
    }
}


```

```python

def binary_search(arr, k):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] == k:
            return mid
        elif arr[mid] < k:
            low = mid + 1
        else:
            high = mid - 1
    return -1  # return -1 if k is not found in the array

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
k = 5
position = binary_search(arr, k)
if position != -1:
    print("Element {} is present at position {}".format(k, position))
else:
    print("Element {} is not present in the array".format(k))


```

```javascript
function binarySearch(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] === k) {
            return mid;
        } else if (arr[mid] < k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1; // return -1 if k is not found in the array
}


```

## Solution Logic:
This solution uses binary search to find the position of k in the sorted array. It starts by considering the middle element of the array. If the middle element is equal to k, it returns the position of the middle element. If the middle element is less than k, it repeats the process for the right half of the array. If the middle element is greater than k, it repeats the process for the left half of the array.




## Time Complexity

* The time complexity is $O(log(n))$ where n is the input number. 


## Space Complexity

* The auxiliary space complexity is $O(1)$ due to the only extra memory used is for temporary variables while swapping two values in Array.