---
id: majority-element
title: Majority Element
sidebar_label: Majority-Element
tags:
  - Beginner
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Majority Element Problem on Geeks for Geeks."
---

This tutorial contains a complete walk-through of the Majority Element problem from the Geeks for Geeks website. It features the implementation of the solution code in two programming languages: Python and C++.

## Problem Description
Given an array `A` of `N` elements. Find the majority element in the array. A majority element in an array `A` of size `N` is an element that appears strictly more than `N/2` times in the array.

## Examples

**Example 1:**

```
Input:
N = 3 
A[] = {1,2,3} 
Output:
-1
Explanation:
Since, each element in 
{1,2,3} appears only once so there 
is no majority element.
```

**Example 2:**

```
Input:
N = 5 
A[] = {3,1,3,3,2} 
Output:
3
Explanation:
Since, 3 is present more
than N/2 times, so it is 
the majority element.
```

## Your Task
The task is to complete the function majorityElement() which returns the majority element in the array. If no majority exists, return -1.

Expected Time Complexity: $O(n)$
Expected Auxiliary Space: $O(1)$

## Constraints

`100 <= N <= 2*10^9`


## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ishiitamukherjee2004"/>
  ```py
  class Solution:
  
  	
def majority_element(A):
    count = 0
    candidate = None
    for num in A:
        if count == 0:
            candidate = num
            count = 1
        elif candidate == num:
            count += 1
        else:
            count -= 1
    return candidate

	```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ishitamukherjee2004"/>

  ```cpp
  int majorityElement(vector<int>& A) {
    int count = 0;
    int candidate;
    for (int num : A) {
        if (count == 0) {
            candidate = num;
            count = 1;
        } else if (candidate == num) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}

```

  </TabItem>  

    <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@ishiitamukherjee2004"/>
  ```java
  public int majorityElement(int[] A) {
    int count = 0;
    int candidate = 0;
    for (int num : A) {
        if (count == 0) {
            candidate = num;
            count = 1;
        } else if (candidate == num) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}


	```

  </TabItem>

    <TabItem value="Javascript" label="Javascript" default>
  <SolutionAuthor name="@ishiitamukherjee2004"/>
  ```js
 
function majorityElement(A) {
    let count = 0;
    let candidate;
    for (let num of A) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (candidate === num) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}


	```

  </TabItem>
</Tabs>




## Time Complexity

The time complexity is $O(n)$ because the operations involve a fixed number of steps regardless of the size of N:

## Space Complexity

The space complexity is $O(1)$ as well since the operations use a constant amount of extra space for storing the products and concatenated strings.