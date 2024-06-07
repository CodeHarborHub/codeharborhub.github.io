---

id: maximum-non-negative-product-in-a-matrix
title: Maximum Non Negative Product in a Matrix
sidebar_label: 1594-Maximum-Non-Negative-Product-in-a-Matrix
tags:
  - Matrix
  - Dynamic Programming
  - LeetCode
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the Maximum Non Negative Product in a Matrix problem on LeetCode."

---

In this page, we will solve the Maximum Non Negative Product in a Matrix problem using different approaches. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

You are given an `m x n` matrix `grid`. Initially, you are located at the top-left corner (0, 0), and in each step, you can only move right or down in the matrix.

Among all possible paths starting from the top-left corner $(0, 0)$ and ending in the bottom-right corner $(m - 1, n - 1)$, find the path with the `maximum non-negative product`. The product of a path is the product of all integers in the grid cells visited along the path.

Return the maximum non-negative product modulo $10^9 + 7$. If the maximum product is negative, return -1.

### Examples

**Example 1:**

```plaintext
Input: grid = [[-1,-2,-3],[-2,-3,-3],[-3,-3,-2]]
Output: -1
Explanation: It is not possible to get non-negative product in the path from (0, 0) to (2, 2), so return -1.
```

**Example 2:**

```plaintext
Input: grid = [[1,-2,1],[1,-2,1],[3,-4,1]]
Output: 8
Explanation: Maximum non-negative product is shown (1 * 1 * -2 * -4 * 1 = 8).
```

**Example 3:**

```plaintext
Input: grid = [[1,3],[0,-4]]
Output: 0
Explanation: Maximum non-negative product is shown (1 * 0 * -4 = 0).
```

### Constraints

- $m == grid.length$
- $n == grid[i].length$
- $1 <= m, n <= 15$
- $-4 <= grid[i][j] <= 4$

---

## Solution for Maximum Non Negative Product in a Matrix

### Intuition and Approach

To solve this problem, we can use Dynamic Programming (DP). We'll maintain two DP arrays `maxDP` and `minDP`, where:
- `maxDP[i][j]` will store the maximum product to reach cell `(i, j)`.
- `minDP[i][j]` will store the minimum product to reach cell `(i, j)`.

At each cell `(i, j)`, we will consider the values from the cell above `(i-1, j)` and from the cell to the left `(i, j-1)`. This helps in managing both positive and negative products.

<Tabs>
 <tabItem value="Dynamic Programming" label="Dynamic Programming">

### Approach 1: Dynamic Programming

#### Implementation

