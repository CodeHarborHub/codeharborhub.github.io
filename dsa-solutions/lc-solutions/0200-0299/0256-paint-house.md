---
id: paint-house
title: Paint House
sidebar_label: 0256. Paint House
tags: [Hash Map, Two Pointers]
description: Solution to finding the paint House.
---

## Description
- There is a row of n houses, where each house can be painted one of three colors: red, blue, or green. The cost of painting  each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.

- The cost of painting each house with a certain color is represented by an n x 3 cost matrix costs.

- For example, costs[0][0] is the cost of painting house 0 with the color red; costs[1][2] is the cost of painting house 1 with color green, and so on...
Return the minimum cost to paint all houses.

## Example: 

**Example 1:**
```bash
Input: costs = [[17,2,17],[16,16,5],[14,3,19]]
Output: 10
Explanation: Paint house 0 into blue, paint house 1 into green, paint house 2 into blue.
Minimum cost: 2 + 5 + 3 = 10.
```

**Example 2:**
```bash
Input: costs = [[7,6,2]]
Output: 2
 ```

## Constraints:
```bash
costs.length == n
costs[i].length == 3
1 <= n <= 100
1 <= costs[i][j] <= 20
```

## Solution

#### Approach

To solve the "Paint House" problem efficiently, we can use dynamic programming to keep track of the minimum cost to paint each house while ensuring no two adjacent houses have the same color. Here's the step-by-step approach to implement this solution:

### Approach:

1. **Initialization**:
   - Use the given cost matrix to keep track of the costs. Initialize variables to store the costs of painting the previous house red, blue, or green.

2. **Dynamic Programming**:
   - Iterate through each house starting from the second one, updating the minimum cost to paint the current house with each color based on the previous house's costs.
   - For each house, calculate the cost to paint it red, blue, or green as the current cost plus the minimum of the other two costs from the previous house.

3. **Result**:
   - The answer will be the minimum cost to paint the last house with any of the three colors.

<Tabs>
<TabItem value="javascript" label="JavaScript" default>
  <SolutionAuthor name="@sivaprasath"/>


```javascript
function minCost(costs) {
    if (costs.length === 0) return 0;

    let n = costs.length;

    // Initial cost for the first house
    let previousRed = costs[0][0];
    let previousBlue = costs[0][1];
    let previousGreen = costs[0][2];

    for (let i = 1; i < n; i++) {
        let currentRed = costs[i][0] + Math.min(previousBlue, previousGreen);
        let currentBlue = costs[i][1] + Math.min(previousRed, previousGreen);
        let currentGreen = costs[i][2] + Math.min(previousRed, previousBlue);

        // Update previous costs to current costs for the next iteration
        previousRed = currentRed;
        previousBlue = currentBlue;
        previousGreen = currentGreen;
    }

    // The minimum cost of the last house can be any color
    return Math.min(previousRed, previousBlue, previousGreen);
}

// Example usage:
const costs1 = [[17, 2, 17], [16, 16, 5], [14, 3, 19]];
console.log(minCost(costs1)); // Output: 10

const costs2 = [[7, 6, 2]];
console.log(minCost(costs2)); // Output: 2
```
</TabItem>
<TabItem value="typescript" label="TypeScript">
  <SolutionAuthor name="@sivaprasath"/>

```typescript
function minCost(costs: number[][]): number {
    if (costs.length === 0) return 0;

    let n = costs.length;

    // Initial cost for the first house
    let previousRed = costs[0][0];
    let previousBlue = costs[0][1];
    let previousGreen = costs[0][2];

    for (let i = 1; i < n; i++) {
        let currentRed = costs[i][0] + Math.min(previousBlue, previousGreen);
        let currentBlue = costs[i][1] + Math.min(previousRed, previousGreen);
        let currentGreen = costs[i][2] + Math.min(previousRed, previousBlue);

        // Update previous costs to current costs for the next iteration
        previousRed = currentRed;
        previousBlue = currentBlue;
        previousGreen = currentGreen;
    }

    // The minimum cost of the last house can be any color
    return Math.min(previousRed, previousBlue, previousGreen);
}

// Example usage:
const costs1: number[][] = [[17, 2, 17], [16, 16, 5], [14, 3, 19]];
console.log(minCost(costs1)); // Output: 10

const costs2: number[][] = [[7, 6, 2]];
console.log(minCost(costs2)); // Output: 2
```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@sivaprasath"/>


