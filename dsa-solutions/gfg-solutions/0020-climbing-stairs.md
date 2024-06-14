---
id: climbing-stairs
title: Climbing Stairs
sidebar_label: 0020 Climbing Stairs
tags:
- Dynamic Programming
- Recursion
- Memoization
- Tabulation
- Space Optimization
- JavaScript
- TypeScript
- Python
- Java
- C++
description: "This document explores different approaches to solving the climbing stairs problem, including recursion, memoization, tabulation, and space optimization."
---
## Problem

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

### Examples

**Example 1:**

Input: `n = 2`  
Output: `2`  
Explanation: There are two ways to climb to the top:
1. 1 step + 1 step
2. 2 steps

**Example 2:**

Input: `n = 3`  
Output: `3`  
Explanation: There are three ways to climb to the top:
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

### Constraints

- $ 1 \leq n \leq 45 $

## Solution

### Intuition

To calculate the number of ways to climb the stairs, we can observe that when we are on the nth stair, we have two options:

- Either we climbed one stair from the (n-1)th stair
- Or we climbed two stairs from the (n-2)th stair

By leveraging this observation, we can break down the problem into smaller subproblems and apply the concept of the Fibonacci series. The base cases are when we are on the 1st stair (only one way to reach it) and the 2nd stair (two ways to reach it). By summing up the number of ways to reach the (n-1)th and (n-2)th stairs, we can compute the total number of ways to climb the stairs. This allows us to solve the problem efficiently using various dynamic programming techniques such as recursion, memoization, tabulation, or space optimization.

<Tabs>
  <tabItem value="Recursive" label="Recursive">

### Approach 1: Recursive

A recursive approach solves the problem by breaking down the larger problem into smaller subproblems.

#### Implementation

```javascript
class Solution {
    climbStairs(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return this.climbStairs(n - 1) + this.climbStairs(n - 2);
    }
}
```

#### Codes in Different Languages

<Tabs>
<TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Vipullakum007"/>
    ```javascript
    class Solution {
        climbStairs(n) {
            if (n === 0 || n === 1) {
                return 1;
            }
            return this.climbStairs(n - 1) + this.climbStairs(n - 2);
        }
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
  
   ```python
   class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 0 or n == 1:
            return 1
        return self.climbStairs(n-1) + self.climbStairs(n-2)
   ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Vipullakum007"/>
  ```java
    class Solution {
        public int climbStairs(int n) {
            if (n == 0 || n == 1) {
                return 1;
            }
            return climbStairs(n-1) + climbStairs(n-2);
        }
    }
    ```
    
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
    ```cpp
    class Solution {
    public:
        int ways(int x, int y) {
            return help(x, y);
        }

        int help(int i, int j) {
            // Base case
            if (i == 0 && j == 0) return 1;
            if (i < 0 || j < 0) return 0;

            // Recursive calls
            int down = help(i - 1, j);
            int right = help(i, j - 1);

            return down + right;
        }
    };
    ```
  </TabItem>
</Tabs>

#### Complexity Analysis

**Time Complexity:** $O(2^{x+y})$
- In the worst case, each move (left or down) results in two recursive calls, leading to an exponential number of calls.

**Space Complexity:** $O(x + y)$
- The space complexity is due to the maximum depth of the recursion stack.

</tabItem>
<tabItem value="Memoization" label="Memoization">

### Approach 2: Memoization

The memoization approach optimizes the recursive solution by caching previously computed results to avoid redundant calculations.

#### Implementation

```javascript
class Solution {
    climbStairs(n, memo = new Map()) {
        if (n === 0 || n === 1) {
            return 1;
        }

        if (!memo.has(n)) {
            memo.set(n, this.climbStairs(n - 1, memo) + this.climbStairs(n - 2, memo));
        }

        return memo.get(n);
    }

    climbStairs(n) {
        const memo = new Map();
        return this.climbStairs(n, memo);
    }
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Vipullakum007"/>
    ```javascript
    class Solution {
      climbStairs(n, memo = new Map()) {
          if (n === 0 || n === 1) {
              return 1;
          }

          if (!memo.has(n)) {
              memo.set(n, this.climbStairs(n - 1, memo) + this.climbStairs(n - 2, memo));
          }

          return memo.get(n);
      }

      climbStairs(n) {
          const memo = new Map();
          return this.climbStairs(n, memo);
      }
  }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
  
   ```python
  class Solution:
    def climbStairs(self, n: int) -> int:
        memo = {}
        return self.helper(n, memo)
    
    def helper(self, n: int, memo: dict[int, int]) -> int:
        if n == 0 or n == 1:
            return 1
        if n not in memo:
            memo[n] = self.helper(n-1, memo) + self.helper(n-2, memo)
        return memo[n]
   ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Vipullakum007"/>
  ```java
  class Solution {
    public int climbStairs(int n) {
        Map<Integer, Integer> memo = new HashMap<>();
        return climbStairs(n, memo);
    }
    
    private int climbStairs(int n, Map<Integer, Integer> memo) {
        if (n == 0 || n == 1) {
            return 1;
        }
        if (!memo.containsKey(n)) {
            memo.put(n, climbStairs(n-1, memo) + climbStairs(n-2, memo));
        }
        return memo.get(n);
    }
  }
    ```
    
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
    ```cpp
  class Solution {
  public:
      int climbStairs(int n, unordered_map<int, int>& memo) {
          if (n == 0 || n == 1) {
              return 1;
          }
          if (memo.find(n) == memo.end()) {
              memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo);
          }
          return memo[n];
      }

      int climbStairs(int n) {
          unordered_map<int, int> memo;
          return climbStairs(n, memo);
      }
  };
    ```
  </TabItem>
</Tabs>

#### Complexity Analysis

**Time Complexity:** $O(x * y)$
- The memoization approach reduces the time complexity to linear by caching previously computed results.

**Space Complexity:** $O(x * y)$
- The space complexity is determined by the size of the memoization table.

Here is the content for the 'Tabulation' and 'Space Optimization' approaches in the 'climb-stair.md' file:
</tabItem>
<tabItem value="Tabulation" label="Tabulation">

### Approach 3: Tabulation

The tabulation approach solves the problem iteratively using dynamic programming. It builds a DP table to store the number of ways to reach each step from the base cases (0 and 1 steps) up to the target step. By iterating through the table and filling in values based on the results of previous steps, we compute the total number of ways to climb the stairs.

#### Implementation

```javascript
class Solution {
    climbStairs(n) {
        if (n === 0 || n === 1) {
            return 1;
        }

        const dp = new Array(n + 1).fill(0);
        dp[0] = dp[1] = 1;

        for (let i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }
}
```

#### Codes in Different Languages

<Tabs>
<TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Vipullakum007"/>
    ```javascript
  class Solution {
    climbStairs(n) {
        if (n === 0 || n === 1) {
            return 1;
        }

        const dp = new Array(n + 1).fill(0);
        dp[0] = dp[1] = 1;

        for (let i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }
  }
    ```
</TabItem>
<TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
    ```python
  class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 0 or n == 1:
            return 1