```jsx live
function maximumNonNegativeProductInMatrix() {
  const grid = [[1,-2,1],[1,-2,1],[3,-4,1]];

  const maxProductPath = function(grid) {
    const MOD = 1e9 + 7;
    const m = grid.length, n = grid[0].length;
    const maxDP = Array.from({length: m}, () => Array(n).fill(0));
    const minDP = Array.from({length: m}, () => Array(n).fill(0));

    maxDP[0][0] = minDP[0][0] = grid[0][0];

    for (let i = 1; i < m; ++i) {
      maxDP[i][0] = minDP[i][0] = maxDP[i - 1][0] * grid[i][0];
    }

    for (let j = 1; j < n; ++j) {
      maxDP[0][j] = minDP[0][j] = maxDP[0][j - 1] * grid[0][j];
    }

    for (let i = 1; i < m; ++i) {
      for (let j = 1; j < n; ++j) {
        if (grid[i][j] >= 0) {
          maxDP[i][j] = Math.max(maxDP[i - 1][j], maxDP[i][j - 1]) * grid[i][j];
          minDP[i][j] = Math.min(minDP[i - 1][j], minDP[i][j - 1]) * grid[i][j];
        } else {
          maxDP[i][j] = Math.min(minDP[i - 1][j], minDP[i][j - 1]) * grid[i][j];
          minDP[i][j] = Math.max(maxDP[i - 1][j], maxDP[i][j - 1]) * grid[i][j];
        }
      }
    }

    const result = maxDP[m - 1][n - 1];
    return result < 0 ? -1 : result % MOD;
  };

  const result = maxProductPath(grid);
  return (
    <div>
      <p>
        <b>Input:</b> grid = {JSON.stringify(grid)}
      </p>
      <p>
        <b>Output:</b> {result}
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
    function maxProductPath(grid) {
      const MOD = 1e9 + 7;
      const m = grid.length, n = grid[0].length;
      const maxDP = Array.from({length: m}, () => Array(n).fill(0));
      const minDP = Array.from({length: m}, () => Array(n).fill(0));

      maxDP[0][0] = minDP[0][0] = grid[0][0];

      for (let i = 1; i < m; ++i) {
        maxDP[i][0] = minDP[i][0] = maxDP[i - 1][0] * grid[i][0];
      }

      for (let j = 1; j < n; ++j) {
        maxDP[0][j] = minDP[0][j] = maxDP[0][j - 1] * grid[0][j];
      }

      for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
          if (grid[i][j] >= 0) {
            maxDP[i][j] = Math.max(maxDP[i - 1][j], maxDP[i][j - 1]) * grid[i][j];
            minDP[i][j] = Math.min(minDP[i - 1][j], minDP[i][j - 1]) * grid[i][j];
          } else {
            maxDP[i][j] = Math.min(minDP[i - 1][j], minDP[i][j - 1]) * grid[i][j];
            minDP[i][j] = Math.max(maxDP[i - 1][j], maxDP[i][j - 1]) * grid[i][j];
          }
        }
      }

      const result = maxDP[m - 1][n - 1];
      return result < 0 ? -1 : result % MOD;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function maxProductPath(grid: number[][]): number {
      const MOD = 1e9 + 7;
      const m = grid.length, n = grid[0].length;
      const maxDP = Array.from({length: m}, () => Array(n).fill(0));
      const minDP = Array.from({length: m}, () => Array(n).fill(0));

      maxDP[0][0] = minDP[0][0] = grid[0][0];

      for (let i = 1; i < m; ++i) {
        maxDP[i][0] = minDP[i][0] = maxDP[i - 1][0] * grid[i][0];
      }

      for (let j = 1; j < n; ++j) {
        maxDP[0][j] = minDP[0][j] = maxDP[0][j - 1] * grid[0][j];
      }

      for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
          if (grid[i][j] >= 0) {
            maxDP[i][j] = Math.max(maxDP[i - 1][j], maxDP[i][j - 1]) * grid[i][j];
            minDP[i][

j] = Math.min(minDP[i - 1][j], minDP[i][j - 1]) * grid[i][j];
          } else {
            maxDP[i][j] = Math.min(minDP[i - 1][j], minDP[i][j - 1]) * grid[i][j];
            minDP[i][j] = Math.max(maxDP[i - 1][j], maxDP[i][j - 1]) * grid[i][j];
          }
        }
      }

      const result = maxDP[m - 1][n - 1];
      return result < 0 ? -1 : result % MOD;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def maxProductPath(self, grid: List[List[int]]) -> int:
            MOD = 10**9 + 7
            m, n = len(grid), len(grid[0])
            maxDP = [[0] * n for _ in range(m)]
            minDP = [[0] * n for _ in range(m)]
            
            maxDP[0][0] = minDP[0][0] = grid[0][0]
            
            for i in range(1, m):
                maxDP[i][0] = minDP[i][0] = maxDP[i-1][0] * grid[i][0]
            
            for j in range(1, n):
                maxDP[0][j] = minDP[0][j] = maxDP[0][j-1] * grid[0][j]
            
            for i in range(1, m):
                for j in range(1, n):
                    if grid[i][j] >= 0:
                        maxDP[i][j] = max(maxDP[i-1][j], maxDP[i][j-1]) * grid[i][j]
                        minDP[i][j] = min(minDP[i-1][j], minDP[i][j-1]) * grid[i][j]
                    else:
                        maxDP[i][j] = min(minDP[i-1][j], minDP[i][j-1]) * grid[i][j]
                        minDP[i][j] = max(maxDP[i-1][j], maxDP[i][j-1]) * grid[i][j]
            
            result = maxDP[m-1][n-1]
            return -1 if result < 0 else result % MOD
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    import java.util.Arrays;

    class Solution {
        public int maxProductPath(int[][] grid) {
            int MOD = (int) 1e9 + 7;
            int m = grid.length, n = grid[0].length;
            long[][] maxDP = new long[m][n];
            long[][] minDP = new long[m][n];

            maxDP[0][0] = minDP[0][0] = grid[0][0];

            for (int i = 1; i < m; ++i) {
                maxDP[i][0] = minDP[i][0] = maxDP[i - 1][0] * grid[i][0];
            }

            for (int j = 1; j < n; ++j) {
                maxDP[0][j] = minDP[0][j] = maxDP[0][j - 1] * grid[0][j];
            }

            for (int i = 1; i < m; ++i) {
                for (int j = 1; j < n; ++j) {
                    if (grid[i][j] >= 0) {
                        maxDP[i][j] = Math.max(maxDP[i - 1][j], maxDP[i][j - 1]) * grid[i][j];
                        minDP[i][j] = Math.min(minDP[i - 1][j], minDP[i][j - 1]) * grid[i][j];
                    } else {
                        maxDP[i][j] = Math.min(minDP[i - 1][j], minDP[i][j - 1]) * grid[i][j];
                        minDP[i][j] = Math.max(maxDP[i - 1][j], maxDP[i][j - 1]) * grid[i][j];
                    }
                }
            }

            long result = maxDP[m - 1][n - 1];
            return result < 0 ? -1 : (int) (result % MOD);
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>
    #include <algorithm>

    class Solution {
    public:
        int maxProductPath(std::vector<std::vector<int>>& grid) {
            int MOD = 1e9 + 7;
            int m = grid.size(), n = grid[0].size();
            std::vector<std::vector<long long>> maxDP(m, std::vector<long long>(n, 0));
            std::vector<std::vector<long long>> minDP(m, std::vector<long long>(n, 0));

            maxDP[0][0] = minDP[0][0] = grid[0][0];

            for (int i = 1; i < m; ++i) {
                maxDP[i][0] = minDP[i][0] = maxDP[i - 1][0] * grid[i][0];
            }

            for (int j = 1; j < n; ++j) {
                maxDP[0][j] = minDP[0][j] = maxDP[0][j - 1] * grid[0][j];
            }

            for (int i = 1; i < m; ++i) {
                for (int j = 1; j < n; ++j) {
                    if (grid[i][j] >= 0) {
                        maxDP[i][j] = std::max(maxDP[i - 1][j], maxDP[i][j - 1]) * grid[i][j];
                        minDP[i][j] = std::min(minDP[i - 1][j], minDP[i][j - 1]) * grid[i][j];
                    } else {
                        maxDP[i][j] = std::min(minDP[i - 1][j], minDP[i][j - 1]) * grid[i][j];
                        minDP[i][j] = std::max(maxDP[i - 1][j], maxDP[i][j - 1]) * grid[i][j];
                    }
                }
            }

            long long result = maxDP[m - 1][n - 1];
            return result < 0 ? -1 : result % MOD;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(m \times n)$$ since we process each cell once.
- Space Complexity: $$O(m \times n)$$ for storing the DP arrays.

</tabItem>

<tabItem value="Memoization" label="Memoization">

### Approach 2: Memoization

We can use memoization to store the results of subproblems and avoid redundant calculations.

#### Implementation

```jsx live

