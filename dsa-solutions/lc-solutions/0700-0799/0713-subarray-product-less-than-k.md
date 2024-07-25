---
id: subarray-product-less-than-k
title:   Subarray Product Less Than K
sidebar_label: 713. Subarray Product Less Than K

tags:
- Array
- Sliding Window

description: "This is a solution to the Subarray Product Less Than K problem on LeetCode."
---

## Problem Description
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
### Examples

**Example 1:**
```
Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
```

**Example 2:**
```
Input: nums = [1,2,3], k = 0
Output: 0
 
```


### Constraints
- `1 <= nums.length <= 3 * 10^4`
- `1 <= nums[i] <= 1000`
- `0 <= k <= 10^6`

## Solution for Path With Minimum Effort Problem
### Approach 
#### Brute Force 
- Generate All the Subarray and Check whether the which subarray has product less than K.

#### Optimized Approach - Sliding Window
##### Initialize Pointers and Variables:

- Use two pointers, i and j, to represent the start and end of the current subarray, respectively.
- Initialize prod to 1 to keep track of the product of elements in the current window.
- Initialize cnt to 0 to count the number of valid subarrays.
##### Expand the Window:

- Start with both pointers at the beginning of the array. Expand the window by moving the j pointer to the right, multiplying the product prod by the new element nums[j].
##### Check the Product:

- If the product prod is less than k, all subarrays ending at j and starting from any position between i and j are valid. Therefore, add j - i + 1 to cnt.
Shrink the Window:

- If the product prod is greater than or equal to k, move the i pointer to the right until the product is less than k. Each time you move i, divide prod by nums[i].
##### Repeat:

- Continue expanding the window with j and adjusting i as needed until j reaches the end of the array.
##### Return the Result:

- The total count cnt is the number of subarrays with a product less than k.


<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
        var numSubarrayProductLessThanK = function(nums, k) {
        let i = 0;
        let j = 0;
        let cnt = 0;
        let prod = 1;
        while (j < nums.length) {
            prod *= nums[j];
            if (prod < k) {
                cnt += j - i + 1;
            } else {
                while (prod >= k && i <= j) {
                    prod /= nums[i];
                    i++;
                }
                if (prod < k) {
                    cnt += j - i + 1;
                }
            }
            j++;
        }
        return cnt;
    };

      const input =[10,5,2,6]
      const k = 100
      const output = numSubarrayProductLessThanK(input , k)
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

    - Time Complexity: $ O(N) $ 
    - Space Complexity: $ O(1)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
   var numSubarrayProductLessThanK = function(nums, k) {
    let i = 0;
    let j = 0;
    let cnt = 0;
    let prod = 1;
    while (j < nums.length) {
        prod *= nums[j];
        if (prod < k) {
            cnt += j - i + 1;
        } else {
            while (prod >= k && i <= j) {
                prod /= nums[i];
                i++;
            }
            if (prod < k) {
                cnt += j - i + 1;
            }
        }
        j++;
    }
    return cnt;
};

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let i = 0;
    let j = 0;
    let cnt = 0;
    let prod = 1;
    while (j < nums.length) {
        prod *= nums[j];
        if (prod < k) {
            cnt += j - i + 1;
        } else {
            while (prod >= k && i <= j) {
                prod /= nums[i];
                i++;
            }
            if (prod < k) {
                cnt += j - i + 1;
            }
        }
        j++;
    }
    return cnt;
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   class Solution:
    def numSubarrayProductLessThanK(self, nums, k):
        i = 0
        j = 0
        cnt = 0
        prod = 1
        while j < len(nums):
            prod *= nums[j]
            if prod < k:
                cnt += j - i + 1
            else:
                while prod >= k and i <= j:
                    prod /= nums[i]
                    i += 1
                if prod < k:
                    cnt += j - i + 1
            j += 1
        return cnt

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   class Solution {
    public int numSubarrayProductLessThanK(int[] nums, int k) {
        int i = 0;
        int j = 0;
        long cnt = 0;
        long prod = 1;
        while (j < nums.length) {
            prod *= nums[j];
            if (prod < k) {
                cnt += j - i + 1;
            } else {
                while (prod >= k && i <= j) {
                    prod /= nums[i];
                    i++;
                }
                if (prod < k) {
                    cnt += j - i + 1;
                }
            }
            j++;
        }
        return (int) cnt;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    int numSubarrayProductLessThanK(vector<int>& nums, int k) {
        int i=0;
        int j=0;
        long long cnt = 0;
        long long prod = 1;
        while(j<nums.size())
        {
            prod=prod *1LL*nums[j];
            if(prod <k)
            {
                cnt+= j-i+1;
            }
            else if(prod>=k)
            {
                while(prod>=k && i<=j)
                {
                    prod/=nums[i];
                    i++;
                }

                if(prod<k)
                {
                    cnt+=j-i+1;
                }
            }
            j++;
        }
        return (int)cnt ;
    }
};

    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/subarray-product-less-than-k/solutions)

