---
id: check-if-it-is-possible-to-split-array
title: Check if it is Possible to Split Array
sidebar_label: 2824.Check if it is Possible to Split Array
tags:
- Array
- Dynammic Programming
- Greedy

description: "This is a solution to Check if it is Possible to Split Array on LeetCode."
---

## Problem Description

You are given an array `nums` of length n and an integer `m`. You need to determine if it is possible to split the array into n arrays of size 1 by performing a series of steps.

An array is called good if:

- The length of the array is one, or
- The sum of the elements of the array is greater than or equal to `m`.
In each step, you can select an existing array (which may be the result of previous steps) with a length of at least two and split it into two arrays, if both resulting arrays are good.

Return `true` if you can split the given array into n arrays, otherwise return `false`.

**Example 1:**
```
Input: nums = [2, 2, 1], m = 4

Output: true

Explanation:

Split [2, 2, 1] to [2, 2] and [1]. The array [1] has a length of one, and the array [2, 2] has the sum of its elements equal to 4 >= m, so both are good arrays.
Split [2, 2] to [2] and [2]. both arrays have the length of one, so both are good arrays.

```

**Example 2:**
```
Input: nums = [2, 1, 3], m = 5

Output: false

Explanation:

The first move has to be either of the following:

Split [2, 1, 3] to [2, 1] and [3]. The array [2, 1] has neither length of one nor sum of elements greater than or equal to m.
Split [2, 1, 3] to [2] and [1, 3]. The array [1, 3] has neither length of one nor sum of elements greater than or equal to m.
So as both moves are invalid (they do not divide the array into two good arrays), we are unable to split nums into n arrays of size 1.

```
**Example 3:**
```
Input: nums = [2, 3, 3, 2, 3], m = 6

Output: true

Explanation:

Split [2, 3, 3, 2, 3] to [2] and [3, 3, 2, 3].
Split [3, 3, 2, 3] to [3, 3, 2] and [3].
Split [3, 3, 2] to [3, 3] and [2].
Split [3, 3] to [3] and [3].

```
### Constraints
- `1 <= n == nums.length <= 100`
- `1 <= nums[i] <= 100`
- `1 <= m <= 200`

## Approach

1. If length of arrays is 1 or 2 then we can split the array according to condition 1 hence returns True
2. Else traverse the array and if any two adjacent elements has sum greater than or equal to m, then we can further split that two elements subarray into two subarrays each of length 1
3. This satisfies condition 1 so we will return True
4. If neither of above conditions satisfy then we will return False


  #### Python3

```python
class Solution:
    def canSplitArray(self, nums: List[int], m: int) -> bool:
        if len(nums) <= 2:
            return True
        for i in range(len(nums)-1):
            if nums[i] + nums[i+1] >= m:
                return True
        return False     
```

#### Java

```java
class Solution {
    public boolean canSplitArray(List<Integer> nums, int m) {
        boolean ans=false;
        int size=nums.size();
        if((size==1 && m>=1) || size == 2)
        {
            return true;
        }
        for(int i=0;i<size-1;i++)
        {
            int val=nums.get(i)+nums.get(i+1);
            if(val>=m)
            {
                ans=true;
            }
        }
        return ans;
    }
}
```

#### C++

```cpp
class Solution {
public:
    
    int dp[101][101];
    
    int solve(int i, int j, vector<int>& presum, vector<int>& nums, int m, int n){
        
        if(j-i<=1) return 1;
        
        if(dp[i][j]!=-1) return dp[i][j];
        
        int sum1;
        if(i>0){
            sum1 = presum[j-1] - presum[i-1];
        }
        else sum1 = presum[j-1];
        
        int sum2 = presum[j] - presum[i];
        
        int ans = 0;
        
        if(sum1>=m){
            ans |= solve(i, j-1, presum, nums, m, n);
        }
        if(sum2>=m){
            ans |= solve(i+1, j, presum, nums, m, n);
        }
        
        return dp[i][j] = ans;
        
    }
    
    bool canSplitArray(vector<int>& nums, int m) {
        int n=nums.size();
        
        vector<int> presum(n, 0);
        presum[0]=nums[0];
        for(int i=1; i<n; i++){
            presum[i] = nums[i] + presum[i-1];
        }
        memset(dp, -1, sizeof(dp));
        
        return solve(0, n-1, presum, nums, m, n);
        
    }
};
```

#### JavaScript

```js
   /**
 * @param {number[]} nums
 * @param {number} m
 * @return {boolean}
 */
var canSplitArray = function (nums, m) {
    map = new Map();
    let sum = [];
    sum.push(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        sum.push(nums[i] + sum[sum.length - 1]);
    }//will use the sum array to calculate the sum of subarrays
    return util1(nums, sum,m,0,nums.length-1);
};

let map;

/**
 * @param {number[]} nums
 * @param {number[]} sum
 * @param {number} m
 * @param {number} i
 * @param {number} j
 * @return {boolean}
 */
var util1 = function (nums, sum, m, i, j) {
    if (i == j) {
        return true;
    }
    //check if valid
    if ((i == 0 ? (sum[j]) : (sum[j] - sum[i - 1])) < m && (j - i + 1 != nums.length)) {
        return false;
    }
    let key = i + " " + j;
    if (map.has(key)) {
        return map.get(key);
    }
    for (let k = i + 1; k <= j; k++) {
        let ans1 = util1(nums, sum, m, i, k - 1);
        let ans2 = util1(nums, sum, m, k, j);
        if (ans1 && ans2) {
            map.set(key, true);
            return true;
        }
    }
    map.set(key, false);
    return false;
}
```



# References

- **LeetCode Problem:** [Check if it is Possible to Split Array](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/description/)