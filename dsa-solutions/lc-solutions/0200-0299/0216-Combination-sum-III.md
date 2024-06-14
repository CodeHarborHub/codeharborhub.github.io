---
id: combination-sum-III
title: Combination Sum III
sidebar_label: 0216-combination-sum-III
tags:
  - Dynamic Programming
  - Array
  - C++
  - Java
  - Python
description: "This document provides a solution to the combination sum III problem,"
---

## Problem Statement

Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

1. Only numbers 1 through 9 are used.
2. Each number is used at most once.

Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Explanation:

```
1 + 2 + 4 = 7
There are no other valid combinations.
```

Example 2:

Input: k = 3, n = 9
Output: [[1,2,6],[1,3,5],[2,3,4]]
Explanation:

```
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.
```

Example 3:

Input: k = 4, n = 1
Output: []
Explanation: There are no valid combinations.

```
Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.
```

## Solutions

### Intuition

    To find the solution, we can utilize a Depth First Search (DFS) algorithm. DFS will help us explore all possible combinations of numbers recursively while adhering to the constraints. Here's the intuition behind using DFS for this problem:

    1. We begin by considering numbers from 1 to 9 and use each of them as a starting point of a combination.

    2. To build a combination, we add a number to the current combination (t in the given code) and recursively call the DFS function to add the next number.

    3. While adding the new number, we have three conditions to check:
            a. We must not exceed the target sum n.
            b. We should not use more than k numbers.
            c. We cannot use numbers greater than 9.

    4. If the sum of numbers in the current combination equals n and we have used exactly k numbers, then we found a valid combination which we add to the answer list (ans).

    5. After exploring a number's inclusion, we backtrack by removing the number from the current combination and exploring the possibility of not including that number.

    6. Through this process of including and excluding each number, and backtracking after exploring each possibility, we ensure that all valid combinations are found.

    7. Each combination is built up incrementally from the smaller numbers towards the larger ones to avoid repeated combinations and maintain uniqueness.

The beauty of DFS in this situation is that it inherently avoids duplicates and handles the "each number used at most once" constraint by the recursive nature of its implementation. DFS explores each branch fully (one specific number added vs. not added) before backtracking, which helps cover all potential unique combinations without repetition.

## Solution Approach

The provided solution uses a Depth First Search (DFS) algorithm to explore all possible unique combinations of numbers that add up to n using at most k numbers. Here is a step-by-step breakdown of the approach, referring to specific parts of the implementation:

1.  DFS Function: The function dfs(i: int, s: int) is a recursive function where i represents the current number that we are considering adding to the combination, and s is the remaining sum that we need to achieve. The solution initializes the function by calling dfs(1, n).

2.  Base Conditions:

    a. The first base condition checks whether the remaining sum s is 0. If s is 0 and we have exactly k numbers in our temporary combination t, then we have found a valid combination. We then append a a copy of t (using t[:] to create a copy) to our answers list ans.

    b. The second base condition checks whether the current number i is greater than 9 or i is greater than the remaining sum s or we have already selected k numbers. In any of these cases, the function returns without making further recursive calls since no valid combination can be completed under these conditions.

3.  Choosing the Current Number:

    We add the current number i to our temporary combination t. This is the "exploring the possibility of including the number" part of the DFS.

4.  Recursive Call for Next Number:

    After including the current number, we make a recursive call to dfs(i + 1, s - i). This call will explore combinations where the current number i is part of the solution. By passing i + 1, we are ensuring that the same number is not used more than once. By passing s - i, we are reducing the sum by the value of the number we've included.

5.  Backtracking:

    After the recursive call, we backtrack by removing the last number that we added — t.pop(). This is where we explore the possibility of excluding the current number.

6.  Recursive Call without the Current Number:

    Another recursive call dfs(i + 1, s) is then made. This call will explore combinations that exclude the current number i.

7.  Initialization:

    The function maintains a list ans to collect all valid combinations found by the DFS.
    A list t is used to build a temporary combination that is being explored.

