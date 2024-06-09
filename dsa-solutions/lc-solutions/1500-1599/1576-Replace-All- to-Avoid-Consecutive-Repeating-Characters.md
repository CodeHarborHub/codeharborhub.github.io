---
id: replace-all-s-to-avoid-consecutive-repeating-characters
title: Replace All ?'s to Avoid Consecutive Repeating Characters Solution
sidebar_label: 1576-Replace-All-Question-Marks-to-avoid-consecutive-repeating-characters
tags:
  - String
  - Greedy
  - LeetCode
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the Replace All ?'s to Avoid Consecutive Repeating Characters problem on LeetCode."
---

In this page, we will solve the Replace All ?'s to Avoid Consecutive Repeating Characters problem using multiple approaches: greedy and character replacement. We will provide the implementation of the solution in Python, JavaScript, TypeScript, Java, and C++.

## Problem Description

Given a string `s` containing only lowercase English letters and the '?' character, convert all the '?' characters into lowercase letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non-'?' characters.

Return the final string after replacing all the '?' characters.

It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

A string `a` is considered lexicographically smaller than a string `b` if in the first position where `a` and `b` differ, string `a` has a character strictly smaller than the corresponding character in `b`. For example, `"abcc"` is lexicographically smaller than `"abcd"` because the first position they differ is at the fourth character, and 'c' is smaller than 'd'.

### Examples

**Example 1:**

```plaintext
Input: s = "?zs"
Output: "azs"
Explanation: There are 25 possible characters for each position. The first position is '?', so we replace it with 'a'. The second position is 'z', so we keep it as is. The third position is 's', so we keep it as is.
```

**Example 2:**

```plaintext
Input: s = "ubv?w"
Output: "ubvaw"
Explanation: The first position is 'u', so we keep it as is. The second position is 'b', so we keep it as is. The third position is 'v', so we keep it as is. The fourth position is '?', so we replace it with 'a'. The fifth position is 'w', so we keep it as is.
```

**Example 3:**

```plaintext
Input: s = "j?qg??b"
Output: "jaqgacb"
```

**Example 4:**

```plaintext
Input: s = "??yw?ipkj?"
Output: "abywaipkja"
```

### Constraints

- $1 <= s.length <= 100$
- `s` consists only of lowercase English letters and the '?' character.

---

## Solution for Replace All ?'s to Avoid Consecutive Repeating Characters

### Intuition and Approach

The problem can be solved using different approaches. We will start with a greedy approach and then look at a character replacement approach.

<Tabs>
 <tabItem value="Greedy" label="Greedy">

### Approach 1: Greedy

We iterate through the string and whenever we encounter a '?', we replace it with the smallest character that is different from its neighboring characters.

