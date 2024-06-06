---
id: remove-duplicates-from-sorted-list-2
title: Remove Duplicated From Sorted List 2 Solution
sidebar_label: 0082 - Remove Duplicates from Sorted List II
tags:
  - Remove Duplicates from Sorted List II
  - Linked List
  - Two Pointers
  - LeetCode
  - C++
description: "Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well."
---

In this page, we will solve the Remove Duplicates from Sorted List II problem using . We will provide the implementation of the solution in C++ and python.

## Problem Description

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

### Examples

**Example 1:**

```plaintext
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
```

**Example 2:**

```plaintext
Input: head = [1,1,1,2,3]
Output: [2,3]
```

### Constraints

- `The number of nodes in the list is in the range [0, 300].`
- `-100 <= Node.val <= 100`
- `The list is guaranteed to be sorted in ascending order.`
- Only one valid answer exists.

---

## Solution for Two Sum Problem

### Intuition and Approach

The goal is to remove all elements from a sorted linked list that have duplicate values, ensuring that each element appears only once. We use a dummy node to simplify handling edge cases and traverse the list, removing duplicates as we encounter them.
<Tabs>
 <tabItem value="Brute Force" label="Brute Force">
  
### Approach : Removing Duplicates from Sorted Linked List

Iterate through each element in the linked list. For each element curr, compare its value with the value of the next node curr->next. If they are equal, it indicates a duplicate. Remove the duplicate by updating pointers to bypass the duplicate node. Continue this process until all duplicates are removed.
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
      <p>
        <b>Input:</b> nums = {("["+ nums.join(", ")+ "]")}, target = {target}
      </p>
      <p>
        <b>Output:</b> {("["+ result.join(", ")+ "]")}
      </p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@ajay-dhangar"/>
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
  <SolutionAuthor name="@ajay-dhangar"/> 
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
  <SolutionAuthor name="@ajay-dhangar"/>
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
  <SolutionAuthor name="@ajay-dhangar"/>
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
  <SolutionAuthor name="@ajay-dhangar"/>
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

- Time Complexity: $$O(n^2)$$
- Space Complexity: $$O(1)$$
- Where `n` is the length of the input array `nums`.
- The time complexity is $$O(n^2)$$ because we are iterating through the array twice.
- The space complexity is $$O(1)$$ because we are not using any extra space.
- This approach is not efficient and is not recommended for large inputs.

</tabItem>
<tabItem value="Hash Table" label="Hash Table">

### Approach 2: Using Hash Table

We can solve this problem more efficiently using a hash table. We iterate through the array and store the elements and their indices in a hash table. For each element `nums[i]`, we calculate the complement `target - nums[i]` and check if the complement is present in the hash table. If it is present, we return the indices `[i, numMap.get(complement)]`. If the complement is not present, we add the element `nums[i]` to the hash table. If no pair is found, we return an empty array.

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
      <p>
        <b>Input:</b> nums = {("["+ nums.join(", ")+ "]")}, target = {target}
      </p>
      <p>
        <b>Output:</b> {("["+ result.join(", ")+ "]")}
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@ajay-dhangar"/>
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
  <SolutionAuthor name="@ajay-dhangar"/>
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
  <SolutionAuthor name="@ajay-dhangar"/>
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
  <SolutionAuthor name="@ajay-dhangar"/>
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
  <SolutionAuthor name="@ajay-dhangar"/>
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

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(n)$$
- Where `n` is the length of the input array `nums`.
- The time complexity is $$O(n)$$ because we iterate through the array only once.
- The space complexity is $$O(n)$$ because we use a hash table to store the elements and their indices.
- This approach is more efficient than the brute force approach and is recommended for large inputs.
- The hash table lookup has an average time complexity of $$O(1)$$, which makes this approach efficient.
- The space complexity is $$O(n)$$ because we store at most `n` elements in the hash table.
- The total time complexity is $$O(n)$$. and the total space complexity is $$O(n)$$.

</tabItem>
<tabItem value="Two Pointer" label="Two Pointer">

### Approach 3: Using Two Pointers

We can also solve this problem using the two-pointer technique. We first sort the array and then use two pointers, `left` and `right`, to find the two numbers that add up to the target sum. We initialize `left` to `0` and `right` to `nums.length - 1`. We calculate the sum of the two numbers at the `left` and `right` pointers. If the sum is equal to the target, we return the indices `[left, right]`. If the sum is less than the target, we increment the `left` pointer. If the sum is greater than the target, we decrement the `right` pointer. If no pair is found, we return an empty array.

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
      <p>
        <b>Input:</b> nums = {("["+ nums.join(", ")+ "]")}, target = {target}
      </p>
      <p>
        <b>Output:</b> {("["+ result.join(", ")+ "]")}
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@ajay-dhangar"/>
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
  <SolutionAuthor name="@ajay-dhangar"/>

   ```ts
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
  <SolutionAuthor name="@ajay-dhangar"/>
   ```py
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
  <SolutionAuthor name="@ajay-dhangar"/>
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
  <SolutionAuthor name="@ajay-dhangar"/>
  
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

- Time Complexity: $$O(n \log n)$$
- Space Complexity: $$O(n)$$
- Where `n` is the length of the input array `nums`.
- The time complexity is $$O(n \log n)$$ because we sort the array.
- The space complexity is $$O(n)$$ because we store the indices of the elements in the sorted array.
- This approach is efficient and is recommended for large inputs.
- The total time complexity is $$O(n \log n)$$. and the total space complexity is $$O(n)$$.

</tabItem>
</Tabs>

:::tip Note
**Which is the best approach? and why?**

The hash table approach is the most efficient and is recommended for large inputs. The hash table lookup has an average time complexity of $$O(1)$$, which makes this approach efficient. The time complexity of the hash table approach is $$O(n)$$, which is better than the brute force approach with a time complexity of $$O(n^2)$$ and the two-pointer approach with a time complexity of $$O(n \log n)$$. The space complexity of the hash table approach is $$O(n)$$, which is the same as the two-pointer approach. Therefore, the hash table approach is the best approach for this problem.

:::

## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/two-sum/)
- **Solution Link:** [Two Sum Solution on LeetCode](https://leetcode.com/problems/two-sum/solutions/4958021/two-sum-problem-solution-using-hash-table-ts-js-java-py-cpp-recommended-solutions)
- **Authors LeetCode Profile:** [Ajay Dhangar](https://leetcode.com/ajaydhangar49/)
