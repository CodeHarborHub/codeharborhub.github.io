---
id: length-of-the-longest-alphabetical-continuous-substring
title:  Length of the Longest Alphabetical Continuous Substring
sidebar_label: 2414. Length of the Longest Alphabetical Continuous Substring
tags:
- string
description: "This is a solution to the Length of the Longest Alphabetical Continuous Substring problem on LeetCode."
---

## Problem Description
An alphabetical continuous string is a string consisting of consecutive letters in the alphabet. In other words, it is any substring of the string "abcdefghijklmnopqrstuvwxyz".

For example, "abc" is an alphabetical continuous string, while "acb" and "za" are not.
Given a string s consisting of lowercase letters only, return the length of the longest alphabetical continuous substring.

### Examples

**Example 1:**

```
Input: s = "abacaba"
Output: 2
Explanation: There are 4 distinct continuous substrings: "a", "b", "c" and "ab".
"ab" is the longest continuous substring.
```

**Example 2:**
```
Input: s = "abcde"
Output: 5
Explanation: "abcde" is the longest continuous substring.
```

### Constraints

- `1 <= s.length <= 10^5`

## Solution for Frequency of the Longest Alphabetical Continuous Substring
### Approach 
1. **Initialize Variables**:
    - `len`: Current length of the contiguous substring.
    - `maxLen`: Maximum length of the contiguous substring found so far.
    - `prev`: ASCII value of the previous character.
    - `i`: Current index in the string.

2. **Edge Case**:
    - If the string length is 1, return 1 because the longest contiguous substring is the string itself.

3. **Iterate Through the String**:
    - Use a `while` loop to iterate through the string.
    - If `prev` is `-1` (indicating the start), set `prev` to the ASCII value of the current character and increment `i`.
    - If the ASCII value of the current character minus `prev` equals 1, it means the characters are in consecutive order.
        - Continue this check until the characters are no longer in consecutive order.
        - Update `maxLen` with the length of the contiguous substring found.
        - Reset `prev` to `-1` to start checking the next possible contiguous substring.
    - If the characters are not in consecutive order, update `prev` to the ASCII value of the current character and increment `i`.

4. **Return Result**:
    - After iterating through the string, return `maxLen`.

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
        var longestContinuousSubstring = function(s) {
        let len = 1;
        let maxLen = 1;
        let prev = -1;
        let i = 0;

        if (s.length === 1) return 1;

        while (i < s.length) {
            if (prev === -1) {
                prev = s.charCodeAt(i);
                i++;
            } else if (s.charCodeAt(i) - prev === 1) {
                let k = i;
                while (i < s.length && s.charCodeAt(i) - prev === 1) {
                    prev = s.charCodeAt(i);
                    i++;
                }
                maxLen = Math.max(maxLen, i - k + 1);
                prev = -1;
            } else {
                prev = s.charCodeAt(i);
                i++;
            }
        }

        return maxLen;
    };

      const input = "abacaba"

      const output = longestContinuousSubstring(input)
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $ O(n) $ 
    - Space Complexity: $ O(1) $ 

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
   var longestContinuousSubstring = function(s) {
    let len = 1;
    let maxLen = 1;
    let prev = -1;
    let i = 0;

    if (s.length === 1) return 1;

    while (i < s.length) {
        if (prev === -1) {
            prev = s.charCodeAt(i);
            i++;
        } else if (s.charCodeAt(i) - prev === 1) {
            let k = i;
            while (i < s.length && s.charCodeAt(i) - prev === 1) {
                prev = s.charCodeAt(i);
                i++;
            }
            maxLen = Math.max(maxLen, i - k + 1);
            prev = -1;
        } else {
            prev = s.charCodeAt(i);
            i++;
        }
    }

    return maxLen;
};

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   function longestContinuousSubstring(s: string): number {
    let len = 1;
    let maxLen = 1;
    let prev: number | null = -1;
    let i = 0;

    if (s.length === 1) return 1;

    while (i < s.length) {
        if (prev === -1) {
            prev = s.charCodeAt(i);
            i++;
        } else if (s.charCodeAt(i) - prev === 1) {
            let k = i;
            while (i < s.length && s.charCodeAt(i) - prev === 1) {
                prev = s.charCodeAt(i);
                i++;
            }
            maxLen = Math.max(maxLen, i - k + 1);
            prev = -1;
        } else {
            prev = s.charCodeAt(i);
            i++;
        }
    }

    return maxLen;
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   class Solution:
    def longestContinuousSubstring(self, s: str) -> int:
        len = 1
        maxLen = 1
        prev = -1
        i = 0

        if len(s) == 1:
            return 1

        while i < len(s):
            if prev == -1:
                prev = ord(s[i])
                i += 1
            elif ord(s[i]) - prev == 1:
                k = i
                while i < len(s) and ord(s[i]) - prev == 1:
                    prev = ord(s[i])
                    i += 1
                maxLen = max(maxLen, i - k + 1)
                prev = -1
            else:
                prev = ord(s[i])
                i += 1

        return maxLen

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   class Solution {
    public int longestContinuousSubstring(String s) {
        int len = 1;
        int maxLen = 1;
        int prev = -1;
        int i = 0;

        if (s.length() == 1) return 1;

        while (i < s.length()) {
            if (prev == -1) {
                prev = s.charAt(i);
                i++;
            } else if (s.charAt(i) - prev == 1) {
                int k = i;
                while (i < s.length() && s.charAt(i) - prev == 1) {
                    prev = s.charAt(i);
                    i++;
                }
                maxLen = Math.max(maxLen, i - k + 1);
                prev = -1; 
            } else {
                prev = s.charAt(i);
                i++;
            }
        }

        return maxLen;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    int longestContinuousSubstring(string s) {
        int len = 1;
        int maxLen = 1; 
        int prev = -1;
        int i = 0;

        if (s.size() == 1) return 1;

        while (i < s.size()) {
            if (prev == -1) {
                prev = s[i];
                i++;
            } else if (s[i] - prev == 1) {
                int k = i;
                while (i < s.size() && s[i] - prev == 1) {
                    prev = s[i];
                    i++;
                }
                maxLen = max(maxLen, i - k + 1);
                prev = -1; 
            } else {
                prev = s[i];
                i++;
            }
        }

        return maxLen;
    }
};

    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Length of the Longest Alphabetical Continuous Substring](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/description/)


