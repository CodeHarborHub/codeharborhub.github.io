---
id: card-flipping-game
title: Card Flipping Game
sidebar_label: 0822-Card-Flipping-Game
tags:
  - Arrays
  - Hashing
  - C++
  - Java
  - Python
description: "This document provides a solution to the Card Flipping Game problem, where we need to find the smallest number that is on the front of a card and not on the back of any card."
---

## Problem

You are given two integer arrays `fronts` and `backs` representing the fronts and backs of `n` cards respectively. If `fronts[i]` and `backs[i]` are the same for card `i`, we cannot use it. We need to find the smallest number that is on the front of a card and not on the back of any card.

### Examples

**Example 1:**

Input: fronts = [1,2,4,4,7], backs = [1,3,4,1,3]
Output: 2
Explanation: If you flip the second card, the number 2 is on the front, which is not on the back of any card.

**Example 2:**

Input: fronts = [1], backs = [1]
Output: 0
Explanation: There is no number that is on the front of a card and not on the back of any card.

### Constraints

- `n == fronts.length == backs.length`
- `1 <= n <= 1000`
- `1 <= fronts[i], backs[i] <= 2000`

### Approach

To solve this problem, we can follow these steps:

1. Identify all numbers that appear on both the front and back of the same card and store them in a set.
2. Initialize a variable to track the smallest valid number.
3. Traverse through the fronts and backs arrays to find the smallest number that is not in the set.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <vector>
#include <unordered_set>
#include <algorithm>

using namespace std;

int flipgame(vector<int>& fronts, vector<int>& backs) {
    unordered_set<int> same;
    int n = fronts.size();

    for (int i = 0; i < n; ++i) {
        if (fronts[i] == backs[i]) {
            same.insert(fronts[i]);
        }
    }

    int result = INT_MAX;

    for (int i = 0; i < n; ++i) {
        if (same.find(fronts[i]) == same.end()) {
            result = min(result, fronts[i]);
        }
        if (same.find(backs[i]) == same.end()) {
            result = min(result, backs[i]);
        }
    }

    return result == INT_MAX ? 0 : result;
}

int main() {
    vector<int> fronts = {1, 2, 4, 4, 7};
    vector<int> backs = {1, 3, 4, 1, 3};
    cout << flipgame(fronts, backs) << endl;  // Output: 2
}
```

### Java Solution

```java
import java.util.HashSet;
import java.util.Set;

public class CardFlippingGame {
    public int flipgame(int[] fronts, int[] backs) {
        Set<Integer> same = new HashSet<>();
        int n = fronts.length;

        for (int i = 0; i < n; ++i) {
            if (fronts[i] == backs[i]) {
                same.add(fronts[i]);
            }
        }

        int result = Integer.MAX_VALUE;

        for (int i = 0; i < n; ++i) {
            if (!same.contains(fronts[i])) {
                result = Math.min(result, fronts[i]);
            }
            if (!same.contains(backs[i])) {
                result = Math.min(result, backs[i]);
            }
        }

        return result == Integer.MAX_VALUE ? 0 : result;
    }

    public static void main(String[] args) {
        CardFlippingGame solution = new CardFlippingGame();
        int[] fronts = {1, 2, 4, 4, 7};
        int[] backs = {1, 3, 4, 1, 3};
        System.out.println(solution.flipgame(fronts, backs));  // Output: 2
    }
}
```

### Python Solution

```python
def flipgame(fronts, backs):
    same = set()

    for f, b in zip(fronts, backs):
        if f == b:
            same.add(f)

    result = float('inf')

    for x in fronts + backs:
        if x not in same:
            result = min(result, x)

    return result if result != float('inf') else 0

# Test
fronts = [1, 2, 4, 4, 7]
backs = [1, 3, 4, 1, 3]
print(flipgame(fronts, backs))  # Output: 2
```

### Complexity Analysis

**Time Complexity:** O(n)

> Reason: We traverse the fronts and backs arrays twice, which takes linear time.

**Space Complexity:** O(n)

> Reason: We use a set to store the same values, which in the worst case, could store all values in the array.

This solution efficiently finds the smallest number on the front of a card that is not on the back of any card by using a set for quick lookups and a linear traversal of the arrays. The time complexity is linear, and the space complexity is linear as well, making it suitable for large input sizes.

### References

**LeetCode Problem:** Card Flipping Game
