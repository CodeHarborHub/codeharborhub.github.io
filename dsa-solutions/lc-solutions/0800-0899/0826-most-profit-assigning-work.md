---
id: most-profit-assigning-work
title: Most Profit Assigning Work
sidebar_label: 826 - Most Profit Assigning Work
tags:
  - Leet code
description: "Solution to leetocde 826"
---
    
## Problem Statement

You have n jobs and m workers. You are given three arrays: difficulty, profit, and worker where:

difficulty[i] and profit[i] are the difficulty and the profit of the ith job, and
worker[j] is the ability of jth worker (i.e., the jth worker can only complete a job with difficulty at most worker[j]).
Every worker can be assigned at most one job, but one job can be completed multiple times.

### Example 1

**Input**: `difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]`

**Output**: `100`

**Explanation**:
Workers are assigned jobs of difficulty [4,4,6,6] and they get a profit of [20,20,30,30] separately.

### Example 2

**Input**: `difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]`

**Output**: `0`



### Constraints

- `n == difficulty.length`
- `n == profit.length`
- `m == worker.length`
- `1 <= n, m <= 104`
- `1 <= difficulty[i], profit[i], worker[i] <= 105`


### Approach


**1 Initialization:**

- Determine the maximum job difficulty.
- Initialize a maxProfitUpToDifficulty array to store the maximum profit for each difficulty level up to the maximum difficulty.

**2 Fill the Profit Lookup Table:**

- For each job, update the maxProfitUpToDifficulty array to ensure it holds the maximum profit for the given difficulty.
- Convert the maxProfitUpToDifficulty array to a cumulative maximum profit array, where each index i will have the maximum profit possible for  difficulties from 0 to i.
- Calculate Total Profit:
- For each worker, use their ability to look up the corresponding maximum profit from the maxProfitUpToDifficulty array and sum up the total - profit.

**3 Complexity**

- Time Complexity: ( O(n + m + d) ), where ( n ) is the number of jobs, ( m ) is the number of workers, and ( d ) is the maximum difficulty.
- Space Complexity: ( O(d) ) for the maxProfitUpToDifficulty array.


### Code implementation

### Python Solution

```python
class Solution(object):
    def maxProfitAssignment(self, difficulty, profit, worker):
        max_difficulty = max(difficulty)
        max_profit_up_to_difficulty = [0] * (max_difficulty + 1)

        for d, p in zip(difficulty, profit):
            max_profit_up_to_difficulty[d] = max(max_profit_up_to_difficulty[d], p)

        for i in range(1, max_difficulty + 1):
            max_profit_up_to_difficulty[i] = max(max_profit_up_to_difficulty[i], max_profit_up_to_difficulty[i - 1])

        total_profit = 0
        for ability in worker:
            if ability > max_difficulty:
                total_profit += max_profit_up_to_difficulty[max_difficulty]
            else:
                total_profit += max_profit_up_to_difficulty[ability]

        return total_profit
        

```

### C++ Solution

```cpp
class Solution {
public:
    int maxProfitAssignment(vector<int>& difficulty, vector<int>& profit, vector<int>& worker) {
        int maxDifficulty = *max_element(difficulty.begin(), difficulty.end());
        vector<int> maxProfitUpToDifficulty(maxDifficulty + 1, 0);

        for (int i = 0; i < difficulty.size(); ++i) {
            maxProfitUpToDifficulty[difficulty[i]] = max(maxProfitUpToDifficulty[difficulty[i]], profit[i]);
        }

        for (int i = 1; i <= maxDifficulty; ++i) {
            maxProfitUpToDifficulty[i] = max(maxProfitUpToDifficulty[i], maxProfitUpToDifficulty[i - 1]);
        }

        int totalProfit = 0;
        for (int ability : worker) {
            if (ability > maxDifficulty) {
                totalProfit += maxProfitUpToDifficulty[maxDifficulty];
            } else {
                totalProfit += maxProfitUpToDifficulty[ability];
            }
        }

        return totalProfit;
    }
};
```

### Java Solution

```java
class Solution {
    public int maxProfitAssignment(int[] difficulty, int[] profit, int[] worker) {
        int maxDifficulty = 0;
        for (int d : difficulty) {
            maxDifficulty = Math.max(maxDifficulty, d);
        }

        int[] maxProfitUpToDifficulty = new int[maxDifficulty + 1];
        for (int i = 0; i < difficulty.length; i++) {
            maxProfitUpToDifficulty[difficulty[i]] = Math.max(maxProfitUpToDifficulty[difficulty[i]], profit[i]);
        }

        for (int i = 1; i <= maxDifficulty; i++) {
            maxProfitUpToDifficulty[i] = Math.max(maxProfitUpToDifficulty[i], maxProfitUpToDifficulty[i - 1]);
        }

        int totalProfit = 0;
        for (int ability : worker) {
            if (ability > maxDifficulty) {
                totalProfit += maxProfitUpToDifficulty[maxDifficulty];
            } else {
                totalProfit += maxProfitUpToDifficulty[ability];
            }
        }

        return totalProfit;
    }

}
```

### JavaScript Solution

```javascript
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let maxDifficulty = Math.max(...difficulty);
    let maxProfitUpToDifficulty = new Array(maxDifficulty + 1).fill(0);

    for (let i = 0; i < difficulty.length; i++) {
        maxProfitUpToDifficulty[difficulty[i]] = Math.max(maxProfitUpToDifficulty[difficulty[i]], profit[i]);
    }

    for (let i = 1; i <= maxDifficulty; i++) {
        maxProfitUpToDifficulty[i] = Math.max(maxProfitUpToDifficulty[i], maxProfitUpToDifficulty[i - 1]);
    }

    let totalProfit = 0;
    for (let ability of worker) {
        if (ability > maxDifficulty) {
            totalProfit += maxProfitUpToDifficulty[maxDifficulty];
        } else {
            totalProfit += maxProfitUpToDifficulty[ability];
        }
    }

    return totalProfit;
};
```