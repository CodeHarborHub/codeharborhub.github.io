---
id: target-sum
title: Target Sum
sidebar_label: 0494 - Target Sum
tags:
  - Dynamic Programming
  - Recursion
  - Memoization
description: "This is a solution to the Target Sum problem on LeetCode."
---

## Problem Description

You are given an integer array `nums` and an integer `target`.

You want to build an **expression** out of nums by adding one of the symbols `'+'` and `'-'` before each integer in nums and then concatenate all the integers.

For example, if `nums = [2, 1]`, you can add a `'+'` before `2` and a `'-'` before `1` and concatenate them to build the expression `"+2-1"`.
Return the number of different **expressions** that you can build, which evaluates to target.

### Examples

**Example 1:**
```
Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
```

**Example 2:**

```
Input: nums = [1], target = 1
Output: 1
```

### Constraints

- `1 <= nums.length <= 20`
- `0 <= nums[i] <= 1000`
- `0 <= sum(nums[i]) <= 1000`
- `-1000 <= target <= 1000`

## Solution for Target Sum

### Approach 1: Brute Force
#### Algorithm

The brute force approach is based on recursion. We need to try to put both the `+` and `-` symbols at every location in the given nums array and find out the assignments which lead to the required result S.

For this, we make use of a recursive function `calculate(nums, i, sum, S)`, which returns the assignments leading to the sum S, starting from the $i^{th}$ index onwards, provided the sum of elements up to the $i^{th}$ element is sum. This function appends a `+` sign and a `-` sign both to the element at the current index and calls itself with the updated sum as sum + nums[i] and sum - nums[i] respectively along with the updated current index as i+1. Whenever we reach the end of the array, we compare the sum obtained with S. If they are equal, we increment the count value to be returned.

Thus, the function call `calculate(nums, 0, 0, S)` returns the required number of assignments.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <vector>

class Solution {
public:
    int count = 0;
    
    int findTargetSumWays(std::vector<int>& nums, int S) {
        calculate(nums, 0, 0, S);
        return count;
    }
    
