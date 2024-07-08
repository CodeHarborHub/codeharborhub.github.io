---
id: create-target-array-in-given-order
title: Create Target Array in Given Order
sidebar_label: 1389 Create Target Array in Given Order
tags:
- Array
- Simulation
description: "This is the solution for create target array in given order in leetcode."
---

## Problem

Given two arrays of integers `nums` and `index`, your task is to create a target array under the following rules:

1. Initially, the target array is empty.
2. From left to right, read `nums[i]` and `index[i]`, then insert at index `index[i]` the value `nums[i]` in the target array.
3. Repeat the previous step until there are no elements to read in `nums` and `index`.
4. Return the target array.

It is guaranteed that the insertion operations will be valid.

### Examples

**Example 1:**

```
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]
```

**Example 2:**

```
Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
Output: [0,1,2,3,4]
Explanation:
nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]
```

**Example 3:**

```
Input: nums = [1], index = [0]
Output: [1]
```

**Expected Time Complexity:** $O(N)$  
**Expected Auxiliary Space:** $O(N)$

### Constraints
- `1 <= nums.length, index.length <= 100`
- `nums.length == index.length`
- `0 <= nums[i] <= 100`
- `0 <= index[i] <= i`

## Solution

### Approach

The approach for solving the problem of creating a target array from given `nums` and `index` arrays involves iterating through the `index` array and inserting elements from the `nums` array into a target array at positions specified by the `index` values. Specifically, we start with an empty target array. For each element in the `index` array, we use the corresponding element in the `nums` array and insert it at the position specified by the `index` value. This insertion shifts the existing elements in the target array to the right to accommodate the new element. This process is repeated for all elements in the `index` array until the target array is fully constructed. This approach ensures that the elements are placed in the correct positions according to the given indices, resulting in the desired target array. This method is implemented using a loop to iterate over the `index` array and the `insert` method to place the elements from the `nums` array at the appropriate positions in the target array.

### Implementation

<Tabs>
  <TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani" />
    ```cpp
    class Solution {
    public:
        std::vector<int> createTargetArray(std::vector<int>& nums, std::vector<int>& index) {
            std::vector<int> target;
            for (size_t i = 0; i < index.size(); ++i) {
                target.insert(target.begin() + index[i], nums[i]);
            }
            return target;
        }
    };
    ```
  </TabItem>
 
  <TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani" />

    ```python
    class Solution:
        def createTargetArray(self, nums: List[int], index: List[int]) -> List[int]:
            target = []
            for i in range(len(index)):
                target.insert(index[i], nums[i])
            return target
    ```

  </TabItem>
  
  <TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani" />

    ```java
    class Solution {
        public int[] createTargetArray(int[] nums, int[] index) {
            List<Integer> target = new ArrayList<>();
            for (int i = 0; i < index.length; i++) {
                target.add(index[i], nums[i]);
            }
            int[] result = new int[target.size()];
            for (int i = 0; i < target.size(); i++) {
                result[i] = target.get(i);
            }
            return result;
        }
    }
    ```

  </TabItem>
</Tabs>

---

## References

- **LeetCode Problem:** [Create Target Array in Given Order](https://leetcode.com/problems/create-target-array-in-the-given-order/description/)
- **Solution Link:** [Leetcode Solution](https://leetcode.com/problems/create-target-array-in-the-given-order/post-solution/?submissionId=1271296265)