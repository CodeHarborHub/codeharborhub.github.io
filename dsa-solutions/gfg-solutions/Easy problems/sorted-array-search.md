---
id: sorted-arrray-search
title: Sorted Array Search
sidebar_label: Sorted-Array-Search
tags:
  - Searching
  - Binary Search
  - Algorithms
description: "This tutorial covers the solution to the Sorted Array Search problem from the GeeksforGeeks website."
---
## Problem Description
Given an array `arr[]` sorted in ascending order of size `N` and an integer `K`. Check if `K` is present in the array or not.

## Examples

**Example 1:**

```
Input:
N = 5, K = 6
arr[] = {1,2,3,4,6}
Output: 1
Exlpanation: Since, 6 is present in 
the array at index 4 (0-based indexing),
output is 1.
```

**Example 2:**

```
Input:
N = 5, K = 2
arr[] = {1,3,4,5,6}
Output: -1
Exlpanation: Since, 2 is not present 
in the array, output is -1.
```

## Your Task

You don't need to read input or print anything. Complete the function searchInSorted() which takes the sorted array arr[], its size N and the element K as input parameters and returns 1 if K is present in the array, else it returns -1. 



Expected Time Complexity: O(Log N)

Expected Auxiliary Space: O(1)

## Constraints

* `1 <= arr[i] <= 10^6`

## Problem Explanation

The task is to traverse the array and find the reuired element.

## Code Implementation

### C++ Solution

```cpp
class Solution{
    public:
    // Function to find element in sorted array
    // arr: input array
    // N: size of array
    // K: element to be searche
    int searchInSorted(int arr[], int N, int K) 
    { 
       int cnt = 0;
       for(int i=0; i<N; i++){
           if(arr[i]==K) {
           cnt = 1;
           break;
               
           }
       }
       if(cnt==1) return 1;
       return -1;
       
    }
};
```

```java
public class Solution {
    public int searchInSorted(int[] arr, int N, int K) {
        for (int i = 0; i < N; i++) {
            if (arr[i] == K) {
                return 1;
            }
        }
        return -1;
    }
}

```

```python

class Solution:
    def searchInSorted(self, arr, N, K):
        for i in range(N):
            if arr[i] == K:
                return 1
        return -1

```

```javascript
class Solution {
    searchInSorted(arr, N, K) {
        for (let i = 0; i < N; i++) {
            if (arr[i] === K) {
                return 1;
            }
        }
        return -1;
    }
}

```

```typescript
class Solution {
    searchInSorted(arr: number[], N: number, K: number): number {
        for (let i = 0; i < N; i++) {
            if (arr[i] === K) {
                return 1;
            }
        }
        return -1;
    }
}
```

## Solution Logic:

1. Iterate through the sorted array from the beginning to the end.
2. Check if the current element is equal to the target element (K).
3. If it is, return 1 to indicate that the element is found.
4. If the loop completes without finding the element, return -1 to indicate that the element is not found.


## Time Complexity

* The time complexity is $O(N)$, the algorithm iterates through the array once, where N is the size of the array.Each iteration performs a constant amount of work, so the time complexity is linear.


## Space Complexity

* The auxiliary space complexity is $O(1)$ due to the algorithm only uses a fixed amount of space to store the indices and the target element.