#### Implementation
```jsx live
function modifyString() {
  const s = "?zs";

  const modifyString = function(s) {
    s = s.split('');
    const n = s.length;
    for (let i = 0; i < n; i++) {
      if (s[i] === '?') {
        let prev = i === 0 ? null : s[i - 1];
        let next = i === n - 1 ? null : s[i + 1];
        let candidate = 'a';
        while (candidate === prev || candidate === next) {
          candidate = String.fromCharCode(candidate.charCodeAt(0) + 1);
        }
        s[i] = candidate;
      }
    }
    return s.join('');
  };

  const result = modifyString(s);
  return (
    <div>
      <p>
        <b>Input:</b> s = {JSON.stringify(s)}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function modifyString(s) {
      s = s.split('');
      const n = s.length;
      for (let i = 0; i < n; i++) {
        if (s[i] === '?') {
          let prev = i === 0 ? null : s[i - 1];
          let next = i === n - 1 ? null : s[i + 1];
          let candidate = 'a';
          while (candidate === prev || candidate === next) {
            candidate = String.fromCharCode(candidate.charCodeAt(0) + 1);
          }
          s[i] = candidate;
        }
      }
      return s.join('');
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function modifyString(s: string): string {
      s = s.split('');
      const n = s.length;
      for (let i = 0; i < n; i++) {
        if (s[i] === '?') {
          let prev = i === 0 ? null : s[i - 1];
          let next = i === n - 1 ? null : s[i + 1];
          let candidate = 'a';
          while (candidate === prev || candidate === next) {
            candidate = String.fromCharCode(candidate.charCodeAt(0) + 1);
          }
          s[i] = candidate;
        }
      }
      return s.join('');
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def modifyString(self, s: str) -> str:
            s = list(s)
            n = len(s)
            for i in range(n):
                if s[i] == '?':
                    prev = s[i - 1] if i > 0 else None
                    next = s[i + 1] if i < n - 1 else None
                    candidate = 'a'
                    while candidate == prev or candidate == next:
                        candidate = chr(ord(candidate) + 1)
                    s[i] = candidate
            return ''.join(s)
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public String modifyString(String s) {
            char[] chars = s.toCharArray();
            int n = chars.length;
            for (int i = 0; i < n; i++) {
                if (chars[i] == '?') {
                    char prev = i == 0 ? 0 : chars[i - 1];
                    char next =

 i == n - 1 ? 0 : chars[i + 1];
                    char candidate = 'a';
                    while (candidate == prev || candidate == next) {
                        candidate++;
                    }
                    chars[i] = candidate;
                }
            }
            return new String(chars);
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        string modifyString(string s) {
            for (int i = 0; i < s.length(); ++i) {
                if (s[i] == '?') {
                    char prev = i == 0 ? 0 : s[i - 1];
                    char next = i == s.length() - 1 ? 0 : s[i + 1];
                    char candidate = 'a';
                    while (candidate == prev || candidate == next) {
                        candidate++;
                    }
                    s[i] = candidate;
                }
            }
            return s;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(n)$$
- Where `n` is the length of the string `s`.
- The time complexity is linear because we iterate through the string only once.
- The space complexity is also linear because we use an array to store the modified string.

</tabItem>
<tabItem value="Character Replacement" label="Character Replacement">

### Approach 2: Character Replacement

In this approach, we replace the '?' characters from left to right with characters based on the previous character and the next character. We maintain a variable to keep track of the previous character and update it while traversing the string.

#### Implementation

```jsx live
function modifyString() {
  const s = "?zs";

  const modifyString = function(s) {
    let prev = '';
    const n = s.length;
    const result = [];
    for (let i = 0; i < n; i++) {
      if (s[i] === '?') {
        let next = i === n - 1 ? '' : s[i + 1];
        let candidate = 'a';
        while (candidate === prev || candidate === next) {
          candidate = String.fromCharCode(candidate.charCodeAt(0) + 1);
        }
        result.push(candidate);
        prev = candidate;
      } else {
        result.push(s[i]);
        prev = s[i];
      }
    }
    return result.join('');
  };

  const result = modifyString(s);
  return (
    <div>
      <p>
        <b>Input:</b> s = {JSON.stringify(s)}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function modifyString(s) {
      let prev = '';
      const n = s.length;
      const result = [];
      for (let i = 0; i < n; i++) {
        if (s[i] === '?') {
          let next = i === n - 1 ? '' : s[i + 1];
          let candidate = 'a';
          while (candidate === prev || candidate === next) {
            candidate = String.fromCharCode(candidate.charCodeAt(0) + 1);
          }
          result.push(candidate);
          prev = candidate;
        } else {
          result.push(s[i]);
          prev = s[i];
        }
      }
      return result.join('');
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function modifyString(s: string): string {
      let prev = '';
      const n = s.length;
      const result = [];
      for (let i = 0; i < n; i++) {
        if (s[i] === '?') {
          let next = i === n - 1 ? '' : s[i + 1];
          let candidate = 'a';
          while (candidate === prev || candidate === next) {
            candidate = String.fromCharCode(candidate.charCodeAt(0) + 1);
          }
          result.push(candidate);
          prev = candidate;
        } else {
          result.push(s[i]);
          prev = s[i];
        }
      }
      return result.join('');
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def modifyString(self, s: str) -> str:
            prev = ''
            result = []
            for char in s:
                if char == '?':
                    next_char = s[s.index(char) + 1] if '?' in s[s.index(char) + 1:] else ''
                    candidate = 'a'
                    while candidate == prev or candidate == next_char:
                        candidate = chr(ord(candidate) + 1)
                    result.append(candidate)
                    prev = candidate
                else:
                    result.append(char)
                    prev = char
            return ''.join(result)
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public String modifyString(String s) {
            char prev = 0;
            StringBuilder result = new StringBuilder();
            for (int i = 0; i < s.length(); i++) {
                char current = s.charAt(i);
                if (current == '?') {
                    char next = i == s.length() - 1 ? 0 : s.charAt(i + 1);
                    char candidate = 'a';
                    while (candidate == prev || candidate == next) {
                        candidate++;
                    }
                    result.append(candidate);
                    prev = candidate;
                } else {
                    result.append(current);
                    prev = current;
                }
            }
            return result.toString();
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        string modifyString(string s) {
            char prev = 0;
            string result;
            for (char current : s) {
                if (current == '?') {
                    char next = s.empty() ? 0 : s[0];
                    char candidate = 'a';
                    while (candidate == prev || candidate == next) {
                        candidate++;
                    }
                    result += candidate;
                    prev = candidate;
                } else {
                    result += current;
                    prev = current;
                }
            }
            return result;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(n)$$
- Where `n` is the length of the string `s`.
- The time complexity is linear because we iterate through the string only once.
- The space complexity is also linear because we use an array to store the modified

 string.

</tabItem>
</Tabs>

:::tip Note

By using these approaches, we can efficiently solve the Replace All ?'s to Avoid Consecutive Repeating Characters problem for the given constraints.

:::
## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/)
- **Solution Link:** [Replace All ?'s to Avoid Consecutive Repeating Characters Solution on LeetCode](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/discuss/806961/JavaPython-3-Replace-?-with-other-than-adjacent-letters.-Clean-code)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)


