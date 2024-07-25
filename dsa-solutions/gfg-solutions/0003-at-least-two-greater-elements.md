---
id: at-least-two-greater-elements
title: At Least Two Greater Elements Problem (Geeks for Geeks)
sidebar_label: 0003 - At Least Two Greater Elements 
tags:
  - Beginner
  - Array
  - Slicing
  - Sort
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the At Least Two Greater Elements problem on Geeks for Geeks."
---

This tutorial contains a complete walk-through of the At Least Two Greater Elements problem from the Geeks for Geeks website. It features the implementation of the solution code in two programming languages: Python and C++.

## Problem Description

Given an array of N distinct elements, the task is to find all elements in array except two greatest elements in sorted order.

## Examples

**Example 1:**

```
Input : a[] = {2, 8, 7, 1, 5}
Output : 1 2 5 
Explanation : The output three elements have two or more greater elements.   
```

**Example 2:**

```
Input : a[] = {7, -2, 3, 4, 9, -1}
Output : -2 -1 3 4

```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `findElements()` which takes the array `A[]` and its size N as inputs and return the vector sorted values denoting the elements in array which have at-least two greater elements than themselves.


Expected Time Complexity: $O(N*Log(N)$
Expected Auxiliary Space: $O(N)$

## Constraints

* `3 ≤ N ≤ 10^5`
* `-10^6 ≤ Ai ≤ 10^6`

## Problem Explanation

The problem is to find all elements in an array except the two greatest elements and return them in sorted order. In simpler terms, you want to remove the two largest elements from the array and sort the remaining elements.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@iamanolive"/>
  ```py
  class Solution:
    def findElements(self, a, n):
        a.sort(); return a[0 : -2]
  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@iamanolive"/>

  ```cpp
  class Solution {
    public:
        vector<int> findElements(int a[], int n) {
            sort(a, a + n);
            vector <int> result;
            for (int i = 0; i < n - 2; i++)
                result.push_back(a[i]);
            return result;
        }
};
```
  </TabItem>  
  <TabItem value="Java" label="java">
  <SolutionAuthor name="@ImmidiSivani"/>
  ```Java
  class Solution {
    public long[] findElements( long a[], long n)
    {
        // Your code goes here
        long[] ans=new long[a.length-2];
        Arrays.sort(a);
        for(int i=0;i<a.length-2;i++){
            ans[i]=a[i];
        }
        return ans;
    }
  }
  ```
  </TabItem>
</Tabs>


## Example Walkthrough

For the array `[2, 8, 7, 1, 5]`:

1. The two greatest elements are 8 and 7.
2. Removing these two, the remaining elements are `[2, 1, 5]`.
3. Sorting these remaining elements gives `[1, 2, 5]`.

For the array `[7, −2, 3, 4, 9, −1]`:
1. The two greatest elements are 9 and 7
2. Removing these two, the remaining elements are `[−2, 3, 4, −1]`.
3. Sorting these remaining elements gives `[−2, −1, 3, 4]`.


## Solution Logic:

1. Sort the Array: First, sort the entire array.
2. Remove the Last Two Elements: After sorting, the last two elements will be the greatest. Removing these will leave us with the elements that have at least two greater elements.
3. Return the Result: The remaining sorted elements are the desired result.

## Time Complexity

* Sorting the Array: The primary operation is sorting the array, which has a time complexity of $O(N*Log(N)$, where N is the number of elements in the array.
* Slicing the Array: Extracting the elements excluding the last two elements has a time complexity of $O(1)$.


## Space Complexity

Auxiliary Space: The auxiliary space complexity is $O(N)$ because the sorting algorithm typically requires additional space proportional to the size of the input array.


## References

- **Geeks for Geeks Problem:** [Geeks for Geeks Problem](https://www.geeksforgeeks.org/problems/at-least-two-greater-elements4625/1?page=1&difficulty=School&sortBy=difficulty)
- **Solution Link:** [At Least Two Greater Elements on Geeks for Geeks](https://www.geeksforgeeks.org/problems/at-least-two-greater-elements4625/1?page=1&difficulty=School&sortBy=difficulty)
- **Authors LeetCode Profile:** [Anoushka](https://www.geeksforgeeks.org/user/iamanolive/)
