---

id: minimum-difference-between-largest-and-smallest-value-in-three-moves
title: Minimum Difference Between Largest and Smallest Value in Three Moves
sidebar_label: 1509-Minimum-Difference-Between-Largest-and-Smallest-Value-In-Three-Moves
tags:
  - Array
  - Sorting
  - Greedy
  - LeetCode
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the Minimum Difference Between Largest and Smallest Value in Three Moves problem on LeetCode."

---

In this page, we will solve the Minimum Difference Between Largest and Smallest Value in Three Moves problem using different approaches. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

Given an array `nums` of `n` integers, the array may be changed by performing up to `3` moves. In each move, you can choose any element of the array and change it to any other integer. Return the minimum difference between the largest and smallest value of the array after performing at most 3 moves.

### Examples

**Example 1:**

```plaintext
Input: nums = [5,3,2,4]
Output: 0
Explanation: Change the array to [2,2,2,2]. The difference between the largest and smallest value is 0.
```

**Example 2:**

```plaintext
Input: nums = [1,5,0,10,14]
Output: 1
Explanation: Change the array to [1,1,0,1,1]. The difference between the largest and smallest value is 1.
```

### Constraints

- $1 <= nums.length <= 10^5$
- $-10^9 <= nums[i] <= 10^9$

---

## Solution for Minimum Difference Between Largest and Smallest Value in Three Moves

### Intuition and Approach

To minimize the difference between the largest and smallest value of the array after at most 3 moves, we can sort the array and then consider the effect of making the largest or smallest few elements equal to one another. Specifically, we need to consider four cases where we change either the three largest, two largest and one smallest, one largest and two smallest, or the three smallest elements.

<Tabs>
 <tabItem value="Sorting and Greedy" label="Sorting and Greedy">

### Approach 1: Sorting and Greedy

We first sort the array and then calculate the minimum difference for the following four cases:
1. Change the largest 3 elements.
2. Change the largest 2 elements and the smallest 1 element.
3. Change the largest 1 element and the smallest 2 elements.
4. Change the smallest 3 elements.

#### Implementation

