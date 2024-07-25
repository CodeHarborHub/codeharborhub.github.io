---
id: letter-combination
title: Letter Combinations of a Phone Number (LeetCode)
sidebar_label: 0017 - letter-combination
tags:
  - Array
  - Backtracking
  - String
description: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent."
---

## Problem Description

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


### Examples

**Example 1:**

```
Input
digits = "
Output
["ad","ae","af","bd","be","bf","cd","ce","cf"]

```
**Example 2:**

```
Input: digits = ""
Output: []
```
**Example 3:**

```
Input: digits = "2"
Output: ["a","b","c"]
```
### Constraints

- `0 <= digits.length <= 4`
- `digits[i] is a digit in the range ['2', '9']`


## Solution for Letter combination of phone number

### Intuition
Using backtracking to create all possible combinations




### Complexity Analysis

#### Time Complexity: $O(3^n)$

#### Space Complexity: $O(N)$


## Approach

- This is based on a Python solution. Other implementations might differ a bit.

- Initialize an empty list `res` to store the generated combinations.

- Check if the `digits` string is empty. If it is, return an empty list since there are no digits to process.

- Create a dictionary `digit_to_letters` that maps each digit from '2' to '9' to the corresponding letters on a phone keypad.

- Define a recursive function `backtrack(idx, comb)` that takes two parameters:
  - `idx`: The current index of the digit being processed in the `digits` string.
  - `comb`: The current combination being formed by appending letters.

- Inside the `backtrack` function:
  - Check if `idx` is equal to the length of the `digits` string. If it is, it means a valid combination has been formed, so append the current `comb` to the `res` list.
  - If not, iterate through each letter corresponding to the digit at `digits[idx]` using the `digit_to_letters` dictionary.
  - For each letter, recursively call `backtrack` with `idx + 1` to process the next digit and `comb + letter` to add the current letter to the combination.

- Initialize the `res` list.

- Start the initial call to `backtrack` with `idx` set to 0 and an empty string as `comb`. This will start the process of generating combinations.

- After the recursive calls have been made, return the `res` list containing all the generated combinations.

- The algorithm works by iteratively exploring all possible combinations of letters that can be formed from the given input digits. It uses a recursive approach to generate combinations, building them one letter at a time. The base case for the recursion is when all digits have been processed, at which point a combination is complete and added to the `res` list. The backtracking nature of the algorithm ensures that all possible combinations are explored.


### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <vector>
#include <algorithm>
#include <climits>

class Solution {
public:
    int cherryPickup(std::vector<std::vector<int>>& grid) {
        int N = grid.size();
        std::vector<std::vector<int>> dp(N, std::vector<int>(N, INT_MIN));
        dp[0][0] = grid[0][0];

        for (int t = 1; t <= 2 * N - 2; ++t) {
            std::vector<std::vector<int>> dp2(N, std::vector<int>(N, INT_MIN));

            for (int i = std::max(0, t - (N - 1)); i <= std::min(N - 1, t); ++i) {
                for (int j = std::max(0, t - (N - 1)); j <= std::min(N - 1, t); ++j) {
                    if (grid[i][t - i] == -1 || grid[j][t - j] == -1) {
                        continue;
                    }
                    int val = grid[i][t - i];
                    if (i != j) {
                        val += grid[j][t - j];
                    }
                    for (int pi = i - 1; pi <= i; ++pi) {
                        for (int pj = j - 1; pj <= j; ++pj) {
                            if (pi >= 0 && pj >= 0) {
                                dp2[i][j] = std::max(dp2[i][j], dp[pi][pj] + val);
                            }
                        }
                    }
                }
            }
            dp = std::move(dp2);
        }
        return std::max(0, dp[N - 1][N - 1]);
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int cherryPickup(int[][] grid) {
        int N = grid.length;
        int[][] dp = new int[N][N];
        for (int[] row: dp) {
            Arrays.fill(row, Integer.MIN_VALUE);
        }
        dp[0][0] = grid[0][0];

        for (int t = 1; t <= 2*N - 2; ++t) {
            int[][] dp2 = new int[N][N];
            for (int[] row: dp2) {
                Arrays.fill(row, Integer.MIN_VALUE);
            }

            for (int i = Math.max(0, t - (N - 1)); i <= Math.min(N - 1, t); ++i) {
                for (int j = Math.max(0, t - (N - 1)); j <= Math.min(N - 1, t); ++j) {
                    if (grid[i][t - i] == -1 || grid[j][t - j] == -1) {
                        continue;
                    }                    
                    int val = grid[i][t-i];
                    if (i != j) {
                        val += grid[j][t - j];
                    }
                    for (int pi = i - 1; pi <= i; ++pi) {
                        for (int pj = j - 1; pj <= j; ++pj) {
                            if (pi >= 0 && pj >= 0) {
                                dp2[i][j] = Math.max(dp2[i][j], dp[pi][pj] + val);
                            }
                        }
                    }
                }
            }
            dp = dp2;
        }
        return Math.max(0, dp[N - 1][N - 1]);
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def cherryPickup(self, grid):
        N = len(grid)
        dp = [[float('-inf')] * N for _ in xrange(N)]
        dp[0][0] = grid[0][0]
        for t in xrange(1, 2 * N - 1):
            dp2 = [[float('-inf')] * N for _ in xrange(N)]
            for i in xrange(max(0, t - (N - 1)), min(N - 1, t) + 1):
                for j in xrange(max(0, t - (N - 1)), min(N - 1, t) + 1):
                    if grid[i][t - i] == -1 or grid[j][t - j] == -1:
                        continue
                    val = grid[i][t - i]
                    if i != j:
                        val += grid[j][t - j]
                    dp2[i][j] = max(dp[pi][pj] + val
                                    for pi in (i - 1, i) for pj in (j - 1, j)
                                    if pi >= 0 and pj >= 0)
            dp = dp2
        return max(0, dp[N - 1][N - 1])
```
</TabItem>
</Tabs>



## References

- **LeetCode Problem**: [Letter combinatino of Phone number](https://leetcode.com/problems/cherry-pickup/description/)

- **Solution Link**: [letter combination of phone number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/5125020/video-simple-solution/)
