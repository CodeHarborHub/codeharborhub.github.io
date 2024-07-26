---
id: floor-in-sorted-array
title: Floor in a Sorted Array Problem (gfg)
sidebar_label: 0013 - Floor in a Sorted Array
tags:
  - Easy
  - Array
  - Binary Search
  - GeeksforGeeks
  - CPP
  - Python
  - DSA
description: "This tutorial covers the solution to the Floor in a Sorted Array problem from the GeeksforGeeks website, featuring implementations in Python and C++."
---

## Problem Description

Given a sorted array `arr[]` of size `n` without duplicates, and given a value `x`. Floor of `x` is defined as the largest element `k` in `arr[]` such that `k` is smaller than or equal to `x`. Find the index of `k` (0-based indexing).

## Examples

**Example 1:**

```
Input:
arr = [1, 2, 8, 10, 11, 12, 19]
x = 5
Output: 1
Explanation: The largest element less than or equal to 5 is 2, which is at index 1.
```

**Example 2:**

```
Input:
arr = [1, 2, 8, 10, 11, 12, 19]
x = 20
Output: 6
Explanation: The largest element less than or equal to 20 is 19, which is at index 6.
```

**Example 3:**

```
Input:
arr = [1, 2, 8, 10, 11, 12, 19]
x = 0
Output: -1
Explanation: No element is less than or equal to 0.
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `findFloor()` which takes the sorted array `arr[]`, its size `n`, and the value `x` as inputs and returns the index of the floor of `x`. If there is no floor, return `-1`.

Expected Time Complexity: $O(\log N)$

Expected Auxiliary Space: $O(1)$

## Constraints

- `1 ≤ n ≤ 10^7`
- `1 ≤ arr[i] ≤ 10^18`
- `0 ≤ x ≤ 10^18`

## Problem Explanation

The floor of a number `x` in a sorted array is the largest element in the array that is less than or equal to `x`. This problem can be efficiently solved using binary search due to the sorted nature of the array.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@arunimad6yuq"/>

```py
from typing import List

class Solution:
    def findFloor(self, arr: List[int], n: int, x: int) -> int:
        low, high = 0, n - 1
        floor_index = -1

        while low <= high:
            mid = (low + high) // 2

            if arr[mid] == x:
                return mid
            elif arr[mid] < x:
                floor_index = mid
                low = mid + 1
            else:
                high = mid - 1

        return floor_index

# Example usage
if __name__ == "__main__":
    solution = Solution()
    arr = [1, 2, 8, 10, 11, 12, 19]
    x = 5
    print(solution.findFloor(arr, len(arr), x))  # Expected output: 1
```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@arunimad6yuq"/>

```cpp
//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

class Solution{
public:
    int findFloor(vector<long long> v, long long n, long long x){
        int low = 0, high = n - 1;
        int floor_index = -1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (v[mid] == x) {
                return mid;
            } else if (v[mid] < x) {
                floor_index = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return floor_index;
    }
};

int main() {
    long long t;
    cin >> t;

    while(t--){
        long long n;
        cin >> n;
        long long x;
        cin >> x;

        vector<long long> v(n);

        for(long long i = 0; i < n; i++){
            cin >> v[i];
        }

        Solution obj;
        cout << obj.findFloor(v, n, x) << endl;
    }

    return 0;
}
// } Driver Code Ends
```

  </TabItem>
</Tabs>

## Example Walkthrough

For the array `[1, 2, 8, 10, 11, 12, 19]` and `x = 5`:

1. Start with the full array range.
2. Compare the middle element to `x`.
3. Adjust the search range based on whether the middle element is less than or greater than `x`.
4. Continue until the search range is exhausted.
5. The index of the largest element less than or equal to `x` is returned.

For `x = 20`:

1. The entire array is scanned.
2. The largest element less than or equal to 20 is 19 at index 6.

For `x = 0`:

1. No element is less than or equal to 0.
2. Return -1.

## Solution Logic:

1. Perform a binary search to find the largest element less than or equal to `x`.
2. Maintain a variable to keep track of the floor index during the search.
3. Return the floor index at the end of the search.

## Time Complexity

- The time complexity of the binary search is $O(\log N)$.

## Space Complexity

- The auxiliary space complexity is $O(1)$.

## References

- **gfg Problem:** [gfg Problem](https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)
