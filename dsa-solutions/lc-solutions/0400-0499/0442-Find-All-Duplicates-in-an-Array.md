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
description: This is a solution to the Find All Duplicates in an Array problem on LeetCode
---

## Problem Description

Given an integer array nums of length n where all the integers of nums are in the range `[1, n]` and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in `O(n)` time and uses only constant extra space.

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

## Solution for  Find All Duplicates in an Array

### Intuition


    - We can use the elements in the array itself to keep track of "seen" elements.
    - Since each element represents a valid index, we can use it to modify the element at that index.




### Approach


   - Iterate through the array: For each element `nums[i]` :
   - Calculate index: Subtract 1 from `nums[i]` to get the corresponding index index.
   - Mark the element: Access the element at the calculated index and negate its value (make it negative). This "marks" the element as having been seen.
   - Check for duplicate: If the value at index is already negative, it means the element pointed to by index has been seen before.  This current element `(nums[i])` is a duplicate, so add it to the result vector.





#### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@parikhitkurmi"/>
    
   ```python
//python

   class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        # solution that takes 
        # time complexity: O(n)
        # space complexity: O(1)

        # list to store the output
        answerList = []

        for i in nums:
            # let us compute the index value
            indexValue = abs(i) - 1
            # if index value is less than 0, duplicate is found and we insert to the answerList
            if nums[indexValue] < 0:
                answerList.append(abs(i))
            # if not, we will make the value negative so that it becomes a mark that its the first occurence
            else:
                nums[indexValue] = - nums[indexValue]

        return answerList
```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@parikhitkurmi"/>

   ```java
//java

class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        Arrays.sort(nums);
        List<Integer> list = new ArrayList<Integer>();
        int n = nums.length;
        for(int i = 0; i < n - 1; i++){
            if(nums[i] == nums[i + 1]){
                i++;
                list.add(nums[i]);
            }
        }

        return list;
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
        vector<int> result;
        
        for (int i = 0; i < nums.size(); i++) {
            int index = abs(nums[i]) - 1; // Map the number to its corresponding index
            
            // Mark the element at the index as negative to indicate that we've seen it
            if (nums[index] > 0) {
                nums[index] = -nums[index];
            } else {
                // If it's already negative, it means we've seen it before, so it's a duplicate
                result.push_back(abs(nums[i]));
            }
        }
        
        return result;
    }
};

```

  </TabItem>
</Tabs>


## Complexity
   - Time complexity: $O(n)$
   - Space complexity: $O(1)$
## References

- **LeetCode Problem:** [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)
- **Solution Link:** [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/submissions/)
- **Authors GeeksforGeeks Profile:** [parikhit kurmi](https://www.geeksforgeeks.org/user/sololeveler673/)
- **Authors Leetcode:** [parikhit kurmi](https://leetcode.com/u/parikhitkurmi14/)