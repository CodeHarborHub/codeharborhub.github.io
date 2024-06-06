---

id: paths-to-reach-origin
title: Paths to Reach Origin
sidebar_label: 0010 Paths to Reach Origin
tags:
- Dynamic Programming
- Backtracking
- Recursion
- Combinatorics
- JavaScript
- Python
- Java
- C++
description: "This document explores finding the number of paths to reach the origin (0, 0) on a grid."

---

## Problem Description

Imagine you are standing on a grid at point (`x`, `y`). You can only move down (y decreases) or right (x increases). Your goal is to reach the origin (0, 0). This document discusses how to find the total number of unique paths you can take to reach the origin.

### Example

**Input:** x = 3, y = 2 (Starting at point (3, 2))

**Output:** 3

There are three unique paths to reach the origin:

1. Down, Down, Right (D-D-R)
2. Down, Right, Down (D-R-D)
3. Right, Down, Down (R-D-D)

---

## Solutions for Finding Paths

There are multiple approaches to solve this problem. Here, we will explore four common techniques:

<Tabs>
  <tabItem value="Recursive" label="Recursive">

### Approach 1: Recursive

A recursive approach solves the problem by breaking down the larger problem into smaller subproblems.

#### Implementation

```javascript
class Solution {
    ways(x, y) {
        return this.help(x, y);
    }

    help(i, j) {
        // Base case
        if (i === 0 && j === 0) return 1;
        if (i < 0 || j < 0) return 0;

        // Recursive calls
        const down = this.help(i - 1, j);
        const right = this.help(i, j - 1);

        return down + right;
    }
}
```

#### Codes in Different Languages

<Tabs>
<TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Vipullakum007"/>
    ```javascript
    class Solution {
        ways(x, y) {
            return this.help(x, y);
        }

        help(i, j) {
            // Base case
            if (i === 0 && j === 0) return 1;
            if (i < 0 || j < 0) return 0;

            // Recursive calls
            const down = this.help(i - 1, j);
            const right = this.help(i, j - 1);

            return down + right;
        }
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
  
   ```python
   class Solution:
       def ways(self, x, y):
           return self.help(x, y)

       def help(self, i, j):
           # Base case
           if i == 0 and j == 0:
               return 1
           if i < 0 or j < 0:
               return 0

           # Recursive calls
           down = self.help(i - 1, j)
           right = self.help(i, j - 1)

           return down + right
   ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Vipullakum007"/>
  ```java
    class Solution {
        public int ways(int x, int y) {
            return help(x, y);
        }

        private int help(int i, int j) {
            // Base case
            if (i == 0 && j == 0) return 1;
            if (i < 0 || j < 0) return 0;

            // Recursive calls
            int down = help(i - 1, j);
            int right = help(i, j - 1);

            return down + right;
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

Memoization is an optimization technique where we store the results of expensive function calls and reuse them when the same inputs occur again.

#### Implementation

```javascript
class Solution {
    constructor() {
        this.memo = {};
    }

    ways(x, y) {
        return this.help(x, y);
    }

    help(i, j) {
        // Base case
        if (i === 0 && j === 0) return 1;
        if (i < 0 || j < 0) return 0;

        const key = `${i},${j}`;
        if (this.memo[key] !== undefined) return this.memo[key];

        // Recursive calls
        const down = this.help(i - 1, j);
        const right = this.help(i, j - 1);

        this.memo[key] = down + right;
        return this.memo[key];
    }
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Vipullakum007"/>
    ```javascript
    class Solution {
        constructor() {
            this.memo = {};
        }

        ways(x, y) {
            return this.help(x, y);
        }

        help(i, j) {
            // Base case
            if (i === 0 && j === 0) return 1;
            if (i < 0 || j < 0) return 0;

            const key = `${i},${j}`;
            if (this.memo[key] !== undefined) return this.memo[key];

            // Recursive calls
            const down = this.help(i - 1, j);
            const right = this.help(i, j - 1);

            this.memo[key] = down + right;
            return this.memo[key];
        }
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
  
   ```python
   class Solution:
       def __init__(self):
           self.memo = {}