```python
def minCost(costs):
    if not costs:
        return 0

    n = len(costs)

    # Initial cost for the first house
    previousRed = costs[0][0]
    previousBlue = costs[0][1]
    previousGreen = costs[0][2]

    for i in range(1, n):
        currentRed = costs[i][0] + min(previousBlue, previousGreen)
        currentBlue = costs[i][1] + min(previousRed, previousGreen)
        currentGreen = costs[i][2] + min(previousRed, previousBlue)

        # Update previous costs to current costs for the next iteration
        previousRed = currentRed
        previousBlue = currentBlue
        previousGreen = currentGreen

    # The minimum cost of the last house can be any color
    return min(previousRed, previousBlue, previousGreen)

# Example usage:
costs1 = [[17, 2, 17], [16, 16, 5], [14, 3, 19]]
print(minCost(costs1))  # Output: 10

costs2 = [[7, 6, 2]]
print(minCost(costs2))  # Output: 2
```

</TabItem>

<TabItem value="java" label="Java">
  <SolutionAuthor name="@sivaprasath"/>


```java
public class Solution {
    public int minCost(int[][] costs) {
        if (costs == null || costs.length == 0) {
            return 0;
        }

        int n = costs.length;

        // Initial cost for the first house
        int previousRed = costs[0][0];
        int previousBlue = costs[0][1];
        int previousGreen = costs[0][2];

        for (int i = 1; i < n; i++) {
            int currentRed = costs[i][0] + Math.min(previousBlue, previousGreen);
            int currentBlue = costs[i][1] + Math.min(previousRed, previousGreen);
            int currentGreen = costs[i][2] + Math.min(previousRed, previousBlue);

            // Update previous costs to current costs for the next iteration
            previousRed = currentRed;
            previousBlue = currentBlue;
            previousGreen = currentGreen;
        }

        // The minimum cost of the last house can be any color
        return Math.min(previousRed, Math.min(previousBlue, previousGreen));
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        int[][] costs1 = {{17, 2, 17}, {16, 16, 5}, {14, 3, 19}};
        System.out.println(solution.minCost(costs1)); // Output: 10

        int[][] costs2 = {{7, 6, 2}};
        System.out.println(solution.minCost(costs2)); // Output: 2
    }
}
```

</TabItem>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@sivaprasath"/>

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>

using namespace std;

class Solution {
public:
    int minCost(vector<vector<int>>& costs) {
        if (costs.empty()) return 0;

        int n = costs.size();

        // Initial cost for the first house
        int previousRed = costs[0][0];
        int previousBlue = costs[0][1];
        int previousGreen = costs[0][2];

        for (int i = 1; i < n; ++i) {
            int currentRed = costs[i][0] + min(previousBlue, previousGreen);
            int currentBlue = costs[i][1] + min(previousRed, previousGreen);
            int currentGreen = costs[i][2] + min(previousRed, previousBlue);

            // Update previous costs to current costs for the next iteration
            previousRed = currentRed;
            previousBlue = currentBlue;
            previousGreen = currentGreen;
        }

        // The minimum cost of the last house can be any color
        return min({previousRed, previousBlue, previousGreen});
    }
};

