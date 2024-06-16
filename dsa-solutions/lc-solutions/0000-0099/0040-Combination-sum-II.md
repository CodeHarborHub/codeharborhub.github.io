---
id: combination-sum-II
title: Combination Sum-II(LeetCode)
sidebar_label: 0040-Combination Sum-II
tags:
  - Array
  - Backtracking
description: Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
sidebar_position: 40
---

## Problem Statement

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output:
[
[1,2,2],
[5]
]

Constraints:

- 1 `<=` candidates.length `<=` 100
- 1 `<=` candidates[i] `<=` 50
- 1 `<=` target `<=` 30

## Solutions:

### Intuition

    The intuition behind the solution involves a backtracking technique, which is similar to depth-first search (DFS).

    Since we need to find all combinations that add up to the target and any number in the candidates can be used only once, we sort the candidates first. Sorting the array helps us to easily skip over duplicate elements and avoid generating duplicate combinations.

    Then, we perform **DFS with backtracking**, starting from the beginning of the candidates array and exploring each possibility by either including or excluding a candidate. After including a candidate in the combination, we call the function recursively, reducing the target by the value of that candidate and moving to the next index.

    While exploring, we keep track of the current sum of the combination, and when the sum equals the target, we add the current combination to the answer. If at any point, the sum exceeds target or we reach the end of the candidates array, we backtrack.

    To prevent duplicates, we skip subsequent candidates that are the same as the previous one at each stage in the loop. This way, we ensure that if a number has been used in a combination, the same number is not used immediately again to form another similar combination.

    The result of the function will be a list of lists, where each inner list is a unique combination of numbers that sum to the target value.

    Learn more about Backtracking patterns.

### Solution Approach

The solution uses depth-first search (DFS), backtracking, and sorting to effectively find all unique combinations. Let's break down how each part of the code contributes to the solution:

1.  **Sorting the Candidates:** The candidates array is first sorted to ensure that we can easily skip duplicates.

    - `candidates.sort()`

2.  **Depth-First Search (DFS) Function:** The dfs function is defined to handle the recursion, taking two parameters: i (the current index in the candidates list) and s (the remaining sum needed to reach the target).

    - `def dfs(i: int, s: int):`

3.  **Condition to Add to the Answer:** Inside the dfs function, we check if the remaining sum s is zero, meaning we found a valid combination that sums to the target. In that case, we add a copy of the current combination to the answer list.

    - `if s == 0:`
    - `ans.append(t[:])`

4.  **Base Cases for Termination:** We return if the index i moves beyond the length of the candidates or if the remaining sum s is less than the current candidate, which means we can't reach the desired total with the current and subsequent candidates since they are all larger.

    - `if i >= len(candidates) or s < candidates[i]:`
    -     return

5.  **Loop Over the Candidates:** Starting from the current index to the end of candidates, we try to include the candidate in the combination:

    - `for j in range(i, len(candidates)):`

6.  **Skipping Duplicates:** Before including a candidate in the combination, we skip over it if it's the same as its predecessor to avoid duplicates in our answer list (since we’ve already considered this value in the previous steps).

    - `if j > i and candidates[j] == candidates[j - 1]:`
    -        continue

7.  **Backtracking:** After including a candidate, the dfs function is called recursively with the updated index (j+1) and the updated remaining sum (s - candidates[j]). After this recursive call, we backtrack by removing the last candidate from the combination and moving on to the next candidate.

    - `t.append(candidates[j])`
    - `dfs(j + 1, s - candidates[j])`
    - `t.pop()`

The solution utilizes a list ans to store all the unique combinations and a temporary list t to store the current combination being constructed.

After defining dfs, the solution begins the search with:

1. `ans = []`
2. `t = []`
3. `dfs(0, target)`

The DFS and backtracking continue until all possible combinations that meet the criteria have been explored, after which ans is returned, containing all the valid combinations.

This approach efficiently explores all possible combinations and prunes the search space to avoid duplicates and unnecessary searches, thereby finding the solution set in an optimal manner.