       def ways(self, x, y):
           return self.help(x, y)

       def help(self, i, j):
           # Base case
           if i == 0 and j == 0:
               return 1
           if i < 0 or j < 0:
               return 0

           key = (i, j)
           if key in self.memo:
               return self.memo[key]

           # Recursive calls
           down = self.help(i - 1, j)
           right = self.help(i, j - 1)

           self.memo[key] = down + right
           return self.memo[key]
   ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Vipullakum007"/>
    ```java
    import java.util.HashMap;
    import java.util.Map;

    class Solution {
        private Map<String, Integer> memo = new HashMap<>();

        public int ways(int x, int y) {
            return help(x, y);
        }

        private int help(int i, int j) {
            // Base case
            if (i == 0 && j == 0) return 1;
            if (i < 0 || j < 0) return 0;

            String key = i + "," + j;
            if (memo.containsKey(key)) return memo.get(key);

            // Recursive calls
            int down = help(i - 1, j);
            int right = help(i, j - 1);

            memo.put(key, down + right);
            return memo.get(key);
        }
    }
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
    ```cpp
    #include <unordered_map>
    #include <string>
    using namespace std;

    class Solution {
        unordered_map<string, int> memo;

    public:
        int ways(int x, int y) {
            return help(x, y);
        }

        int help(int i, int j) {
            // Base case
            if (i == 0 && j == 0) return 1;
            if (i < 0 || j < 0) return 0;

            string key = to_string(i) + "," + to_string(j);
            if (memo.find(key) != memo.end()) return memo[key];

            // Recursive calls
            int down = help(i - 1, j);
            int right = help(i, j - 1);

            memo[key] = down + right;
            return

  memo[key];
        }
    };
    ```
  </TabItem>
</Tabs>

#### Complexity Analisys 

**Time Complexity:** $O(x \cdot y)$
- Each subproblem is solved once and stored in the memoization table.

**Space Complexity:** $O(x \cdot y)$
- Space is used for the memoization table.

</tabItem>
  <tabItem value="Tabulation" label="Tabulation">

### Approach 3: Tabulation

Tabulation is a bottom-up dynamic programming technique where we solve smaller subproblems first and use their results to build up solutions to larger subproblems.

#### Implementation

```javascript
class Solution {
    ways(x, y) {
        const dp = Array.from({ length: x + 1 }, () => Array(y + 1).fill(0));
        dp[0][0] = 1;

        for (let i = 0; i <= x; i++) {
            for (let j = 0; j <= y; j++) {
                if (i > 0) dp[i][j] += dp[i - 1][j];
                if (j > 0) dp[i][j] += dp[i][j - 1];
            }
        }

        return dp[x][y];
    }
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Vipullakum007"/>
    ```javascript
    class Solution {
        ways(x, y) {
            const dp = Array.from({ length: x + 1 }, () => Array(y + 1).fill(0));
            dp[0][0] = 1;

            for (let i = 0; i <= x; i++) {
                for (let j = 0; j <= y; j++) {
                    if (i > 0) dp[i][j] += dp[i - 1][j];
                    if (j > 0) dp[i][j] += dp[i][j - 1];
                }
            }

            return dp[x][y];
        }
    }
    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
  
   ```python
   class Solution:
       def ways(self, x, y):
           dp = [[0] * (y + 1) for _ in range(x + 1)]
           dp[0][0] = 1

           for i in range(x + 1):
               for j in range(y + 1):
                   if i > 0:
                       dp[i][j] += dp[i - 1][j]
                   if j > 0:
                       dp[i][j] += dp[i][j - 1]

