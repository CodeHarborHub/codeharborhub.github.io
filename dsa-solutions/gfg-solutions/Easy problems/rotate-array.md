---
id: rotate-array
title: Rotate Array
sidebar_label: 0021 - Rotate Array
tags:
  - Easy
  - Arrays
  - Rotation
  - GeeksforGeeks
  - CPP
  - DSA
description: "This tutorial covers the solution to the Rotate Array problem from the GeeksforGeeks website, featuring implementations in C++."
---
## Problem Description

Given an unsorted array `arr[]` of size `n`. Rotate the array to the left (counter-clockwise direction) by `d` steps, where `d` is a positive integer.

## Examples

**Example 1:**

```
Input:
n = 5, d = 2
arr = [1, 2, 3, 4, 5]
Output: [3, 4, 5, 1, 2]
Explanation: After rotating the array by 2 positions to the left, the array becomes [3, 4, 5, 1, 2].
```

**Example 2:**

```
Input:
n = 7, d = 3
arr = [2, 4, 6, 8, 10, 12, 14]
Output: [8, 10, 12, 14, 2, 4, 6]
Explanation: After rotating the array by 3 positions to the left, the array becomes [8, 10, 12, 14, 2, 4, 6].
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `rotateArr()` which takes the array `arr`, integer `d` and integer `n`, and rotates the array by `d` elements to the left.

Expected Time Complexity: $O(n)$

Expected Auxiliary Space: $O(1)$

## Constraints

* `1 ≤ n ≤ 10^7`
* `1 ≤ d ≤ n`
* `0 ≤ arr[i] ≤ 10^5`

## Problem Explanation

The task is to rotate an array to the left by `d` elements. Rotating an array means shifting all elements to the left by a given number of positions, and the elements that fall off the start of the array reappear at the end.

## Code Implementation

### C++ Solution

```cpp
//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution{
    public:
    //Function to rotate an array by d elements in counter-clockwise direction. 
    void rotateArr(int arr[], int d, int n){
        // Edge case: if d is 0 or d equals n, array remains unchanged
        if(d == 0 || d == n)
            return;

        // Normalize d if it's greater than n
        d = d % n;

        // Reverse the first d elements
        reverse(arr, arr + d);

        // Reverse the remaining n-d elements
        reverse(arr + d, arr + n);

        // Reverse the entire array
        reverse(arr, arr + n);
    }
};

//{ Driver Code Starts.

int main() {
	int t;
	//taking testcases
	cin >> t;
	
	while(t--){
	    int n, d;
	    
	    //input n and d
	    cin >> n >> d;
	    
	    int arr[n];
	    
	    //inserting elements in the array
	    for(int i = 0; i < n; i++){
	        cin >> arr[i];
	    }
	    Solution ob;
	    //calling rotateArr() function
	    ob.rotateArr(arr, d, n);
	    
	    //printing the elements of the array
	    for(int i =0; i < n; i++){
	        cout << arr[i] << " ";
	    }
	    cout << endl;
	}
	return 0;
}
// } Driver Code Ends
```

## Example Walkthrough

**Example 1:**

For the input:
```
n = 5, d = 2
arr = [1, 2, 3, 4, 5]
```
1. Rotate the first `d` elements: [2, 1, 3, 4, 5]
2. Rotate the remaining `n-d` elements: [2, 1, 5, 4, 3]
3. Rotate the entire array: [3, 4, 5, 1, 2]

**Example 2:**

For the input:
```
n = 7, d = 3
arr = [2, 4, 6, 8, 10, 12, 14]
```
1. Rotate the first `d` elements: [6, 4, 2, 8, 10, 12, 14]
2. Rotate the remaining `n-d` elements: [6, 4, 2, 14, 12, 10, 8]
3. Rotate the entire array: [8, 10, 12, 14, 2, 4, 6]

## Solution Logic:

1. Use three reverse operations:
    - Reverse the first `d` elements.
    - Reverse the remaining `n-d` elements.
    - Reverse the entire array.
2. This approach ensures that the elements are shifted in place with an $O(n)$ time complexity and $O(1)$ auxiliary space.

## Time Complexity

* The time complexity is $O(n)$ as the array is processed three times.

## Space Complexity

* The auxiliary space complexity is $O(1)$ as no additional storage is used.

## References

- **GeeksforGeeks Problem:** [Rotate Array](https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1?page=1&difficulty=Easy&sortBy=submissions)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)