<Tabs>
    <TabItem value="cpp" label="C++" default>
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```cpp
      #include <iostream>
      #include <vector>
      #include <algorithm>

      using namespace std;

      void findCombination(int ind, int target, vector<int>& arr, vector<vector<int>>& ans, vector<int>& ds) {
          if (target == 0) {
              ans.push_back(ds);
              return;
          }

          for (int i = ind; i < arr.size(); i++) {
              if (i > ind && arr[i] == arr[i - 1])
                  continue;
              if (arr[i] > target)
                  break;

              ds.push_back(arr[i]);
              findCombination(i + 1, target - arr[i], arr, ans, ds);
              ds.pop_back();
          }
      }

      class Solution {
      public:
          vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
              sort(candidates.begin(), candidates.end());
              vector<vector<int>> ans;
              vector<int> ds;
              findCombination(0, target, candidates, ans, ds);
              return ans;
          }
      };
      ```
    </TabItem>
    <TabItem value="java" label="Java">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```java
      import java.util.*;

      public class Solution {
          public void findCombination(int ind, int target, int[] arr, List<List<Integer>> ans, List<Integer> ds) {
              if (target == 0) {
                  ans.add(new ArrayList<>(ds));
                  return;
              }

              for (int i = ind; i < arr.length; i++) {
                  if (i > ind && arr[i] == arr[i - 1])
                      continue;
                  if (arr[i] > target)
                      break;

                  ds.add(arr[i]);
                  findCombination(i + 1, target - arr[i], arr, ans, ds);
                  ds.remove(ds.size() - 1);
              }
          }

          public List<List<Integer>> combinationSum2(int[] candidates, int target) {
              Arrays.sort(candidates);
              List<List<Integer>> ans = new ArrayList<>();
              findCombination(0, target, candidates, ans, new ArrayList<>());
              return ans;
          }

          public static void main(String[] args) {
              Solution sol = new Solution();
              int[] candidates = {10, 1, 2, 7, 6, 1, 5};
              int target = 8;
              List<List<Integer>> result = sol.combinationSum2(candidates, target);
              for (List<Integer> combination : result) {
                  System.out.println(combination);
              }
          }
      }
      ```
    </TabItem>
    <TabItem value="python" label="Python">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```python
      def findCombination(ind, target, arr, ans, ds):
          if target == 0:
              ans.append(list(ds))
              return

          for i in range(ind, len(arr)):
              if i > ind and arr[i] == arr[i - 1]:
                  continue
              if arr[i] > target:
                  break

              ds.append(arr[i])
              findCombination(i + 1, target - arr[i], arr, ans, ds)
              ds.pop()

      class Solution:
          def combinationSum2(self, candidates, target):
              candidates.sort()
              ans = []
              findCombination(0, target, candidates, ans, [])
              return ans

      # Driver code
      if __name__ == "__main__":
          sol = Solution()
          candidates = [10, 1, 2, 7, 6, 1, 5]
          target = 8
          result = sol.combinationSum2(candidates, target)
          for combination in result:
              print(combination)
      ```
    </TabItem>
    <TabItem value="c" label="C">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```c
      #include <stdio.h>
      #include <stdlib.h>

      void findCombination(int ind, int target, int* arr, int arrSize, int** ans, int* returnSize, int* ds, int dsSize) {
          if (target == 0) {
              ans[*returnSize] = (int*)malloc(dsSize * sizeof(int));
              for (int i = 0; i < dsSize; i++) {
                  ans[*returnSize][i] = ds[i];
              }
              (*returnSize)++;
              return;
          }

          for (int i = ind; i < arrSize; i++) {
              if (i > ind && arr[i] == arr[i - 1])
                  continue;
              if (arr[i] > target)
                  break;

              ds[dsSize] = arr[i];
              findCombination(i + 1, target - arr[i], arr, arrSize, ans, returnSize, ds, dsSize + 1);
          }
      }

      int** combinationSum2(int* candidates, int candidatesSize, int target, int* returnSize, int** returnColumnSizes) {
          qsort(candidates, candidatesSize, sizeof(int), cmpfunc);
          int** ans = (int**)malloc(1000 * sizeof(int*));
          int* ds = (int*)malloc(1000 * sizeof(int));
          *returnSize = 0;

          findCombination(0, target, candidates, candidatesSize, ans, returnSize, ds, 0);

          *returnColumnSizes = (int*)malloc(*returnSize * sizeof(int));
          for (int i = 0; i < *returnSize; i++) {
              (*returnColumnSizes)[i] = returnColumnSizes[i];
          }

          return ans;
      }

      int cmpfunc(const void* a, const void* b) {
          return (*(int*)a - *(int*)b);
      }

      // Driver code
      int main() {
          int candidates[] = {10, 1, 2, 7, 6, 1, 5};
          int target = 8;
          int returnSize;
          int* returnColumnSizes;
          int** result = combinationSum2(candidates, sizeof(candidates) / sizeof(candidates[0]), target, &returnSize, &returnColumnSizes);
          for (int i = 0; i < returnSize; i++) {
              for (int j = 0; j < returnColumnSizes[i]; j++) {
                  printf("%d ", result[i][j]);
              }
              printf("\n");
          }
          return 0;
      }
      ```
    </TabItem>

</Tabs>

## Time and Space Complexity

The provided Python code solves the combination sum problem where each number in the array candidates can only be used once to find all unique combinations that sum up to a given target.

### Time Complexity

The time complexity of this code primarily depends on the depth of the recursion and the number of recursive calls made at each level.

    1. The recursion depth is at most the target value if we choose candidates with a value of 1 every time. However, since the same candidate cannot be used repeatedly, the recursion depth is constrained by the number of candidates in the worst case.

    2. At every level of recursion, we iterate over the remaining candidates, so, in the worst case, the number of recursive calls can be exponential in nature, implied by $O(2^n)$, where n is the number of candidates. However, since we skip duplicates after sorting, the number of branches in the recursion tree can be less than that.

    3. A more accurate bound is not straightforward because it depends on the candidates and the target value. The worst-case time complexity, without considering duplicates, is $O(2^n)$, where n is the number of candidates.

    4. The sorting operation at the start of the code takes $O(n*log(n))$ time.
    Combining the sorting with the recursion leads to a worst-case time complexity of $O(n*log(n) + 2^n)$. Considering that the exponential part is more dominant, we can approximate it as $O(2^n)$.

### Space Complexity

The space complexity of the code consists of:

    1. Space used by the recursion stack, which in the worst case is equivalent to the depth of recursion, at most $O(n)$ if all candidates are used.

    2. Space for the temporary list t, which stores the current combination, will at most contain n values, adding another $O(n)$.

    3. Finally, the output list ans that could potentially hold all unique combinations of candidates. In the worst case, this could be all possible combinations which can be exponential, represented as $O(2^n)$.

    4. Hence, the overall space complexity, considering the output space and the recursion stack depth, is $O(n + 2^n)$. Typically, the output space can be a separate consideration, and if we exclude it, the space complexity for computation is $O(n)$. However, if we include the space needed for the output, it would be $O(2^n)$ due to the possibility of storing all combinations.
