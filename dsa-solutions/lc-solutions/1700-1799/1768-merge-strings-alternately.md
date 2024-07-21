---

id: merge-strings-alternately
title: Merge Strings Alternately Solution
sidebar_label: 1768 - Merge Strings Alternately
tags:
  - Merge Strings
  - Two Pointers
  - Brute Force
  - LeetCode
  - JavaScript
  - TypeScript
  - Python
  - Java
  - C++
description: "This is a solution to the Merge Strings Alternately problem on LeetCode."
sidebar_position: 2

---

In this tutorial, we will solve the Merge Strings Alternately problem using two different approaches: brute force and two-pointer technique. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, and C++.

## Problem Description

You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

### Examples

**Example 1:**

```plaintext
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
```

**Example 2:**

```plaintext
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
```

**Example 3:**

```plaintext
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
```

### Constraints

- $1 \leq \text{word1.length}, \text{word2.length} \leq 100$
- `word1` and `word2` consist of lowercase English letters.

---

## Solution for Merge Strings Alternately Problem

### Intuition and Approach

The problem can be solved using a brute force approach or a two-pointer technique. The brute force approach directly iterates through the strings and constructs the result, while the two-pointer technique uses two pointers to merge the strings in an alternating manner.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1: Brute Force (Naive)

The brute force approach iterates through each character of both strings and appends them alternately to the result string. If one string is exhausted before the other, the remaining characters of the longer string are appended to the result string.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        string result;
        int i = 0, j = 0;
        while (i < word1.length() && j < word2.length()) {
            result += word1[i++];
            result += word2[j++];
        }
        while (i < word1.length()) {
            result += word1[i++];
        }
        while (j < word2.length()) {
            result += word2[j++];
        }
        return result;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder result = new StringBuilder();
        int i = 0, j = 0;
        while (i < word1.length() && j < word2.length()) {
            result.append(word1.charAt(i++));
            result.append(word2.charAt(j++));
        }
        while (i < word1.length()) {
            result.append(word1.charAt(i++));
        }
        while (j < word2.length()) {
            result.append(word2.charAt(j++));
        }
        return result.toString();
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = []
        i, j = 0, 0
        while i < len(word1) and j < len(word2):
            result.append(word1[i])
            result.append(word2[j])
            i += 1
            j += 1
        while i < len(word1):
            result.append(word1[i])
            i += 1
        while j < len(word2):
            result.append(word2[j])
            j += 1
        return ''.join(result)
```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n + m)$
- Space Complexity: $O(n + m)$
- Where `n` is the length of `word1` and `m` is the length of `word2`.
- The time complexity is $O(n + m)$ because we iterate through both strings once.
- The space complexity is $O(n + m)$ because we store the result in a new string.
- This approach is efficient and straightforward.

</tabItem>
<tabItem value="Two Pointer" label="Two Pointer">

### Approach 2: Using Two Pointers

The two-pointer approach uses two pointers to iterate through both strings simultaneously, appending characters alternately to the result string. When one string is exhausted, the remaining characters of the other string are appended to the result string.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        string result;
        int i = 0, j = 0;
        while (i < word1.length() || j < word2.length()) {
            if (i < word1.length()) {
                result += word1[i++];
            }
            if (j < word2.length()) {
                result += word2[j++];
            }
        }
        return result;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder result = new StringBuilder();
        int i = 0, j = 0;
        while (i < word1.length() || j < word2.length()) {
            if (i < word1.length()) {
                result.append(word1.charAt(i++));
            }
            if (j < word2.length()) {
                result.append(word2.charAt(j++));
            }
        }
        return result.toString();
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = []
        i, j = 0, 0
        while i < len(word1) or j < len(word2):
            if i < len(word1):
                result.append(word1[i])
                i += 1
            if j < len(word2):
                result.append(word2[j])
                j += 1
        return ''.join(result)
```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n + m)$
- Space Complexity: $O(n + m)$
- Where `n` is the length of `word1` and `m` is the length of `word2`.
- The time complexity is $O(n + m)$ because we iterate through both strings once.
- The space complexity is $O(n + m)$ because we store the result in a new string.
- This approach is efficient and straightforward.

</tabItem>
</Tabs>

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>