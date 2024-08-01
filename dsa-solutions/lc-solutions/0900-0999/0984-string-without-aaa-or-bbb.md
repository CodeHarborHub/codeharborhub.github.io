---
id: string-without-aaa-or-bbb
title: String Without AAA or BBB
sidebar_label: 984-String Without AAA or BBB
tags:
  - Greedy
  - String
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the String Without AAA or BBB problem on LeetCode."
sidebar_position: 3
---

## Problem Description

Given two integers `a` and `b`, return any string `s` such that:

- `s` has length `a + b` and contains exactly `a` 'a' letters and exactly `b` 'b' letters.
- The substring 'aaa' does not occur in `s`.
- The substring 'bbb' does not occur in `s`.

### Examples

**Example 1:**

```
Input: a = 1, b = 2
Output: "abb"
Explanation: "abb", "bab", and "bba" are all correct answers.
```

**Example 2:**

```
Input: a = 4, b = 1
Output: "aabaa"
```

### Constraints

- `0 <= a, b <= 100`
- It is guaranteed that such a string `s` exists for the given `a` and `b`.

---

## Solution for String Without AAA or BBB Problem

To solve this problem, we need to construct a string of length `a + b` containing exactly `a` 'a' letters and `b` 'b' letters. The key is to ensure that no substring 'aaa' or 'bbb' is formed.

### Approach

1. **Greedy Construction:**
   - Start by determining the majority character (the one with the higher count).
   - Add two of the majority character if more than one remains, followed by one of the minority character.
   - If both characters have equal counts, alternate between the two to avoid 'aaa' or 'bbb'.

2. **Ensure No Consecutive Repetitions:**
   - Keep track of the previous two characters to ensure that adding another of the same character won't create three consecutive identical characters.

### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    string strWithout3a3b(int a, int b) {
        string result;
        while (a > 0 || b > 0) {
            bool writeA = false;
            int n = result.size();
            if (n >= 2 && result[n - 1] == result[n - 2]) {
                if (result[n - 1] == 'b') {
                    writeA = true;
                }
            } else {
                if (a >= b) {
                    writeA = true;
                }
            }

            if (writeA) {
                result += 'a';
                --a;
            } else {
                result += 'b';
                --b;
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
    public String strWithout3a3b(int a, int b) {
        StringBuilder result = new StringBuilder();
        while (a > 0 || b > 0) {
            boolean writeA = false;
            int n = result.length();
            if (n >= 2 && result.charAt(n - 1) == result.charAt(n - 2)) {
                if (result.charAt(n - 1) == 'b') {
                    writeA = true;
                }
            } else {
                if (a >= b) {
                    writeA = true;
                }
            }

            if (writeA) {
                result.append('a');
                --a;
            } else {
                result.append('b');
                --b;
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
    def strWithout3a3b(self, a: int, b: int) -> str:
        result = []
        while a > 0 or b > 0:
            writeA = False
            if len(result) >= 2 and result[-1] == result[-2]:
                if result[-1] == 'b':
                    writeA = True
            else:
                if a >= b:
                    writeA = True
            
            if writeA:
                result.append('a')
                a -= 1
            else:
                result.append('b')
                b -= 1
        
        return ''.join(result)
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(a + b)$, where `a` and `b` are the counts of 'a' and 'b' respectively. We iterate through each character once.
- **Space Complexity**: $O(a + b)$, for storing the result string.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>
```