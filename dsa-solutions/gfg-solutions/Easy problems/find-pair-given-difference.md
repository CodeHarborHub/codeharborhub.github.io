---
id: find-pair-given-difference
title: Find Pair Given Difference
sidebar_label: 0029 - Find Pair Given Difference
tags:
  - Easy
  - Array
  - GeeksforGeeks
  - CPP
  - DSA
description: "This tutorial covers the solution to the Find Pair Given Difference problem from the GeeksforGeeks website, featuring implementations in C++."
---
## Problem Description

Given an array `arr[]` of size `n` and an integer `x`, return `1` if there exists a pair of elements in the array whose absolute difference is `x`, otherwise, return `-1`.

## Examples

**Example 1:**

```
Input:
n = 5
arr[] = {1, 8, 30, 40, 100}
x = 60

Output:
1

Explanation:
The pair (100, 40) has an absolute difference of 60.
```

**Example 2:**

```
Input:
n = 3
arr[] = {5, 10, 3}
x = 8

Output:
-1

Explanation:
There is no pair with an absolute difference of 8.
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `findPair()` which takes the array and its size and an integer `x` as parameters and returns `1` if there exists a pair with an absolute difference of `x`, otherwise, return `-1`.

Expected Time Complexity: O(N)

Expected Auxiliary Space: O(N)

## Constraints

* `1 ≤ n ≤ 10^5`
* `1 ≤ arr[i] ≤ 10^5`
* `0 ≤ x ≤ 10^5`

## Problem Explanation

To find if there exists a pair with the given difference `x`, we can use a set to store the elements as we iterate through the array. For each element `arr[i]`, we check if `(arr[i] + x)` or `(arr[i] - x)` exists in the set. If either condition is true, we return `1`. If we complete the iteration without finding any such pair, we return `-1`.

## Code Implementation

### C++ Solution

```cpp
// Initial template for C++
#include <bits/stdc++.h>
using namespace std;

class Array {
  public:
    template <class T>
    static void input(vector<T> &A, int n) {
        for (int i = 0; i < n; i++) {
            scanf("%d ", &A[i]);
        }
    }

    template <class T>
    static void print(vector<T> &A) {
        for (int i = 0; i < A.size(); i++) {
            cout << A[i] << " ";
        }
        cout << endl;
    }
};

class Solution {
  public:
    int findPair(int n, int x, vector<int> &arr) {
        unordered_set<int> s;
        for (int i = 0; i < n; i++) {
            if (s.find(arr[i] + x) != s.end() || s.find(arr[i] - x) != s.end()) {
                return 1;
            }
            s.insert(arr[i]);
        }
        return -1;
    }
};

// Driver code
int main() {
    int t;
    scanf("%d ", &t);
    while (t--) {
        int n;
        scanf("%d", &n);

        int x;
        scanf("%d", &x);

        vector<int> arr(n);
        Array::input(arr, n);

        Solution obj;
        int res = obj.findPair(n, x, arr);

        cout << res << endl;
    }
    return 0;
}
```

## Example Walkthrough

**Example 1:**

For the input:
```
n = 5
arr[] = {1, 8, 30, 40, 100}
x = 60
```

1. Initialize an empty set `s`.
2. Iterate through the array:
    - For `arr[0] = 1`: add 1 to the set.
    - For `arr[1] = 8`: add 8 to the set.
    - For `arr[2] = 30`: add 30 to the set.
    - For `arr[3] = 40`: add 40 to the set.
    - For `arr[4] = 100`: check if `100 - 60 = 40` is in the set (it is).
3. Return `1` as the pair `(100, 40)` has an absolute difference of 60.

**Example 2:**

For the input:
```
n = 3
arr[] = {5, 10, 3}
x = 8
```

1. Initialize an empty set `s`.
2. Iterate through the array:
    - For `arr[0] = 5`: add 5 to the set.
    - For `arr[1] = 10`: add 10 to the set.
    - For `arr[2] = 3`: add 3 to the set.
3. Return `-1` as no pair with an absolute difference of 8 is found.

## Solution Logic:

1. Use a set to store the elements.
2. For each element, check if `(arr[i] + x)` or `(arr[i] - x)` exists in the set.
3. Return `1` if a pair is found, otherwise return `-1`.

## Time Complexity

* The time complexity is $O(n)$ where $(n)$ is the number of elements in the array.

## Space Complexity

* The auxiliary space complexity is $O(n)$ as we use a set to store the elements.

## References

- **GeeksforGeeks Problem:** [Find pair given difference](https://www.geeksforgeeks.org/problems/find-pair-given-difference1559/1?page=2&difficulty=Easy&sortBy=submissions)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)
