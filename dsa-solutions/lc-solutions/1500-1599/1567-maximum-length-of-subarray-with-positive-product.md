---
id: maximum-length-of-subarray-with-positive-product
title: 1567. Maximum Length of Subarray With Positive Product
sidebar_label: 1567. Maximum Length of Subarray With Positive Product
tags:
  - Array
  - Greedy
  - Dynamic Programming
description: "This is a solution to the  1567. Maximum Length of Subarray With Positive Product problem on LeetCode."
---

## Problem Description

Given an array of integers nums, find the maximum length of a subarray where the product of all its elements is positive.

A subarray of an array is a consecutive sequence of zero or more values taken out of that array.

Return the maximum length of a subarray with positive product.

### Examples

**Example 1:**

```
Input: nums = [1,-2,-3,4]
Output: 4
Explanation: The array nums already has a positive product of 24.
```

**Example 2:**

```
Input: nums = [0,1,-2,-3,-4]
Output: 3
Explanation: The longest subarray with positive product is [1,-2,-3] which has a product of 6.
Notice that we cannot include 0 in the subarray since that'll make the product 0 which is not positive.
```

### Constraints

- `2 <= nums.length <= 10^5`

## Solution for \1567. Maximum Length of Subarray With Positive Product Problem
### Steps
1. Initialize three variables: `maxLen`, `posLen`, and `negLen` to 0.
   - `maxLen` will store the length of the longest subarray with a positive product.
   - `posLen` will store the length of the current subarray with a positive product.
   - `negLen` will store the length of the current subarray with a negative product.

2. Iterate through each element `num` in the array `nums`:
   - If `num` is greater than 0, it means the product of the current subarray remains positive:
     - Increment `posLen` by 1.
     - If `negLen` is greater than 0, increment `negLen` by 1, otherwise set `negLen` to 0.
   - If `num` is less than 0, it means the product of the current subarray becomes negative:
     - Swap the values of `posLen` and `negLen` (while adding 1 to `negLen`).
     - If `posLen` was zero, set it to 0 after the swap.
   - If `num` is equal to 0, it means the product of the subarray is reset:
     - Set both `posLen` and `negLen` to 0.
   - Update `maxLen` with the maximum value between `maxLen` and `posLen`.

3. After iterating through all the elements, `maxLen` will contain the length of the longest subarray with a positive product.



### Approach
<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
   
        function getMaxLen(nums) {
    let maxLen = 0;
    let posLen = 0;
    let negLen = 0;

    for (let num of nums) {
        if (num > 0) {
            posLen++;
            negLen = (negLen > 0) ? negLen + 1 : 0;
        } else if (num < 0) {
            let temp = posLen;
            posLen = (negLen > 0) ? negLen + 1 : 0;
            negLen = temp + 1;
        } else {
            posLen = 0;
            negLen = 0;
        }
        maxLen = Math.max(maxLen, posLen);
    }

    return maxLen;
}

      const input = [0,1,-2,-3,-4]
      const output = getMaxLen(input)
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

    - Time Complexity: $O(n) $ 
    - Space Complexity: $ O(1)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascriptfunction getMaxLen(nums) {
    let maxLen = 0;
    let posLen = 0;
    let negLen = 0;

    for (let num of nums) {
        if (num > 0) {
            posLen++;
            negLen = (negLen > 0) ? negLen + 1 : 0;
        } else if (num < 0) {
            let temp = posLen;
            posLen = (negLen > 0) ? negLen + 1 : 0;
            negLen = temp + 1;
        } else {
            posLen = 0;
            negLen = 0;
        }
        maxLen = Math.max(maxLen, posLen);
    }

    return maxLen;
}

    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   class Solution:
    def getMaxLen(self, nums):
        maxLen = 0
        posLen = 0
        negLen = 0

        for num in nums:
            if num > 0:
                posLen += 1
                negLen = negLen + 1 if negLen > 0 else 0
            elif num < 0:
                temp = posLen
                posLen = negLen + 1 if negLen > 0 else 0
                negLen = temp + 1
            else:
                posLen = 0
                negLen = 0
            maxLen = max(maxLen, posLen)

        return maxLen

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
  import java.util.List;

public class Solution {
    public int getMaxLen(List<Integer> nums) {
        int maxLen = 0;
        int posLen = 0;
        int negLen = 0;

        for (int num : nums) {
            if (num > 0) {
                posLen++;
                negLen = (negLen > 0) ? negLen + 1 : 0;
            } else if (num < 0) {
                int temp = posLen;
                posLen = (negLen > 0) ? negLen + 1 : 0;
                negLen = temp + 1;
            } else {
                posLen = 0;
                negLen = 0;
            }
            maxLen = Math.max(maxLen, posLen);
        }

        return maxLen;
    }
}

    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    int getMaxLen(vector<int>& nums) {
        int maxLen = 0;
        int posLen = 0;
        int negLen = 0;

        for (int num : nums) {
            if (num > 0) {
                posLen++;
                negLen = (negLen > 0) ? negLen + 1 : 0;
            } else if (num < 0) {
                int temp = posLen;
                posLen = (negLen > 0) ? negLen + 1 : 0;
                negLen = temp + 1;
            } else {
                posLen = 0;
                negLen = 0;
            }
            maxLen = max(maxLen, posLen);
        }

        return maxLen;
    }
};

```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [1567. Maximum Length of Subarray With Positive Product](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions)
