---
id: score-of-students-solving-math-expression
title: Score of Students Solving Math Expression
sidebar_label: 2019 Score of Students Solving Math Expression
tags:
  - Math
  - Dynamic Programming
  - LeetCode
description: "This is a solution to the Score of Students Solving Math Expression problem on LeetCode."
sidebar_position: 2019
---

## Problem Description

You are given a string `s` that contains digits 0-9, addition symbols `+`, and multiplication symbols `*` only, representing a valid math expression of single digit numbers (e.g., `3+5*2`). This expression was given to `n` elementary school students. The students were instructed to get the answer of the expression by following this order of operations:

1. Compute multiplication, reading from left to right.
2. Compute addition, reading from left to right.

You are given an integer array `answers` of length `n`, which are the submitted answers of the students in no particular order. You are asked to grade the answers, by following these rules:

- If an answer equals the correct answer of the expression, this student will be rewarded 5 points;
- Otherwise, if the answer could be interpreted as if the student applied the operators in the wrong order but had correct arithmetic, this student will be rewarded 2 points;
- Otherwise, this student will be rewarded 0 points.

Return the sum of the points of the students.

### Examples

**Example 1:**

```
Input: s = "7+312", answers = [20, 13, 42]
Output: 7
Explanation:
The correct answer of the expression is 13, therefore one student is rewarded 5 points.
A student might have applied the operators in this wrong order: ((7+3)*1)*2 = 20. Therefore one student is rewarded 2 points.
The points for the students are: [2, 5, 0]. The sum of the points is 2+5+0=7.

```

**Example 2:**
```
Input: s = "3+5*2", answers = [13, 0, 10, 13, 13, 16, 16]
Output: 19
Explanation:
The correct answer of the expression is 13, therefore three students are rewarded 5 points each.
A student might have applied the operators in this wrong order: (3+5)*2 = 16. Therefore two students are rewarded 2 points.
The points for the students are: [5, 0, 0, 5, 5, 2, 2]. The sum of the points is 5+0+0+5+5+2+2=19.
```

**Example 3:**

```
Input: s = "6+0*1", answers = [12, 9, 6, 4, 8, 6]
Output: 10
Explanation:
The correct answer of the expression is 6.
If a student had incorrectly done (6+0)*1, the answer would also be 6.
By the rules of grading, the students will still be rewarded 5 points (as they got the correct answer), not 2 points.
The points for the students are: [0, 0, 5, 0, 0, 5]. The sum of the points is 10.
```


### Constraints

- `3 <= s.length <= 31`
- `s` represents a valid expression that contains only digits` 0-9,` `+`, and `*` only.
- All the integer operands in the expression are in the inclusive range `[0, 9]`.
- `1 <= The count of all operators ('+' and '*') in the math expression <= 15`
- Test data are generated such that the correct answer of the expression is in the range of `[0, 1000]`.
- `n == answers.length`
- `1 <= `n` <= 10^4`
-` 0 <= `answers[i]` <= 1000`

## Approach

To solve this problem, we will calculate the correct answer of the expression using the given order of operations (multiplication before addition). We will also use dynamic programming to compute all possible values students could get if they evaluated the expression with different operator orders. For each answer in the provided answers list, we will reward points based on the correct answer and possible values.

#### C++

```cpp

class Solution {
public:
    int scoreOfStudents(string s, vector<int>& answers) {
        int n = s.size();
        vector<vector<unordered_set<int>>> dp(n, vector<unordered_set<int>>(n));
        unordered_map<int, unordered_set<int>> memo;
        
        function<void(int, int)> dfs = [&](int l, int r) {
            if (!dp[l][r].empty()) return;
            if (l == r) {
                dp[l][r].insert(s[l] - '0');
                return;
            }
            for (int i = l; i < r; i++) {
                if (s[i] == '+' || s[i] == '*') {
                    dfs(l, i - 1);
                    dfs(i + 1, r);
                    for (int a : dp[l][i - 1]) {
                        for (int b : dp[i + 1][r]) {
                            if (s[i] == '+') {
                                if (a + b <= 1000) dp[l][r].insert(a + b);
                            } else {
                                if (a * b <= 1000) dp[l][r].insert(a * b);
                            }
                        }
                    }
                }
            }
        };

        dfs(0, n - 1);
        unordered_set<int> possible_values = dp[0][n - 1];
        
        int correct_answer = 0;
        vector<int> stack;
        for (char c : s) {
            if (isdigit(c)) {
                stack.push_back(c - '0');
            } else if (c == '*') {
                int a = stack.back(); stack.pop_back();
                int b = c - '0';
                stack.push_back(a * b);
            }
        }
        correct_answer = accumulate(stack.begin(), stack.end(), 0, plus<int>());

        int total_points = 0;
        for (int ans : answers) {
            if (ans == correct_answer) {
                total_points += 5;
            } else if (possible_values.count(ans)) {
                total_points += 2;
            }
        }
        
        return total_points;
    }
};
```