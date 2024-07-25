---
id: find-all-duplicates-in-an-array
title: find-all-duplicates-in-an-array
sidebar_label: 0442 find-all-duplicates-in-an-array
tags:
  - hashmap
  - LeetCode
  - Java
  - Python
  - C++
description: This is a solution to the. Find All Duplicates in an Array problem on LeetCode
---

## Problem Description

Given an integer array nums of length n where all the integers of nums are in the range `[1, n]` and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in $O(n)$ time and uses only constant extra space.

### Examples

**Example 1:**

```

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]

```

**Example 2:**


```
Input: nums = [1,1,2]
Output: [1]
```

**Example 3:**


```
Input: nums = [1]
Output: []
```


### Constraints

-  $1 \leq \text{nums.length} \leq  105$
- Each element in nums appears once or twice.


---

## Solution for Find All Duplicates in an Array

### Intuition

   - Since each element in the array represents a valid index `(1 to n)`, we can leverage this information.
   - We might be able to sort the array and then compare adjacent elements to find duplicates efficiently.



### Approach
 
   - Utilize existing order: We know that each element should appear at most twice and all values are in the range `[1, n]`. This suggests some inherent order in the array.
   - Leverage sorting: By sorting the array, we can group duplicate elements together, making them easier to identify.
   - Iterate and compare: After sorting, iterating through the array, we can compare adjacent elements. If two consecutive elements are identical, that element is a duplicate.





#### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@parikhitkurmi"/>
    
   ```python
//python

class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        ans =[]
        n=len(nums)
        for x in nums:
            x = abs(x)
            if nums[x-1]<0:
                ans.append(x)
            nums[x-1] *= -1
        return ans

```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@parikhitkurmi"/>

   ```java
//java


class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        List<Integer> ans = new ArrayList<>();
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            int x = Math.abs(nums[i]);
            if (nums[x - 1] < 0) {
                ans.add(x);
            }
            nums[x - 1] *= -1;
        }
        return ans;
    }
}


```
</TabItem>
<TabItem value="C++" label="C++">
<SolutionAuthor name="@parikhitkurmi"/>

   ```cpp
//cpp

class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        vector<int>ans;
        int n=size(nums);
        for(int i=0;i<n;i++){
            int x=abs(nums[i]);
            if(nums[x-1]<0){
                
                ans.push_back(x);
            }
            nums[x-1]*=-1;
        }
        return ans;
    }
};

```

  </TabItem>
</Tabs>





## References

- **LeetCode Problem:** [Continuous Subarray Sum](https://leetcode.com/problems/find-all-duplicates-in-an-array/)
- **Solution Link:** [Continuous Subarray Sum](https://leetcode.com/problems/find-all-duplicates-in-an-array/submissions/)
- **Authors GeeksforGeeks Profile:** [parikhit kurmi](https://www.geeksforgeeks.org/user/sololeveler673/)
- **Authors Leetcode:** [parikhit kurmi](https://leetcode.com/u/parikhitkurmi14/)