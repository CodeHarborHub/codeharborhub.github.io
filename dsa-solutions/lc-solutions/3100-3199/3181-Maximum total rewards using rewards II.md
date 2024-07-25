---
id: 3181-max-total-reward
title: Maximum Total Reward Using Operations
level: hard
sidebar_label: Max Total Reward
tags:
- Dynamic Programming
- Bit Manipulation
- C++
- Java
- Python
description: "This document provides solutions for finding the maximum total reward using dynamic programming and bit manipulation, implemented in C++, Java, and Python."
---

## Problem
Given a list of reward values, the goal is to determine the maximum total reward that can be achieved using a series of operations.

## Solution
The problem is solved using dynamic programming and bit manipulation. The approach involves maintaining a bitset or similar data structure to track achievable reward values and iterating through the sorted reward values to update this structure.

## Code in Different Languages

### C++
```cpp
#include <vector>
#include <bitset>
#include <algorithm>
#include <stdexcept>
using namespace std;

class Solution {
 public:
  int maxTotalReward(vector<int>& rewardValues) {
    constexpr int kPossibleRewards = 100000;
    bitset<kPossibleRewards> dp;
    dp[0] = true;

    sort(rewardValues.begin(), rewardValues.end());

    for (const int num : rewardValues) {
      bitset<kPossibleRewards> newBits = dp;
      newBits <<= kPossibleRewards - num;
      newBits >>= kPossibleRewards - num;
      dp |= newBits << num;
    }

    for (int ans = kPossibleRewards - 1; ans >= 0; --ans)
      if (dp[ans])
        return ans;

    throw runtime_error("Solution not found");
  }
};
```

### Java
```java
import java.math.BigInteger;
import java.util.Arrays;

class Solution {
  public int maxTotalReward(int[] rewardValues) {
    BigInteger one = BigInteger.ONE;
    BigInteger dp = one; // the possible rewards (initially, 0 is achievable)

    Arrays.sort(rewardValues);

    for (final int num : rewardValues) {
      BigInteger maskBitsLessThanNum = one.shiftLeft(num).subtract(one);
      BigInteger bitsLessThanNum = dp.and(maskBitsLessThanNum);
      dp = dp.or(bitsLessThanNum.shiftLeft(num));
    }

    return dp.bitLength() - 1;
  }
}
```

### Python
```python
from typing import List

class Solution:
  def maxTotalReward(self, rewardValues: List[int]) -> int:
    dp = 1  # the possible rewards (initially, 0 is achievable)

    for num in sorted(rewardValues):
      smallerNums = dp & ((1 << num) - 1)
      dp |= smallerNums << num

    return dp.bit_length() - 1

# Example usage
sol = Solution()
rewardValues = [1, 2, 3, 5]
print(sol.maxTotalReward(rewardValues))  # Output: 10
```

# Complexity Analysis
## Time Complexity:
$O(n * k)$, where n is the number of reward values and k is the maximum possible reward value. Sorting the reward values takes O(n log n) time, and each bit manipulation operation is efficient.

## Space Complexity: 
$O(k)$
Reason: The bitset or similar structure requires space proportional to the maximum possible reward value.
