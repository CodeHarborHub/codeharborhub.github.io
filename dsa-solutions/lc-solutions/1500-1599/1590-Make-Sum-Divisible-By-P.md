---

id: make-sum-divisible-by-p
title: Make Sum Divisible by P
sidebar_label: 1590-Make-Sum-Divisible-By-P
tags:
  - Array
  - Hash Table
  - Prefix Sum
  - LeetCode
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the Make Sum Divisible by P problem on LeetCode."

---

In this page, we will solve the Make Sum Divisible by P problem using different approaches. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

Given an array of positive integers `nums`, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by `p`. It is guaranteed that there is an answer. If this is not possible, return -1.

### Examples

**Example 1:**

```plaintext
Input: nums = [3,1,4,2], p = 6
Output: 1
Explanation: The sum of the array is 10, and the sum modulo 6 is 4. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.
```

**Example 2:**

```plaintext
Input: nums = [6,3,5,2], p = 9
Output: 2
Explanation: The sum of the array is 16, and the sum modulo 9 is 7. We can remove the subarray [5,2], and the sum of the remaining elements is 9, which is divisible by 9.
```

### Constraints

- $1 \leq nums.length \leq 10^5$
- $1 \leq nums[i] \leq 10^9$
- $1 \leq p \leq 10^9$

---

## Solution for Make Sum Divisible by P

### Intuition and Approach

To solve the problem, we need to remove the smallest subarray such that the sum of the remaining elements is divisible by `p`. One efficient way to approach this is by using the prefix sum and a hash map.

<Tabs>
 <tabItem value="Prefix Sum and HashMap" label="Prefix Sum and HashMap">

### Approach 1: Prefix Sum and HashMap

We calculate the prefix sum and use a hash map to store the remainder when each prefix sum is divided by `p`. This allows us to quickly find the smallest subarray whose removal makes the remaining sum divisible by `p`.

#### Implementation

```jsx live
function makeSumDivisibleByP() {
  const nums = [3, 1, 4, 2];
  const p = 6;

  const minSubarray = function(nums, p) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    const remainder = totalSum % p;
    if (remainder === 0) return 0;

    const prefixSum = new Map();
    prefixSum.set(0, -1);

    let currentSum = 0;
    let minLength = Infinity;

    for (let i = 0; i < nums.length; i++) {
      currentSum += nums[i];
      const currentRemainder = currentSum % p;

      const targetRemainder = (currentRemainder - remainder + p) % p;
      if (prefixSum.has(targetRemainder)) {
        minLength = Math.min(minLength, i - prefixSum.get(targetRemainder));
      }

      prefixSum.set(currentRemainder, i);
    }

    return minLength === Infinity ? -1 : minLength;
  };

  const result = minSubarray(nums, p);
  return (
    <div>
      <p>
        <b>Input:</b> nums = {JSON.stringify(nums)}, p = {p}
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
    function minSubarray(nums, p) {
      const totalSum = nums.reduce((acc, num) => acc + num, 0);
      const remainder = totalSum % p;
      if (remainder === 0) return 0;

      const prefixSum = new Map();
      prefixSum.set(0, -1);

      let currentSum = 0;
      let minLength = Infinity;

      for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        const currentRemainder = currentSum % p;

        const targetRemainder = (currentRemainder - remainder + p) % p;
        if (prefixSum.has(targetRemainder)) {
          minLength = Math.min(minLength, i - prefixSum.get(targetRemainder));
        }

        prefixSum.set(currentRemainder, i);
      }

      return minLength === Infinity ? -1 : minLength;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function minSubarray(nums: number[], p: number): number {
      const totalSum = nums.reduce((acc, num) => acc + num, 0);
      const remainder = totalSum % p;
      if (remainder === 0) return 0;

      const prefixSum = new Map<number, number>();
      prefixSum.set(0, -1);

      let currentSum = 0;
      let minLength = Infinity;

      for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        const currentRemainder = currentSum % p;

        const targetRemainder = (currentRemainder - remainder + p) % p;
        if (prefixSum.has(targetRemainder)) {
          minLength = Math.min(minLength, i - prefixSum.get(targetRemainder)!);
        }

        prefixSum.set(currentRemainder, i);
      }

      return minLength === Infinity ? -1 : minLength;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def minSubarray(self, nums: List[int], p: int) -> int:
            total_sum = sum(nums)
            remainder = total_sum % p
            if remainder == 0:
                return 0

            prefix_sum = {0: -1}
            current_sum = 0
            min_length = float('inf')

            for i, num in enumerate(nums):
                current_sum += num
                current_remainder = current_sum % p

                target_remainder = (current_remainder - remainder + p) % p
                if target_remainder in prefix_sum:
                    min_length = min(min_length, i - prefix_sum[target_remainder])

                prefix_sum[current_remainder] = i

            return min_length if min_length != float('inf') else -1
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    import java.util.HashMap;
    import java.util.Map;

    class Solution {
        public int minSubarray(int[] nums, int p) {
            int totalSum = 0;
            for (int num : nums) {
                totalSum += num;
            }
            int remainder = totalSum % p;
            if (remainder == 0) {
                return 0;
            }

            Map<Integer, Integer> prefixSum = new HashMap<>();
            prefixSum.put(0, -1);

            int currentSum = 0;
            int minLength = Integer.MAX_VALUE;

            for (int i = 0; i < nums.length; i++) {
                currentSum += nums[i];
                int currentRemainder = currentSum % p;

                int targetRemainder = (currentRemainder - remainder + p) % p;
                if (prefixSum.containsKey(targetRemainder)) {
                    minLength = Math.min(minLength, i - prefixSum.get(targetRemainder));
                }

                prefixSum.put(currentRemainder, i);
            }

            return minLength == Integer.MAX_VALUE ? -1 : minLength;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>
    #include <unordered_map>
    #include <algorithm>
    #include <numeric>

    class Solution {
    public:
        int minSubarray(std::vector<int>& nums, int p) {
            int totalSum = std::accumulate(nums.begin(), nums.end(), 0);
            int remainder = totalSum % p;
            if (remainder == 0) return 0;

            std::unordered_map<int, int> prefixSum;
            prefixSum[0] = -1;

            int currentSum = 0;
            int minLength = INT_MAX;

            for (int i = 0; i < nums.size(); ++i) {
                currentSum += nums[i];
                int currentRemainder = currentSum %```
 p;

                int targetRemainder = (currentRemainder - remainder + p) % p;
                if (prefixSum.count(targetRemainder)) {
                    minLength = std::min(minLength, i - prefixSum[targetRemainder]);
                }

                prefixSum[currentRemainder] = i;
            }

            return minLength == INT_MAX ? -1 : minLength;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$, where $$n$$ is the length of the `nums` array.