```jsx live
function minimumDifferenceInThreeMoves() {
  const nums = [1, 5, 0, 10, 14];

  const minDifference = function(nums) {
    const n = nums.length;
    if (n <= 4) return 0;

    nums.sort((a, b) => a - b);
    return Math.min(nums[n - 1] - nums[3], nums[n - 2] - nums[2], nums[n - 3] - nums[1], nums[n - 4] - nums[0]);
  };

  const result = minDifference(nums);
  return (
    <div>
      <p>
        <b>Input:</b> nums = {JSON.stringify(nums)}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function minDifference(nums) {
      const n = nums.length;
      if (n <= 4) return 0;

      nums.sort((a, b) => a - b);
      return Math.min(nums[n - 1] - nums[3], nums[n - 2] - nums[2], nums[n - 3] - nums[1], nums[n - 4] - nums[0]);
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function minDifference(nums: number[]): number {
      const n = nums.length;
      if (n <= 4) return 0;

      nums.sort((a, b) => a - b);
      return Math.min(nums[n - 1] - nums[3], nums[n - 2] - nums[2], nums[n - 3] - nums[1], nums[n - 4] - nums[0]);
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def minDifference(self, nums: List[int]) -> int:
            n = len(nums)
            if n <= 4:
                return 0

            nums.sort()
            return min(nums[-1] - nums[3], nums[-2] - nums[2], nums[-3] - nums[1], nums[-4] - nums[0])
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    import java.util.Arrays;

    class Solution {
        public int minDifference(int[] nums) {
            int n = nums.length;
            if (n <= 4) return 0;

            Arrays.sort(nums);
            return Math.min(nums[n - 1] - nums[3], Math.min(nums[n - 2] - nums[2], Math.min(nums[n - 3] - nums[1], nums[n - 4] - nums[0])));
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>
    #include <algorithm>

    class Solution {
    public:
        int minDifference(std::vector<int>& nums) {
            int n = nums.size();
            if (n <= 4) return 0;

            std::sort(nums.begin(), nums.end());
            return std::min({nums[n - 1] - nums[3], nums[n - 2] - nums[2], nums[n - 3] - nums[1], nums[n - 4] - nums[0]});
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n \log n)$$ due to the sorting of the array.
- Space Complexity: $$O(1)$$, as no extra space is used except for a few variables.

</tabItem>

<tabItem value="Sliding Window" label="Sliding Window">

### Approach 2: Sliding Window

This approach is similar to the sorting and greedy approach but can be explained differently. We sort the array and then slide a window of size 4 across the array to find the minimum difference between the maximum and minimum values in the window.

#### Implementation

```jsx live
function minimumDifferenceInThreeMoves() {
  const nums = [1, 5, 0, 10, 14];

  const minDifference = function(nums) {
    const n = nums.length;
    if (n <= 4) return 0;

    nums.sort((a, b) => a - b);
    let minDiff = Infinity;
    for (let i = 0; i < 4; i++) {
      minDiff = Math.min(minDiff, nums[n - 4 + i] - nums[i]);
    }
    return minDiff;
  };

  const result = minDifference(nums);
  return (
    <div>
      <p>
        <b>Input:</b> nums = {JSON.stringify(nums)}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function minDifference(nums) {
      const n = nums.length;
      if (n <= 4) return 0;

      nums.sort((a, b) => a - b);
      let minDiff = Infinity;
      for (let i = 0; i < 4; i++) {
        minDiff = Math.min(minDiff, nums[n - 4 + i] - nums[i]);
      }
      return minDiff;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function minDifference(nums: number[]): number {
      const n = nums.length;
      if (n <= 4) return 0;

      nums.sort((a, b) => a - b);
      let minDiff = Infinity;
      for (let i = 0; i < 4; i++) {
        minDiff = Math.min(minDiff, nums[n - 4 + i] - nums[i]);
      }
      return minDiff;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
  

 ```python
    class Solution:
        def minDifference(self, nums: List[int]) -> int:
            n = len(nums)
            if n <= 4:
                return 0

            nums.sort()
            min_diff = float('inf')
            for i in range(4):
                min_diff = min(min_diff, nums[n - 4 + i] - nums[i])
            return min_diff
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    import java.util.Arrays;

    class Solution {
        public int minDifference(int[] nums) {
            int n = nums.length;
            if (n <= 4) return 0;

            Arrays.sort(nums);
            int minDiff = Integer.MAX_VALUE;
            for (int i = 0; i < 4; i++) {
                minDiff = Math.min(minDiff, nums[n - 4 + i] - nums[i]);
            }
            return minDiff;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>
    #include <algorithm>

    class Solution {
    public:
        int minDifference(std::vector<int>& nums) {
            int n = nums.size();
            if (n <= 4) return 0;

            std::sort(nums.begin(), nums.end());
            int minDiff = INT_MAX;
            for (int i = 0; i < 4; i++) {
                minDiff = std::min(minDiff, nums[n - 4 + i] - nums[i]);
            }
            return minDiff;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n \log n)$$ due to the sorting of the array.
- Space Complexity: $$O(1)$$, as no extra space is used except for a few variables.

</tabItem>
</Tabs>

:::tip

By using either the sorting and greedy approach or the sliding window approach, we can efficiently solve the Minimum Difference Between Largest and Smallest Value in Three Moves problem. The choice of implementation language depends on the specific requirements and constraints of the problem.

:::

## References

- **LeetCode Problem:** [Minimum Difference Between Largest and Smallest Value in Three Moves](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/)
- **Solution Link:** [Minimum Difference Between Largest and Smallest Value in Three Moves Solution on LeetCode](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solution/)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)

