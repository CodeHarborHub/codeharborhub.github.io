---
id: split-array-into-consecutive-subsequences
title:   Split Array into Consecutive Subsequences
sidebar_label: 659. Split Array into Consecutive Subsequences


tags:
- Array
- Hash Table
- Greedy
- Heap (Priority Queue)

description: "This is a solution to the  Split Array into Consecutive Subsequences problem on LeetCode."
---

## Problem Description
You are given an integer array nums that is sorted in non-decreasing order.

Determine if it is possible to split nums into one or more subsequences such that both of the following conditions are true:

Each subsequence is a consecutive increasing sequence (i.e. each integer is exactly one more than the previous integer).
All subsequences have a length of 3 or more.
Return true if you can split nums according to the above conditions, or false otherwise.

A subsequence of an array is a new array that is formed from the original array by deleting some (can be none) of the elements without disturbing the relative positions of the remaining elements. (i.e., [1,3,5] is a subsequence of [1,2,3,4,5] while [1,3,2] is not).

 
### Examples

**Example 1:**
```
Input: nums = [1,2,3,3,4,5]
Output: true
Explanation: nums can be split into the following subsequences:
[1,2,3,3,4,5] --> 1, 2, 3
[1,2,3,3,4,5] --> 3, 4, 5
```

**Example 2:**
```
Input: nums = [1,2,3,3,4,4,5,5]
Output: true
Explanation: nums can be split into the following subsequences:
[1,2,3,3,4,4,5,5] --> 1, 2, 3, 4, 5
[1,2,3,3,4,4,5,5] --> 3, 4, 5
```


### Constraints
- `1 <= nums.length <= 10^4`
- `-1000 <= nums[i] <= 1000`
- `nums is sorted in non-decreasing order.`

## Solution for Split Array into Consecutive Subsequences

### Approach 
#### Data Structures
1. **`left` Counter:** 
   - Keeps track of the frequency of each number in the array.
   - Helps to know how many of a particular number are left to be placed in a subsequence.

2. **`end` Counter:**
   - Keeps track of the subsequences that end at a particular number.
   - Helps to know if a number can be appended to an existing subsequence.

### Algorithm
1. **Initialization:**
   - Count the frequency of each number in the array `A` using the `left` counter.

2. **Iteration through the Array:**
   - For each number `i` in `A`, do the following:
     - If `i` is no longer available in `left` (its count is zero), skip it.
     - Decrease the count of `i` in `left`.

     - **Check if `i` can extend a previous subsequence:**
       - If there is a subsequence ending at `i-1` (i.e., `end[i - 1] > 0`):
         - Decrease the count of subsequences ending at `i-1`.
         - Increase the count of subsequences ending at `i`.

     - **Else, Check if `i` can start a new subsequence:**
       - If there are available `i+1` and `i+2` in `left`:
         - Decrease the count of `i+1` and `i+2` in `left`.
         - Increase the count of subsequences ending at `i+2`.

     - **If neither of the above conditions hold:**
       - Return `False` because `i` cannot be part of a valid subsequence.

3. **Return `True`:**
   - If all numbers have been processed without any issues, return `True`.