- Space Complexity: $$O(n)$$, for storing the prefix sum and remainder in the hash map.

</tabItem>

<tabItem value="Brute Force" label="Brute Force">

### Approach 2: Brute Force

Although less efficient than the prefix sum approach, we can solve the problem using a brute force approach. We iterate through all possible subarrays and check if removing them would make the sum divisible by `p`.

#### Implementation

```jsx live
function makeSumDivisibleByP() {
  const nums = [6,3,5,2];
  const p = 9;

  const minSubarray = function(nums, p) {
    const n = nums.length;
    let minLength = Infinity;

    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = i; j < n; j++) {
        sum += nums[j];
        if ((sum % p === 0) && ((j - i + 1) < minLength)) {
          minLength = j - i + 1;
        }
      }
    }

    return minLength === Infinity ? -1 : minLength;
  };

  const result = minSubarray(nums, p);
  return (
    <div>
      <p>
        <b>Input:</b> nums = {JSON.stringify(nums)}, p = {p}
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
    function minSubarray(nums, p) {
      const n = nums.length;
      let minLength = Infinity;

      for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
          sum += nums[j];
          if ((sum % p === 0) && ((j - i + 1) < minLength)) {
            minLength = j - i + 1;
          }
        }
      }

      return minLength === Infinity ? -1 : minLength;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function minSubarray(nums: number[], p: number): number {
      const n = nums.length;
      let minLength = Infinity;

      for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
          sum += nums[j];
          if ((sum % p === 0) && ((j - i + 1) < minLength)) {
            minLength = j - i + 1;
          }
        }
      }

      return minLength === Infinity ? -1 : minLength;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def minSubarray(self, nums: List[int], p: int) -> int:
            n = len(nums)
            min_length = float('inf')

            for i in range(n):
                sum = 0
                for j in range(i, n):
                    sum += nums[j]
                    if sum % p == 0 and j - i + 1 < min_length:
                        min_length = j - i + 1

            return min_length if min_length != float('inf') else -1
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int minSubarray(int[] nums, int p) {
            int n = nums.length;
            int minLength = Integer.MAX_VALUE;

            for (int i = 0; i < n; i++) {
                int sum = 0;
                for (int j = i; j < n; j++) {
                    sum += nums[j];
                    if (sum % p == 0 && (j - i + 1) < minLength) {
                        minLength = j - i + 1;
                    }
                }
            }

            return minLength == Integer.MAX_VALUE ? -1 : minLength;
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
        int minSubarray(std::vector<int>& nums, int p) {
            int n = nums.size();
            int minLength = INT_MAX;

            for (int i = 0; i < n; i++) {
                int sum = 0;
                for (int j = i; j < n; j++) {
                    sum += nums[j];
                    if (sum % p == 0 && (j - i + 1) < minLength) {
                        minLength = j - i + 1;
                    }
                }
            }

            return minLength == INT_MAX ? -1 : minLength;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n^2)$$, where $$n$$ is the length of the `nums` array, due to the nested loops.
- Space Complexity: $$O(1)$$, as no extra space is used except for a few variables.

</tabItem>
</Tabs>

:::tip

By using either the prefix sum and hash map approach or the brute force approach, we can efficiently solve the Make Sum Divisible by P problem. The choice of implementation language depends on the specific requirements and constraints of the problem.

:::

## References

- **LeetCode Problem:** [Make Sum Divisible by P](https://leetcode.com/problems/make-sum-divisible-by-p/)
- **Solution Link:** [Make Sum Divisible by P Solution on LeetCode](https://leetcode.com/problems/make-sum-divisible-by-p/solution/)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)

 