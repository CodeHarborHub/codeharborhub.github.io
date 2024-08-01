---
id: reverse-only-letters
title: Reverse Only Letters
sidebar_label: 0917 - Reverse Only Letters
tags:
  - Two Pointers
  - String
  - Stack
description: "This is a solution to the Reverse Only Letters problem on LeetCode."
---

## Problem Description

Given a string `s`, reverse the string according to the following rules:

- All the characters that are not English letters remain in the same position.
- All the English letters (lowercase or uppercase) should be reversed.

Return `s` after reversing it.

### Examples

**Example 1:**

```
Input: s = "ab-cd"
Output: "dc-ba"
```
**Example 2:**

```
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
```

### Constraints

- $1 \leq s.length \leq 100$
- `s` consists of characters with ASCII values in the range `[33, 122]`.
- `s` does not contain `'\"'` or `'\\'`.

## Solution for Reverse Only Letters

## Approach: Stack of Letters
### Intuition and Algorithm

Collect the letters of `S` separately into a stack, so that popping the stack reverses the letters. (Alternatively, we could have collected the letters into an array and reversed the array.)

Then, when writing the characters of `S`, any time we need a letter, we use the one we have prepared instead.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    string reverseOnlyLetters(string S) {
        stack<char> letters;
        for (char c : S)
            if (isalpha(c))
                letters.push(c);

        string ans;
        for (char c : S) {
            if (isalpha(c))
                ans += letters.top(), letters.pop();
            else
                ans += c;
        }

        return ans;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public String reverseOnlyLetters(String S) {
        Stack<Character> letters = new Stack();
        for (char c: S.toCharArray())
            if (Character.isLetter(c))
                letters.push(c);

        StringBuilder ans = new StringBuilder();
        for (char c: S.toCharArray()) {
            if (Character.isLetter(c))
                ans.append(letters.pop());
            else
                ans.append(c);
        }

        return ans.toString();
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def reverseOnlyLetters(self, S):
        letters = [c for c in S if c.isalpha()]
        ans = []
        for c in S:
            if c.isalpha():
                ans.append(letters.pop())
            else:
                ans.append(c)
        return "".join(ans)
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(N)$

> **Reason**: where `N` is the length of `S`.

#### Space Complexity: $O(N)$

## Approach: Reverse Pointer
### Intuition

Write the characters of `S` one by one. When we encounter a letter, we want to write the next letter that occurs if we iterated through the string backwards.

So we do just that: keep track of a pointer `j` that iterates through the string backwards. When we need to write a letter, we use it.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <string>
#include <cctype>
#include <sstream>

class Solution {
public:
    std::string reverseOnlyLetters(std::string S) {
        std::stringstream ans;
        int j = S.length() - 1;
        for (int i = 0; i < S.length(); ++i) {
            if (std::isalpha(S[i])) {
                while (!std::isalpha(S[j]))
                    j--;
                ans << S[j--];
            } else {
                ans << S[i];
            }
        }

        return ans.str();
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public String reverseOnlyLetters(String S) {
        StringBuilder ans = new StringBuilder();
        int j = S.length() - 1;
        for (int i = 0; i < S.length(); ++i) {
            if (Character.isLetter(S.charAt(i))) {
                while (!Character.isLetter(S.charAt(j)))
                    j--;
                ans.append(S.charAt(j--));
            } else {
                ans.append(S.charAt(i));
            }
        }

        return ans.toString();
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def reverseOnlyLetters(self, S):
        ans = []
        j = len(ans) - 1
        for i, x in enumerate(S):
            if x.isalpha():
                while not S[j].isalpha():
                    j -= 1
                ans.append(S[j])
                j -= 1
            else:
                ans.append(x)
        
        return "".join(ans)
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(N)$

> **Reason**: where `N` is the length of `S`.

#### Space Complexity: $O(N)$

## Video Solution 

<LiteYouTubeEmbed
    id="M2TwbZCpJpw"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="LeetCode Reverse Only Letters Solution Explained - Java"
    poster="hqdefault"
    webp />

## References

- **LeetCode Problem**: [Reverse Only Letters](https://leetcode.com/problems/reverse-only-letters/description/)

- **Solution Link**: [Reverse Only Letters](https://leetcode.com/problems/reverse-only-letters/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>