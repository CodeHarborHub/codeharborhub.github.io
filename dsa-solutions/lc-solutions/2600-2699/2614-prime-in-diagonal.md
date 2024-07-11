---
id: prime-in-diagonal
title: Prime In Diagonal
sidebar_label: 2614. Prime In Diagonal
tags:
- Array
- Math
- Matrix
- Number Theory
description: "Solution to Leetcode 2614. Prime In Diagonal"
---

## Problem Description

You are given a 0-indexed two-dimensional integer array nums.

Return the largest prime number that lies on at least one of the diagonals of nums. In case, no prime is present on any of the diagonals, return 0.
 
### Examples

**Example 1:**

```
Input: nums = [[1,2,3],[5,6,7],[9,10,11]]
Output: 11
Explanation: The numbers 1, 3, 6, 9, and 11 are the only numbers present on at least one of the diagonals. Since 11 is the largest prime, we return 11.
```

**Example 2:**

```
Input: nums = [[1,2,3],[5,17,7],[9,11,10]]
Output: 17
Explanation: The numbers 1, 3, 9, 10, and 17 are all present on at least one of the diagonals. 17 is the largest prime, so we return 17.

```



### Constraints
- `1 <= nums.length <= 300`
- `nums.length == numsi.length`
- `1 <= nums[i][j] <= 4*106`

### Approach 
We use a helper function is_prime() to check if a number is prime or not. We then iterate over the main and secondary diagonal of the matrix using a for loop and check if each element on the diagonal is prime or not. If it is prime, we compare it with the largest prime found so far and update the largest prime accordingly.

### Complexity

Time complexity: $O(n^2)$
Space complexity: $O(1)$

### Solution

#### Code in Different Languages

#### C++

 ```cpp
class Solution {
public:
    bool isPrime(int n){
      if(n <= 1) return false;
      for (int i = 2; i * i <= n; i++){
        if (n % i == 0)return false;
      }
      return true;
    }
    int diagonalPrime(vector<vector<int>>& v) {
      int n = v.size(), ans = INT_MIN;
      for(int i = 0; i < n; i++){
        if(isPrime(v[i][i])) ans = max(ans, v[i][i]);
        if(isPrime(v[i][n - i - 1])) ans = max(ans, v[i][n - i - 1]);
      }
      return ans == INT_MIN ? 0 : ans;
    }
};
 ```

#### JAVA

```java
class Solution {
    public int diagonalPrime(int[][] nums) {
        int maxi=0;
        for(int i=0;i<nums.length;i++)
        {
            if(prime(nums[i][i]))
            {
                maxi=Math.max(maxi,nums[i][i]);
            }
            if(prime(nums[nums.length-i-1][i]))
            {
                maxi=Math.max(maxi,nums[nums.length-i-1][i]);
            }
        }
        return maxi;
    }
    public boolean prime(int n)
    {
        if(n<2)
        {
            return false;
        }
        for(int i=2;i<=Math.sqrt(n);i++)
        {
            if(n%i==0)
            {
                return false;
            }
        }
        return true;
    }
}
```

#### PYTHON

```python
class Solution:
    def diagonalPrime(self, nums: List[List[int]]) -> int:
        def is_prime(num):
            if num <= 1:
                return False
            for i in range(2, int(num ** 0.5) + 1):
                if num % i == 0:
                    return False
            return True

        largest_prime = 0
        n = len(nums)
        for i in range(n):
            if is_prime(nums[i][i]):
                largest_prime = max(largest_prime, nums[i][i])
            if is_prime(nums[i][n-i-1]):
                largest_prime = max(largest_prime, nums[i][n-i-1])
        return largest_prime
        
```



### Complexity Analysis

- Time Complexity: $O(n^2)$ 

- Space Complexity: $O(1)$ 

### References

- **LeetCode Problem**: Prime In Diagonal