    void calculate(std::vector<int>& nums, int i, int sum, int S) {
        if (i == nums.size()) {
            if (sum == S) {
                count++;
            }
        } else {
            calculate(nums, i + 1, sum + nums[i], S);
            calculate(nums, i + 1, sum - nums[i], S);
        }
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
public class Solution {
    int count = 0;
    
    public int findTargetSumWays(int[] nums, int S) {
        calculate(nums, 0, 0, S);
        return count;
    }
    
    public void calculate(int[] nums, int i, int sum, int S) {
        if (i == nums.length) {
            if (sum == S) {
                count++;
            }
        } else {
            calculate(nums, i + 1, sum + nums[i], S);
            calculate(nums, i + 1, sum - nums[i], S);
        }
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
from typing import List

class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        self.count = 0  # Initialize the count
        
        def calculate(nums: List[int], i: int, current_sum: int, target: int):
            if i == len(nums):
                if current_sum == target:
                    self.count += 1
            else:
                calculate(nums, i + 1, current_sum + nums[i], target)
                calculate(nums, i + 1, current_sum - nums[i], target)
        
        calculate(nums, 0, 0, target)
        return self.count

```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(2^N)$

> **Reason**: Size of recursion tree will be $2^N$. N refers to the size of nums array.

### Space Complexity: $O(N)$

> **Reason**: The depth of the recursion tree can go up to N.

### Approach 2: Recursion with Memoization

#### Algorithm

In the last approach, we can observe that a lot of redundant function calls were made with the same value of i as the current index and the same value of sum as the current sum, since the same values could be obtained through multiple paths in the recursion tree. In order to remove this redundancy, we make use of memoization as well to store the results which have been calculated earlier.

Thus, for every call to `calculate(nums, i, sum, S)`, we store the result obtained in memo[i][sum + total], where total stands for the sum of all the elements from the input array. The factor of total has been added as an offset to the sum value to map all the sum possible to positive integer range. By making use of memoization, we can get the result of each redundant function call in constant time.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <vector>
#include <numeric>
#include <algorithm>
#include <climits>

class Solution {
public:
    int total;
    
    int findTargetSumWays(std::vector<int>& nums, int S) {
        total = std::accumulate(nums.begin(), nums.end(), 0);
        
        std::vector<std::vector<int>> memo(nums.size(), std::vector<int>(2 * total + 1, INT_MIN));
        return calculate(nums, 0, 0, S, memo);
    }
    
    int calculate(std::vector<int>& nums, int i, int sum, int S, std::vector<std::vector<int>>& memo) {
        if (i == nums.size()) {
            return sum == S ? 1 : 0;
        } else {
            if (memo[i][sum + total] != INT_MIN) {
                return memo[i][sum + total];
            }
            int add = calculate(nums, i + 1, sum + nums[i], S, memo);
            int subtract = calculate(nums, i + 1, sum - nums[i], S, memo);
            memo[i][sum + total] = add + subtract;
            return memo[i][sum + total];
        }
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
public class Solution {
    int total;
    
    public int findTargetSumWays(int[] nums, int S) {
        total = Arrays.stream(nums).sum();
        
        int[][] memo = new int[nums.length][2 * total + 1];
        for (int[] row : memo) {
            Arrays.fill(row, Integer.MIN_VALUE);
        }
        return calculate(nums, 0, 0, S, memo);
    }
    
    public int calculate(int[] nums, int i, int sum, int S, int[][] memo) {
        if (i == nums.length) {
            if (sum == S) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (memo[i][sum + total] != Integer.MIN_VALUE) {
                return memo[i][sum + total];
            }
            int add = calculate(nums, i + 1, sum + nums[i], S, memo);
            int subtract = calculate(nums, i + 1, sum - nums[i], S, memo);
            memo[i][sum + total] = add + subtract;
            return memo[i][sum + total];
        }
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
from typing import List

class Solution:
    def findTargetSumWays(self, nums: List[int], S: int) -> int:
        self.total = sum(nums)
        
        memo = [[float('-inf')] * (2 * self.total + 1) for _ in range(len(nums))]
        return self.calculate(nums, 0, 0, S, memo)
    
    def calculate(self, nums: List[int], i: int, current_sum: int, target: int, memo: List[List[int]]) -> int:
        if i == len(nums):
            return 1 if current_sum == target else 0
        else:
            if memo[i][current_sum + self.total] != float('-inf'):
                return memo[i][current_sum + self.total]
            add = self.calculate(nums, i + 1, current_sum + nums[i], target, memo)
            subtract = self.calculate(nums, i + 1, current_sum - nums[i], target, memo)
            memo[i][current_sum + self.total] = add + subtract
            return memo[i][current_sum + self.total]
                    
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(T⋅N)$

> **Reason**:   The memo array of size O(T⋅N) has been filled just once. Here, T refers to the sum of the nums array and N refers to the length of the nums array.

### Space Complexity: $O(T.N)$

> **Reason**:  The depth of recursion tree can go up to N.The `memo` array contains T.N elements.

### Approach 3:  2D Dynamic Programming
#### Algorithm
The idea behind this approach is as follows. Suppose we can find out the number of times a particular sum, say $$sum_i$$ is possible up to a particular index, say i, in the given nums array, which is given by say $$count_i$$. Now, we can find out the number of times the sum $$sum_i + nums[i]$$ can occur easily as $$count_i$$. Similarly, the number of times the sum $$sum_i - nums[i]$$ occurs is also given by $$count_i$$.

Thus, if we know all the sums $$sum_j$$'s which are possible up to the jth index by using various assignments, along with the corresponding count of assignments, $$count_j$$, leading to the same sum, we can determine all the sums possible up to the $(j+1)^{th}$ index along with the corresponding count of assignments leading to the new sums.

Based on this idea, we make use of a dp to determine the number of assignments which can lead to the given sum. dp[i][j] refers to the number of assignments which can lead to a sum of j up to the $i^{th}$ index. To determine the number of assignments which can lead to a sum of $sum + nums[i]$ up to the $(i+1)^{th}$ index, we can use $$dp[i][sum + nums[i]] = dp[i][sum + nums[i]] + dp[i-1][sum]$$. Similarly, $$dp[i][sum - nums[i]] = dp[i][sum - nums[i]] + dp[i-1][sum]$$. We iterate over the dp array in a row-wise fashion, i.e., firstly, we obtain all the sums which are possible up to a particular index along with the corresponding count of assignments and then proceed for the next element (index) in the nums array.

But, since the sum can range from `-total` to `total`, where `total` equals the sum of the `nums` array, we need to add an offset of total to the sum indices (column number) to map all the sums obtained to positive range only.

At the end, the value of $dp[n-1][S+total]$ gives us the required number of assignments. Here, n refers to the number of elements in the `nums` array.


## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <vector>
#include <numeric>
#include <cmath>

class Solution {
public:
    int findTargetSumWays(std::vector<int>& nums, int S) {
        int total = std::accumulate(nums.begin(), nums.end(), 0);
        int n = nums.size();
        std::vector<std::vector<int>> dp(n, std::vector<int>(2 * total + 1, 0));

        dp[0][nums[0] + total] = 1;
        dp[0][-nums[0] + total] += 1;

        for (int i = 1; i < n; i++) {
            for (int sum = -total; sum <= total; sum++) {
                if (dp[i - 1][sum + total] > 0) {
                    dp[i][sum + nums[i] + total] += dp[i - 1][sum + total];
                    dp[i][sum - nums[i] + total] += dp[i - 1][sum + total];
                }
            }
        }

        return std::abs(S) > total ? 0 : dp[n - 1][S + total];
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
public class Solution {
    public int findTargetSumWays(int[] nums, int S) {
        int total = Arrays.stream(nums).sum();
        int[][] dp = new int[nums.length][2 * total + 1];
        dp[0][nums[0] + total] = 1;
        dp[0][-nums[0] + total] += 1;
        
        for (int i = 1; i < nums.length; i++) {
            for (int sum = -total; sum <= total; sum++) {
                if (dp[i - 1][sum + total] > 0) {
                    dp[i][sum + nums[i] + total] += dp[i - 1][sum + total];
                    dp[i][sum - nums[i] + total] += dp[i - 1][sum + total];
                }
            }
        }
        
        return Math.abs(S) > total ? 0 : dp[nums.length - 1][S + total];
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
from typing import List

class Solution:
    def findTargetSumWays(self, nums, S):
        total = sum(nums)
        n = len(nums)
        dp = [[0] * (2 * total + 1) for _ in range(n)]

        dp[0][nums[0] + total] = 1
        dp[0][-nums[0] + total] += 1

        for i in range(1, n):
            for s in range(-total, total + 1):
                if dp[i - 1][s + total] > 0:
                    dp[i][s + nums[i] + total] += dp[i - 1][s + total]
                    dp[i][s - nums[i] + total] += dp[i - 1][s + total]

        return 0 if abs(S) > total else dp[n - 1][S + total]            
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(T⋅N)$

> **Reason**: The dp array of size O(T⋅N) has been filled just once. Here, T refers to the sum of the nums array and N refers to the length of the nums array.

### Space Complexity: $O(T.N)$

> **Reason**: dp array of size T⋅N is used.

### Approach 4: 1D Dynamic Programming
#### Algorithm
If we look closely at the last solution, we can observe that to evaluate the current row of dp, only the values of the last row of dp are needed. Thus, we can save some space by using a 1D DP array instead of a 2D DP array. The only change we need to make is that we have to create an array next of the same size as dp so that we can update it while scanning through dp since it is not safe to mutate dp when the iteration is in progress. After the iteration is completed, we set dp equal to next and create a new empty array next before the next iteration starts, and so on.


## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <vector>
#include <numeric>
#include <cmath>

class Solution {
public:
    int findTargetSumWays(std::vector<int>& nums, int S) {
        int total = std::accumulate(nums.begin(), nums.end(), 0);
        int n = nums.size();
        std::vector<int> dp(2 * total + 1, 0);

        dp[nums[0] + total] = 1;
        dp[-nums[0] + total] += 1;

        for (int i = 1; i < n; i++) {
            std::vector<int> next(2 * total + 1, 0);
            for (int sum = -total; sum <= total; sum++) {
                if (dp[sum + total] > 0) {
                    next[sum + nums[i] + total] += dp[sum + total];
                    next[sum - nums[i] + total] += dp[sum + total];
                }
            }
            dp = next;
        }

        return std::abs(S) > total ? 0 : dp[S + total];
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
public class Solution {
    public int findTargetSumWays(int[] nums, int S) {
        int total = Arrays.stream(nums).sum();
        int[] dp = new int[2 * total + 1];
        dp[nums[0] + total] = 1;
        dp[-nums[0] + total] += 1;
        
        for (int i = 1; i < nums.length; i++) {
            int[] next = new int[2 * total + 1];
            for (int sum = -total; sum <= total; sum++) {
                if (dp[sum + total] > 0) {
                    next[sum + nums[i] + total] += dp[sum + total];
                    next[sum - nums[i] + total] += dp[sum + total];
                }
            }
            dp = next;
        }
        
        return Math.abs(S) > total ? 0 : dp[S + total];
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def findTargetSumWays(self, nums, S):
        total = sum(nums)
        n = len(nums)
        dp = [0] * (2 * total + 1)

        dp[nums[0] + total] = 1
        dp[-nums[0] + total] += 1

        for i in range(1, n):
            next_dp = [0] * (2 * total + 1)
            for sum_val in range(-total, total + 1):
                if dp[sum_val + total] > 0:
                    next_dp[sum_val + nums[i] + total] += dp[sum_val + total]
                    next_dp[sum_val - nums[i] + total] += dp[sum_val + total]
            dp = next_dp

        return 0 if abs(S) > total else dp[S + total]
         
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(T⋅N)$

> **Reason**: Each of the N dp arrays of size ttt has been filled just once. Here, T refers to the sum of the nums array and N refers to the length of the nums array.

### Space Complexity: $O(T)$

> **Reason**:  Two dp arrays of size 2⋅T+1 are used, therefore the space usage is O(T).

## References

- **LeetCode Problem**: [Target Sum](https://leetcode.com/problems/target-sum/description/)

- **Solution Link**: [Target Sum](https://leetcode.com/problems/target-sum/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>