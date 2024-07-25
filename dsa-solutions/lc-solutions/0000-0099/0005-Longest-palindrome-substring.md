---
id: longest-alindromic-substring
title: Longest Palindromic Substring(LeetCode)
sidebar_label: 0005-Longest Palindrome Substring
tags:
  - String
  - Dynamic Programming
description: Given a string s, return the longest palindromic substring in s.
sidebar_position: 5
---

## Problem Statement

Given a string `s`, return the longest palindromic substring in `s`.

### Examples

**Example 1:**

```plaintext
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

**Example 2:**

```plaintext
Input: s = "cbbd"
Output: "bb"
```

### Constraints

- `1 <= s.length <= 1000`
- `s` consist of only digits and English letters.

## Solution

### Approach 1: Check All Substrings

#### Intuition

We can start with a brute-force approach. We will simply check if each substring is a palindrome, and take the longest one that is.

#### Algorithm

1. Create a helper method `check(i, j)` to determine if a substring is a palindrome.
2. Use two pointers to iterate from the start and end of the substring towards the center.
3. If characters at both pointers are equal, move the pointers inward.
4. Use nested loops to check all possible substrings and use the helper method to determine if they are palindromes.
5. Keep track of the longest palindrome found.

#### Implementation

```python
def longestPalindrome(s: str) -> str:
    def check(l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l+1:r]

    longest = ""
    for i in range(len(s)):
        odd_palindrome = check(i, i)
        even_palindrome = check(i, i + 1)
        longest = max(longest, odd_palindrome, even_palindrome, key=len)

    return longest
```

### Complexity Analysis

- **Time complexity**: $O(n^3)$ - We check each substring, and checking each substring takes $O(n)$ time.
- **Space complexity**: $O(1)$ - We use a constant amount of extra space.

### Approach 2: Dynamic Programming

#### Intuition

If we know a substring is a palindrome, we can extend it if the characters on both ends match.

#### Algorithm

1. Initialize a 2D DP table with `False`.
2. Mark all single-character substrings as palindromes.
3. Check substrings of length 2 and mark them if characters match.
4. Use the table to extend palindromes to longer substrings.
5. Keep track of the longest palindrome found.

#### Implementation

```python
def longestPalindrome(s: str) -> str:
    n = len(s)
    dp = [[False] * n for _ in range(n)]
    longest = ""

    for i in range(n):
        dp[i][i] = True
        longest = s[i]

    for i in range(n-1):
        if s[i] == s[i+1]:
            dp[i][i+1] = True
            longest = s[i:i+2]

    for length in range(3, n+1):
        for i in range(n-length+1):
            j = i + length - 1
            if s[i] == s[j] and dp[i+1][j-1]:
                dp[i][j] = True
                longest = s[i:j+1]

    return longest
```

### Complexity Analysis

- **Time complexity**: $O(n^2)$ - We fill an `n * n` table.
- **Space complexity**: $O(n^2)$ - We use an `n * n` table to store the DP results.

### Approach 3: Expand From Centers

#### Intuition

A palindrome mirrors around its center. We can expand around potential centers to find palindromes.

#### Algorithm

1. Consider each character and pair of characters as potential centers.
2. Expand around each center to find the longest palindrome.
3. Keep track of the longest palindrome found.

#### Implementation

```python
def longestPalindrome(s: str) -> str:
    def expandAroundCenter(s, left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]

    if not s:
        return ""

    longest = s[0]

    for i in range(len(s)):
        odd_palindrome = expandAroundCenter(s, i, i)
        even_palindrome = expandAroundCenter(s, i, i + 1)
        longest = max(longest, odd_palindrome, even_palindrome, key=len)

    return longest
```

### Complexity Analysis

- **Time complexity**: $O(n^2)$ - We expand around each center, which takes $O(n)$ time.
- **Space complexity**: $O(1)$ - We use a constant amount of extra space.

### Approach 4: Manacher's Algorithm

#### Intuition

Manacher's algorithm can find the longest palindromic substring in linear time.

#### Algorithm

1. Transform the string to handle even-length palindromes.
2. Use a helper array to store the length of the palindrome at each position.
3. Use the properties of palindromes and the helper array to efficiently find the longest palindrome.

#### Implementation

```python
def longestPalindrome(s: str) -> str:
    if not s:
        return ""

    # Transform s into new string with inserted boundaries
    T = '#'.join(f"^{s}$")
    n = len(T)
    P = [0] * n
    C = R = 0

    for i in range(1, n - 1):
        P[i] = (R > i) and min(R - i, P[2 * C - i])
        while T[i + P[i] + 1] == T[i - P[i] - 1]:
            P[i] += 1
        if i + P[i] > R:
            C, R = i, i + P[i]

    max_len, center_index = max((n, i) for i, n in enumerate(P))
    return s[(center_index - max_len) // 2: (center_index + max_len) // 2]
```

### Complexity Analysis

- **Time complexity**: $O(n)$ - Manacher's algorithm runs in linear time.
- **Space complexity**: $O(n)$ - We use an array of length `n` to store the lengths of palindromes.

### Conclusion

We discussed four approaches to solve the "Longest Palindromic Substring" problem, each with varying complexities and trade-offs. The dynamic programming and center expansion approaches provide a good balance of simplicity and efficiency for practical use cases, while Manacher's algorithm offers the optimal theoretical performance.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['Yashgabani845', 'ajay-dhangar'].map(username => (
    <Author key={username} username={username} />
))}
</div>