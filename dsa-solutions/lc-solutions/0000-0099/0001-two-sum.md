---
id: two-sum
title: Two Sum Problem (LeetCode)
sidebar_label: 0001 - Two Sum
tags:
  - Two Sum
  - Hash Table
  - Two Pointer
  - Array
  - LeetCode
  - JavaScript
  - TypeScript
description: "This is a solution to the Two Sum problem on LeetCode."
---

We have provided multiple solutions to the Two Sum problem on LeetCode. The problem is to find two numbers in an array that add up to a target sum. We have provided solutions using a brute force approach, a hash table, and the two-pointer technique. The hash table approach is the most efficient among the three approaches and is recommended for large inputs.

|Problem Statement | Solution Link | LeetCode Profile|
|:---|:---|:---|
| [Two Sum on LeetCode](https://leetcode.com/problems/two-sum/) | [Two Sum Solution on LeetCode](https://leetcode.com/problems/two-sum/solutions/4958021/two-sum-problem-solution-using-hash-table-ts-js-java-py-cpp-recommended-solutions) | [Ajay Dhangar](https://leetcode.com/ajaydhangar49/) |

LeetCode provides the [Two Sum problem](https://leetcode.com/problems/two-sum/) with the following problem statement:

### Problem Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Examples

```text
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```

```text
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

```text
Input: nums = [3,3], target = 6
Output: [0,1]
```

### Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

## Solution for Two Sum Problem

### Intuition

The problem can be solved using a brute force approach, a hash table, or the two-pointer technique. The brute force approach has a time complexity of **_O(n<sup>2</sup>)_**, the hash table approach has a time complexity of **_O(n)_**, and the two-pointer technique has a time complexity of **_O(n log n)_**.

### Approach 1: Brute Force (Naive)

The brute force approach is simple. We iterate through each element `nums[i]` and check if there is another element `nums[j]` such that `nums[i] + nums[j] == target`. If we find such a pair, we return the indices `[i, j]`.

#### Implementation

```jsx live
function twoSumProblem() {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }

    return [];
  };

  const result = twoSum(nums, target);
  return (
    <div>
      <p><b>Input:</b> nums = {"[", nums.join(", "), "]"}, target = {target}</p>
      <p><b>Output:</b> {"[", result.join(", "), "]"}</p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
   ```javascript
    function twoSum(nums, target) {
      for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
            return [i, j];
          }
        }
      }

    return [];
    }
    ```
  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">  
   ```typescript
    function twoSum(nums: number[], target: number): number[] {
      for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
            return [i, j];
          }
        }
      }

      return [];
    }
    ```
  </TabItem>
  <TabItem value="Python" label="Python">  
   ```python
    class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                   return [i, j]

        return []        
    ```
  </TabItem>
  <TabItem value="Java" label="Java">  
   ```java
    class Solution {
        public int[] twoSum(int[] nums, int target) {
            for (int i = 0; i < nums.length; i++) {
                for (int j = i + 1; j < nums.length; j++) {
                    if (nums[i] + nums[j] == target) {
                        return new int[] {i, j};
                    }
                }
            }

            return new int[0];
        }
    }
    ```
  </TabItem>
  <TabItem value="C++" label="C++">  
   ```cpp
    class Solution {
    public:
        vector<int> twoSum(vector<int>& nums, int target) {
            for (int i = 0; i < nums.size(); i++) {
                for (int j = i + 1; j < nums.size(); j++) {
                    if (nums[i] + nums[j] == target) {
                        return {i, j};
                    }
                }
            }

            return {};
        }
    };
    ```
  </TabItem>  
</Tabs>


#### Complexity Analysis

- Time Complexity: **_O(n<sup>2</sup>)_**
- Space Complexity: **_O(1)_**
- Where `n` is the length of the input array `nums`.
- The time complexity is **_O(n<sup>2</sup>)_** because we are iterating through the array twice.
- The space complexity is **_O(1)_** because we are not using any extra space.
- This approach is not efficient and is not recommended for large inputs.

### Approach 2: Using Hash Table

We can improve the time complexity of the brute force approach by using a hash table to store the elements and their indices. While we iterate through the array, we check if the difference between the target and the current element exists in the hash table. If it does, we return the indices of the current element and the element that makes up the target sum.

#### Implementation

```jsx live
function twoSumProblem() {
  const nums = [2, 7, 11, 15];
  const target = 9;

    const twoSum = function (nums, target) {
        const numMap = new Map();

        for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
        }

        return [];
    };

  const result = twoSum(nums, target);
  return (
    <div>
      <p><b>Input:</b> nums = {"[", nums.join(", "), "]"}, target = {target}</p>
      <p><b>Output:</b> {"[", result.join(", "), "]"}</p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
   ```javascript
    function twoSum(nums, target) {
      const numMap = new Map();

      for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
          return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
      }

      return [];
    }
    ```
  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">  
   ```typescript
    function twoSum(nums: number[], target: number): number[] {
      const numMap = new Map<number, number>();

      for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
          return [numMap.get(complement)!, i];
        }
        numMap.set(nums[i], i);
      }

      return [];
    }
    ```
  </TabItem>
  <TabItem value="Python" label="Python">  
   ```python
     class Solution:
      def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_map = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in num_map:
                return [num_map[complement], i]
            num_map[num] = i

        return []
    ```
  </TabItem>
  <TabItem value="Java" label="Java">  
   ```java
    class Solution {
        public int[] twoSum(int[] nums, int target) {
            Map<Integer, Integer> numMap = new HashMap<>();

            for (int i = 0; i < nums.length; i++) {
                int complement = target - nums[i];
                if (numMap.containsKey(complement)) {
                    return new int[] {numMap.get(complement), i};
                }
                numMap.put(nums[i], i);
            }

            return new int[0];
        }
    }
    ```
  </TabItem>
  <TabItem value="C++" label="C++">  
   ```cpp
    class Solution {
    public:
        vector<int> twoSum(vector<int>& nums, int target) {
            unordered_map<int, int> numMap;

            for (int i = 0; i < nums.size(); i++) {
                int complement = target - nums[i];
                if (numMap.find(complement) != numMap.end()) {
                    return {numMap[complement], i};
                }
                numMap[nums[i]] = i;
            }

            return {};
        }
    };
    ```
  </TabItem>
</Tabs>


#### Complexity Analysis

- Time Complexity: **_O(n)_**
- Space Complexity: **_O(n)_**
- Where `n` is the length of the input array `nums`.
- The time complexity is **_O(n)_** because we iterate through the array only once.
- The space complexity is **_O(n)_** because we use a hash table to store the elements and their indices.
- This approach is more efficient than the brute force approach and is recommended for large inputs.
- The hash table lookup has an average time complexity of **_O(1)_**.
- The space complexity is **_O(n)_** because we store at most `n` elements in the hash table.
- The total time complexity is **_O(n)_**. and the total space complexity is **_O(n)_**.

### Approach 3: Using Two Pointers

We can also solve this problem using the two-pointer technique. We first sort the array and then use two pointers, one at the beginning and one at the end. We move the pointers based on the sum of the elements at the two pointers. If the sum is equal to the target, we return the indices of the two elements. If the sum is less than the target, we move the left pointer to the right. If the sum is greater than the target, we move the right pointer to the left.

#### Implementation

```jsx live
function twoSumProblem() {
  const nums = [2, 7, 11, 15];
  const target = 9;

  const twoSum = function (nums, target) {
    const sortedNums = nums.map((num, index) => [num, index]);
    sortedNums.sort((a, b) => a[0] - b[0]);

    let left = 0;
    let right = sortedNums.length - 1;

    while (left < right) {
      const sum = sortedNums[left][0] + sortedNums[right][0];
      if (sum === target) {
        return [sortedNums[left][1], sortedNums[right][1]];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return [];
  };

  const result = twoSum(nums, target);
  return (
    <div>
      <p><b>Input:</b> nums = {"[", nums.join(", "), "]"}, target = {target}</p>
      <p><b>Output:</b> {"[", result.join(", "), "]"}</p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
   ```javascript
    function twoSum(nums, target) {
      const sortedNums = nums.map((num, index) => [num, index]);
      sortedNums.sort((a, b) => a[0] - b[0]);

      let left = 0;
      let right = sortedNums.length - 1;

      while (left < right) {
        const sum = sortedNums[left][0] + sortedNums[right][0];
        if (sum === target) {
          return [sortedNums[left][1], sortedNums[right][1]];
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }

      return [];
    }
    ```
  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">  
   ```typescript
    function twoSum(nums: number[], target: number): number[] {
      const sortedNums = nums.map((num, index) => [num, index]);
      sortedNums.sort((a, b) => a[0] - b[0]);

      let left = 0;
      let right = sortedNums.length - 1;

      while (left < right) {
        const sum = sortedNums[left][0] + sortedNums[right][0];
        if (sum === target) {
          return [sortedNums[left][1], sortedNums[right][1]];
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }

      return [];
    }
    ```
  </TabItem>
  <TabItem value="Python" label="Python">  
   ```python
     class Solution:
      def twoSum(self, nums: List[int], target: int) -> List[int]:
        sorted_nums = sorted(enumerate(nums), key=lambda x: x[1])

        left, right = 0, len(sorted_nums) - 1

        while left < right:
            sum = sorted_nums[left][1] + sorted_nums[right][1]
            if sum == target:
                return [sorted_nums[left][0], sorted_nums[right][0]]
            elif sum < target:
                left += 1
            else:
                right -= 1

        return []
    ```
  </TabItem>
  <TabItem value="Java" label="Java">  
   ```java
    class Solution {
        public int[] twoSum(int[] nums, int target) {
            int[][] sortedNums = new int[nums.length][2];
            for (int i = 0; i < nums.length; i++) {
                sortedNums[i] = new int[] {nums[i], i};
            }

            Arrays.sort(sortedNums, (a, b) -> Integer.compare(a[0], b[0]));

            int left = 0;
            int right = sortedNums.length - 1;

            while (left < right) {
                int sum = sortedNums[left][0] + sortedNums[right][0];
                if (sum == target) {
                    return new int[] {sortedNums[left][1], sortedNums[right][1]};
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }

            return new int[0];
        }
    }
    ```
  </TabItem>
  <TabItem value="C++" label="C++">  
   ```cpp
    class Solution {
    public:
        vector<int> twoSum(vector<int>& nums, int target) {
            vector<vector<int>> sortedNums(nums.size(), vector<int>(2));
            for (int i = 0; i < nums.size(); i++) {
                sortedNums[i] = {nums[i], i};
            }

            sort(sortedNums.begin(), sortedNums.end(), [](vector<int>& a, vector<int>& b) {
                return a[0] < b[0];
            });

            int left = 0;
            int right = sortedNums.size() - 1;

            while (left < right) {
                int sum = sortedNums[left][0] + sortedNums[right][0];
                if (sum == target) {
                    return {sortedNums[left][1], sortedNums[right][1]};
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }

            return {};
        }
    };
    ```
  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: **_O(n log n)_**
- Space Complexity: **_O(n)_**
- Where `n` is the length of the input array `nums`.
- The time complexity is **_O(n log n)_** because we sort the array.
- The space complexity is **_O(n)_** because we store the indices of the elements in the sorted array.
- This approach is efficient and is recommended for large inputs.
- The total time complexity is **_O(n log n)_**. and the total space complexity is **_O(n)_**.

:::tip Note
**Which is the best approach? and why?**

The hash table approach is the most efficient among the three approaches. It has a time complexity of **_O(n)_** and is recommended for large inputs. The two-pointer approach also has a time complexity of **_O(n log n)_** but requires sorting the array, which may not be necessary in some cases. The brute force approach is the least efficient with a time complexity of **_O(n<sup>2</sup>)_** and is not recommended for large inputs.
:::

## Summary

In this problem, we learned how to find two numbers in an array that add up to a target sum. We explored three different approaches to solve this problem:

1. The brute force approach with a time complexity of **_O(n<sup>2</sup>)_**.
2. The hash table approach with a time complexity of **_O(n)_**.
3. The two-pointer approach with a time complexity of **_O(n log n)_**.
4. The hash table approach is the most efficient and is recommended for large inputs.
