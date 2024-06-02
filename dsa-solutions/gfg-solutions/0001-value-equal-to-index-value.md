---
id: value-equal-to-index-value
title: Value Equal to Index Value Problem (Geeks for Geeks)
sidebar_label: 0001 - Value Equal to Index Value 
tags:
  - Beginner
  - Index Values
  - Array
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Value Equal to Index Value problem on Geeks for Geeks."
---

## Problem Description

Given an array Arr of N positive integers. Your task is to find the elements whose value is equal to that of its index value (Consider 1-based indexing).

Note: There can be more than one element in the array which have the same value as its index. You need to include every such element's index. Follows 1-based indexing of the array.

## Examples

Example 1:

```
Input:
N = 5
Arr[] = {15, 2, 45, 12, 7}
Output: 2
Explanation: Only Arr[2] = 2 exists here.
```

Example 2:

```
Input: 
N = 1
Arr[] = {1}
Output: 1
Explanation: Here Arr[1] = 1 exists.
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function valueEqualToIndex() which takes the array of integers arr[] and n as parameters and returns an array of indices where the given conditions are satisfied. When there is no such element exists then return an empty array of length 0. For C users, you need to modify the array(arr), in place such that the indices not in the final answer should be marked 0.

## Constraints

* `1 ≤ N ≤ 105`
* `1 ≤ Arr[i] ≤ 106`

## Problem Explanation

The problem involves finding elements in an array whose values match their index positions, considering 1-based indexing. This means if an element's value matches its position in the array when counting from 1 (not 0), it should be included in the result.

Example:

* Given an array [15, 2, 45, 12, 7]:
    - At 1-based index 1, the value is 15 (not equal to 1)
    - At 1-based index 2, the value is 2 (equal to 2)
    - At 1-based index 3, the value is 45 (not equal to 3)
    - At 1-based index 4, the value is 12 (not equal to 4)
    - At 1-based index 5, the value is 7 (not equal to 5)

The only element that matches its index is 2 at index 2.

## Python Solution Code

```py
class Solution:
    
    def valueEqualToIndex(self, arr, n):
        result = []
        for i in range(n):
            if (arr[i] == i + 1):
                result.append(arr[i]);
        return result
```

## C++ Solution Code

```cpp
class Solution {
    public:
    	vector<int> valueEqualToIndex(int arr[], int n) {
    	    vector<int> result;
    	    for(int i = 0; i < n; i++) {
    	        if(arr[i] == i + 1)
    	            result.push_back(arr[i]);
    	    } return result;
        }
};
```

## Solution Logic

1. Initialize an empty result list: This will store the elements that satisfy the condition.
2. Iterate through the array: Use a loop to go through each element in the array.
3. Check the condition: For each element, check if the element's value matches its 1-based index. Since array indexing typically starts at 0 in most programming languages, you adjust by adding 1 to the index.
4. Store matching elements: If an element's value matches its 1-based index, add it to the result list.
5. Return the result list: After checking all elements, return the list of elements that met the condition.

## Example Walkthrough

For the array `[15, 2, 45, 12, 7]` with length `n = 5`:

* Initialize an empty list: `result = []`
* Loop through the array with indices from 0 to 4:
    - Check element at index 0 (1-based index 1): 15 ≠ 1
    - Check element at index 1 (1-based index 2): 2 = 2 (add to result)
    - Check element at index 2 (1-based index 3): 45 ≠ 3
    - Check element at index 3 (1-based index 4): 12 ≠ 4
    - Check element at index 4 (1-based index 5): 7 ≠ 5

Final `result` list: `[2]`

## Time Complexity

The time complexity of this solution is $O(N)$ where N is the number of elements in the array. This is because the solution involves a single pass through the array to check each element against its 1-based index.

## Space Complexity

The space complexity is $O(1)$ for the input space, and $O(K)$ for the output space, where K is the number of elements matching the condition. In the worst case, if all elements match, the space used by the result list will be $O(N)$.