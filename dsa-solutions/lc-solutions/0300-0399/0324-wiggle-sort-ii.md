---
id: wiggle-sort-ii
title: Wiggle Sort II
sidebar_label: 0324 - Wiggle Sort II
tags:
- Array
- Divide and Conquer
- Greedy
- Sorting
- Quickselect

description: "This is a solution to the Wiggle Sort II problem on LeetCode."
---

## Problem Description
Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....
You may assume the input array always has a valid answer.

### Examples

**Example 1:**

```
Input: nums = [1,5,1,1,6,4]
Output: [1,6,1,5,1,4]
Explanation: [1,4,1,5,1,6] is also accepted.

```

**Example 2:**
```
Input: nums = [1,3,2,2,3,1]
Output: [2,3,1,3,1,2]
```

### Constraints

- `1 <= nums.length <= 5 * 10^4`
- `0 <= nums[i] <= 5000`
- It is guaranteed that there will be an answer for the given input nums.

## Solution for Wiggle Sort II Problem
### Approach 
#### Sorting the Array:
- The first step is to sort the input array nums. This ensures that the elements are in non-decreasing order.
- Sorting helps to easily pick the smallest and largest remaining elements in subsequent steps.
#### Creating a Temporary Array:
- A temporary array temp of the same size as nums is created to store the elements in a "wiggle" pattern.
- An index variable j is initialized to point to the last element of the sorted nums array. This will help in filling the temporary array from the largest to the smallest element.
#### Filling Odd Indices:
- A loop runs from the index 1 to the end of the array with a step of 2 (i.e., 1, 3, 5, ...). This loop fills the odd indices of the temp array.
- The largest remaining elements from nums are placed at these odd indices. The index j is decremented after placing each element.
#### Filling Even Indices:
- Another loop runs from the index 0 to the end of the array with a step of 2 (i.e., 0, 2, 4, ...). This loop fills the even indices of the temp array.
- The largest remaining elements from nums are placed at these even indices. The index j is decremented after placing each element.
- Copying Back to Original Array:
- The temp array, now containing the elements in the desired "wiggle" order, is copied back to the original nums array.


<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
      function wiggleSort(nums) {
        nums.sort((a, b) => a - b);
        const temp = new Array(nums.length);
        let j = nums.length - 1;
        for (let i = 1; i < nums.length; i += 2) {
          temp[i] = nums[j--];
        }
        for (let i = 0; i < nums.length; i += 2) {
          temp[i] = nums[j--];
        }
        return temp;
      }
      const input = [1, 5, 1, 1, 6, 4];
      const output = wiggleSort(input);
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $ O(nlogn) $ is the time complexity, where n is the size of array
    - Space Complexity: $ O(n) $ , because of the Temp array we have taken.

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
    function wiggleSort(nums) {
        nums.sort((a, b) => a - b);
        const temp = new Array(nums.length);
        let j = nums.length - 1;
        for (let i = 1; i < nums.length; i += 2) {
            temp[i] = nums[j--];
        }
        for (let i = 0; i < nums.length; i += 2) {
            temp[i] = nums[j--];
        }
        for (let i = 0; i < nums.length; i++) {
            nums[i] = temp[i];
        }
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   function wiggleSort(nums: number[]): void {
    nums.sort((a, b) => a - b);
    const temp: number[] = new Array(nums.length);
    let j = nums.length - 1;
    
    for (let i = 1; i < nums.length; i += 2) {
        temp[i] = nums[j--];
    }
    for (let i = 0; i < nums.length; i += 2) {
        temp[i] = nums[j--];
    }
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] = temp[i];
    }
}

// Example usage
  const input: number[] = [1, 5, 1, 1, 6, 4];
  wiggleSort(input);
  console.log(input); // Output might be [1, 6, 1, 5, 1, 4]
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   def wiggle_sort(nums):
    nums.sort()
    temp = [0] * len(nums)
    j = len(nums) - 1
    
    for i in range(1, len(nums), 2):
        temp[i] = nums[j]
        j -= 1
    for i in range(0, len(nums), 2):
        temp[i] = nums[j]
        j -= 1
    
    for i in range(len(nums)):
        nums[i] = temp[i]

# Example usage
input = [1, 5, 1, 1, 6, 4]
wiggle_sort(input)
print(input) # Output might be [1, 6, 1, 5, 1, 4]

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.Arrays;

public class WiggleSort {
    public static void wiggleSort(int[] nums) {
        Arrays.sort(nums);
        int[] temp = new int[nums.length];
        int j = nums.length - 1;
        
        for (int i = 1; i < nums.length; i += 2) {
            temp[i] = nums[j--];
        }
        for (int i = 0; i < nums.length; i += 2) {
            temp[i] = nums[j--];
        }
        
        System.arraycopy(temp, 0, nums, 0, nums.length);
    }

    public static void main(String[] args) {
        int[] input = {1, 5, 1, 1, 6, 4};
        wiggleSort(input);
        System.out.println(Arrays.toString(input)); // Output might be [1, 6, 1, 5, 1, 4]
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    void wiggleSort(vector<int>& nums) {
        sort(nums.begin() , nums.end());
        vector<int>temp(nums.size());
        int j=nums.size()-1;
        for(int i=1;i<nums.size();i+=2)
        {
            temp[i]=nums[j--];
        }
        for(int i=0;i<nums.size();i+=2)
        {
            temp[i]=nums[j--];
        }
        nums=temp;
    }
};
    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Wiggle Sort II](https://leetcode.com/problems/wiggle-sort-ii/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/wiggle-sort-ii/solution)