        dp = [0] * (n+1)
        dp[0] = dp[1] = 1
        
        for i in range(2, n+1):
            dp[i] = dp[i-1] + dp[i-2]
        return dp[n]
    ```
</TabItem>
<TabItem value="Java" label="Java">
  <SolutionAuthor name="@Vipullakum007"/>
    ```java
  class Solution {
    public int climbStairs(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }

        int[] dp = new int[n+1];
        dp[0] = dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        return dp[n];
    }
  }
    ```
</TabItem>
<TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
    ```cpp
  class Solution {
  public:
      int climbStairs(int n) {
          if (n == 0 || n == 1) {
              return 1;
          }

          vector<int> dp(n+1);
          dp[0] = dp[1] = 1;
          
          for (int i = 2; i <= n; i++) {
              dp[i] = dp[i-1] + dp[i-2];
          }
          return dp[n];
      }
  };
    ```
</TabItem>
</Tabs>

#### Complexity Analysis

**Time Complexity:** $O(n)$
- The tabulation approach iterates through the DP table once, filling in each cell with constant time operations, resulting in linear time complexity.

**Space Complexity:** $O(n)$
- The space complexity is determined by the size of the DP table, which stores values for each step up to the target step.

</tabItem>
<tabItem value="Space Optimization" label="Space Optimization">

### Approach 4: Space Optimization

The space-optimized approach improves upon the tabulation method by reducing the space complexity. Instead of storing the entire DP table, we only keep track of the previous two values since they are sufficient to compute the current value. By updating these values in each iteration, we compute the total number of ways to climb the stairs with constant space usage.

#### Implementation

```javascript
class Solution {
    climbStairs(n) {
        if (n === 0 || n === 1) {
            return 1;
        }

        let prev = 1, curr = 1;
        for (let i = 2; i <= n; i++) {
            let temp = curr;
            curr = prev + curr;
            prev = temp;
        }

        return curr;
    }
}
```

#### Codes in Different Languages

<Tabs>
<TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Vipullakum007"/>
    ```javascript
    class Solution {
    climbStairs(n) {
        if (n === 0 || n === 1) {
            return 1;
        }

        let prev = 1, curr = 1;
        for (let i = 2; i <= n; i++) {
            let temp = curr;
            curr = prev + curr;
            prev = temp;
        }

        return curr;
    }
}
    ```
</TabItem>
<TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
    ```python
    class Solution:
      def climbStairs(self, n: int) -> int:
          if n == 0 or n == 1:
              return 1
          prev, curr = 1, 1
          for i in range(2, n+1):
              temp = curr
              curr = prev + curr
              prev = temp
          return curr
    ```
</TabItem>
<TabItem value="Java" label="Java">
  <SolutionAuthor name="@Vipullakum007"/>
    ```java
  class Solution {
    public int climbStairs(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        int prev = 1, curr = 1;
        for (int i = 2; i <= n; i++) {
            int temp = curr;
            curr = prev + curr;
            prev = temp;
        }
        return curr;
    }
  }
    ```
</TabItem>
<TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
    ```cpp
  class Solution {
  public:
      int climbStairs(int n) {
          if (n == 0 || n == 1) {
              return 1;
          }
          int prev = 1, curr = 1;
          for (int i = 2; i <= n; i++) {
              int temp = curr;
              curr = prev + curr;
              prev = temp;
          }
          return curr;
      }
  };
    ```
</TabItem>
</Tabs>

#### Complexity Analysis

**Time Complexity:** $O(n)$
- The space-optimized approach iterates through the steps once, updating only two variables in constant time per iteration, resulting in linear time complexity.

**Space Complexity:** $O(1)$
- The space complexity is constant since we only use two variables to store the previous two values.
</tabItem>
</Tabs>

:::tip

When choosing an approach, consider both time and space complexities. For smaller inputs, simpler approaches like recursion might be sufficient, but for larger inputs, optimized solutions like memoization, tabulation, or space-optimized tabulation are more efficient and practical. Always analyze the constraints and requirements of your problem to select the most appropriate method.

:::

---

## References

- **LeetCode Problem**: [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/maximum-depth-of-binary-tree/solution/)
- **Authors GeeksforGeeks Profile:** [Vipul](https://www.geeksforgeeks.org/user/lakumvipwjge/)