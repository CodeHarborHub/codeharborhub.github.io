---
id: palindromic-substrings
title: Palindromic Substrings
sidebar_label: 647-Palindromic Substrings
tags:
  - String Manipulation
  - Dynamic Programming
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Palindromic Substrings problem on LeetCode."
sidebar_position: 11
---

## Problem Description

Given a string `s`, return the number of palindromic substrings in it.A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

### Examples

**Example 1:**

```
Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
```

**Example 2:**

```
Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```

### Constraints

- `1 <= s.length <= 1000`
- `s` consists of lowercase English letters.

---

## Solution for Count Palindromic Substrings Problem

To solve this problem, we need to count all the palindromic substrings in the given string `s`.

### Approach: Expand Around Center

The idea is to consider each possible center of a palindrome and expand outwards as long as we have a valid palindrome. For each center, count the palindromic substrings.

#### Steps:

1. **Identify Centers:**
   - There are 2*n - 1 centers for palindromes in a string of length `n` (including the space between characters for even-length palindromes).
   
2. **Expand Around Center:**
   - For each center, expand outwards to check if the substring is a palindrome. If it is, increment the count.

### Brute Force Approach

The brute force approach involves checking all substrings and verifying if each substring is a palindrome. This is inefficient and has a time complexity of $O(n^3)$.

### Optimized Approach

The optimized approach, using the Expand Around Center method, has a time complexity of $O(n^2)$.

### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    int countSubstrings(string s) {
        int n = s.size();
        int count = 0;

        for (int i = 0; i < n; ++i) {
            count += countPalindromesAroundCenter(s, i, i); // Odd length
            count += countPalindromesAroundCenter(s, i, i + 1); // Even length
        }

        return count;
    }

private:
    int countPalindromesAroundCenter(const string& s, int left, int right) {
        int count = 0;

        while (left >= 0 && right < s.size() && s[left] == s[right]) {
            ++count;
            --left;
            ++right;
        }

        return count;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int countSubstrings(String s) {
        int n = s.length();
        int count = 0;

        for (int i = 0; i < n; i++) {
            count += countPalindromesAroundCenter(s, i, i); // Odd length
            count += countPalindromesAroundCenter(s, i, i + 1); // Even length
        }

        return count;
    }

    private int countPalindromesAroundCenter(String s, int left, int right) {
        int count = 0;

        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            count++;
            left--;
            right++;
        }

        return count;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def countSubstrings(self, s: str) -> int:
        n = len(s)
        count = 0

        for i in range(n):
            count += self.countPalindromesAroundCenter(s, i, i) # Odd length
            count += self.countPalindromesAroundCenter(s, i, i + 1) # Even length

        return count

    def countPalindromesAroundCenter(self, s: str, left: int, right: int) -> int:
        count = 0

        while left >= 0 and right < len(s) and s[left] == s[right]:
            count += 1
            left -= 1
            right += 1

        return count
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(n^2)$, where `n` is the length of the input string `s`.
- **Space Complexity**: $O(1)$, as we only use constant extra space.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>