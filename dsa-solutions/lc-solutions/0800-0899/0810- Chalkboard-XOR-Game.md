---
id: chalkboard-xor-game
title: Chalkboard XOR Game
sidebar_label: 810- Chalkboard XOR Game
tags:
  - Array
  - Math
  - Game Theory
description: Alice and Bob take turns erasing one number from the chalkboard. If removing a number makes the bitwise XOR of all remaining numbers become 0, the player who made that move loses. If at any player's turn, the XOR of all numbers on the chalkboard is already 0, that player wins. Alice starts first, and both play optimally to avoid losing.
sidebar_position: 0810
---

## Problem Description

You are given an array of integers `nums` represents the numbers written on a chalkboard.

Alice and Bob take turns erasing exactly one number from the chalkboard, with Alice starting first. If erasing a number causes the bitwise XOR of all the elements of the chalkboard to become `0`, then that player loses. The bitwise XOR of one element is that element itself, and the bitwise XOR of no elements is `0`.

Also, if any player starts their turn with the bitwise XOR of all the elements of the chalkboard equal to `0`, then that player wins.

Return `true` if and only if Alice wins the game, assuming both players play optimally.

### Example 1

- **Input:** `nums = [1,1,2]`
- **Output:** `false`
- **Explanation:** `Alice has two choices: erase 1 or erase 2.
If she erases 1, the nums array becomes [1, 2]. The bitwise XOR of all the elements of the chalkboard is 1 XOR 2 = 3. Now Bob can remove any element he wants, because Alice will be the one to erase the last element and she will lose.
If Alice erases 2 first, now nums become [1, 1]. The bitwise XOR of all the elements of the chalkboard is 1 XOR 1 = 0. Alice will lose.`

### Constraints

- `1 <= nums.length <= 1000`
- `0 <= nums[i] < 216`

## Approach

All even counts can be cancelled, similarly all odd counts will be cancelled but the thing which will remain is that if their exists even number of odd counts then only alice wins.

Their is an edge case that if already the xor of complete array is 0.

### Solution Code

#### Cpp

```Cpp
class Solution {
public:
    bool xorGame(vector<int>& nums) {
        ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);
        int oc = 0, XOR = 0;
        unordered_map<int, int> mp;
        for(auto &x : nums) ++mp[x], XOR ^= x;
        if(XOR == 0) return true;
        for(auto &x : mp) oc += (x.second % 2);
        return (oc % 2 == 0);
    }
};

```

- Time Complexity
  The time complexity is o(n).

- Space Complexity
  The space complexity is O(1).