### Intuition
- The main idea is to use a greedy approach to build valid subsequences. 
- By maintaining counters (`left` and `end`), we can efficiently manage the formation and extension of subsequences.
- We prioritize extending existing subsequences to ensure that subsequences of length at least 3 are formed whenever possible.
- If extending is not possible, we check if a new subsequence can be started.
- The algorithm ensures that every number is either used to extend a subsequence or to start a new valid subsequence, making it both efficient and correct.
<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
      function isPossible(A) {
        const left = new Map();
        const end = new Map();

        for (let num of A) {
            left.set(num, (left.get(num) || 0) + 1);
        }

        for (let num of A) {
            if (left.get(num) === 0) continue;
            left.set(num, left.get(num) - 1);

            if ((end.get(num - 1) || 0) > 0) {
                end.set(num - 1, end.get(num - 1) - 1);
                end.set(num, (end.get(num) || 0) + 1);
            } else if ((left.get(num + 1) || 0) > 0 && (left.get(num + 2) || 0) > 0) {
                left.set(num + 1, left.get(num + 1) - 1);
                left.set(num + 2, left.get(num + 2) - 1);
                end.set(num + 2, (end.get(num + 2) || 0) + 1);
            } else {
                return false;
            }
        }

        return true;
    }

      const input =[1,2,3,3,4,5]
      const output = isPossible(input)
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
    - Space Complexity: $ O(N)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
     function isPossible(A) {
    const left = new Map();
    const end = new Map();

    for (let num of A) {
        left.set(num, (left.get(num) || 0) + 1);
    }

    for (let num of A) {
        if (left.get(num) === 0) continue;
        left.set(num, left.get(num) - 1);

        if ((end.get(num - 1) || 0) > 0) {
            end.set(num - 1, end.get(num - 1) - 1);
            end.set(num, (end.get(num) || 0) + 1);
        } else if ((left.get(num + 1) || 0) > 0 && (left.get(num + 2) || 0) > 0) {
            left.set(num + 1, left.get(num + 1) - 1);
            left.set(num + 2, left.get(num + 2) - 1);
            end.set(num + 2, (end.get(num + 2) || 0) + 1);
        } else {
            return false;
        }
    }

    return true;
}
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   function isPossible(A: number[]): boolean {
    const left = new Map<number, number>();
    const end = new Map<number, number>();

    for (let num of A) {
        left.set(num, (left.get(num) || 0) + 1);
    }

    for (let num of A) {
        if ((left.get(num) || 0) === 0) continue;
        left.set(num, (left.get(num) || 0) - 1);

        if ((end.get(num - 1) || 0) > 0) {
            end.set(num - 1, (end.get(num - 1) || 0) - 1);
            end.set(num, (end.get(num) || 0) + 1);
        } else if ((left.get(num + 1) || 0) > 0 && (left.get(num + 2) || 0) > 0) {
            left.set(num + 1, (left.get(num + 1) || 0) - 1);
            left.set(num + 2, (left.get(num + 2) || 0) - 1);
            end.set(num + 2, (end.get(num + 2) || 0) + 1);
        } else {
            return false;
        }
    }

    return true;
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
       def isPossible(self, A):
        left = collections.Counter(A)
        end = collections.Counter()
        for i in A:
            if not left[i]: continue
            left[i] -= 1
            if end[i - 1] > 0:
                end[i - 1] -= 1
                end[i] += 1
            elif left[i + 1] and left[i + 2]:
                left[i + 1] -= 1
                left[i + 2] -= 1
                end[i + 2] += 1
            else:
                return False
        return True
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.HashMap;
import java.util.Map;

public class Solution {
    public boolean isPossible(int[] A) {
        Map<Integer, Integer> left = new HashMap<>();
        Map<Integer, Integer> end = new HashMap<>();

        for (int num : A) {
            left.put(num, left.getOrDefault(num, 0) + 1);
        }

        for (int num : A) {
            if (left.get(num) == 0) continue;
            left.put(num, left.get(num) - 1);

            if (end.getOrDefault(num - 1, 0) > 0) {
                end.put(num - 1, end.get(num - 1) - 1);
                end.put(num, end.getOrDefault(num, 0) + 1);
            } else if (left.getOrDefault(num + 1, 0) > 0 && left.getOrDefault(num + 2, 0) > 0) {
                left.put(num + 1, left.get(num + 1) - 1);
                left.put(num + 2, left.get(num + 2) - 1);
                end.put(num + 2, end.getOrDefault(num + 2, 0) + 1);
            } else {
                return false;
            }
        }

        return true;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
       bool isPossible(vector<int>& A) {
        unordered_map<int, int> left, end;
        for (int i: A) {
            left[i]++;
        }
        for (int i: A) {
            if (left[i] == 0) continue;
            left[i]--;
            if (end[i - 1] > 0) {   
                end[i - 1]--;
                end[i]++;
            } else if (left[i + 1] > 0 && left[i + 2] > 0) {
                left[i + 1]--;
                left[i + 2]--;
                end[i + 2]++;
            } else {   
                return false;
            }
        }
        return true;
    }
    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Split Array into Consecutive Subsequences](https://leetcode.com/problems/split-array-into-consecutive-subsequences/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/split-array-into-consecutive-subsequences/description/)

