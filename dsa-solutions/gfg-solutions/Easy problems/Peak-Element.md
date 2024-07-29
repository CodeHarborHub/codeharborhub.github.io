---
id: peak-element
title: Peak Element
sidebar_label: Peak-Element
tags:
  - Modular Arithmetic
  - Algorithms
description: "This tutorial covers the solution to the Peak Element problem from the GeeksforGeeks."
---
## Problem Description
Given an `0`-indexed array of integers `arr[]` of size n, find its peak element and return it's index. An element is considered to be peak if it's value is greater than or equal to the values of its adjacent elements (if they exist).

Note: The output will be `1` if the index returned by your function is correct; otherwise, it will be `0`.

## Examples

**Example 1:**

```
Input: n = 3, arr[] = {1, 2, 3} 
Output: 1
Explanation: If the index returned is 2, then the output printed will be 1. Since arr[2] = 3 is greater than its adjacent elements, and there is no element after it, we can consider it as a peak element. No other index satisfies the same property, so answer will be printed as 0.
```

**Example 2:**

```
Input: n = 7, arr[] = {1, 1, 1, 2, 1, 1, 1}
Output: 1
Explanation: In this case there are 5 peak elements with indices as {0,1,3,5,6}. Returning any of them will give you correct answer.
```


Expected Time Complexity: O(logn)

Expected Auxiliary Space: O(1)

## Constraints

* `1 ≤ N ≤ 10^5`

## Problem Explanation

The task is to traverse the array and find the peak element.

## Code Implementation

### C++ Solution

```cpp
#include <iostream>
#include <vector>

int findPeakElement(const std::vector<int>& arr) {
    int n = arr.size();
    if (n == 1) {
        return 0;
    }
    if (arr[0] >= arr[1]) {
        return 0;
    }
    if (arr[n - 1] >= arr[n - 2]) {
        return n - 1;
    }
    for (int i = 1; i < n - 1; i++) {
        if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
            return i;
        }
    }
    return -1; // return -1 if no peak element is found
}
int main() {
    std::vector<int> arr = {1, 3, 20, 4, 1, 0};
    int peakIndex = findPeakElement(arr);
    if (peakIndex != -1) {
        std::cout << "Peak element is at index " << peakIndex << std::endl;
    } else {
        std::cout << "No peak element found" << std::endl;
    }
    return 0;
}


```

```java
import java.util.*;

public class Main {
    public static int findPeakElement(int[] arr) {
        int n = arr.length;
        if (n == 1) {
            return 0;
        }
        if (arr[0] >= arr[1]) {
            return 0;
        }
        if (arr[n - 1] >= arr[n - 2]) {
            return n - 1;
        }
        for (int i = 1; i < n - 1; i++) {
            if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
                return i;
            }
        }
        return -1; // return -1 if no peak element is found
    }
    public static void main(String[] args) {
        int[] arr = {1, 3, 20, 4, 1, 0};
        int peakIndex = findPeakElement(arr);
        if (peakIndex != -1) {
            System.out.println("Peak element is at index " + peakIndex);
        } else {
            System.out.println("No peak element found");
        }
    }
}


```

```python

def find_peak_element(arr):
    n = len(arr)
    if n == 1:
        return 0
    if arr[0] >= arr[1]:
        return 0
    if arr[n - 1] >= arr[n - 2]:
        return n - 1
    for i in range(1, n - 1):
        if arr[i] >= arr[i - 1] and arr[i] >= arr[i + 1]:
            return i
    return -1  # return -1 if no peak element is found

arr = [1, 3, 20, 4, 1, 0]
peak_index = find_peak_element(arr)
if peak_index != -1:
    print("Peak element is at index", peak_index)
else:
    print("No peak element found")


```

```javascript
function findPeakElement(arr) {
    let n = arr.length;
    if (n === 1) {
        return 0;
    }
    if (arr[0] >= arr[1]) {
        return 0;
    }
    if (arr[n - 1] >= arr[n - 2]) {
        return n - 1;
    }
    for (let i = 1; i < n - 1; i++) {
        if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
            return i;
        }
    }
    return -1; // return -1 if no peak element is found
}

let arr = [1, 3, 20, 4, 1, 0];
let peakIndex = findPeakElement(arr);
if (peakIndex !== -1) {
    console.log(`Peak element is at index ${peakIndex}`);
} else {
    console.log("No peak element found");
}

```

## Solution Logic:
This solution iterates through the array and checks each element to see if it's greater than or equal to its adjacent elements. If it finds such an element, it returns its index. If no such element is found, it returns -1.




## Time Complexity

* The time complexity is $O(n)$ where n is the input number. 


## Space Complexity

* The auxiliary space complexity is $O(1)$ due to the only extra memory used is for temporary variables while swapping two values in Array.