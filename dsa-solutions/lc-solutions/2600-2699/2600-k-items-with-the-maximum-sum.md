---
id: k-items-with-the-maximum-sum
title: K Items With the Maximum Sum
sidebar_label: 2600. K Items With the Maximum Sum
tags:
- Math
- Greedy
description: "Solution to Leetcode 2600. K Items With the Maximum Sum"
---

## Problem Description

There is a bag that consists of items, each item has a number 1, 0, or -1 written on it.

You are given four non-negative integers numOnes, numZeros, numNegOnes, and k.

The bag initially contains:
- numOnes items with 1s written on them.
- numZeroes items with 0s written on them.
- numNegOnes items with -1s written on them.


We want to pick exactly k items among the available items. Return the maximum possible sum of numbers written on the items.
 

### Examples

**Example 1:**

```
Input: numOnes = 3, numZeros = 2, numNegOnes = 0, k = 2
Output: 2
Explanation: We have a bag of items with numbers written on them {1, 1, 1, 0, 0}. We take 2 items with 1 written on them and get a sum in a total of 2.
It can be proven that 2 is the maximum possible sum.
```

**Example 2:**

```
Input: numOnes = 3, numZeros = 2, numNegOnes = 0, k = 4
Output: 3
Explanation: We have a bag of items with numbers written on them {1, 1, 1, 0, 0}. We take 3 items with 1 written on them, and 1 item with 0 written on it, and get a sum in a total of 3.
It can be proven that 3 is the maximum possible sum.

```



### Constraints
- `0 <= numOnes, numZeros, numNegOnes <= 50`
- `0 <= k <= numOnes + numZeros + numNegOnes`

### Approach 
To get the maximum sum possible we first need to select number of 1's and then if k is still more then count of 1's then we need to select some 0's which will add 0 to our sum, after selecting 1's and 0's if k is still positive then we need to select -1's which will reduce our sum.

### Complexity

Time complexity: $O(1)$
Space complexity: $O(1)$

### Solution

#### Code in Different Languages

#### C++

 ```cpp
class Solution {
public:
    int kItemsWithMaximumSum(int numOnes, int numZeros, int numNegOnes, int k) {
            int total=0;
			
            int select=min(numOnes,k);       //selecting ones 
			total+=select;                            //adding to sum
            k-=select;                                  // reducing k
        
            select=min(numZeros,k);          // selecting 0's if k is non zero otherwise select will be 0
            k-=select;                                 // reducing k if k is non zero
        
            select=min(numNegOnes,k);  // selecting -1's if k is non zero otherwise select will be 0
            total-=select;                          //reducing the score by select because we selected select no of -1's in case of k =0 we will reduce 0
        
            return total;
    }
};
 ```

#### JAVA

```java
class Solution {
    public int kItemsWithMaximumSum(int numOnes, int numZeros, int numNegOnes, int k) {
        
        int max = 0; // the maximum sum
        
        // while we still need to select k numbers
        while(k > 0){
            
            // if we have at least one 1 left, add it to the sum
            if(numOnes > 0){
                numOnes--;
                max++;
                k--;
            }
            // if we have at least one 0 left, skip it
            else if(numZeros > 0){
                numZeros--;
                k--;
            }
            // if we have at least one -1 left, add it to the sum
            else{
                numNegOnes--;
                max--;
                k--;
            }   
        } 
        // if we did not select k numbers, return the maximum sum anyway
        return max;
    }
}
```

#### PYTHON

```python
class Solution:
    def kItemsWithMaximumSum(self, numOnes: int, numZeros: int, numNegOnes: int, k: int) -> int:
        if numOnes > k:
            return k
        rem = k - numOnes - numZeros
        if rem <= 0:
            return numOnes
        return numOnes - rem
        
```



### Complexity Analysis

- Time Complexity: $O(1)$ 

- Space Complexity: $O(1)$ 

### References

- **LeetCode Problem**: K Items With the Maximum Sum