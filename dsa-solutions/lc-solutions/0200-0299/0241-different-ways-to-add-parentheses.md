---
id: different-ways-to-add-parentheses
title: Different Ways to Add Parentheses
sidebar_label: 0241-Different Ways to Add Parentheses
tags:
  - DP
  - Leet code
description: "Solution to leetocde 241"
---

## Intuition
When evaluating an expression, we encounter the same problem on the left and right substrings of an operator. Recursion can be used to calculate all possible ways to evaluate the expression.

## Recursion
We define a recursive function `getDiffWays` where `getDiffWays(i, j)` returns the number of ways to evaluate the expression from index `i` to `j`. Therefore, our answer will be `getDiffWays(0, n - 1)`, where `n` is the length of the expression.

```cpp
class Solution {
    bool isOperator(char ch) {
        return (ch == '+' || ch == '-' || ch == '*');
    }

    vector<int> getDiffWays(int i, int j, string& expression) {
        
        // Base case: if the length of the substring is 1 or 2, return the number found
        int len = j - i + 1;
        if(len <= 2) {
            return { stoi(expression.substr(i, len)) };
        }

        // If it is not a number, it is an expression
        // Evaluate every operator present in the expression
        vector<int> res;
        for(int ind = i; ind <= j; ind++) {
            if(isOperator(expression[ind])) {
                char op = expression[ind];

                // Get all results for the left and right substrings using recursion
                vector<int> left = getDiffWays(i, ind - 1, expression);
                vector<int> right = getDiffWays(ind + 1, j, expression);

                // Try all options for left and right operands and push all results to the answer
                for(int l : left) {
                    for(int r : right) {
                        if(op == '+') {
                            res.push_back(l + r);
                        }
                        else if(op == '-') {
                            res.push_back(l - r);
                        }
                        else if(op == '*') {
                            res.push_back(l * r);
                        }
                    }
                }
            }
        }
        return res;
    }

public:
    vector<int> diffWaysToCompute(string expression) {
        int n = expression.size();
        return getDiffWays(0, n - 1, expression);
    }
};
```

## Complexity
Time complexity: Exponential. It's hard to derive the exact time complexity, but it will be definitely exponential in nature.

Space complexity: O(n * x) for the recursion stack, where x is the number of ways to calculate the expression (operators!).

## Memoization
If we observe the overlapping subproblems that get calculated again and again, we can avoid this by introducing a 3D DP array or cache to store the calculated results.

```cpp
class Solution {
    bool isOperator(char ch) {
        return (ch == '+' || ch == '-' || ch == '*');
    }

    vector<int> getDiffWays(int i, int j, vector<vector<vector<int>>>& dp, string& expression) {

        // Return cached result if already calculated
        if(!dp[i][j].empty()) {
            return dp[i][j];
        }
        
        // Base case: if the length of the substring is 1 or 2, return the number found
        int len = j - i + 1;
        if(len <= 2) {
            return dp[i][j] = { stoi(expression.substr(i, len)) };
        }

        // If it is not a number, it is an expression
        // Evaluate every operator present in the expression
        vector<int> res;
        for(int ind = i; ind <= j; ind++) {
            if(isOperator(expression[ind])) {
                char op = expression[ind];

                // Get all results for the left and right substrings using recursion
                vector<int> left = getDiffWays(i, ind - 1, dp, expression);
                vector<int> right = getDiffWays(ind + 1, j, dp, expression);

                // Try all options for left and right operands and push all results to the answer
                for(int l : left) {
                    for(int r : right) {
                        if(op == '+') {
                            res.push_back(l + r);
                        }
                        else if(op == '-') {
                            res.push_back(l - r);
                        }
                        else if(op == '*') {
                            res.push_back(l * r);
                        }
                    }
                }
            }
        }
        return dp[i][j] = res;
    }

public:
    vector<int> diffWaysToCompute(string expression) {
        int n = expression.size();
        vector<vector<vector<int>>> dp(n, vector<vector<int>>(n));
        return getDiffWays(0, n - 1, dp, expression);
    }
};
```

## Complexity
Time complexity: O(n^2 * (n * x^2)), as there are approximately n^2 states and calculating these states takes O(n * x^2) time.

Space complexity: O(n * x) + O(n^2 * x) for the recursion stack and dp array, where x is the number of ways to calculate the expression (operators!).

## Tabulation
We can eliminate the recursion stack space used in the memoization solution by calculating the result for every valid expression substring in a bottom-up manner, known as tabulation.

In tabulation, we need to check if a given substring is a valid arithmetic expression or not.

```cpp
class Solution {
    bool isOperator(char ch) {
        return (ch == '+' || ch == '-' || ch == '*');
    }

public:
    vector<int> diffWaysToCompute(string expression) {
        int n = expression.size();
        vector<vector<vector<int>>> dp(n, vector<vector<int>>(n));

        // Function to check if a given substring of expression is a valid expression
        auto isValidExpression = [&](int i, int j) -> bool {
            return (i == 0 || isOperator(expression[i - 1])) && (j == n - 1 || isOperator(expression[j + 1]));
        };

        // Get the answer for all single-digit numbers
        for(int i = 0; i < n; i++) {
            if(isValidExpression(i, i)) {
                dp[i][i] = { stoi(expression.substr(i, 1)) };
            }
        }

        // Get the answer for all 2-digit numbers
        for(int i = 0, j = 1; j < n; i++, j++) {
            if(isValidExpression(i, j)) {
                dp[i][j] = { stoi(expression.substr(i, 2)) };
            }
        }

        // Get the answer for all valid expression substrings in a bottom-up manner
        for(int len = 3; len <= n; len++) {
            for(int i = 0, j = i + len - 1; j < n; i++, j++) {
                if(!isValidExpression(i, j))
                    continue;

                // Try to evaluate every operator
                for(int ind = i; ind <= j; ind++) {
                    if(isOperator(expression[ind])) {
                        char op = expression[ind];

                        // Get all results for the left and right substrings
                        vector<int> left = dp[i][ind - 1];
                        vector<int> right = dp[ind + 1][j];

                        // Try all options for left and right operands and push all results to the answer
                        for(int l : left) {
                            for(int r : right) {
                                if(op == '+') {
                                    dp[i][j].push_back(l + r);
                                }
                                else if(op == '-') {
                                    dp[i][j].push_back(l - r);
                                }
                                else if(op == '*') {
                                    dp[i][j].push_back(l * r);
                                }
                            }
                        }
                    }
                }         
            }
        }

        return dp[0][n - 1];
    }
};
```

## Complexity
Time complexity: O(n^3 * x^2), same as the memoization solution.

Space complexity: O(n^2 * x) for the dp array, where x is the number of ways to calculate the expression (operators!).
