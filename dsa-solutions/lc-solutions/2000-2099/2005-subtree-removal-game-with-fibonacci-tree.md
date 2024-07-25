---
id: subtree-removal-game-with-fibonacci-tree
title: Subtree Removal Game with Fibonacci Tree
sidebar_label: 2005 Subtree Removal Game with Fibonacci Tree
tags:
  - Binary Tree
  - Dynamic Programming
  - Game Theory
  - LeetCode
description: "This is a solution to the Subtree Removal Game with Fibonacci Tree problem on LeetCode."
sidebar_position: 2005
---

## Problem Description

A Fibonacci tree is a binary tree created using the order function `order(n)`:

- `order(0)` is the empty tree.
- `order(1)` is a binary tree with only one node.
- `order(n)` is a binary tree that consists of a root node with the left subtree as `order(n - 2)` and the right subtree as `order(n - 1)`.

Alice and Bob are playing a game with a Fibonacci tree with Alice starting first. On each turn, a player selects a node and removes that node and its subtree. The player that is forced to delete the root loses.

Given the integer `n`, return `true` if Alice wins the game or `false` if Bob wins, assuming both players play optimally.

A subtree of a binary tree `tree` is a tree that consists of a node in `tree` and all of this node's descendants. The tree `tree` could also be considered as a subtree of itself.

### Examples

**Example 1:**

```
Input: `n = 3`
Output: `true`
Explanation:
Alice takes the node `1` in the right subtree.
Bob takes either the `1` in the left subtree or the `2` in the right subtree.
Alice takes whichever node Bob doesn't take.
Bob is forced to take the root node `3`, so Bob will lose.
Return `true` because Alice wins.
```

**Example 2:**
```
Input: `n = 1`
Output: `false`
Explanation:
Alice is forced to take the root node `1`, so Alice will lose.
Return `false` because Alice loses.
```

**Example 3:**

```
Input: `n = 2`
Output: `true`
Explanation:
Alice takes the node `1`.
Bob is forced to take the root node `2`, so Bob will lose.
Return `true` because Alice wins.
```

### Constraints

- `1 <= n <= 100`

### Approach

The solution to this problem relies on game theory. We need to determine whether Alice can force a win by always making optimal moves. 

The Fibonacci tree grows in a specific way, and we can use dynamic programming to determine the winner for any given `n`.

We can observe that:
- For `n = 1`, Bob wins because Alice is forced to remove the root node.
- For `n = 2`, Alice wins because she can remove the single node in the right subtree, forcing Bob to remove the root node.

This pattern can be extended. We'll use a dynamic programming array `dp` where `dp[i]` is `true` if Alice wins with a tree of order `i`, and `false` otherwise.

The recursion relies on two main observations:
1. If `dp[n-1]` is `false` or `dp[n-2]` is `false`, then `dp[n]` should be `true` because Alice can force Bob into a losing position.
2. Otherwise, `dp[n]` is `false`.

#### C++

```cpp
class Solution {
public:
    bool aliceWins(int n) {
        // Initialize a dp array where dp[i] will be true if Alice wins with a tree of order i
        vector<bool> dp(n + 1, false);

        // Base cases
        if (n >= 1) dp[1] = false; // Bob wins if there's only one node
        if (n >= 2) dp[2] = true;  // Alice wins if there are two nodes

        // Fill the dp array based on the previous results
        for (int i = 3; i <= n; ++i) {
            dp[i] = !dp[i - 1] || !dp[i - 2];
        }

        // The result for the given n is stored in dp[n]
        return dp[n];
    }
};

// Example usage
int main() {
    Solution solution;
    // Test the function with examples
    bool result1 = solution.aliceWins(3); // Expected output: true
    bool result2 = solution.aliceWins(1); // Expected output: false
    bool result3 = solution.aliceWins(2); // Expected output: true

    // Print the results
    printf("Result for n = 3: %s\n", result1 ? "true" : "false");
    printf("Result for n = 1: %s\n", result2 ? "true" : "false");
    printf("Result for n = 2: %s\n", result3 ? "true" : "false");

    return 0;
}
```

#### Python

```python
def alice_wins(n: int) -> bool:
    dp = [False] * (n + 1)
    if n >= 1:
        dp[1] = False  # Base case: Bob wins if there's only one node
    if n >= 2:
        dp[2] = True   # Base case: Alice wins if there are two nodes

    for i in range(3, n + 1):
        dp[i] = not dp[i - 1] or not dp[i - 2]

    return dp[n]

# Test the function with examples
print(alice_wins(3))  # Output: true
print(alice_wins(1))  # Output: false
print(alice_wins(2))  # Output: true

```

