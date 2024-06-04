---

id: generate-parentheses
title: Generate Parentheses Solution
sidebar_label: 0022-Generate-Parentheses
tags:
  - Generate Parentheses
  - Backtracking
  - Dynamic Programming
  - String
  - LeetCode
  - JavaScript
  - TypeScript
description: "This is a solution to the Generate Parentheses problem on LeetCode."
---

In this page, we will solve the Generate Parentheses problem using different approaches: backtracking and dynamic programming. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

### Examples

**Example 1:**

```plaintext
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```

**Example 2:**

```plaintext
Input: n = 1
Output: ["()"]
```

### Constraints

- `1 <= n <= 8`

**Follow up:** Can you come up with an algorithm that uses backtracking to generate all combinations of well-formed parentheses?

---

## Solution for Generate Parentheses Problem

### Intuition and Approach

The problem can be solved using backtracking or dynamic programming. The backtracking approach is more intuitive and efficient for this problem.

<Tabs>
 <tabItem value="Backtracking" label="Backtracking">

### Approach 1: Backtracking

The backtracking approach involves generating all possible combinations of parentheses and then filtering out the valid ones. Instead of generating all combinations, we can generate only valid combinations by ensuring that at any point in the recursion, the number of closing parentheses does not exceed the number of opening parentheses.

#### Implementation

