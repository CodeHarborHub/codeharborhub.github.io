---
id: squares-of-a-sorted-array
title:   Squares of a sorted array
sidebar_label: 977. Squares of a Sorted Array

tags:
- Array
- Vector

description: "This is a solution to the squares of a sorted array problem on LeetCode."
---

## Problem Description
Given an integer array `nums` sorted in **non-decreasing** order, return an array of ***the squares of each number*** *sorted in non-decreasing order.*

### Examples

**Example 1:**
```
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
```

**Example 2:**
```
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

```


### Constraints
- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` is sorted in **non-decreasing** order.

**Follow up:** Squaring each element and sorting the new array is very trivial, could you find an `O(n)` solution using a different approach?


## Solution for Sqaures of a Sorted Array
### Approach 
#### Brute Force 
- **Square Each Element**:  Iterate through the array and square each element.

- **Sort the Resulting Array**: Sort the array of squares.

**Implementation:**
```python
def sortedSquares(nums):
    # Step 1: Square each element
    squared_nums = [num ** 2 for num in nums]
    
    # Step 2: Sort the array of squares
    squared_nums.sort()
    
    return squared_nums

# Example usage
nums = [-4, -1, 0, 3, 10]
print(sortedSquares(nums))  # Output: [0, 1, 9, 16, 100]
```

**Complexity:**
- Time Complexity: `O(nlogn)` due to the sorting step, where `n` is the number of elements in `nums`.
- Space Complexity: `O(n)` for storing the sqaured numbers.

**Corner Cases:**
- Empty array: Should return an empty array.
- All non-negative or all non-positive numbers: Should still work correctly without special handling.

#### Optimized Approach 
- **Two-pointer Technique**: Utilize two pointers, one at the beginning (`left`) and one at the end (`right`) of the array.
- **Compare and Insert**: Compare the absolute values of the elements pointed by `left` and `right`. Insert the square of the larger absolute value at the end of the result array and move the corresponding pointer inward.
- **Continue Until Pointers Meet**: Repeat the comparison and insertion until the pointers meet.

**Implementation:**

```python
def sortedSquares(nums):
    n = nums.length
    result = [0] * n
    left, right = 0, n - 1
    position = n - 1

    while left <= right:
        if abs(nums[left]) > abs(nums[right]):
            result[position] = nums[left] ** 2
            left += 1
        else:
            result[position] = nums[right] ** 2
            right -= 1
        position -= 1

    return result

# Example usage
nums = [-4, -1, 0, 3, 10]
print(sortedSquares(nums))  # Output: [0, 1, 9, 16, 100]

```

**Complexity:**
- Time Complexity: `O(n)` because we are traversing the array only once with the two-pointer technique.
- Space Complexity: `O(n)` for the result array.

**Corner Cases:**
- Empty array: Should return an empty array.
- All non-negative or all non-positive numbers: Handled naturally by the two-pointer technique without special cases.
- Array with single element: Both approaches handle this case correctly.


<Tabs>
  <TabItem value="Solution" label="Solution">

#### Implementation

    ```jsx live
    function Solution(arr) {
      var sortedSquares = function(nums) {
        const result = new Array(nums.length)
        let i = nums.length - 1
        let j = 0
        let k = nums.length - 1

        while (i >= 0) {
            if (Math.abs(nums[j]) > Math.abs(nums[k])) {
                result[i] = nums[j] * nums[j];
                ++j;
            } else {
                result[i] = nums[k] * nums[k];
                --k;
            }
            --i;
        }
        return result
      };
      const input = [-4,-1,0,3,10]
      const originalInput = [...input]
      const output = sortedSquares(input)
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(originalInput)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

#### Complexity Analysis

 - Time Complexity: $O(n)$ 
 - Space Complexity: $O(n)$ 

  ## Code in Different Languages

   <Tabs>

  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@vansh-codes" />

   ```javascript
    var sortedSquares = function(nums) {
        const result = new Array(nums.length)
        let i = nums.length - 1
        let j = 0
        let k = nums.length - 1

        while (i >= 0) {
            if (Math.abs(nums[j]) > Math.abs(nums[k])) {
                result[i] = nums[j] * nums[j];
                j++;
            } else {
                result[i] = nums[k] * nums[k];
                k--;
            }
            i--;
        }
        return result;
    };
    ```

  </TabItem>

  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@vansh-codes" /> 

   ```typescript
    function sortedSquares(nums: number[]): number[] {
        const result = new Array(nums.length);
        let i = nums.length - 1;
        let j = 0;
        let k = nums.length - 1;
        
        while (i >= 0) {
            if (Math.abs(nums[j]) > Math.abs(nums[k])) {
                result[i] = nums[j] * nums[j];
                j++;
            } else {
                result[i] = nums[k] * nums[k];
                k--;
            }
            i--;
        }
        
        return result;
    }
    ```

  </TabItem>

  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@vansh-codes" />

   ```python

    class Solution(object):
    def sortedSquares(self, nums):
        result = [0] * len(nums)
        i = len(nums) - 1
        j = 0
        k = len(nums) - 1
        
        while i >= 0:
            if abs(nums[j]) > abs(nums[k]):
                result[i] = nums[j] ** 2
                j += 1
            else:
                result[i] = nums[k] ** 2
                k -= 1
            i -= 1
        
        return result

    ```

  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@vansh-codes" />

   ```java
   import java.util.Arrays;

    class Solution {
        public int[] sortedSquares(int[] nums) {
            int[] result = new int[nums.length];
            int i = nums.length - 1;
            int j = 0;
            int k = nums.length - 1;
            
            while (i >= 0) {
                if (Math.abs(nums[j]) > Math.abs(nums[k])) {
                    result[i] = nums[j] * nums[j];
                    j++;
                } else {
                    result[i] = nums[k] * nums[k];
                    k--;
                }
                i--;
            }
            
            return result;
        }
    }
    ```

  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@vansh-codes" />

   ```cpp
   class Solution {
    public:
        int sortedSquares(vector<int>& nums) {
            vector<int> result(nums.size());
            int i = nums.size()-1, j = 0, k = nums.size()-1;
            while(i >= 0)
            {
                if(abs(nums[j]) > abs(nums[k]))
                {
                    result[i] = nums[j] * nums[j];
                    ++j;
                }
                else
                {   
                    result[i] = nums[k] * nums[k];
                    --k;
                }
                --i;
            }
            return result;
        }
    };

    ```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/description)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/squares-of-a-sorted-array/solutions/)  