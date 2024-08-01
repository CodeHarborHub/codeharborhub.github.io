---
id: combinations
title: Combinations(LeetCode)
sidebar_label: 0077-Combinations
tags:
  - Backtracking
description: Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
---

## Problem Statement

Given two integers `n` and `k`, return all possible combinations of `k` numbers chosen from the range `[1, n]`.

You may return the answer in any order.

### Examples

**Example 1:**

```plaintext
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
```

**Example 2:**

```plaintext
Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.
```

### Constraints

- `1 <= n <= 20`
 `1 <= k <= n`

## Solution

### Approach 1: Minimum Window Substring (Java Implementation)

#### Algorithm

1. Initialization:
* Create a frequency map for characters in string `t`.
* Initialize counters and pointers: `counter` (number of characters still needed from `t`), `begin` (start pointer), `end` (end pointer), `d` (length of the minimum window), and `head` (starting index of the minimum window).
2. Expand the Window:
* Traverse through string `s` with the `end` pointer.
* If the current character is needed (frequency in `map` is greater than 0), decrement `counter`.
* Decrease the frequency of the current character in the map.
3. Contract the Window:
* When `counter` is 0 (all characters from `t` are found in the window):
  * Check if the current window is smaller than the previously found minimum window (`d`).
  * Move the `begin` pointer to find a smaller valid window.
  * If the character at `begin` is in `t`, increment its frequency in the map and increment `counter` if the frequency becomes positive.
4. Return Result:
* Return the minimum window substring.

#### Implementation

```Java
def backtrack(candidate):
    if find_solution(candidate):
        output(candidate)
        return
    
    # iterate all possible candidates
    for next_candidate in list_of_candidates:
        if is_valid(next_candidate):
            # try this partial candidate solution
            place(next_candidate)
            # explore further with the given candidate
            backtrack(next_candidate)
            # backtrack
            remove(next_candidate)
```

### Complexity Analysis

- **Time complexity**: $O(N)$
- **Space complexity**: $O(1)$

### Approach 2: Python Implementation

#### Algorithm

1. Initialization:
* Create a frequency map for characters in string `t`.
* Initialize counters and pointers: `needcnt` (number of characters still needed from `t`), `res` (tuple to store the start and end indices of the minimum window), and `start` (start pointer).
2. Expand the Window:
* Traverse through string `s` with the `end` pointer.
* If the current character is needed (frequency in `needstr` is greater than 0), decrement `needcnt`.
* Decrease the frequency of the current character in the map.
3. Contract the Window:
* When `needcnt` is 0 (all characters from `t` are found in the window):
  * Move the `start` pointer to find a smaller valid window.
  * If the character at `start` is in `t`, increment its frequency in the map and increment `needcnt` if the frequency becomes positive.
  * Update the `res` tuple if a smaller valid window is found.
4. Return Result:
* Return the minimum window substring using the indices stored in res.
  
#### Implementation 

```Python
def combine(self, n, k):   
		sol=[]
        def backtrack(remain,comb,nex):
			# solution found
            if remain==0:
                sol.append(comb.copy())
            else:
				# iterate through all possible candidates
                for i in range(nex,n+1):
					# add candidate
                    comb.append(i)
					#backtrack
                    backtrack(remain-1,comb,i+1)
					# remove candidate
                    comb.pop()
            
        backtrack(k,[],1)
        return sol
```

### Complexity Analysis

- **Time complexity**: $O(N)$
- **Space complexity**: $O(1)$

### Conclusion

Both approaches for finding the minimum window substring are efficient, operating with a time complexity of O(n) and a space complexity of O(1). The Java and Python implementations utilize similar sliding window techniques, adjusting the window size dynamically to find the smallest substring containing all characters of t. The primary difference lies in language-specific syntax and data structures, but the underlying algorithm remains consistent.