int main() {
    Solution solution;

    vector<vector<int>> costs1 = {{17, 2, 17}, {16, 16, 5}, {14, 3, 19}};
    cout << solution.minCost(costs1) << endl; // Output: 10

    vector<vector<int>> costs2 = {{7, 6, 2}};
    cout << solution.minCost(costs2) << endl; // Output: 2

    return 0;
}
``` 
</TabItem>
</Tabs>

### Explanation:

<Tabs>
<TabItem value="javascript" label="JavaScript">
- **Initialization**: We start by assigning the costs of painting the first house to `previousRed`, `previousBlue`, and `previousGreen`.
- **Dynamic Programming**: For each subsequent house, we calculate the cost of painting it each color based on the minimum cost of painting the previous house a different color.
  - `currentRed = costs[i][0] + Math.min(previousBlue, previousGreen)`
  - `currentBlue = costs[i][1] + Math.min(previousRed, previousGreen)`
  - `currentGreen = costs[i][2] + Math.min(previousRed, previousBlue)`
- **Result**: After processing all the houses, the minimum cost of painting the last house can be either red, blue, or green. The final result is the minimum of these three values.
</TabItem>
<TabItem value="typescript" label="TypeScript">
- **Initialization**: We start by assigning the costs of painting the first house to `previousRed`, `previousBlue`, and `previousGreen`.
- **Dynamic Programming**: For each subsequent house, we calculate the cost of painting it each color based on the minimum cost of painting the previous house a different color.
  - `currentRed = costs[i][0] + Math.min(previousBlue, previousGreen)`
  - `currentBlue = costs[i][1] + Math.min(previousRed, previousGreen)`
  - `currentGreen = costs[i][2] + Math.min(previousRed, previousBlue)`
- **Result**: After processing all the houses, the minimum cost of painting the last house can be either red, blue, or green. The final result is the minimum of these three values.

</TabItem>
<TabItem value="python" label="Python">
1. **Initialization**:
   - Initialize the costs for painting the first house (`previousRed`, `previousBlue`, `previousGreen`) using the first row of the input `costs` matrix.

2. **Dynamic Programming**:
   - Iterate through each house starting from the second one (index 1). For each house, calculate the minimum cost to paint it red, blue, or green based on the costs of painting the previous house a different color.
   - Update the variables to store the minimum costs for the current house to be used in the next iteration.

3. **Result**:
   - After processing all the houses, the result is the minimum cost of painting the last house, which can be either red, blue, or green.
</TabItem>
<TabItem value="java" label="Java">
1. **Initialization**:
   - Initialize the costs for painting the first house (`previousRed`, `previousBlue`, `previousGreen`) using the first row of the input `costs` matrix.

2. **Dynamic Programming**:
   - Iterate through each house starting from the second one (index 1). For each house, calculate the minimum cost to paint it red, blue, or green based on the costs of painting the previous house a different color.
   - Update the variables to store the minimum costs for the current house to be used in the next iteration.

3. **Result**:
   - After processing all the houses, the result is the minimum cost of painting the last house, which can be either red, blue, or green.

</TabItem>
<TabItem value="cpp" label="c++">
1. **Initialization**:
   - Initialize the costs for painting the first house (`previousRed`, `previousBlue`, `previousGreen`) using the first row of the input `costs` matrix.

2. **Dynamic Programming**:
   - Iterate through each house starting from the second one (index 1). For each house, calculate the minimum cost to paint it red, blue, or green based on the costs of painting the previous house a different color.
   - Update the variables to store the minimum costs for the current house to be used in the next iteration.

3. **Result**:
   - After processing all the houses, the result is the minimum cost of painting the last house, which can be either red, blue, or green.
</TabItem>
</Tabs>

### Complexity:

<Tabs>
<TabItem value="javascript" label="JavaScript" default>

- **Time Complexity**: `O(n)`, where `n` is the number of houses. We only make a single pass through the houses.
- **Space Complexity**: `O(1)`, as we use a constant amount of additional space regardless of the number of houses.

</TabItem>
<TabItem value="typescript" label="TypeScript">
- **Time Complexity**: `O(n)`, where `n` is the number of houses. We only make a single pass through the houses.
- **Space Complexity**: `O(1)`, as we use a constant amount of additional space regardless of the number of houses.
</TabItem>
<TabItem value="python" label="Python">

- **Time Complexity**: `O(n)`, where `n` is the number of houses. The solution involves a single pass through the list of houses.
- **Space Complexity**: `O(1)`, as we use a constant amount of extra space for storing the costs of painting the houses.

</TabItem>
<TabItem value="java" label="Java">


- **Time Complexity**: `O(n)`, where `n` is the number of houses. The solution involves a single pass through the list of houses.
- **Space Complexity**: `O(1)`, as we use a constant amount of extra space for storing the costs of painting the houses.


</TabItem>
<TabItem value="cpp" label="c++">

- **Time Complexity**: `O(n)`, where `n` is the number of houses. The solution involves a single pass through the list of houses.
- **Space Complexity**: `O(1)`, as we use a constant amount of extra space for storing the costs of painting the houses.

</TabItem>
</Tabs>

## References

- **LeetCode Problem:** [paint house](https://leetcode.com/problems/paint-house/)

<h2>Author:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['sivaprasath2004'].map(username => (
 <Author key={username} username={username} />
))}
</div>
