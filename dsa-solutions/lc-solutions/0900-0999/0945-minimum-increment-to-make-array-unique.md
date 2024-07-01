---
id: minimum-increment-to-make-array-unique
title:   Minimum Increment to Make Array Unique
sidebar_label: 945. Minimum Increment to Make Array Unique

tags:
- Array
- Vector
- Map
- Unordered Map

description: "This is a solution to the minimum increment to make a array unique problem on LeetCode."
---

## Problem Description
You are given an integer array `nums`. In one move, you can pick an index `i` where `0 <= i < nums.length` and increment `nums[i]` by `1`.

Return *the minimum number of moves to make every value in* `nums` **unique**.

The test cases are generated so that the answer fits in a 32-bit integer.
### Examples

**Example 1:**
```
Input: nums = [1,2,2]
Output: 1
Explanation: After 1 move, the array could be [1, 2, 3].
```

**Example 2:**
```
Input: nums = [3,2,1,2,1,7]
Output: 6
Explanation: After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
It can be shown with 5 or less moves that it is impossible for the array to have all unique values.

```


### Constraints
- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^5`


## Solution for Minimum Increment to Make Array Unique
### Approach 
#### Brute Force 
- **Iterate and Adjust**: For each element in the array, if there are duplicates, increment them one by one until they become unique. Count each increment as a move.

- **Repeat**: Continue this process for each duplicate until all elements in the array are unique.

**Implementation:**
```plaintext
1. Initialize a counter `moves` to 0.
2. Iterate through each element `num` in the array `nums`.
   a. Use a hashmap to keep track of the frequency of each number.
   b. If the number `num` appears more than once:
      - Increment `num` until it becomes unique.
      - Count each increment as a move (`moves++`).
3. Return the total number of moves required.
```

**Complexity:**
- Time Complexity: `O(n * k)`, where `n` is the number of elements in nums and `k` is the maximum number of increments needed to resolve duplicates.
- Space Complexity: `O(n)`, due to the hashmap storing frequencies.

**Corner Cases:**
- Empty array: Return `0` since no moves are needed.
- Array with all unique elements: Return `0` as no adjustments are required.
- Arrays with varying frequencies and values: Handle each duplicate incrementally until all values are unique.

#### Optimized Approach 
- **Sort and Adjust**: Sort the array `nums`. Iterate through the sorted array and adjust each element to ensure uniqueness while keeping track of moves efficiently.
- **Greedy Adjustment**: As you iterate through the sorted array, if the current element is less than or equal to the previous element, adjust it to be one more than the previous element.

**Implementation:**

```plaintext
1. Sort the array `nums`.
2. Initialize a counter `moves` to 0.
3. Iterate through each element `num` in the sorted array `nums`:
   a. If `num` is less than or equal to the previous element:
      - Calculate the required increment to make `num` unique.
      - Add this increment to `num`.
      - Update `moves` by the calculated increment.
   b. Update the previous element to the current `num`.
4. Return the total number of moves required.
```

**Complexity:**
- Time Complexity: `O(n log n)` due to sorting, where `n` is the number of elements in `nums`. Adjustments are made in linear time.
- Space Complexity: `O(1)` extra space if sorting in-place is allowed, otherwise `O(n)` for additional space for sorting.

**Corner Cases:**
- Empty array: Return `0` since no moves are needed.
- Array with all unique elements: Return `0` as no adjustments are required.
- Arrays with varying frequencies and values: Efficiently handle adjustments in a sorted manner to minimize moves.


<Tabs>
  <TabItem value="Solution" label="Solution">

#### Implementation

    ```jsx live
    function Solution(arr) {
      var minIncrementForUnique = function(nums) {
        nums.sort((a, b) => a-b)
        let moves = 0
      
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] <= nums[i-1]) {
                let increment = nums[i-1] - nums[i] + 1
                nums[i] += increment
                moves += increment
            }
        }
      
        return moves
      };
      const input = [3,2,1,2,1,7]
      const originalInput = [...input]
      const output = minIncrementForUnique(input)
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
 - Space Complexity: $O(1)$ 

  ## Code in Different Languages

   <Tabs>

  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@vansh-codes" />

   ```javascript
    var minIncrementForUnique = function(nums) {
        nums.sort((a, b) => a - b);
        let moves = 0;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] <= nums[i - 1]) {
                let increment = nums[i - 1] - nums[i] + 1;
                nums[i] += increment;
                moves += increment;
            }
        }
        return moves;
    };
    ```

  </TabItem>

  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@vansh-codes" /> 

   ```typescript
   function minIncrementForUnique(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let moves = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            let increment = nums[i - 1] - nums[i] + 1;
            nums[i] += increment;
            moves += increment;
        }
    }
    return moves;
   }
    ```

  </TabItem>

  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@vansh-codes" />

   ```python

    class Solution(object):
    def minIncrementForUnique(self, nums):
        nums.sort()
        moves = 0
        for i in range(1, len(nums)):
            if nums[i] <= nums[i - 1]:
                increment = nums[i - 1] - nums[i] + 1
                nums[i] += increment
                moves += increment
        return moves

    ```

  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@vansh-codes" />

   ```java
   import java.util.Arrays;

    class Solution {
        public int minIncrementForUnique(int[] nums) {
            Arrays.sort(nums);
            int moves = 0;
            for (int i = 1; i < nums.length; i++) {
                if (nums[i] <= nums[i - 1]) {
                    int increment = nums[i - 1] - nums[i] + 1;
                    nums[i] += increment;
                    moves += increment;
                }
            }
            return moves;
        }
    }
    ```

  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@vansh-codes" />

   ```cpp
   class Solution {
    public:
        int minIncrementForUnique(vector<int>& nums) {
            sort(nums.begin(), nums.end());
            int moves = 0;
            for(int i=1;i<nums.size();i++){
                if(nums[i]<=nums[i-1]){
                    int increment = nums[i-1] - nums[i] + 1;
                    nums[i] += increment;
                    moves += increment;
                }
            }
            return moves;
        }
    };

    ```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Minimum Increment To Make Array Unique](https://leetcode.com/problems/minimum-increment-to-make-array-unique/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/)  