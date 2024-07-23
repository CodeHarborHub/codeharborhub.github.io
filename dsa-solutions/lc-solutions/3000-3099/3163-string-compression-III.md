---
id: string-compression
title: String Compression Solution
sidebar_label: String Compression
tags:
  - String Compression
  - Brute Force
  - Optimized
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the String Compression problem on LeetCode."
sidebar_position: 2
---

In this tutorial, we will solve the String Compression problem using two different approaches: brute force and optimized. We will provide the implementation of the solution in C++, Java, and Python.

## Problem Description

Given a string `word`, compress it using the following algorithm:

Begin with an empty string `comp`. While `word` is not empty, use the following operation:
Remove a maximum length prefix of `word` made of a single character `c` repeating at most 9 times.
Append the length of the prefix followed by `c` to `comp`.

Return the string `comp`.

### Examples

**Example 1:**

```
Input: word = "abcde"
Output: "1a1b1c1d1e"
```

**Example 2:**

```
Input: word = "aaaaaaaaaaaaaabb"
Output: "9a5a2b"
```

### Constraints

- `1 <= word.length <= 2 * 105`
- `word` consists only of lowercase English letters.

---

## Solution for String Compression Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized approach. The brute force approach directly iterates through the string and constructs the result, while the optimized approach efficiently handles consecutive characters.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1: Brute Force (Naive)

The brute force approach iterates through each character of the string, counts consecutive characters up to 9, and appends the count followed by the character to the result string.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    string compressString(string word) {
        string comp;
        int i = 0;
        while (i < word.length()) {
            char c = word[i];
            int count = 0;
            while (i < word.length() && word[i] == c && count < 9) {
                count++;
                i++;
            }
            comp += to_string(count) + c;
        }
        return comp;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public String compressString(String word) {
        StringBuilder comp = new StringBuilder();
        int i = 0;
        while (i < word.length()) {
            char c = word.charAt(i);
            int count = 0;
            while (i < word.length() && word.charAt(i) == c && count < 9) {
                count++;
                i++;
            }
            comp.append(count).append(c);
        }
        return comp.toString();
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def compressString(self, word: str) -> str:
        comp = []
        i = 0
        while i < len(word):
            c = word[i]
            count = 0
            while i < len(word) and word[i] == c and count < 9:
                count += 1
                i += 1
            comp.append(f"{count}{c}")
        return ''.join(comp)
```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$
- Where `n` is the length of `word`.
- The time complexity is $O(n)$ because we iterate through the string once.
- The space complexity is $O(n)$ because we store the result in a new string.

</tabItem>
<tabItem value="Optimized" label="Optimized">

### Approach 2: Optimized Approach

The optimized approach is similar to the brute force but handles the prefix length more efficiently, ensuring it counts up to 9 characters in each iteration.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    string compressString(string word) {
        string comp;
        int i = 0;
        while (i < word.length()) {
            char c = word[i];
            int count = 1;
            while (i + count < word.length() && word[i + count] == c && count < 9) {
                count++;
            }
            comp += to_string(count) + c;
            i += count;
        }
        return comp;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public String compressString(String word) {
        StringBuilder comp = new StringBuilder();
        int i = 0;
        while (i < word.length()) {
            char c = word.charAt(i);
            int count = 1;
            while (i + count < word.length() && word.charAt(i + count) == c && count < 9) {
                count++;
            }
            comp.append(count).append(c);
            i += count;
        }
        return comp.toString();
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def compressString(self, word: str) -> str:
        comp = []
        i = 0
        while i < len(word):
            c = word[i]
            count = 1
            while i + count < len(word) and word[i + count] == c and count < 9:
                count += 1
            comp.append(f"{count}{c}")
            i += count
        return ''.join(comp)
```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$
- Where `n` is the length of `word`.
- The time complexity is $O(n)$ because we iterate through the string once.
- The space complexity is $O(n)$ because we store the result in a new string.

</tabItem>
</Tabs>

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>
