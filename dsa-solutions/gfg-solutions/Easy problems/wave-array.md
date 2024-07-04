---
id: wave-array
title: Wave Array
sidebar_label: 0023 - Wave Array
tags:
  - Easy
  - Array
  - GeeksforGeeks
  - CPP
  - DSA
description: "This tutorial covers the solution to the Wave Array problem from the GeeksforGeeks website, featuring implementations in C++."
---
## Problem Description

Given a sorted array arr[] of distinct integers, sort the array into a wave-like array in place. In other words, arrange the elements into a sequence such that  `arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....` 
If there are multiple solutions, find the lexicographically smallest one.

Note: The given array is sorted in ascending order, and you don't need to return anything to change the original array.

## Examples

**Example 1:**

```
Input:
arr[] = {1, 2, 3, 4, 5}

Output:
2 1 4 3 5
```

**Example 2:**

```
Input:
arr[] = {2, 4, 7, 8, 9, 10}

Output:
4 2 8 7 10 9
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `convertToWave()` which takes the array and its size as parameters and modifies the array into a wave-like array.

Expected Time Complexity: O(n)

Expected Auxiliary Space: O(1)

## Constraints

* `1 ≤ n ≤ 10^6`
* `0 ≤ arr[i] ≤ 10^6`

## Problem Explanation

To convert the array into a wave-like array, we can follow these steps:

1. Iterate over the array with a step of 2.
2. Swap every adjacent pair of elements.

## Code Implementation

### C++ Solution

```cpp
//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution{
    public:
    // arr: input array
    // n: size of array
    // Function to sort the array into a wave-like array.
    void convertToWave(int n, vector<int>& arr){
        for (int i = 0; i < n - 1; i += 2) {
            swap(arr[i], arr[i + 1]);
        }
    }
};

//{ Driver Code Starts.

int main() {
    int t, n;
    cin >> t; // Input testcases
    while (t--) // While testcases exist
    {
        cin >> n; // Input size of array
        vector<int> a(n); // Declare vector of size n
        for (int i = 0; i < n; i++)
            cin >> a[i]; // Input elements of array
        
        Solution ob;
        ob.convertToWave(n, a);

        for (int i = 0; i < n; i++)
            cout << a[i] << " "; // Print array
            
        cout << endl;
    }
}
// } Driver Code Ends
```

## Example Walkthrough

**Example 1:**

For the input:
```
arr[] = {1, 2, 3, 4, 5}
```
1. Start with the first pair (1, 2) and swap them to get {2, 1, 3, 4, 5}.
2. Move to the next pair (3, 4) and swap them to get {2, 1, 4, 3, 5}.
3. There are no more pairs to process.

The result is [2, 1, 4, 3, 5].

## Solution Logic:

1. Iterate through the array with a step of 2.
2. For each pair of adjacent elements, swap them.

## Time Complexity

* The time complexity is $O(n)$ where $n$ is the number of elements in the array, as we only iterate through the array once.

## Space Complexity

* The auxiliary space complexity is $O(1)$ as we are modifying the array in place.

## References

- **GeeksforGeeks Problem:** [Wave Array](https://www.geeksforgeeks.org/problems/wave-array-1587115621/1?page=2&difficulty=Easy&sortBy=submissions)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)