```jsx live
function generateParentheses() {
  const n = 3;

  const generateParenthesis = function(n) {
    const result = [];

    const backtrack = (cur, open, close) => {
      if (cur.length === n * 2) {
        result.push(cur);
        return;
      }

      if (open < n) {
        backtrack(cur + '(', open + 1, close);
      }
      if (close < open) {
        backtrack(cur + ')', open, close + 1);
      }
    };

    backtrack('', 0, 0);
    return result;
  };

  const result = generateParenthesis(n);
  return (
    <div>
      <p>
        <b>Input:</b> n = {n}
      </p>
      <p>
        <b>Output:</b> {JSON.stringify(result)}
      </p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function generateParenthesis(n) {
      const result = [];

      const backtrack = (cur, open, close) => {
        if (cur.length === n * 2) {
          result.push(cur);
          return;
        }

        if (open < n) {
          backtrack(cur + '(', open + 1, close);
        }
        if (close < open) {
          backtrack(cur + ')', open, close + 1);
        }
      };

      backtrack('', 0, 0);
      return result;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/> 
   ```typescript
    function generateParenthesis(n: number): string[] {
      const result: string[] = [];

      const backtrack = (cur: string, open: number, close: number): void => {
        if (cur.length === n * 2) {
          result.push(cur);
          return;
        }

        if (open < n) {
          backtrack(cur + '(', open + 1, close);
        }
        if (close < open) {
          backtrack(cur + ')', open, close + 1);
        }
      };

      backtrack('', 0, 0);
      return result;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def generateParenthesis(self, n: int) -> List[str]:
            result = []

            def backtrack(cur: str, open: int, close: int):
                if len(cur) == n * 2:
                    result.append(cur)
                    return

                if open < n:
                    backtrack(cur + '(', open + 1, close)
                if close < open:
                    backtrack(cur + ')', open, close + 1)

            backtrack('', 0, 0)
            return result
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public List<String> generateParenthesis(int n) {
            List<String> result = new ArrayList<>();

            backtrack(result, "", 0, 0, n);
            return result;
        }

        private void backtrack(List<String> result, String cur, int open, int close, int n) {
            if (cur.length() == n * 2) {
                result.add(cur);
                return;
            }

            if (open < n) {
                backtrack(result, cur + "(", open + 1, close, n);
            }
            if (close < open) {
                backtrack(result, cur + ")", open, close + 1, n);
            }
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        vector<string> generateParenthesis(int n) {
            vector<string> result;
            backtrack(result, "", 0, 0, n);
            return result;
        }

    private:
        void backtrack(vector<string>& result, string cur, int open, int close, int n) {
            if (cur.length() == n * 2) {
                result.push_back(cur);
                return;
            }

            if (open < n) {
                backtrack(result, cur + "(", open + 1, close, n);
            }
            if (close < open) {
                backtrack(result, cur + ")", open, close + 1, n);
            }
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(4^n / \sqrt{n})$$
- Space Complexity: $$O(4^n / \sqrt{n})$$
- Where `n` is the number of pairs of parentheses.
- The time complexity is based on the number of valid combinations which is the nth Catalan number, $$C_n = \frac{1}{n+1}\binom{2n}{n} \approx \frac{4^n}{n\sqrt{n}}$$.
- The space complexity is determined by the number of valid combinations as well.

</tabItem>
<tabItem value="Dynamic Programming" label="Dynamic Programming">

### Approach 2: Dynamic Programming

We can also solve this problem using dynamic programming. The idea is to use the results of smaller subproblems to build the solution for the given `n`.

#### Implementation

```jsx live
function generateParentheses() {
  const n = 3;

  const generateParenthesis = function(n) {
    const dp = Array.from({ length: n + 1 }, () => []);
    dp[0].push('');

    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        for (const left of dp[j]) {
          for (const right of dp[i - 1 - j]) {
            dp[i].push(`(${left})${right}`);
          }
        }
      }
    }

    return dp[n];
  };

  const result = generateParenthesis(n);
  return (
    <div>
      <p>
        <b>Input:</b> n = {n}
      </p>
      <p>
        <b>Output:</b> {JSON.stringify(result)}
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
    function generateParenthesis(n) {
      const dp = Array.from({ length: n + 1 }, () => []);
      dp[0].push('');

      for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
          for (const left of dp[j]) {
            for (const right of dp[i - 1 - j]) {
              dp[i].push(`(${left})${right}`);
            }
          }
        }
      }

      return dp[n];
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">


  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function generateParenthesis(n: number): string[] {
      const dp: string[][] = Array.from({ length: n + 1 }, () => []);
      dp[0].push('');

      for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
          for (const left of dp[j]) {
            for (const right of dp[i - 1 - j]) {
              dp[i].push(`(${left})${right}`);
            }
          }
        }
      }

      return dp[n];
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def generateParenthesis(self, n: int) -> List[str]:
            dp = [[] for _ in range(n + 1)]
            dp[0].append('')

            for i in range(1, n + 1):
                for j in range(i):
                    for left in dp[j]:
                        for right in dp[i - 1 - j]:
                            dp[i].append(f'({left}){right}')

            return dp[n]
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public List<String> generateParenthesis(int n) {
            List<List<String>> dp = new ArrayList<>();
            for (int i = 0; i <= n; i++) {
                dp.add(new ArrayList<>());
            }
            dp.get(0).add("");

            for (int i = 1; i <= n; i++) {
                for (int j = 0; j < i; j++) {
                    for (String left : dp.get(j)) {
                        for (String right : dp.get(i - 1 - j)) {
                            dp.get(i).add("(" + left + ")" + right);
                        }
                    }
                }
            }

            return dp.get(n);
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        vector<string> generateParenthesis(int n) {
            vector<vector<string>> dp(n + 1);
            dp[0].push_back("");

            for (int i = 1; i <= n; i++) {
                for (int j = 0; j < i; j++) {
                    for (const string& left : dp[j]) {
                        for (const string& right : dp[i - 1 - j]) {
                            dp[i].push_back("(" + left + ")" + right);
                        }
                    }
                }
            }

            return dp[n];
        }
    };
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(4^n / \sqrt{n})$$
- Space Complexity: $$O(4^n / \sqrt{n})$$
- Where `n` is the number of pairs of parentheses.
- The time complexity is based on the number of valid combinations which is the nth Catalan number, $$C_n = \frac{1}{n+1}\binom{2n}{n} \approx \frac{4^n}{n\sqrt{n}}$$.
- The space complexity is determined by the number of valid combinations as well.

</tabItem>
</Tabs>

:::tip Note

By using both backtracking and dynamic programming approaches, we can efficiently solve the Generate Parentheses problem. The backtracking approach is more straightforward and intuitive, while the dynamic programming approach leverages previously computed results to build the solution.

:::
## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/generate-parentheses/)
- **Solution Link:** [Generate Parantheses Solution on LeetCode](https://leetcode.com/problems/generate-parentheses/solutions/5016750/easy-recursion-solution-in-c-100-beats-full-expanation-with-example/)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)

---