---
id: faulty-keyboard
title: Faulty Keyboard
sidebar_label: 2810. Faulty Keyboard
tags: [Array, Simulation, C++, Python, Java]
description: "This is a solution to the Faulty Keyboard problem on LeetCode."
---

## Problem Description

Your laptop keyboard is faulty, and whenever you type a character `'i'` on it, it reverses the string that you have written. Typing other characters works as expected.

You are given a 0-indexed string `s`, and you type each character of `s` using your faulty keyboard.

Return the final string that will be present on your laptop screen.

### Examples

**Example 1:**

```
Input: s = "string"
Output: "rtsng"
Explanation: 
After typing first character, the text on the screen is "s".
After the second character, the text is "st". 
After the third character, the text is "str".
Since the fourth character is an 'i', the text gets reversed and becomes "rts".
After the fifth character, the text is "rtsn". 
After the sixth character, the text is "rtsng". 
Therefore, we return "rtsng".

```

**Example 2:**

```
Input: s = "poiinter"
Output: "ponter"
Explanation: 
After the first character, the text on the screen is "p".
After the second character, the text is "po". 
Since the third character you type is an 'i', the text gets reversed and becomes "op". 
Since the fourth character you type is an 'i', the text gets reversed and becomes "po".
After the fifth character, the text is "pon".
After the sixth character, the text is "pont". 
After the seventh character, the text is "ponte". 
After the eighth character, the text is "ponter". 
Therefore, we return "ponter".

```

### Constraints

- `1 <= s.length <= 100`
- `s[0] != 'i'`

## Solution for 1713. Faulty Keyboard

### Intuition
The provided C++ code iterates through each character of the input string, reversing the accumulated result string if the current character is `'i'`, or appending the character otherwise.

### Approach

1. Initialization: The method starts by obtaining the size of the input string s and initializing an empty string res to accumulate the result.
2. Iteration: It iterates through each character of `s` using a for-loop.
3. Condition Check: Inside the loop, it checks if the current character is `'i'`.
3. If `true`, it reverses the res string using the reverse function from the Standard Template Library (STL), which directly manipulates the string in place.
4. If `false`, it appends the current character to res.
5. Return: After completing the iteration through all characters of `s`, it returns the modified res string.


### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```python
             class Solution:
    def finalString(self, s: str) -> str:
        res = ""
        for char in s:
            if char == 'i':
                res = res[::-1]
            else:
                res += char
        return res
        

    ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```java
        class Solution {
    public String finalString(String s) {
        int n = s.length();
        StringBuilder res = new StringBuilder();
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == 'i') {
                res.reverse();
            } else {
                res.append(s.charAt(i));
            }
        }
        return res.toString();
    }
}
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```cpp
    class Solution {
public:
    string finalString(string s) {
        int n = s.size();
        string res = "";
        for (int i=0; i<n; i++)
        {
            if (s[i] == 'i')
                reverse(res.begin(), res.end());
            else 
                res += s[i];
        }

        return res;
    }
};

```
</TabItem>
</Tabs>

### Complexity Analysis

- Time Complexity: $ O(N*N) $
- Space Complexity: $ O(N)$

## References

- **LeetCode Problem**: [Faulty Keyboard](https://leetcode.com/problems/faulty-keyboard/description/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/faulty-keyboard/solutions/)