8.  Return Result:

    Once the initial call to dfs(1, n) has completed, all possible combinations have been explored, and the ans list contains all valid combinations as required by the problem. This list is returned as the final result.

Through the combination of recursive DFS, building combinations incrementally, making sure that each number is used at most once, and backtracking after exploring each possibility, the solution efficiently finds all the valid combinations that sum up to n. The use of a temporary list t for tracking the current combination and the answer list ans are examples of data structures used in this problem to store intermediate and final results, respectively.

<Tabs>
    <TabItem value="cpp" label="C++" default>
      <SolutionAuthor name = "@Ajay-Dhangar"/>
      ```cpp
      #include <vector>
      #include <numeric>
      using namespace std;

      class Solution {
      public:
          vector<vector<int>> combinationSum3(int k, int n) {
              vector<vector<int>> output;
              vector<int> currentSeq;
              vector<int> nums(9);
              iota(nums.begin(), nums.end(), 1);

              combination(nums, 0, n, k, currentSeq, output);

              return output;
          }

      private:
          bool combination(vector<int>& nums, int pos, int target, int length, vector<int>& currentSeq, vector<vector<int>>& output) {
              if (currentSeq.size() > length) {
                  return false;
              }
              if (target == 0 && currentSeq.size() == length) {
                  output.push_back(currentSeq);
                  return true;
              }
              else if (target < 0) {
                  return false;
              }

              for (int i = pos; i < nums.size(); ++i) {
                  currentSeq.push_back(nums[i]);

                  auto result = combination(nums, i + 1, target - nums[i], length, currentSeq, output);

                  currentSeq.pop_back();

                  if (!result) {
                      return true;
                  }
              }
              return true;
          }
      };
      ```
    </TabItem>
    <TabItem value="java" label="Java">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```java
      import java.util.*;

      public class Solution {
          public List<List<Integer>> combinationSum3(int k, int n) {
              List<List<Integer>> output = new ArrayList<>();
              List<Integer> currentSeq = new ArrayList<>();
              List<Integer> nums = new ArrayList<>();
              for (int i = 1; i <= 9; i++) {
                  nums.add(i);
              }

              combination(nums, 0, n, k, currentSeq, output);

              return output;
          }

          private boolean combination(List<Integer> nums, int pos, int target, int length, List<Integer> currentSeq, List<List<Integer>> output) {
              if (currentSeq.size() > length) {
                  return false;
              }
              if (target == 0 && currentSeq.size() == length) {
                  output.add(new ArrayList<>(currentSeq));
                  return true;
              } else if (target < 0) {
                  return false;
              }

              for (int i = pos; i < nums.size(); ++i) {
                  currentSeq.add(nums.get(i));

                  boolean result = combination(nums, i + 1, target - nums.get(i), length, currentSeq, output);

                  currentSeq.remove(currentSeq.size() - 1);

                  if (!result) {
                      return true;
                  }
              }
              return true;
          }

          public static void main(String[] args) {
              Solution solution = new Solution();
              System.out.println(solution.combinationSum3(3, 7));  // Output: [[1, 2, 4]]
              System.out.println(solution.combinationSum3(3, 9));  // Output: [[1, 2, 6], [1, 3, 5], [2, 3, 4]]
          }
      }
      ```
    </TabItem>
    <TabItem value="python" label="Python">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```python
      from typing import List

      class Solution:
          def combinationSum3(self, k: int, n: int) -> List[List[int]]:
              def combination(nums, pos, target, length, currentSeq, output):
                  if len(currentSeq) > length:
                      return False
                  if target == 0 and len(currentSeq) == length:
                      output.append(list(currentSeq))
                      return True
                  elif target < 0:
                      return False

                  for i in range(pos, len(nums)):
                      currentSeq.append(nums[i])

                      result = combination(nums, i + 1, target - nums[i], length, currentSeq, output)

                      currentSeq.pop()

                      if not result:
                          return True
                  return True

              output = []
              currentSeq = []
              nums = list(range(1, 10))

              combination(nums, 0, n, k, currentSeq, output)

              return output
      ```
    </TabItem>
    <TabItem value="c" label="C">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <stdbool.h>

      void combination(int* nums, int pos, int target, int length, int* currentSeq, int currentLen, int*** output, int* outputSize, int** columnSizes) {
          if (currentLen > length) {
              return;
          }
          if (target == 0 && currentLen == length) {
              (*outputSize)++;
              *output = realloc(*output, (*outputSize) * sizeof(int*));
              (*output)[*outputSize - 1] = malloc(currentLen * sizeof(int));
              (*columnSizes) = realloc(*columnSizes, (*outputSize) * sizeof(int));
              for (int i = 0; i < currentLen; i++) {
                  (*output)[*outputSize - 1][i] = currentSeq[i];
              }
              (*columnSizes)[*outputSize - 1] = currentLen;
              return;
          } else if (target < 0) {
              return;
          }

          for (int i = pos; i < 9; i++) {
              currentSeq[currentLen] = nums[i];
              combination(nums, i + 1, target - nums[i], length, currentSeq, currentLen + 1, output, outputSize, columnSizes);
          }
      }

      int** combinationSum3(int k, int n, int* returnSize, int** returnColumnSizes) {
          int* nums = malloc(9 * sizeof(int));
          for (int i = 0; i < 9; i++) {
              nums[i] = i + 1;
          }

          int* currentSeq = malloc(k * sizeof(int));
          int** output = NULL;
          int* columnSizes = NULL;
          int outputSize = 0;

          combination(nums, 0, n, k, currentSeq, 0, &output, &outputSize, &columnSizes);

          *returnSize = outputSize;
          *returnColumnSizes = columnSizes;

          free(nums);
          free(currentSeq);

          return output;
      }
      ```
    </TabItem>

</Tabs>

## Time and Space Complexity

    The given Python code defines a method combinationSum3 that finds all possible combinations of k different numbers that add up to a number n, where each number is from 1 to 9 (inclusive) and each combination is unique.

### Time Complexity

    The time complexity of this function can be analyzed by looking at the recursive dfs calls. Each call to dfs potentially makes two further calls, corresponding to including the current number i or excluding it. We can view this as a binary tree of decisions, where at each step, we decide whether to include a number in our current combination (t.append(i)) or not (dfs(i + 1, s)).

    Each number between 1 and 9 is considered exactly once in the context of a particular combination, and there are 9 choices at the first call, 8 at the second, and so forth. However, the depth of our recursion is limited by k (the size of each combination) and the fact that we do not consider subsequent numbers once we reach a sum greater than n or a combination length equal to k.

    Therefore, the time complexity is O(9! / (9 - k)!) in the worst case (when n is large enough to allow all combinations of k numbers). Note that since k < 9, this time complexity remains within a polynomial bound with respect to 9 (the number of different numbers we can pick).

### Space Complexity

    The space complexity is determined by the space needed for the recursive call stack and the space used to store the combinations. In the worst case, the recursion can go as deep as k, as we stop further recursion when the length of the temporary list t reaches k. Therefore the recursion call stack will contribute $O(k)$.

    The space for storing all the combinations also needs to be considered. We have a list of lists to store the valid combinations, and, at most, each combination contains k elements. In the worst case, the number of combinations stored will also be bounded by the total number of combinations of k numbers out of 9, which is $O(9! / (k!(9 - k)!))$ (this is the binomial coefficient representing the number of ways to choose k distinct integers from a set of 9).

    However, because these combinations are part of the output, we often do not count this as extra space in terms of space complexity analysis (since the space is required to represent the output). Thus the space complexity is usually considered to be $O(k)$, which accounts only for the recursion depth and not the output storage.

    Combining both the recursion call stack and the output storage, and if we were to include the output as part of the space complexity, our total space complexity would be $O(9! / (k!(9 - k)!) + k)$.

## Video Lecture

<LiteYouTubeEmbed
    id="77KQifr--ek"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="CodeHarborHub Combination Sum III"
    poster="maxresdefault"
    webp />
