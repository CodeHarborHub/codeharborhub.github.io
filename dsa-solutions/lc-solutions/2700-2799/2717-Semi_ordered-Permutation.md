---
id: semi-ordered-permutation
title: Semi-Ordered Permutation
sidebar_label: 2717-Semi_ordered-Permutation
tags:
  - Array
  - Simulation

description: "This is a solution to the  2717."
---

## Problem Description
You are given a 0-indexed permutation of `n` integers `nums`.

A permutation is called semi-ordered if the first number equals `1` and the last number equals `n`. You can perform the below operation as many times as you want until you make `nums` a semi-ordered permutation:

Pick two adjacent elements in `nums`, then swap them.
Return the minimum number of operations to make `nums` a semi-ordered permutation.

A permutation is a sequence of integers from `1` to `n` of length `n` containing each number exactly once.


### Example

**Example 1:**


```
Input: nums = [2,1,4,3]
Output: 2
Explanation: We can make the permutation semi-ordered using these sequence of operations: 
1 - swap i = 0 and j = 1. The permutation becomes [1,2,4,3].
2 - swap i = 2 and j = 3. The permutation becomes [1,2,3,4].
It can be proved that there is no sequence of less than two operations that make nums a semi-ordered permutation.
```
**Example 2:**
```
Input: nums = [2,4,1,3]
Output: 3
Explanation: We can make the permutation semi-ordered using these sequence of operations:
1 - swap i = 1 and j = 2. The permutation becomes [2,1,4,3].
2 - swap i = 0 and j = 1. The permutation becomes [1,2,4,3].
3 - swap i = 2 and j = 3. The permutation becomes [1,2,3,4].
It can be proved that there is no sequence of less than three operations that make nums a semi-ordered permutation.
```
### Constraints

- `2 <= nums.length == n <= 50`

## Solution Approach

### Intuition:

To efficiently determine the Semi-Ordered Permutation
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
class Solution {
  semiOrderedPermutation(nums) {
    let n = nums.length;
    let left = 0, right = n - 1;
    let operations = 0;
    while (left < right) {
      if (nums[left] === left + 1) {
        left++;
      } else if (nums[right] === n - right) {
        right--;
      } else {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        operations++;
      }
    }
    return operations;
  }
}

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
  class Solution {
  semiOrderedPermutation(nums: number[]): number {
    let n = nums.length;
    let left = 0, right = n - 1;
    let operations = 0;
    while (left < right) {
      if (nums[left] === left + 1) {
        left++;
      } else if (nums[right] === n - right) {
        right--;
      } else {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        operations++;
      }
    }
    return operations;
  }
}

    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
class Solution:
    def semiOrderedPermutation(self, nums: List[int]) -> int:
        n = len(nums)
        left, right = 0, n - 1
        operations = 0
        while left < right:
            if nums[left] == left + 1:
                left += 1
            elif nums[right] == n - right:
                right -= 1
            else:
                nums[left], nums[right] = nums[right], nums[left]
                operations += 1
        return operations

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
   
public class Solution {
    public int semiOrderedPermutation(int[] nums) {
        int n = nums.length;
        int left = 0, right = n - 1;
        int operations = 0;
        while (left < right) {
            if (nums[left] == left + 1) {
                left++;
            } else if (nums[right] == n - right) {
                right--;
            } else {
                int temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                operations++;
            }
        }
        return operations;
    }
}


    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
  class Solution {
public:
    int semiOrderedPermutation(vector<int>& nums) {
    int n = nums.size();
    int left = 0, right = n - 1;
    int operations = 0;
    while (left < right) {
        if (nums[left] == left + 1) {
            left++;
        } else if (nums[right] == n - right) {
            right--;
        } else {
            swap(nums[left], nums[right]);
            operations++;
        }
    }
    
    return operations;
}

};
   ```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(1)$$
- The time complexity is $$O(n)$$ where n is the length of the input array nums. This is because the method iterates through the array once, performing a constant amount of work for each element.
- The space complexity is $$O(1)$$ because we are not using any extra space.