function maximumNonNegativeProductInMatrix() {
  const grid = [[1, -2, 1], [1, -2, 1], [3, -4, 1]];

  const maxProductPath = function (grid) {
    const MOD = 1e9 + 7;
    const m = grid.length, n = grid[0].length;
    const memo = Array.from({ length: m }, () => Array(n).fill(undefined));

    const solve = (i, j) => {
      if (grid[i][j] === 0) return [0, 0];
      if (i === 0 && j === 0) return [grid[i][j], grid[i][j]];
      if (memo[i][j] !== undefined) return memo[i][j];

      let maxProduct = -Infinity;
      let minProduct = Infinity;

      if (i > 0) {
        const [maxUp, minUp] = solve(i - 1, j);
        maxProduct = Math.max(maxProduct, maxUp * grid[i][j], minUp * grid[i][j]);
        minProduct = Math.min(minProduct, maxUp * grid[i][j], minUp * grid[i][j]);
      }
      if (j > 0) {
        const [maxLeft, minLeft] = solve(i, j - 1);
        maxProduct = Math.max(maxProduct, maxLeft * grid[i][j], minLeft * grid[i][j]);
        minProduct = Math.min(minProduct, maxLeft * grid[i][j], minLeft * grid[i][j]);
      }

      memo[i][j] = [maxProduct, minProduct];
      return memo[i][j];
    };

    const result = solve(m - 1, n - 1)[0];
    return result < 0 ? -1 : result % MOD;
  };

  const result = maxProductPath(grid);
  return (
    <div>
      <p>
        <b>Input:</b> grid = {JSON.stringify(grid)}
      </p>
      <p>
        <b>Output:</b> {result}
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
       const maxProductPath = function (grid) {
      const MOD = 1e9 + 7;
      const m = grid.length, n = grid[0].length;
      const memo = Array.from({ length: m }, () => Array(n).fill(undefined));

      const solve = (i, j) => {
        if (grid[i][j] === 0) return [0, 0];
        if (i === 0 && j === 0) return [grid[i][j], grid[i][j]];
        if (memo[i][j] !== undefined) return memo[i][j];

        let maxProduct = -Infinity;
        let minProduct = Infinity;

        if (i > 0) {
          const [maxUp, minUp] = solve(i - 1, j);
          maxProduct = Math.max(maxProduct, maxUp * grid[i][j], minUp * grid[i][j]);
          minProduct = Math.min(minProduct, maxUp * grid[i][j], minUp * grid[i][j]);
        }
        if (j > 0) {
          const [maxLeft, minLeft] = solve(i, j - 1);
          maxProduct = Math.max(maxProduct, maxLeft * grid[i][j], minLeft * grid[i][j]);
          minProduct = Math.min(minProduct, maxLeft * grid[i][j], minLeft * grid[i][j]);
        }

        memo[i][j] = [maxProduct, minProduct];
        return memo[i][j];
      };

      const result = solve(m - 1, n - 1)[0];
      return result < 0 ? -1 : result % MOD;
       }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
 const maxProductPath = function (grid: number[][]): number {
  const MOD = 1e9 + 7;
  const m = grid.length, n = grid[0].length;
  const memo: number[][] = Array.from({ length: m }, () => Array(n).fill(undefined));

  const solve = (i: number, j: number): [number, number] => {
    if (grid[i][j] === 0) return [0, 0];
    if (i === 0 && j === 0) return [grid[i][j], grid[i][j]];
    if (memo[i][j] !== undefined) return memo[i][j];

    let maxProduct = -Infinity;
    let minProduct = Infinity;

    if (i > 0) {
      const [maxUp, minUp] = solve(i - 1, j);
      maxProduct = Math.max(maxProduct, maxUp * grid[i][j], minUp * grid[i][j]);
      minProduct = Math.min(minProduct, maxUp * grid[i][j], minUp * grid[i][j]);
    }
    if (j > 0) {
      const [maxLeft, minLeft] = solve(i, j - 1);
      maxProduct = Math.max(maxProduct, maxLeft * grid[i][j], minLeft * grid[i][j]);
      minProduct = Math.min(minProduct, maxLeft * grid[i][j], minLeft * grid[i][j]);
    }

    memo[i][j] = [maxProduct, minProduct];
    return memo[i][j];
  };

  const result = solve(m - 1, n - 1)[0];
  return result < 0 ? -1 : result % MOD;
};

    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
   MOD = 1e9 + 7


def max_product_path(grid):
    m, n = len(grid), len(grid[0])
    memo = [[None] * n for _ in range(m)]

    def solve(i, j):
        if grid[i][j] == 0:
            return 0, 0
        if i == 0 and j == 0:
            return grid[i][j], grid[i][j]
        if memo[i][j] is not None:
            return memo[i][j]

        max_product = -float("inf")
        min_product = float("inf")

        if i > 0:
            max_up, min_up = solve(i - 1, j)
            max_product = max(max_product, max_up * grid[i][j], min_up * grid[i][j])
            min_product = min(min_product, max_up * grid[i][j], min_up * grid[i][j])

        if j > 0:
            max_left, min_left = solve(i, j - 1)
            max_product = max(max_product, max_left * grid[i][j], min_left * grid[i][j])
            min_product = min(min_product, max_left * grid[i][j], min_left * grid[i][j])

        memo[i][j] = max_product, min_product
        return memo[i][j]

    result, _ = solve(m - 1, n - 1)
    return result % MOD if result > 0 else -1


    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
class Solution {
    public static int maxProductPath(int[][] grid) {
        int MOD = 1000000007;
        int m = grid.length, n = grid[0].length;
        int[][] memo = new int[m][n];
        for (int i = 0; i < m; i++) {
            Arrays.fill(memo[i], -1);
        }

        return solve(grid, memo, m - 1, n - 1);
    }

    private static int solve(int[][] grid, int[][] memo, int i, int j) {
        if (grid[i][j] == 0) {
            return 0;
        }
        if (i == 0 && j == 0) {
            return grid[i][j];
        }
        if (memo[i][j] != -1) {
            return memo[i][j];
        }

        int maxProduct = -Integer.MAX_VALUE;
        int minProduct = Integer.MAX_VALUE;

        if (i > 0) {
            int upProduct = solve(grid, memo, i - 1, j);
            maxProduct = Math.max(maxProduct, upProduct * grid[i][j]);
            minProduct = Math.min(minProduct, upProduct * grid[i][j]);
        }
        if (j > 0) {
            int leftProduct = solve(grid, memo, i, j - 1);
            maxProduct = Math.max(maxProduct, leftProduct * grid[i][j]);
            minProduct = Math.min(minProduct, leftProduct * grid[i][j]);
        }

        memo[i][j] = Math.max(maxProduct, minProduct) % MOD;
        return memo[i][j];
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>
    #include <unordered_map>
    #include <algorithm>

const int MOD = 1e9 + 7;

int solve(vector<vector<int>>& grid, vector<vector<int>>& memo, int i, int j) {
    if (grid[i][j] == 0) {
        return 0;
    }
    if (i == 0 && j == 0) {
        return grid[i][j];
    }
    if (memo[i][j] != -1) {
        return memo[i][j];
    }

    int maxProduct = numeric_limits<int>::min();
    int minProduct = numeric_limits<int>::max();

    if (i > 0) {
        int upProduct = solve(grid, memo, i - 1, j);
        maxProduct = max(maxProduct, upProduct * grid[i][j]);
        minProduct = min(minProduct, upProduct * grid[i][j]);
    }
    if (j > 0) {
        int leftProduct = solve(grid, memo, i, j - 1);
        maxProduct = max(maxProduct, leftProduct * grid[i][j]);
        minProduct = min(minProduct, leftProduct * grid[i][j]);
    }

    memo[i][j] = max(maxProduct, minProduct) % MOD;
    return memo[i][j];
}

int maxProductPath(vector<vector<int>>& grid) {
    int m = grid.size(), n = grid[0].size();
    vector<vector<int>> memo(m, vector<int>(n, -1));

    return solve(grid, memo, m - 1, n - 1);
}


    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(m \times n)$$ since we process each cell once.
- Space Complexity: $$O(m \times n)$$ for storing the memoization results.

</tabItem>
</Tabs>

:::tip

By using either the Tabulation approach or the Memoization approach, we can efficiently solve the Maximum Non Negative Product in a Matrix. The choice of implementation language depends on the specific requirements and constraints of the problem.

:::

## References

- **LeetCode Problem:** [Maximum Non Negative Product in a Matrix](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/description/)
- **Solution Link:** [Maximum Non Negative Product in a Matrix Solution on LeetCode](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solution/)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)

