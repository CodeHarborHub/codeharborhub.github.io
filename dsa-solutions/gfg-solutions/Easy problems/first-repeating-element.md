---
id: first-repeating-element
title: First Repeating Element
sidebar_label: 0026 - First Repeating Element
tags:
  - Easy
  - Array
  - GeeksforGeeks
  - CPP
  - DSA
description: "This tutorial covers the solution to the First Repeating Element problem from the GeeksforGeeks website, featuring implementations in C++."
---
## Problem Description

Given an array `arr[]` of size `n`, find the first repeating element. The element should occur more than once and the index of its first occurrence should be the smallest.

**Note:** The position you return should be according to 1-based indexing.

## Examples

**Example 1:**

```
Input:
arr[] = {1, 5, 3, 4, 3, 5, 6}

Output:
2

Explanation:
5 is the first element that repeats, and its first occurrence is at index 2.
```

**Example 2:**

```
Input:
arr[] = {1, 2, 3, 4}

Output:
-1

Explanation:
There are no repeating elements, so the output is -1.
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `firstRepeated()` which takes the array and its size as parameters and returns the position of the first repeating element.

Expected Time Complexity: O(n)

Expected Auxiliary Space: O(n)

## Constraints

* `1 ≤ n ≤ 10^6`
* `0 ≤ arr[i] ≤ 10^6`

## Problem Explanation

To find the first repeating element, we can use a hashmap to store the count of each element and another hashmap to store the first occurrence of each element. This way, we can efficiently determine the first repeating element and its position.

## Code Implementation

### C++ Solution

```cpp
//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution {
  public:
    // Function to return the position of the first repeating element.
    int firstRepeated(vector<int> &arr) {
        unordered_map<int, int> elementCount;
        unordered_map<int, int> firstOccurrence;
        
        for (int i = 0; i < arr.size(); i++) {
            if (elementCount.find(arr[i]) == elementCount.end()) {
                elementCount[arr[i]] = 1;
                firstOccurrence[arr[i]] = i + 1;
            } else {
                elementCount[arr[i]]++;
            }
        }
        
        int minIndex = INT_MAX;
        
        for (int i = 0; i < arr.size(); i++) {
            if (elementCount[arr[i]] > 1) {
                if (firstOccurrence[arr[i]] < minIndex) {
                    minIndex = firstOccurrence[arr[i]];
                }
            }
        }
        
        if (minIndex == INT_MAX) {
            return -1;
        }
        
        return minIndex;
    }
};

//{ Driver Code Starts.
int main() {

    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        vector<int> arr;
        string input;
        getline(cin, input); // Read the entire line for the array elements
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number);
        }

        Solution ob;
        cout << ob.firstRepeated(arr) << endl;
    }

    return 0;
}
// } Driver Code Ends
```

## Example Walkthrough

**Example 1:**

For the input:
```
arr[] = {1, 5, 3, 4, 3, 5, 6}
```

1. Create a hashmap `elementCount` to store the count of each element and another hashmap `firstOccurrence` to store the first occurrence index of each element.
2. Traverse the array and populate the `elementCount` and `firstOccurrence` hashmaps.
3. Find the first repeating element by checking the minimum index in `firstOccurrence` where the count of the element in `elementCount` is greater than 1.

The result is 2, as 5 is the first repeating element with the smallest index.

## Solution Logic:

1. Use a hashmap to store the count of each element.
2. Use another hashmap to store the first occurrence index of each element.
3. Traverse the array to populate the hashmaps.
4. Find the first repeating element by checking the minimum index in `firstOccurrence` where the count of the element in `elementCount` is greater than 1.

## Time Complexity

* The time complexity is \(O(n)\) where \(n\) is the number of elements in the array, as we only iterate through the array once.

## Space Complexity

* The auxiliary space complexity is \(O(n)\) as we use two hashmaps to store the counts and first occurrences.

## References

- **GeeksforGeeks Problem:** [First Repeating Element](https://www.geeksforgeeks.org/problems/first-repeating-element4018/1?page=2&difficulty=Easy&sortBy=submissions)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)