           return dp[x][y]
   ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Vipullakum007"/>
    ```java
    class Solution {
        public int ways(int x, int y) {
            int[][] dp = new int[x + 1][y + 1];
            dp[0][0] = 1;

            for (int i = 0; i <= x; i++) {
                for (int j = 0; j <= y; j++) {
                    if (i > 0) dp[i][j] += dp[i - 1][j];
                    if (j > 0) dp[i][j] += dp[i][j - 1];
                }
            }

            return dp[x][y];
        }
    }
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
    ```cpp
    #include <vector>
    using namespace std;

    class Solution {
    public:
        int ways(int x, int y) {
            vector<vector<int>> dp(x + 1, vector<int>(y + 1, 0));
            dp[0][0] = 1;

            for (int i = 0; i <= x; i++) {
                for (int j = 0; j <= y; j++) {
                    if (i > 0) dp[i][j] += dp[i - 1][j];
                    if (j > 0) dp[i][j] += dp[i][j - 1];
                }
            }

            return dp[x][y];
        }
    };
    ```
  </TabItem>
</Tabs>

#### Complexity Analysis

**Time Complexity:** $O(x \cdot y)$
- Filling up the table involves computing values for $x \times y$ cells.

**Space Complexity:** $O(x \cdot y)$
- Space is used for the 2D table.

</tabItem>
  <tabItem value="Space Optimization" label="Space Optimization">

### Approach 4: Space Optimization

Space optimization improves the efficiency of the tabulation method by reducing the amount of space used.

#### Implementation

```javascript
class Solution {
    ways(x, y) {
        const dp = Array(y + 1).fill(0);
        dp[0] = 1;

        for (let i = 0; i <= x; i++) {
            for (let j = 1; j <= y; j++) {
                dp[j] += dp[j - 1];
            }
        }

        return dp[y];
    }
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Vipullakum007"/>
    ```javascript
    class Solution {
        ways(x, y) {
            const dp = Array(y + 1).fill(0);
            dp[0] = 1;

            for (let i = 0; i <= x; i++) {
                for (let j = 1; j <= y; j++) {
                    dp[j] += dp[j - 1];
                }
            }

            return dp[y];
        }
    }
    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
  
   ```python
   class Solution:
       def ways(self, x, y):
           dp = [0] * (y + 1)
           dp[0] = 1

           for i in range(x + 1):
               for j in range(1, y + 1):
                   dp[j] += dp[j - 1]

           return dp[y]
   ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Vipullakum007"/>
    ```java
    class Solution {
        public int ways(int x, int y) {
            int[] dp = new int[y + 1];
            dp[0] = 1;

            for (int i = 0; i <= x; i++) {
                for (int j = 1; j <= y; j++) {
                    dp[j] += dp[j - 1];
                }
            }

            return dp[y];
        }
    }
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
    ```cpp
    #include <vector>
    using namespace std;

    class Solution {
    public:
        int ways(int x, int y) {
            vector<int> dp(y + 1, 0);
            dp[0] = 1;

            for (int i = 0; i <= x; i++) {
                for (int j = 1; j <= y; j++) {
                    dp[j] += dp[j - 1];
                }
            }

            return dp[y];
        }
    };
    ```
  </TabItem>
</Tabs>

#### Complexity Analysis

**Time Complexity:** $O(x \cdot y)$
- The same number of computations as in tabulation.

**Space Complexity:** $O(y)$
- Only a single array of size $y + 1$ is used.

</tabItem>
</Tabs>

:::tip

When choosing an approach, consider both time and space complexities. For smaller inputs, simpler approaches like recursion might be sufficient, but for larger inputs, optimized solutions like memoization, tabulation, or space-optimized tabulation are more efficient and practical. Always analyze the constraints and requirements of your problem to select the most appropriate method.

Would you like any additional information or another example?

:::

---

## References

- **LeetCode Problem**: [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/maximum-depth-of-binary-tree/solution/)
- **Authors GeeksforGeeks Profile:** [Vipul](https://www.geeksforgeeks.org/user/lakumvipwjge/)
