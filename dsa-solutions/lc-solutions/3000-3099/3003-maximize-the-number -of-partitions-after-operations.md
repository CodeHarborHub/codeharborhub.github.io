---
id: maximize-the-number-of-partitions-after-operations
title: Maximize-the-Number-of-Partitions-After-Operations
sidebar_label: 3003 -Maximize the Number of Partitions After Operations
tags:
  - String
  - Dynammic Programming
  - BitManipulation
description: "This is a solution to the Maximize the Number of Partitions After Operations problem on LeetCode."
---

## Problem Description
You are given a 0-indexed string `s` and an integer `k`.

You are to perform the following partitioning operations until `s` is empty:

- Choose the longest prefix of `s` containing at most `k` distinct characters.
- Delete the prefix from `s` and increase the number of partitions by one. The remaining characters (if any) in `s` maintain their initial order.
Before the operations, you are allowed to change at most one index in `s` to another lowercase English letter.

Return an integer denoting the maximum number of resulting partitions after the operations by optimally choosing at most one index to change.

### Examples

**Example 1:**

```
Input: s = "accca", k = 2
Output: 3
Explanation: In this example, to maximize the number of resulting partitions, s[2] can be changed to 'b'.
s becomes "acbca".
The operations can now be performed as follows until s becomes empty:
- Choose the longest prefix containing at most 2 distinct characters, "acbca".
- Delete the prefix, and s becomes "bca". The number of partitions is now 1.
- Choose the longest prefix containing at most 2 distinct characters, "bca".
- Delete the prefix, and s becomes "a". The number of partitions is now 2.
- Choose the longest prefix containing at most 2 distinct characters, "a".
- Delete the prefix, and s becomes empty. The number of partitions is now 3.
Hence, the answer is 3.
It can be shown that it is not possible to obtain more than 3 partitions.

```

**Example 2:**

```
Input: s = "aabaab", k = 3
Output: 1
Explanation: In this example, to maximize the number of resulting partitions we can leave s as it is.
The operations can now be performed as follows until s becomes empty: 
- Choose the longest prefix containing at most 3 distinct characters, "aabaab".
- Delete the prefix, and s becomes empty. The number of partitions becomes 1. 
Hence, the answer is 1. 
It can be shown that it is not possible to obtain more than 1 partition.

```

### Constraints

- `1 <= s.length <= 10^4`
- `1 <= k <= 26`

## Solution for Maximize the Number of Partitions After Operations

### Intuition

Considering the constraints a dynamic programming approach will work.

A bitset can represent the presence or absence of each english letter, simplifying the process of tracking distinct characters in a given substring. With the help of bit manipulation such as bitwise OR operations, we can update the bitset efficiently as the algorithm iterates through the string.

The DP function simulates the process of choosing prefixes and determining the resulting partitions. The function takes into account the current index in the string, the current set of distinct characters, and a flag indicating whether a character change is still allowed. The base case of the recursion is when the end of the string is reached.

The logic within the DP function involves updating the set of distinct characters with the current character and evaluating whether the current partition violates the constraint. If the constraint is violated, the function explores the possibility of starting a new partition or considering the option to change a character at the current index. This consideration of character change is important in optimizing the number of partitions. The function explores all possible character changes when the option is available.

### Approach

1. Define a helper function `dp(index, current_set, can_change)` for dynamic programming, where:

 - index represents the current index in the string s.
 - current_set is a bitmask to track the set of distinct characters encountered so far.
 - can_change is a boolean indicating whether one index can be changed or not.

2. If the index has reached the end of the string `(index == len(s))`, return 0 as no further partitions can be made.

3. Calculate the index of the character at the current position `(character_index = ord(s[index]) - ord('a'))`.

4. Update the current_set by adding the current character to it `(current_set_updated = current_set | (1 << character_index))`.

5. Calculate the number of distinct characters in the updated set `(distinct_count = current_set_updated.bit_count())`.

6. Check if the distinct count exceeds the limit k:

  - If yes, set result to 1 plus the result of the recursive call with the next index and a new set 
    containing only the current character.
  - If no, set result to the result of the recursive call with the updated set and the next index.
  - If can_change is True, explore the possibility of changing the current character:

7. Iterate over all possible characters `(26 lowercase English letters)`.
8. Update the set with the new character `(new_set = current_set | (1 << new_character_index))`.
9. Calculate the distinct count for the new set.
10. If the distinct count exceeds `k`:
 - Update result to the maximum of its current value and 1 plus the recursive call with the next 
   index and a new set containing only the new character.
 - If not, update result to the maximum of its current value and the recursive call with the updated set and the next index.
11. Return the final result, which is the result of the initial call to the `dp` function with initial parameters (starting from the first character, an empty set, and the ability to change one index).



### Solution Code

#### Python

```py
class Solution:
    def maxPartitionsAfterOperations(self, s: str, k: int) -> int:
        @cache
        def dp(index, current_set, can_change):
            if index == len(s):
                return 0
            character_index = ord(s[index]) - ord('a')
            
            current_set_updated = current_set | (1 << character_index)
            distinct_count = current_set_updated.bit_count()

            if distinct_count > k:
                res = 1 + dp(index + 1, 1 << character_index, can_change)
            else:
                res = dp(index + 1, current_set_updated, can_change)

            if can_change:
                for new_char_index in range(26):
                    new_set = current_set | (1 << new_char_index)
                    new_distinct_count = new_set.bit_count()

                    if new_distinct_count > k:
                        res = max(res, 1 + dp(index + 1, 1 << new_char_index, False))
                    else:
                        res = max(res, dp(index + 1, new_set, False))
            return res

        return dp(0, 0, True) + 1


```

#### Java

```java
class Solution {
    private HashMap<Long, Integer> cache;
    private String s;
    private int k;

    public int maxPartitionsAfterOperations(String s, int k) {
        this.cache = new HashMap<>();
        this.s = s;
        this.k = k;
        return dp(0, 0, true) + 1;
    }

    private int dp(int index, int currentSet, boolean canChange) {
        long key = ((long) index << 27)
                | ((long) currentSet << 1)
                | (canChange ? 1 : 0);

        if (cache.containsKey(key)) {
            return cache.get(key);
        }

        if (index == s.length()) {
            return 0;
        }

        int characterIndex = s.charAt(index) - 'a';
        int currentSetUpdated = currentSet | (1 << characterIndex);
        int distinctCount = Integer.bitCount(currentSetUpdated);

        int res;
        if (distinctCount > k) {
            res = 1 + dp(index + 1, 1 << characterIndex, canChange);
        } else {
            res = dp(index + 1, currentSetUpdated, canChange);
        }

        if (canChange) {
            for (int newCharIndex = 0; newCharIndex < 26; newCharIndex++) {
                int newSet = currentSet | (1 << newCharIndex);
                int newDistinctCount = Integer.bitCount(newSet);

                if (newDistinctCount > k) {
                    res = Math.max(res, 1 + dp(index + 1, 1 << newCharIndex, false));
                } else {
                    res = Math.max(res, dp(index + 1, newSet, false));
                }
            }
        }

        cache.put(key, res);
        return res;
    }
}

```

#### C++

```cpp
class Solution {
public:
    unordered_map<long long, int> cache;
    string s;
    int k;

    int maxPartitionsAfterOperations(string s, int k) {
        this->s = s;
        this->k = k;
        return dp(0, 0, true) + 1;
    }

private:
    int dp(long long index, long long currentSet, bool canChange) {
        long long key = (index << 27) | (currentSet << 1) | canChange;

        if (cache.count(key)) {
            return cache[key];
        }

        if (index == s.size()) {
            return 0;
        }

        int characterIndex = s[index] - 'a';
        int currentSetUpdated = currentSet | (1 << characterIndex);
        int distinctCount = __builtin_popcount(currentSetUpdated);

        int res;
        if (distinctCount > k) {
            res = 1 + dp(index + 1, 1 << characterIndex, canChange);
        } else {
            res = dp(index + 1, currentSetUpdated, canChange);
        }

        if (canChange) {
            for (int newCharIndex = 0; newCharIndex < 26; ++newCharIndex) {
                int newSet = currentSet | (1 << newCharIndex);
                int newDistinctCount = __builtin_popcount(newSet);

                if (newDistinctCount > k) {
                    res = max(res, 1 + dp(index + 1, 1 << newCharIndex, false));
                } else {
                    res = max(res, dp(index + 1, newSet, false));
                }
            }
        }

        return cache[key] = res;
    }
};
```

#### Complexity Analysis

- Time complexity: $O(n*26)$, where n is the total number of elements in nums
- Space complexity:$O(n)$, where n is the total number of elements in nums
