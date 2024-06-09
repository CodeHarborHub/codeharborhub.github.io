---
id: maximum-product-subarray
title: Maximum Product Subarray
sidebar_label: 0152 Maximum Product Subarray
tags:
  - Array
  - Dynamic Programming
  - LeetCode
  - Python
  - Java
  - C++
description: "This is a solution to the Maximum Product Subarray problem on LeetCode."
---

## Problem Description

Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

### Examples

**Example 1:**

```
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
```

**Example 2:**

```
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
```

### Constraints

- $1 <= nums.length <= 2 * 10**4$
- $10 <= nums[i] <= 10$
- The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


#### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@mahek0620"/>
   ```python
    class Solution(object):
    def maxProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0
        
        max_prod = nums[0]
        min_prod = nums[0]
        result = max_prod
        
        for num in nums[1:]:
            if num < 0:
                max_prod, min_prod = min_prod, max_prod
            
            max_prod = max(num, max_prod * num)
            min_prod = min(num, min_prod * num)
            
            result = max(result, max_prod)
        
        return result



    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@mahek0620"/>
   ```java
    class Solution {
    public int maxProduct(int[] nums) {
        if (nums.length == 0)
            return 0;
        
        int maxProd = nums[0];
        int minProd = nums[0];
        int result = maxProd;
        
        for (int i = 1; i < nums.length; ++i) {
            if (nums[i] < 0) {
                int temp = maxProd;
                maxProd = minProd;
                minProd = temp;
            }
            
            maxProd = Math.max(nums[i], maxProd * nums[i]);
            minProd = Math.min(nums[i], minProd * nums[i]);
            
            result = Math.max(result, maxProd);
        }
        
        return result;
    }
}


    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@mahek0620"/>
   ```cpp
   #include <vector>
#include <algorithm>

class Solution {
public:
    int maxProduct(vector<int>& nums) {
        if (nums.empty())
            return 0;
        
        int max_prod = nums[0];
        int min_prod = nums[0];
        int result = max_prod;
        
        for (int i = 1; i < nums.size(); ++i) {
            if (nums[i] < 0)
                std::swap(max_prod, min_prod);
            
            max_prod = std::max(nums[i], max_prod * nums[i]);
            min_prod = std::min(nums[i], min_prod * nums[i]);
            
            result = std::max(result, max_prod);
        }
        
        return result;
    }
};


    ```

  </TabItem>
</Tabs>




## References

- **LeetCode Problem**: [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/maximum-product-subarray/solution/)

- **Authors GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)
